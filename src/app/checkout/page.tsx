/* src/app/checkout/page.tsx */
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumbs";

export default function CheckoutPage() {
  // Mock data for the summary
  const cartItems = [
    { name: "LCD Monitor", price: 650, image: "/images/monitor.png" },
    { name: "H1 Gamepad", price: 1100, image: "/images/gamepad.png" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <Breadcrumb items={[{ label: "Account", href: "/account" }, { label: "Check-out", href: "/checkout" }]} />

      <h1 className="text-[36px] font-medium leading-[48px] tracking-[4%] mb-[48px]">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-[100px] items-start">
        
        {/* Left Side: Billing Form */}
        <div className="flex-grow w-full lg:max-w-[470px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">First Name<span className="text-[#DB4444]">*</span></label>
            <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 ring-[#DB4444]" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Company Name</label>
            <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Street Address<span className="text-[#DB4444]">*</span></label>
            <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Apartment, floor, etc. (optional)</label>
            <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Town/City<span className="text-[#DB4444]">*</span></label>
            <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Phone Number<span className="text-[#DB4444]">*</span></label>
            <input type="tel" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black/50 text-[16px]">Email Address<span className="text-[#DB4444]">*</span></label>
            <input type="email" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none" required />
          </div>
          
          <div className="flex items-center gap-4 mt-2">
            <input type="checkbox" id="save-info" className="w-6 h-6 accent-[#DB4444]" />
            <label htmlFor="save-info" className="text-[16px] cursor-pointer">Save this information for faster check-out next time</label>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-[527px] pt-8">
          <div className="flex flex-col gap-8 mb-8">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Image src={item.image} alt={item.name} width={54} height={54} className="object-contain" />
                  <span className="text-[16px]">{item.name}</span>
                </div>
                <span className="font-medium">${item.price}</span>
              </div>
            ))}
          </div>

          {/* Subtotals */}
          <div className="flex flex-col gap-4 border-b border-black/30 pb-4 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
          </div>
          <div className="flex justify-between text-[16px] mb-8 font-medium">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="bank" className="w-6 h-6 accent-black" defaultChecked />
                <label htmlFor="bank" className="text-[16px]">Bank</label>
              </div>
              <div className="flex gap-2">
                 <Image src="/images/bkash.png" alt="bkash" width={42} height={28} />
                 <Image src="/images/visa.png" alt="visa" width={42} height={28} />
                 <Image src="/images/mastercard.png" alt="master" width={42} height={28} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="cod" className="w-6 h-6 accent-black" />
              <label htmlFor="cod" className="text-[16px]">Cash on delivery</label>
            </div>
          </div>

          {/* Coupon in Summary */}
          <div className="flex gap-4 mb-8">
            <input type="text" placeholder="Coupon Code" className="border border-black rounded-[4px] px-6 py-4 flex-grow outline-none" />
            <button className="bg-[#DB4444] text-white px-12 py-4 rounded-[4px] font-medium">Apply Coupon</button>
          </div>

          <button className="bg-[#DB4444] text-white px-12 py-4 rounded-[4px] font-medium w-full md:w-auto">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}