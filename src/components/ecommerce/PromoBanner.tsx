import Image from "next/image";

// Defining the countdown items for cleaner JSX
const countdownItems = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];

export default function PromoBanner() {
  return (
    <section className="relative max-w-[1170px] min-h-[500px] bg-black mx-auto overflow-hidden px-6 py-12 md:px-[56px] md:py-[69px] mb-[140px] flex items-center">
      
      {/* Background Glow Effect (The circular radial gradient behind the speaker) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[504px] h-[504px] bg-[#D9D9D9] opacity-30 rounded-full blur-[100px] z-0 hidden lg:block" />

      {/* Content Area (Left) - Z-index ensures text stays above the glow */}
      <div className="z-10 relative flex flex-col gap-[32px] w-full lg:w-[443px]">
        
        {/* Category Label */}
        <span className="text-[#00FF66] font-semibold text-[16px] leading-[20px]">
          Categories
        </span>

        {/* Title - Fixed the closing tag issue here */}
        <h2 className="text-[32px] md:text-[48px] font-semibold text-[#FAFAFA] leading-tight md:leading-[60px] tracking-[4%]">
          Enhance Your <br className="hidden md:block" /> Music Experience
        </h2>

        {/* Circular Countdown (gap 16px) */}
        <div className="flex gap-[16px]">
          {countdownItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[62px] h-[62px] bg-[#FAFAFA] rounded-full flex flex-col items-center justify-center border border-gray-100 shadow-inner"
            >
              <span className="text-black font-semibold text-[16px] leading-[20px]">
                {item.value}
              </span>
              <span className="text-black font-normal text-[11px] leading-[14px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Buy Now Button */}
        <button className="bg-[#00FF66] text-white px-[48px] py-[16px] rounded-[4px] font-semibold hover:bg-[#00e059] transition-all duration-300 leading-[24px] w-fit active:scale-95">
          Buy Now!
        </button>
      </div>

      {/* Product Image (Right) */}
      <div className="absolute top-[37px] right-[56px] w-[568px] h-[420px] z-10 hidden lg:block">
        <Image 
          src="/images/jbl-speaker.png" 
          alt="JBL Speaker" 
          width={568} 
          height={420} 
          className="object-contain"
          priority
        />
      </div>

    </section>
  );
}