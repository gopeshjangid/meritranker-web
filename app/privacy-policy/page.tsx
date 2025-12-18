import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - MeritRanker",
  description:
    "Privacy Policy for MeritRanker, an AI platform for Indian government job exam educators and students. Learn how we collect, use, and protect your data under India's DPDP Act.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-background text-foreground">
        <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem-4rem)]">
          <article className="prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="gradient-text !mb-2">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              MeritRanker is an AI-powered platform that helps educators create study materials, notes, slides, quizzes,
              and practice tests for Indian government job examinations, and enables students to study smarter and
              practice faster. We respect your privacy and process personal data in line with the Digital Personal Data
              Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000, and the SPDI Rules, 2011.
            </p>
            <h2>Scope</h2>
            <p>
              This policy covers how we collect, use, share, store, and protect personal data when you access or use
              MeritRanker through our website or services, including educator tools and student practice features.
            </p>
            <h2>Data We Collect</h2>
            <h3>Account and Profile</h3>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Educator profile details such as subjects, bio, branding information, social handles</li>
              <li>Student preferences, exam targets, and optional demographic details</li>
            </ul>
            <h3>Content and Activity</h3>
            <ul>
              <li>Notes, slides, quizzes, mock tests, and other materials you create or upload</li>
              <li>Practice attempts, scores, solutions viewed, feedback, and progress</li>
              <li>Support communications and feedback provided to us</li>
            </ul>
            <h3>Technical and Usage</h3>
            <ul>
              <li>Device, browser, and log information including IP address and timestamps</li>
              <li>Cookie identifiers and analytics about feature usage</li>
              <li>Payment metadata processed by trusted payment partners; we do not store full card details</li>
            </ul>
            <h2>How We Use Data</h2>
            <ul>
              <li>Provide, personalize, and improve educator tools and student practice features</li>
              <li>Generate AI-based content and recommendations</li>
              <li>Enable account management, authentication, and security</li>
              <li>Communicate service updates, alerts, and marketing (with opt-out)</li>
              <li>Debug, prevent fraud, and ensure platform integrity</li>
              <li>Comply with applicable laws and respond to lawful requests</li>
            </ul>
            <h2>Lawful Basis and Consent</h2>
            <p>
              We process personal data primarily on the basis of your consent and to perform the services you request.
              You may withdraw consent at any time, which may affect your ability to use certain features.
            </p>
            <h2>Children</h2>
            <p>
              MeritRanker is not directed to children under 18. If a user is under 18, use requires verifiable parental
              consent. We do not engage in tracking or targeted advertising directed at children, and we limit
              processing to what is necessary to provide core study features.
            </p>
            <h2>Sharing and Disclosure</h2>
            <ul>
              <li>Service providers for hosting, analytics, email, authentication, and payments</li>
              <li>Anti-fraud and security partners to protect accounts and content</li>
              <li>Law enforcement or regulators when required by law</li>
            </ul>
            <p>We do not sell personal data.</p>
            <h2>International Transfers</h2>
            <p>
              Data may be processed in India or other jurisdictions by our service providers. Where applicable, we
              require contractual safeguards and comply with the DPDP Act including any government notifications on
              restricted transfers.
            </p>
            <h2>Retention</h2>
            <p>
              We retain personal data for as long as needed to provide the services, meet legal obligations, and resolve
              disputes. Educators may delete their content, and users can request deletion of their accounts subject to
              lawful retention requirements.
            </p>
            <h2>Security</h2>
            <p>
              We use reasonable technical and organizational measures including encryption in transit, access controls,
              and secure infrastructure. No system is perfectly secure; report suspected incidents to the contacts
              below.
            </p>
            <h2>Your Rights</h2>
            <p>
              Subject to the DPDP Act, you may request access, correction, updating, or deletion of your personal data,
              withdraw consent, and raise grievances. You may also nominate another person to exercise rights in case of
              incapacity.
            </p>
            <h2>Cookies and Analytics</h2>
            <p>
              We use essential cookies for core functionality and analytics cookies to understand usage. You can manage
              preferences via browser settings. Some features may not function without essential cookies.
            </p>
            <h2>Grievance Officer</h2>
            <p>
              Grievance Officer: MeritRanker Support. Contact:{" "}
              <a href="mailto:privacy@meritranker.com">privacy@meritranker.com</a>. We aim to acknowledge and resolve
              grievances within 30 days.
            </p>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy to reflect changes to our practices or legal requirements. Continued use of the
              services after changes signifies acceptance.
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
