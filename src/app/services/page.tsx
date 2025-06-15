import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                ZenMatrix offers comprehensive technology solutions to help your business thrive in the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Solutions Section */}
        <section id="cloud" className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">Cloud Solutions</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our cloud solutions provide the foundation for your digital transformation journey. We help you leverage the power of cloud computing to drive innovation, reduce costs, and scale your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cloud infrastructure design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Public, private, and hybrid cloud solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cloud migration and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Managed cloud services and 24/7 support</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium">
                  Get Started
                </Link>
              </div>
              <div className="bg-muted p-8 rounded-xl border border-border">
                <h3 className="font-montserrat font-bold text-xl mb-4">Why Choose Our Cloud Solutions?</h3>
                <ul className="space-y-4">
                  <li className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-montserrat font-medium text-lg mb-2">Scalability</h4>
                    <p className="text-muted-foreground">Easily scale your infrastructure up or down based on your business needs.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-montserrat font-medium text-lg mb-2">Reliability</h4>
                    <p className="text-muted-foreground">Benefit from redundant systems and high availability architectures.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-montserrat font-medium text-lg mb-2">Security</h4>
                    <p className="text-muted-foreground">Advanced security measures to protect your data and applications.</p>
                  </li>
                  <li className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-montserrat font-medium text-lg mb-2">Cost-Efficiency</h4>
                    <p className="text-muted-foreground">Reduce capital expenses and optimize operational costs.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section id="development" className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-background p-8 rounded-xl border border-border">
                <h3 className="font-montserrat font-bold text-xl mb-4">Development Process</h3>
                <ul className="space-y-4">
                  <li className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-montserrat font-medium text-lg mb-2">1. Discovery & Planning</h4>
                    <p className="text-muted-foreground">We gather requirements and create a roadmap for your project.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-montserrat font-medium text-lg mb-2">2. Design & Prototyping</h4>
                    <p className="text-muted-foreground">We create wireframes and prototypes to visualize the solution.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-montserrat font-medium text-lg mb-2">3. Development</h4>
                    <p className="text-muted-foreground">Our team builds the solution using agile methodologies.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-montserrat font-medium text-lg mb-2">4. Testing & Deployment</h4>
                    <p className="text-muted-foreground">Rigorous testing ensures quality before deployment.</p>
                  </li>
                  <li className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-montserrat font-medium text-lg mb-2">5. Maintenance & Support</h4>
                    <p className="text-muted-foreground">Ongoing support and updates keep your software running smoothly.</p>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-montserrat font-bold text-3xl mb-6">Software Development</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We build custom software solutions that address your unique business challenges. Our development team uses modern technologies and best practices to deliver high-quality software.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Custom web application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mobile app development (iOS & Android)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Enterprise software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>API development and integration</span>
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <!DOCTYPE html><html><body><iframe src="https://copilotstudio.microsoft.com/environments/Default-13a6b953-4452-455a-ae90-029a9f02d601/bots/Default_mngAi2/webchat?__version__=2" frameborder="0" style="width: 100%; height: 100%;"></iframe></body></html>
        {/* Additional Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-4">More Services</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Explore our full range of technology solutions designed to help your business succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div id="data" className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-3">Data Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your data into actionable insights. Our data analytics solutions help you make data-driven decisions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Data warehousing and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Business intelligence reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Predictive analytics</span>
                  </li>
                </ul>
                <Link className="text-primary font-medium inline-flex items-center hover:underline" href="/contact">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div id="intelligence" className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-3">Business Intelligence</h3>
                <p className="text-muted-foreground mb-6">
                  Gain strategic insights with our BI solutions. Visualize trends, monitor performance, and identify opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Custom dashboards and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>KPI tracking and analysis</span>
                  </li>
                </ul>
                <Link className="text-primary font-medium inline-flex items-center hover:underline" href="/contact">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div id="ai" className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-3">AI & Machine Learning</h3>
                <p className="text-muted-foreground mb-6">
                  Harness the power of AI to automate processes, predict outcomes, and enhance customer experiences.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Predictive analytics</span>
                  </li>
                </ul>
                <Link className="text-primary font-medium inline-flex items-center hover:underline" href="/contact">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              <div id="transformation" className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-3">Digital Transformation</h3>
                <p className="text-muted-foreground mb-6">
                  Strategically integrate digital technology into all areas of your business for fundamental change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Digital strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Process automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Legacy system modernization</span>
                  </li>
                </ul>
                <Link className="text-primary font-medium inline-flex items-center hover:underline" href="/contact">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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
