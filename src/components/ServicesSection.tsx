
import { NavLink } from "react-router-dom";
import { Pipette, Zap, Construction, Flower } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

interface ServicesSectionProps {
  id?: string;
}

const ServicesSection = ({ id }: ServicesSectionProps) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Expertise" 
          subtitle="Comprehensive building and development solutions for every aspect of your project."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ServiceCard
            title="Plumbing, Heating & Drainage"
            description="Complete water, waste, and heating solutions."
            bulletPoints={[
              "Fit-outs (bathrooms, kitchens, HVAC tie-ins)",
              "Municipal sewer connections",
              "Hydronic radiators & under-floor heating",
              "Preventive maintenance"
            ]}
            icon={<Pipette className="h-10 w-10" />}
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          />
          
          <ServiceCard
            title="Electrical & Automation"
            description="Power, lighting, and smart-home control."
            bulletPoints={[
              "Full wiring & panel work",
              "LED & architectural lighting",
              "Motorized curtains, shades, AC controls",
              "Structured cabling & CCTV"
            ]}
            icon={<Zap className="h-10 w-10" />}
            imageUrl="https://images.unsplash.com/photo-1633111245062-8933671fa07c?auto=format&fit=crop&w=800&q=80"
          />
          
          <ServiceCard
            title="Construction & Renovation"
            description="From targeted upgrades to ground-up builds."
            bulletPoints={[
              "Partial renovations (any room/façade)",
              "Full-scope overhauls",
              "New residential/commercial construction",
              "All trades supervised by Kevin Abdallah"
            ]}
            icon={<Construction className="h-10 w-10" />}
            imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
          />
          
          <ServiceCard
            title="Outdoor & Landscape Systems"
            description="Pools, irrigation, hardscape, and more."
            bulletPoints={[
              "New pools & deck waterproofing",
              "Automated irrigation & drainage",
              "Patios, walkways & exterior lighting",
              "Landscape electrical wiring"
            ]}
            icon={<Flower className="h-10 w-10" />}
            imageUrl="https://images.unsplash.com/photo-1551241484-e58d2cfacd63?auto=format&fit=crop&w=800&q=80"
          />
        </div>
        
        <div className="text-center mt-12">
          <NavLink 
            to="/services" 
            className="bg-fadco-navy text-white px-8 py-3 rounded font-semibold hover:bg-fadco-gold transition-colors inline-block"
          >
            View All Services
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
