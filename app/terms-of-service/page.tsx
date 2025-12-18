import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - MeritRanker",
  description:
    "Terms of Service for MeritRanker, an AI platform for Indian government job exam educators and students.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-background text-foreground">
        <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem-4rem)]">
          <article className="prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="gradient-text !mb-2">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              These Terms govern your access to and use of MeritRanker, an AI-powered platform that provides content
              creation tools for educators and smart practice features for students preparing for Indian government job
              examinations. By using the services, you agree to these Terms and to our Privacy Policy.
            </p>
            <h2>Eligibility</h2>
            <p>
              You must be at least 18 years old to use the services. Users under 18 may use the services only with
              verifiable parental consent and supervision.
            </p>
            <h2>Accounts</h2>
            <p>
              Provide accurate, current information and keep your credentials secure. You are responsible for all
              activity under your account. Notify us promptly of any unauthorized access.
            </p>
            <h2>Services and Content</h2>
            <p>
              MeritRanker provides tools to generate notes, slides, quizzes, mock tests, and study recommendations.
              Output may include AI-generated content and is intended to support learning, not to guarantee outcomes or
              facilitate cheating or misconduct in examinations. Educators are responsible for the accuracy and legality
              of materials they publish.
            </p>
            <h2>User Content and License</h2>
            <p>
              You retain ownership of content you create or upload. You grant MeritRanker a non-exclusive, worldwide
              license to host, store, display, and process your content as necessary to provide the services, enforce
              policies, and improve features. You represent that you have the rights to the content you provide.
            </p>
            <h2>Acceptable Use</h2>
            <ul>
              <li>No content that is unlawful, defamatory, discriminatory, or infringing</li>
              <li>No misuse to cheat on exams or circumvent exam rules</li>
              <li>No reverse engineering, scraping, spamming, or introducing malicious code</li>
              <li>No unauthorized access or interference with platform integrity</li>
            </ul>
            <h2>Payments and Subscriptions</h2>
            <p>
              Some features may require payment or a subscription. Prices and offers may change. Payments are processed
              by secure third-party providers; we do not store full payment card details. Where applicable, refunds are
              handled per the plan terms presented at checkout.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              The services, platform software, and trademarks (including “MeritRanker”) are the property of MeritRanker
              or its licensors. Do not use our marks without prior written permission.
            </p>
            <h2>Privacy</h2>
            <p>
              Our processing of personal data is described in the Privacy Policy. By using the services, you consent to
              that processing and acknowledge your rights under applicable laws.
            </p>
            <h2>Disclaimer</h2>
            <p>
              Services are provided on an “as is” and “as available” basis without warranties of any kind. We do not
              warrant that outputs are error-free or that results will meet your expectations.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MeritRanker and its affiliates shall not be liable for indirect,
              incidental, special, consequential, or punitive damages, or loss of data or profits, arising from or
              related to your use of the services.
            </p>
            <h2>Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless MeritRanker from claims arising out of your content, your breach
              of these Terms, or your violation of law or third-party rights.
            </p>
            <h2>Termination</h2>
            <p>
              We may suspend or terminate access if you violate these Terms or misuse the services. You may stop using
              the services at any time. Certain provisions survive termination.
            </p>
            <h2>Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India. Courts in New Delhi shall have jurisdiction. Before filing
              a claim, the parties will attempt good-faith resolution within 30 days of notice.
            </p>
            <h2>Changes</h2>
            <p>
              We may update these Terms to reflect changes to the services or legal requirements. Continued use
              indicates acceptance of the updated Terms.
            </p>
            <h2>Contact</h2>
            <ul>
              <li>
                Email: <a href="mailto:hello@meritranker.com">hello@meritranker.com</a>
              </li>
              <li>
                Contact page: <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
