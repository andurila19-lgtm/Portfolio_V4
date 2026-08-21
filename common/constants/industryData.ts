export interface IndustryItem {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  solutions: string[];
  caseStudyRef: { title: string; slug: string };
  faqs: { question: string; answer: string }[];
}

const RAW_INDUSTRIES_DATA = [
  {
    slug: "ecommerce-retail",
    caseStudyRef: { title: "Mommy Skincare Product Catalog", slug: "mommy-skincare" },
    en: {
      title: "E-Commerce & Skincare Retail",
      tagline: "High-converting product catalogs, mobile checkout, and WhatsApp order automation.",
      overview:
        "We design ultra-fast e-commerce platforms tailored for beauty brands, skincare lines, and retail businesses. Featuring optimized product galleries, dynamic cart rules, and WhatsApp checkout.",
      solutions: [
        "Sub-second catalog rendering with instant search & filter",
        "Direct WhatsApp checkout pre-filled with items and pricing",
        "Supabase real-time inventory management",
        "Lighthouse 95+ performance on 3G/4G mobile networks",
      ],
      faqs: [
        {
          question: "How does the WhatsApp checkout work?",
          answer:
            "When a customer selects products and clicks checkout, the site formats a clean, pre-filled message with their ordered items and total price, opening WhatsApp directly to your store's admin number.",
        },
      ],
    },
    id: {
      title: "E-Commerce & Retail Skincare",
      tagline: "Katalog produk berkonversi tinggi, checkout mobile, dan otomasi pemesanan via WhatsApp.",
      overview:
        "Kami merancang platform e-commerce ultra-cepat yang dirancang khusus untuk brand kecantikan, skincare, dan bisnis retail. Dilengkapi galeri produk teroptimasi, aturan keranjang dinamis, dan checkout langsung via WhatsApp.",
      solutions: [
        "Katalog dimuat dalam sub-detik dengan fitur pencarian & filter instan",
        "Checkout langsung via WhatsApp dengan pesan terisi otomatis (item & harga)",
        "Manajemen stok inventaris real-time menggunakan Supabase",
        "Performa Lighthouse 95+ bahkan di jaringan seluler 3G/4G",
      ],
      faqs: [
        {
          question: "Bagaimana cara kerja checkout via WhatsApp?",
          answer:
            "Saat pelanggan memilih produk dan klik checkout, website akan membuat pesan terformat rapi berisi daftar pesanan dan total harga, lalu membuka WhatsApp langsung ke nomor admin toko Anda.",
        },
      ],
    },
  },
  {
    slug: "pos-commercial",
    caseStudyRef: { title: "EraStack Offline-First POS", slug: "erastack" },
    en: {
      title: "POS & Commercial Enterprise",
      tagline: "Point of Sale cashier systems, inventory control, and multi-branch analytics.",
      overview:
        "Modernize cashier counters and inventory management with custom web-based POS software. Real-time sales reporting, stock tracking, and multi-role employee access.",
      solutions: [
        "Cut cashier transaction speeds by up to 60%",
        "Automated inventory stock deductions on checkout",
        "Role-based access control for Admins, Managers, and Cashiers",
        "PDF/Excel financial reports and real-time revenue graphs",
      ],
      faqs: [
        {
          question: "Can we connect barcode scanners and receipt printers?",
          answer:
            "Yes! Modern web apps connect natively with USB/Bluetooth barcode scanners and thermal printers.",
        },
      ],
    },
    id: {
      title: "Sistem Kasir (POS) & Bisnis Komersial",
      tagline: "Sistem kasir Point of Sale, kontrol inventaris, dan analisis multi-cabang.",
      overview:
        "Modernisasi konter kasir dan manajemen inventaris dengan software POS berbasis web kustom. Laporan penjualan real-time, pelacakan stok, dan akses multi-peran karyawan.",
      solutions: [
        "Percepat proses transaksi kasir hingga 60% lebih cepat",
        "Pengurangan stok inventaris otomatis saat checkout",
        "Kontrol akses berbasis peran untuk Admin, Manajer, dan Kasir",
        "Laporan keuangan PDF/Excel dan grafik pendapatan real-time",
      ],
      faqs: [
        {
          question: "Apakah bisa menghubungkan barcode scanner dan printer struk?",
          answer:
            "Ya! Aplikasi web modern dapat terhubung secara langsung dengan barcode scanner USB/Bluetooth dan printer thermal.",
        },
      ],
    },
  },
  {
    slug: "edtech-academic",
    caseStudyRef: { title: "Karya Tim Architecture & Contractor", slug: "karyatim" },
    en: {
      title: "Contractor & Architecture",
      tagline: "High-caliber contractor portfolios and commercial architectural showcases.",
      overview:
        "Digital portfolios for architectural design, building contractors, and structural engineering firms.",
      solutions: [
        "Interactive completed projects portfolio showcase",
        "Direct RFQ quotation and proposal submission form",
        "High-performance responsive design across devices",
        "Optimized asset loading for high-resolution photography",
      ],
      faqs: [
        {
          question: "How are project portfolios organized?",
          answer:
            "Projects are categorized by commercial, residential, and infrastructure disciplines with interactive galleries.",
        },
      ],
    },
    id: {
      title: "Kontraktor & Arsitektur Bangunan",
      tagline: "Portofolio korporat kontraktor dan showcase arsitektur komersial.",
      overview:
        "Platform digital portofolio untuk konsultan arsitektur, kontraktor bangunan, dan jasa rekayasa struktural.",
      solutions: [
        "Showcase portofolio proyek selesai interaktif",
        "Formulir pengajuan penawaran tender dan RAB langsung",
        "Desain responsif berkecepatan tinggi di semua perangkat",
        "Optimasi aset untuk galeri foto resolusi tinggi",
      ],
      faqs: [
        {
          question: "Bagaimana portofolio proyek dikelompokkan?",
          answer:
            "Proyek dikelompokkan berdasarkan bangunan komersial, residensial, dan renovasi dengan galeri interaktif.",
        },
      ],
    },
  },
  {
    slug: "saas-b2b",
    caseStudyRef: { title: "EraStack POS Architecture", slug: "erastack" },
    en: {
      title: "SaaS & B2B Software",
      tagline: "Subscription software platforms, multi-tenant databases, and API engines.",
      overview:
        "End-to-end engineering for SaaS startups and B2B software vendors. Built for user retention, security compliance, and seamless subscription billing.",
      solutions: [
        "Multi-tenant data isolation and security schemas",
        "Payment gateway integration (Stripe / Midtrans / Xendit)",
        "Developer API documentation & webhooks",
        "User role workspace invitations",
      ],
      faqs: [
        {
          question: "Can you help launch an MVP in under 4 weeks?",
          answer:
            "Yes, we build modular Next.js MVPs focused on core user features so you can validate your market quickly.",
        },
      ],
    },
    id: {
      title: "Produk SaaS & Software B2B",
      tagline: "Platform software berlangganan, database multi-tenant, dan mesin API.",
      overview:
        "Rekayasa menyeluruh (end-to-end) untuk startup SaaS dan vendor software B2B. Dirancang untuk retensi pengguna, kepatuhan keamanan, dan sistem pembayaran langganan.",
      solutions: [
        "Isolasi data multi-tenant dan skema keamanan terstruktur",
        "Integrasi payment gateway (Stripe / Midtrans / Xendit)",
        "Dokumentasi API untuk developer & webhooks",
        "Undangan workspace berbasis peran pengguna",
      ],
      faqs: [
        {
          question: "Apakah bisa membantu meluncurkan MVP dalam waktu kurang dari 4 minggu?",
          answer:
            "Ya, kami membangun MVP Next.js modular yang fokus pada fitur inti pengguna agar Anda bisa memvalidasi pasar dengan cepat.",
        },
      ],
    },
  },
];

export const getIndustriesList = (locale: string = "en"): IndustryItem[] => {
  const isId = locale === "id";
  return RAW_INDUSTRIES_DATA.map((item) => {
    const loc = isId ? item.id : item.en;
    return {
      slug: item.slug,
      caseStudyRef: item.caseStudyRef,
      title: loc.title,
      tagline: loc.tagline,
      overview: loc.overview,
      solutions: loc.solutions,
      faqs: loc.faqs,
    };
  });
};

export const getIndustryBySlug = (slug: string, locale: string = "en"): IndustryItem | undefined => {
  const industries = getIndustriesList(locale);
  return industries.find((ind) => ind.slug === slug);
};

export const INDUSTRIES_LIST = getIndustriesList("en");
