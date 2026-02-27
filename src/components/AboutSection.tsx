
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, Shield, Award, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface AboutSectionProps {
  className?: string;
  summarized?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const AboutSection = ({ className, summarized = false, sectionTitle = "Who We Are", sectionSubtitle }: AboutSectionProps) => {
  const content = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <section id="about" className={cn("py-28 md:py-36 relative bg-acg-navy", className)}>
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <SectionTitle
          title={sectionTitle} 
          subtitle={sectionSubtitle}
          className="[&_h2]:text-white [&_p]:text-white/30"
          center={true}
        />
        
        {!summarized ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-display text-white mb-5">Our Story</h3>
              <div className="space-y-4 text-white/35 leading-relaxed">
                <p>ACC began with Fadi Abdallah's 30-year career in plumbing and hands-on execution, building a reputation for excellence across Lebanon.</p>
                <p>Today, the next generation—Kevin Abdallah—brings finance and real estate expertise from LSE, McKinsey, and UCT, combining institutional analysis with trade mastery.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display text-white mb-5">Our Values</h3>
              <ul className="space-y-6">
                {[
                  { icon: Shield, text: "Accountability and integrity in every project" },
                  { icon: Award, text: "Lebanese craftsmanship with meticulous detail" },
                  { icon: Target, text: "Building legacies that stand the test of time" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4 text-white/35">
                    <Icon className="text-acg-gold h-4 w-4 mt-1 flex-shrink-0 opacity-60" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div ref={content.ref} className={`reveal ${content.isVisible ? "visible" : ""} max-w-xl mx-auto text-center`}>
            <p className="text-white/35 mb-14 leading-relaxed">
              Over 30 years of Lebanese craftsmanship, evolved from specialist trades into full-scope construction and development. Quality, integrity, and legacies that last.
            </p>
            <div className="flex justify-center gap-14">
              {[
                { icon: Shield, label: "Integrity" },
                { icon: Award, label: "Craft" },
                { icon: Target, label: "Excellence" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="text-acg-gold h-3.5 w-3.5 opacity-60" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/35">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-20 text-center">
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-3 border border-acg-gold/30 text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
          >
            {summarized ? "About Us" : "Learn More"}
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
