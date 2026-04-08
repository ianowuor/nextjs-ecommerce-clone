"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "@/lib/auth";
import { getCartItems } from "@/lib/api";

interface User {
  id: number;
  full_name: string;
  email: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  login: (tokens: { access: string; refresh: string }) => void;
  logout: () => void;
  loading: boolean;
  cartCount: number;
  updateCartCount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const items = await getCartItems();
        setCartCount(items.length);
      }
    } catch (error) {
      console.error("Failed to update cart count:", error);
    }
  };

  const login = (tokens: { access: string; refresh: string }) => {
    setTokens(tokens.access, tokens.refresh);
    // In a real app, you'd decode the token to get user info
    // For now, we'll simulate getting user data
    const mockUser: User = {
      id: 1,
      full_name: "John Doe",
      email: "john@example.com",
      avatar_url: undefined,
    };
    setUser(mockUser);
    setLoading(false);
  };

  const logout = () => {
    clearTokens();
    setUser(null);
    setCartCount(0);
    setLoading(false);
  };

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      // User is logged in
      login({ access: token, refresh: getRefreshToken() || "" });
      updateCartCount();
    } else {
      // User is not logged in
      logout();
    }
  }, []);

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
    cartCount,
    updateCartCount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
