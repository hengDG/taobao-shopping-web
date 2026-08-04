"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, History, Store } from "lucide-react";
import { products } from "@/data/products";

const slides = [
  {
    id: "slide-1",
    title: "NIKE Official Flagship Store",
    subtitle: "The selected type is ready",
    bgClass: "bg-linear-to-r from-[#37b97f] to-[#5ec47c]",
    image: products[0]?.imageUrl,
  },
  {
    id: "slide-2",
    title: "Top Home Living Picks",
    subtitle: "Trusted quality and fast shipping",
    bgClass: "bg-linear-to-r from-[#3b82d6] to-[#5d8df0]",
    image: products[1]?.imageUrl,
  },
  {
    id: "slide-3",
    title: "Beauty & Daily Essentials",
    subtitle: "Hot products updated every day",
    bgClass: "bg-linear-to-r from-[#6c63ff] to-[#8c7dff]",
    image: products[6]?.imageUrl,
  },
];

const hotSell = products.slice(0, 8);

export function HomeMarketplacePanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="mx-auto  grid w-full max-w-[95%] gap-3 pb-5 lg:grid-cols-12">
      <article
        className={`relative min-h-130 overflow-hidden rounded-2xl p-5 text-white shadow-sm lg:col-span-2 ${activeSlide.bgClass}`}
      >
        <span className="inline-flex rounded-full bg-red-600 px-2 py-1 text-xs font-semibold">
          天猫
        </span>
        <h3 className="mt-2 text-4xl font-extrabold leading-tight">
          {activeSlide.title}
        </h3>
        <p className="mt-1 text-xl text-white/90">{activeSlide.subtitle}</p>

        {activeSlide.image ? (
          <div className="pointer-events-none absolute right-3 bottom-20">
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              width={230}
              height={170}
              className="h-42 w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
            />
          </div>
        ) : null}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </article>

      <article className="rounded-2xl bg-[#f7f9ff] p-4 lg:col-span-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-extrabold text-[#263247]">
            10 billion yuan subsidy · If you buy something expensive, you will
          </h3>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center rounded-xl bg-[#194891] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143a75]"
          >
            Show more products
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {hotSell.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-[#edf2ff] bg-white p-3 shadow-[0_10px_24px_rgba(19,40,96,0.07)]"
            >
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={180}
                  height={140}
                  className="mx-auto h-32 w-full object-contain"
                />
              ) : null}

              <p className="mt-2 line-clamp-2 text-sm leading-5 font-semibold text-[#2a3044]">
                {product.title}
              </p>
              <p className="mt-1 line-clamp-1 text-xs text-[#7a849f]">
                {product.shopName}
              </p>

              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="rounded-md bg-[#ff5a12] px-2 py-1 text-sm font-bold text-white">
                  {product.priceText}
                </p>
                {product.benefit ? (
                  <span className="rounded-full bg-[#fff3ea] px-2 py-0.5 text-xs font-semibold text-[#d85a10]">
                    {product.benefit}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="relative w-full overflow-hidden rounded-2xl border border-[#d9e4ff] bg-linear-to-b from-white to-[#edf2ff] p-5 shadow-[0_14px_32px_rgba(26,66,152,0.16)] lg:col-span-3 lg:justify-self-end">
        <div className="pointer-events-none absolute -top-6 -right-8 size-24 rounded-full bg-[#dbe6ff]" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 size-20 rounded-full bg-[#dbe6ff]" />

        <div className="relative flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-full bg-[#ffb452] text-xl shadow-sm">
            🐥
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#1f2438]">
              Good afternoon
            </h3>
            <p className="text-sm text-[#5d6379]">
              Log in for deals and faster checkout
            </p>
          </div>
        </div>

        <p className="relative mt-5 text-xl font-bold text-[#22293e]">
          More exciting things to do
        </p>

        <button
          type="button"
          className="relative mt-4 w-full rounded-2xl bg-[#ff620f] px-4 py-3 text-xl font-extrabold text-white transition-colors hover:bg-[#eb5606]"
        >
          Log in now
        </button>

        <button
          type="button"
          className="relative mt-2 w-full rounded-2xl border border-[#d8e1f7] bg-white px-4 py-2 text-sm font-semibold text-[#234684] transition-colors hover:bg-[#f6f9ff]"
        >
          Register account
        </button>

        <div className="relative mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[#55607d]">
          <div className="rounded-xl bg-white/80 px-2 py-2">
            <Heart className="mx-auto mb-1 size-4 text-[#3244b7]" />
            Favorites
          </div>
          <div className="rounded-xl bg-white/80 px-2 py-2">
            <Store className="mx-auto mb-1 size-4 text-[#3244b7]" />
            Stores
          </div>
          <div className="rounded-xl bg-white/80 px-2 py-2">
            <History className="mx-auto mb-1 size-4 text-[#3244b7]" />
            Footprint
          </div>
        </div>

        <p className="relative mt-3 text-center text-xs text-[#7681a0]">
          Purchased · Coupons · History
        </p>
      </article>
    </section>
  );
}
