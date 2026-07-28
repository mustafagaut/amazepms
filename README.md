# 🏢 Amaze PMS — Property Management Solutions

A high-performance, responsive corporate web application for **Amaze PMS Pvt Ltd**, an integrated property management company. Built with **Next.js 14/15**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Features

- ⚡ **Next.js App Router**: Optimized performance with server-side rendering, client components, and modular routing.
- 🎨 **Modern Design & UI**: Clean, corporate styling with Tailwind CSS, custom glassmorphism, and subtle ambient glows.
- 🖼️ **Next.js Image Optimization**: Built-in asset optimization, WebP conversion, and LCP priority handling.
- 📱 **Fully Responsive**: Mobile-first design adaptive to all desktop, tablet, and smartphone screen sizes.
- ✨ **Smooth Micro-interactions**: Fluid section transitions and hover states powered by `framer-motion`.
- 🗂️ **Clean Component Architecture**: Modular folder layout with dedicated `layouts/`, `sections/`, and reusable `ui/` directories.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Structure

```text
├── public/                     # Static assets (images, logos, icons)
│   ├── logo.png                # Main brand logo
│   ├── about1.png              # About section visual
│   └── ...
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   │   └── page.tsx        # About Us page
│   │   ├── career/
│   │   │   └── page.tsx        # Careers page
│   │   ├── client/
│   │   │   └── page.tsx        # Clients page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   ├── gallery/
│   │   │   └── page.tsx        # Media / Gallery page
│   │   ├── recruitment/
│   │   │   └── page.tsx        # Recruitment page
│   │   ├── service/
│   │   │   └── page.tsx        # Services page
│   │   ├── strength/
│   │   │   └── page.tsx        # Our Strengths page
│   │   ├── globals.css         # Global Tailwind CSS styles
│   │   ├── layout.tsx          # Root layout wrapper
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI component library
│   │   ├── layouts/
│   │   │   └── Navbar.tsx      # Top Navigation Bar
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── Cards.tsx
│   │   │   ├── FooterCTA.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBanner.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   └── ui/
│   │       ├── DynamicIcon.tsx
│   │       └── InfoCard.tsx
│   └── constants/              # Static site configurations & links
│       └── data.ts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

---

## ⚡ Installation & Setup Guide

### Prerequisites

Ensure you have Node.js installed on your system:

- **Node.js:** v18.17.0 or higher
- **Package Manager:** npm, yarn, pnpm, or bun

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mustafagaut/amazepms.git
cd amazepms
```

### 2️⃣ Install Dependencies

Choose your preferred package manager to install the required node modules:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3️⃣ Run Development Server

Start the local development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live application.

---

## 📜 Command Reference

| Task | npm | yarn | pnpm | bun |
|---|---|---|---|---|
| Start Dev Server (localhost:3000) | `npm run dev` | `yarn dev` | `pnpm dev` | `bun dev` |
| Build for Production | `npm run build` | `yarn build` | `pnpm build` | `bun build` |
| Start Production Build | `npm run start` | `yarn start` | `pnpm start` | `bun start` |
| Run Code Linter | `npm run lint` | `yarn lint` | `pnpm lint` | `bun lint` |

---

## 🚢 Deployment

The easiest way to deploy your Next.js app is through **Vercel**:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com/).
3. Vercel automatically detects Next.js settings and runs `npm run build`.
4. Click **Deploy**.
