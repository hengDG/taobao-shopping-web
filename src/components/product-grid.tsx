"use client";

import { useMemo, useState } from "react";
import type { ProductCard as ProductCardType } from "@/types/product";
import { ProductCard } from "@/components/product-card";

type CategoryKey = "All" | string;

type ProductGridProps = {
  products: ProductCardType[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");

  const categoryEntries = useMemo(
    () =>
      Array.from(
        products.reduce((map, product) => {
          map.set(product.section, (map.get(product.section) ?? 0) + 1);
          return map;
        }, new Map<string, number>()),
      ),
    [products],
  );

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) => product.section === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#1f1f1f]">
      <header className="sticky top-17 z-10 border-b  bg-[#194791ca] text-white backdrop-blur">
        <div className="mx-auto flex w-full max-w-[98%] items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === "All"
                ? "bg-[#1A478F] text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            All 
            {/* ({products.length}) */}
          </button>

          {categoryEntries.map(([category, count]) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-xl cursor-pointer border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-white bg-white text-[#194891]"
                    : "border-white/25 bg-white/12 text-white hover:bg-white/22"
                }`}
              >
                {category} 
              </button>
            );
          })}
        </div>
      </header>

      <main className="mx-auto w-full max-w-[98%] px-3 py-6 sm:px-5">
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-5 xl:columns-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-center text-zinc-500">
            No products found for this category.
          </p>
        ) : null}
      </main>
    </div>
  );
}
