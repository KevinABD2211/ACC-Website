
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SplashScreen from "@/components/SplashScreen";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

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
                Your Complete Build Partner—Every Trade, Every Time
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <NavLink
                  to="/contact"
                  className="bg-fadco-navy text-white px-8 py-4 rounded font-semibold hover:bg-fadco-gold transition-colors"
                >
                  Start Your Project
                </NavLink>
                <NavLink
                  to="/about"
                  className="border-2 border-fadco-navy text-fadco-navy px-8 py-4 rounded font-semibold hover:bg-fadco-navy hover:text-white transition-colors"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Preview Section */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <SectionTitle 
              title="Featured Projects" 
              subtitle="Showcasing our dedication to quality and craftsmanship."
              center={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProjectCard 
                title="Beirut Villa Under-floor Heating"
                category="Plumbing, Heating & Drainage"
                description="Complete hydronic under-floor heating system for a luxury villa in Beirut."
                imageUrl="https://images.unsplash.com/photo-1606946184955-83addcd9ab33?auto=format&fit=crop&w=600&q=80"
              />
              <ProjectCard 
                title="Downtown Office LED Retrofit"
                category="Electrical & Automation"
                description="Complete LED lighting retrofit with smart controls for a corporate office building."
                imageUrl="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"
              />
              <ProjectCard 
                title="Gemmayze Heritage Façade Restoration"
                category="Construction & Renovation"
                description="Careful restoration of a heritage building façade in the historic Gemmayze district."
                imageUrl="https://images.unsplash.com/photo-1614191663576-57a4ff3feb8c?auto=format&fit=crop&w=600&q=80"
              />
              <ProjectCard 
                title="Seaside Pool & Deck Waterproofing"
                category="Outdoor & Landscape Systems"
                description="Comprehensive waterproofing solution for a beachfront pool and deck area."
                imageUrl="https://images.unsplash.com/photo-1551041456-04c0fe8dfec6?auto=format&fit=crop&w=600&q=80"
              />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project needs and discover how FADCO can bring your vision to life.
            </p>
            <NavLink 
              to="/contact" 
              className="bg-white text-fadco-navy px-8 py-4 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors inline-block"
            >
              Get in Touch
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
