import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on Abdallah Contracting Company's website."
      />
      <section className="bg-acg-navy">
        <div
          ref={ref}
          className={cn(
            "min-h-[70vh] flex items-center justify-center px-8 py-28 md:py-36 reveal",
            isVisible && "visible"
          )}
        >
          <div className="text-center max-w-lg">
            <p className="text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-5">
              404
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-white mb-5">
              Page not found
            </h1>
            <p className="text-white/35 leading-relaxed mb-12">
              The page you&apos;re looking for may have been moved or no longer exists.
              Check the URL or return to the homepage.
            </p>
            <NavLink
              to="/"
              className="group inline-flex items-center gap-3 border border-acg-gold text-acg-gold px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-acg-gold hover:text-acg-navy transition-all duration-500"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
