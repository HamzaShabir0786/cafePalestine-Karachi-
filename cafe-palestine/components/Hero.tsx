import TatreezBand from "./TatreezBand";
import { restaurant } from "@/lib/menu";

export default function Hero() {
  return (
    <section id="top" className="relative ">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-palestine">
          Scheme 33 · Ayoub Goth · Karachi
        </p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-oliveDeep sm:text-6xl">
          Food from the street, named for a homeland.
        </h1>

        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          Sizzling karahi, smoky tikka, and biryani cooked to order — {restaurant.name} is a
          neighbourhood table in Scheme 33 that carries the name of Palestine with pride, and
          serves it with Karachi&apos;s own flavour.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="focus-ring rounded-full bg-oliveDeep px-6 py-3 text-sm font-semibold text-sand transition-transform hover:scale-105"
          >
            See the Menu
          </a>
          <a
            href={`https://wa.me/${restaurant.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border-2 border-oliveDeep px-6 py-3 text-sm font-semibold text-oliveDeep transition-colors hover:bg-oliveDeep hover:text-sand"
          >
            Order on WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-ink/70">
          <span className="flex items-center gap-2">
            <span className="font-display text-palestine">Hours</span> {restaurant.hours}
          </span>
          <span className="flex items-center gap-2">
            <span className="font-display text-palestine">Address</span> {restaurant.address}
          </span>
        </div>
      </div>
      <TatreezBand variant="sand" />
      
    </section>
  );
}
