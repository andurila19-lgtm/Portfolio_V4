export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  iconName: string;
  turnaround: string;
  category: string;
  overview: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  techStack: string[];
  comparison: {
    title: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  faqs: { question: string; answer: string }[];
  whatsappMsg: string;
}

const RAW_SERVICES_DATA = [
  {
    slug: "website-development",
    iconName: "FiCode",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "PostgreSql", "Supabase"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Custom Website Development.",
    en: {
      title: "Website Development",
      tagline: "Custom high-performance web applications built for scale and conversions.",
      summary:
        "Anduril provides full-cycle custom Website Development using Next.js, React, and TypeScript. We engineer ultra-fast, mobile-first, secure web applications tailored to your exact business workflow and growth objectives.",
      turnaround: "5 - 14 Days",
      category: "Engineering & Web Applications",
      overview:
        "Our website development service replaces slow, rigid templates with custom-tailored web architectures built on Next.js App Router, React, and PostgreSQL/Supabase backend logic. Whether you need a modern business portal, catalog, or scalable web app, we deliver pixel-perfect designs with sub-second page loads and maximum conversion rates.",
      benefits: [
        "Sub-second page load times with 95+ Lighthouse performance scores",
        "Full responsive design matching mobile, tablet, and desktop viewports",
        "OWASP-compliant security measures with encrypted API endpoints",
        "Built-in Search Engine (SEO) & Answer Engine Optimization (AEO)",
      ],
      features: [
        {
          title: "Custom Component Architecture",
          desc: "Modular, re-usable React/TypeScript components built without bloated dependencies.",
        },
        {
          title: "Database Integration",
          desc: "Structured data modeling with PostgreSQL, Supabase, or Firebase for fast real-time sync.",
        },
        {
          title: "Conversion-Driven UI/UX",
          desc: "User journeys engineered specifically to turn site visitors into paying customers or leads.",
        },
        {
          title: "Global CDN & SSL Deployment",
          desc: "Automated deployment pipelines hosted on Edge infrastructure with free SSL certificates.",
        },
      ],
      comparison: {
        title: "Custom Next.js Web App vs Traditional WordPress",
        headers: ["Feature / Metric", "Anduril Next.js Stack", "Traditional WordPress"],
        rows: [
          ["Page Load Speed", "Ultra-fast (< 1s, LCP 95+)", "Slow to moderate (2s - 5s+)"],
          ["Security", "Stateless / Zero DB surface exposure", "Vulnerable to plugin exploits"],
          ["Customization", "100% tailor-made to business logic", "Constrained by theme templates"],
          ["SEO & Core Web Vitals", "Native SSG/SSR optimization", "Requires heavy plugin overhead"],
        ],
      },
      faqs: [
        {
          question: "What technologies do you use for website development?",
          answer:
            "We primarily utilize Next.js, React, TypeScript, TailwindCSS, and PostgreSQL/Supabase to deliver fast, secure, and modern web applications.",
        },
        {
          question: "Will my website be mobile friendly?",
          answer:
            "Yes, 100% of our sites are engineered mobile-first and tested rigorously across iOS and Android devices.",
        },
        {
          question: "Can I manage content after the website is launched?",
          answer:
            "Yes! We integrate lightweight CMS tools (Sanity, Supabase, or Custom Admin Dashboards) so your team can easily update content without code.",
        },
      ],
    },
    id: {
      title: "Pengembangan Aplikasi Web (Website Development)",
      tagline: "Aplikasi web kustom berkecepatan tinggi yang dirancang untuk skala bisnis dan konversi penjualan.",
      summary:
        "Anduril menyediakan layanan Pembuatan Website Kustom full-cycle menggunakan Next.js, React, dan TypeScript. Kami merancang aplikasi web yang sangat cepat, responsif di HP, dan aman sesuai alur kerja bisnis Anda.",
      turnaround: "5 - 14 Hari Kerja",
      category: "Rekayasa Web & Aplikasi",
      overview:
        "Layanan pembuatan website kami menggantikan template kaku dengan arsitektur web modern berbasis Next.js App Router, React, dan database PostgreSQL/Supabase. Baik Anda membutuhkan portal bisnis, katalog, atau aplikasi web kustom, kami memberikan desain presisi dengan kecepatan muat sub-detik.",
      benefits: [
        "Waktu muat halaman sub-detik dengan skor performa Lighthouse 95+",
        "Desain 100% responsif sempurna di perangkat seluler, tablet, dan desktop",
        "Keamanan standar OWASP dengan proteksi endpoint API terenkripsi",
        "Optimasi Mesin Pencari (SEO) & Mesin Jawaban AI (AEO) bawaan",
      ],
      features: [
        {
          title: "Arsitektur Komponen Kustom",
          desc: "Komponen React/TypeScript yang modular dan ringan tanpa library berlebih.",
        },
        {
          title: "Integrasi Database Real-Time",
          desc: "Permodelan data terstruktur dengan PostgreSQL/Supabase untuk sinkronisasi cepat.",
        },
        {
          title: "Antarmuka Berfokus Konversi (UI/UX)",
          desc: "Alur pengguna yang dirancang khusus untuk mengubah pengunjung menjadi pembeli.",
        },
        {
          title: "Deploy CDN Global & SSL",
          desc: "Pipeline pendeployan otomatis di jaringan Edge dengan sertifikat SSL gratis.",
        },
      ],
      comparison: {
        title: "Perbandingan Web App Next.js Kustom vs WordPress Tradisional",
        headers: ["Fitur / Parameter", "Stack Next.js Anduril", "WordPress Tradisional"],
        rows: [
          ["Kecepatan Muat Halaman", "Sangat Cepat (< 1 detik, LCP 95+)", "Lambat hingga Sedang (2s - 5s+)"],
          ["Tingkat Keamanan", "Stateless / Tanpa celah DB publik", "Rentan terhadap exploit plugin"],
          ["Kustomisasi Fitur", "100% disesuaikan dengan alur bisnis", "Terbatas oleh template tema"],
          ["Optimasi SEO & Vitals", "Optimasi bawaan SSG / SSR", "Membutuhkan banyak plugin berat"],
        ],
      },
      faqs: [
        {
          question: "Teknologi apa saja yang digunakan untuk membuat website?",
          answer:
            "Kami mengandalkan Next.js, React, TypeScript, TailwindCSS, dan PostgreSQL/Supabase untuk menghasilkan web yang cepat, aman, dan modern.",
        },
        {
          question: "Apakah website akan tampil bagus di smartphone (HP)?",
          answer:
            "Ya, 100% website dirancang dengan prinsip Mobile-First dan diuji di berbagai ukuran layar smartphone dan tablet.",
        },
        {
          question: "Apakah saya bisa memperbarui konten setelah website selesai?",
          answer:
            "Tentu! Kami mengintegrasikan CMS (Sanity / Supabase / Admin Dashboard) agar tim Anda dapat memperbarui konten tanpa harus paham koding.",
        },
      ],
    },
  },
  {
    slug: "company-profile",
    iconName: "FiGlobe",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Next-Intl"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan Company Profile Website.",
    en: {
      title: "Company Profile Website",
      tagline: "Establish instant brand credibility and capture high-value corporate clients.",
      summary:
        "A Company Profile Website by Anduril is an authoritative corporate web solution designed to present your organization's mission, team, portfolio, and value proposition with premium aesthetics and strong search visibility.",
      turnaround: "3 - 7 Days",
      category: "Corporate Branding",
      overview:
        "First impressions matter in enterprise and B2B markets. We craft corporate company profiles that look stunning, load instantly, and build immediate trust with potential clients, investors, and partners. Every page is optimized for brand search keywords, mobile devices, and direct lead generation.",
      benefits: [
        "Authoritative corporate design showcasing services & achievements",
        "Integrated lead capture contact forms & instant WhatsApp channels",
        "Full OpenGraph metadata & Google Organization Schema markup",
        "Multi-language support (English & Indonesian i18n ready)",
      ],
      features: [
        {
          title: "Brand-Aligned UI Design",
          desc: "Custom color schemes, typography hierarchy, and sleek animations matching corporate identity.",
        },
        {
          title: "Service & Portfolio Showcases",
          desc: "Interactive grids presenting your key services, case studies, and client logos.",
        },
        {
          title: "Contact & Location Integration",
          desc: "Google Maps, interactive contact forms, and direct messaging channels.",
        },
        {
          title: "Corporate Security & Speed",
          desc: "Static site generation ensuring 100% uptime and protection against DDoS/hacking attempts.",
        },
      ],
      comparison: {
        title: "Anduril Corporate Web vs Generic Template Builders",
        headers: ["Criteria", "Anduril Corporate Site", "Generic Wix/Squarespace"],
        rows: [
          ["Brand Uniqueness", "100% Custom engineered", "Generic reused templates"],
          ["Loading Speed", "98+ Lighthouse Rating", "Heavy scripts slowdown"],
          ["SEO Control", "Full JSON-LD & Meta Schema", "Basic default meta tags"],
          ["Code Ownership", "100% Yours with source code", "Locked into platform subscription"],
        ],
      },
      faqs: [
        {
          question: "How long does it take to complete a Company Profile site?",
          answer:
            "Typically between 3 to 7 business days from content approval to final deployment.",
        },
        {
          question: "Can we translate the site into multiple languages?",
          answer:
            "Yes! We build native multi-language routing (e.g. English / Indonesian) so international visitors can view content seamlessly.",
        },
      ],
    },
    id: {
      title: "Website Profile Perusahaan (Company Profile)",
      tagline: "Membangun kredibilitas merek instan dan menarik klien korporat bernilai tinggi.",
      summary:
        "Website Company Profile dari Anduril adalah solusi web korporat profesional yang dirancang untuk menampilkan visi perusahaan, tim, portofolio, dan keunggulan bisnis Anda dengan tampilan elegan dan SEO kuat.",
      turnaround: "3 - 7 Hari Kerja",
      category: "Branding Korporat",
      overview:
        "Kesan pertama sangat penting dalam pasar korporat dan B2B. Kami merancang website profil perusahaan yang memukau, muat instan, serta membangun kepercayaan instan dari calon klien, investor, dan mitra bisnis.",
      benefits: [
        "Desain korporat berwibawa yang menampilkan profil & layanan utama",
        "Formulir kontak terintegrasi & tombol obrolan WhatsApp instan",
        "Metadata OpenGraph lengkap & Google Organization Schema",
        "Dukungan multi-bahasa (Bahasa Indonesia & Bahasa Inggris)",
      ],
      features: [
        {
          title: "Desain UI Sesuai Identitas Brand",
          desc: "Palet warna kustom, tipografi rapi, dan animasi halus sesuai identitas merek.",
        },
        {
          title: "Showcase Layanan & Portofolio",
          desc: "Katalog interaktif yang menyajikan daftar layanan dan proyek terbaik Anda.",
        },
        {
          title: "Integrasi Peta & Kontak",
          desc: "Google Maps, formulir pesan langsung, dan tautan sosial media resmi.",
        },
        {
          title: "Kecepatan & Keamanan Korporat",
          desc: "Performa tinggi dengan jaminan 100% uptime dan perlindungan keamanan.",
        },
      ],
      comparison: {
        title: "Web Korporat Anduril vs Template Pasaran / Wix",
        headers: ["Kriteria", "Website Korporat Anduril", "Template Pasaran / Wix"],
        rows: [
          ["Keunikan Brand", "100% Kustom sesuai pesanan", "Menggunakan template pasaran umum"],
          ["Kecepatan Loading", "Skor Lighthouse 98+", "Lambat karena skrip bawaan berat"],
          ["Kontrol SEO", "Full JSON-LD & Meta Schema", "Meta tag standar bawaan platform"],
          ["Kepemilikan Kode", "100% Hak Milik Anda", "Tergantung langganan bulanan platform"],
        ],
      },
      faqs: [
        {
          question: "Berapa lama estimasi pengerjaan Website Company Profile?",
          answer:
            "Umumnya antara 3 hingga 7 hari kerja sejak materi konten disetujui hingga siap rilis di internet.",
        },
        {
          question: "Apakah website bisa disetel ke dua bahasa (Indonesia & Inggris)?",
          answer:
            "Ya! Kami menyediakannya dengan sistem multi-bahasa native (ID/EN) sehingga pengunjung dari luar negeri dapat membaca profil perusahaan Anda dengan nyaman.",
        },
      ],
    },
  },
  {
    slug: "cms",
    iconName: "FiLayers",
    techStack: ["Next.js", "Sanity CMS", "Supabase", "React-Markdown", "TypeScript"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Integrasi / Pembuatan CMS.",
    en: {
      title: "Content Management System (CMS)",
      tagline: "Effortless content publishing and administration without writing a single line of code.",
      summary:
        "Anduril develops custom CMS solutions and integrates Headless CMS platforms (Sanity, Supabase, Strapi) to empower teams to publish blogs, news, catalog products, and media smoothly with full editorial control.",
      turnaround: "5 - 10 Days",
      category: "Content Infrastructure",
      overview:
        "Managing your website content should be fast and painless. We integrate modern Headless CMS tools or construct lightweight admin portals tailored to your publishing workflows. Enjoy real-time previews, rich text editing, automated image optimization, and role-based permissions.",
      benefits: [
        "User-friendly editorial dashboard for non-technical team members",
        "Instant real-time publishing without rebuilding the codebase",
        "Automatic WebP image compression and asset management",
        "Multi-author role permissions (Admin, Editor, Contributor)",
      ],
      features: [
        {
          title: "Headless CMS Integration",
          desc: "Decoupled architecture connecting Sanity, Supabase, or Strapi to Next.js.",
        },
        {
          title: "Rich Text & MDX Support",
          desc: "Write articles using markdown or WYSIWYG editors with code highlight support.",
        },
        {
          title: "SEO Meta Fields",
          desc: "Custom meta title, description, slug, and social preview fields for content managers.",
        },
        {
          title: "Version Control & History",
          desc: "Revert edits and manage draft vs published content safely.",
        },
      ],
      comparison: {
        title: "Headless CMS vs Traditional Monolithic CMS",
        headers: ["Dimension", "Anduril Headless CMS", "Traditional Monolith (e.g. Joomla/WP)"],
        rows: [
          ["Security", "Decoupled database, zero public SQL endpoints", "Direct DB exposure to public"],
          ["Speed", "Instant static generation / incremental regeneration", "Dynamic server rendering lag"],
          ["Flexibility", "Content can feed Web, Mobile Apps, & APIs", "Locked to single web frontend"],
        ],
      },
      faqs: [
        {
          question: "What is a Headless CMS?",
          answer:
            "A Headless CMS separates the content repository ('body') from the presentation layer ('head'). This allows ultra-fast rendering on Next.js while giving you an intuitive editor interface.",
        },
        {
          question: "Is training provided for our staff?",
          answer:
            "Yes! We provide documentation and video walkthroughs on how to manage, edit, and publish content.",
        },
      ],
    },
    id: {
      title: "Sistem Manajemen Konten (CMS)",
      tagline: "Pengelolaan dan publikasi konten website secara mandiri tanpa memerlukan kemampuan koding.",
      summary:
        "Anduril mengembangkan solusi CMS kustom dan mengintegrasikan Headless CMS (Sanity, Supabase, Strapi) agar tim Anda dapat menerbitkan artikel blog, katalog produk, berita, dan media dengan cepat dan mudah.",
      turnaround: "5 - 10 Hari Kerja",
      category: "Infrastruktur Konten",
      overview:
        "Mengelola konten website seharusnya mudah dan cepat. Kami mengintegrasikan Headless CMS modern atau membangun portal admin khusus sesuai alur kerja penerbitan Anda. Nikmati fitur pratinjau langsung, editor teks kaya, dan manajemen gambar otomatis.",
      benefits: [
        "Dashboard admin yang mudah digunakan untuk tim non-teknis",
        "Publikasi konten instan secara real-time tanpa perlu re-build kode",
        "Kompresi gambar otomatis ke format WebP yang sangat ringan",
        "Manajemen peran pengguna (Super Admin, Editor, Penulis)",
      ],
      features: [
        {
          title: "Integrasi Headless CMS",
          desc: "Arsitektur terpisah yang menghubungkan Sanity/Supabase ke Next.js.",
        },
        {
          title: "Dukungan Editor Rich Text & MDX",
          desc: "Tulis artikel menggunakan editor visual atau markdown dengan mudah.",
        },
        {
          title: "Kolom SEO Metadata Kustom",
          desc: "Pengaturan judul SEO, deskripsi, slug, dan gambar pratinjau media sosial.",
        },
        {
          title: "Riwayat & Draf Artikel",
          desc: "Kelola draf sebelum terbit dan batalkan perubahan dengan aman.",
        },
      ],
      comparison: {
        title: "Perbandingan Headless CMS vs CMS Tradisional",
        headers: ["Dimensi", "Headless CMS Anduril", "CMS Tradisional (Monolitik)"],
        rows: [
          ["Keamanan", "Database terpisah, aman dari serangan SQLi", "Database terekspos langsung ke publik"],
          ["Kecepatan", "Generasi halaman statis instan", "Server sering mengalami bottleneck"],
          ["Fleksibilitas", "Konten bisa dipakai di Web, Apps, & API", "Terkunci di satu tampilan web saja"],
        ],
      },
      faqs: [
        {
          question: "Apa itu Headless CMS?",
          answer:
            "Headless CMS memisahkan tempat penyimpanan data konten dari antarmuka tampilan. Hal ini membuat website Next.js memuat sangat cepat sekaligus memberi Anda ruang kontrol konten yang mudah.",
        },
        {
          question: "Apakah ada panduan cara menggunakannya?",
          answer:
            "Ya! Kami menyediakan dokumentasi dan video panduan langkah demi langkah cara menambah dan mengedit konten.",
        },
      ],
    },
  },
  {
    slug: "dashboard",
    iconName: "FiGrid",
    techStack: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "PostgreSql", "Chart.js"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan Dashboard & System POS.",
    en: {
      title: "Dashboard & POS System",
      tagline: "Real-time analytics, cashier POS, and business administration web applications.",
      summary:
        "Anduril builds custom internal Dashboard applications and Point of Sale (POS) cashier systems featuring real-time financial tracking, inventory control, automated reports, and multi-role authentication.",
      turnaround: "7 - 14 Days",
      category: "Enterprise & Business Systems",
      overview:
        "Streamline daily retail and business operations with our custom Dashboard and POS web systems. Eliminate manual record-keeping, reduce cashier errors by 60%, and gain clear real-time visibility into sales metrics, inventory movements, and staff performance.",
      benefits: [
        "Real-time cashier transaction processing with receipt output",
        "Automated stock & inventory deductions on every sale",
        "Interactive analytics charts for daily, monthly, & annual revenue",
        "Role-Based Access Control (Super Admin, Manager, Cashier)",
      ],
      features: [
        {
          title: "Live Sales & Revenue Charts",
          desc: "Visual charts built with Chart.js / Recharts showing live transactions.",
        },
        {
          title: "Inventory & Stock Warning System",
          desc: "Automatic notifications when product stock drops below critical levels.",
        },
        {
          title: "Multi-Branch Support",
          desc: "Manage multiple store locations or warehouses from a single unified admin panel.",
        },
        {
          title: "Export & Financial Reporting",
          desc: "One-click export of transaction logs and profit/loss data to PDF/Excel.",
        },
      ],
      comparison: {
        title: "Custom Dashboard POS vs Generic Off-the-Shelf POS",
        headers: ["Feature", "Anduril Custom POS System", "Off-the-Shelf Subscription POS"],
        rows: [
          ["Monthly Fee", "Zero mandatory recurring software fees", "Expensive perpetual monthly fees"],
          ["Data Privacy", "100% Owned by your business in your DB", "Stored on third-party servers"],
          ["Custom Workflow", "Tailored to your specific operational steps", "Rigid fixed features"],
        ],
      },
      faqs: [
        {
          question: "Can the POS run on tablets and touchscreen laptops?",
          answer:
            "Yes! The interface is optimized for touchscreen cashier monitors, tablets, and desktop browsers.",
        },
        {
          question: "Is multi-user access supported with different permissions?",
          answer:
            "Yes, we implement Role-Based Access Control (RBAC) so cashiers only see transaction screens, while managers access full revenue and inventory settings.",
        },
      ],
    },
    id: {
      title: "Dashboard & Sistem Kasir (POS)",
      tagline: "Analitik penjualan real-time, sistem kasir POS, dan aplikasi manajemen bisnis internal.",
      summary:
        "Anduril membangun aplikasi Dashboard manajemen dan sistem kasir Point of Sale (POS) kustom yang dilengkapi pencatatan transaksi real-time, kontrol stok inventaris, dan laporan keuangan otomatis.",
      turnaround: "7 - 14 Hari Kerja",
      category: "Sistem Bisnis & Enterprise",
      overview:
        "Optimalkan operasional toko dan bisnis harian Anda dengan aplikasi Dashboard & Kasir POS berbasis web. Hilangkan pencatatan manual, kurangi risiko kesalahan transaksi hingga 60%, dan dapatkan analisis omzet real-time kapan saja.",
      benefits: [
        "Proses transaksi kasir real-time dengan output cetak struk",
        "Pengurangan stok barang otomatis secara langsung pada setiap penjualan",
        "Grafik analisis pendapatan harian, bulanan, dan tahunan",
        "Hak akses pengguna berjenjang (Super Admin, Manajer, Kasir)",
      ],
      features: [
        {
          title: "Grafik Laporan Penjualan Live",
          desc: "Grafik visual interaktif yang menampilkan omzet dan transaksi real-time.",
        },
        {
          title: "Peringatan Stok Inventaris Minimum",
          desc: "Notifikasi otomatis saat stok produk mendekati batas habis.",
        },
        {
          title: "Dukungan Multi-Cabang",
          desc: "Kelola banyak toko atau gudang dalam satu panel admin terpusat.",
        },
        {
          title: "Ekspor Laporan Keuangan",
          desc: "Cetak dan ekspor data transaksi serta profit/loss ke format PDF/Excel.",
        },
      ],
      comparison: {
        title: "Perbandingan POS Kustom Anduril vs Aplikasi POS Sewa Pasaran",
        headers: ["Fitur", "Sistem POS Kustom Anduril", "Aplikasi POS Sewa Pasaran"],
        rows: [
          ["Biaya Langganan", "Tanpa biaya langganan bulanan wajib", "Wajib bayar sewa bulanan terus menerus"],
          ["Privasi Data", "100% Hak milik Anda di database sendiri", "Disimpan di server pihak ketiga"],
          ["Penyesuaian Alur", "Disesuaikan 100% dengan alur kerja toko", "Kaku dan tidak bisa diubah"],
        ],
      },
      faqs: [
        {
          question: "Apakah aplikasi POS bisa digunakan di tablet atau layar sentuh?",
          answer:
            "Ya! Antarmuka dirancang khusus agar nyaman digunakan di monitor kasir layar sentuh, tablet, maupun laptop.",
        },
        {
          question: "Apakah bisa membatasi hak akses kasir agar tidak melihat laporan keuangan?",
          answer:
            "Tentu! Kami menerapkan Role-Based Access Control (RBAC) sehingga kasir hanya bisa mengakses menu transaksi, sedangkan laporan omzet hanya bisa dibuka oleh pemilik/manajer.",
        },
      ],
    },
  },
  {
    slug: "saas",
    iconName: "FiCpu",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSql", "Supabase", "Prisma"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan SaaS (Software as a Service).",
    en: {
      title: "SaaS Product Development",
      tagline: "Turn your software product concept into a scalable, revenue-generating SaaS platform.",
      summary:
        "Anduril offers end-to-end SaaS (Software as a Service) engineering—from architecture design and multi-tenant database modeling to subscription payment integration and high-availability cloud deployment.",
      turnaround: "14 - 30 Days",
      category: "Software Products",
      overview:
        "Building a successful SaaS requires robust cloud architecture, bulletproof authentication, subscription management, and user-centric onboarding. We help founders and businesses build MVP and enterprise-ready SaaS platforms built for scale.",
      benefits: [
        "Scalable multi-tenant or isolated database architectures",
        "Automated user registration, email verification, & Auth",
        "Stripe / Payment Gateway integration for recurring billing",
        "Comprehensive admin dashboard for monitoring user activity",
      ],
      features: [
        {
          title: "Subscription Tier Management",
          desc: "Freemium, Pro, and Enterprise feature gating powered by flexible API rules.",
        },
        {
          title: "API Engine & Webhooks",
          desc: "Robust REST/GraphQL endpoints for third-party developer integrations.",
        },
        {
          title: "User Onboarding & Workspaces",
          desc: "Team workspace invitations, member roles, and smooth onboarding flows.",
        },
        {
          title: "Automated Scalability",
          desc: "Stateless Next.js architecture hosted on serverless Edge networks.",
        },
      ],
      comparison: {
        title: "Anduril SaaS Stack vs Legacy Monolith SaaS",
        headers: ["Metrics", "Anduril Next.js Serverless Stack", "Legacy Monolith Stack"],
        rows: [
          ["Infrastructure Cost", "Pay-as-you-grow serverless efficiency", "High idle server maintenance cost"],
          ["Deployment Speed", "Continuous deployment in seconds", "Complex manual release cycles"],
          ["User Concurrency", "Handles high traffic spikes effortlessly", "Bottlenecks under heavy concurrent load"],
        ],
      },
      faqs: [
        {
          question: "Can you help design the database architecture for our SaaS?",
          answer:
            "Yes! We design normalized, scalable relational database schemas (PostgreSQL) optimized for multi-tenancy and data isolation.",
        },
        {
          question: "Do you integrate local and international payment gateways?",
          answer:
            "Yes, we can integrate Stripe, Midtrans, Xendit, or PayPal for recurring billing and payment webhooks.",
        },
      ],
    },
    id: {
      title: "Pengembangan Produk SaaS",
      tagline: "Wujudkan ide produk perangkat lunak Anda menjadi platform SaaS berskala besar.",
      summary:
        "Anduril menawarkan rekayasa SaaS (Software as a Service) dari hulu ke hilir—mulai dari arsitektur cloud, skema database multi-tenant, hingga integrasi pembayaran langganan otomatis.",
      turnaround: "14 - 30 Hari Kerja",
      category: "Produk Perangkat Lunak",
      overview:
        "Membangun SaaS yang sukses membutuhkan arsitektur cloud yang tangguh, sistem otentikasi aman, manajemen langganan, dan onboarding pengguna yang lancar. Kami membantu founder dan perusahaan membangun MVP hingga platform SaaS siap pakai.",
      benefits: [
        "Arsitektur database multi-tenant yang aman dan mudah berskala",
        "Sistem pendaftaran pengguna, verifikasi email, dan autentikasi",
        "Integrasi Payment Gateway (Midtrans/Xendit/Stripe) untuk langganan",
        "Dashboard admin terpusat untuk memantau aktivitas pengguna",
      ],
      features: [
        {
          title: "Manajemen Paket Langganan",
          desc: "Pembatasan fitur otomatis untuk paket Gratis, Pro, dan Enterprise.",
        },
        {
          title: "Mesin API & Webhooks",
          desc: "Endpoint REST/GraphQL untuk integrasi pihak ketiga.",
        },
        {
          title: "Ruang Kerja & Tim (Workspaces)",
          desc: "Undangan anggota tim, manajemen peran, dan alur kerja bersama.",
        },
        {
          title: "Skalabilitas Otomatis",
          desc: "Arsitektur stateless Next.js yang mampu menampung lonjakan trafik pengguna.",
        },
      ],
      comparison: {
        title: "Perbandingan Stack SaaS Anduril vs Arsitektur Lama",
        headers: ["Parameter", "Serverless Next.js Stack", "Arsitektur Server Lama"],
        rows: [
          ["Biaya Infrastruktur", "Efisien, bayar sesuai pertumbuhan pengguna", "Biaya sewa server tinggi meski sepi"],
          ["Kecepatan Rilis", "Pembaruan otomatis dalam hitungan detik", "Proses pengujian & deploy manual rumit"],
          ["Kapasitas Pengguna", "Sanggup menampung lonjakan pengguna tinggi", "Sering mengalami server down/error"],
        ],
      },
      faqs: [
        {
          question: "Apakah bisa membantu mendesain skema database untuk SaaS kami?",
          answer:
            "Ya! Kami merancang skema database relasional (PostgreSQL) yang terstruktur dan aman untuk multi-tenant.",
        },
        {
          question: "Apakah bisa mengintegrasikan sistem pembayaran lokal Indonesia?",
          answer:
            "Tentu! Kami berpengalaman mengintegrasikan Midtrans, Xendit, maupun Stripe untuk pembayaran kartu kredit, transfer bank, e-wallet, dan QRIS.",
        },
      ],
    },
  },
  {
    slug: "maintenance",
    iconName: "FiTool",
    techStack: ["Next.js", "Vercel / Cloudflare", "Supabase", "Git", "Sentry"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa Maintenance & Security Website.",
    en: {
      title: "Maintenance & Security",
      tagline: "Proactive website care, bug fixes, routine updates, and OWASP security shielding.",
      summary:
        "Anduril Maintenance & Security service provides continuous server monitoring, emergency bug fixing, dependency security upgrades, automated backups, and vulnerability hardening for web platforms.",
      turnaround: "Ongoing / Retainer",
      category: "Support & Infrastructure",
      overview:
        "A neglected website is vulnerable to security exploits, broken dependencies, and slow load times. Our ongoing maintenance plans ensure your web platform stays fast, secure, up-to-date, and completely bug-free month after month.",
      benefits: [
        "Routine security audits adhering to OWASP Top 10 guidelines",
        "Automated daily/weekly database and media file backups",
        "Emergency bug fix response within 2-4 business hours",
        "Core Web Vitals tuning & framework version upgrades",
      ],
      features: [
        {
          title: "Security Patching & Scans",
          desc: "Regular scans for XSS, SQLi, CSRF, and third-party package vulnerabilities.",
        },
        {
          title: "Performance Monitoring",
          desc: "Continuous tracking of site response time, server uptime, and error logs.",
        },
        {
          title: "Content & UI Adjustments",
          desc: "Monthly allocated hours for updating text, imagery, or small design features.",
        },
        {
          title: "SSL & Domain Health",
          desc: "SSL renewal monitoring and domain DNS health checks.",
        },
      ],
      comparison: {
        title: "Retainer Maintenance vs Ad-Hoc Emergency Fixes",
        headers: ["Factor", "Anduril Maintenance Retainer", "Unplanned Ad-Hoc Fixes"],
        rows: [
          ["Response Time", "Priority response (< 2-4 hours)", "Subject to developer availability"],
          ["Prevention", "Proactive updates prevent crashes", "Only fixed after business disruption occurs"],
          ["Cost Predictability", "Fixed monthly budget", "Unpredictable hourly emergency rates"],
        ],
      },
      faqs: [
        {
          question: "What happens if our website experiences downtime?",
          answer:
            "Our monitoring tools instantly notify our team, and we begin troubleshooting immediately to restore uptime.",
        },
        {
          question: "Can we include minor feature updates in the retainer?",
          answer:
            "Yes! Maintenance packages include monthly support hours that can be used for bug fixes, design tweaks, or content updates.",
        },
      ],
    },
    id: {
      title: "Pemeliharaan & Keamanan (Maintenance & Security)",
      tagline: "Perawatan website berkala, perbaikan bug, pembaruan skrip, dan perlindungan keamanan OWASP.",
      summary:
        "Layanan Pemeliharaan & Keamanan Anduril menyediakan pemantauan server berkelanjutan, perbaikan bug darurat, update library keamanan, backup otomatis, dan penutupan celah kerentanan.",
      turnaround: "Langganan Bulanan",
      category: "Dukungan & Infrastruktur",
      overview:
        "Website yang tidak terawat rentan terhadap peretasan, error library, dan penurunan kecepatan. Paket pemeliharaan berkala kami memastikan platform web Anda tetap cepat, aman, dan selalu dalam kondisi optimal tanpa kendala teknis.",
      benefits: [
        "Audit keamanan rutin sesuai pedoman standar OWASP Top 10",
        "Backup otomatis berkala untuk data dan file gambar",
        "Respon perbaikan bug cepat dalam 2-4 jam kerja",
        "Optimasi kecepatan Core Web Vitals & pembaruan versi framework",
      ],
      features: [
        {
          title: "Scanning & Pembaruan Keamanan",
          desc: "Pemeriksaan berkala celah XSS, SQL Injection, dan kerentanan paket library.",
        },
        {
          title: "Pemantauan Performa Real-Time",
          desc: "Pelacakan waktu respon server, uptime, dan log error secara berkelanjutan.",
        },
        {
          title: "Penyesuaian Konten & Fitur Minor",
          desc: "Alokasi jam kerja bulanan untuk update teks, gambar, atau penyesuaian desain.",
        },
        {
          title: "Monitoring SSL & Domain",
          desc: "Pemantauan masa aktif sertifikat SSL dan kesehatan DNS domain.",
        },
      ],
      comparison: {
        title: "Perbandingan Paket Pemeliharaan Rutin vs Perbaikan Darurat Mendadak",
        headers: ["Faktor", "Paket Pemeliharaan Rutin Anduril", "Perbaikan Darurat Mendadak"],
        rows: [
          ["Waktu Respon", "Respon prioritas cepat (< 2-4 jam)", "Tergantung ketersediaan developer"],
          ["Pencegahan Problem", "Pembaruan proaktif mencegah web down", "Baru diperbaiki setelah bisnis terganggu"],
          ["Kepastian Biaya", "Anggaran bulanan pasti dan terprediksi", "Biaya per jam darurat yang tidak terduga"],
        ],
      },
      faqs: [
        {
          question: "Apa yang terjadi jika website kami mengalami kendala server down?",
          answer:
            "Sistem monitoring kami akan memberi notifikasi otomatis ke tim, dan kami akan langsung melakukan tindakan penanganan cepat.",
        },
        {
          question: "Apakah kuota jam maintenance bisa digunakan untuk update fitur kecil?",
          answer:
            "Bisa! Kuota bulanan dapat digunakan untuk perbaikan bug, penyesuaian tampilan ringan, maupun pembaruan konten.",
        },
      ],
    },
  },
  {
    slug: "seo",
    iconName: "FiZap",
    techStack: ["Next.js", "Google Search Console", "Lighthouse", "Schema.org", "WebP"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa SEO & Speed Optimization.",
    en: {
      title: "SEO & Speed Optimization",
      tagline: "Achieve top search rankings, 95+ Core Web Vitals, and organic traffic growth.",
      summary:
        "Anduril SEO & Speed Optimization turns slow websites into ranking powerhouses through Core Web Vitals performance tuning, JSON-LD Schema markup, semantic keyword structuring, and technical audit fixes.",
      turnaround: "3 - 7 Days",
      category: "Growth & Visibility",
      overview:
        "High rankings on Google require both technical excellence and strategic content layout. We audit your site for speed bottlenecks, layout shifts, missing metadata, and indexing errors, elevating your Lighthouse scores to 95+ and driving qualified organic visitors.",
      benefits: [
        "Core Web Vitals optimization achieving LCP < 1.5s & FID < 50ms",
        "JSON-LD Schema implementation for Google Rich Snippets",
        "Semantic HTML5 restructuring & image WebP compression",
        "Sitemap XML, Robots.txt, and Google Search Console indexing",
      ],
      features: [
        {
          title: "PageSpeed & Lighthouse Boost",
          desc: "Eliminate render-blocking scripts, unoptimized fonts, and heavy images.",
        },
        {
          title: "On-Page SEO Restructuring",
          desc: "Optimize title tags, meta descriptions, H1-H3 hierarchy, and internal linking.",
        },
        {
          title: "Structured Data JSON-LD",
          desc: "Inject rich Organization, Product, Article, and FAQ schemas.",
        },
        {
          title: "Indexing & Crawl Audit",
          desc: "Fix 404 broken links, canonical tag errors, and sitemap configuration.",
        },
      ],
      comparison: {
        title: "Technical Next.js SEO vs Basic Keyword Plugins",
        headers: ["Aspect", "Anduril Technical Engine", "Standard Plugin SEO"],
        rows: [
          ["Lighthouse Score", "Guaranteed 90+ Score", "Often slow due to plugin overhead"],
          ["Rich Snippets", "Full custom JSON-LD schema injection", "Limited generic schema templates"],
          ["Mobile Speed", "Instant sub-second loading", "Delayed render & layout shifts"],
        ],
      },
      faqs: [
        {
          question: "How long until we see SEO improvements?",
          answer:
            "Technical speed and indexing improvements are effective immediately. Google re-ranking typically reflects within 2 to 6 weeks.",
        },
        {
          question: "Do you guarantee 90+ Lighthouse scores?",
          answer:
            "Yes! We guarantee performance and Core Web Vitals improvements reaching 90+ on desktop and mobile audits.",
        },
      ],
    },
    id: {
      title: "Optimasi SEO & Kecepatan Website",
      tagline: "Raih peringkat teratas Google, skor Core Web Vitals 95+, dan peningkatan trafik organik.",
      summary:
        "Layanan Optimasi SEO & Speed dari Anduril mengubah website lambat menjadi mesin penghasil trafik melalui optimasi Core Web Vitals, skema struktur data JSON-LD, dan penataan kata kunci terstruktur.",
      turnaround: "3 - 7 Hari Kerja",
      category: "Pertumbuhan & Visibilitas",
      overview:
        "Peringkat tinggi di Google membutuhkan keunggulan teknis serta penataan konten yang presisi. Kami mengaudit website Anda dari bottleneck kecepatan, missing metadata, dan error indeksing untuk menaikkan skor Lighthouse hingga 95+.",
      benefits: [
        "Optimasi Core Web Vitals mencapai nilai LCP < 1.5s & FID < 50ms",
        "Penerapan JSON-LD Schema agar tampil menarik di Google Rich Snippets",
        "Penataan ulang HTML5 semantik & kompresi gambar ke WebP",
        "Penataan Sitemap XML, Robots.txt, dan Google Search Console",
      ],
      features: [
        {
          title: "Peningkatan Kecepatan PageSpeed",
          desc: "Menghilangkan skrip berat yang menghambat muatan halaman.",
        },
        {
          title: "Penataan On-Page SEO",
          desc: "Optimasi judul meta, deskripsi, hirarki tag H1-H3, dan struktur URL.",
        },
        {
          title: "Injeksi Data Terstruktur JSON-LD",
          desc: "Menambahkan skema Organization, Product, Article, dan FAQ.",
        },
        {
          title: "Audit Indeksing & Crawl Engine",
          desc: "Memperbaiki broken link 404, tag kanonikal, dan sitemap.",
        },
      ],
      comparison: {
        title: "Perbandingan SEO Teknis Next.js vs Plugin SEO Standar",
        headers: ["Aspek", "Mesin SEO Teknis Anduril", "Plugin SEO Standar"],
        rows: [
          ["Skor Lighthouse", "Dijamin Skor 90+", "Sering lambat karena beban plugin"],
          ["Tampilan Rich Snippets", "Injeksi skema JSON-LD kustom penuh", "Template skema umum terbatas"],
          ["Kecepatan di HP", "Halaman terbuka instan di bawah 1 detik", "Sering berkedip dan lambat dibuka"],
        ],
      },
      faqs: [
        {
          question: "Berapa lama sampai hasil optimasi SEO terlihat?",
          answer:
            "Peningkatan kecepatan dan indeksing langsung terasa seketika. Perubahan kenaikan posisi di Google biasanya terlihat dalam 2 hingga 6 minggu.",
        },
        {
          question: "Apakah ada jaminan skor Lighthouse 90+?",
          answer:
            "Ya! Kami memberikan jaminan peningkatan nilai performa Core Web Vitals hingga mencapai skor 90+.",
        },
      ],
    },
  },
  {
    slug: "ai-optimization",
    iconName: "FiTrendingUp",
    techStack: ["Next.js", "JSON-LD", "AEO Frameworks", "Robots.txt", "Schema.org"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa AI Optimization (AEO & GEO).",
    en: {
      title: "AI Optimization (AEO & GEO)",
      tagline: "Position your brand as the #1 cited answer across ChatGPT, Gemini, Claude, and Perplexity.",
      summary:
        "AI Optimization (Answer Engine Optimization & Generative Engine Optimization) ensures your business services, products, and brand facts are indexed and cited directly by AI search engines like ChatGPT, Gemini, Perplexity, and Copilot.",
      turnaround: "5 - 10 Days",
      category: "AI & Future Search",
      overview:
        "Search is evolving beyond traditional search engine links. Millions of users ask ChatGPT, Gemini, Claude, and Perplexity for business recommendations. We format and structure your website's data, key takeaways, feature comparisons, and factual content so AI engines reference your business as the definitive authority.",
      benefits: [
        "Direct citation in AI search answers (ChatGPT, Gemini, Perplexity, Copilot)",
        "Structured key takeaway summaries formatted for LLM parser extraction",
        "Factually verifiable entity data via Schema.org & JSON-LD markup",
        "Competitive comparison tables designed for generative answer synthesis",
      ],
      features: [
        {
          title: "Generative Answer Structuring",
          desc: "Format content with direct Q&A blocks and bulleted executive summaries.",
        },
        {
          title: "Entity & Schema Alignment",
          desc: "Explicitly connect your business domain, products, and service facts in JSON-LD.",
        },
        {
          title: "Crawler & Bot Accessibility",
          desc: "Configure robots.txt to allow seamless indexing by GPTBot, PerplexityBot, and ClaudeBot.",
        },
        {
          title: "AEO Content Audits",
          desc: "Refine copy to answer high-intent commercial prompts directly and accurately.",
        },
      ],
      comparison: {
        title: "Traditional Search SEO vs AI Answer Optimization (AEO/GEO)",
        headers: ["Dimension", "AI Engine Optimization (AEO/GEO)", "Traditional Organic SEO"],
        rows: [
          ["Target Platform", "ChatGPT, Gemini, Perplexity, Copilot", "Google / Bing blue link lists"],
          ["Content Format", "Structured Q&A & direct fact tables", "Long-form keyword dense text"],
          ["User Experience", "Direct immediate answer citation", "User clicks link & reads article"],
        ],
      },
      faqs: [
        {
          question: "What is AEO and GEO?",
          answer:
            "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are techniques used to format web content so AI models (ChatGPT, Gemini, Claude, Perplexity) easily extract, credit, and recommend your business when users ask questions.",
        },
        {
          question: "Why is AI Optimization critical now?",
          answer:
            "More than 30% of search queries are shifting to AI conversational interfaces. Early optimization ensures your brand dominates generative AI recommendations.",
        },
      ],
    },
    id: {
      title: "Optimasi Mesin Pencari AI (AEO & GEO)",
      tagline: "Posisikan brand Anda sebagai jawaban utama yang direkomendasikan ChatGPT, Gemini, Claude, dan Perplexity.",
      summary:
        "AI Optimization (Answer Engine Optimization & Generative Engine Optimization) memastikan layanan dan fakta produk bisnis Anda terindeks serta dikutip langsung oleh mesin pencari AI seperti ChatGPT, Gemini, Perplexity, dan Copilot.",
      turnaround: "5 - 10 Hari Kerja",
      category: "Kecerdasan Buatan (AI) & Pencarian Masa Depan",
      overview:
        "Pencarian internet telah berkembang melebihi sekadar daftar link Google. Jutaan pengguna kini menanyakan rekomendasi bisnis langsung ke ChatGPT, Gemini, dan Perplexity. Kami menata data dan fakta website Anda agar mesin AI merujuk bisnis Anda sebagai pilihan utama.",
      benefits: [
        "Kutipan jawaban langsung di mesin AI (ChatGPT, Gemini, Perplexity, Copilot)",
        "Ringkasan poin utama terstruktur yang mudah dipahami oleh parser AI (LLM)",
        "Data entitas bisnis terverifikasi melalui skema data Schema.org & JSON-LD",
        "Tabel perbandingan fitur yang disukai oleh algoritma rekomendasi AI",
      ],
      features: [
        {
          title: "Penataan Konten Berbasis Jawaban AI",
          desc: "Format teks dengan blok Q&A langsung dan poin ringkasan yang presisi.",
        },
        {
          title: "Penyelarasan Entitas & Skema Data",
          desc: "Menghubungkan domain, produk, dan fakta layanan Anda secara gamblang dalam JSON-LD.",
        },
        {
          title: "Aksesibilitas Robot Mesin AI",
          desc: "Mengatur robots.txt agar dapat diindeks dengan lancar oleh GPTBot, PerplexityBot, dan ClaudeBot.",
        },
        {
          title: "Audit Konten AEO",
          desc: "Menyesuaikan teks untuk menjawab pertanyaan komersial pengguna secara akurat.",
        },
      ],
      comparison: {
        title: "Perbandingan SEO Google Tradisional vs Optimasi Jawaban AI (AEO/GEO)",
        headers: ["Dimensi", "AI Engine Optimization (AEO/GEO)", "SEO Google Tradisional"],
        rows: [
          ["Target Platform", "ChatGPT, Gemini, Perplexity, Copilot", "Daftar link biru Google / Bing"],
          ["Format Konten", "Q&A terstruktur & tabel fakta langsung", "Teks panjang penuh kata kunci"],
          ["Pengalaman Pengguna", "Jawaban langsung direkomendasikan AI", "Pengguna mengklik link & membaca artikel"],
        ],
      },
      faqs: [
        {
          question: "Apa itu AEO dan GEO?",
          answer:
            "AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) adalah teknik menata data website agar model AI (ChatGPT, Gemini, Claude, Perplexity) dengan mudah membaca, mengutip, dan merekomendasikan bisnis Anda saat pengguna bertanya.",
        },
        {
          question: "Mengapa Optimasi AI sangat penting saat ini?",
          answer:
            "Lebih dari 30% pencarian mulai beralih ke percakapan AI. Optimasi sejak dini memastikan brand Anda berada di posisi terdepan saat pengguna meminta rekomendasi ke AI.",
        },
      ],
    },
  },
  {
    slug: "devops",
    iconName: "FiServer",
    techStack: ["Docker", "GitHub Actions", "Vercel", "Cloudflare", "Nginx", "Linux"],
    whatsappMsg: "Halo Anduril, saya berminat dengan jasa DevOps & CI/CD Pipeline.",
    en: {
      title: "DevOps & CI/CD (Docker, GitHub)",
      tagline: "Automate your build, test, and deployment pipeline with Docker containers and GitHub Actions.",
      summary:
        "Anduril DevOps & CI/CD service streamlines your software delivery lifecycle using Docker containerization, GitHub Actions workflows, automated testing, and zero-downtime cloud deployments on Vercel, Cloudflare, or custom VPS infrastructure.",
      turnaround: "3 - 10 Days",
      category: "Infrastructure & Automation",
      overview:
        "Manual deployments are slow, error-prone, and unsustainable as your codebase grows. We architect robust CI/CD pipelines using GitHub Actions that automatically build, test, and deploy your applications inside Docker containers to production—eliminating human error and enabling continuous delivery with every git push.",
      benefits: [
        "Automated build, test, and deploy pipelines triggered on every git push",
        "Docker containerization ensuring consistent environments across dev, staging, and production",
        "Zero-downtime deployments with rolling updates and health checks",
        "Infrastructure-as-Code (IaC) for reproducible, version-controlled server setups",
      ],
      features: [
        {
          title: "Docker Containerization",
          desc: "Package your application, dependencies, and runtime into portable Docker images for consistent deployment anywhere.",
        },
        {
          title: "GitHub Actions CI/CD Pipelines",
          desc: "Automated workflows that lint, test, build, and deploy your code on every push or pull request to main branch.",
        },
        {
          title: "Cloud Deployment & Hosting",
          desc: "Deploy to Vercel, Cloudflare Pages, AWS, DigitalOcean, or custom Linux VPS with Nginx reverse proxy.",
        },
        {
          title: "Environment Management",
          desc: "Secure environment variable management, staging vs production isolation, and secrets rotation.",
        },
      ],
      comparison: {
        title: "Automated CI/CD Pipeline vs Manual Deployment",
        headers: ["Criteria", "Anduril CI/CD Pipeline", "Manual FTP / SSH Deploy"],
        rows: [
          ["Deployment Speed", "Automatic in seconds on git push", "Manual upload taking 15-30+ minutes"],
          ["Human Error Risk", "Near-zero with automated testing gates", "High risk of missing files or configs"],
          ["Rollback Capability", "Instant rollback to previous version", "Complex manual restoration process"],
          ["Consistency", "Identical Docker containers everywhere", "Works on my machine syndrome"],
        ],
      },
      faqs: [
        {
          question: "What is Docker and why do I need it?",
          answer:
            "Docker packages your entire application (code, dependencies, runtime) into a portable container that runs identically on any server. This eliminates the 'works on my machine' problem and ensures your app behaves the same in development, staging, and production.",
        },
        {
          question: "Can you set up CI/CD for an existing project?",
          answer:
            "Yes! We can integrate GitHub Actions CI/CD pipelines into any existing repository—whether it's a Next.js app, Node.js API, or Python backend. We'll configure automated testing, building, and deployment without disrupting your current workflow.",
        },
        {
          question: "Which cloud providers do you support for deployment?",
          answer:
            "We support Vercel, Cloudflare Pages, AWS (EC2/ECS), DigitalOcean, Google Cloud Platform, and any custom Linux VPS with Nginx or Caddy as reverse proxy.",
        },
      ],
    },
    id: {
      title: "DevOps & CI/CD (Docker, GitHub)",
      tagline: "Otomatisasi pipeline build, test, dan deployment menggunakan Docker container dan GitHub Actions.",
      summary:
        "Layanan DevOps & CI/CD dari Anduril mempercepat siklus pengiriman perangkat lunak Anda menggunakan kontainerisasi Docker, alur kerja GitHub Actions, pengujian otomatis, dan deployment cloud tanpa downtime di Vercel, Cloudflare, atau VPS kustom.",
      turnaround: "3 - 10 Hari Kerja",
      category: "Infrastruktur & Otomatisasi",
      overview:
        "Deployment manual itu lambat, rawan error, dan tidak berkelanjutan seiring berkembangnya basis kode Anda. Kami merancang pipeline CI/CD menggunakan GitHub Actions yang secara otomatis membangun, menguji, dan mendeploy aplikasi Anda di dalam Docker container ke produksi—menghilangkan kesalahan manusia dan memungkinkan pengiriman berkelanjutan dengan setiap git push.",
      benefits: [
        "Pipeline build, test, dan deploy otomatis yang dipicu setiap git push",
        "Kontainerisasi Docker menjamin lingkungan konsisten di dev, staging, dan produksi",
        "Deployment tanpa downtime dengan rolling update dan health check otomatis",
        "Infrastructure-as-Code (IaC) untuk setup server yang dapat direproduksi dan dikontrol versinya",
      ],
      features: [
        {
          title: "Kontainerisasi Docker",
          desc: "Mengemas aplikasi, dependensi, dan runtime ke dalam Docker image portabel untuk deployment konsisten di mana saja.",
        },
        {
          title: "Pipeline CI/CD GitHub Actions",
          desc: "Alur kerja otomatis yang melakukan lint, test, build, dan deploy kode Anda pada setiap push atau pull request ke branch utama.",
        },
        {
          title: "Deployment & Hosting Cloud",
          desc: "Deploy ke Vercel, Cloudflare Pages, AWS, DigitalOcean, atau VPS Linux kustom dengan Nginx reverse proxy.",
        },
        {
          title: "Manajemen Environment",
          desc: "Pengelolaan environment variable yang aman, isolasi staging vs produksi, dan rotasi secrets.",
        },
      ],
      comparison: {
        title: "Perbandingan Pipeline CI/CD Otomatis vs Deployment Manual",
        headers: ["Kriteria", "Pipeline CI/CD Anduril", "Deploy Manual FTP / SSH"],
        rows: [
          ["Kecepatan Deploy", "Otomatis dalam hitungan detik via git push", "Upload manual memakan waktu 15-30+ menit"],
          ["Risiko Human Error", "Mendekati nol berkat gate pengujian otomatis", "Risiko tinggi file atau konfigurasi terlewat"],
          ["Kemampuan Rollback", "Rollback instan ke versi sebelumnya", "Proses restorasi manual yang kompleks"],
          ["Konsistensi", "Docker container identik di semua server", "Sindrom 'di laptop saya bisa jalan'"],
        ],
      },
      faqs: [
        {
          question: "Apa itu Docker dan mengapa saya membutuhkannya?",
          answer:
            "Docker mengemas seluruh aplikasi Anda (kode, dependensi, runtime) ke dalam container portabel yang berjalan identik di server mana pun. Ini menghilangkan masalah 'di laptop saya bisa jalan' dan memastikan aplikasi berperilaku sama di lingkungan development, staging, dan produksi.",
        },
        {
          question: "Apakah bisa setup CI/CD untuk proyek yang sudah berjalan?",
          answer:
            "Ya! Kami dapat mengintegrasikan pipeline CI/CD GitHub Actions ke repository yang sudah ada—baik itu aplikasi Next.js, API Node.js, maupun backend Python. Kami akan mengonfigurasi pengujian, build, dan deployment otomatis tanpa mengganggu alur kerja Anda saat ini.",
        },
        {
          question: "Cloud provider apa saja yang didukung untuk deployment?",
          answer:
            "Kami mendukung Vercel, Cloudflare Pages, AWS (EC2/ECS), DigitalOcean, Google Cloud Platform, dan VPS Linux kustom dengan Nginx atau Caddy sebagai reverse proxy.",
        },
      ],
    },
  },
];

export const getServicesList = (locale: string = "en"): ServiceItem[] => {
  const isId = locale === "id";
  return RAW_SERVICES_DATA.map((item) => {
    const loc = isId ? item.id : item.en;
    return {
      slug: item.slug,
      iconName: item.iconName,
      techStack: item.techStack,
      whatsappMsg: item.whatsappMsg,
      title: loc.title,
      tagline: loc.tagline,
      summary: loc.summary,
      turnaround: loc.turnaround,
      category: loc.category,
      overview: loc.overview,
      benefits: loc.benefits,
      features: loc.features,
      comparison: {
        title: loc.comparison.title,
        headers: loc.comparison.headers as [string, string, string],
        rows: loc.comparison.rows as [string, string, string][],
      },
      faqs: loc.faqs,
    };
  });
};

export const getServiceBySlug = (slug: string, locale: string = "en"): ServiceItem | undefined => {
  const services = getServicesList(locale);
  return services.find((s) => s.slug === slug);
};

export const SERVICES_LIST = getServicesList("en");
