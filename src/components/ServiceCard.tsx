
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  bulletPoints: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl, bulletPoints, className }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={cn(
      "bg-white overflow-hidden h-full flex flex-col group transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
      className
    )}>
      <div className="relative w-full overflow-hidden">
        <AspectRatio ratio={4/3}>
          {imgError ? (
            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
              <span className="text-slate-200 text-xs tracking-widest uppercase">ACC</span>
            </div>
          ) : (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-105" 
              onError={() => setImgError(true)}
            />
          )}
        </AspectRatio>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <div className="text-acg-gold mb-4 opacity-70">{icon}</div>
        <h3 className="font-display text-acg-navy text-base mb-2">{title}</h3>
        <p className="text-slate-400 mb-5 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2 flex-grow">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start text-sm text-slate-500">
              <Check className="h-3 w-3 mr-2 mt-1 text-acg-gold/60 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
