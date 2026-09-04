import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    position: "Founder / Full-Stack Developer",
    company: "REAKSY",
    logo: "/images/careers/griyo.jpg",
    location: "Madiun, Indonesia 🇮🇩",
    location_type: "Hybrid",
    type: "Self-Employed",
    start_date: "2025-12",
    end_date: null,
    industry: "Software & Digital Solutions",
    link: "https://erastack-rho.vercel.app/",
    responsibilities: [
      "Membangun dan mengembangkan website serta aplikasi bisnis menggunakan Next.js, React, TypeScript, Tailwind CSS, Laravel, Node.js, PostgreSQL, dan Supabase dari tahap perancangan hingga deployment.",
      "Mengembangkan berbagai solusi digital seperti company profile, katalog produk, booking system, POS, inventory management, dashboard admin, dan aplikasi SaaS yang disesuaikan dengan kebutuhan bisnis.",
      "Melakukan optimasi performance, responsive design, SEO, struktur database, API, authentication, dan keamanan aplikasi untuk perangkat desktop maupun mobile.",
      "Mengembangkan sistem EraStack POS dengan fitur POS, inventory, role-based access control (RBAC), dashboard, serta dukungan aplikasi Android dan desktop.",
      "Membuat berbagai prototype dan website untuk lead generation dan digitalisasi bisnis (manufaktur, interior, salon, travel, retail).",
      "Melakukan analisis bisnis dan kebutuhan calon klien untuk mengidentifikasi masalah digital yang dapat diselesaikan melalui solusi custom.",
    ],
    lessons_learned: [
      "Menguasai perancangan sistem enterprise skala penuh dari arsitektur database, multi-role auth, hingga pipeline CI/CD produksi.",
      "Menyelaraskan analisis kebutuhan bisnis klien menjadi arsitektur perangkat lunak yang cepat dan scalable.",
    ],
    impact: [
      "Berhasil merilis platform EraStack POS dengan keandalan operasional dan dukungan multi-platform.",
      "Meningkatkan konversi dan visibilitas digital untuk berbagai sektor klien.",
    ],
    isShow: true,
  },
  {
    position: "Full-Stack Developer",
    company: "FREELANCE / PROJECT-BASED",
    logo: "/images/careers/sinarmas.png",
    location: "Madiun, Indonesia 🇮🇩",
    location_type: "Remote",
    type: "Freelance",
    start_date: "2025-01",
    end_date: null,
    industry: "Information Technology & Services",
    link: "https://anduril.web.id",
    responsibilities: [
      "Mengembangkan aplikasi web end-to-end mulai dari UI/UX, frontend, backend, database, API, authentication hingga deployment.",
      "Membangun sistem menggunakan arsitektur modern berbasis Next.js App Router, REST API, Laravel, NestJS, PostgreSQL, Supabase, dan Firebase.",
      "Mengembangkan sistem manajemen seperti booking, POS, inventory, dashboard, dan content management dengan fokus pada skalabilitas dan maintainability.",
      "Melakukan debugging, maintenance, performance optimization, serta deployment menggunakan platform Vercel, Netlify, Railway, dan Cloudflare.",
      "Mengintegrasikan berbagai layanan pihak ketiga dan API untuk meningkatkan fungsionalitas aplikasi.",
    ],
    lessons_learned: [
      "Praktik terbaik dalam perancangan arsitektur Next.js App Router terkini dengan caching layer dan integrasi cloud services.",
      "Peningkatan kecepatan iterasi pengembangan modular dan maintainability kode tingkat tinggi.",
    ],
    impact: [
      "Menyelesaikan berbagai proyek web tepat waktu dengan skor Lighthouse performa rata-rata di atas 95+.",
      "Mengurangi error integrasi data pihak ketiga dengan validasi schema ketat dan REST API terstruktur.",
    ],
    isShow: true,
  },
];
