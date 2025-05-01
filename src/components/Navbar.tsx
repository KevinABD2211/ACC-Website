
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white bg-opacity-80 py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d73cc946-9a60-4d35-91f0-b6221cc76b23.png" 
              alt="FADCO Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("md:hidden", isScrolled ? "text-fadco-navy" : "text-fadco-navy")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-fadco-gold",
                  isActive 
                    ? "text-fadco-navy font-semibold" 
                    : "text-fadco-navy"
                )
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-fadco-gold",
                  isActive 
                    ? "text-fadco-navy font-semibold" 
                    : "text-fadco-navy"
                )
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-fadco-gold",
                  isActive 
                    ? "text-fadco-navy font-semibold" 
                    : "text-fadco-navy"
                )
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-fadco-gold",
                  isActive 
                    ? "text-fadco-navy font-semibold" 
                    : "text-fadco-navy"
                )
              }
            >
              Process
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-fadco-gold",
                  isActive 
                    ? "text-fadco-navy font-semibold" 
                    : "text-fadco-navy"
                )
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white rounded-lg mt-2 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "bg-fadco-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "bg-fadco-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "bg-fadco-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/process"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "bg-fadco-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Process
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
                    isActive
                      ? "bg-fadco-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
