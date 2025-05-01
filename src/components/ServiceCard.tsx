
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div className="text-fadco-navy mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-fadco-navy text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
