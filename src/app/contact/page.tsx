/* src/app/contact/page.tsx */
import { Phone, Mail } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumbs";

export default function ContactPage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

      <div className="flex flex-col lg:flex-row gap-[30px]">
        
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-[340px] shadow-md rounded-[4px] p-[40px] flex flex-col gap-8">
          <div className="flex flex-col gap-6 border-b border-black/30 pb-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#DB4444] p-2 rounded-full text-white"><Phone /></div>
              <span className="font-medium text-[16px]">Call To Us</span>
            </div>
            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px]">Phone: +8801611112222</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#DB4444] p-2 rounded-full text-white"><Mail /></div>
              <span className="font-medium text-[16px]">Write To Us</span>
            </div>
            <p className="text-[14px]">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-[14px]">Emails: customer@exclusive.com</p>
            <p className="text-[14px]">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-grow shadow-md rounded-[4px] p-[40px]">
          <form className="flex flex-col gap-[32px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Your Name *" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" required />
              <input type="email" placeholder="Your Email *" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" required />
              <input type="tel" placeholder="Your Phone *" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" required />
            </div>
            <textarea 
              placeholder="Your Massage" 
              className="bg-[#F5F5F5] p-4 rounded-[4px] outline-none h-[207px] resize-none"
            />
            <div className="flex justify-end">
              <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#c23b3b] transition-colors">
                Send Massage
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}