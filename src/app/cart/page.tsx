/* src/app/cart/page.tsx */
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import Breadcrumb from "@/components/common/Breadcrumbs";
import { addToCart, getCartItems, type CartItem } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartUpdateError, setCartUpdateError] = useState<string | null>(null);

  const reload = async () => {
    setCartUpdateError(null);
    const data = await getCartItems();
    setCartItems(data);
  };

  const updateQuantity = async (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartUpdateError(null);
    try {
      const currentQuantity = cartItems.find(item => item.product_id === productId)?.quantity || 0;
      const difference = newQuantity - currentQuantity;
      
      if (difference > 0) {
        // Add more items
        await addToCart(productId, difference);
      } else if (difference < 0) {
        // Remove items (we need to delete and recreate with new quantity)
        await removeFromCart(productId);
        if (newQuantity > 0) {
          await addToCart(productId, newQuantity);
        }
      }
      
      await reload();
    } catch (e) {
      setCartUpdateError((e as Error).message ?? "Failed to update cart");
    }
  };

  const removeFromCart = async (productId: number) => {
    setCartUpdateError(null);
    try {
      // For now, we'll simulate removal by setting quantity to 0
      // In a real implementation, you'd have a DELETE endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}/cart/items/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      
      await reload();
    } catch (e) {
      setCartUpdateError((e as Error).message ?? "Failed to remove item from cart");
    }
  };

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.push("/login");
      return;
    }

    setLoading(true);
    setError(null);
    reload()
      .catch((e) => {
        setError((e as Error).message ?? "Failed to load cart");
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const price = Number(item.product?.price ?? 0);
      return acc + price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <Breadcrumb items={[{ label: "Cart", href: "/cart" }]} />

      {/* Cart Table Header */}
      <div className="hidden md:grid grid-cols-4 shadow-sm rounded-[4px] py-[24px] px-[40px] mb-[40px] font-medium">
        <span>Product</span>
        <span className="text-center">Price</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Subtotal</span>
      </div>

      {error && <div className="py-6 text-center text-red-600">{error}</div>}
      {cartUpdateError && <div className="py-6 text-center text-red-600">{cartUpdateError}</div>}

      {/* Cart Items */}
      {loading ? (
        <div className="py-10 text-center">Loading cart...</div>
      ) : (
        <div className="flex flex-col gap-[40px] mb-[24px]">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center shadow-sm rounded-[4px] py-[24px] px-[40px] relative group">
            {/* Product Info */}
            <div className="flex items-center gap-5">
               <div className="relative w-[54px] h-[54px]">
                  <Image
                    src={item.product?.image_url ?? "/images/placeholder.png"}
                    alt={item.product?.name ?? "Product"}
                    fill
                    className="object-contain"
                  />
                  {/* Remove Button (Hover) */}
                  <button 
                    onClick={() => removeFromCart(item.product_id)}
                    className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    ✕
                  </button>
               </div>
               <span className="font-medium">{item.product?.name ?? "Unknown product"}</span>
            </div>

            {/* Price */}
            <div className="text-center hidden md:block">${Number(item.product?.price ?? 0).toFixed(0)}</div>

            {/* Quantity Selector */}
            <div className="flex justify-center">
              <div className="flex items-center border border-black/30 rounded-[4px] px-3 py-1 gap-4">
                <span>{item.quantity.toString().padStart(2, '0')}</span>
                <div className="flex flex-col">
                  <ChevronUp
                    className="w-4 h-4 cursor-pointer hover:text-[#DB4444]"
                    onClick={async () => {
                      setCartUpdateError(null);
                      try {
                        await addToCart(item.product_id, 1);
                        await reload();
                      } catch (e) {
                        setCartUpdateError((e as Error).message ?? "Failed to update cart");
                      }
                    }}
                  />
                  <ChevronDown
                    className="w-4 h-4 cursor-pointer hover:text-[#DB4444]"
                    onClick={async () => {
                      if (item.quantity > 1) {
                        await updateQuantity(item.product_id, item.quantity - 1);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="text-right font-medium hidden md:block">
              ${(Number(item.product?.price ?? 0) * item.quantity).toFixed(0)}
            </div>
          </div>
        ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between mb-[80px]">
        <Link href="/shop" className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-black hover:text-white transition-all">
          Return To Shop
        </Link>
        <button 
          onClick={reload}
          className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-black hover:text-white transition-all"
        >
          Update Cart
        </button>
      </div>

      {/* Bottom Section: Coupon & Total */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
        {/* Coupon Input */}
        <div className="flex gap-4 w-full lg:w-auto">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="border border-black rounded-[4px] px-[24px] py-[16px] w-full lg:w-[300px] outline-none"
          />
          <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium whitespace-nowrap">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Box */}
        <div className="border-2 border-black rounded-[4px] p-[32px] w-full lg:w-[470px]">
          <h3 className="text-[20px] font-medium mb-[24px]">Cart Total</h3>
          <div className="flex justify-between pb-4 border-b border-black/30 mb-4">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between pb-4 border-b border-black/30 mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-[32px]">
            <span>Total:</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-center">
            <Link href="/checkout" className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium text-center w-full md:w-auto">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}