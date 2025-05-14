
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Droplet, Zap, Building, Flower, Hammer, UserCog, ClipboardList, WrenchIcon } from "lucide-react";

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
      imageUrl: "/lovable-uploads/18ae3bb4-4d7e-4778-a0b8-81bb306daf3c.png"
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
      imageUrl: "/lovable-uploads/84371c46-a251-4c7b-b5e6-bb4f0a997fdb.png"
    },
    {
      title: "Renovation",
      description: "Transform existing spaces with expert renovation.",
      bulletPoints: [
        "Partial renovations (any room/façade)",
        "Full-scope overhauls",
        "Kitchen and bathroom remodeling",
        "Heritage property restoration"
      ],
      icon: <Hammer className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
    },
    {
      title: "General Contracting",
      description: "From concept to completion, full construction services.",
      bulletPoints: [
        "New residential construction",
        "Commercial building projects",
        "Project management",
        "Construction supervision"
      ],
      icon: <Building className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
    },
    {
      title: "Pools & Landscape Systems",
      description: "Complete pool installation and landscaping solutions.",
      bulletPoints: [
        "New pool construction & installation",
        "Water proofing & pool maintenance",
        "Automated irrigation & drainage",
        "Patios, walkways & exterior lighting"
      ],
      icon: <Flower className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/215c69e6-f673-4263-9d10-abaf203762ad.png"
    },
    {
      title: "Supervision",
      description: "Expert oversight for construction projects.",
      bulletPoints: [
        "Construction management",
        "Quality control inspections",
        "Site coordination",
        "Contract administration"
      ],
      icon: <UserCog className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
    },
    {
      title: "Consulting",
      description: "Professional guidance and technical expertise.",
      bulletPoints: [
        "Technical consulting",
        "Project feasibility studies",
        "Design review",
        "Building system optimization"
      ],
      icon: <ClipboardList className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
    },
    {
      title: "Maintenance",
      description: "Preventive and regular maintenance services.",
      bulletPoints: [
        "Building systems maintenance",
        "Preventive care programs",
        "Emergency repairs",
        "Annual property inspections"
      ],
      icon: <WrenchIcon className="h-10 w-10" />,
      imageUrl: "/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
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
              src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
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
