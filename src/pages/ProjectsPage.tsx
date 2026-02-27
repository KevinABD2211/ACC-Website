import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import { useProjects } from "@/hooks/use-projects";
import type { Project } from "@/context/ProjectsContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PROJECT_CATEGORIES = ["All", "Residential", "Commercial", "Mixed"] as const;

function uniqueServices(services: string | undefined): string {
  if (!services?.trim()) return "";
  const items = services.split(",").map((s) => s.trim()).filter(Boolean);
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  }).join(", ");
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState<typeof PROJECT_CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, loading, error } = useProjects();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLElement>(0.15);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          const cat = project.category.trim();
          if (filter === "Mixed") {
            return cat === "Mixed" || cat === "Residential & Commercial" || cat.toLowerCase().includes("mixed");
          }
          return cat === filter;
        });

  return (
    <div>
      <SEO
        title="Construction Projects Portfolio"
        description="Discover ACC's portfolio of residential and commercial projects across Lebanon, showcasing quality construction and turnkey delivery."
      />
      <PageHeader
        title="Our Projects"
        subtitle="A portfolio of precision and quality"
        imageUrl="/lovable-uploads/85fd7224-bac7-4b6a-a1c0-71ffc29aff09.png"
      />

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="Residential, commercial, and mixed-use construction delivered with excellence."
            center
          />

          {error && (
            <p className="text-center text-red-600 mt-2 text-sm">{error}</p>
          )}

          {loading ? (
            <p className="text-center text-slate-400 mt-8">Loading projects...</p>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-10 mt-12 mb-16">
                {PROJECT_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={cn(
                      "pb-2 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 border-b",
                      filter === category
                        ? "text-acg-navy border-acg-gold"
                        : "text-slate-400 border-transparent hover:text-acg-navy"
                    )}
                  >
                    {category === "Mixed" ? "Mixed Use" : category}
                  </button>
                ))}
              </div>

              <div
                ref={gridRef}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children reveal",
                  gridVisible && "visible"
                )}
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-acg-navy/90 via-acg-navy/30 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white text-lg font-display font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/35 text-sm">{project.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-acg-navy/70 backdrop-blur-md transition-all duration-500"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-72 md:h-[26rem] object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 bg-white/90 text-acg-navy flex items-center justify-center transition-all duration-500 hover:bg-acg-gold hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-6">
                <div>
                  <span className="text-[11px] tracking-[0.3em] uppercase text-acg-gold block mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-acg-navy text-2xl md:text-3xl font-display font-semibold">
                    {selectedProject.title}
                  </h3>
                </div>
                <span className="text-slate-400 text-sm">{selectedProject.year}</span>
              </div>

              <p className="text-slate-400 mb-10 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="border-t border-slate-100 pt-8">
                <h4 className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-6">
                  Project Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedProject.location && (
                    <div>
                      <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 mb-1">Location</p>
                      <p className="text-acg-navy">{selectedProject.location}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 mb-1">Project Type</p>
                    <p className="text-acg-navy">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 mb-1">Year Completed</p>
                    <p className="text-acg-navy">{selectedProject.year}</p>
                  </div>
                  {selectedProject.services && (
                    <div>
                      <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 mb-1">Services Provided</p>
                      <p className="text-acg-navy">{uniqueServices(selectedProject.services)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section
        ref={ctaRef}
        className={cn(
          "py-28 md:py-36 bg-acg-navy text-white relative overflow-hidden reveal",
          ctaVisible && "visible"
        )}
      >
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,94,0.3),transparent_50%)]" />
        <div className="max-w-[1200px] mx-auto px-8 text-center relative z-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-5">
            Start Building
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6 max-w-3xl mx-auto">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-white/35 mb-12 leading-relaxed max-w-xl mx-auto">
            Contact us to discuss how ACC can bring your vision to life with the same quality and dedication showcased in our portfolio.
          </p>
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-3 border border-acg-gold text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
