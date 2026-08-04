import type { Pin } from "@/types/pin";

type PinCardProps = {
  pin: Pin;
};

export function PinCard({ pin }: PinCardProps) {
  return (
    <article className="group mb-4 break-inside-avoid">
      <div className="relative overflow-hidden rounded-2xl bg-muted">
        <img
          src={pin.imageUrl}
          alt={pin.title}
          style={{ height: `${pin.imageHeight}px` }}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />

        <button className="absolute top-3 right-3 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
          Save
        </button>
      </div>

      <h3 className="mt-2 px-1 text-sm font-semibold text-foreground">
        {pin.title}
      </h3>
      <p className="px-1 text-xs text-muted-foreground">by {pin.author}</p>
    </article>
  );
}
