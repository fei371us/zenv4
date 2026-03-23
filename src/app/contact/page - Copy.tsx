import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              We're here to answer your questions and discuss your technology needs. Reach out via email at <a href="mailto:info@zenmatrix.org" className="text-primary hover:underline">info@zenmatrix.org</a> or call us at <span className="text-primary">+65 8202 1904</span>.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-muted p-8 rounded-xl border border-border mb-8 lg:mb-0">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg">Address</h4>
                    <p className="text-muted-foreground">
                      1 Commonwealth Lane #06-10<br />
                      One Commonwealth<br />
                      Singapore 149544
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg">Phone</h4>
                    <p className="text-muted-foreground">
                      WhatsApp: +65 8202 1904
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg">Email</h4>
                    <p className="text-muted-foreground">
                      info@zenmatrix.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-montserrat font-bold text-3xl mb-4">How We Work With You</h2>
              <p className="text-muted-foreground text-lg">
                Our approach is collaborative and transparent, ensuring your technology solutions are perfectly aligned with your business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Consultation</h3>
                <p className="text-muted-foreground">
                  We begin with an in-depth discussion to understand your business needs, challenges, and objectives.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Strategy & Planning</h3>
                <p className="text-muted-foreground">
                  We develop a tailored technology strategy and detailed implementation plan aligned with your goals.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3">Implementation & Support</h3>
                <p className="text-muted-foreground">
                  We execute the plan with precision and provide ongoing support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}