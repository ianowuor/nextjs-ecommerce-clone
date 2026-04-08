/* src/components/ecommerce/ProductCard.tsx */
import Image from "next/image";
import { Heart, Eye, Star, Trash2, ShoppingCart } from "lucide-react";

const PLACEHOLDER_IMAGE = "/images/placeholder-product.png";

interface ProductProps {
  id?: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating?: number;
  reviews?: number;
  image: string | null | undefined; // Allow null or undefined
  isNew?: boolean;
  colors?: string[];
  isWishlist?: boolean;
  onAddToCart?: (productId: number) => void;
}

export default function ProductCard({ 
  id,
  name, 
  price, 
  oldPrice, 
  discount, 
  rating = 0, 
  reviews = 0, 
  image, 
  isNew, 
  colors,
  isWishlist = false,
  onAddToCart,
}: ProductProps) {
  const canAddToCart = typeof id === "number" && typeof onAddToCart === "function";

  const validImageSrc = (image && image.trim() !== "") ? image : PLACEHOLDER_IMAGE;

  return (
    <div className="w-full group cursor-pointer mb-[30px]">
      {/* Image & Overlay Area */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] flex items-center justify-center overflow-hidden">
        
        {/* Badges (Discount/New) */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <span className="bg-[#DB4444] text-white text-[12px] px-3 py-1 rounded-[4px]">
              {discount}
            </span>
          )}
          {isNew && (
            <span className="bg-[#00FF66] text-white text-[12px] px-3 py-1 rounded-[4px]">
              NEW
            </span>
          )}
        </div>
        
        {/* Top Right Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {isWishlist ? (
            /* Wishlist Mode: Only Trash Icon */
            <button className="bg-white p-2 rounded-full shadow-sm hover:bg-[#DB4444] hover:text-white transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          ) : (
            /* Standard Mode: Heart & Eye Icons */
            <>
              <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-[#DB4444] transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-[#DB4444] transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Product Image */}
        <div className="relative w-[170px] h-[150px]">
          {/* We only render the Image if we have a valid source to prevent the crash */}
          <Image 
            src={validImageSrc} 
            alt={name || "Product Image"} 
            fill 
            className="object-contain group-hover:scale-110 transition-transform duration-300" 
            sizes="170px"
            // Adding unoptimized={true} helps if your backend is serving images 
            // from a local folder that isn't configured in next.config.js yet
            unoptimized={validImageSrc.startsWith('http') || validImageSrc.startsWith('/uploads')}
          />
        </div>
        
        {/* Add to Cart Bar */}
        {/* If wishlist: always visible at bottom. If home: slides up on hover. */}
        <button
          type="button"
          onClick={() => {
            if (canAddToCart && id) onAddToCart(id);
          }}
          disabled={!canAddToCart}
          className={`absolute bottom-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
            isWishlist ? "translate-y-0 opacity-100" : "translate-y-full group-hover:translate-y-0"
          } ${canAddToCart ? "" : "opacity-50 cursor-not-allowed"}`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="text-[12px]">Add To Cart</span>
        </button>
      </div>

      {/* Product Info Section */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-medium text-[16px] truncate group-hover:text-[#DB4444] transition-colors">
          {name}
        </h3>
        
        <div className="flex gap-3 items-center">
          <span className="text-[#DB4444] font-medium">${price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through">${oldPrice}</span>
          )}
        </div>

        {/* Ratings & Swatches - Hidden in some wishlist views to save space, but kept here for flexibility */}
        {!isWishlist && (
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFAD33]">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 fill-current ${i >= rating ? 'text-gray-300' : ''}`} 
                />
              ))}
            </div>
            <span className="text-gray-400 text-[14px] font-semibold">({reviews})</span>
          </div>
        )}

        {/* Color Swatches */}
        {colors && colors.length > 0 && (
          <div className="flex items-center gap-2 mt-1">
            {colors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-5 h-5 rounded-full border-2 border-white ring-1 ring-black transition-transform hover:scale-125"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}