
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SplashScreen from "@/components/SplashScreen";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";

const HomePage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Control the content visibility after splash screen
  useEffect(() => {
    if (!showSplash) {
      // Small delay to ensure the splash is gone before showing content
      setTimeout(() => setContentVisible(true), 100);
    }
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const scrollToContent = () => {
    const servicesElement = document.getElementById("services-section");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* Hero Section */}
        <section className="relative h-screen bg-white flex items-center overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 z-10 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png"
                alt="FADCO Logo"
                className="w-96 md:w-[500px] mx-auto mb-8"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-fadco-navy mb-6">
                Building Legacies, Delivering Homes
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Turnkey development led by Fadi & Kevin Abdallah—every trade, every detail.
              </p>
              <button 
                onClick={scrollToContent}
                className="flex items-center justify-center mx-auto mt-8 animate-bounce"
                aria-label="Scroll down"
              >
                <ChevronDown className="h-10 w-10 text-fadco-navy" />
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection id="services-section" />

        {/* Projects Preview Section */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <SectionTitle 
              title="Featured Projects" 
              subtitle="Showcasing our dedication to quality and craftsmanship."
              center={true}
            />
            
            <div className="mt-12 relative px-8">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                      title="Beirut Villa Under-floor Heating"
                      category="Plumbing, Heating & Drainage"
                      description="Complete hydronic under-floor heating system for a luxury villa in Beirut."
                      imageUrl="https://images.unsplash.com/photo-1606946184955-83addcd9ab33?auto=format&fit=crop&w=600&q=80"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                      title="Downtown Office LED Retrofit"
                      category="Electrical & Automation"
                      description="Complete LED lighting retrofit with smart controls for a corporate office building."
                      imageUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                      title="Gemmayze Heritage Façade Restoration"
                      category="Construction & Renovation"
                      description="Careful restoration of a heritage building façade in the historic Gemmayze district."
                      imageUrl="https://images.unsplash.com/photo-1614191663576-57a4ff3feb8c?auto=format&fit=crop&w=600&q=80"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard 
                      title="Seaside Pool & Deck Waterproofing"
                      category="Outdoor & Landscape Systems"
                      description="Comprehensive waterproofing solution for a beachfront pool and deck area."
                      imageUrl="https://images.unsplash.com/photo-1551041456-04c0fe8dfec6?auto=format&fit=crop&w=600&q=80"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-0 lg:-left-12" />
                <CarouselNext className="right-0 lg:-right-12" />
              </Carousel>
            </div>
            
            <div className="text-center mt-12">
              <NavLink 
                to="/projects" 
                className="bg-fadco-navy text-white px-8 py-3 rounded font-semibold hover:bg-fadco-gold transition-colors inline-block"
              >
                View All Projects
              </NavLink>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Call to Action Section */}
        <section className="py-20 px-4 md:px-6 bg-fadco-navy text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project needs and discover how FADCO can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <NavLink 
                to="/contact" 
                className="bg-white text-fadco-navy px-8 py-4 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors inline-block"
              >
                Contact Us
              </NavLink>
              <div className="flex flex-col sm:flex-row items-center gap-6 text-lg">
                <a href="tel:+9613255206" className="flex items-center hover:text-fadco-gold transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +961 3 255 206
                </a>
                <a href="mailto:fadcosarl@hotmail.com" className="flex items-center hover:text-fadco-gold transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  fadcosarl@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
