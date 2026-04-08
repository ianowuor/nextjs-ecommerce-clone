"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, Heart, Truck, RefreshCw, ShoppingCart } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumbs";
import ProductCard from "@/components/ecommerce/ProductCard";
import { type Product, addToCart, getProducts } from "@/lib/api";

export default function ProductDetailsPage() {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const productId = params.id as string;

    useEffect(() => {
        const loadProduct = async () => {
            if (!productId) return;

            try {
                setLoading(true);
                const products = await getProducts();
                const foundProduct = products.find(p => p.id === parseInt(productId));
                
                if (!foundProduct) {
                    setError("Product not found");
                } else {
                    setProduct(foundProduct);
                    // Set related products (excluding current product)
                    const related = products.filter(p => p.id !== parseInt(productId)).slice(0, 4);
                    setRelatedProducts(related);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [productId]);

    const handleAddToCart = async () => {
        if (!product) return;

        try {
            await addToCart(product.id, quantity);
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 3000);
        } catch (err) {
            console.error("Failed to add to cart:", err);
        }
    };

    // Mock data for product details that aren't in the API
    const productDetails = {
        rating: 4,
        reviews: 150,
        stock: "In Stock",
        description: product?.description || "High quality product with exceptional design and functionality. Perfect for everyday use.",
        colors: ["#A0BCE0", "#E07575", "#000000"],
        sizes: ["XS", "S", "M", "L", "XL"],
    };

    if (loading) {
        return (
            <div className="max-w-[1170px] mx-auto px-4 xl:px-0 py-20">
                <div className="text-center">Loading product...</div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="max-w-[1170px] mx-auto px-4 xl:px-0 py-20">
                <div className="text-center text-red-600">{error || "Product not found"}</div>
            </div>
        );
    }


    return (
        <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
            <Breadcrumb items={[{ label: "Shop", href: "/shop" }, { label: product.name, href: `/product/${product.id}` }]} />

            <div className="flex flex-col lg:flex-row gap-[70px]">

                {/* Left: Image Gallery */}
                <div className="flex gap-[30px]">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-[16px]">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center cursor-pointer hover:border-[#DB4444] border border-transparent">
                                <Image src="/images/gamepad.png" alt="thumb" width={120} height={114} className="object-contain" />
                            </div>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="w-[500px] h-[600px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center">
                        <Image 
                            src={product.image_url || "/images/placeholder-product.png"} 
                            alt={product.name} 
                            fill 
                            className="object-contain" 
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex-grow flex flex-col">
                    <h1 className="text-[24px] font-semibold leading-[24px] mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex text-[#FFAD33]">
                            {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 fill-current ${i >= productDetails.rating ? 'text-gray-300' : ''}`} />)}
                        </div>
                        <span className="text-gray-400 text-[14px]">({productDetails.reviews} Reviews)</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-[#00FF66] text-[14px]">{productDetails.stock}</span>
                    </div>

                    <span className="text-[24px] leading-[24px] mb-6">${Number(product.price).toFixed(2)}</span>

                    <p className="text-[14px] leading-[21px] pb-6 border-b border-black/50 mb-6">
                        {productDetails.description}
                    </p>

                    {/* Color & Size Pickers */}
                    <div className="flex flex-col gap-6 mb-10">
                        <div className="flex items-center gap-6">
                            <span className="text-[20px]">Colours:</span>
                            <div className="flex gap-2">
                                {productDetails.colors.map((c) => (
                                    <div key={c} className="w-5 h-5 rounded-full ring-1 ring-black ring-offset-2 cursor-pointer" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-[20px]">Size:</span>
                            <div className="flex gap-4">
                                {productDetails.sizes.map((s) => (
                                    <button key={s} className="w-8 h-8 border border-black/50 rounded-[4px] text-[14px] font-medium hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quantity & Buy Actions */}
                    <div className="flex gap-4 mb-10">
                        <div className="flex items-center border border-black/50 rounded-[4px] overflow-hidden">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition-colors border-r border-black/50 text-[20px]"
                            >
                                -
                            </button>
                            <span className="px-8 font-medium">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition-colors border-l border-black/50 text-[20px]"
                            >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className={`bg-[#DB4444] text-white px-[48px] py-[10px] rounded-[4px] font-medium flex-grow flex items-center justify-center gap-2 transition-colors ${
                                addedToCart ? "bg-green-600" : "hover:bg-[#E07575]"
                            }`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {addedToCart ? "Added!" : "Add to Cart"}
                        </button>
                        <button className="p-2 border border-black/50 rounded-[4px] hover:bg-[#DB4444] hover:text-white transition-colors">
                            <Heart className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Delivery Info Box */}
                    <div className="border border-black/50 rounded-[4px]">
                        <div className="flex items-center gap-4 p-4 border-b border-black/50">
                            <Truck className="w-10 h-10" />
                            <div>
                                <p className="font-medium text-[16px]">Free Delivery</p>
                                <p className="text-[12px] underline cursor-pointer">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <RefreshCw className="w-10 h-10" />
                            <div>
                                <p className="font-medium text-[16px]">Return Delivery</p>
                                <p className="text-[12px]">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- RELATED ITEMS SECTION --- */}
            <section className="mt-[80px]">
                <div className="flex flex-col gap-[24px] mb-[60px]">
                    {/* Section Header with Red Accent */}
                    <div className="flex items-center gap-[16px]">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
                        <span className="text-[#DB4444] font-semibold text-[16px]">Related Item</span>
                    </div>
                </div>

                {/* 4-Item Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {relatedProducts.map((relatedProduct) => (
                        <ProductCard 
                            key={relatedProduct.id} 
                            id={relatedProduct.id}
                            name={relatedProduct.name}
                            price={Number(relatedProduct.price)}
                            image={relatedProduct.image_url}
                            rating={4}
                            reviews={50}
                            onAddToCart={async () => {
                                try {
                                    await addToCart(relatedProduct.id, 1);
                                } catch (err) {
                                    console.error("Failed to add to cart:", err);
                                }
                            }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}