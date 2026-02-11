import { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects, type Project } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, ArrowLeft, Download, Upload, RotateCcw } from "lucide-react";

const AdminPage = () => {
  const {
    projects,
    loading,
    error,
    source,
    addProject,
    updateProject,
    deleteProject,
    saveProjects,
    resetToFile,
  } = useProjects();

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    category: "Residential",
    description: "",
    imageUrl: "",
    year: new Date().getFullYear().toString(),
  });

  const resetForm = () => {
    setFormData({
      title: "",
      category: "Residential",
      description: "",
      imageUrl: "",
      year: new Date().getFullYear().toString(),
    });
  };

  const handleSaveEdit = () => {
    if (!editingProject) return;
    const { title, category, description, imageUrl, year } = formData;
    if (!title?.trim()) {
      toast.error("Title is required");
      return;
    }
    updateProject(editingProject.id, {
      title: title.trim(),
      category: category ?? "Residential",
      description: description ?? "",
      imageUrl: imageUrl ?? "",
      year: year ?? "",
    });
    toast.success("Project updated");
    setEditingProject(null);
    resetForm();
  };

  const handleAdd = () => {
    const { title, category, description, imageUrl, year } = formData;
    if (!title?.trim()) {
      toast.error("Title is required");
      return;
    }
    addProject({
      title: title.trim(),
      category: category ?? "Residential",
      description: description ?? "",
      imageUrl: imageUrl ?? "",
      year: year ?? "",
    });
    toast.success("Project added");
    setIsAddOpen(false);
    resetForm();
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      deleteProject(deleteId);
      toast.success("Project removed");
      setDeleteId(null);
    }
  };

  const handleExport = () => {
    const blob = new Blob(
      [JSON.stringify({ projects }, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported projects.json");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        const list = data.projects ?? data;
        if (!Array.isArray(list)) throw new Error("Invalid format");
        const mapped = list.map((p: Record<string, unknown>, i: number) => ({
          id: typeof p.id === "number" ? p.id : i + 1,
          title: String(p.title ?? ""),
          category: String(p.category ?? "Residential"),
          description: String(p.description ?? ""),
          imageUrl: String(p.imageUrl ?? ""),
          year: String(p.year ?? ""),
        }));
        saveProjects(mapped);
        toast.success(`Imported ${mapped.length} projects`);
      } catch {
        toast.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleReset = async () => {
    await resetToFile();
    toast.success("Reset to projects.json");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-acg-navy text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Project Manager</h1>
            <span className="text-sm text-white/80">
              {source === "local" ? "Editing local copy" : "Using projects.json"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReset}
              disabled={source === "file"}
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
            <Button variant="secondary" size="sm" onClick={handleExport}>
              <Download className="w-4 h-4 mr-1" />
              Export
            </Button>
            <label>
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleImport}
              />
              <Button variant="secondary" size="sm" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-1" />
                  Import
                </span>
              </Button>
            </label>
            <Button onClick={() => setIsAddOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
          <strong>Tip:</strong> Changes are saved in your browser. To persist across devices, export the JSON and replace <code className="bg-amber-100 px-1 rounded">public/projects.json</code>, then commit and push to GitHub.
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="w-full md:w-48 h-32 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-acg-navy">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category} · {project.year}</p>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingProject(project);
                    setFormData({
                      title: project.title,
                      category: project.category,
                      description: project.description,
                      imageUrl: project.imageUrl,
                      year: project.year,
                    });
                  }}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:bg-red-50"
                  onClick={() => setDeleteId(project.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No projects yet. Click &quot;Add Project&quot; to get started.</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editingProject} onOpenChange={(o) => !o && setEditingProject(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <ProjectForm formData={formData} setFormData={setFormData} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingProject(null)}>Cancel</Button>
            <Button onClick={handleSaveEdit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
          </DialogHeader>
          <ProjectForm formData={formData} setFormData={setFormData} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button>
            <Button onClick={handleAdd}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog open={deleteId !== null} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove project?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the project from your list. You can export before deleting to keep a backup.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

function ProjectForm({
  formData,
  setFormData,
}: {
  formData: Partial<Project>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<Project>>>>;
}) {
  return (
    <div className="grid gap-4 py-2">
      <div>
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title ?? ""}
          onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
          placeholder="Project name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category ?? "Residential"}
            onValueChange={(v) => setFormData((p) => ({ ...p, category: v }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Residential">Residential</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            value={formData.year ?? ""}
            onChange={(e) => setFormData((p) => ({ ...p, year: e.target.value }))}
            placeholder="2024"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description ?? ""}
          onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
          placeholder="Brief project description"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          value={formData.imageUrl ?? ""}
          onChange={(e) => setFormData((p) => ({ ...p, imageUrl: e.target.value }))}
          placeholder="https://..."
        />
      </div>
    </div>
  );
}

export default AdminPage;
