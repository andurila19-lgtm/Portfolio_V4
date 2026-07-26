import { createClient } from "@/common/utils/server";

export const LOCAL_PROJECTS = [
  {
    id: 1,
    title: "Hwarin Skin",
    slug: "HwarinSkin",
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

    return {
      ...item,
      stacks,
      description,
      image: imageData?.publicUrl || "",
    };
  });
};

export const getProjectsDataBySlug = async (slug: string, locale?: string) => {
  const allProjects = await getProjectsData(locale);
  return allProjects.find((p) => p.slug === slug) || null;
};
