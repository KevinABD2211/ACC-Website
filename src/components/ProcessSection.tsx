
import { NavLink } from "react-router-dom";
import { ArrowRight, MessageSquare, PenTool, FileText, Construction, Hammer, LandPlot, CheckSquare, Building } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ProcessSectionProps {
  summarized?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const ProcessSection = ({ summarized = false, sectionTitle = "How We Work", sectionSubtitle }: ProcessSectionProps) => {
  const grid = useScrollReveal<HTMLDivElement>(0.1);

  const allSteps = [
    { icon: <LandPlot className="h-4 w-4" />, title: "Consultation", description: "We discuss your vision and provide design guidance based on experience." },
    { icon: <FileText className="h-4 w-4" />, title: "Land & Permits", description: "You choose the land; we handle due diligence and regulatory approvals." },
    { icon: <PenTool className="h-4 w-4" />, title: "Design & Planning", description: "Scope definition, architect coordination, and detailed planning." },
    { icon: <Construction className="h-4 w-4" />, title: "Procurement", description: "All supplier sourcing and materials—every aspect handled." },
    { icon: <Hammer className="h-4 w-4" />, title: "Construction", description: "Professional execution with direct supervision and one accountable lead." },
    { icon: <MessageSquare className="h-4 w-4" />, title: "Integration", description: "Seamless integration of plumbing, electrical, and automation." },
    { icon: <CheckSquare className="h-4 w-4" />, title: "Handover", description: "Quality assurance, final walkthrough, and comprehensive documentation." },
    { icon: <Building className="h-4 w-4" />, title: "Aftercare", description: "Ongoing support, warranty, and optional property care—including abroad." },
  ];

  const keySteps = [allSteps[0], allSteps[1], allSteps[3], allSteps[7]];
  const stepsToShow = summarized ? keySteps : allSteps;
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} center={true} className="mb-10 md:mb-12" />
        
        <div
          ref={grid.ref}
          className={`stagger-children ${grid.isVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 ${summarized ? 'lg:grid-cols-4' : 'lg:grid-cols-4'} gap-0`}
        >
          {stepsToShow.map((step, index) => (
            <div key={index} className="border border-slate-100 p-6 md:p-8 -ml-px -mt-px">
              <div className="flex items-center justify-between mb-5">
                <div className="text-acg-gold opacity-60">{step.icon}</div>
                <span className="text-[10px] tracking-[0.3em] text-slate-200 uppercase">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display text-acg-navy mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <NavLink
            to="/process"
            className="group inline-flex items-center gap-3 border border-acg-navy/20 text-acg-navy px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-navy hover:text-white transition-all duration-500"
          >
            {summarized ? "Full Process" : "Learn More"}
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
