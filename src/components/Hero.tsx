import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-background to-muted py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-primary">Balance</span> in Technology
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
              ZenMatrix provides harmony and balance in technological solutions, helping businesses thrive in the digital landscape.
              <br />
              <br />
              Transforming Businesses with AI, Cloud, and Blockchain Excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://zenmatrix-549810950.imgix.net/Zen_v2.png"
              alt="ZenMatrix Logo"
              width={300}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
