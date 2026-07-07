import { restaurant } from "@/lib/menu";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
        "Assalamualaikum! I'd like to order from Café Palestine."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-olive px-5 py-3 text-sand shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-oliveDeep"
      aria-label="Order on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.84-1.23-4.7-4.08-4.84-4.27-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Order on WhatsApp</span>
    </a>
  );
}
