# Accredian Enterprise — Landing Page Clone

A production-quality **Next.js 14** recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with App Router, TypeScript, and Tailwind CSS.

🔗 **Live Demo:** *(Deploy to Vercel — see instructions below)*

---

## 📸 Sections Built

| Section | Description |
|---|---|
| **Navbar** | Sticky, scroll-aware, mobile drawer, transparent → white |
| **Hero** | Animated gradient, count-up stats, dual CTAs, wave divider |
| **Trust Bar** | Logos of 10+ enterprise clients |
| **Features** | 6-card grid with hover animations and scroll reveal |
| **Programs** | Filterable tab UI with 6 program cards |
| **Universities** | 8 IIT/IIM partner cards |
| **How It Works** | 4-step process timeline |
| **Testimonials** | Interactive carousel with sidebar navigation |
| **Pricing** | 3-tier pricing with popular plan highlight |
| **Lead Form** | Full form with validation + API route |
| **Footer** | 4-column links, social, status badge |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts — no env vars needed for the base build
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) and it will auto-deploy on push.

---

## 🏗️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx           # Root layout with Google Fonts
│   ├── page.tsx             # Main page (assembles all sections)
│   ├── globals.css          # Tailwind + custom animations/utilities
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive sticky navbar
│   │   ├── Hero.tsx         # Animated hero with count-up stats
│   │   ├── TrustBar.tsx     # Client logo strip
│   │   ├── Features.tsx     # Feature cards with scroll reveal
│   │   ├── Programs.tsx     # Tab-filtered program cards
│   │   ├── Universities.tsx # Partner institution cards
│   │   ├── HowItWorks.tsx   # 4-step process
│   │   ├── Testimonials.tsx # Interactive testimonial carousel
│   │   ├── Pricing.tsx      # 3-tier pricing table
│   │   ├── LeadForm.tsx     # Validated lead capture form
│   │   └── Footer.tsx       # Full-width footer
│   └── api/
│       └── leads/
│           └── route.ts     # POST /api/leads — Next.js API Route
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🤖 AI Usage Explanation

AI (Claude) was used throughout this project:

| Area | AI Contribution | Manual Changes |
|---|---|---|
| **Component structure** | Generated initial component layout and props | Reorganized section order, tuned spacing |
| **Hero animation** | Suggested count-up hook pattern | Rewrote timing logic, fixed hydration issue |
| **Tailwind classes** | Generated color palette and utility classes | Adjusted mobile breakpoints, added custom CSS vars |
| **Form validation** | Boilerplate validation logic | Added field-level error UX, loading states |
| **API route** | Basic CRUD structure | Added proper error types, response formatting |
| **Testimonials carousel** | Static layout | Added sidebar interaction pattern |
| **CSS animations** | Basic keyframe suggestions | Added shimmer, hero-grid, scroll reveal system |
| **Copy/content** | Research into Accredian's actual content | Refined messaging, added realistic metrics |

**Bottom line:** AI accelerated boilerplate by ~60%. All design decisions, component composition, interaction patterns, and UX refinements were made manually.

---

## 💡 Approach Taken

1. **Research first** — Fetched public info about Accredian Enterprise's feature set and messaging
2. **Design direction** — Chose a refined enterprise aesthetic: navy/blue palette, DM Serif Display + DM Sans pairing, clean white sections alternating with dark sections
3. **Component-first** — Built each section as an isolated, self-contained component
4. **Mobile-first** — All layouts built mobile-up using Tailwind responsive prefixes
5. **Real interactivity** — Tabs, carousels, form validation, and count-up animations are all functional
6. **API integration** — Added a real `/api/leads` Next.js Route Handler that validates and stores submissions

---

## 🔮 Improvements with More Time

- **Database integration** — Replace in-memory lead store with Prisma + PostgreSQL or Supabase
- **Email notifications** — Send confirmation to lead + Slack notification to sales team via Resend or Nodemailer
- **Animation polish** — Add Framer Motion for smoother page transitions and staggered card reveals
- **CMS integration** — Connect programs/testimonials to Sanity or Contentful
- **Analytics** — Add Mixpanel/PostHog events on CTA clicks and form submissions
- **Auth** — Build admin dashboard at `/admin/leads` with NextAuth
- **SEO** — Add JSON-LD structured data, Open Graph images via `next/og`
- **Testing** — Add Vitest unit tests for form validation and Playwright e2e tests
- **i18n** — Add Hindi language support for Indian enterprise customers
- **A/B testing** — Test hero headline variants with Vercel Edge Config

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** DM Serif Display + DM Sans (Google Fonts via `next/font`)
- **API:** Next.js Route Handlers
- **Deployment:** Vercel

---

 
