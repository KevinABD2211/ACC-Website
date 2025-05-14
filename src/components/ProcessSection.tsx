
import { NavLink } from "react-router-dom";
import { MessageSquare, PenTool, FileText, ShoppingBag, Hammer, Layers, CheckSquare, HeartHandshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface ProcessSectionProps {
  summarized?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

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

const ProcessSection = ({ summarized = false, sectionTitle = "Our Process", sectionSubtitle }: ProcessSectionProps) => {
  // Full process steps
  const allSteps = [
    {
      icon: <MessageSquare className="h-6 w-6 text-acg-navy" />,
      title: "Consultation",
      description: "Initial meeting to discuss your project needs and vision."
    },
    {
      icon: <PenTool className="h-6 w-6 text-acg-navy" />,
      title: "Design",
      description: "Working with architects to ensure technical aspects are properly planned."
    },
    {
      icon: <FileText className="h-6 w-6 text-acg-navy" />,
      title: "Permitting",
      description: "Managing all necessary permits and regulatory approvals."
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-acg-navy" />,
      title: "Procurement",
      description: "Sourcing high-quality materials for timely delivery."
    },
    {
      icon: <Hammer className="h-6 w-6 text-acg-navy" />,
      title: "Construction",
      description: "Professional execution with direct supervision."
    },
    {
      icon: <Layers className="h-6 w-6 text-acg-navy" />,
      title: "Integration",
      description: "Seamless integration of plumbing, electrical, and automation systems."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-acg-navy" />,
      title: "Handover",
      description: "Final touches, quality assurance, and client walkthrough."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-acg-navy" />,
      title: "Aftercare",
      description: "Ongoing support and warranty services to ensure lasting quality."
    }
  ];
  
  // Key steps for the summarized version
  const keySteps = [
    allSteps[0], // Consultation
    allSteps[2], // Permitting
    allSteps[4], // Construction
    allSteps[7]  // Aftercare
  ];
  
  const stepsToShow = summarized ? keySteps : allSteps;
  
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{sectionTitle}</h2>
          {summarized && sectionSubtitle && (
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {sectionSubtitle}
            </p>
          )}
        </div>
        
        {summarized ? (
          // Summarized version
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsToShow.map((step, index) => (
              <ProcessStep 
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        ) : (
          // Full version
          <>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allSteps.slice(0, 4).map((step, index) => (
                <ProcessStep 
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allSteps.slice(4, 8).map((step, index) => (
                <ProcessStep 
                  key={index + 4}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="mt-12 text-center">
          <NavLink 
            to="/process" 
            className="inline-block bg-acg-navy text-white px-6 py-3 rounded font-semibold hover:bg-acg-gold transition-colors"
          >
            {summarized ? "Explore Our Full Process" : "Learn More About Our Process"}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
