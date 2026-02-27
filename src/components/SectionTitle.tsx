
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, label, center = false, className }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal mb-16 md:mb-20",
        isVisible && "visible",
        center ? "text-center" : "",
        className
      )}
    >
      {label && (
        <p className={cn("text-[11px] tracking-[0.3em] uppercase text-acg-gold mb-4", center ? "mx-auto" : "")}>
          {label}
        </p>
      )}
      <h2 className={cn("text-3xl md:text-4xl font-display text-acg-navy mb-4 max-w-2xl leading-tight", center ? "mx-auto" : "")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-slate-400 text-sm md:text-base max-w-lg leading-relaxed", center ? "mx-auto" : "")}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
