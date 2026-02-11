// Project data management using localStorage
// This allows the admin panel to add/edit/remove projects without touching code

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  location?: string;
  services?: string;
}

const STORAGE_KEY = "acc_projects";

// Default projects data (used as initial seed)
export const defaultProjects: Project[] = [
  {
    id: 1,
    title: "Marina Towers",
    category: "Residential",
    description: "A luxury residential tower with sea views, featuring premium finishes and world-class amenities.",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    year: "2022",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
  {
    id: 2,
    title: "Cedar Heights Villa",
    category: "Residential",
    description: "A bespoke villa nestled in the mountains with panoramic views and custom crafted details.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
    year: "2021",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
  {
    id: 3,
    title: "Beirut Business Center",
    category: "Commercial",
    description: "A modern office complex designed for efficiency and flexibility, featuring sustainable building practices.",
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80",
    year: "2020",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
  {
    id: 4,
    title: "Hamra Residences",
    category: "Residential",
    description: "Urban apartment complex with modern amenities and thoughtful design in a prime location.",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    year: "2019",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
  {
    id: 5,
    title: "Mediterranean Plaza",
    category: "Commercial",
    description: "A mixed-use development featuring retail spaces, offices, and restaurants in a vibrant central location.",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    year: "2018",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
  {
    id: 6,
    title: "Batroun Beach House",
    category: "Residential",
    description: "Contemporary beachfront residence with floor-to-ceiling windows and seamless indoor-outdoor living.",
    imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
    year: "2020",
    location: "Lebanon",
    services: "Design, Construction, Project Management",
  },
];

// Get all projects from localStorage (with default fallback)
export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error reading projects from localStorage:", e);
  }
  // First time: seed with defaults
  saveProjects(defaultProjects);
  return defaultProjects;
}

// Save all projects to localStorage
export function saveProjects(projects: Project[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (e) {
    console.error("Error saving projects to localStorage:", e);
  }
}

// Add a new project
export function addProject(project: Omit<Project, "id">): Project {
  const projects = getProjects();
  const newId = projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
  const newProject: Project = { ...project, id: newId };
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
}

// Update an existing project
export function updateProject(id: number, updates: Partial<Project>): Project | null {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates, id };
  saveProjects(projects);
  return projects[index];
}

// Delete a project
export function deleteProject(id: number): boolean {
  const projects = getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  saveProjects(filtered);
  return true;
}

// Reset projects to defaults
export function resetProjects(): Project[] {
  saveProjects(defaultProjects);
  return defaultProjects;
}
