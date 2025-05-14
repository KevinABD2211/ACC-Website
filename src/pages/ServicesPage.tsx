
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Droplet, Zap, Construction, Flower } from "lucide-react";

const ServicesPage = () => {
  const serviceCards = [
    {
      title: "Plumbing, Heating & Drainage",
      description: "Complete water, waste, and heating solutions.",
      bulletPoints: [
        "Fit-outs (bathrooms, kitchens, HVAC tie-ins)",
        "Municipal sewer connections",
        "Hydronic radiators & under-floor heating",
        "Preventive maintenance"
      ],
      icon: <Droplet className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Electrical & Automation",
      description: "Power, lighting, and smart-home control.",
      bulletPoints: [
        "Full wiring & panel work",
        "LED & architectural lighting",
        "Motorized curtains, shades, AC controls",
        "Structured cabling & CCTV"
      ],
      icon: <Zap className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1633111245062-8933671fa07c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Construction & Renovation",
      description: "From targeted upgrades to ground-up builds.",
      bulletPoints: [
        "Partial renovations (any room/façade)",
        "Full-scope overhauls",
        "New residential/commercial construction",
        "All trades supervised by Kevin Abdallah"
      ],
      icon: <Construction className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor & Landscape Systems",
      description: "Pools, irrigation, hardscape, and more.",
      bulletPoints: [
        "New pools & deck waterproofing",
        "Automated irrigation & drainage",
        "Patios, walkways & exterior lighting",
        "Landscape electrical wiring"
      ],
      icon: <Flower className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1551241484-e58d2cfacd63?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and development solutions"
        imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80"
        pattern="diagonal-lines"
      />

      {/* Services Cards */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="From initial concept to final delivery, we provide complete solutions for all your construction needs."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                bulletPoints={service.bulletPoints}
                icon={service.icon}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 px-4 md:px-6 bg-acg-navy text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:max-w-2xl mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get started? Contact us today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a 
                href="tel:+9613255206" 
                className="flex items-center text-lg hover:text-acg-gold transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +961 3 255 206
              </a>
              <a 
                href="mailto:info@acg-lb.com" 
                className="flex items-center text-lg hover:text-acg-gold transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@acg-lb.com
              </a>
            </div>
          </div>
          <div className="relative">
            <a 
              href="/contact" 
              className="bg-white text-acg-navy px-8 py-3 rounded font-semibold hover:bg-acg-gold hover:text-white transition-colors inline-block"
            >
              Get a Free Consultation
            </a>
            <img 
              src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
              alt="ACG Logo" 
              className="h-10 w-auto ml-4 hidden md:inline-block opacity-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
