## ACC Projects Data & Admin Architecture

This document explains how the projects data, admin panel, and logo behavior work in the ACC website so future developers can safely extend or modify the system.

---

### High-level Overview

- **Canonical data source**: `public/projects.json` is the primary, version-controlled dataset for all ACC projects.
- **Runtime overrides**: Browser `localStorage` can temporarily override `projects.json` via the admin panel at `/admin`.
- **Public consumption**: The public Projects page (`/projects`) reads from a shared React context that merges these concerns.
- **No backend**: Everything runs client-side. There is no server or database for projects yet.

---

### Files Involved

- **Data**
  - `public/projects.json`: Canonical projects list that is committed to Git.

- **State / Data Layer**
  - `src/context/ProjectsContext.tsx`: React context that:
    - Loads `projects.json`.
    - Applies `localStorage` overrides.
    - Exposes CRUD operations for the admin UI.
  - `src/hooks/use-projects.ts`: Small hook wrapper (`useProjects`) around the context for easy consumption.

- **Pages**
  - `src/pages/ProjectsPage.tsx`: Public projects portfolio page; reads from `useProjects`.
  - `src/pages/AdminPage.tsx`: Visual, no-code admin panel at `/admin` for managing projects.

- **App Shell / Routing**
  - `src/App.tsx`: Wraps the React tree with `ProjectsProvider` and declares routes including `/admin`.
  - `src/components/Layout.tsx`: Shared layout with navbar and footer.

- **Branding / Logo Behavior**
  - `src/components/Navbar.tsx`: All logo switching logic (white vs colored) based on route and scroll.
  - `src/components/SplashScreen.tsx`: Always shows the white logo on a navy background.
  - `src/pages/HomePage.tsx`: Hero section statically uses the white logo on the dark background.

---

### Projects Data Model

`public/projects.json` is an **array of project objects**:

- `id` (number) – unique identifier for the project.
- `title` (string) – project name.
- `category` (string) – e.g. `"Residential"`, `"Commercial"`.
- `description` (string) – marketing description for the project.
- `imageUrl` (string) – URL to a hero/project image.
- `year` (number) – completion year.
- `location` (string, optional) – project location (displayed in project details if present).
- `services` (string, optional) – text describing services provided.

The admin panel and public pages both rely on this structure, so keep it stable when editing.

---

### Projects Context (`ProjectsContext`)

File: `src/context/ProjectsContext.tsx`

Responsibilities:

- **Initialization**
  - On first load, tries to read `localStorage["acc-projects"]`.
  - If present and valid, uses that as the current projects list.
  - If missing or invalid, fetches `/projects.json` from `public/`.
  - Normalizes each project to ensure it has an `id`.

- **State exposed**
  - `projects`: Current array of projects.
  - `loading`: Boolean while initial load or reset is in progress.
  - `error`: User-friendly error string, if loading fails.

- **Mutations**
  - `addProject(input)`: Adds a new project, generating a numeric `id`.
  - `updateProject(id, updates)`: Partially updates an existing project by `id`.
  - `deleteProject(id)`: Removes a project by `id`.
  - `resetToDefaults()`: Refetches `/projects.json`, updates state, and clears the override key in `localStorage`.
  - `importProjects(projects)`: Replaces current projects with an imported array, normalizing IDs and persisting to `localStorage`.

Persistence:

- All mutations call a shared helper that:
  - Updates React state.
  - Writes the new array to `localStorage["acc-projects"]` (JSON string).

Hook:

- `src/hooks/use-projects.ts`
  - Simple wrapper:
    - `export const useProjects = () => useProjectsContext();`
  - This is the preferred way for components/pages to access project data.

---

### Public Projects Page (`/projects`)

File: `src/pages/ProjectsPage.tsx`

Key behavior:

- Uses `useProjects()` to access:
  - `projects`, `loading`, `error`.
- Supports a simple category filter with tabs:
  - `"All"`, `"Residential"`, `"Commercial"`.
- Clicking a project opens a modal with richer details.
  - Displays `location` and `services` only when present (optional fields).
- Shows loading and error messages when appropriate.

Admin entry:

- A **“Manage Projects”** button is displayed near the top of the page.
  - This links to `/admin`.
  - It is not part of the main site navigation; it only appears on the Projects page.

No project data is hardcoded in this component; everything comes from the shared context.

---

### Admin Panel (`/admin`)

File: `src/pages/AdminPage.tsx`

Route:

- Declared in `src/App.tsx` within `<Layout />`:
  - `path="/admin" element={<AdminPage />}`

Features:

- **List view**
  - Displays all current projects from `useProjects()`.
  - Shows title, category, year, and quick actions.

- **Edit / Add form**
  - Right-hand panel (or stacked on mobile).
  - Can create a new project or edit an existing one.
  - Fields:
    - Title
    - Category
    - Year
    - Location (optional)
    - Image URL
    - Description
    - Services (optional)

- **Actions**
  - **Add project**: Creates a new project and persists it to `localStorage`.
  - **Edit project**: Loads project values into the form; saving updates that project in context and `localStorage`.
  - **Delete project**: Removes a project after a confirmation dialog.
  - **Reset to Default**:
    - Confirms with user.
    - Refetches `public/projects.json`.
    - Clears the local override in `localStorage`.
    - Sets the in-memory state to the fetched default data.
  - **Import JSON**:
    - Prompts the user to select a `.json` file.
    - Expects an array of project objects.
    - Replaces the entire projects list and persists to `localStorage`.
  - **Export projects.json**:
    - Serializes the current projects array (including `id`, `location`, `services`).
    - Triggers a download as `projects.json`.

Persistence workflow (intended use):

1. Admin visits `/admin` and visually edits projects.
2. When satisfied, clicks **Export projects.json**.
3. Developer (or admin with repo access):
   - Replaces `public/projects.json` in the codebase with the exported file.
   - Commits and pushes the change to GitHub.
4. On the next deployment or on other devices, the updated `projects.json` becomes the default source of truth.

---

### Routing and Providers

File: `src/App.tsx`

- Wraps the routed app in:
  - `QueryClientProvider` (React Query – used elsewhere in the app).
  - `TooltipProvider`.
  - `ProjectsProvider` (for all project-related data).
- Routes inside `<BrowserRouter>` include:
  - `/` → `HomePage`
  - `/about` → `AboutPage`
  - `/services` → `ServicesPage`
  - `/projects` → `ProjectsPage`
  - `/process` → `ProcessPage`
  - `/contact` → `ContactPage`
  - `/admin` → `AdminPage`
  - `*` → `NotFound`

The `ProjectsProvider` wraps the router so any route can use `useProjects()`.

---

### Logo & Branding Behavior

Assets:

- Colored logo: `public/acc-logo.png`
- White logo (expected path): `public/acc-logo-white.png`

Navbar:

- File: `src/components/Navbar.tsx`
- Behavior:
  - Uses `useLocation()` to know the current route.
  - Tracks scroll position via `isScrolled`.
  - Determines:
    - `isHomePage = location.pathname === "/"`.
    - `shouldUseWhiteText = isHomePage && !isScrolled`.
    - `logoSrc = shouldUseWhiteText ? "/acc-logo-white.png" : "/acc-logo.png"`.
  - Result:
    - **Homepage before scroll**:
      - Transparent navbar over hero.
      - White logo and white navigation text for contrast on the dark hero image.
    - **After scroll or on any non-home route**:
      - Solid white navbar with shadow.
      - Colored logo and navy text.

Splash screen:

- File: `src/components/SplashScreen.tsx`
- Behavior:
  - Full-screen navy background.
  - Always shows the **white** logo (`/acc-logo-white.png`).
  - Fades out to reveal the app.

Landing hero:

- File: `src/pages/HomePage.tsx`
- Behavior:
  - Hero section overlays a navy-tinted background image.
  - Uses the **white** logo (`/acc-logo-white.png`) in the center of the hero.

All conditional logo switching logic (route/scroll aware) lives only in `Navbar.tsx`, as required.

---

### How to Extend or Modify

- **Add new project fields**
  1. Update the `Project` interface in `ProjectsContext.tsx`.
  2. Update the admin form in `AdminPage.tsx` to manage the new field.
  3. Update `ProjectsPage.tsx` to render the new field if you want it visible publicly.
  4. Update `public/projects.json` and any existing data to include the new property.

- **Change logo behavior**
  - Make all route/scroll-dependent logo decisions in `Navbar.tsx` only.
  - Other components may reference a fixed logo asset, but should not compute conditions.

- **Changing persistence**
  - Any changes to how projects are stored or loaded should go through `ProjectsContext`.
  - Keep `public/projects.json` as the long-term source of truth unless backend support is added later.

---

### Developer Cheat Sheet

- **Admin route**: `/admin`
- **Public projects route**: `/projects`
- **Source of truth file**: `public/projects.json`
- **Local override key**: `localStorage["acc-projects"]`
- **White logo path**: `/acc-logo-white.png` (place the asset under `public/`)

