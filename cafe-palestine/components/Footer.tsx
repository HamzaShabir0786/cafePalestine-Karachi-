import { restaurant } from "@/lib/menu";

export default function Footer() {
  return (
    <footer className="bg-oliveDeep text-sand/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base text-sand">{restaurant.name}</p>
        <p>
          {restaurant.address} · {restaurant.whatsappDisplay}
        </p>
        <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
