import { useState, useRef, FormEvent } from "react";
import { useProjects } from "@/hooks/use-projects";
import type { Project } from "@/context/ProjectsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, LogOut } from "lucide-react";

const ADMIN_STORAGE_KEY = "acc-admin-authenticated";

const getAdminCredentials = () => ({
  username: import.meta.env.VITE_ADMIN_USERNAME ?? "admin",
  email: import.meta.env.VITE_ADMIN_EMAIL ?? "admin@acc.com",
  password: import.meta.env.VITE_ADMIN_PASSWORD ?? "admin123",
});

const isAuthenticated = () =>
  sessionStorage.getItem(ADMIN_STORAGE_KEY) === "true";

const setAuthenticated = (value: boolean) =>
  value
    ? sessionStorage.setItem(ADMIN_STORAGE_KEY, "true")
    : sessionStorage.removeItem(ADMIN_STORAGE_KEY);

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

const AdminSection = () => {
  const [auth, setAuth] = useState(isAuthenticated);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [expanded, setExpanded] = useState(false);

  const {
    projects,
    loading,
    addProject,
    updateProject,
    deleteProject,
    resetToDefaults,
    importProjects,
  } = useProjects();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const { username: expectedUser, email: expectedEmail, password: expectedPassword } = getAdminCredentials();
    if (
      username.trim().toLowerCase() === expectedUser.toLowerCase() &&
      email.trim().toLowerCase() === expectedEmail.toLowerCase() &&
      password === expectedPassword
    ) {
      setAuthenticated(true);
      setAuth(true);
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      setAuthError("Invalid username, email, or password.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setAuth(false);
    setEditingId(null);
    setForm(emptyForm);
  };

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
    if (window.confirm("Delete this project?")) {
      deleteProject(id);
      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }
    }
  };

  const handleReset = async () => {
    if (window.confirm("Reset to default projects? Local changes will be lost.")) {
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse((e.target?.result as string) ?? "[]");
        if (!Array.isArray(data)) throw new Error("Must be an array.");
        importProjects(data as Project[]);
        setEditingId(null);
        setForm(emptyForm);
      } catch {
        window.alert("Invalid JSON file.");
      }
      event.target.value = "";
    };
    reader.readAsText(file);
  };

  if (!auth) {
    return (
      <section className="py-12 px-4 md:px-6 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto max-w-md">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">Admin access</span>
            </div>
            <span className="text-xs text-gray-400">
              {expanded ? "Collapse" : "Expand"}
            </span>
          </div>
          {expanded && (
            <form
              onSubmit={handleLogin}
              className="mt-4 p-4 bg-white rounded-lg border border-gray-200 space-y-3"
            >
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="text-sm"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-sm"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-sm"
              />
              {authError && (
                <p className="text-sm text-red-600">{authError}</p>
              )}
              <Button type="submit" size="sm">
                Sign in
              </Button>
            </form>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 md:px-6 border-t border-gray-200 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-acg-navy">
            Manage Projects
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-600"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Sign out
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Button variant="outline" size="sm" onClick={handleReset}>
            Reset to Default
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            Import JSON
          </Button>
          <Button size="sm" onClick={handleExport}>
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

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="px-3 py-2 bg-slate-50 border-b text-xs font-medium text-slate-600">
              Projects ({projects.length})
            </div>
            <div className="max-h-64 overflow-y-auto">
              {loading ? (
                <p className="p-4 text-sm text-slate-500">Loading…</p>
              ) : projects.length === 0 ? (
                <p className="p-4 text-sm text-slate-500">No projects.</p>
              ) : (
                projects.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between gap-2 px-3 py-2 border-b border-slate-100 hover:bg-slate-50"
                  >
                    <span className="text-sm truncate flex-1">{p.title}</span>
                    <div className="flex gap-1 shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => handleEdit(p)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg border border-slate-200 p-4 space-y-3"
          >
            <h4 className="text-sm font-semibold text-acg-navy">
              {editingId ? "Edit Project" : "Add Project"}
            </h4>
            <Input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              required
              className="text-sm"
            />
            <Input
              placeholder="Category (e.g. Residential, Commercial)"
              value={form.category}
              onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
              required
              className="text-sm"
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                placeholder="Year"
                type="number"
                value={form.year}
                onChange={(e) => setForm((prev) => ({ ...prev, year: e.target.value }))}
                className="text-sm"
              />
              <Input
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                className="text-sm"
              />
            </div>
            <Input
              placeholder="Image URL"
              value={form.imageUrl}
              onChange={(e) => setForm((prev) => ({ ...prev, imageUrl: e.target.value }))}
              required
              className="text-sm"
            />
            <Textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              rows={2}
              required
              className="text-sm"
            />
            <Input
              placeholder="Services (optional)"
              value={form.services}
              onChange={(e) => setForm((prev) => ({ ...prev, services: e.target.value }))}
              className="text-sm"
            />
            <div className="flex gap-2">
              <Button type="submit" size="sm">
                {editingId ? "Save" : "Add"}
              </Button>
              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingId(null);
                    setForm(emptyForm);
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
