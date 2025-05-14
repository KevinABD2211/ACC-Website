
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

// Project data
const projects = [
  {
    id: 1,
    title: "Marina Towers",
    category: "Residential",
    description: "A luxury residential tower with sea views, featuring premium finishes and world-class amenities.",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    year: "2022"
  },
  {
    id: 2,
    title: "Cedar Heights Villa",
    category: "Residential",
    description: "A bespoke villa nestled in the mountains with panoramic views and custom crafted details.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
    year: "2021"
  },
  {
    id: 3,
    title: "Beirut Business Center",
    category: "Commercial",
    description: "A modern office complex designed for efficiency and flexibility, featuring sustainable building practices.",
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80",
    year: "2020"
  },
  {
    id: 4,
    title: "Hamra Residences",
    category: "Residential",
    description: "Urban apartment complex with modern amenities and thoughtful design in a prime location.",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    year: "2019"
  },
  {
    id: 5,
    title: "Mediterranean Plaza",
    category: "Commercial",
    description: "A mixed-use development featuring retail spaces, offices, and restaurants in a vibrant central location.",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    year: "2018"
  },
  {
    id: 6,
    title: "Batroun Beach House",
    category: "Residential",
    description: "Contemporary beachfront residence with floor-to-ceiling windows and seamless indoor-outdoor living.",
    imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
    year: "2020"
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div>
      <PageHeader
        title="Our Projects"
        subtitle="Showcasing our portfolio of excellence"
        imageUrl="/lovable-uploads/85fd7224-bac7-4b6a-a1c0-71ffc29aff09.png"
      />

      {/* Projects Gallery */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Explore our portfolio of residential and commercial construction projects."
            center={true}
          />
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center rounded-md border border-gray-200 bg-white">
              {["All", "Residential", "Commercial"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    filter === category
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-acg-navy bg-opacity-60 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-acg-gold text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-acg-navy bg-opacity-70">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-72 md:h-96 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-acg-navy flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-acg-gold text-sm font-medium">{selectedProject.category}</span>
                  <h3 className="text-acg-navy text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                <span className="text-gray-500">{selectedProject.year}</span>
              </div>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-bold text-acg-navy mb-3">Project Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">Lebanon</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Project Type</p>
                    <p className="text-gray-600">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Year Completed</p>
                    <p className="text-gray-600">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Services Provided</p>
                    <p className="text-gray-600">Design, Construction, Project Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 bg-acg-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Project?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how ACG can bring your vision to life with the same quality and dedication showcased in our portfolio.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-acg-navy px-8 py-3 rounded font-semibold hover:bg-acg-gold transition-colors inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
