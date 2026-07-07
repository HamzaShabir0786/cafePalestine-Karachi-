import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
