import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nihad K | Premium Flutter & Cross-Platform Mobile App Developer",
  description: "Portfolio of Nihad K, a results-driven Flutter Developer specializing in building high-performance, secure, and scalable mobile apps for Android & iOS with Dart, Firebase, WebSockets, and clean architecture.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Dart Programming",
    "Firebase App Developer",
    "Cross-platform Development",
    "UAE PASS Integration",
    "Fintech App Developer",
    "Kerala Software Engineer"
  ],
  authors: [{ name: "Nihad K" }],
  openGraph: {
    title: "Nihad K | Premium Flutter & Cross-Platform Mobile App Developer",
    description: "Explore Nihad K's mobile portfolio showcasing production-ready Android/iOS apps, secure payment workflows, and real-time WebSocket integrations.",
    url: "https://github.com/nihadkalathil/Portfolio",
    siteName: "Nihad K Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihad K | Premium Flutter & Cross-Platform Mobile App Developer",
    description: "Explore Nihad K's mobile portfolio showcasing production-ready Android/iOS apps, secure payment workflows, and real-time WebSocket integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured JSON-LD schema metadata for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nihad K",
    "jobTitle": "Flutter Developer & Cross-Platform Mobile Engineer",
    "url": "https://www.linkedin.com/in/nihad-k",
    "sameAs": [
      "https://github.com/nihadkalathil",
      "https://www.linkedin.com/in/nihad-k"
    ],
    "knowsAbout": [
      "Flutter",
      "Dart",
      "Android Development",
      "iOS Development",
      "Firebase",
      "RESTful Web APIs",
      "WebSockets",
      "Clean Architecture",
      "Mobile App Security",
      "UAE PASS Integration"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Aufait Technologies Pvt. Ltd."
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050816] text-[#f8fafc] antialiased select-none selection:bg-brand-purple/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
