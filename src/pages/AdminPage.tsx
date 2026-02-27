import { useState, useRef, FormEvent } from "react";
import SEO from "@/components/SEO";
import { useProjects } from "@/hooks/use-projects";
import { Project } from "@/context/ProjectsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORY_OPTIONS = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Mixed", label: "Mixed (Residential & Commercial)" },
] as const;

type ProjectFormState = Omit<Project, "id">;

const emptyForm: ProjectFormState = {
  title: "",
  category: "",
  description: "",
  imageUrl: "",
  year: new Date().getFullYear(),
  location: "",
  services: "",
};

const AdminPage = () => {
  const {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    resetToDefaults,
    importProjects,
  } = useProjects();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      imageUrl: project.imageUrl,
      year: project.year,
      location: project.location ?? "",
      services: project.services ?? "",
    });
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }
    }
  };

  const handleReset = async () => {
    if (
      window.confirm(
        "This will discard local changes and reload the default projects.json. Continue?"
      )
    ) {
      await resetToDefaults();
      setEditingId(null);
      setForm(emptyForm);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const payload: ProjectFormState = {
      ...form,
      year:
        typeof form.year === "string"
          ? Number.isNaN(Number(form.year))
            ? form.year
            : Number(form.year)
          : form.year,
      location: form.location?.trim() || "",
      services: form.services?.trim() || "",
    };

    if (editingId !== null) {
      updateProject(editingId, payload);
    } else {
      addProject(payload);
    }

    setEditingId(null);
    setForm(emptyForm);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(projects, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "projects.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const data = JSON.parse(text);
        if (!Array.isArray(data)) {
          throw new Error("Imported JSON must be an array of projects.");
        }
        importProjects(data as Project[]);
        setEditingId(null);
        setForm(emptyForm);
      } catch (err) {
        console.error(err);
        window.alert(
          "Unable to import projects. Please ensure the file is a valid projects.json."
        );
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="pb-16">
      <SEO
        title="Admin - Manage Projects"
        description="Admin panel to visually manage ACC projects without code."
      />
      <section className="py-12 px-4 md:px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-acg-navy">
                Projects Admin
              </h1>
              <p className="text-slate-600 mt-1">
                Manage public projects visually. Changes are stored in your
                browser and can be exported as{" "}
                <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">
                  projects.json
                </code>
                .
              </p>
              {error && (
                <p className="text-sm text-red-600 mt-2">
                  {error}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={handleReset}
              >
                Reset to Default
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={handleImportClick}
              >
                Import JSON
              </Button>
              <Button type="button" onClick={handleExport}>
                Export projects.json
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-6">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-acg-navy">
                Current Projects
              </h2>
              {loading && (
                <span className="text-sm text-slate-500">Loading…</span>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] gap-4 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 bg-slate-50 border-b border-slate-200">
                <span>Title</span>
                <span>Category</span>
                <span>Year</span>
                <span className="text-right">Actions</span>
              </div>
              <div>
                {projects.length === 0 && !loading ? (
                  <div className="px-4 py-6 text-sm text-slate-500">
                    No projects found. Use the form on the right to add your
                    first project.
                  </div>
                ) : (
                  projects.map((project) => (
                    <div
                      key={project.id}
                      className="border-t border-slate-100 px-4 py-3 flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_auto] md:items-center gap-2 md:gap-4"
                    >
                      <div>
                        <p className="font-medium text-slate-900">
                          {project.title}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <p className="text-sm text-slate-700">
                        {project.category}
                      </p>
                      <p className="text-sm text-slate-700">
                        {project.year}
                      </p>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          type="button"
                          onClick={() => handleEdit(project)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          type="button"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => handleDelete(project.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-acg-navy mb-4">
              {editingId ? "Edit Project" : "Add Project"}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 space-y-4"
            >
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Title
                </label>
                <Input
                  value={form.title}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Category
                </label>
                <Select
                  value={form.category || undefined}
                  onValueChange={(value) =>
                    setForm((prev) => ({ ...prev, category: value }))
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORY_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">
                    Year
                  </label>
                  <Input
                    value={form.year}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, year: e.target.value }))
                    }
                    type="number"
                    min={1900}
                    max={3000}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">
                    Location
                  </label>
                  <Input
                    value={form.location ?? ""}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, location: e.target.value }))
                    }
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Image URL
                </label>
                <Input
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, imageUrl: e.target.value }))
                  }
                  placeholder="https://…"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Description
                </label>
                <Textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">
                  Services
                </label>
                <Input
                  value={form.services ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, services: e.target.value }))
                  }
                  placeholder="Optional (e.g. Design, Construction, Project Management)"
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                <Button type="submit">
                  {editingId ? "Save changes" : "Add project"}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      setForm(emptyForm);
                    }}
                  >
                    Cancel edit
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;

