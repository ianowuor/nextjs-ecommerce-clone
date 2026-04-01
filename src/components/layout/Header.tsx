import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 pt-[40px] pb-[16px]">
      {/* Main Container: width 1170px, centered */}
      <div className="max-w-[1170px] mx-auto flex items-center justify-between px-4 xl:px-0 h-[38px]">
        
        {/* Frame 556: Logo + Links (gap 190px) */}
        <div className="flex items-center gap-[190px]">
          {/* Logo */}
          <Link href="/" className="text-[24px] font-bold leading-[24px] tracking-[3%]">
            Exclusive
          </Link>

          {/* Frame 554: Nav Links (gap 48px) */}
          <nav className="hidden md:flex items-center gap-[48px]">
            <Link href="/" className="text-[16px] leading-[24px] hover:underline underline-offset-4">Home</Link>
            <Link href="/contact" className="text-[16px] leading-[24px] hover:underline underline-offset-4">Contact</Link>
            <Link href="/about" className="text-[16px] leading-[24px] hover:underline underline-offset-4">About</Link>
            <Link href="/signup" className="text-[16px] leading-[24px] hover:underline underline-offset-4">Sign Up</Link>
          </nav>
        </div>

        {/* Frame 552: Search Component Set + Icons (gap 24px) */}
        <div className="flex items-center gap-[24px]">
          
          {/* Search Component Set (Property 1="Active") */}
          <div className="relative flex items-center w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] pt-[7px] pb-[7px] pl-[20px] pr-[12px] gap-[10px]">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent text-[12px] leading-[18px] outline-none w-full placeholder:text-[#000000] placeholder:opacity-50"
            />
            <Search className="w-[24px] h-[24px] cursor-pointer" />
          </div>

          {/* Frame 551: Heart & Cart (gap 16px) */}
          <div className="flex items-center gap-[16px]">
            <Heart className="w-[32px] h-[32px] cursor-pointer" />
            <div className="relative">
              
                <ShoppingCart className="w-[32px] h-[32px] cursor-pointer" />
              {/* Optional: Add a small badge here if your Figma shows one */}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}