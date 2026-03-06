import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Base URLs and social handles from environment variables
const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mithupaul.me";
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ANTHELIS";
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/mithu-paul/";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@Mithu_Paul_";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Mithu Paul | Full Stack Developer",
    template: "%s | Mithu Paul",
  },
  description: "Portfolio of Mithu Paul — Full Stack Developer & Cybersecurity Enthusiast. Building secure, AI-powered web applications.",
  keywords: [
    "Mithu Paul",
    "Full Stack Developer",
    "Cybersecurity",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Expert",
    "Brainware University",
    "Brainware University Student",
    "Brainware University CS",
    "Brainware University Placement",
    "Undergraduate Programmes Brainware University",
    "Computer Science Student West Bengal"
  ],
  authors: [{ name: "Mithu Paul", url: defaultUrl }],
  creator: "Mithu Paul",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Mithu Paul | Full Stack Developer",
    description: "Portfolio of Mithu Paul — Full Stack Developer & Cybersecurity Enthusiast. Building secure, AI-powered web applications.",
    siteName: "Mithu Paul Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image in the public folder
        width: 1200,
        height: 630,
        alt: "Mithu Paul Portfolio Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithu Paul | Full Stack Developer",
    description: "Portfolio of Mithu Paul — Full Stack Developer & Cybersecurity Enthusiast.",
    creator: twitterHandle,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mithu Paul",
    url: defaultUrl,
    jobTitle: "Full Stack Developer",
    description: "Portfolio of Mithu Paul — Full Stack Developer & Cybersecurity Enthusiast. Building secure, AI-powered web applications.",
    sameAs: [
      githubUrl,
      linkedinUrl
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Brainware University",
      url: "https://www.brainwareuniversity.ac.in/"
    },
    knowsAbout: ["Web Development", "React", "Next.js", "Cybersecurity", "Node.js", "MongoDB", "Full Stack Engineering"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
