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
