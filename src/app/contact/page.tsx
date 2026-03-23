import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
      

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