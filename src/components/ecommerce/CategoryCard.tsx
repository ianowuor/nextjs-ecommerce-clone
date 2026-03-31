/* src/components/ecommerce/CategoryCard.tsx */
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
}

export default function CategoryCard({ name, icon: Icon }: CategoryCardProps) {
  return (
    <div className="w-[170px] h-[145px] border border-gray-300 rounded-[4px] flex flex-col items-center justify-center gap-[16px] cursor-pointer transition-all duration-300 hover:bg-[#DB4444] hover:border-[#DB4444] hover:shadow-md group">
      <Icon className="w-[56px] h-[56px] stroke-1 group-hover:text-white transition-colors" />
      <span className="text-[16px] leading-[24px] group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}