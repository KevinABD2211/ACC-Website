
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/f8936eb2-9f9b-4e9c-9cf2-6ed98915c4a6.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-acg-navy bg-opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
              alt="ACG Logo" 
              className="h-32 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
              Building Legacies
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Expert construction and development services with Lebanese craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-acg-gold text-acg-navy hover:bg-white px-6 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
              <NavLink to="/projects">
                <Button 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-acg-navy px-6 py-6 text-lg"
                >
                  View Projects
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection id="services" />

      {/* About Section */}
      <AboutSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-acg-navy to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Contact us today for a consultation and discover how ACG can bring your vision to life with our expertise.
            </p>
            <NavLink to="/contact">
              <Button className="bg-acg-gold text-acg-navy hover:bg-white px-8 py-6 text-lg font-semibold">
                Get in Touch
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
