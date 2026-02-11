import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

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
      <div className="min-h-screen flex items-center justify-center bg-acg-navy">
        <div className="text-center text-white px-4">
          <p className="text-sm uppercase tracking-widest text-acg-gold mb-2">
            404 Error
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            The page you&apos;re looking for may have been moved or no longer
            exists. Please check the URL or return to the homepage.
          </p>
          <NavLink
            to="/"
            className="inline-block bg-white text-acg-navy px-8 py-3 rounded font-semibold hover:bg-acg-gold hover:text-white transition-colors"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
