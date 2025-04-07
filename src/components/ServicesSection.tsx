import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that grows with your business. Our cloud solutions provide flexibility and reliability.",
      icon: "https://ext.same-assets.com/1148437217/3783633550.svg",
    },
    {
      id: "development",
      title: "Software Development",
      description: "Custom software solutions designed to meet your specific business needs and streamline your operations.",
      icon: "https://ext.same-assets.com/1148437217/2563901416.svg",
    },
    {
      id: "data",
      title: "Data Analytics",
      description: "Transform your data into actionable insights. Our analytics solutions help you make data-driven decisions.",
      icon: "https://ext.same-assets.com/1148437217/548389142.svg",
    },
    {
      id: "intelligence",
      title: "Business Intelligence",
      description: "Gain strategic insights with our BI solutions. Visualize trends, monitor performance, and identify opportunities.",
      icon: "https://ext.same-assets.com/1148437217/260646423.svg",
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "Harness the power of AI to automate processes, predict outcomes, and enhance customer experiences.",
      icon: "https://ext.same-assets.com/1148437217/4061061103.svg",
    },
    {
      id: "transformation",
      title: "Digital Transformation",
      description: "Strategically integrate digital technology into all areas of your business for fundamental change.",
      icon: "https://ext.same-assets.com/1148437217/2320907649.svg",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Core Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover how ZenMatrix can transform your business with our comprehensive suite of technological solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-card rounded-lg p-8 border border-border transition-all hover:shadow-md hover:border-primary/20 flex flex-col h-full">
              <CardHeader className="p-0 pb-2 space-y-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <img src={service.icon} alt={service.title} className="w-6 h-6" />
                </div>
                <CardTitle className="font-montserrat font-semibold text-xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </CardContent>
              <CardFooter className="p-0 pt-2">
                <Link className="text-primary font-medium inline-flex items-center hover:underline" href={`/services#${service.id}`}>
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
