import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEO from "@/components/SEO";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
import { Shield, Target, Flag, Handshake, Users, Award, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const coreValues = [
  {
    title: "Accountability",
    description:
      "We take ownership of our work and stand by our commitments, ensuring transparency and responsibility throughout every project phase.",
    icon: <Shield className="h-6 w-6 text-acg-gold" />,
  },
  {
    title: "Heritage & Trust",
    description:
      "Building on decades of Lebanese craftsmanship, we bring time-honored techniques into modern construction practices.",
    icon: <Award className="h-6 w-6 text-acg-gold" />,
  },
  {
    title: "Client-First Service",
    description:
      "Your vision drives our process. We listen intently and adapt our approach to meet your unique needs and expectations.",
    icon: <Handshake className="h-6 w-6 text-acg-gold" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Our comprehensive approach integrates planning, design, and construction for a cohesive experience from concept to completion.",
    icon: <Target className="h-6 w-6 text-acg-gold" />,
  },
  {
    title: "Supervisory Excellence",
    description:
      "With meticulous attention to detail, our supervisory team ensures quality control at every stage of your project.",
    icon: <Flag className="h-6 w-6 text-acg-gold" />,
  },
  {
    title: "Lebanese Pride",
    description:
      "We proudly represent the best of Lebanese workmanship, bringing our cultural dedication to excellence into every project we undertake.",
    icon: <Users className="h-6 w-6 text-acg-gold" />,
  },
];

const AboutPage = () => {
  const storyReveal = useScrollReveal<HTMLDivElement>(0.2);
  const valuesReveal = useScrollReveal<HTMLDivElement>(0.2);
  const teamReveal = useScrollReveal<HTMLDivElement>(0.2);
  const promiseReveal = useScrollReveal<HTMLDivElement>(0.2);
  const ctaReveal = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div>
      <SEO
        title="About Abdallah Contracting Company"
        description="Learn about Abdallah Contracting Company's heritage, leadership, and values, combining Lebanese craftsmanship with financial and real estate expertise."
      />
      <PageHeader
        title="About ACC"
        subtitle="Our story and our people"
        logoOnly
        pattern="diagonal-lines"
        imagePosition="center"
        objectFit="contain"
      />

      {/* Our Story */}
      <section className="py-28 md:py-36 bg-acg-navy relative">
        <div
          ref={storyReveal.ref}
          className={`reveal ${storyReveal.isVisible ? "visible" : ""} max-w-[1200px] mx-auto px-8 relative z-10`}
        >
          <SectionTitle
            title="Our Story"
            center
            className="text-white [&_h2]:text-white"
          />
          <div className="space-y-5 text-white/35 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Abdallah Contracting Company's journey began with founder Fadi
              Abdallah's 30-year career in plumbing and hands-on execution. His
              dedication to quality and customer satisfaction built a reputation
              for excellence in Lebanon's construction sector.
            </p>
            <p>
              We expanded into electrical work and, over time, into full general
              contracting—from land acquisition to turnkey delivery, including
              permits, supervision, maintenance, and all trades.
            </p>
            <p>
              Today, ACC is led by the next generation: Kevin Abdallah brings
              academic training in finance and real estate economics from the
              London School of Economics, McKinsey Forward, and University of
              Cape Town Property Development—combining institutional-grade
              financial analysis with our hands-on construction expertise.
            </p>
            <p>
              This unique blend of trade mastery and financial rigor allows us to
              offer full-scope construction and property development services:
              technical execution and investment clarity under one accountable
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            label="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that drive everything we do at ACC"
            center
            className="mb-10 md:mb-12"
          />

          <div
            ref={valuesReveal.ref}
            className={`stagger-children ${valuesReveal.isVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0`}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="border border-slate-100 -ml-px -mt-px bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] group"
              >
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-lg font-display text-acg-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            label="Leadership"
            title="Our Team"
            subtitle="The Builder's Hands. The Analyst's Mind."
            center
            className="mb-10 md:mb-12"
          />

          <div
            ref={teamReveal.ref}
            className={`stagger-children ${teamReveal.isVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto`}
          >
            {/* Fadi */}
            <div className="border border-slate-100 -ml-px -mt-px bg-white p-10 md:p-12 flex flex-col items-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <Avatar className="w-28 h-28 mb-6 border border-acg-gold/30 rounded-none">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Fadi Abdallah"
                />
                <AvatarFallback className="bg-slate-50 text-acg-navy font-display text-xl rounded-none">
                  FA
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-display text-acg-navy mb-1">
                Fadi Abdallah
              </h3>
              <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-5">
                Founder &amp; General Director
              </p>
              <p className="text-slate-400 text-center text-sm leading-relaxed">
                With 30 years of hands-on field execution and supervision, Fadi
                built ACC on a foundation of plumbing and electrical mastery. He
                leads with a commitment to craftsmanship, quality control, and
                client trust.
              </p>
            </div>

            {/* Kevin */}
            <div className="border border-slate-100 -ml-px -mt-px bg-white p-10 md:p-12 flex flex-col items-center transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <Avatar className="w-28 h-28 mb-6 border border-acg-gold/30 rounded-none">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Kevin Abdallah"
                />
                <AvatarFallback className="bg-slate-50 text-acg-navy font-display text-xl rounded-none">
                  KA
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-display text-acg-navy mb-1">
                Kevin Abdallah
              </h3>
              <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-5">
                Financial Strategy &amp; Development
              </p>
              <p className="text-slate-400 text-center text-sm leading-relaxed mb-5">
                Kevin brings institutional financial analysis to every project:
                BS in Finance (LAU), LSE Real Estate Economics &amp; Finance, UCT
                Property Development, McKinsey Forward—ensuring your investment
                is managed with rigor and transparency.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-50 text-acg-navy text-[11px] tracking-[0.15em]">
                  LSE
                </span>
                <span className="px-3 py-1 bg-slate-50 text-acg-navy text-[11px] tracking-[0.15em]">
                  McKinsey Forward
                </span>
                <span className="px-3 py-1 bg-slate-50 text-acg-navy text-[11px] tracking-[0.15em]">
                  UCT
                </span>
              </div>
            </div>
          </div>

          <div
            ref={promiseReveal.ref}
            className={`reveal ${promiseReveal.isVisible ? "visible" : ""}`}
          >
            <p className="text-center text-slate-400 mt-14 max-w-3xl mx-auto text-sm leading-relaxed">
              Together, they embody ACC&apos;s promise:{" "}
              <strong className="text-acg-navy font-medium">
                Vision. Execution. Completion.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-acg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,94,0.3),transparent_50%)]" />
        <div
          ref={ctaReveal.ref}
          className={`reveal ${ctaReveal.isVisible ? "visible" : ""} max-w-[1200px] mx-auto px-8 text-center relative z-10`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-6">
            Next Step
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-white mb-8">
            Discover Our Process
          </h2>
          <NavLink
            to="/process"
            className="group inline-flex items-center gap-3 border border-acg-gold text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
