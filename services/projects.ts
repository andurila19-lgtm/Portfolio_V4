import fs from "fs";
import path from "path";
import { createClient } from "@/common/utils/server";
import { LOCAL_PROJECTS } from "@/common/constants/projects";

export { LOCAL_PROJECTS };

export const getCustomProjects = (): any[] => {
  try {
    const tmpPath = path.join("/tmp", "custom_projects.json");
    if (fs.existsSync(tmpPath)) {
      return JSON.parse(fs.readFileSync(tmpPath, "utf-8"));
    }
    const filePath = path.join(process.cwd(), "contents", "custom_projects.json");
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading custom_projects.json:", err);
  }
  return [];
};

export const getProjectsData = async (locale?: string) => {
  const customProjects = getCustomProjects();
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

  const customSlugs = new Set(customProjects.map((p) => p.slug));
  const dbSlugs = new Set(dbData.map((p) => p.slug));

  const mergedProjects = [
    ...customProjects,
    ...dbData.filter((p) => !customSlugs.has(p.slug)),
    ...LOCAL_PROJECTS.filter((lp) => !customSlugs.has(lp.slug) && !dbSlugs.has(lp.slug)),
  ];

  return mergedProjects.map((item) => {
    const { data: imageData } = supabase.storage
      .from("projects")
      .getPublicUrl(`${item.slug}.webp`);

    const localMatch = LOCAL_PROJECTS.find((lp) => lp.slug === item.slug);
    const stacks = item.stacks && item.stacks.length > 0
      ? item.stacks
      : localMatch?.stacks || [];

    const description = item.description || (localMatch
      ? (locale === "id" ? localMatch.description_id : localMatch.description_en)
      : item.description);

    const category = item.category || (localMatch
      ? (locale === "id" ? localMatch.category_id : localMatch.category_en)
      : item.category || "Web Application");

    const role = item.role || (localMatch
      ? (locale === "id" ? localMatch.role_id : localMatch.role_en)
      : item.role || "Full-Stack Developer");

    const problem = item.problem || (localMatch
      ? (locale === "id" ? localMatch.problem_id : localMatch.problem_en)
      : item.problem);

    const solution = item.solution || (localMatch
      ? (locale === "id" ? localMatch.solution_id : localMatch.solution_en)
      : item.solution);

    const result = item.result || (localMatch
      ? (locale === "id" ? localMatch.result_id : localMatch.result_en)
      : item.result);

    return {
      ...item,
      stacks,
      description,
      category,
      role,
      problem,
      solution,
      result,
      image:
        item.image ||
        (localMatch?.images && localMatch.images.length > 0 ? localMatch.images[0] : "") ||
        (item.images && item.images.length > 0 ? item.images[0] : "") ||
        imageData?.publicUrl ||
        "",
    };
  });
};

export const getProjectsDataBySlug = async (slug: string, locale?: string) => {
  const allProjects = await getProjectsData(locale);
  return allProjects.find((p) => p.slug === slug) || null;
};
