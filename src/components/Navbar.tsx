import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location.pathname]);

  const useWhite = !isScrolled;
  const logoSrc = useWhite ? "/acc-logo-white.png" : "/acc-logo.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-700",
        isScrolled
          ? "bg-white/[0.97] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between min-h-[72px] px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <NavLink to="/" className="shrink-0 transition-opacity duration-500 hover:opacity-60">
          <img src={logoSrc} alt="ACC" className="h-8 md:h-10 w-auto object-contain" loading="eager" />
        </NavLink>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn("md:hidden", useWhite ? "text-white" : "text-acg-navy")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] tracking-[0.2em] uppercase transition-all duration-500 pb-1",
                  isActive
                    ? cn(useWhite ? "text-acg-gold" : "text-acg-gold")
                    : cn(useWhite ? "text-white/50 hover:text-white" : "text-slate-400 hover:text-acg-navy")
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 mx-8 py-6 bg-white border-t border-slate-100/50">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "px-2 py-3 text-[11px] tracking-[0.15em] uppercase transition-all duration-300",
                    isActive ? "text-acg-gold" : "text-slate-400 hover:text-acg-navy"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
