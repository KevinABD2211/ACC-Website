
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={cn(
        "absolute inset-0 bg-fadco-navy bg-opacity-80 flex flex-col justify-end p-6 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <span className="text-fadco-gold text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
        <button className="mt-4 text-white border border-white hover:bg-white hover:text-fadco-navy transition-colors py-2 px-4 inline-block rounded text-sm">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
