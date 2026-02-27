import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  MessageSquare,
  PenTool,
  FileText,
  Construction,
  Hammer,
  LandPlot,
  Building,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation & Needs Assessment",
    description:
      "We discuss your vision, budget, and timeline. We also help with design: consultation based on decades of experience and on your floor plans. Whether you already have a site or are still choosing land, we align on goals and feasibility.",
    icon: <LandPlot className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 2,
    title: "Land Acquisition & Permits",
    description:
      "You choose the land; we support with due diligence and site selection when needed. We then handle all permits and regulatory approvals—municipal permits, building permits, zoning, and clearances—so your project stays compliant.",
    icon: <FileText className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 3,
    title: "Site Inspection & Technical Evaluation",
    description:
      "On-site assessment to evaluate feasibility, soil and drainage, access, and integration with existing systems. We identify constraints and opportunities before locking in scope and design.",
    icon: <PenTool className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 4,
    title: "Scope Definition & Design Support",
    description:
      "Clear scope of work and detailed planning. We help with design—consultation based on our experience and on your floor plans—and coordinate with architects and engineers. You get a precise definition of what will be delivered, with timelines and milestones.",
    icon: <ClipboardList className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 5,
    title: "Quotation, Budget Alignment & Approval",
    description:
      "Transparent pricing and milestone-based payment structure. We provide a clear quotation and align on budget before breaking ground. We take care of supplier sourcing and materials—all procurement is handled by us. Real-time budget tracking is available so there are no surprises.",
    icon: <Construction className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 6,
    title: "Execution & Supervision",
    description:
      "We handle every aspect of the build: supplier sourcing, materials, and all trades—plumbing, electrical, finishing, and specialist work—coordinated under one accountable lead. Professional execution with direct supervision and quality control at every stage.",
    icon: <Hammer className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 7,
    title: "Testing, Quality Checks & Handover",
    description:
      "Rigorous quality assurance, final testing of systems, and a comprehensive walkthrough with documentation. You receive the keys with full handover and any warranties in place.",
    icon: <MessageSquare className="h-5 w-5 text-acg-navy" />,
  },
  {
    id: 8,
    title: "Maintenance & Ongoing Support",
    description:
      "Ongoing support, warranty follow-up, and optional property care—including for owners abroad. We remain your single point of contact for maintenance and any future upgrades.",
    icon: <Building className="h-5 w-5 text-acg-navy" />,
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} flex items-center mb-20 last:mb-0 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      <div
        className={cn(
          "w-5/12 px-4",
          isEven ? "text-right pr-10" : "text-left pl-10"
        )}
      >
        <div className="bg-white p-8 border border-slate-100 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] group">
          <div
            className="flex items-center gap-3 mb-3"
            style={{
              justifyContent: isEven ? "flex-end" : "flex-start",
            }}
          >
            <span className="text-[11px] tracking-[0.3em] text-acg-gold uppercase">
              Step {String(step.id).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-lg font-display text-acg-navy mb-3">
            {step.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      <div className="z-10 flex-shrink-0">
        <div className="w-11 h-11 bg-white border border-slate-200 flex items-center justify-center relative transition-all duration-500 hover:border-acg-gold">
          {step.icon}
          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-acg-gold text-white flex items-center justify-center text-[10px] font-semibold">
            {step.id}
          </div>
        </div>
      </div>

      <div className="w-5/12 px-4" />
    </div>
  );
}

const ProcessPage = () => {
  const promiseReveal = useScrollReveal<HTMLDivElement>(0.2);
  const ctaReveal = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div>
      <SEO
        title="Turnkey Construction Process | Land, Design, Permits & Keys"
        description="You choose the land and design; ACC handles permits, supplier sourcing, materials, and construction. Design consultation based on experience and floor plans. You get the keys."
      />
      <PageHeader
        title="Our Process"
        subtitle="You choose the land and design. We handle the rest. You get the keys."
        imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            label="How We Work"
            title="Our Turnkey Process"
            subtitle="From consultation and design advice through permits, procurement, and build—we take care of every aspect."
            center
          />

          <div className="relative mt-16">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-200" />

            <div className="relative">
              {processSteps.map((step, index) => (
                <TimelineStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Promise */}
      <section className="py-28 md:py-36 bg-acg-navy relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,rgba(200,164,94,0.3),transparent_50%)]" />
        <div
          ref={promiseReveal.ref}
          className={`reveal ${promiseReveal.isVisible ? "visible" : ""} max-w-[1200px] mx-auto px-8 relative z-10`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold text-center mb-4">
            Our Commitment
          </p>
          <h3 className="text-2xl md:text-3xl font-display text-white mb-5 text-center">
            Our Turnkey Promise
          </h3>
          <p className="text-white/35 max-w-3xl mx-auto text-center text-base leading-relaxed">
            You choose the land and design. We take care of all aspects:
            permits, supplier sourcing, materials, construction, and handover.
            We also help with design—consultation based on our experience and on
            your floor plans. One point of contact, transparent budgeting, and
            the option for ongoing property care, including for owners abroad.
            You get the keys.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-acg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,94,0.3),transparent_50%)]" />
        <div
          ref={ctaReveal.ref}
          className={`reveal ${ctaReveal.isVisible ? "visible" : ""} max-w-[1200px] mx-auto px-8 text-center relative z-10`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-6">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-white mb-5">
            Ready to Build?
          </h2>
          <p className="text-white/35 mb-12 leading-relaxed max-w-xl mx-auto">
            We respond within 24 hours. Schedule a consultation and discover how
            our turnkey process can bring your vision to life.
          </p>
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-3 border border-acg-gold text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
