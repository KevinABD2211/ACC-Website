import { NavLink } from "react-router-dom";
import AdminSection from "@/components/AdminSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-acg-navy text-white">
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <img src="/acc-logo-white.png" alt="ACC" className="h-10 w-auto mb-6 opacity-70" />
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              One vision. One lead. Complete responsibility. Building across Lebanon since 1994.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-acg-gold/60 mb-6">Navigate</p>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/process", label: "Process" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className="text-white/25 hover:text-white text-sm transition-colors duration-500">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-acg-gold/60 mb-6">Contact</p>
            <div className="space-y-3 text-sm text-white/25">
              <a href="https://www.google.com/maps?q=Beirut,+Lebanon" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-500">Beirut, Lebanon</a>
              <a href="mailto:info@acg-lb.com" className="block hover:text-white transition-colors duration-500">info@acg-lb.com</a>
              <a href="tel:+9613255206" className="block hover:text-white transition-colors duration-500">+961 3 255 206</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-white/15 tracking-wider">
            &copy; {currentYear} ACC
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] text-white/15 hover:text-white/30 transition-colors duration-500 tracking-wider">Privacy</a>
            <a href="#" className="text-[10px] text-white/15 hover:text-white/30 transition-colors duration-500 tracking-wider">Terms</a>
            <AdminSection triggerClassName="text-white/15 hover:text-white/30 p-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
