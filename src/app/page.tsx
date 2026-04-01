import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { categories } from "@/constants/categories";
import FlashSalesHeader from "@/components/ecommerce/FlashSalesHeader";
import ProductCard from "@/components/ecommerce/ProductCard";
import CategoryCard from "@/components/ecommerce/CategoryCard";
import { browseCategories } from "@/constants/categories";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ecommerce/SectionHeader";
import PromoBanner from "@/components/ecommerce/PromoBanner";
import NewArrival from "@/components/ecommerce/NewArrival";
import ServicesInfo from "@/components/ecommerce/ServicesInfo";

// Mock Data for Flash Sales
const flashSaleProducts = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    rating: 5,
    reviews: 88,
    image: "/images/gamepad.png"
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    rating: 4,
    reviews: 75,
    image: "/images/keyboard.png"
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    rating: 5,
    reviews: 99,
    image: "/images/monitor.png"
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    rating: 4,
    reviews: 99,
    image: "/images/chair.png"
  },
];

const bestSellingProducts = [
  { name: "The north coat", price: 260, oldPrice: 360, rating: 5, reviews: 65, image: "/images/coat.png" },
  { name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4, reviews: 65, image: "/images/bag.png" },
  { name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4, reviews: 65, image: "/images/cooler.png" },
  { name: "Small BookSelf", price: 360, oldPrice: 0, rating: 5, reviews: 65, image: "/images/shelf.png" },
];

const exploreProducts = [
  { name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: "/images/dog-food.jpg" },
  { name: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95, image: "/images/camera.png" },
  { name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: "/images/laptop.png" },
  { name: "Curology Product Set", price: 500, rating: 4, reviews: 145, image: "/images/curology.png" },
  { name: "Kids Electric Car", price: 960, rating: 5, reviews: 65, image: "/images/car.png", isNew: true, colors: ["#FF0000", "#000000"] },
  { name: "Jr. Zoom Soccer Cleats", price: 1160, rating: 5, reviews: 35, image: "/images/cleats.png", colors: ["#FFFF00", "#FF0000"] },
  { name: "GP11 Gamepad", price: 660, rating: 4, reviews: 55, image: "/images/gp11.png", isNew: true, colors: ["#000000", "#DB4444"] },
  { name: "Quilted Satin Jacket", price: 660, rating: 4, reviews: 55, image: "/images/jacket.png", colors: ["#18202F", "#DB4444"] },
];

export default function HomePage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col md:flex-row mb-[140px]">
        {/* Sidebar: 217px wide with border */}
        <aside className="w-full md:w-[217px] border-r border-gray-300 pt-[40px] flex flex-col gap-[16px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between pr-[16px] cursor-pointer hover:text-[#DB4444] transition-colors"
            >
              <span className="text-[16px] leading-[24px]">{category}</span>
              {(category === "Woman’s Fashion" || category === "Men’s Fashion") && (
                <ChevronRight className="w-6 h-6" />
              )}
            </div>
          ))}
        </aside>

        {/* Main Banner: pt 40px, pl 45px */}
        <div className="flex-grow pt-[40px] pl-0 md:pl-[45px]">
          <div className="relative w-full h-[344px] bg-black overflow-hidden flex items-center">

            {/* Left Content Area (Text) */}
            <div className="z-10 pl-[64px] text-[#FAFAFA]">
              <div className="flex items-center gap-[24px] mb-[20px]">
                <Image
                  src="/images/apple_logo.png"
                  alt="Apple Logo"
                  width={40}
                  height={49}
                  className="object-contain"
                />
                <span className="text-[16px] leading-[24px]">iPhone 14 Series</span>
              </div>

              <h1 className="text-[48px] font-semibold leading-[60px] tracking-[4%] mb-[22px]">
                Up to 10% <br /> off Voucher
              </h1>

              <div className="flex items-center gap-[8px] cursor-pointer group w-fit border-b border-[#FAFAFA] pb-1">
                <span className="text-[16px] font-medium leading-[24px]">Shop Now</span>
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* iPhone Image */}
            <div className="absolute top-[16px] left-[396px] w-[496px] h-[352px]">
              <Image
                src="/images/iphone.jpg"
                alt="iPhone 14"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-[11px] left-1/2 -translate-x-1/2 md:left-[353px] md:translate-x-0 flex gap-[12px] items-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[12px] h-[12px] rounded-full border-2 ${i === 2 ? 'bg-[#DB4444] border-[#DB4444]' : 'bg-[#808080] border-transparent'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FLASH SALES SECTION --- */}
      <section className="border-b border-gray-200 pb-[60px]">
        <FlashSalesHeader />

        {/* Product Slider Container */}
        <div className="flex gap-[30px] overflow-x-auto no-scrollbar pb-[20px]">
          {flashSaleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-[60px]">
          <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#E07575] transition-colors leading-[24px]">
            View All Products
          </button>
        </div>
      </section>

      <section className="mt-[80px] border-b border-gray-200 pb-[70px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[24px] mb-[60px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
            <span className="text-[#DB4444] font-semibold text-[16px]">Categories</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-[36px] font-semibold leading-[48px] tracking-[4%]">Browse By Category</h2>
            <div className="flex gap-[8px]">
              <button className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[30px]">
          {browseCategories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </section>

      {/* --- BEST SELLING SECTION --- */}
      <section className="mt-[80px] pb-[140px]">
        <SectionHeader
          label="This Month"
          title="Best Selling Products"
          showButton={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {bestSellingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* PROMO BANNER (Add it here) */}
      <PromoBanner />

      {/* --- EXPLORE OUR PRODUCTS SECTION --- */}
      <section className="mb-[140px]">
        <div className="flex flex-col gap-[24px] mb-[60px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
            <span className="text-[#DB4444] font-semibold text-[16px]">Our Products</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-[36px] font-semibold leading-[48px] tracking-[4%]">Explore Our Products</h2>
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

        {/* 8-Item Grid (2 rows of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[60px]">
          {exploreProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="flex justify-center mt-[60px]">
          <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#E07575] transition-colors leading-[24px]">
            View All Products
          </button>
        </div>
      </section>

      <NewArrival/>

      <ServicesInfo />
    </div>
  );
}