
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
    "Technical & Supervisory Excellence",
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-fadco-lightgray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be Lebanon's most trusted full-service development partner, accountable for every craft 
              and every craftsperson, from groundbreaking through move-in.
            </p>
          </div>
          
          <div className="bg-fadco-lightgray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our Mission</h3>
            <p className="text-gray-700">
              At FADCO, we coordinate every element—electrical, plumbing, construction, automation, 
              landscaping and beyond—under our direct supervision. We take full responsibility for each 
              worker and each trade, delivering turnkey excellence and peace of mind to every client.
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
