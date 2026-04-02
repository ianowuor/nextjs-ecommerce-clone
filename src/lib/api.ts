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

type Product = {
  id: number;
  name: string;
  description?: string;
  price: string;
  image_url?: string;
};

type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
  product?: Product;
};

async function request<T>(
  path: string,
  init: RequestInit = {},
  useAuth = false,
): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");

  if (useAuth) {
    const token = getAccessToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, { ...init, headers });
  if (!response.ok) {
    let detail = "Request failed";
    try {
      const body = await response.json();
      detail = body?.detail ?? detail;
    } catch {
      // ignore json parse errors
    }
    throw new Error(detail);
  }
  return (await response.json()) as T;
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
  setTokens(tokenData.access_token, tokenData.refresh_token);
}

export async function refreshAccessToken(): Promise<void> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) throw new Error("Missing refresh token");

  const tokenData = await request<TokenResponse>("/auth/refresh", {
    method: "POST",
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  setTokens(tokenData.access_token, tokenData.refresh_token);
}

export async function getProducts(): Promise<Product[]> {
  return request<Product[]>("/products");
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
