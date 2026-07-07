export type MenuItem = {
  name: string;
  price: number;
  unit?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  arabic: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "fast-food",
    title: "Fast Food",
    arabic: "وجبات سريعة",
    items: [
      { name: "Zinger Burger", price: 280 },
      { name: "Potato Fries", price: 100 },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    arabic: "أرز",
    items: [{ name: "Chicken Biryani", price: 200, unit: "1 plate" }],
  },
  {
    id: "bbq-tikka",
    title: "BBQ & Tikka",
    arabic: "شواء",
    items: [
      { name: "Chicken Leg Tikka", price: 380 },
      { name: "Chicken Chest Tikka", price: 480 },
      { name: "Malai Tikka Boti", price: 300 },
      { name: "Shami Kabab", price: 380, unit: "1 plate" },
    ],
  },
  {
    id: "karahi",
    title: "Karahi",
    arabic: "قدر",
    items: [
      { name: "Chicken Karahi", price: 1400, unit: "1 kg" },
      { name: "Beef Karahi", price: 3100, unit: "1 kg" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    arabic: "مشروبات",
    items: [
      { name: "Chai", price: 60, unit: "1 cup" },
      { name: "Cold Drinks", price: 200 },
    ],
  },
];

export const restaurant = {
  name: "Café Palestine",
  tagline: "Karachi flavour, served with solidarity",
  address: "Scheme 33, near Ayoub Goth, Karachi, Pakistan",
  hours: "Open daily · 12:00 PM – 12:00 AM",
  whatsappDisplay: "0318323446070",
  whatsappNumber: "03183246070",
  mapsQuery: "Scheme 33 near Ayoub Goth Karachi",
};
