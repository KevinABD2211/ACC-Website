
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
        
        {/* Company History */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our History</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              FADCO was born from a vision to transform the Lebanese construction industry by offering unparalleled quality and service. What began as a specialized trade service has evolved into a comprehensive construction and development company. Our journey has been defined by our commitment to excellence, traditional craftsmanship, and embracing modern techniques. We established FADCO to create not just buildings, but lasting legacies that enhance the communities we serve while maintaining the highest standards of Lebanese craftsmanship and attention to detail.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-fadco-lightgray p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-fadco-navy mb-4 text-center">Our Team</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-fadco-navy mb-2">Fadi Abdallah</h4>
                <p className="text-gray-700">
                  A master craftsman with 28 years of experience in the construction industry. Fadi's expertise spans across plumbing systems, electrical installations, and comprehensive renovations. His hands-on approach and meticulous attention to detail have established him as a trusted name in Lebanon's building sector, where his work stands as a testament to his unwavering commitment to quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-fadco-navy mb-2">Kevin Abdallah</h4>
                <p className="text-gray-700">
                  As FADCO's dedicated on-site construction coordinator, Kevin brings a unique blend of practical knowledge and academic excellence to every project. With his finance background from LAU (GPA 3.98) and specialized certifications in real estate economics, he expertly manages resources, timelines, and budgets while maintaining seamless communication between clients, architects, and trade specialists. Kevin's analytical approach ensures that each project delivers maximum value without compromising on FADCO's quality standards.
                </p>
              </div>
            </div>
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
