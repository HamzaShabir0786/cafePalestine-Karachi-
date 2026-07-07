import TatreezBand from "./TatreezBand";
import { restaurant } from "@/lib/menu";

export default function Location() {
  const query = encodeURIComponent(restaurant.mapsQuery);

  return (
    <section id="location" className="bg-sandDeep">
      <TatreezBand variant="sand" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 md:grid-cols-2">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-palestine">
            Find Us
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-oliveDeep sm:text-4xl">
            {restaurant.address}
          </h2>

          <dl className="mt-8 space-y-4 font-body text-sm text-ink/80 sm:text-base">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-oliveDeep">Hours</dt>
              <dd>{restaurant.hours}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-oliveDeep">WhatsApp</dt>
              <dd>{restaurant.whatsappDisplay}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-oliveDeep">Area</dt>
              <dd>Scheme 33, near Ayoub Goth, Karachi</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full bg-oliveDeep px-6 py-3 text-sm font-semibold text-sand transition-transform hover:scale-105"
            >
              Get Directions
            </a>
            <a
              href={`https://wa.me/${restaurant.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border-2 border-oliveDeep px-6 py-3 text-sm font-semibold text-oliveDeep transition-colors hover:bg-oliveDeep hover:text-sand"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
          <iframe
            title="Café Palestine location map"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
