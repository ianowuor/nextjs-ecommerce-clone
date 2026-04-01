import { Send, QrCode } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#FAFAFA] pt-[80px] pb-[24px]">
      <div className="max-w-[1170px] mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[87px]">
        
        {/* Column 1: Exclusive */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[24px] font-bold tracking-[3%]">Exclusive</h2>
          <h3 className="text-[20px] font-medium">Subscribe</h3>
          <p className="text-[16px]">Get 10% off your first order</p>
          <div className="relative w-[217px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-[1.5px] border-[#FAFAFA] rounded-[4px] py-[12px] pl-[16px] pr-[45px] w-full text-[16px] focus:outline-none focus:border-[#DB4444] transition-colors"
            />
            <Send className="absolute right-[16px] top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer hover:text-[#DB4444]" />
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Support</h3>
          <p className="text-[16px] leading-[24px]">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <p className="text-[16px]">exclusive@gmail.com</p>
          <p className="text-[16px]">+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Account</h3>
          <Link href="/account" className="hover:underline">My Account</Link>
          <Link href="/login" className="hover:underline">Login / Register</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
          <Link href="/wishlist" className="hover:underline">Wishlist</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
        </div>

        {/* Column 4: Quick Link */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Quick Link</h3>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms Of Use</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Column 5: Download App */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Download App</h3>
          <p className="text-[12px] text-gray-400 font-medium">Save $3 with App New User Only</p>
          <div className="flex gap-[8px] items-center">
             <div className="bg-black p-1 border border-white">
                <QrCode className="w-[76px] h-[76px]" />
             </div>
             <div className="flex flex-col gap-[8px]">
                {/* Placeholders for AppStore/GooglePlay buttons */}
                <div className="bg-[#000] border border-white rounded-[4px] p-1 w-[110px] h-[32px] flex items-center justify-center cursor-pointer">
                   <span className="text-[10px]">Google Play</span>
                </div>
                <div className="bg-[#000] border border-white rounded-[4px] p-1 w-[110px] h-[32px] flex items-center justify-center cursor-pointer">
                   <span className="text-[10px]">App Store</span>
                </div>
             </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-[24px] mt-[8px]">
             <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-blue-500" />
             <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
             <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
             <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-blue-700" />
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-[60px] border-t border-white/10 pt-[16px] text-center opacity-40">
        <p className="text-[16px]">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}