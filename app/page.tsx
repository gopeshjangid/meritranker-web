import type { Metadata, Viewport } from "next"
import { EarlyAccessNavbar } from "@/components/early-access-navbar"
import { EarlyAccessHero } from "@/components/early-access-hero"
import { EarlyAccessFeatures } from "@/components/early-access-features"
import { HowItWorksSection } from "@/components/how-it-works-early-access"
import { EarlyAccessSignup } from "@/components/early-access-signup"
import { EarlyAccessFooter } from "@/components/early-access-footer"

export const metadata: Metadata = {
  title:
    "Meritranker | YouTube Educators Content Creator Tool & AI Study Material Generator for Teachers",
  description:
    "Meritranker is an AI-powered teacher platform that helps YouTube educators and content creators generate study materials, notes, slides and quizzes with ease. Use our tools to turn your YouTube content into structured learning resources, manage students, create AI study material and grow your teaching reach.",
  alternates: {
    canonical: "https://meritranker.com/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title:
      "Meritranker | YouTube Educators Content Creator Tool & AI Study Material Generator for Teachers",
    description:
      "AI-powered tools for YouTube educators to create study notes, slides, quizzes, and structured learning resources quickly and efficiently.",
    url: "https://meritranker.com/",
    siteName: "meritranker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI exam preparation app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meritranker | YouTube Educators Content Creator Tool & AI Study Material Generator for Teachers",
    description:
      "AI-powered tools for educators to convert YouTube content into notes, slides, and quizzes. Grow your teaching reach with smart study material.",
    images: ["/twitter-image.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-cyan-500 selection:text-white">
      <EarlyAccessNavbar />
      <main className="flex-grow">
        <EarlyAccessHero />
        <EarlyAccessFeatures />
        <HowItWorksSection />
        <EarlyAccessSignup />
      </main>
      <EarlyAccessFooter />
    </div>
  )
}
