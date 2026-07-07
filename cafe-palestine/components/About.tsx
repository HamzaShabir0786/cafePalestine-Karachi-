import TatreezBand from "./TatreezBand";

const values = [
  {
    title: "Cooked to order",
    body: "Karahi goes into the pan only once you ask for it — no steam tables, no reheats.",
  },
  {
    title: "A table for the mohalla",
    body: "Chai at sixty rupees and a shared plate of fries — priced for regulars, not one-time guests.",
  },
  {
    title: "Karachi roots, Palestine name",
    body: "We named this café after Palestine on purpose. It sits over the counter every day we're open.",
  },
];

export default function About() {
  return (
    <section id="story" className="bg-oliveDeep text-sand">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Our Story
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
          A small kitchen in Scheme 33, cooking loud.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-sand/80">
          Café Palestine opened as a street-side kitchen near Ayoub Goth, built on the food people
          in this mohalla already loved — zinger burgers after school, biryani on a Friday, karahi
          when the whole family shows up. The name is not decoration. It is what we chose to call
          the place, and we say it every time someone asks for the bill.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="border-t-2 border-gold pt-4">
              <h3 className="font-display text-lg text-sand">{value.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-sand/70">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
      <TatreezBand variant="dark" />
    </section>
  );
}
