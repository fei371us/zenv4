import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-primary py-2">
        <p className="ticker-text text-primary-foreground whitespace-nowrap px-4">
          Save 10% on ALL Corporate Microsoft Licenses – Limited Time! More than 3x the average discount—contact us to claim your savings today.
        </p>
      </div>
      <main className="flex-grow">
        <Hero />
        <NewsSection />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
