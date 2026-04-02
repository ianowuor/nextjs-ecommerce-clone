/* src/components/layout/Header.tsx */
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 pt-[40px] pb-[16px]">
      {/* Main Container: width 1170px, centered */}
      <div className="max-w-[1170px] mx-auto flex items-center justify-between px-4 xl:px-0 h-[38px]">
        
        {/* Logo & Navigation */}
        <div className="flex items-center gap-[190px]">
          {/* Logo */}
          <Link href="/" className="text-[24px] font-bold leading-[24px] tracking-[3%] hover:text-[#DB4444] transition-colors">
            Exclusive
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-[48px]">
            <Link href="/" className="text-[16px] leading-[24px] hover:underline underline-offset-[12px] decoration-[#DB4444]">Home</Link>
            <Link href="/contact" className="text-[16px] leading-[24px] hover:underline underline-offset-[12px] decoration-[#DB4444]">Contact</Link>
            <Link href="/about" className="text-[16px] leading-[24px] hover:underline underline-offset-[12px] decoration-[#DB4444]">About</Link>
            <Link href="/signup" className="text-[16px] leading-[24px] hover:underline underline-offset-[12px] decoration-[#DB4444]">Sign Up</Link>
          </nav>
        </div>

        {/* Search & Action Icons */}
        <div className="flex items-center gap-[24px]">
          
          {/* Search Box */}
          <div className="relative flex items-center w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pl-[20px] pr-[12px] gap-[10px]">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent text-[12px] leading-[18px] outline-none w-full placeholder:text-[#000000] placeholder:opacity-50"
            />
            {/* This will eventually link to your /search page */}
            <Link href="/search">
              <Search className="w-[24px] h-[24px] cursor-pointer hover:text-[#DB4444] transition-colors" />
            </Link>
          </div>

          {/* Action Icons: Wishlist, Cart, Account */}
          <div className="flex items-center gap-[16px]">
            <Link href="/wishlist">
              <Heart className="w-[32px] h-[32px] cursor-pointer hover:text-[#DB4444] transition-colors" />
            </Link>
            
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-[32px] h-[32px] cursor-pointer hover:text-[#DB4444] transition-colors" />
              {/* Badge for items in cart */}
              <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>

            <Link href="/account">
              <User className="w-[32px] h-[32px] cursor-pointer hover:text-[#DB4444] transition-colors" />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}