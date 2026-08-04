import Link from "next/link";
import type { ProductCard as ProductCardType } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ProductCardType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
      {product.imageUrl ? (
        <Link href={product.productUrl ?? "#"} target="_blank" rel="noreferrer">
          <Image
            width={300}
            height={300}
            style={{ height: "auto" }}
            src={product.imageUrl}
            alt={product.title}
            loading="lazy"
            className="w-full object-cover"
          />
        </Link>
      ) : (
        <div className="h-40 w-full bg-[#ece9e4]" />
      )}

      <div className="space-y-2 p-3">
        <p className="line-clamp-2 text-sm font-semibold leading-5">
          {product.title}
        </p>
        <p className="text-xs text-zinc-500">{product.shopName}</p>
        <div className="flex items-center justify-between gap-5">
          <span className="text-base font-bold text-[#d61f00]">
            {product.priceText}
          </span>
          <span className="rounded-full bg-[#f2efe8] px-2 py-1 text-[11px] text-zinc-600">
            {product.section}
          </span>
        </div>
        {product.benefit ? (
          <p className="rounded-md bg-[#fff3ed] px-2 py-1 text-[11px] text-[#b7481f]">
            {product.benefit}
          </p>
        ) : null}
      </div>
    </article>
  );
}
