
import { NavLink } from "react-router-dom";
import { Droplet, Zap, Building, Flower, Hammer, UserCog, ClipboardList, WrenchIcon } from "lucide-react";
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          <ServiceCard
            title="Plumbing, Heating & Drainage"
            description="Complete water, waste, and heating solutions."
            bulletPoints={[
              "Fit-outs (bathrooms, kitchens, HVAC tie-ins)",
              "Municipal sewer connections",
              "Hydronic radiators & under-floor heating",
              "Preventive maintenance"
            ]}
            icon={<Droplet className="h-10 w-10" />}
            imageUrl="/lovable-uploads/18ae3bb4-4d7e-4778-a0b8-81bb306daf3c.png"
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
            imageUrl="/lovable-uploads/84371c46-a251-4c7b-b5e6-bb4f0a997fdb.png"
          />
          
          <ServiceCard
            title="Renovation"
            description="Transform existing spaces with expert renovation."
            bulletPoints={[
              "Partial renovations (any room/façade)",
              "Full-scope overhauls",
              "Kitchen and bathroom remodeling",
              "Heritage property restoration"
            ]}
            icon={<Hammer className="h-10 w-10" />}
            imageUrl="/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
          />
          
          <ServiceCard
            title="General Contracting"
            description="From concept to completion, full construction services."
            bulletPoints={[
              "New residential construction",
              "Commercial building projects",
              "Project management",
              "Construction supervision"
            ]}
            icon={<Building className="h-10 w-10" />}
            imageUrl="/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
          />
          
          <ServiceCard
            title="Pools & Landscape Systems"
            description="Complete pool installation and landscaping solutions."
            bulletPoints={[
              "New pool construction & installation",
              "Water proofing & pool maintenance",
              "Automated irrigation & drainage",
              "Patios, walkways & exterior lighting"
            ]}
            icon={<Flower className="h-10 w-10" />}
            imageUrl="/lovable-uploads/215c69e6-f673-4263-9d10-abaf203762ad.png"
          />
          
          <ServiceCard
            title="Supervision"
            description="Expert oversight for construction projects."
            bulletPoints={[
              "Construction management",
              "Quality control inspections",
              "Site coordination",
              "Contract administration"
            ]}
            icon={<UserCog className="h-10 w-10" />}
            imageUrl="/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
          />
          
          <ServiceCard
            title="Consulting"
            description="Professional guidance and technical expertise."
            bulletPoints={[
              "Technical consulting",
              "Project feasibility studies",
              "Design review",
              "Building system optimization"
            ]}
            icon={<ClipboardList className="h-10 w-10" />}
            imageUrl="/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
          />
          
          <ServiceCard
            title="Maintenance"
            description="Preventive and regular maintenance services."
            bulletPoints={[
              "Building systems maintenance",
              "Preventive care programs",
              "Emergency repairs",
              "Annual property inspections"
            ]}
            icon={<WrenchIcon className="h-10 w-10" />}
            imageUrl="/lovable-uploads/20b3dc76-9128-43f3-9700-10bdf91d67cc.png"
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
