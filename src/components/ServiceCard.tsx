
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
      "bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden",
      className
    )}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <div className="text-fadco-navy mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-fadco-navy text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
