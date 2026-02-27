import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";
import { NavLink } from "react-router-dom";
import {
  Droplet,
  Zap,
  Building,
  Flower,
  Hammer,
  UserCog,
  ClipboardList,
  WrenchIcon,
  Home,
  ArrowRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const serviceCards = [
  {
    title: "Plumbing, Heating & Drainage",
    description: "Complete water, waste, and heating solutions.",
    bulletPoints: [
      "Fit-outs (bathrooms, kitchens, HVAC tie-ins)",
      "Municipal sewer connections",
      "Hydronic radiators & under-floor heating",
      "Preventive maintenance",
    ],
    icon: <Droplet className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/18ae3bb4-4d7e-4778-a0b8-81bb306daf3c.png",
  },
  {
    title: "Electrical & Automation",
    description: "Power, lighting, and smart-home control.",
    bulletPoints: [
      "Full wiring & panel work",
      "LED & architectural lighting",
      "Motorized curtains, shades, AC controls",
      "Structured cabling & CCTV",
    ],
    icon: <Zap className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/84371c46-a251-4c7b-b5e6-bb4f0a997fdb.png",
  },
  {
    title: "Renovation",
    description: "Transform existing spaces with expert renovation.",
    bulletPoints: [
      "Partial renovations (any room/façade)",
      "Full-scope overhauls",
      "Kitchen and bathroom remodeling",
      "Heritage property restoration",
    ],
    icon: <Hammer className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/93d83567-97a7-4749-8e58-17e5aea99e73.png",
  },
  {
    title: "General Contracting",
    description: "From concept to completion, full construction services.",
    bulletPoints: [
      "New residential construction",
      "Commercial building projects",
      "Project management",
      "Construction supervision",
    ],
    icon: <Building className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/9830d81a-8416-481b-930f-420412ebdbad.png",
  },
  {
    title: "Pools & Landscape Systems",
    description: "Complete pool installation and landscaping solutions.",
    bulletPoints: [
      "New pool construction & installation",
      "Water proofing & pool maintenance",
      "Automated irrigation & drainage",
      "Patios, walkways & exterior lighting",
    ],
    icon: <Flower className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/215c69e6-f673-4263-9d10-abaf203762ad.png",
  },
  {
    title: "Supervision",
    description: "Expert oversight for construction projects.",
    bulletPoints: [
      "Construction management",
      "Quality control inspections",
      "Site coordination",
      "Contract administration",
    ],
    icon: <UserCog className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/8723e86a-dd30-4083-8dc4-f203220b9579.png",
  },
  {
    title: "Consulting",
    description: "Professional guidance and technical expertise.",
    bulletPoints: [
      "Technical consulting",
      "Project feasibility studies",
      "Design review",
      "Building system optimization",
    ],
    icon: <ClipboardList className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/63a47bed-84e6-4235-9dc2-97942d0a1683.png",
  },
  {
    title: "Maintenance",
    description: "Preventive and regular maintenance services.",
    bulletPoints: [
      "Building systems maintenance",
      "Preventive care programs",
      "Emergency repairs",
      "Annual property inspections",
    ],
    icon: <WrenchIcon className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/bb716219-80a8-4b07-b252-6f2f3394b9db.png",
  },
  {
    title: "Property Care & Absentee Owners",
    description:
      "Peace of mind for owners abroad or with unoccupied properties.",
    bulletPoints: [
      "Scheduled inspections and photo reporting",
      "Pool and garden maintenance",
      "Plumbing, electrical, and system checks",
      "Emergency response and preventive repairs",
      "Pre-arrival preparation",
    ],
    icon: <Home className="h-8 w-8" />,
    imageUrl: "/lovable-uploads/bb716219-80a8-4b07-b252-6f2f3394b9db.png",
  },
];

const ServicesPage = () => {
  const gridReveal = useScrollReveal<HTMLDivElement>(0.2);
  const ctaReveal = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div>
      <SEO
        title="Construction Services in Beirut & Lebanon"
        description="Explore ACC's full range of services including plumbing, electrical & automation, renovation, general contracting, pools & landscape systems, supervision, consulting, and maintenance."
      />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and development solutions"
        imageUrl="/lovable-uploads/76ce3cde-dc0b-4e0c-85d0-68be36fed0fe.png"
        pattern="diagonal-lines"
      />

      <section id="property-care" className="py-28 md:py-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            label="What We Do"
            title="Our Services"
            subtitle="From initial concept to final delivery, we provide complete solutions for all your construction needs."
            center
          />

          <div
            ref={gridReveal.ref}
            className={`stagger-children ${gridReveal.isVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0`}
          >
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                bulletPoints={service.bulletPoints}
                icon={service.icon}
                imageUrl={service.imageUrl}
                className="border border-slate-100 -ml-px -mt-px"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-acg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,94,0.3),transparent_50%)]" />
        <div
          ref={ctaReveal.ref}
          className={`reveal ${ctaReveal.isVisible ? "visible" : ""} max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center relative z-10 gap-10`}
        >
          <div className="md:max-w-2xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-4">
              Get Started
            </p>
            <h2 className="text-2xl md:text-3xl font-display text-white mb-5">
              Ready to get started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a
                href="tel:+9613255206"
                className="flex items-center text-white/35 hover:text-acg-gold transition-colors duration-500 text-sm"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +961 3 255 206
              </a>
              <a
                href="mailto:info@acg-lb.com"
                className="flex items-center text-white/35 hover:text-acg-gold transition-colors duration-500 text-sm"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@acg-lb.com
              </a>
            </div>
          </div>
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-3 border border-acg-gold text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
