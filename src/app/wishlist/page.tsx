/* src/app/wishlist/page.tsx */
import ProductCard from "@/components/ecommerce/ProductCard";

const wishlistItems = [
  { name: "PUMA Training Bag", price: 960, oldPrice: 1160, image: "/images/bag.png", discount: "-35%" },
  { name: "RGB Liquid CPU Cooler", price: 160, oldPrice: 170, image: "/images/cooler.png" },
  { name: "GP11 Gamepad", price: 550, image: "/images/gp11.png" },
  { name: "Quilted Satin Jacket", price: 750, image: "/images/jacket.png" },
];

const justForYouItems = [
  { name: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, rating: 5, reviews: 65, image: "/images/laptop.png" },
  { name: "IPS LCD Gaming Monitor", price: 1160, rating: 5, reviews: 65, image: "/images/monitor.png" },
  { name: "HAVIT HV-G92 Gamepad", price: 560, rating: 5, reviews: 65, image: "/images/gamepad.png", isNew: true },
  { name: "AK-900 Wired Keyboard", price: 200, rating: 5, reviews: 65, image: "/images/keyboard.png" },
];

export default function WishlistPage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 pt-[80px] pb-[140px]">
      
      {/* 1. Wishlist Header */}
      <div className="flex items-center justify-between mb-[60px]">
        <h1 className="text-[20px] leading-[26px] text-black">Wishlist ({wishlistItems.length})</h1>
        <button className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all text-[16px]">
          Move All To Bag
        </button>
      </div>

      {/* 2. Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[80px]">
        {wishlistItems.map((item, idx) => (
          <ProductCard key={idx} {...item} isWishlist={true} />
        ))}
      </div>

      {/* 3. "Just For You" Section */}
      <div className="flex items-center justify-between mb-[60px]">
        <div className="flex items-center gap-[16px]">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-[20px] leading-[26px] text-black">Just For You</h2>
        </div>
        <button className="border border-black/50 px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all text-[16px]">
          See All
        </button>
      </div>

      {/* 4. Recommendations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {justForYouItems.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}