import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
        title="About ACG"
        subtitle="Our story and our people"
        imageUrl="/lovable-uploads/e5dfb67a-d9cd-48f7-9f50-9dcf3570d3d3.png"
        pattern="diagonal-lines"
        imagePosition="center" // Changed from "bottom" to "center"
      />

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 relative">
        {/* New elegant dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-95"></div>
        
        <div className="container mx-auto relative z-10">
          <SectionTitle 
            title="Our Story" 
            center={true}
            className="text-white"
          />
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              Abdallah Contracting Group's journey began with founder Fadi Abdallah's 28-year career in plumbing. His
              dedication to quality and customer satisfaction built a reputation for excellence in Lebanon's
              construction sector.
            </p>
            <p>
              Eight years ago, we expanded our services to include electrical work, responding to client needs
              and growing our expertise. Two years ago, we further evolved to take on comprehensive
              renovation projects.
            </p>
            <p>
              Today, ACG is entering an exciting new chapter under the leadership of Kevin
              Abdallah, who is bringing his academic background in finance and specialized training in real
              estate economics from institutions like the London School of Economics to complement our
              hands-on construction expertise.
            </p>
            <p>
              This unique blend of practical experience and academic insight allows us to offer comprehensive
              construction and property development services that consider both the technical aspects of
              building and the financial implications of property investment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-gray-50 relative">
        {/* Background image with the ACG logo */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
             style={{ backgroundImage: `url('/lovable-uploads/148839f3-165d-4491-b8de-6839fe4c13a4.png')` }}></div>
        
        <div className="container mx-auto relative z-10">
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
                  alt="ACG Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-acg-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80" alt="Fadi Abdallah" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-acg-navy mb-4">Fadi Abdallah</h3>
              <p className="text-gray-600 text-center">
                With 28 years of experience, Fadi Abdallah built Abdallah Contracting Group on a foundation of plumbing expertise. 
                Today, he leads with a commitment to quality and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center relative">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <img 
                  src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png"
                  alt="ACG Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-acg-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80" alt="Kevin Abdallah" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-acg-navy mb-4">Kevin Abdallah</h3>
              <p className="text-gray-600 text-center">
                Kevin Abdallah, with a BS in Finance and specialized real estate training, drives ACG's 
                strategic growth, blending practical experience with financial acumen.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-700 font-medium mt-8 max-w-3xl mx-auto">
            Together, they embody ACG's promise: Building Legacies, Delivering Homes.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-acg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl text-center">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="hidden md:inline mx-2 text-acg-gold">•</span>}
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 relative">
        {/* Background with dark overlay and logo */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
             
        <div className="container mx-auto text-center relative z-10">
          <NavLink to="/process" className="text-2xl font-bold text-white mb-6 hover:text-acg-gold transition-colors inline-block">
            Discover Our Process
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
