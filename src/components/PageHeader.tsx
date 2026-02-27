import { useEffect, useState } from "react";

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  logoOnly?: boolean;
  overlayOpacity?: number;
  imagePosition?: "center" | "top" | "bottom" | "bottom-center" | "top-center" | "very-bottom" | "extreme-bottom";
  objectFit?: "cover" | "contain";
}

const PageHeader = ({
  title,
  subtitle,
  imageUrl,
  logoOnly = false,
  overlayOpacity = 50,
  imagePosition = "center",
  objectFit = "cover",
}: PageHeaderProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const getBackgroundPosition = () => {
    switch (imagePosition) {
      case "top": return "center top";
      case "bottom": return "center bottom";
      case "bottom-center": return "center 80%";
      case "top-center": return "center 20%";
      case "very-bottom": return "center 95%";
      case "extreme-bottom": return "center 99%";
      default: return "center center";
    }
  };

  return (
    <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-end overflow-hidden bg-acg-navy">
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 transition-transform duration-[1.5s] ease-out"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: getBackgroundPosition(),
              backgroundSize: objectFit,
              backgroundRepeat: "no-repeat",
              transform: loaded ? "scale(1)" : "scale(1.05)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-acg-navy via-acg-navy/40 to-transparent"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      )}
      {!logoOnly && title && (
        <div
          className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1400px] pb-14 md:pb-20 transition-all duration-[1s] ease-out"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-3 leading-tight">{title}</h1>
          {subtitle && <p className="text-white/40 text-sm md:text-base max-w-md">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
