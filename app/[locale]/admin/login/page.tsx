"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { FiLock, FiKey, FiArrowRight } from "react-icons/fi";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Password salah");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Gagal login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container data-aos="fade-up">
      <PageHeading title="Admin CMS Login" description="Masuk ke portal administrasi portofolio Anda." />

      <div className="mx-auto max-w-md space-y-6 pt-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <FiLock size={28} />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Portal Akses Admin</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Masukkan kata sandi admin untuk mengelola portofolio.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Kata Sandi Admin
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                  <FiKey size={16} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  required
                  className="w-full rounded-xl border border-neutral-300 bg-neutral-50 py-2.5 pl-10 pr-4 text-sm outline-none transition duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-500/10 p-3 text-xs font-medium text-red-500 border border-red-500/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-neutral-950 shadow-md transition duration-200 hover:bg-amber-400 disabled:opacity-50"
            >
              <span>{loading ? "Memverifikasi..." : "Masuk ke Dashboard"}</span>
              <FiArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-neutral-400">
            Default Password: <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-amber-600 dark:bg-neutral-800 dark:text-amber-400">admin123</code> (bisa diubah di <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">.env.local</code>)
          </div>
        </div>
      </div>
    </Container>
  );
}
