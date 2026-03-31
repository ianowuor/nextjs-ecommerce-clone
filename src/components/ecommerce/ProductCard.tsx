/* src/components/ecommerce/ProductCard.tsx (Updated) */
import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

interface ProductProps {
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  colors?: string[]; // New property for swatches
}

export default function ProductCard({ 
  name, price, oldPrice, discount, rating, reviews, image, isNew, colors 
}: ProductProps) {
  return (
    <div className="w-[270px] group cursor-pointer mb-[30px]">
      {/* Image & Overlay */}
      <div className="relative w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center overflow-hidden">
        {discount && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-[12px] px-3 py-1 rounded-[4px]">
            {discount}
          </span>
        )}
        {isNew && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-[12px] px-3 py-1 rounded-[4px]">
            NEW
          </span>
        )}
        
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-[#DB4444] transition-colors"><Heart className="w-5 h-5" /></button>
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-[#DB4444] transition-colors"><Eye className="w-5 h-5" /></button>
        </div>

        <Image src={image} alt={name} width={170} height={150} className="object-contain" />
        
        <button className="absolute bottom-0 w-full bg-black text-white py-2 translate-y-full group-hover:translate-y-0 transition-transform font-medium">
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-medium text-[16px] truncate">{name}</h3>
        <div className="flex gap-3 items-center">
          <span className="text-[#DB4444] font-medium">${price}</span>
          {oldPrice && <span className="text-gray-400 line-through">${oldPrice}</span>}
          
          {/* Star Rating Section */}
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFAD33]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 fill-current ${i >= rating ? 'text-gray-300' : ''}`} />
              ))}
            </div>
            <span className="text-gray-400 text-[14px] font-semibold">({reviews})</span>
          </div>
        </div>

        {/* Color Swatches (Only if colors exist) */}
        {colors && (
          <div className="flex items-center gap-2 mt-1">
            {colors.map((color, idx) => (
              <div 
                key={idx} 
                className={`w-5 h-5 rounded-full border-2 border-white ring-1 ring-black transition-transform hover:scale-110`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}