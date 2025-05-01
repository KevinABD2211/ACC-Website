
import { Search, LayoutGrid, CheckSquare, Package, Hammer, Settings, FileCheck, Shield } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ className }) => {
  const steps = [
    {
      title: "Consultation & Feasibility",
      description: "We assess your needs, space, and budget to determine the best approach.",
      icon: <Search className="h-8 w-8" />
    },
    {
      title: "Design Coordination",
      description: "We work with architects and designers to ensure all systems work harmoniously.",
      icon: <LayoutGrid className="h-8 w-8" />
    },
    {
      title: "Permitting & Approvals",
      description: "We handle all necessary permits and regulatory approvals for your project.",
      icon: <CheckSquare className="h-8 w-8" />
    },
    {
      title: "Procurement & Logistics",
      description: "We source high-quality materials and equipment for your project.",
      icon: <Package className="h-8 w-8" />
    },
    {
      title: "Construction & General Contracting",
      description: "Our team manages all aspects of the construction process.",
      icon: <Hammer className="h-8 w-8" />
    },
    {
      title: "Systems Integration",
      description: "We ensure all systems work together seamlessly for optimal performance.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      title: "Finishes & Handover",
      description: "We complete all finishing details and prepare for project handover.",
      icon: <FileCheck className="h-8 w-8" />
    },
    {
      title: "Aftercare & Warranty",
      description: "We provide ongoing support and honor all warranty commitments.",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  return (
    <section className={cn("py-20 px-4 md:px-6 bg-white", className)}>
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Process & Turnkey Promise" 
          subtitle="We manage every step of your project with meticulous attention to detail."
          center={true}
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-fadco-lightgray p-6 rounded-lg">
              <div className="bg-fadco-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-fadco-gold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
