/* src/app/about/page.tsx */
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumbs";
import { Store, DollarSign, ShoppingBag, } from "lucide-react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import ServicesInfo from "@/components/ecommerce/ServicesInfo";

const stats = [
    { icon: <Store />, count: "10.5k", label: "Sellers active our site", active: false },
    { icon: <DollarSign />, count: "33k", label: "Monthly Product Sale", active: true },
    { icon: <ShoppingBag />, count: "45.5k", label: "Customer active in our site", active: false },
    { icon: <FaSackDollar />, count: "25k", label: "Anual gross sale in our site", active: false },
];

const team = [
    { name: "Tom Cruise", role: "Founder & Chairman", image: "/images/team-1.png" },
    { name: "Emma Watson", role: "Managing Director", image: "/images/team-2.png" },
    { name: "Will Smith", role: "Product Designer", image: "/images/team-3.png" },
];

export default function AboutPage() {
    return (
        <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
            <Breadcrumb items={[{ label: "About", href: "/about" }]} />

            {/* Our Story Section */}
            <div className="flex flex-col lg:flex-row items-center gap-[75px] mb-[140px]">
                <div className="lg:w-1/2">
                    <h1 className="text-[54px] font-semibold mb-10 tracking-[3%]">Our Story</h1>
                    <p className="text-[16px] leading-[26px] mb-6">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping maketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p className="text-[16px] leading-[26px]">
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="lg:w-1/2 relative h-[600px] w-full bg-[#EB5757] rounded-[4px] overflow-hidden">
                    {/* Replace with your exported "side-image.png" from Figma */}
                    <Image src="/images/about-side.jpg" alt="Side Image" fill className="object-cover" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[140px]">
                {stats.map((stat, i) => (
                    <div key={i} className={`border rounded-[4px] p-[30px] flex flex-col items-center gap-3 transition-colors group ${stat.active ? 'bg-[#DB4444] border-[#DB4444] text-white' : 'border-black/30 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white'}`}>
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center border-8 ${stat.active ? 'bg-white/30 border-white/20' : 'bg-black/20 border-gray-200 group-hover:bg-white/30 group-hover:border-white/20'}`}>
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${stat.active ? 'bg-white text-black' : 'bg-black text-white group-hover:bg-white group-hover:text-black'}`}>
                                {stat.icon}
                            </div>
                        </div>
                        <span className="text-[32px] font-bold">{stat.count}</span>
                        <span className="text-[16px] text-center">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* --- TEAM SECTION --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[140px]">
                {team.map((member, i) => (
                    <div key={i} className="flex flex-col gap-8 group">
                        {/* Image Container with Grey Background */}
                        <div className="bg-[#F5F5F5] rounded-[4px] pt-[40px] px-[60px] flex justify-center items-end h-[430px] relative overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={236}
                                height={391}
                                className="object-contain"
                            />
                        </div>

                        {/* Bio & Socials */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[32px] font-medium tracking-[4%]">{member.name}</h3>
                            <p className="text-[16px]">{member.role}</p>
                            <div className="flex gap-4 mt-2">
                                <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-[#DB4444]" />
                                <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#DB4444]" />
                                <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-[#DB4444]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ServicesInfo />
        </div>
    );
}