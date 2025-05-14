
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  bulletPoints: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  bulletPoints,
  className,
}) => {
  const [imgError, setImgError] = useState(false);
  
  // Handle image error by setting a fallback
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageUrl}`);
    setImgError(true);
  };

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden relative h-full flex flex-col",
      className
    )}>
      <div className="h-40 overflow-hidden relative bg-gray-200">
        <img 
          src={imgError ? "https://placehold.co/600x400?text=ACG+Service" : imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
          onError={handleImageError}
        />
        {/* Logo watermark */}
        <div className="absolute bottom-2 right-2 opacity-30">
          <img 
            src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
            alt="ACG Watermark" 
            className="h-8 w-auto"
          />
        </div>
      </div>
      <div className="p-4 relative flex flex-col flex-grow">
        <div className="text-acg-navy mb-3 flex justify-center relative">
          {icon}
          {/* Logo watermark in the background of the icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
            <img 
              src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
              alt="" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1 text-acg-navy text-center">{title}</h3>
        <p className="text-gray-600 mb-3 text-center italic text-sm">{description}</p>
        
        {/* Bullet Points */}
        <ul className="space-y-1 mb-4 flex-grow">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className="h-4 w-4 mr-2 mt-0.5 text-acg-navy flex-shrink-0" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center mt-auto pt-2">
          <Button 
            className="bg-white text-acg-navy hover:bg-acg-navy hover:text-white border border-acg-navy"
            variant="outline"
            size="sm"
            asChild
          >
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
