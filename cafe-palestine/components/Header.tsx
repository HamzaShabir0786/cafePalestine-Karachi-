import { restaurant } from "@/lib/menu";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="focus-ring font-display text-xl tracking-wide text-oliveDeep sm:text-2xl">
          {restaurant.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring font-body text-sm font-medium text-ink/80 transition-colors hover:text-palestine"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/${restaurant.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full bg-palestine px-4 py-2 text-sm font-semibold text-sand transition-colors hover:bg-oliveDeep"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
