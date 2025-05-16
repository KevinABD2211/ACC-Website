
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, 
  PenTool, 
  FileText, 
  Toolbox, 
  Hammer, 
  Valve, 
  CheckSquare, 
  HeartHandshake 
} from "lucide-react";

const ProcessPage = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation",
      description: "Initial meeting to discuss your project needs and vision, assessing feasibility and scope.",
      icon: <MessageSquare className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 2,
      title: "Design Coordination",
      description: "Working with architects and designers to ensure all technical aspects are properly planned.",
      icon: <PenTool className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 3,
      title: "Permitting & Approvals",
      description: "Managing all necessary permits and regulatory approvals to ensure legal compliance.",
      icon: <FileText className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 4,
      title: "Procurement",
      description: "Sourcing high-quality materials and managing logistics for timely delivery.",
      icon: <Toolbox className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 5,
      title: "Construction & Contracting",
      description: "Professional execution of all construction work with direct supervision.",
      icon: <Hammer className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 6,
      title: "Systems Integration",
      description: "Seamless integration of plumbing, electrical, and automation systems.",
      icon: <Valve className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 7,
      title: "Finishes & Handover",
      description: "Final touches, quality assurance, and comprehensive client walkthrough.",
      icon: <CheckSquare className="h-6 w-6 text-acg-navy" />
    },
    {
      id: 8,
      title: "Aftercare & Warranty",
      description: "Ongoing support and warranty services to ensure lasting quality.",
      icon: <HeartHandshake className="h-6 w-6 text-acg-navy" />
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Process"
        subtitle="A comprehensive, turnkey approach to construction and development"
        imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Turnkey Process" 
            subtitle="A systematic approach ensuring quality and efficiency at every stage"
            center={true}
          />
          
          <div className="mt-16 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-acg-navy bg-opacity-20"></div>
            
            {/* Process Steps */}
            <div className="relative">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "flex items-center mb-16 last:mb-0",
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  {/* Content Card */}
                  <div className={cn(
                    "w-5/12 px-4",
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  )}>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      <h3 className="text-xl font-playfair font-bold text-acg-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-acg-navy flex items-center justify-center relative">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-acg-gold text-white flex items-center justify-center text-xs font-bold">
                        {step.id}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for alternate side */}
                  <div className="w-5/12 px-4"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 bg-acg-lightgray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-acg-navy mb-4 text-center font-playfair">Our Turnkey Promise</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              At Abdallah Contracting Group, we take full responsibility for every aspect of your project, from initial consultation 
              through final delivery and beyond. Our commitment to turnkey excellence means you can trust us with 
              the entire process, knowing that every detail will be expertly managed by our team of specialists.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-6 bg-acg-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our turnkey process can bring your vision to life.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-acg-navy px-8 py-3 rounded font-semibold hover:bg-acg-gold hover:text-white transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
