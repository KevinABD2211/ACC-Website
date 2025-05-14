
import { NavLink } from "react-router-dom";
import { MessageSquare, PenTool, FileText, ShoppingBag, Hammer, Layers, CheckSquare, HeartHandshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep = ({ icon, title, description }: ProcessStepProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
      <div className="bg-acg-navy bg-opacity-10 rounded-full p-3 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-acg-navy mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Process" 
          subtitle="A systematic approach to construction and development"
          center={true}
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep 
            icon={<MessageSquare className="h-6 w-6 text-acg-navy" />}
            title="Consultation"
            description="Initial meeting to discuss your project needs and vision."
          />
          <ProcessStep 
            icon={<PenTool className="h-6 w-6 text-acg-navy" />}
            title="Design"
            description="Working with architects to ensure technical aspects are properly planned."
          />
          <ProcessStep 
            icon={<FileText className="h-6 w-6 text-acg-navy" />}
            title="Permitting"
            description="Managing all necessary permits and regulatory approvals."
          />
          <ProcessStep 
            icon={<ShoppingBag className="h-6 w-6 text-acg-navy" />}
            title="Procurement"
            description="Sourcing high-quality materials for timely delivery."
          />
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep 
            icon={<Hammer className="h-6 w-6 text-acg-navy" />}
            title="Construction"
            description="Professional execution with direct supervision."
          />
          <ProcessStep 
            icon={<Layers className="h-6 w-6 text-acg-navy" />}
            title="Integration"
            description="Seamless integration of plumbing, electrical, and automation systems."
          />
          <ProcessStep 
            icon={<CheckSquare className="h-6 w-6 text-acg-navy" />}
            title="Handover"
            description="Final touches, quality assurance, and client walkthrough."
          />
          <ProcessStep 
            icon={<HeartHandshake className="h-6 w-6 text-acg-navy" />}
            title="Aftercare"
            description="Ongoing support and warranty services to ensure lasting quality."
          />
        </div>
        
        <div className="mt-12 text-center">
          <NavLink 
            to="/process" 
            className="inline-block bg-acg-navy text-white px-6 py-3 rounded font-semibold hover:bg-acg-gold transition-colors"
          >
            Learn More About Our Process
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
