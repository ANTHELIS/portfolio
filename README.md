# Mithu Paul - Full Stack Developer Portfolio

![Portfolio Preview](/public/og-image.jpg)

A premium, interactive personal portfolio website built with modern web technologies to showcase my projects, technical skills, and professional journey as a Full Stack Developer and Cybersecurity Enthusiast.

**Live Site:** [https://mithupaul.me](https://mithupaul.me)

## 🚀 Features

- **Immersive Design:** Dark-themed, high-contrast aesthetic with ambient lighting, glassmorphism effects, and smooth Framer Motion animations.
- **Scrolly-telling Experience:** Complex scroll animations and transition effects guided by user interaction (GSAP / Framer).
- **Interactive Projects Grid:** Bento-style grid layout with video previews and detailed modal views for each project.
- **Dynamic Timeline:** Visual representation of my Computer Science journey at Brainware University, internships, and milestones.
- **Testimonial Marquee:** Infinite scrolling marquee for client and colleague testimonials.
- **Contact Integration:** Functional contact form integrated with Nodemailer for direct email communication.
- **Vercel Analytics:** Integrated tracking for page views, audience demographics, and performance metrics.
- **Advanced SEO Architecture:** Fully optimized with dynamic OpenGraph tags, JSON-LD structured data (Person & AlumniOf), and automated sitemap/robots generation.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Elements:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Analytics & Deployment:** [Vercel](https://vercel.com/)
- **Video Optimization:** [FFmpeg](https://ffmpeg.org/) (for zero-latency seeking)

## 📂 Project Structure

```
├── src/
│   ├── app/             # Application routes, Layouts, SEO Metadata
│   ├── components/      # Reusable UI components (Hero, Projects, Skills, etc.)
│   └── styles/          # Global styles and Tailwind configuration
├── public/              # Static assets (images, videos, fonts, og-image)
├── .env                 # Environment variables (Emails, URLs)
└── package.json         # Project dependencies and scripts
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ANTHELIS/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your configurations:
   ```env
   # Email configuration for the Contact form
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password

   # SEO & Metadata Configuration
   NEXT_PUBLIC_SITE_URL=https://mithupaul.me
   NEXT_PUBLIC_GITHUB_URL=https://github.com/ANTHELIS
   NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/mithu-paul/
   NEXT_PUBLIC_TWITTER_HANDLE=@Mithu_Paul_
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## � SEO & Analytics Setup

This project uses Next.js Metadata API for dynamic SEO.
- To update the OpenGraph image, replace `public/og-image.jpg` with a `1200x630` image.
- `sitemap.ts` and `robots.ts` automatically generate when building the project based on the `NEXT_PUBLIC_SITE_URL`.
- Vercel Web Analytics is tracked automatically using the `@vercel/analytics` package injected inside the root `layout.tsx`.


## 🤝 Connect With Me

- **LinkedIn:** [Mithu Paul](https://www.linkedin.com/in/mithu-paul/)
- **GitHub:** [@ANTHELIS](https://github.com/ANTHELIS)
- **Portfolio:** [mithupaul.me](https://mithupaul.me)
