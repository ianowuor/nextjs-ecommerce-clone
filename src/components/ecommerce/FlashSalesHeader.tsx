/* src/components/ecommerce/FlashSalesHeader.tsx */
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FlashSalesHeader() {
  return (
    <div className="flex flex-col gap-[24px] mb-[40px]">
      {/* Category Label */}
      <div className="flex items-center gap-[16px]">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
        <span className="text-[#DB4444] font-semibold text-[16px]">Today's</span>
      </div>

      {/* Title + Countdown + Navigation */}
      <div className="flex items-end justify-between">
        <div className="flex items-end gap-[87px]">
          <h2 className="text-[36px] font-semibold leading-[48px] tracking-[4%]">Flash Sales</h2>
          
          {/* Countdown Timer (Mockup) */}
          <div className="flex items-center gap-[17px]">
            {[["Days", "03"], ["Hours", "23"], ["Minutes", "19"], ["Seconds", "56"]].map(([label, value], i) => (
              <div key={label} className="flex items-center gap-[17px]">
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium">{label}</span>
                  <span className="text-[32px] font-bold leading-[30px]">{value}</span>
                </div>
                {i !== 3 && <span className="text-[#E07575] text-[32px] mt-4">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Nav Arrows */}
        <div className="flex gap-[8px]">
          <button className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}