/* src/app/product/[id]/page.tsx */
import Image from "next/image";
import { Star, Heart, Truck, RefreshCw } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumbs";
import ProductCard from "@/components/ecommerce/ProductCard";

export default function ProductDetailsPage() {
    // Mock data - In a real app, you'd fetch this using the [id]
    const product = {
        name: "Havic HV G-92 Gamepad",
        price: 192.00,
        rating: 4,
        reviews: 150,
        stock: "In Stock",
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & no residue removal. Vivid color, eco-friendly.",
        colors: ["#A0BCE0", "#E07575"],
        sizes: ["XS", "S", "M", "L", "XL"],
    };

    // Mock data for related items
    const relatedProducts = [
        { name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, rating: 5, reviews: 88, image: "/images/gamepad.png", discount: "-40%" },
        { name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, rating: 4, reviews: 75, image: "/images/keyboard.png", discount: "-35%" },
        { name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, rating: 5, reviews: 99, image: "/images/monitor.png", discount: "-30%" },
        { name: "RGB Liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4, reviews: 65, image: "/images/cooler.png" },
    ];


    return (
        <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
            <Breadcrumb items={[{ label: "Gaming", href: "/category/gaming" }, { label: product.name, href: "#" }]} />

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
                        <Image src="/images/gamepad.png" alt="Main" width={446} height={315} className="object-contain" priority />
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex-grow flex flex-col">
                    <h1 className="text-[24px] font-semibold leading-[24px] mb-4">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex text-[#FFAD33]">
                            {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 fill-current ${i >= product.rating ? 'text-gray-300' : ''}`} />)}
                        </div>
                        <span className="text-gray-400 text-[14px]">({product.reviews} Reviews)</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-[#00FF66] text-[14px]">{product.stock}</span>
                    </div>

                    <span className="text-[24px] leading-[24px] mb-6">${product.price.toFixed(2)}</span>

                    <p className="text-[14px] leading-[21px] pb-6 border-b border-black/50 mb-6">
                        {product.description}
                    </p>

                    {/* Color & Size Pickers */}
                    <div className="flex flex-col gap-6 mb-10">
                        <div className="flex items-center gap-6">
                            <span className="text-[20px]">Colours:</span>
                            <div className="flex gap-2">
                                {product.colors.map((c) => (
                                    <div key={c} className="w-5 h-5 rounded-full ring-1 ring-black ring-offset-2 cursor-pointer" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-[20px]">Size:</span>
                            <div className="flex gap-4">
                                {product.sizes.map((s) => (
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
                            <button className="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition-colors border-r border-black/50 text-[20px]">-</button>
                            <span className="px-8 font-medium">2</span>
                            <button className="px-4 py-2 bg-[#DB4444] text-white text-[20px]">+</button>
                        </div>
                        <button className="bg-[#DB4444] text-white px-[48px] py-[10px] rounded-[4px] font-medium flex-grow">Buy Now</button>
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
                    {relatedProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
}