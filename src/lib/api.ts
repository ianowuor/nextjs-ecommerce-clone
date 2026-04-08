import { getAccessToken, getRefreshToken, setTokens } from "@/lib/auth";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:8000";

export type LoginPayload = { email: string; password: string };
export type RegisterPayload = {
  full_name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
};

type TokenResponse = {
  access_token: string;
  refresh_token?: string;
  token_type: string;
};

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: string;
  image_url?: string;
};

export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
  product?: Product;
};

export type OrderItem = {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  product?: Product;
};

export type Order = {
  id: number;
  user_id: number;
  total_amount: number; // Updated to match Postman output
  status: string;
  created_at: string;
  // ... other fields
};

export type OrderSummary = {
  id: number;
  total_amount: number; // Updated to match Postman output
  status: string;
  created_at: string;
};

export type OrderCreate = {
  shipping_address: string;
  payment_method?: string;
};

async function request<T>(
  path: string,
  init: RequestInit = {},
  useAuth = false,
): Promise<T> {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE_URL}${normalizedPath}`;

  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");

  if (useAuth) {
    const token = getAccessToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  try {
    const response = await fetch(url, { ...init, headers });

    if (!response.ok) {
      // Handle Token Expiry (401) - Potential for Auto-Refresh here
      if (response.status === 401 && useAuth) {
         console.warn("Unauthorized request. Token might be expired.");
      }

      let errorMessage = `HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorData.message || errorMessage;
      } catch (e) {
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    // For 204 No Content responses
    if (response.status === 204) return {} as T;

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      console.error("Network Error: Check if FastAPI is running at", url);
      throw new Error("Could not connect to the server. Please check your connection.");
    }
    throw error;
  }
}

export async function register(payload: RegisterPayload): Promise<void> {
  await request("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function login(payload: LoginPayload): Promise<void> {
  const tokenData = await request<TokenResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  setTokens(tokenData.access_token, tokenData.refresh_token || "");
}

export async function refreshAccessToken(): Promise<void> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error("Missing refresh token");

  const tokenData = await request<TokenResponse>("/auth/refresh", {
    method: "POST",
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  setTokens(tokenData.access_token, tokenData.refresh_token || "");
}

export async function getProducts(): Promise<Product[]> {
  return request<Product[]>("/products");
}

export async function getCartItems(): Promise<CartItem[]> {
  return request<CartItem[]>("/cart/items", {}, true);
}

export async function addToCart(productId: number, quantity: number): Promise<CartItem> {
  return request<CartItem>(
    "/cart/items",
    {
      method: "POST",
      body: JSON.stringify({ product_id: productId, quantity }),
    },
    true,
  );
}

export async function createOrder(orderData: OrderCreate): Promise<Order> {
  // Your FastAPI expects POST /orders/
  return request<Order>(
    "/orders/",
    {
      method: "POST",
      body: JSON.stringify(orderData),
    },
    true,
  );
}

export async function getOrders(): Promise<OrderSummary[]> {
  return request<OrderSummary[]>("/orders/", {}, true);
}

export async function getOrder(orderId: number): Promise<Order> {
  return request<Order>(`/orders/${orderId}`, {}, true);
}

export async function cancelOrder(orderId: number): Promise<{ message: string }> {
  return request<{ message: string }>(
    `/orders/${orderId}/status`,
    {
      method: "PUT",
      body: JSON.stringify({ status: "cancelled" }),
    },
    true,
  );
}