
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { 
  MessageSquare, 
  PenTool, 
  FileText, 
  ShoppingBag, 
  Hammer, 
  Layers, 
  CheckSquare, 
  HeartHandshake 
} from "lucide-react";

const ProcessPage = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation",
      description: "Initial meeting to discuss your project needs and vision, assessing feasibility and scope.",
      icon: <MessageSquare className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 2,
      title: "Design Coordination",
      description: "Working with architects and designers to ensure all technical aspects are properly planned.",
      icon: <PenTool className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 3,
      title: "Permitting & Approvals",
      description: "Managing all necessary permits and regulatory approvals to ensure legal compliance.",
      icon: <FileText className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 4,
      title: "Procurement",
      description: "Sourcing high-quality materials and managing logistics for timely delivery.",
      icon: <ShoppingBag className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 5,
      title: "Construction & Contracting",
      description: "Professional execution of all construction work with direct supervision.",
      icon: <Hammer className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 6,
      title: "Systems Integration",
      description: "Seamless integration of plumbing, electrical, and automation systems.",
      icon: <Layers className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 7,
      title: "Finishes & Handover",
      description: "Final touches, quality assurance, and comprehensive client walkthrough.",
      icon: <CheckSquare className="h-10 w-10 text-fadco-navy" />
    },
    {
      id: 8,
      title: "Aftercare & Warranty",
      description: "Ongoing support and warranty services to ensure lasting quality.",
      icon: <HeartHandshake className="h-10 w-10 text-fadco-navy" />
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Process"
        subtitle="A comprehensive, turnkey approach to construction and development"
        imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Turnkey Process" 
            subtitle="A systematic approach ensuring quality and efficiency at every stage"
            center={true}
          />
          
          <div className="mt-12">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fadco-navy bg-opacity-20 z-0"></div>
              
              {/* Process Steps */}
              <div className="space-y-16 relative z-10">
                {processSteps.map((step, index) => (
                  <div key={step.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                    {/* Step Number + Icon */}
                    <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full border-4 border-fadco-navy flex items-center justify-center mb-6 md:mb-0 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-fadco-gold text-white flex items-center justify-center font-bold">
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} bg-white p-6 rounded-lg shadow-md`}>
                      <h3 className="text-xl font-bold text-fadco-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20 bg-fadco-lightgray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4 text-center">Our Turnkey Promise</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              At FADCO, we take full responsibility for every aspect of your project, from initial consultation 
              through final delivery and beyond. Our commitment to turnkey excellence means you can trust us with 
              the entire process, knowing that every detail will be expertly managed by our team of specialists.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-6 bg-fadco-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our turnkey process can bring your vision to life.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-fadco-navy px-8 py-3 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
