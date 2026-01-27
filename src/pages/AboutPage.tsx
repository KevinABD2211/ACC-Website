
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Flag, Handshake, Users, Award } from "lucide-react";

const AboutPage = () => {
  const coreValues = [
    {
      title: "Accountability",
      description: "We take ownership of our work and stand by our commitments, ensuring transparency and responsibility throughout every project phase.",
      icon: <Shield className="h-8 w-8 text-acg-gold mb-2" />
    },
    {
      title: "Heritage & Trust",
      description: "Building on decades of Lebanese craftsmanship, we bring time-honored techniques into modern construction practices.",
      icon: <Award className="h-8 w-8 text-acg-gold mb-2" />
    },
    {
      title: "Client-First Service",
      description: "Your vision drives our process. We listen intently and adapt our approach to meet your unique needs and expectations.",
      icon: <Handshake className="h-8 w-8 text-acg-gold mb-2" />
    },
    {
      title: "Seamless Integration",
      description: "Our comprehensive approach integrates planning, design, and construction for a cohesive experience from concept to completion.",
      icon: <Target className="h-8 w-8 text-acg-gold mb-2" />
    }, 
    {
      title: "Supervisory Excellence",
      description: "With meticulous attention to detail, our supervisory team ensures quality control at every stage of your project.",
      icon: <Flag className="h-8 w-8 text-acg-gold mb-2" />
    },
    {
      title: "Lebanese Pride",
      description: "We proudly represent the best of Lebanese workmanship, bringing our cultural dedication to excellence into every project we undertake.",
      icon: <Users className="h-8 w-8 text-acg-gold mb-2" />
    }
  ];
  
  return (
    <div>
      <PageHeader
        title="About ACC"
        subtitle="Our story and our people"
        imageUrl="/lovable-uploads/d6f1e74a-b0e8-4108-b89c-0f4a0e201e73.png"
        pattern="diagonal-lines"
        imagePosition="center"
        objectFit="contain"
      />

      {/* Our Story - using solid footer color */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-acg-navy opacity-100"></div>
        
        <div className="container mx-auto relative z-10">
          <SectionTitle 
            title="Our Story" 
            center={true}
            className="text-white"
          />
          <div className="space-y-4 text-white text-lg">
            <p>
              Abdallah Contracting Company's journey began with founder Fadi Abdallah's 28-year career in plumbing. His
              dedication to quality and customer satisfaction built a reputation for excellence in Lebanon's
              construction sector.
            </p>
            <p>
              Eight years ago, we expanded our services to include electrical work, responding to client needs
              and growing our expertise. Two years ago, we further evolved to take on comprehensive
              renovation projects.
            </p>
            <p>
              Today, ACC is entering an exciting new chapter under the leadership of Kevin
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

      {/* Enhanced Core Values Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that drive everything we do at ACG"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-l-4 border-acg-gold shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center md:items-start">
                    {value.icon}
                    <h3 className="text-xl font-bold text-acg-navy mb-2">{value.title}</h3>
                    <p className="text-gray-700 text-center md:text-left">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  alt="ACC Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-acg-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80" alt="Fadi Abdallah" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-acg-navy mb-4">Fadi Abdallah</h3>
              <p className="text-gray-600 text-center">
                With 28 years of experience, Fadi Abdallah built Abdallah Contracting Company on a foundation of plumbing expertise. 
                Today, he leads with a commitment to quality and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center relative">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <img 
                  src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png"
                  alt="ACC Logo Watermark"
                  className="w-48"
                />
              </div>
              
              <Avatar className="w-32 h-32 mb-6 border-2 border-acg-navy">
                <AvatarImage src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80" alt="Kevin Abdallah" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-acg-navy mb-4">Kevin Abdallah</h3>
              <p className="text-gray-600 text-center">
                Kevin Abdallah, with a BS in Finance and specialized real estate training, drives ACC's 
                strategic growth, blending practical experience with financial acumen.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-700 font-medium mt-8 max-w-3xl mx-auto">
            Together, they embody ACC's promise: Building Legacies, Delivering Homes.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-acg-navy opacity-100"></div>
             
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
