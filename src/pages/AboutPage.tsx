
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  const coreValues = [
    "Accountability",
    "Heritage & Trust",
    "Client-First Service",
    "Seamless Integration", 
    "Supervisory Excellence",
    "Lebanese Pride"
  ];
  
  return (
    <div>
      <PageHeader
        title="About FADCO"
        subtitle="Our story and our people"
        imageUrl="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1920&q=80"
        pattern="diagonal-lines"
      />

      {/* History & Vision */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <SectionTitle 
            title="History & Vision" 
            center={true}
          />
          <p className="text-gray-700 text-lg text-center">
            FADCO was created to build on Fadi Abdallah's 28 years of hands-on expertise—from plumbing 
            and electrical work to full-scope renovations—and transform it into a turnkey development model 
            that serves clients across Lebanon.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Team" 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center relative">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <img 
                  src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png"
                  alt="FADCO Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-fadco-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80" alt="Fadi Abdallah" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-fadco-navy mb-4">Fadi Abdallah</h3>
              <p className="text-gray-600 text-center">
                Trade master whose career began in plumbing and electrical, now leading multi-story builds 
                and complex renovations with a reputation for integrity and quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center relative">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <img 
                  src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png"
                  alt="FADCO Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-fadco-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80" alt="Kevin Abdallah" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-fadco-navy mb-4">Kevin Abdallah</h3>
              <p className="text-gray-600 text-center">
                Fadi's son and finance specialist with a passion for real estate and property development, 
                driving FADCO's strategic growth and ensuring sound financial planning.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-700 font-medium mt-8 max-w-3xl mx-auto">
            Together, they embody FADCO's promise: Building Legacies, Delivering Homes.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-fadco-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl text-center">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="hidden md:inline mx-2 text-fadco-gold">•</span>}
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-fadco-navy mb-6">Discover Our Process</h3>
          <NavLink to="/process">
            <Button className="bg-fadco-navy text-white hover:bg-fadco-gold">
              Learn More About Our Approach
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
