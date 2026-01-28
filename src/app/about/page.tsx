import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
                About <span className="text-primary">ZenMatrix</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                We are a team of passionate technology experts dedicated to helping businesses achieve digital transformation with balance and purpose.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">Our a Story</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  ZenMatrix began with a simple mission: to bring harmony to the often chaotic world of technology solutions. We recognized that many businesses were struggling to navigate the rapidly evolving digital landscape, often implementing technologies that didn't align with their core business objectives.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  Our team combined their extensive experience in software development, cloud computing, and business strategy to create a company that focuses on balanced technology solutions—ones that drive business growth while maintaining operational stability.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, ZenMatrix has grown into a trusted technology partner for businesses across various industries, from startups to enterprises. Our team has expanded, but our core philosophy remains the same: we believe in technology that works in harmony with your business goals.
                </p>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-md text-center">
                    <h3 className="font-montserrat font-bold text-2xl mb-4">Our Mission</h3>
                    <p className="text-foreground">
                      To provide technology solutions that create harmony between innovation and stability, enabling businesses to thrive in the digital age.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/5"></div>
                <Image
                  src="https://ext.same-assets.com/1148437217/2458509717.png"
                  alt="ZenMatrix Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                At ZenMatrix, our core values guide everything we do, from how we develop solutions to how we interact with our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Balance</h3>
                <p className="text-muted-foreground">
                  We believe in creating solutions that balance innovation with stability, complexity with usability, and technology with human needs.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue excellence in everything we do, from the quality of our code to the clarity of our communication with clients.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, becoming an extension of their team and ensuring that our solutions align with their goals.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of technology trends, continuously learning and adapting to bring innovative solutions to our clients.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open and honest communication, ensuring our clients have full visibility into our processes and decisions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Empowerment</h3>
                <p className="text-muted-foreground">
                  We empower businesses through technology, enabling them to reach their full potential in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">Why Choose ZenMatrix?</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Choosing ZenMatrix means partnering with a technology company that truly understands the balance between innovation and stability. We're more than just a service provider; we're a strategic partner invested in your success.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg">Experienced Team</h3>
                      <p className="text-muted-foreground">Our team brings decades of combined experience across various technology domains.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg">Custom Solutions</h3>
                      <p className="text-muted-foreground">We don't believe in one-size-fits-all. Every solution we create is tailored to your specific needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg">Ongoing Support</h3>
                      <p className="text-muted-foreground">Our relationship doesn't end at deployment. We provide continuous support to ensure your success.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg">Proven Results</h3>
                      <p className="text-muted-foreground">Our track record speaks for itself, with successful projects across various industries.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">Client Success Stories</h3>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <p className="italic text-muted-foreground mb-4">
                      "ZenMatrix transformed our outdated systems into a streamlined, cloud-based solution that has increased our efficiency by over 40%. Their team was professional, knowledgeable, and a pleasure to work with."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-primary">JD</span>
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">CTO, Global Enterprises</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <p className="italic text-muted-foreground mb-4">
                      "Working with ZenMatrix has been a game-changer for our business. Their data analytics solution has given us insights we never had before, driving better decision-making across the organization."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-primary">EB</span>
                      </div>
                      <div>
                        <p className="font-medium">Emily Brown</p>
                        <p className="text-sm text-muted-foreground">CEO, Innovate Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
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
