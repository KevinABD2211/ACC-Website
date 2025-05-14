
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className,
}) => {
  return (
    <div className={cn(
      "mb-12",
      center ? "text-center" : "",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-3",
        center ? "mx-auto" : ""
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-3xl",
          center ? "mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
