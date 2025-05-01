
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const coreValues = [
    "Accountability",
    "Heritage & Trust",
    "Client-First Service",
    "Seamless Integration",
    "Supervisory Excellence",
    "Lebanese Pride"
  ];

  return (
    <section id="about" className={cn("py-20 px-4 md:px-6 bg-white", className)}>
      <div className="container mx-auto">
        <SectionTitle
          title="About Us"
          subtitle="Building Legacies, Delivering Homes."
          center={true}
        />
        
        {/* Team Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-fadco-lightgray p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Fadi Abdallah</strong> brings 28 years of hands-on mastery in plumbing, electrical work, and full-scope renovations across Lebanon with an impeccable reputation for quality and integrity. Alongside him, <strong>Kevin Abdallah</strong> is a full-time on-site construction coordinator who works directly with engineers and architects and leverages his finance scholarship (LAU, GPA 3.98) plus certifications in real-estate economics and property development to ensure strategic planning, budget control, and turnkey excellence. Together, they embody FADCO's promise: Building Legacies, Delivering Homes.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We manage every element—plumbing, electrical, construction, automation, landscaping, and beyond—under 
              our direct supervision, taking full responsibility for every worker and every detail.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-fadco-navy mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg flex items-start">
                <div className="text-fadco-navy mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-fadco-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
