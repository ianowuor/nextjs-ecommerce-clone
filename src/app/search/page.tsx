/* src/app/search/page.tsx */
import Breadcrumb from "@/components/common/Breadcrumbs";
import ProductCard from "@/components/ecommerce/ProductCard";

// Mock function to simulate a search query from the URL
// In the real app, we'll use useSearchParams() from 'next/navigation'
const searchQuery = "Monitor"; 

const results = [
  { id: 1, name: "ASUS FHD Gaming Monitor", price: 700, rating: 5, reviews: 325, image: "/images/monitor.png" },
  { id: 2, name: "IPS LCD Gaming Monitor", price: 650, oldPrice: 800, discount: "-15%", rating: 4.5, reviews: 120, image: "/images/monitor-2.png" },
];

export default function SearchResultsPage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <Breadcrumb items={[{ label: "Search Results", href: "/search" }]} />

      <div className="mt-10">
        {/* Search Header */}
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-[24px] font-medium tracking-[4%]">
            Search Results for: <span className="text-[#DB4444]">"{searchQuery}"</span>
          </h1>
          <p className="text-[16px] opacity-70">
            We found {results.length} products matching your search.
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[60px]">
            {results.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-[100px] text-center">
            <h2 className="text-[24px] font-medium mb-4">No results found</h2>
            <p className="opacity-70 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
            <button className="bg-[#DB4444] text-white px-10 py-4 rounded-[4px]">
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}