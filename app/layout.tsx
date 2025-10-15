import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingActionButton } from "@/components/floating-action-button";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// --- SEO Metadata (unchanged) ---
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Merit Ranker",
  url: "https://meritranker.com/",
  logo: "https://meritranker.com/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 9876543210",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "info@meritranker.com",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: ["https://x.com/meritRanker"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://meritranker.com/"),
  title: {
    default:
      "Meritranker | AI Learning App & Teacher Tools for Govt & Competitive Exam Preparation",
    template: "Meritranker - AI-Powered Learning",
  },
  description:
    "Meritranker is an AI learning app for students and teachers. Create smart study materials, prepare for UPSC, government, and competitive exams with free AI tools.",
  keywords: [
    "teacher tools online",
    "ai learning app",
    "ai for govt exam preparation",
    "free ai for upsc preparation",
    "study material for students",
  ],
  openGraph: {
    title:
      "Meritranker – AI Learning App for Students & Smart Teacher Tools for Exam Preparation",
    description:
      "Meritranker empowers students and teachers with AI tools for UPSC, government, and competitive exam preparation. Create and learn from smart study materials for free.",
    url: "https://meritranker.com/",
    siteName: "Merit Ranker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meritranker - AI-Powered Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meritranker - AI-Powered Learning",
    description:
      "Learn, practice, and succeed. Study from top teachers, attempt mocks, and use AI to plan & revise smarter.",
    site: "@meritRanker",
    creator: "@CreatorHandle",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://meritranker.com/",
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E2F3C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// --- Layout ---
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased selection:bg-cyan-500 selection:text-white flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
           {/* --- Navbar at top --- */}
          <Navbar />

          {/* Main page content fills available space */}
          <main className="flex-grow">{children}</main>

          {/* Footer sticks to bottom naturally */}
          <Footer />

          {/* Optional floating button */}
          {/* <FloatingActionButton /> */}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
