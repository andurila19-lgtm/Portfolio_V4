import { createClient } from "@/common/utils/server";

export const LOCAL_PROJECTS = [
  {
    id: 1,
    title: "Hwarin Skin",
    slug: "HwarinSkin",
    category_id: "E-Commerce & Beauty",
    category_en: "E-Commerce & Beauty",
    role_id: "Full-Stack Developer",
    role_en: "Full-Stack Developer",
    problem_id: "Proses pemesanan skincare sebelumnya lambat dan tidak responsif di perangkat seluler.",
    problem_en: "Legacy skincare ordering system was slow and unoptimized for mobile devices.",
    solution_id: "Membangun katalog web Next.js cepat dengan integrasi instan ke checkout WhatsApp & database Supabase.",
    solution_en: "Engineered a fast Next.js catalog with direct WhatsApp checkout & Supabase database integration.",
    result_id: "Meningkatkan kecepatan loading hingga 95+ skor Lighthouse dan mempermudah konversi pembeli.",
    result_en: "Boosted page loading speed to 95+ Lighthouse score and increased buyer conversions.",
    description_id: "Hwarin Skin adalah platform e-commerce dan katalog produk perawatan kulit yang aman, responsif, dan terintegrasi checkout WhatsApp.",
    description_en: "Hwarin Skin is a secure, responsive e-commerce and catalog platform for skincare products, integrated with WhatsApp checkouts.",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSql", "Supabase", "React.js"],
    link_demo: "https://hwarinskin.com",
    link_github: null,
    is_show: true,
    is_featured: false,
  },
  {
    id: 2,
    title: "Kasir Modern (KasirPro)",
    slug: "kasir-modern",
    category_id: "POS & Business Application",
    category_en: "POS & Business Application",
    role_id: "Lead Full-Stack Developer",
    role_en: "Lead Full-Stack Developer",
    problem_id: "Pencatatan kasir manual rentan kesalahan stok dan laporan penjualan harian yang lambat.",
    problem_en: "Manual cashiering caused inventory discrepancies and delayed daily sales analytics.",
    solution_id: "Mengembangkan aplikasi POS web real-time dengan manajemen stok otomatis, multi-role auth, dan visualisasi transaksi.",
    solution_en: "Created a real-time POS app featuring automated inventory tracking, multi-role auth, and transaction analytics.",
    result_id: "Memotong waktu pencatatan transaksi hingga 60% dan memberikan visibilitas finansial real-time.",
    result_en: "Cut transaction processing time by 60% and provided real-time financial transparency.",
    description_id: "Sistem Kasir (Point of Sale) modern terintegrasi dengan suite manajemen administrasi, inventaris, dan laporan transaksi real-time.",
    description_en: "A modern Point of Sale (POS) application integrated with administrative suite, inventory management, and real-time transaction reports.",
    stacks: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "PostgreSql"],
    link_demo: "https://kasir-modern.anduril.web.id",
    link_github: null,
    is_show: true,
    is_featured: true,
  },
  {
    id: 3,
    title: "Mommy Skincare",
    slug: "mommy-skincare",
    category_id: "Healthcare & Skincare Catalog",
    category_en: "Healthcare & Skincare Catalog",
    role_id: "Frontend & UI Developer",
    role_en: "Frontend & UI Developer",
    problem_id: "Pelanggan kesulitan melihat daftar layanan perawatan dan jadwal reservasi klinik secara online.",
    problem_en: "Customers found it hard to view treatment catalogs and clinic appointment options online.",
    solution_id: "Merancang antarmuka katalog skincare yang bersih, responsif, dan mudah digelari navigasinya di smartphone.",
    solution_en: "Designed a clean, responsive skincare catalog UI tailored for smooth mobile navigation.",
    result_id: "Meningkatkan durasi kunjungan pengguna dan kemudahan booking layanan perawatan.",
    result_en: "Increased average user session duration and improved treatment booking convenience.",
    description_id: "Platform katalog produk dan layanan perawatan kulit (skincare) yang aman, elegan, dan responsif untuk kebutuhan perawatan kecantikan wanita.",
    description_en: "An elegant and responsive skincare product catalog and service platform tailored for women's beauty care needs.",
    stacks: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    link_demo: "https://mommy-skincare.anduril.web.id",
    link_github: null,
    is_show: true,
    is_featured: false,
  },
  {
    id: 4,
    title: "SIM Akademik",
    slug: "sim-akademik",
    category_id: "EdTech & University System",
    category_en: "EdTech & University System",
    role_id: "Full-Stack Architect",
    role_en: "Full-Stack Architect",
    problem_id: "Sistem informasi akademik lama mengalami bottleneck saat periode pengisian KRS massal.",
    problem_en: "Legacy academic portal experienced bottlenecks during peak enrollment and grading periods.",
    solution_id: "Membangun ulang arsitektur SIM menggunakan Next.js App Router, Prisma ORM, dan PostgreSQL terstruktur.",
    solution_en: "Re-architected the system using Next.js App Router, Prisma ORM, and optimized PostgreSQL queries.",
    result_id: "Aplikasi mampu menangani beban trafik tinggi secara simultan tanpa downtime.",
    result_en: "Handled high concurrent user loads smoothly without system downtime.",
    description_id: "Sistem Informasi Manajemen Akademik perguruan tinggi berbasis multi-role untuk Super Admin, Dosen, Staff Akademik, dan Keuangan.",
    description_en: "Higher education Academic Management Information System supporting multi-role access for Super Admin, Lecturer, Academic Staff, and Finance.",
    stacks: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "PostgreSql", "Prisma"],
    link_demo: "https://sim.anduril.web.id",
    link_github: null,
    is_show: true,
    is_featured: true,
  },
];

export const getProjectsData = async (locale?: string) => {
  const supabase = createClient();
  let dbData: any[] = [];

  try {
    const { data, error } = await supabase.from("projects").select();
    if (!error && data) {
      dbData = data;
    }
  } catch (error: any) {
    console.error("Supabase fetch projects error:", error?.message || error);
  }

  const dbSlugs = new Set(dbData.map((p) => p.slug));
  const mergedProjects = [
    ...dbData,
    ...LOCAL_PROJECTS.filter((lp) => !dbSlugs.has(lp.slug)),
  ];

  return mergedProjects.map((item) => {
    const { data: imageData } = supabase.storage
      .from("projects")
      .getPublicUrl(`${item.slug}.webp`);

    const localMatch = LOCAL_PROJECTS.find((lp) => lp.slug === item.slug);
    const stacks = item.stacks && item.stacks.length > 0
      ? item.stacks
      : localMatch?.stacks || [];

    const description = localMatch
      ? (locale === "id" ? localMatch.description_id : localMatch.description_en)
      : item.description;

    const category = localMatch
      ? (locale === "id" ? localMatch.category_id : localMatch.category_en)
      : item.category || "Web Application";

    const role = localMatch
      ? (locale === "id" ? localMatch.role_id : localMatch.role_en)
      : item.role || "Full-Stack Developer";

    const problem = localMatch
      ? (locale === "id" ? localMatch.problem_id : localMatch.problem_en)
      : item.problem;

    const solution = localMatch
      ? (locale === "id" ? localMatch.solution_id : localMatch.solution_en)
      : item.solution;

    const result = localMatch
      ? (locale === "id" ? localMatch.result_id : localMatch.result_en)
      : item.result;

    return {
      ...item,
      stacks,
      description,
      category,
      role,
      problem,
      solution,
      result,
      image: imageData?.publicUrl || "",
    };
  });
};

export const getProjectsDataBySlug = async (slug: string, locale?: string) => {
  const allProjects = await getProjectsData(locale);
  return allProjects.find((p) => p.slug === slug) || null;
};
