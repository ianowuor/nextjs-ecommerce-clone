/* src/app/not-found.tsx */
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumbs";

export default function NotFound() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      {/* 1. Breadcrumb */}
      <Breadcrumb items={[{ label: "404 Error", href: "/404" }]} />

      {/* 2. Main Content */}
      <div className="flex flex-col items-center justify-center pt-[100px] text-center">
        <h1 className="text-[110px] font-medium leading-[115px] tracking-[3%] mb-[40px]">
          404 Not Found
        </h1>
        
        <p className="text-[16px] mb-[80px]">
          Your visited page not found. You may go home page.
        </p>

        {/* 3. Return Button */}
        <Link 
          href="/" 
          className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#c23b3b] transition-all"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}