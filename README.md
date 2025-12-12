# Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. The design follows a strict design system with clean layouts, generous spacing, and professional typography.

## Features

- **Home/Landing Page** - Hero section with introduction, featured projects showcase, call-to-action buttons, and brief about section
- **About Page** - Detailed biography, skills/technologies list, work experience timeline, education background
- **Projects Page** - Grid/list view of all projects with filtering by technology/category and search functionality
- **Project Detail Page** - Individual project showcase with images, description, technologies used, live demo and GitHub links, challenges and solutions
- **Contact Page** - Contact form with validation, social media links, email address, downloadable resume option

## Design System

The application strictly follows the design system defined in `design.json`, including:
- Minimalist approach with clean layouts and ample whitespace
- Consistent typography hierarchy
- Custom color palette
- 8px spacing scale
- No border radius (0px throughout)
- Smooth animations and transitions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up the contact form:
   - Sign up for a free account at [Formspree](https://formspree.io) (50 submissions/month on free tier)
   - Create a new form and copy your form endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
   - Copy `.env.example` to `.env.local` and add your Formspree endpoint:
   ```bash
   cp .env.example .env.local
   ```
   - Edit `.env.local` and replace `YOUR_FORM_ID` with your actual Formspree form ID

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, Navigation, Breadcrumbs)
│   ├── modals/           # Modal components (Contact Success, Image Lightbox)
│   └── ui/               # Atomic UI components (Button, Card, Input, etc.)
├── hooks/                # Custom React hooks
│   ├── useContactForm.ts
│   ├── useProjects.ts
│   └── useTheme.ts
├── lib/                  # Utilities and data
│   ├── data.ts          # Mock data (projects, experience, etc.)
│   └── types.ts         # TypeScript type definitions
└── design.json          # Design system configuration
```

## Customization

### Updating Personal Information

Edit `lib/data.ts` to update:
- Personal information (name, title, bio, email, location)
- Social media links
- Resume URL
- Projects
- Work experience
- Education
- Skills

### Design System

The design system is defined in `design.json`. To customize colors, typography, or spacing, update the Tailwind configuration in `tailwind.config.ts` to match your design system.

## Features

- **Dark Mode** - Toggle between light and dark themes (respects system preferences)
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **SEO Optimized** - Proper metadata and semantic HTML
- **Accessible** - WCAG AA compliant with keyboard navigation support
- **Image Optimization** - Next.js Image component for optimized loading
- **Smooth Animations** - Framer Motion for page transitions and interactions

## Build for Production

```bash
npm run build
npm start
```

### Deploying to GitHub Pages

The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Add Formspree Endpoint as GitHub Secret:**
   - Go to your repository Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `FORMSPREE_ENDPOINT`
   - Value: Your Formspree endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
   - Click "Add secret"

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   The workflow will automatically build and deploy your site.

**How it works:**
- The GitHub Actions workflow reads `FORMSPREE_ENDPOINT` from secrets during build
- Next.js embeds it into the JavaScript bundle (since it's `NEXT_PUBLIC_`)
- The endpoint is available in the deployed site, so the contact form works automatically

**Note:** For local development, you still need `.env.local` with `NEXT_PUBLIC_FORMSPREE_ENDPOINT` set.

## License

MIT

