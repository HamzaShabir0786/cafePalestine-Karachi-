import type { Metadata } from "next";
import { Reem_Kufi, Work_Sans } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";

const reemKufi = Reem_Kufi({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-reem",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café Palestine — Scheme 33, Karachi",
  description:
    "Café Palestine in Scheme 33, near Ayoub Goth, Karachi. Zinger burgers, chicken biryani, sizzling karahi, tikka & BBQ. Order on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${reemKufi.variable} ${workSans.variable} font-body bg-sand text-ink`}>
        {children}
      </body>
    </html>
  );
}
