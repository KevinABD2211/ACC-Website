import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number | string;
  location?: string;
  services?: string;
}

interface ProjectsContextValue {
  projects: Project[];
  loading: boolean;
  error: string | null;
  addProject: (input: Omit<Project, "id">) => void;
  updateProject: (id: number, updates: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  resetToDefaults: () => Promise<void>;
  importProjects: (projects: Project[]) => void;
}

const ProjectsContext = createContext<ProjectsContextValue | undefined>(undefined);

const STORAGE_KEY = "acc-projects";

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const persistProjects = (next: Project[]) => {
    setProjects(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.error("Failed to persist projects to localStorage", err);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setProjects(parsed);
            setLoading(false);
            return;
          }
        }

        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Failed to load projects.json");
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("projects.json must contain an array");
        }
        const normalised = data.map((item, index) => {
          const id =
            typeof item.id === "number" ? item.id : Date.now() + index;
          return { ...item, id };
        });
        persistProjects(normalised);
      } catch (err) {
        console.error(err);
        setError("Unable to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    void initialize();
  }, []);

  const addProject = (input: Omit<Project, "id">) => {
    const id = Date.now();
    const next = [...projects, { ...input, id }];
    persistProjects(next);
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    const next = projects.map((project) =>
      project.id === id ? { ...project, ...updates } : project
    );
    persistProjects(next);
  };

  const deleteProject = (id: number) => {
    const next = projects.filter((project) => project.id !== id);
    persistProjects(next);
  };

  const resetToDefaults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/projects.json?ts=${Date.now()}`);
      if (!response.ok) {
        throw new Error("Failed to reload projects.json");
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("projects.json must contain an array");
      }
      const normalised = data.map((item, index) => {
        const id =
          typeof item.id === "number" ? item.id : Date.now() + index;
        return { ...item, id };
      });
      setProjects(normalised);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error(err);
      setError("Unable to reset projects to defaults.");
    } finally {
      setLoading(false);
    }
  };

  const importProjects = (incoming: Project[]) => {
    const normalised = incoming.map((item, index) => {
      const id =
        typeof item.id === "number" ? item.id : Date.now() + index;
      return { ...item, id };
    });
    persistProjects(normalised);
  };

  const value: ProjectsContextValue = {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    resetToDefaults,
    importProjects,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const ctx = useContext(ProjectsContext);
  if (!ctx) {
    throw new Error("useProjectsContext must be used within a ProjectsProvider");
  }
  return ctx;
};

