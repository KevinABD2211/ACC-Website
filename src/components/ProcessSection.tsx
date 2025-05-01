
import { NavLink } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { MessageSquare, ShoppingBag, Hammer, CheckSquare } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation",
      description: "Initial meeting to discuss your project needs and vision.",
      icon: <MessageSquare className="h-8 w-8 text-fadco-navy" />
    },
    {
      id: 2,
      title: "Procurement",
      description: "Sourcing high-quality materials for your project.",
      icon: <ShoppingBag className="h-8 w-8 text-fadco-navy" />
    },
    {
      id: 3,
      title: "Construction",
      description: "Professional execution with direct supervision.",
      icon: <Hammer className="h-8 w-8 text-fadco-navy" />
    },
    {
      id: 4,
      title: "Handover",
      description: "Final touches and comprehensive client walkthrough.",
      icon: <CheckSquare className="h-8 w-8 text-fadco-navy" />
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Process" 
          subtitle="A turnkey approach from concept to completion."
          center={true}
        />
        
        <div className="mt-12 relative">
          {/* Horizontal line connecting process steps (desktop only) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center relative z-10">
                <div className="bg-white w-24 h-24 rounded-full shadow-md flex items-center justify-center mb-4 border-2 border-fadco-navy">
                  <div className="text-fadco-navy">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-fadco-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 z-20">
                    <div className="w-4 h-4 rotate-45 border-t-0 border-l-0 border-r-2 border-b-2 border-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink 
              to="/process" 
              className="inline-flex items-center text-fadco-navy hover:text-fadco-gold transition-colors font-medium"
            >
              See Full Process
              <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
