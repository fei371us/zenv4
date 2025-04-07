import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-sm max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Let's work together to create technology solutions that bring balance and success to your organization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
