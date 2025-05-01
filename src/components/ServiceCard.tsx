
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden relative",
      className
    )}>
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        {/* Logo watermark */}
        <div className="absolute bottom-2 right-2 opacity-30">
          <img 
            src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
            alt="FADCO Watermark" 
            className="h-8 w-auto"
          />
        </div>
      </div>
      <div className="p-6 relative">
        <div className="text-fadco-navy mb-4 flex justify-center relative">
          {icon}
          {/* Logo watermark in the background of the icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
            <img 
              src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
              alt="" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-fadco-navy text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
