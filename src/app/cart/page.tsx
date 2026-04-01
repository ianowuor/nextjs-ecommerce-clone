/* src/app/cart/page.tsx */
import Image from "next/image";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumbs";

const cartItems = [
  { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/images/monitor.png" },
  { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "/images/gamepad.png" },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

      {/* Cart Items */}
      <div className="flex flex-col gap-[40px] mb-[24px]">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center shadow-sm rounded-[4px] py-[24px] px-[40px] relative group">
            {/* Product Info */}
            <div className="flex items-center gap-5">
               <div className="relative w-[54px] h-[54px]">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                  {/* Remove Button (Hover) */}
                  <button className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
               </div>
               <span className="font-medium">{item.name}</span>
            </div>

            {/* Price */}
            <div className="text-center hidden md:block">${item.price}</div>

            {/* Quantity Selector */}
            <div className="flex justify-center">
              <div className="flex items-center border border-black/30 rounded-[4px] px-3 py-1 gap-4">
                <span>{item.quantity.toString().padStart(2, '0')}</span>
                <div className="flex flex-col">
                  <ChevronUp className="w-4 h-4 cursor-pointer hover:text-[#DB4444]" />
                  <ChevronDown className="w-4 h-4 cursor-pointer hover:text-[#DB4444]" />
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="text-right font-medium hidden md:block">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-[80px]">
        <Link href="/shop" className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-black hover:text-white transition-all">
          Return To Shop
        </Link>
        <button className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-black hover:text-white transition-all">
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