/* src/components/ecommerce/ServicesInfo.tsx */
import { servicesData } from "@/constants/services";

export default function ServicesInfo() {
  return (
    <section className="max-w-[943px] mx-auto py-[140px] flex flex-col md:flex-row justify-between items-center gap-[80px]">
      {servicesData.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            {/* The "Double Circle" Icon Design */}
            <div className="w-[80px] h-[80px] bg-[#2F2E30]/30 rounded-full flex items-center justify-center mb-6">
              <div className="w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center">
                <Icon className="text-white w-10 h-10" strokeWidth={1.5} />
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-[20px] font-bold leading-[28px] mb-2 uppercase">
              {service.title}
            </h3>
            <p className="text-[14px] leading-[21px] text-black">
              {service.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}