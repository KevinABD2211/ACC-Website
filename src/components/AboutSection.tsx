
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
    <section className={cn("py-20 px-4 md:px-6 bg-white", className)}>
      <div className="container mx-auto">
        <SectionTitle
          title="About FADCO"
          subtitle="Building Legacies, Delivering Homes."
          center={true}
        />
        
        {/* Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-fadco-lightgray p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Fadi Abdallah</h3>
            <p className="text-gray-700 mb-4">
              With 28 years of mastery in plumbing, electrical, and renovation, Fadi started as a tradesman 
              and now oversees full-scale builds and renovations across Lebanon with an impeccable reputation.
            </p>
            <p className="text-gray-700">
              His dedication to excellence and hands-on leadership approach has established FADCO as a trusted 
              name in Lebanon's construction and development industry.
            </p>
          </div>
          
          <div className="bg-fadco-lightgray p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Kevin Abdallah</h3>
            <p className="text-gray-700 mb-4">
              Full-time on-site construction specialist who coordinates all trades directly with engineers and architects. 
              A finance scholar (LAU, GPA 3.98) and certified in real-estate economics and property development, 
              Kevin drives the next generation of FADCO's turnkey expertise.
            </p>
            <p className="text-gray-700">
              His blend of academic excellence and practical knowledge ensures FADCO maintains its position 
              at the forefront of Lebanon's construction industry.
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
