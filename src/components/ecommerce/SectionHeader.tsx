/* src/components/ecommerce/SectionHeader.tsx */
interface SectionHeaderProps {
  label: string;
  title: string;
  showButton?: boolean;
}

export default function SectionHeader({ label, title, showButton }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-[24px] mb-[60px]">
      <div className="flex items-center gap-[16px]">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
        <span className="text-[#DB4444] font-semibold text-[16px]">{label}</span>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[36px] font-semibold leading-[48px] tracking-[4%]">{title}</h2>
        {showButton && (
          <button className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#E07575] transition-colors">
            View All
          </button>
        )}
      </div>
    </div>
  );
}