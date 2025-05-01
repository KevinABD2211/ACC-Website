
import { Droplet, Plug, Hammer, Tree } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-20 px-4 md:px-6 bg-fadco-lightgray", className)}>
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive construction and development services to meet all your needs."
          center={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <ServiceCard 
            title="Plumbing, Heating & Drainage"
            description="Fit-outs, sewer tie-ins, hydronic & under-floor heating, preventive maintenance."
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            icon={
              <Droplet className="h-10 w-10" />
            }
          />
          <ServiceCard 
            title="Electrical & Automation"
            description="Wiring, fixtures, LED lighting, full-home smart controls (lights, curtains, shades, AC), panel work."
            imageUrl="https://images.unsplash.com/photo-1633111245062-8933671fa07c?auto=format&fit=crop&w=600&q=80"
            icon={
              <Plug className="h-10 w-10" />
            }
          />
          <ServiceCard 
            title="Construction & Renovation"
            description="Project management, partial upgrades (any room/façade), full renovations, ground-up builds—all trades supervised."
            imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
            icon={
              <Hammer className="h-10 w-10" />
            }
          />
          <ServiceCard 
            title="Outdoor & Landscape Systems"
            description="Pools & water features, irrigation & drainage, hardscape & lighting, waterproofing."
            imageUrl="https://images.unsplash.com/photo-1551241484-e58d2cfacd63?auto=format&fit=crop&w=600&q=80"
            icon={
              <Tree className="h-10 w-10" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
