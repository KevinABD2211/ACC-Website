
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  pattern?: string;
}

const PageHeader = ({ title, subtitle, imageUrl, pattern }: PageHeaderProps) => {
  return (
    <header 
      className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-fadco-navy bg-opacity-70"></div>
      
      {/* Pattern overlay if provided */}
      {pattern && (
        <div 
          className={cn(
            "absolute inset-0 opacity-20",
            {
              "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')]": pattern === "grid",
              "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsLWhhdGNoIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSAwIDApIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkaWFnb25hbC1oYXRjaCkiIC8+PC9zdmc+')]": pattern === "diagonal-lines",
              "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiIC8+PC9zdmc+')]": pattern === "dots"
            }
          )}
        ></div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-200">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
