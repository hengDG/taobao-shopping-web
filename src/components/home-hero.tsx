import Image from "next/image";
import { ChevronRight, PackageCheck, ShieldCheck, Truck } from "lucide-react";

export function HomeHero() {
  return (
    <main className="relative overflow-hidden px-4 lg:py-6 sm:px-8 lg:px-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(105,139,255,0.22),transparent_0%),radial-gradient(circle_at_88%_5%,rgba(120,164,255,0.22),transparent_0%)]" />

      <div className="pointer-events-none absolute top-6 right-6 hidden h-56 w-[44%] rounded-full bg-[radial-gradient(circle,rgba(96,133,245,0.28)_1.2px,transparent_1.3px)] bg-size-[8px_8px] opacity-55 lg:block" />
      <div className="pointer-events-none absolute bottom-6 left-6 hidden h-32 w-[44%] rounded-full bg-[radial-gradient(circle,rgba(96,133,245,0.28)_1.2px,transparent_1.3px)] bg-size-[8px_8px] opacity-55 lg:block" />

      <section className="relative hidden lg:flex mx-auto  h-[50%] w-full max-w-[95%] flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-[60%] max-w-3xl  ">
          <h1 className="text-balance text-4xl leading-tight font-extrabold tracking-tight text-[#194891] sm:text-5xl">
            Easily purchase Chinese products
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            {["Order Query", "Estimation", "Fill&Buy"].map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#3a4dc4] bg-white/70 px-5 py-2 text-sm font-semibold text-[#194891] transition-colors hover:bg-white"
              >
                {label}
                <ChevronRight className="size-4" />
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#194891]">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#3244b7] text-sm font-bold text-white">
                  1
                </span>
                <span className="h-px flex-1 border-t border-dashed border-[#5060c7]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1f2438]">
                Pay for the order
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59607b]">
                Paste the product link to the order, pay the product amount and
                shipping fee.
              </p>
              <PackageCheck className="mt-3 size-5 text-[#3244b7]" />
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-[#2e3fb6]">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#3244b7] text-sm font-bold text-white">
                  2
                </span>
                <span className="h-px flex-1 border-t border-dashed border-[#5060c7]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1f2438]">
                Quality and storage
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59607b]">
                Imported product inspection, secure repacking, and 90 days of
                free storage before shipment.
              </p>
              <ShieldCheck className="mt-3 size-5 text-[#3244b7]" />
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-[#2e3fb6]">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#3244b7] text-sm font-bold text-white">
                  3
                </span>
                {/* <span className="h-px flex-1 border-t border-dashed border-[#5060c7]" /> */}
              </div>
              <h3 className="text-2xl font-extrabold text-[#1f2438]">
                International transportation
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#59607b]">
                Support consolidated shipping for multiple orders, custom
                packaging.
              </p>
              <Truck className="mt-3 size-5 text-[#3244b7]" />
            </div>
          </div>
        </div>

        <div className="relative hidden min-w-[40%] shrink-0 lg:block">
          <Image
            src="/airplane-3d.png"
            alt="Airplane logistics"
            width={560}
            height={560}
            className="h-full max-h-95 w-full scale-x-[1] object-contain"
            priority
          />
        </div>
      </section>

      
    </main>
  );
}
