import { createClient } from "@/common/utils/server";

export const getProjectsData = async (locale?: string) => {
  const supabase = createClient();

  let { data, error } = await supabase.from("projects").select();

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data.map((item) => {
    const { data: imageData } = supabase.storage
      .from("projects")
      .getPublicUrl(`${item.slug}.webp`);

    const stacks = item.stacks && item.stacks.length > 0
      ? item.stacks
      : item.slug === "HwarinSkin"
        ? ["Next.js", "TypeScript", "TailwindCSS", "PostgreSql", "Supabase", "React.js"]
        : [];

    const description = item.slug === "HwarinSkin"
      ? (locale === "id"
          ? "Hwarin Skin adalah platform e-commerce dan katalog produk perawatan kulit yang aman, responsif, dan terintegrasi checkout WhatsApp."
          : "Hwarin Skin is a secure, responsive e-commerce and catalog platform for skincare products, integrated with WhatsApp checkouts.")
      : item.description;

    return {
      ...item,
      stacks,
      description,
      image: imageData.publicUrl,
    };
  });
};

export const getProjectsDataBySlug = async (slug: string, locale?: string) => {
  const supabase = createClient();

  let { data, error } = await supabase
    .from("projects")
    .select()
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);
  if (!data) return null;

  const { data: imageData } = supabase.storage
    .from("projects")
    .getPublicUrl(`${data.slug}.webp`);

  const stacks = data.stacks && data.stacks.length > 0
    ? data.stacks
    : data.slug === "HwarinSkin"
      ? ["Next.js", "TypeScript", "TailwindCSS", "PostgreSql", "Supabase", "React.js"]
      : [];

  const description = data.slug === "HwarinSkin"
    ? (locale === "id"
        ? "Hwarin Skin adalah platform e-commerce dan katalog produk perawatan kulit yang aman, responsif, dan terintegrasi checkout WhatsApp."
        : "Hwarin Skin is a secure, responsive e-commerce and catalog platform for skincare products, integrated with WhatsApp checkouts.")
    : data.description;

  return {
    ...data,
    stacks,
    description,
    image: imageData.publicUrl,
  };
};
