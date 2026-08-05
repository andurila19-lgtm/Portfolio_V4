import fs from "fs";
import path from "path";
import { createClient } from "@/common/utils/server";

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

export const getCustomAchievements = (): any[] => {
  try {
    const tmpPath = path.join("/tmp", "custom_achievements.json");
    if (fs.existsSync(tmpPath)) {
      return JSON.parse(fs.readFileSync(tmpPath, "utf-8"));
    }
    const customPath = path.join(process.cwd(), "contents", "custom_achievements.json");
    if (fs.existsSync(customPath)) {
      const data = fs.readFileSync(customPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading custom_achievements.json:", err);
  }
  return [];
};

export const getLocalAchievements = (): any[] => {
  try {
    const localPath = path.join(process.cwd(), "contents", "ach.json");
    if (fs.existsSync(localPath)) {
      const data = fs.readFileSync(localPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading ach.json:", err);
  }
  return [];
};

export const getAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps = {}) => {
  const customData = getCustomAchievements();
  const localData = getLocalAchievements();
  
  let dbData: any[] = [];
  try {
    const supabase = createClient();
    let query = supabase.from("achievements").select();

    if (category) query = query.eq("category", category);
    if (search) query = query.ilike("name", `%${search}%`);

    const { data, error } = await query;
    if (!error && data) {
      dbData = data.map((item) => {
        const { data: imageData } = supabase.storage
          .from("achievements")
          .getPublicUrl(`${item.slug}.webp`);

        return {
          ...item,
          image: imageData?.publicUrl || "",
        };
      });
    }
  } catch (error: any) {
    console.error("Supabase fetch achievements error:", error?.message || error);
  }

  const customIds = new Set(customData.map((a) => a.slug || a.id));
  const dbIds = new Set(dbData.map((a) => a.slug || a.id));

  const allAchievements = [
    ...customData,
    ...dbData.filter((a) => !customIds.has(a.slug || a.id)),
    ...localData.filter((a) => !customIds.has(a.slug || a.id) && !dbIds.has(a.slug || a.id)),
  ];

  if (category) {
    return allAchievements.filter((a) => !a.category || a.category === category);
  }

  if (search) {
    const s = search.toLowerCase();
    return allAchievements.filter((a) => a.name?.toLowerCase().includes(s) || a.issuing_organization?.toLowerCase().includes(s));
  }

  return allAchievements;
};

export const getAchivementTypes = async () => {
  return ["Certificate", "Course", "Award", "Badge"];
};

export const getAchivementCategories = async () => {
  return ["All", "Cloud & AI", "Web Development", "Software Engineering"];
};
