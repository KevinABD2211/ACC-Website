
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-fadco-navy flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Building"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 z-10 animate-fade-in">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Building on Legacy, <br /> Developing the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium construction and real estate development with over 28 years of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/about"
                className="bg-white text-fadco-navy px-6 py-3 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors"
              >
                Our Story
              </NavLink>
              <NavLink
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-fadco-navy transition-colors"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Excellence in Construction Since 1996" 
                subtitle="From humble beginnings in plumbing and electrical work to a leading development company."
                center={false}
              />
              <p className="text-gray-600 mb-6">
                Founded by Fadi Abdallah, FADCO began as a specialized trade contractor and has grown into a premier 
                development company in Lebanon. Our reputation is built on quality craftsmanship, integrity, and a deep 
                understanding of both traditional values and modern construction techniques.
              </p>
              <NavLink 
                to="/about" 
                className="text-fadco-navy font-semibold hover:text-fadco-gold transition-colors flex items-center"
              >
                Learn more about our journey
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NavLink>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80"
                  alt="Building"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80"
                  alt="Construction"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&q=80"
                  alt="Architecture"
                  className="rounded-lg h-40 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&q=80"
                  alt="Design"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive construction and development services to meet all your needs."
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="General Contracting"
              description="Full-service general contracting for residential and commercial construction projects of all sizes."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <ServiceCard 
              title="Plumbing & Electrical"
              description="Expert plumbing and electrical services, from new installations to repairs and maintenance."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
            <ServiceCard 
              title="Full Renovations"
              description="Complete home and commercial renovations, from concept to completion with attention to every detail."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
            />
          </div>
          <div className="text-center mt-12">
            <NavLink 
              to="/services" 
              className="bg-fadco-navy text-white px-6 py-3 rounded font-semibold hover:bg-fadco-gold transition-colors inline-block"
            >
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Recent Projects" 
            subtitle="Showcasing our dedication to quality and craftsmanship."
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Marina Towers"
              category="Residential Development"
              description="A luxury residential tower with sea views, featuring premium finishes and world-class amenities."
              imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&q=80"
            />
            <ProjectCard 
              title="Cedar Heights Villa"
              category="Custom Home"
              description="A bespoke villa nestled in the mountains with panoramic views and custom crafted details."
              imageUrl="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=600&q=80"
            />
            <ProjectCard 
              title="Beirut Business Center"
              category="Commercial Construction"
              description="A modern office complex designed for efficiency and flexibility, featuring sustainable building practices."
              imageUrl="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="text-center mt-12">
            <NavLink 
              to="/projects" 
              className="bg-fadco-navy text-white px-6 py-3 rounded font-semibold hover:bg-fadco-gold transition-colors inline-block"
            >
              View All Projects
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-6 bg-fadco-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project needs and discover how FADCO can bring your vision to life.
          </p>
          <NavLink 
            to="/contact" 
            className="bg-white text-fadco-navy px-8 py-3 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors inline-block"
          >
            Get in Touch
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
