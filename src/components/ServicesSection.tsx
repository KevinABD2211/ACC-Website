
import { NavLink } from "react-router-dom";
import { ArrowRight, Droplet, Zap, Building, Flower, Hammer, UserCog, ClipboardList, WrenchIcon, Home } from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ServicesSectionProps {
  id?: string;
  minimized?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const ServicesSection = ({ id, minimized = false, sectionTitle = "What We Do", sectionSubtitle }: ServicesSectionProps) => {
  const grid = useScrollReveal<HTMLDivElement>(0.1);

  const featuredServices = [
    { title: "Plumbing, Heating & Drainage", description: "Complete water, waste, and heating solutions.", bulletPoints: ["Fit-outs (bathrooms, kitchens, HVAC)", "Municipal sewer connections", "Hydronic radiators & under-floor heating", "Preventive maintenance"], icon: <Droplet className="h-5 w-5" />, imageUrl: "/lovable-uploads/18ae3bb4-4d7e-4778-a0b8-81bb306daf3c.png" },
    { title: "Electrical & Automation", description: "Power, lighting, and smart-home control.", bulletPoints: ["Full wiring & panel work", "LED & architectural lighting", "Motorized curtains, shades, AC controls", "Structured cabling & CCTV"], icon: <Zap className="h-5 w-5" />, imageUrl: "/lovable-uploads/84371c46-a251-4c7b-b5e6-bb4f0a997fdb.png" },
    { title: "Renovation", description: "Transform spaces with expert renovation.", bulletPoints: ["Partial renovations (any room/façade)", "Full-scope overhauls", "Kitchen and bathroom remodeling", "Heritage property restoration"], icon: <Hammer className="h-5 w-5" />, imageUrl: "/lovable-uploads/93d83567-97a7-4749-8e58-17e5aea99e73.png" },
    { title: "General Contracting", description: "From concept to completion.", bulletPoints: ["New residential construction", "Commercial building projects", "Project management", "Construction supervision"], icon: <Building className="h-5 w-5" />, imageUrl: "/lovable-uploads/9830d81a-8416-481b-930f-420412ebdbad.png" },
  ];

  const allServices = [
    ...featuredServices,
    { title: "Pools & Landscape Systems", description: "Complete pool and landscaping solutions.", bulletPoints: ["New pool construction", "Water proofing & maintenance", "Automated irrigation & drainage", "Patios, walkways & exterior lighting"], icon: <Flower className="h-5 w-5" />, imageUrl: "/lovable-uploads/215c69e6-f673-4263-9d10-abaf203762ad.png" },
    { title: "Supervision", description: "Expert project oversight.", bulletPoints: ["Construction management", "Quality control inspections", "Site coordination", "Contract administration"], icon: <UserCog className="h-5 w-5" />, imageUrl: "/lovable-uploads/8723e86a-dd30-4083-8dc4-f203220b9579.png" },
    { title: "Consulting", description: "Professional technical guidance.", bulletPoints: ["Technical consulting", "Project feasibility studies", "Design review", "Building system optimization"], icon: <ClipboardList className="h-5 w-5" />, imageUrl: "/lovable-uploads/63a47bed-84e6-4235-9dc2-97942d0a1683.png" },
    { title: "Maintenance", description: "Preventive and regular care.", bulletPoints: ["Building systems maintenance", "Preventive care programs", "Emergency repairs", "Annual property inspections"], icon: <WrenchIcon className="h-5 w-5" />, imageUrl: "/lovable-uploads/bb716219-80a8-4b07-b252-6f2f3394b9db.png" },
    { title: "Property Care & Absentee Owners", description: "Peace of mind for owners abroad.", bulletPoints: ["Scheduled inspections and reporting", "Pool and garden maintenance", "Emergency response and preventive repairs"], icon: <Home className="h-5 w-5" />, imageUrl: "/lovable-uploads/bb716219-80a8-4b07-b252-6f2f3394b9db.png" },
  ];

  const servicesToShow = minimized ? featuredServices : allServices;

  return (
    <section id={id} className="py-28 md:py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} center={true} />
        <div
          ref={grid.ref}
          className={`stagger-children ${grid.isVisible ? "visible" : ""} grid grid-cols-1 ${minimized ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}
        >
          {servicesToShow.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-20">
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-3 border border-acg-navy/20 text-acg-navy px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-navy hover:text-white transition-all duration-500"
          >
            {minimized ? "All Services" : "Explore Services"}
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
