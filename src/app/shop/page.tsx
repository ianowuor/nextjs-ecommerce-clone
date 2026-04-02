/* src/app/shop/page.tsx */
import Breadcrumb from "@/components/common/Breadcrumbs";
import ProductCard from "@/components/ecommerce/ProductCard";

const products = [
  { id: 1, name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4.5, reviews: 65, discount: "-20%", image: "/images/bag.png" },
  { id: 2, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4.8, reviews: 85, image: "/images/cooler.png" },
  { id: 3, name: "GP11 Gamepad", price: 660, rating: 4.2, reviews: 55, isNew: true, image: "/images/gamepad-black.png" },
  { id: 4, name: "Quilted Satin Jacket", price: 660, rating: 4.9, reviews: 95, image: "/images/jacket.png" },
  { id: 5, name: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, image: "/images/laptop.png" },
  { id: 6, name: "Curology Product Set", price: 500, rating: 4.0, reviews: 145, image: "/images/curology.png" },
  { id: 7, name: "Kids Electric Car", price: 960, isNew: true, rating: 5, reviews: 65, image: "/images/car.png" },
  { id: 8, name: "Jr. Zoom Terrex Hiking Shoes", price: 1160, rating: 4.8, reviews: 45, image: "/images/shoes.png" },
];

export default function ShopPage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <Breadcrumb items={[{ label: "Shop", href: "/shop" }]} />

      <div className="flex flex-col lg:flex-row gap-[30px] mt-10">
        
        {/* Left Sidebar: Filters */}
        <aside className="w-full lg:w-[270px] flex flex-col gap-10">
          {/* Category Filter */}
          <div>
            <h3 className="text-[20px] font-medium mb-6">Category</h3>
            <ul className="flex flex-col gap-4 text-[16px] opacity-70">
              <li className="hover:text-[#DB4444] cursor-pointer">Woman's Fashion</li>
              <li className="hover:text-[#DB4444] cursor-pointer">Men's Fashion</li>
              <li className="hover:text-[#DB4444] cursor-pointer">Electronics</li>
              <li className="hover:text-[#DB4444] cursor-pointer">Home & Lifestyle</li>
              <li className="hover:text-[#DB4444] cursor-pointer">Medicine</li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-[20px] font-medium mb-6">Price Range</h3>
            <div className="flex flex-col gap-4">
              <input type="range" min="0" max="2000" className="accent-[#DB4444] cursor-pointer" />
              <div className="flex justify-between text-[14px] opacity-70">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-[20px] font-medium mb-6">Rating</h3>
            <div className="flex flex-col gap-4">
               {[5, 4, 3, 2, 1].map((star) => (
                 <label key={star} className="flex items-center gap-3 cursor-pointer group">
                   <input type="checkbox" className="w-5 h-5 accent-[#DB4444]" />
                   <span className="text-[16px] group-hover:text-[#DB4444]">{star} Stars</span>
                 </label>
               ))}
            </div>
          </div>
        </aside>

        {/* Right Content: Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[20px] font-semibold">Showing 1–12 of 36 results</h2>
            <select className="border border-black/10 rounded-[4px] p-2 outline-none text-[16px]">
              <option>Default sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[60px]">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-[60px] flex justify-center gap-4">
            <button className="w-10 h-10 border border-black/10 rounded-[4px] hover:bg-[#DB4444] hover:text-white transition-all">1</button>
            <button className="w-10 h-10 border border-black/10 rounded-[4px] hover:bg-[#DB4444] hover:text-white transition-all">2</button>
            <button className="w-10 h-10 border border-black/10 rounded-[4px] hover:bg-[#DB4444] hover:text-white transition-all">3</button>
          </div>
        </div>

      </div>
    </div>
  );
}