
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/use-scroll-reveal";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import SEO from "@/components/SEO";

const HomePage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const stats = useScrollReveal<HTMLDivElement>(0.3);
  const quote = useScrollReveal<HTMLDivElement>(0.3);
  const cta = useScrollReveal<HTMLDivElement>(0.3);
  const years = useCountUp(30, 2000);
  const projects = useCountUp(200, 2500);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SEO
        title="Construction & Contracting in Beirut | ACC"
        description="Abdallah Contracting Company — Vision. Execution. Completion. Expert construction, renovation, and development across Lebanon."
      />

      {/* Hero */}
      <section className="relative h-screen flex items-end bg-acg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out"
          style={{
            backgroundImage: "url('/lovable-uploads/f8936eb2-9f9b-4e9c-9cf2-6ed98915c4a6.png')",
            transform: heroLoaded ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-acg-navy via-acg-navy/70 to-acg-navy/30" />

        <div className="relative z-10 w-full pb-20 md:pb-28 px-8 md:px-16 lg:px-24 max-w-[1400px]">
          <div
            className="transition-all duration-[1.5s] ease-out"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <img src="/acc-logo-white.png" alt="ACC" className="h-16 md:h-20 w-auto mb-10 opacity-80" />
            <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 max-w-3xl">
              Vision.<br />Execution.<br />Completion.
            </h1>
            <div className="w-16 h-[1px] bg-acg-gold mb-8 animate-line-grow" />
            <p className="text-white/40 text-base md:text-lg max-w-md mb-12 leading-relaxed">
              Integrated planning, disciplined execution, seamless handover.
            </p>
            <div className="flex flex-wrap gap-5">
              <NavLink to="/contact" className="group inline-flex items-center gap-3 bg-acg-gold text-acg-navy px-8 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-white transition-all duration-500">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </NavLink>
              <NavLink to="/projects" className="inline-flex items-center gap-3 border border-white/20 text-white/70 px-8 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:border-white hover:text-white transition-all duration-500">
                View Work
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-acg-navy py-16 md:py-20 border-t border-white/[0.04]">
        <div ref={stats.ref} className={`reveal ${stats.isVisible ? "visible" : ""} max-w-[1000px] mx-auto px-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
            <div>
              <p ref={years.ref as React.RefObject<HTMLParagraphElement>} className="text-4xl md:text-5xl font-display text-acg-gold">{years.count}+</p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mt-3">Years</p>
            </div>
            <div>
              <p ref={projects.ref as React.RefObject<HTMLParagraphElement>} className="text-4xl md:text-5xl font-display text-acg-gold">{projects.count}+</p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mt-3">Projects</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display text-acg-gold">Full</p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mt-3">Scope</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display text-acg-gold">100%</p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mt-3">Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection id="expertise" minimized={true} sectionTitle="What We Do" sectionSubtitle="End-to-end construction and development capabilities" />

      {/* About */}
      <AboutSection summarized={true} sectionTitle="Who We Are" sectionSubtitle="Three decades of building. One standard of excellence." />

      {/* Process */}
      <ProcessSection summarized={true} sectionTitle="How We Work" sectionSubtitle="A structured path from first conversation to key handover" />

      {/* Testimonial */}
      <section className="py-14 md:py-20 bg-white">
        <div ref={quote.ref} className={`reveal ${quote.isVisible ? "visible" : ""} max-w-[800px] mx-auto px-8 text-center`}>
          <div className="text-5xl text-acg-gold/20 font-display mb-4">&ldquo;</div>
          <blockquote className="text-xl md:text-2xl font-display text-acg-navy leading-relaxed mb-4">
            From the first meeting to handover, ACC managed everything with transparency and professionalism.
          </blockquote>
          <p className="text-[11px] tracking-[0.25em] uppercase text-slate-400">Residential Client — Beirut</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 bg-acg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-acg-gold blur-[200px]" />
        </div>
        <div ref={cta.ref} className={`reveal ${cta.isVisible ? "visible" : ""} relative z-10 max-w-[600px] mx-auto px-8 text-center`}>
          <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-5">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-display text-white leading-[1.05] mb-6">
            Let&apos;s build<br />together.
          </h2>
          <p className="text-white/30 mb-12 leading-relaxed">
            Request a consultation. We respond within 24 hours.
          </p>
          <NavLink to="/contact" className="group inline-flex items-center gap-3 bg-acg-gold text-acg-navy px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-white transition-all duration-500">
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
