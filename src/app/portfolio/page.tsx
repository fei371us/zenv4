import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
                Portfolio
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                Explore how we’ve partnered with clients across industries to deliver tailored solutions that drive growth, solve challenges, and bring real results to life through our expertise.
              </p>
              <div className="space-y-4">
                <Link
                  href="/portfolio/public-transport-solution"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Public transport solution
                </Link>
                <Link
                  href="/portfolio/jiaguwen-ai-learning"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Jiaguwen AI Learning
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}