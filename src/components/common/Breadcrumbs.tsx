/* src/components/common/Breadcrumb.tsx */
import Link from "next/link";

export default function Breadcrumb({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex items-center gap-3 py-[80px] text-[14px]">
      <Link href="/" className="text-gray-400 hover:text-black transition-colors">Home</Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="text-gray-400">/</span>
          <Link 
            href={item.href} 
            className={idx === items.length - 1 ? "text-black font-medium" : "text-gray-400 hover:text-black"}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}