import { menu } from "@/lib/menu";

function formatPrice(price: number) {
  return `Rs ${price.toLocaleString("en-PK")}`;
}

export default function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-palestine">
        The Menu
      </p>
      <h2 className="mt-4 max-w-xl font-display text-3xl leading-snug text-oliveDeep sm:text-4xl">
        Everything on the counter, one price each.
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {menu.map((category) => (
          <div key={category.id} className="rounded-2xl border border-ink/10 bg-white/40 p-6 sm:p-7">
            <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
              <h3 className="font-display text-xl text-oliveDeep">{category.title}</h3>
              <span dir="rtl" className="font-display text-sm text-palestine/70">
                {category.arabic}
              </span>
            </div>
            <ul className="mt-4 divide-y divide-ink/10">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-body text-sm font-medium text-ink sm:text-base">
                    {item.name}
                    {item.unit ? (
                      <span className="ml-2 text-xs font-normal text-ink/50">{item.unit}</span>
                    ) : null}
                  </span>
                  <span className="whitespace-nowrap font-display text-base text-gold sm:text-lg">
                    {formatPrice(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 font-body text-xs text-ink/50">
        Prices in Pakistani Rupees (PKR). Menu and pricing may change without notice.
      </p>
    </section>
  );
}
