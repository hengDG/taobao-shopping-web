import type { Pin } from "@/types/pin";
import { PinCard } from "@/components/pin-card";

type PinMasonryProps = {
  pins: Pin[];
};

export function PinMasonry({ pins }: PinMasonryProps) {
  return (
    <section className="columns-2 gap-4 px-4 pb-24 sm:columns-3 lg:columns-4 xl:columns-5">
      {pins.map((pin) => (
        <PinCard key={pin.id} pin={pin} />
      ))}
    </section>
  );
}
