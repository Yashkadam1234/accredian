# 🚀 Accredian Enterprise — Landing Page Clone

A production-grade **Next.js 14 (App Router)** implementation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page.

Built with a focus on **scalability, reusable components, and real-world SaaS UI patterns**, this project replicates a modern enterprise learning platform experience using TypeScript and Tailwind CSS.

---

## 🔗 Live Demo

👉  https://accredian-seven-mauve.vercel.app/

---

## 📌 Key Highlights

- ⚡ Fully responsive SaaS-style landing page
- 🧩 Component-based architecture (reusable & scalable)
- 🎯 Smooth scroll navigation with active section tracking
- 🧠 Real API integration using Next.js Route Handlers
- 💬 Toast notifications for UX feedback
- 📱 Mobile-first responsive design
- 🎨 Clean enterprise-grade UI system

---

## 📸 Sections Implemented

| Section | Description |
|----------|-------------|
| **Navbar** | Sticky navigation with scroll effects + mobile drawer |
| **Hero Section** | Animated headline, key metrics, primary CTA |
| **Trust Bar** | Enterprise client logos for credibility |
| **Features** | Highlighted product/learning features with hover effects |
| **Programs** | Filterable program cards with clean UI |
| **Universities** | IIT & IIM partner showcase section |
| **How It Works** | Step-by-step learning journey flow |
| **Testimonials** | Interactive carousel with navigation |
| **Pricing** | Tier-based pricing cards with emphasis on best plan |
| **Lead Capture (CTA)** | Form with validation + API integration |
| **Footer** | Multi-column structured footer with links & status indicator |

---

## 🚀 Setup Instructions

### 📦 Prerequisites
- Node.js 18+
- npm or yarn

---

### ⚙️ Installation

```bash
# Clone the repository
git clone https: https://github.com/Yashkadam1234/accredian

# Navigate into the project
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev

Open:
[http://localhost:3000](http://localhost:3000)

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel
* Push code to GitHub
* Go to (https://vercel.com)
* Import repository
* Click Deploy

 

## 🏗️ Project Structure

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Features.tsx
│   ├── Programs.tsx
│   ├── Universities.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│
└── api/
    └── leads/
        └── route.ts
```

---

## ⚙️ API Integration

### POST `/api/leads`

Used to capture form submissions from CTA section.

#### Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Pvt Ltd"
}
```

#### Response:

```json
{
  "success": true,
  "message": "Lead captured successfully",
  "id": "lead_123456"
}
```

---

### GET `/api/leads`

Returns all captured leads (mock in-memory storage).

---

## 🤖 AI Usage

AI tools (ChatGPT ) were used to assist development:

### Where AI helped:

* Initial UI structure for components
* Tailwind layout suggestions
* API route boilerplate
* Form handling logic
* Toast notification system
* Debugging routing and integration issues

### What I did manually:

* Component architecture decisions
* UI/UX improvements and spacing refinement
* Fixing API routing issues
* Improving responsiveness across devices
* Enhancing interaction design (scroll, animations, states)

### Summary:

AI was used as a development assistant for speed and scaffolding, while all design decisions, architecture, and UX improvements were implemented manually.

---

## 🧠 Approach

### 1. Requirement Analysis

Studied Accredian Enterprise website structure and identified key landing page sections.

### 2. Component-Based Architecture

Built reusable components for scalability and maintainability.

### 3. Mobile-First Design

Designed for mobile first, then optimized for desktop using Tailwind breakpoints.

### 4. Full-Stack Integration

Connected frontend CTA form with Next.js API route for lead capture.

### 5. UX Enhancements

Added:

* Toast notifications
* Loading states
* Smooth scroll navigation
* Active section tracking

### 6. Production Mindset

Focused on building a SaaS-style landing page rather than a static clone.

---

## 🚀 Improvements with More Time

* Replace in-memory storage with PostgreSQL / MongoDB
* Add authentication for admin dashboard
* Create `/admin/leads` dashboard
* Add email notifications (Resend / Nodemailer)
* Integrate analytics (PostHog / Mixpanel)
* Improve animations with Framer Motion
* Add CMS for dynamic content
* Add SEO optimization (Open Graph, schema)
* Add testing (Playwright)

---

## 🧠 Key Highlights

* Full-stack Next.js 14 application
* Real API integration (frontend + backend)
* Production-level UI/UX structure
* Responsive design across devices
* Component-driven architecture
* SaaS-style landing page implementation

---

## 👨‍💻 Author

Built by: YASH 
 
