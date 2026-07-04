# Premium Flutter Developer Portfolio

A world-class, premium, and recruiter-optimized personal portfolio website designed for **Nihad K**, a Senior-caliber Flutter and Cross-Platform Mobile Engineer.

Designed with inspiration from top-tier companies like Vercel, Linear, and Stripe. Built using the latest Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Lucide Icons.

---

## Features

-   **Glassmorphic Design System**: Near-black (`#050816`) backdrop, soft gradient meshes, responsive layouts, floating cards, and glowing selection nodes.
-   **Smooth Micro-Animations**: Page load blur reveals, scroll-triggered vertical timeline reveal nodes, scale transitions on card hovers, and floating element properties.
-   **Recruiter-Friendly Case Studies**: Interactive popup modal detailing case studies (Problem, Solution, Challenges, Architecture, Results, and Lessons Learned) for featured projects.
-   **Technical Skills Matrix**: Interactive skill categorizer with progress meters that animate when scrolled into view.
-   **Dark/Light Mode Toggler**: Implemented with seamless Tailwind color transition variables and persistent local storage states.
-   **SEO & Crawler Optimized**: Structured Next.js Metadata configuration (Open Graph details, Twitter cards, meta headers) and embedded **JSON-LD schema scripts** to help search engines catalog the portfolio.
-   **Accessibility & UX**: Clean semantic HTML structure, keyboard-friendly navigation widgets, and interactive copy-email options.

---

## Tech Stack

-   **Core Framework**: Next.js 16 (App Router) & React 19
-   **Language**: TypeScript
-   **Styling & UI**: Tailwind CSS v4
-   **Animations**: Framer Motion
-   **Vector Assets**: Lucide React Icons
-   **State & Utility helpers**: clsx, tailwind-merge, custom React scroll progress tracker hooks

---

## Directory Architecture

```
portfolio/
├── README.md                           <- Build and setup instructions
├── package.json                        <- Scripts and dependencies
├── tailwind.config.ts                  <- Custom theme configurations
├── tsconfig.json                       <- TypeScript configurations
├── next.config.ts                      <- Next.js configuration
├── public/
│   ├── resume.pdf                      <- Place Nihad's PDF CV here
│   └── favicon.ico                     <- Custom favicon
└── src/
    ├── app/
    │   ├── layout.tsx                  <- HTML root, fonts, SEO, and Theme Provider
    │   ├── page.tsx                    <- Home layout combining all sections
    │   ├── globals.css                 <- Custom Tailwind base & scrollbar settings
    │   ├── metadata.ts                 <- Structured metadata and OpenGraph configuration
    │   └── not-found.tsx               <- Premium 404 page
    ├── components/
    │   ├── BackgroundEffect.tsx        <- Glowing mesh and parallax mouse orbs
    │   ├── Navbar.tsx                  <- Floating glassmorphism menu
    │   ├── Hero.tsx                    <- Greeting, title, metrics, resume & contact CTAs
    │   ├── About.tsx                   <- Short narrative, philosophies, and quick facts
    │   ├── Experience.tsx              <- Scroll-linked interactive timeline
    │   ├── Projects.tsx                <- Dynamic category-filtered projects grid
    │   ├── Skills.tsx                  <- Visual categorized skills matrix with progress bars
    │   ├── Certifications.tsx          <- Interactive grid of certified courses
    │   ├── Achievements.tsx            <- Highlights like Apps Released, API integrations, etc.
    │   ├── Contact.tsx                 <- Info badges and contact form with email copy button
    │   └── Footer.tsx                  <- Minimal footer with social profiles & scroll-to-top
    ├── hooks/
    │   └── useScrollProgress.ts        <- Hook to track window scroll percent
    └── lib/
        └── utils.ts                    <- Tailwind CSS classes merging helper
```

---

## Getting Started (Local Development)

To run this portfolio locally on your machine:

1.  **Clone / Enter the Project**:
    Make sure you have Node.js (v18+) and npm installed.
    ```bash
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the development server**:
    ```bash
    npm run dev
    ```

4.  **View locally**:
    Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Deployment & Hosting

This portfolio is optimized for zero-configuration hosting on **Vercel** or **Netlify**:

1.  Push your code to your GitHub repository (see the GitHub integration guide below).
2.  Log in to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) using your GitHub account.
3.  Click "Import Project", select your `Portfolio` repository, and click **Deploy**.
4.  Your site will automatically build, deploy, and configure a public URL.

---

## Store Code in your GitHub Repository

The portfolio code has been fully structured and initialized locally. To push the code to your GitHub repository `https://github.com/nihadkalathil/Portfolio`, execute the following commands in your terminal from inside the project directory:

```bash
# 1. Initialize local Git tracking (if not already initialized)
git init

# 2. Add your GitHub repository as the remote origin
git remote add origin https://github.com/nihadkalathil/Portfolio.git

# 3. Add all local project files to the commit staging area
git add .

# 4. Create your initial project commit
git commit -m "feat: launch premium recruiter-optimized portfolio website"

# 5. Rename the default branch to 'main'
git branch -M main

# 6. Push code to your remote GitHub repository
# (Note: If this is a new private/public repository, you will be prompted for authentication)
git push -u origin main
```
