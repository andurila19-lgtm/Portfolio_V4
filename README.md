  <h1>anduril.web.id</h1>
<p>🔥 Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind CSS, SWR, and Prisma.</p>

[![GitHub Repo stars](https://img.shields.io/github/stars/andurila19-lgtm/Portfolio_V4)](https://github.com/andurila19-lgtm/Portfolio_V4/stargazers)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

<br/>

<img width="1525" height="1221" alt="Portfolio Screenshot" src="/public/images/screenshot.png" />

## 📘 Introduction

This is my personal website and portfolio, built from scratch using modern technologies like **Next.js 14** and **TypeScript**. 

I use this platform to showcase my projects, share insights, and experiment with new web technologies. The site features a modular architecture, internationalization support, and a dedicated developer dashboard.

Feel free to explore the source code, use it as inspiration, or fork it as a template. If you find this project useful, consider giving it a star ⭐.

---

## 🛠 Tech Stack

### Core
- **⚛️ Next.js 14 (App Router)** - React Framework
- **🔰 TypeScript** - Static Typing
- **💠 Tailwind CSS v3** - Styling
- **🌐 Next-Intl** - Internationalization (i18n)

### State Management & Data Fetching
- **🦫 Zustand** - Local State Management
- **〰️ SWR** - Data Fetching & Caching
- **📦 Supabase / Prisma** - Backend & Database ORM
- **🔥 Firebase** - Real-time Chat & Database

### Animations & UI
- **➰ Framer Motion** - Smooth Animations
- **✨ GSAP** - High-performance Animations
- **🌊 Lenis** - Smooth Scrolling
- **🎨 AOS** - Scroll Reveal Animations
- **🛠️ React Icons** - Iconography

### Tools
- **📏 ESLint & Prettier** - Linting & Formatting
- **📌 Conventional Commits** - Standardized Git Commits

---

## 🚀 Features

### 🌍 Internationalization (i18n)
Full support for multiple languages (English & Indonesian) using `next-intl`. The site automatically detects and routes based on the locale.

### 📊 Developer Dashboard
A comprehensive dashboard visualizing:
- **GitHub Contributions:** Live activity tracking.
- **Wakatime Stats:** Live coding time metrics.
- **Codewars & Monkeytype:** Skill tracking and typing benchmarks.

### 📁 Project Showcase
A dynamic project gallery with data managed via Supabase. Uses ISR (Incremental Static Regeneration) for lightning-fast performance and fresh content.

### � Wakatime Integration
Real-time coding statistics fetched via serverless API routes.

---

## 🛠 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/andurila19-lgtm/Portfolio_V4
```

### 2. Install Dependencies
It is highly recommended to use **Bun** for faster installation and compatibility with hooks.
```bash
bun install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and replace with your own credentials.

```bash
cp .env.example .env
```

You’ll need credentials for services like:

- **Nodemailer**
- **GitHub**
- **Wakatime**
- **Codewars**
- **Monkeytype**
- **Supabase / PostgreSQL**

#### Example:

```env
# Nodemailer
NODEMAILER_PW=your_email_password
NODEMAILER_EMAIL=your_email@example.com

# GitHub Token
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_token

# Umami Analytics
UMAMI_API_KEY=your_umami_api_key
UMAMI_WEBSITE_ID=your_site_id

# Wakatime
WAKATIME_API_ID=your_wakatime_id
WAKATIME_API_KEY=your_wakatime_key

# Monkeytype
MONKEYTYPE_API_KEY=your_monkeytype_api_key

# Codewars
CODEWARS_USER_ID=your_codewars_username

# PostgreSQL (Supabase)
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_prisma_url
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_db

# Google Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_DB_URL=your_firebase_db_url

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Misc
NEXT_PUBLIC_AUTHOR_EMAIL=your_email@example.com
DOMAIN=https://anduril.web.id
```

### 4. Run Development Server
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📂 Project Structure
```text
├── app/[locale]        # App Router pages (i18n)
├── modules             # Page-specific components & logic
├── common              # Shared components, hooks, & constants
├── public              # Static assets (images, icons)
├── services            # API services & third-party integrations
└── styles              # Global CSS & Tailwind config
```

---

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contact
- **Website:** [anduril.web.id](https://anduril.web.id)
- **Instagram:** [@rm_andurilahmad](https://instagram.com/rm_andurilahmad)
- **Email:** [andurila19@gmail.com](mailto:andurila19@gmail.com)
