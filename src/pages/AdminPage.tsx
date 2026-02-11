
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  resetProjects,
  type Project,
} from "@/lib/projectsData";

const ADMIN_PASSWORD = "acc2024";

const emptyForm = {
  title: "",
  category: "Residential",
  description: "",
  imageUrl: "",
  year: new Date().getFullYear().toString(),
  location: "Lebanon",
  services: "Design, Construction, Project Management",
};

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem("acc_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setProjects(getProjects());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("acc_admin_auth", "true");
      toast({ title: "Welcome!", description: "You are now logged in to the admin panel." });
    } else {
      toast({ title: "Access Denied", description: "Incorrect password.", variant: "destructive" });
    }
    setPassword("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("acc_admin_auth");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert to base64 for localStorage storage
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData({ ...formData, imageUrl: base64 });
      setImagePreview(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.imageUrl) {
      toast({ title: "Missing Fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    if (editingProject) {
      // Update existing
      updateProject(editingProject.id, formData);
      toast({ title: "Project Updated", description: `"${formData.title}" has been updated.` });
    } else {
      // Add new
      addProject(formData);
      toast({ title: "Project Added", description: `"${formData.title}" has been added.` });
    }

    setProjects(getProjects());
    resetForm();
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      imageUrl: project.imageUrl,
      year: project.year,
      location: project.location || "Lebanon",
      services: project.services || "Design, Construction, Project Management",
    });
    setImagePreview(project.imageUrl);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    const project = projects.find((p) => p.id === id);
    deleteProject(id);
    setProjects(getProjects());
    setDeleteConfirm(null);
    toast({ title: "Project Deleted", description: `"${project?.title}" has been removed.` });
  };

  const handleReset = () => {
    const restored = resetProjects();
    setProjects(restored);
    toast({ title: "Projects Reset", description: "All projects have been restored to defaults." });
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingProject(null);
    setShowForm(false);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <img src="/acc-logo.png" alt="ACC Logo" className="h-20 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-acg-navy">Admin Panel</h1>
              <p className="text-gray-500 mt-2">Enter your password to manage projects</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg py-6"
                  autoFocus
                />
                <Button type="submit" className="w-full bg-acg-navy hover:bg-acg-navy/90 text-white py-6 text-lg">
                  Sign In
                </Button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <a href="/" className="text-sm text-gray-400 hover:text-acg-navy transition-colors">
                &larr; Back to website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-acg-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/acc-white-logo.png" alt="ACC Logo" className="h-12" />
              <div>
                <h1 className="text-xl font-bold">Project Manager</h1>
                <p className="text-gray-300 text-sm">Add, edit, or remove projects</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                View Site
              </a>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-white hover:text-acg-navy text-sm"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-acg-navy">Projects ({projects.length})</h2>
            <p className="text-gray-500">Manage your project portfolio</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="bg-acg-gold text-acg-navy hover:bg-acg-gold/90 font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Project
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Reset to Defaults
            </Button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-acg-navy">
                {editingProject ? `Editing: ${editingProject.title}` : "Add New Project"}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Marina Towers"
                    className="py-5"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-acg-navy"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Year Completed <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="e.g. 2024"
                    className="py-5"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Beirut, Lebanon"
                    className="py-5"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the project..."
                  rows={3}
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Services Provided</label>
                <Input
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  placeholder="e.g. Design, Construction, Project Management"
                  className="py-5"
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Image <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {/* Upload button */}
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="border-dashed border-2 border-gray-300 hover:border-acg-navy px-6 py-8"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Upload Image
                    </Button>
                    <span className="text-gray-400 text-sm">or</span>
                    <Input
                      value={formData.imageUrl.startsWith("data:") ? "" : formData.imageUrl}
                      onChange={(e) => {
                        setFormData({ ...formData, imageUrl: e.target.value });
                        setImagePreview(e.target.value);
                      }}
                      placeholder="Paste image URL here..."
                      className="flex-1 py-5"
                    />
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Preview */}
                  {imagePreview && (
                    <div className="relative inline-block">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-48 h-32 object-cover rounded-lg border border-gray-200"
                        onError={() => setImagePreview("")}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, imageUrl: "" });
                          setImagePreview("");
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        x
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="bg-acg-navy hover:bg-acg-navy/90 text-white px-8 py-5">
                  {editingProject ? "Save Changes" : "Add Project"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} className="px-8 py-5">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No projects yet</h3>
            <p className="text-gray-400 mb-6">Add your first project to get started</p>
            <Button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="bg-acg-gold text-acg-navy hover:bg-acg-gold/90"
            >
              Add First Project
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-acg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-acg-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-acg-navy mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <Button
                      onClick={() => handleEdit(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1 text-acg-navy border-acg-navy/20 hover:bg-acg-navy hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </Button>
                    {deleteConfirm === project.id ? (
                      <div className="flex gap-1">
                        <Button
                          onClick={() => handleDelete(project.id)}
                          size="sm"
                          className="bg-red-500 hover:bg-red-600 text-white text-xs"
                        >
                          Confirm
                        </Button>
                        <Button
                          onClick={() => setDeleteConfirm(null)}
                          size="sm"
                          variant="outline"
                          className="text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => setDeleteConfirm(project.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-500 border-red-200 hover:bg-red-500 hover:text-white"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
