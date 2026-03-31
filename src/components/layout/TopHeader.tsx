import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function TopHeader() {
  return (
    // Top Header: h-[48px], bg-#000000
    <div className="w-full h-[48px] bg-black text-[#FAFAFA] flex items-center">
      
      {/* Frame 746: The wrapper that centers content and handles the 231px gap */}
      <div className="container mx-auto flex items-center justify-end md:justify-between px-4 lg:px-0">
        
        {/* Frame 555: Sale Text + ShopNow Link (gap: 8px) */}
        <div className="flex items-center gap-[8px] mx-auto">
          <p className="text-sm font-normal leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link 
            href="/shop" 
            className="text-sm font-semibold underline leading-[24px] hover:text-gray-300 transition-colors"
          >
            ShopNow
          </Link>
        </div>

        {/* Frame 549: Language Toggle (gap: 5px) */}
        <div className="flex items-center gap-[5px] cursor-pointer group">
          <span className="text-sm font-normal leading-[24px]">English</span>
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}