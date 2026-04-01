/* src/components/ecommerce/NewArrival.tsx */
import Image from "next/image";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="mb-[140px]">
      {/* Section Header */}
      <div className="flex flex-col gap-[24px] mb-[60px]">
        <div className="flex items-center gap-[16px]">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
          <span className="text-[#DB4444] font-semibold text-[16px]">Featured</span>
        </div>
        <h2 className="text-[36px] font-semibold leading-[48px] tracking-[4%] text-black">New Arrival</h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-[30px] h-auto md:h-[600px] text-[#FAFAFA]">
        
        {/* PlayStation 5 - Large Vertical (Col 1-2, Row 1-2) */}
        <div className="md:col-span-2 md:row-span-2 bg-black rounded-[4px] relative group overflow-hidden">
          <Image 
            src="/images/ps5.png" 
            alt="PS5" 
            fill 
            className="object-contain pt-10 mt-auto"
          />
          <div className="absolute bottom-8 left-8 z-10 max-w-[242px] flex flex-col gap-4">
            <h3 className="text-[24px] font-semibold tracking-[3%]">PlayStation 5</h3>
            <p className="text-[14px] leading-[21px]">Black and White version of the PS5 coming out on sale.</p>
            <Link href="/shop" className="font-medium underline underline-offset-8 hover:text-gray-300">Shop Now</Link>
          </div>
        </div>

        {/* Women's Collections - Wide Horizontal (Col 3-4, Row 1) */}
        <div className="md:col-span-2 bg-[#0D0D0D] rounded-[4px] relative group overflow-hidden">
          <Image 
            src="/images/womens-collection.jpg" 
            alt="Women's Collection" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 z-10 max-w-[255px] flex flex-col gap-4">
            <h3 className="text-[24px] font-semibold tracking-[3%]">Women's Collections</h3>
            <p className="text-[14px] leading-[21px]">Featured woman collections that give you another vibe.</p>
            <Link href="/shop" className="font-medium underline underline-offset-8">Shop Now</Link>
          </div>
        </div>

        {/* Speakers - Small Square (Col 3, Row 2) */}
        <div className="bg-black rounded-[4px] relative group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/images/speakers.png" alt="Speakers" width={190} height={221} className="object-contain" />
          </div>
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">Speakers</h3>
            <p className="text-[14px]">Amazon wireless speakers</p>
            <Link href="/shop" className="font-medium underline underline-offset-8">Shop Now</Link>
          </div>
        </div>

        {/* Perfume - Small Square (Col 4, Row 2) */}
        <div className="bg-black rounded-[4px] relative group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/images/perfume.png" alt="Perfume" width={190} height={221} className="object-contain" />
          </div>
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">Perfume</h3>
            <p className="text-[14px]">GUCCI INTENSE OUD EDP</p>
            <Link href="/shop" className="font-medium underline underline-offset-8">Shop Now</Link>
          </div>
        </div>

      </div>
    </section>
  );
}