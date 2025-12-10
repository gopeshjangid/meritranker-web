import type { Metadata } from "next"
import { EarlyAccessNavbar } from "@/components/early-access-navbar"
import { EarlyAccessHero } from "@/components/early-access-hero"
import { EarlyAccessFeatures } from "@/components/early-access-features"
import { HowItWorksSection } from "@/components/how-it-works-early-access"
import { EarlyAccessSignup } from "@/components/early-access-signup"
import { EarlyAccessFooter } from "@/components/early-access-footer"

export const metadata: Metadata = {
  title: "MeritRanker - India's First AI-Powered Platform for Govt Job Exam Educators | Early Access",
  description:
    "Crack Government & Competitive Exams with AI-Powered Mock Tests & Smart Study Roadmap. UPSC, SSC, Banking, Railway, State-PSC preparation made smarter. Join the waitlist for early access!",
  alternates: {
    canonical: "https://meritranker.com/",
  },
  openGraph: {
    title: "MeritRanker - AI-Powered Exam Preparation Platform | Early Access",
    description:
      "India's First AI-Powered Platform for Govt Job Exam Educators. Mock tests, skill-gap analysis, revision notes & plan: all in one platform.",
    url: "https://meritranker.com/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeritRanker - AI-Powered Exam Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeritRanker - AI-Powered Exam Preparation | Early Access",
    description:
      "Crack Government & Competitive Exams with AI. Join the waitlist for early access!",
    images: ["/twitter-image.png"],
  },
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
