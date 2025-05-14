
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import { NavLink } from "react-router-dom";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section id="about" className={cn("py-20 px-4 md:px-6 relative", className)}>
      {/* Changed from black to navy blue gradient */}
      <div className="absolute inset-0 bg-navy-gradient opacity-90"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="About ACG" 
          subtitle="Learn more about our company, our values, and our mission."
          className="text-white"
        />
        
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
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-acg-gold mr-2">•</span>
                <span>Accountability and integrity in all our projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-acg-gold mr-2">•</span>
                <span>Lebanese craftsmanship and attention to detail</span>
              </li>
              <li className="flex items-center">
                <span className="text-acg-gold mr-2">•</span>
                <span>Building legacies that stand the test of time</span>
              </li>
              <li className="flex items-center">
                <span className="text-acg-gold mr-2">•</span>
                <span>Client-first service approach</span>
              </li>
              <li className="flex items-center">
                <span className="text-acg-gold mr-2">•</span>
                <span>Expert supervisory excellence</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <NavLink to="/about" className="inline-block bg-acg-gold text-acg-navy px-6 py-3 rounded font-semibold hover:bg-white transition-colors">
            Learn More About Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
