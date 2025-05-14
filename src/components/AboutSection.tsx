
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { NavLink } from "react-router-dom";
import { Shield, Award, Target } from "lucide-react";

interface AboutSectionProps {
  className?: string;
  summarized?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const AboutSection = ({ className, summarized = false, sectionTitle = "About ACG", sectionSubtitle }: AboutSectionProps) => {
  // Default subtitle based on whether the section is summarized or not
  const defaultSubtitle = summarized 
    ? "Building on decades of Lebanese craftsmanship and expertise." 
    : "Learn more about our company, our values, and our mission.";

  return (
    <section id="about" className={cn("py-20 px-4 md:px-6 relative", className)}>
      {/* Using solid color */}
      <div className="absolute inset-0 bg-acg-navy opacity-100"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle
          title={sectionTitle} 
          subtitle={sectionSubtitle || defaultSubtitle}
          className="text-white"
          center={true}
        />
        
        {!summarized ? (
          // Full content for the about page
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <div className="space-y-4">
                <p>
                  Abdallah Contracting Group's journey began with founder Fadi Abdallah's 28-year career in plumbing. His
                  dedication to quality and customer satisfaction built a reputation for excellence in Lebanon's
                  construction sector.
                </p>
                <p>
                  Eight years ago, we expanded our services to include electrical work and more. Today, ACG is
                  entering an exciting new chapter under the leadership of Kevin
                  Abdallah, bringing comprehensive construction and property development services.
                </p>
              </div>
            </div>
            
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="text-acg-gold h-5 w-5 mr-3 mt-1" />
                  <span>Accountability and integrity in all our projects</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-acg-gold h-5 w-5 mr-3 mt-1" />
                  <span>Lebanese craftsmanship and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-acg-gold h-5 w-5 mr-3 mt-1" />
                  <span>Building legacies that stand the test of time</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Summarized content for homepage
          <div className="mt-8 text-white max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              With over 28 years of Lebanese craftsmanship excellence, ACG has evolved from plumbing specialists into a comprehensive construction and development group, committed to quality, integrity, and building legacies that last.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center">
                <Shield className="text-acg-gold h-6 w-6 mr-2" />
                <span>Integrity</span>
              </div>
              <div className="flex items-center">
                <Award className="text-acg-gold h-6 w-6 mr-2" />
                <span>Craftsmanship</span>
              </div>
              <div className="flex items-center">
                <Target className="text-acg-gold h-6 w-6 mr-2" />
                <span>Excellence</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-10 text-center">
          <NavLink to="/about" className="inline-block bg-acg-gold text-acg-navy px-6 py-3 rounded font-semibold hover:bg-white transition-colors">
            {summarized ? "About Our Company" : "Learn More About Us"}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
