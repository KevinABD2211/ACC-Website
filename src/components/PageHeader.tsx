import { useEffect, useState } from "react";

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const PageHeader = ({}: PageHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-end overflow-hidden bg-acg-navy">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/acc-logo-white.png"
          alt="ACC"
          className="h-80 md:h-[26rem] lg:h-[32rem] w-auto opacity-90 transition-all duration-[1s] ease-out"
          style={{ opacity: loaded ? 0.9 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)" }}
        />
      </div>
    </div>
  );
};

export default PageHeader;
