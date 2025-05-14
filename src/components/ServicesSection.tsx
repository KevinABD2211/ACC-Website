import { NavLink } from "react-router-dom";
import { Droplet, Zap, Building, Flower, Hammer, UserCog, ClipboardList, WrenchIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

interface ServicesSectionProps {
  id?: string;
}

const ServicesSection = ({ id }: ServicesSectionProps) => {
  return (
    <section id={id} className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('/lovable-uploads/f1c763ee-cee9-44d6-91a7-e095251c0df9.png')", 
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          opacity: 0.05
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
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
            imageUrl="/lovable-uploads/93d83567-97a7-4749-8e58-17e5aea99e73.png"
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
            imageUrl="/lovable-uploads/9830d81a-8416-481b-930f-420412ebdbad.png"
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
            imageUrl="/lovable-uploads/8723e86a-dd30-4083-8dc4-f203220b9579.png"
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
            imageUrl="/lovable-uploads/63a47bed-84e6-4235-9dc2-97942d0a1683.png"
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
            imageUrl="/lovable-uploads/bb716219-80a8-4b07-b252-6f2f3394b9db.png"
          />
        </div>
        
        <div className="text-center mt-12">
          <NavLink 
            to="/services" 
            className="bg-acg-navy text-white px-8 py-3 rounded font-semibold hover:bg-acg-gold transition-colors inline-block"
          >
            View All Services
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
