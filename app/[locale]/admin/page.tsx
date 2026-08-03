"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import {
  FiPlus,
  FiTrash2,
  FiLogOut,
  FiGlobe,
  FiGithub,
  FiCheckCircle,
  FiFolder,
  FiAward,
  FiExternalLink,
  FiCalendar,
  FiUpload,
  FiImage,
} from "react-icons/fi";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "achievements">("projects");
  const [projects, setProjects] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Modals
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showAchModal, setShowAchModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState("");

  // Project Form
  const [projectForm, setProjectForm] = useState({
    title: "",
    slug: "",
    category_id: "Web Application",
    category_en: "Web Application",
    role_id: "Full-Stack Developer",
    role_en: "Full-Stack Developer",
    description_id: "",
    description_en: "",
    problem_id: "",
    problem_en: "",
    solution_id: "",
    solution_en: "",
    result_id: "",
    result_en: "",
    stacksText: "React.js, Next.js, TailwindCSS",
    image: "",
    link_demo: "",
    link_github: "",
    is_featured: false,
  });

  // Certificate Form
  const [achForm, setAchForm] = useState({
    name: "",
    issuing_organization: "",
    issue_date: new Date().toISOString().split("T")[0],
    category: "Certificate",
    image: "",
    credential_url: "",
  });

  const router = useRouter();

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error("Fetch projects error:", err);
    }
  };

  const fetchAchievements = async () => {
    try {
      const res = await fetch("/api/admin/achievements");
      if (res.ok) {
        const data = await res.json();
        setAchievements(data);
      }
    } catch (err) {
      console.error("Fetch achievements error:", err);
    }
  };

  const loadAll = async () => {
    setLoading(true);
    await Promise.all([fetchProjects(), fetchAchievements()]);
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    target: "project" | "achievement"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        if (target === "project") {
          setProjectForm((prev) => ({ ...prev, image: data.url }));
        } else {
          setAchForm((prev) => ({ ...prev, image: data.url }));
        }
      } else {
        alert("Gagal mengunggah gambar: " + (data.message || ""));
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Terjadi kesalahan saat mengunggah file.");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleTitleChange = (val: string) => {
    const slugified = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    setProjectForm((prev) => ({
      ...prev,
      title: val,
      slug: slugified,
    }));
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setNotification("");

    const stacks = projectForm.stacksText.split(",").map((s) => s.trim()).filter(Boolean);

    const payload = {
      title: projectForm.title,
      slug: projectForm.slug,
      category_id: projectForm.category_id,
      category_en: projectForm.category_en,
      role_id: projectForm.role_id,
      role_en: projectForm.role_en,
      description_id: projectForm.description_id || projectForm.title,
      description_en: projectForm.description_en || projectForm.title,
      problem_id: projectForm.problem_id,
      problem_en: projectForm.problem_en,
      solution_id: projectForm.solution_id,
      solution_en: projectForm.solution_en,
      result_id: projectForm.result_id,
      result_en: projectForm.result_en,
      stacks,
      image: projectForm.image,
      link_demo: projectForm.link_demo || null,
      link_github: projectForm.link_github || null,
      is_featured: projectForm.is_featured,
      is_show: true,
    };

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Gagal menyimpan proyek");
      }

      setNotification("Proyek baru berhasil ditambahkan!");
      setShowProjectModal(false);
      fetchProjects();
    } catch (err: any) {
      alert(err.message || "Error saat menyimpan");
    } finally {
      setSubmitting(false);
    }
  };

  const handleAchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setNotification("");

    try {
      const res = await fetch("/api/admin/achievements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(achForm),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Gagal menyimpan sertifikat");
      }

      setNotification("Sertifikat baru berhasil ditambahkan!");
      setShowAchModal(false);
      fetchAchievements();

      setAchForm({
        name: "",
        issuing_organization: "",
        issue_date: new Date().toISOString().split("T")[0],
        category: "Certificate",
        image: "",
        credential_url: "",
      });
    } catch (err: any) {
      alert(err.message || "Error saat menyimpan");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProject = async (slug: string, title: string) => {
    if (!confirm(`Yakin ingin menghapus proyek "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/projects?slug=${slug}`, { method: "DELETE" });
      if (res.ok) {
        setNotification(`Proyek "${title}" berhasil dihapus!`);
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAch = async (id: any, name: string) => {
    if (!confirm(`Yakin ingin menghapus sertifikat "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/achievements?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setNotification(`Sertifikat "${name}" berhasil dihapus!`);
        fetchAchievements();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <Container data-aos="fade-up">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageHeading
          title="CMS Admin Dashboard"
          description="Kelola proyek portofolio & sertifikat penghargaan secara langsung."
        />
        <div className="flex items-center gap-2">
          {activeTab === "projects" ? (
            <button
              onClick={() => setShowProjectModal(true)}
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-neutral-950 shadow-md transition hover:bg-amber-400"
            >
              <FiPlus size={18} />
              <span>Tambah Proyek</span>
            </button>
          ) : (
            <button
              onClick={() => setShowAchModal(true)}
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-neutral-950 shadow-md transition hover:bg-amber-400"
            >
              <FiPlus size={18} />
              <span>Tambah Sertifikat</span>
            </button>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <FiLogOut size={16} />
            <span>Keluar</span>
          </button>
        </div>
      </div>

      {notification && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-500">
          <FiCheckCircle size={18} />
          <span>{notification}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="mt-6 flex gap-3 border-b border-neutral-200 pb-3 dark:border-neutral-800">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
            activeTab === "projects"
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          }`}
        >
          <FiFolder size={16} />
          <span>Proyek Portofolio ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("achievements")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
            activeTab === "achievements"
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          }`}
        >
          <FiAward size={16} />
          <span>Sertifikat & Achievements ({achievements.length})</span>
        </button>
      </div>

      {/* TAB PROJECTS */}
      {activeTab === "projects" && (
        <div className="mt-6">
          {loading ? (
            <div className="py-12 text-center text-sm text-neutral-500">Memuat data proyek...</div>
          ) : projects.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500 dark:border-neutral-800">
              Belum ada proyek. Klik "Tambah Proyek" di atas.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((item) => (
                <div
                  key={item.slug || item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-200 hover:border-amber-500/50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="space-y-3">
                    {item.image && (
                      <div className="h-44 w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-500">
                          {item.category || "Web App"}
                        </span>
                        <h4 className="mt-1 text-lg font-bold text-neutral-900 dark:text-neutral-100">{item.title}</h4>
                      </div>
                      {item.is_featured && (
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-extrabold text-emerald-500">FEATURED</span>
                      )}
                    </div>
                    <p className="line-clamp-2 text-xs text-neutral-600 dark:text-neutral-400">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.stacks?.map((st: string, idx: number) => (
                        <span key={idx} className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 dark:border-neutral-800">
                    <div className="flex items-center gap-3 text-neutral-500">
                      {item.link_demo && (
                        <a href={item.link_demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs hover:text-amber-500">
                          <FiGlobe size={14} /> Demo
                        </a>
                      )}
                      {item.link_github && (
                        <a href={item.link_github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs hover:text-amber-500">
                          <FiGithub size={14} /> Code
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteProject(item.slug, item.title)}
                      className="flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-500 hover:bg-red-500/20"
                    >
                      <FiTrash2 size={13} /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB ACHIEVEMENTS / CERTIFICATES */}
      {activeTab === "achievements" && (
        <div className="mt-6">
          {loading ? (
            <div className="py-12 text-center text-sm text-neutral-500">Memuat sertifikat...</div>
          ) : achievements.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500 dark:border-neutral-800">
              Belum ada sertifikat. Klik "Tambah Sertifikat" di atas.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.id || item.slug}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="space-y-3">
                    {item.image && (
                      <div className="h-36 w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div>
                      <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-500">
                        {item.issuing_organization || "Penerbit"}
                      </span>
                      <h4 className="mt-1 text-base font-bold text-neutral-900 dark:text-neutral-100">{item.name}</h4>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                      <FiCalendar size={13} />
                      <span>{item.issue_date || "N/A"}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 dark:border-neutral-800">
                    {item.credential_url ? (
                      <a href={item.credential_url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-amber-500 hover:underline">
                        <FiExternalLink size={13} /> Kredensial
                      </a>
                    ) : (
                      <span className="text-xs text-neutral-400">Tanpa Link</span>
                    )}

                    <button
                      onClick={() => handleDeleteAch(item.id, item.name)}
                      className="flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-500 hover:bg-red-500/20"
                    >
                      <FiTrash2 size={13} /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Add Project */}
      {showProjectModal && (
        <div className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center bg-black/75 p-4 pt-10 sm:pt-4 backdrop-blur-sm overflow-y-auto">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-4 flex items-center justify-between border-b pb-3 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Tambah Proyek Baru</h3>
              <button onClick={() => setShowProjectModal(false)} className="text-neutral-400">✕</button>
            </div>
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold">Judul Proyek *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Contoh: Kasir Modern"
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold">Slug URL *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.slug}
                    onChange={(e) => setProjectForm({ ...projectForm, slug: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold">Deskripsi Singkat</label>
                <textarea
                  rows={2}
                  value={projectForm.description_id}
                  onChange={(e) => setProjectForm({ ...projectForm, description_id: e.target.value, description_en: e.target.value })}
                  placeholder="Ringkasan proyek..."
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold">Tech Stacks (Pisahkan dengan koma)</label>
                <input
                  type="text"
                  value={projectForm.stacksText}
                  onChange={(e) => setProjectForm({ ...projectForm, stacksText: e.target.value })}
                  placeholder="React.js, Next.js, TailwindCSS"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>

              {/* Upload Gambar Proyek */}
              <div>
                <label className="mb-1 block text-xs font-semibold">Gambar Sampul Proyek</label>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500/10 px-4 py-2.5 text-xs font-bold text-amber-500 border border-amber-500/30 hover:bg-amber-500/20 transition">
                    <FiUpload size={15} />
                    <span>{uploadingImage ? "Mengunggah Gambar..." : "Upload File dari Device"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "project")}
                      className="hidden"
                    />
                  </label>

                  <span className="text-xs text-neutral-400 text-center sm:text-left">atau masukan URL:</span>

                  <input
                    type="text"
                    value={projectForm.image}
                    onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                    placeholder="https://... atau /uploads/..."
                    className="flex-1 rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>

                {projectForm.image && (
                  <div className="mt-2.5 flex items-center gap-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
                    <div className="h-16 w-24 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <img src={projectForm.image} alt="Preview" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                      <FiCheckCircle size={14} /> Gambar Terpasang
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold">URL Demo (Opsional)</label>
                  <input
                    type="url"
                    value={projectForm.link_demo}
                    onChange={(e) => setProjectForm({ ...projectForm, link_demo: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold">URL GitHub (Opsional)</label>
                  <input
                    type="url"
                    value={projectForm.link_github}
                    onChange={(e) => setProjectForm({ ...projectForm, link_github: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setShowProjectModal(false)} className="rounded-xl border px-4 py-2 text-sm font-semibold">Batal</button>
                <button type="submit" disabled={submitting || uploadingImage} className="rounded-xl bg-amber-500 px-5 py-2 text-sm font-bold text-neutral-950 hover:bg-amber-400 disabled:opacity-50">
                  {submitting ? "Menyimpan..." : "Simpan Proyek"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Add Achievement / Certificate */}
      {showAchModal && (
        <div className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center bg-black/75 p-4 pt-10 sm:pt-4 backdrop-blur-sm overflow-y-auto">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-4 flex items-center justify-between border-b pb-3 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Tambah Sertifikat Baru</h3>
              <button onClick={() => setShowAchModal(false)} className="text-neutral-400">✕</button>
            </div>
            <form onSubmit={handleAchSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold">Nama Sertifikat / Kursus *</label>
                <input
                  type="text"
                  required
                  value={achForm.name}
                  onChange={(e) => setAchForm({ ...achForm, name: e.target.value })}
                  placeholder="Contoh: Belajar Dasar Cloud dan AI di AWS"
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold">Organisasi Penerbit *</label>
                  <input
                    type="text"
                    required
                    value={achForm.issuing_organization}
                    onChange={(e) => setAchForm({ ...achForm, issuing_organization: e.target.value })}
                    placeholder="Dicoding / Google / Coursera"
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold">Tanggal Terbit</label>
                  <input
                    type="date"
                    value={achForm.issue_date}
                    onChange={(e) => setAchForm({ ...achForm, issue_date: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>
              </div>

              {/* Upload Gambar Sertifikat */}
              <div>
                <label className="mb-1 block text-xs font-semibold">Gambar Sertifikat / Badge</label>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500/10 px-4 py-2.5 text-xs font-bold text-amber-500 border border-amber-500/30 hover:bg-amber-500/20 transition">
                    <FiUpload size={15} />
                    <span>{uploadingImage ? "Mengunggah Gambar..." : "Upload File dari Device"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "achievement")}
                      className="hidden"
                    />
                  </label>

                  <span className="text-xs text-neutral-400 text-center sm:text-left">atau masukan URL:</span>

                  <input
                    type="text"
                    value={achForm.image}
                    onChange={(e) => setAchForm({ ...achForm, image: e.target.value })}
                    placeholder="https://... atau /uploads/..."
                    className="flex-1 rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                </div>

                {achForm.image && (
                  <div className="mt-2.5 flex items-center gap-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
                    <div className="h-16 w-24 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <img src={achForm.image} alt="Preview" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                      <FiCheckCircle size={14} /> Gambar Terpasang
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold">URL Kredensial / Verifikasi (Opsional)</label>
                <input
                  type="url"
                  value={achForm.credential_url}
                  onChange={(e) => setAchForm({ ...achForm, credential_url: e.target.value })}
                  placeholder="https://coursera.org/verify/..."
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-amber-500 dark:border-neutral-700 dark:bg-neutral-800"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setShowAchModal(false)} className="rounded-xl border px-4 py-2 text-sm font-semibold">Batal</button>
                <button type="submit" disabled={submitting || uploadingImage} className="rounded-xl bg-amber-500 px-5 py-2 text-sm font-bold text-neutral-950 hover:bg-amber-400 disabled:opacity-50">
                  {submitting ? "Menyimpan..." : "Simpan Sertifikat"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}
