/* src/components/layout/Footer.tsx */
import { Send, QrCode } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#FAFAFA] pt-[80px] pb-[24px] mt-auto">
      <div className="max-w-[1170px] mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[87px]">
        
        {/* Column 1: Exclusive & Subscribe */}
        <div className="flex flex-col gap-[16px]">
          <Link href="/" className="text-[24px] font-bold tracking-[3%] hover:text-[#DB4444] transition-colors">
            Exclusive
          </Link>
          <h3 className="text-[20px] font-medium">Subscribe</h3>
          <p className="text-[16px] opacity-90">Get 10% off your first order</p>
          <div className="relative w-full max-w-[217px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-[1.5px] border-[#FAFAFA] rounded-[4px] py-[12px] pl-[16px] pr-[45px] w-full text-[16px] focus:outline-none focus:border-[#DB4444] transition-colors placeholder:opacity-50"
            />
            <Send className="absolute right-[16px] top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer hover:text-[#DB4444] transition-all" />
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Support</h3>
          <address className="not-italic text-[16px] leading-[24px] opacity-90">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </address>
          <a href="mailto:exclusive@gmail.com" className="text-[16px] opacity-90 hover:text-[#DB4444] transition-colors">
            exclusive@gmail.com
          </a>
          <a href="tel:+88015888889999" className="text-[16px] opacity-90 hover:text-[#DB4444] transition-colors">
            +88015-88888-9999
          </a>
        </div>

        {/* Column 3: Account (Wired to our new pages) */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Account</h3>
          <Link href="/account" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">My Account</Link>
          <Link href="/login" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Login / Register</Link>
          <Link href="/cart" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Cart</Link>
          <Link href="/wishlist" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Wishlist</Link>
          <Link href="/shop" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Shop</Link>
        </div>

        {/* Column 4: Quick Link */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Quick Link</h3>
          <Link href="/privacy-policy" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Privacy Policy</Link>
          <Link href="/terms" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Terms Of Use</Link>
          <Link href="/faq" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">FAQ</Link>
          <Link href="/contact" className="text-[16px] opacity-90 hover:text-[#DB4444] hover:underline transition-all">Contact</Link>
        </div>

        {/* Column 5: Download App & Socials */}
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] font-medium">Download App</h3>
          <p className="text-[12px] text-gray-400 font-medium">Save $3 with App New User Only</p>
          <div className="flex gap-[8px] items-center">
             <div className="bg-white p-1 rounded-[2px]">
                <QrCode className="w-[76px] h-[76px] text-black" />
             </div>
             <div className="flex flex-col gap-[8px]">
                <div className="bg-black border border-white rounded-[4px] px-2 py-1 w-[110px] flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                   <div className="text-[10px] leading-tight">GET IT ON <br /><span className="text-[14px] font-bold">Google Play</span></div>
                </div>
                <div className="bg-black border border-white rounded-[4px] px-2 py-1 w-[110px] flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                   <div className="text-[10px] leading-tight">Download on the <br /><span className="text-[14px] font-bold">App Store</span></div>
                </div>
             </div>
          </div>
          
          <div className="flex gap-[24px] mt-[8px]">
             <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-[#DB4444] transition-colors" />
             <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-[#DB4444] transition-colors" />
             <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#DB4444] transition-colors" />
             <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-[#DB4444] transition-colors" />
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="mt-[60px] border-t border-white/10 pt-[16px] text-center opacity-40">
        <p className="text-[16px]">© Copyright Rimel {currentYear}. All right reserved</p>
      </div>
    </footer>
  );
}