
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({
  title,
  category,
  description,
  imageUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Logo watermark */}
        <div className="absolute top-2 right-2 opacity-50">
          <img 
            src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
            alt="ACG Watermark" 
            className="h-8 w-auto"
          />
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-acg-navy font-semibold block mb-1">{category}</span>
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
