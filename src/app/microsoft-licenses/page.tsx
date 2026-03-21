"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function MicrosoftLicensesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
                Microsoft <span className="text-primary">Licenses</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                Save 10% on ALL Corporate Microsoft Licenses – Limited Time!
              </p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  Why Choose Our Microsoft Licenses?
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  More than 3x the average discount—contact us to claim your savings today.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>10% off corporate volume licensing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>All Microsoft products included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Expert support and consulting</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium"
                >
                  Contact Us
                </Link>
              </div>
              <div className="bg-muted p-8 rounded-xl border border-border">
                <h3 className="font-montserrat font-bold text-xl mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Reach out to our licensing specialists to discuss your needs and secure your discount.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}