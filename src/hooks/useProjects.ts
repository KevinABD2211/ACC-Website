import { useState, useEffect, useCallback } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
}

const STORAGE_KEY = "acc_projects";
const PROJECTS_JSON_URL = "/projects.json";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"local" | "file">("file");

  const loadFromStorage = useCallback((): Project[] | null => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : parsed.projects ?? null;
      }
    } catch {
      // ignore
    }
    return null;
  }, []);

  const loadFromFile = useCallback(async (): Promise<Project[]> => {
    const res = await fetch(PROJECTS_JSON_URL);
    if (!res.ok) throw new Error("Failed to load projects");
    const data = await res.json();
    return data.projects ?? data ?? [];
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const fromStorage = loadFromStorage();
        if (fromStorage && fromStorage.length > 0) {
          if (!cancelled) {
            setProjects(fromStorage);
            setSource("local");
          }
          setLoading(false);
          return;
        }
        const fromFile = await loadFromFile();
        if (!cancelled) {
          setProjects(fromFile);
          setSource("file");
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load projects");
          setProjects([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [loadFromStorage, loadFromFile]);

  const saveProjects = useCallback((newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProjects));
    setSource("local");
  }, []);

  const addProject = useCallback(
    (project: Omit<Project, "id">) => {
      const id = Math.max(0, ...projects.map((p) => p.id)) + 1;
      const newProject: Project = { ...project, id };
      saveProjects([...projects, newProject]);
      return newProject;
    },
    [projects, saveProjects]
  );

  const updateProject = useCallback(
    (id: number, updates: Partial<Project>) => {
      const updated = projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      );
      saveProjects(updated);
    },
    [projects, saveProjects]
  );

  const deleteProject = useCallback(
    (id: number) => {
      saveProjects(projects.filter((p) => p.id !== id));
    },
    [projects, saveProjects]
  );

  const resetToFile = useCallback(async () => {
    try {
      const fromFile = await loadFromFile();
      setProjects(fromFile);
      localStorage.removeItem(STORAGE_KEY);
      setSource("file");
    } catch {
      setError("Failed to reset");
    }
  }, [loadFromFile]);

  return {
    projects,
    loading,
    error,
    source,
    addProject,
    updateProject,
    deleteProject,
    saveProjects,
    resetToFile,
  };
}
