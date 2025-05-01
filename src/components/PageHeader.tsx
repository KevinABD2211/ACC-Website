
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  imageUrl,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative bg-cover bg-center h-64 md:h-80 flex items-center",
        className
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-fadco-navy bg-opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-xl text-gray-200">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
