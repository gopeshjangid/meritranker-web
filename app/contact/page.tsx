import { ContactForm } from "@/components/contact-form" // Assuming ContactForm is now a named export
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"
import { Mail, GlobeIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | MeritRanker",
  description:
    "Get in touch with MeritRanker for support, inquiries, or partnership opportunities. Email us at support@meritranker.com or info@meritranker.com.",
  openGraph: {
    title: "Contact Us | MeritRanker",
    description: "Reach out to MeritRanker for all your AI learning platform needs and questions.",
    url: "https://meritranker.com/contact",
    siteName: "MeritRanker",
    type: "website",
  },
  alternates: {
    canonical: "https://meritranker.com/contact",
  },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | MeritRanker",
  description:
    "Contact MeritRanker for any inquiries or support regarding our AI-powered learning platform. Reach out to us via our contact form or email.",
  url: "https://meritranker.com/contact",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meritranker.com/contact",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://meritranker.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://meritranker.com/contact",
      },
    ],
  },
}

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Support Email",
      value: "support@meritranker.com",
      href: "mailto:support@meritranker.com",
    },
    {
      icon: Mail,
      label: "Info Email",
      value: "info@meritranker.com",
      href: "mailto:info@meritranker.com",
    },
    {
      icon: GlobeIcon,
      label: "Website",
      value: "meritranker.com",
      href: "https://meritranker.com",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 md:mb-16">
              <Mail className="mx-auto h-16 w-16 text-primary mb-4" />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text mb-4">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
                We're here to help! Whether you have a question about our AI learning platform, need support for exam
                preparation, or want to discuss partnership opportunities, feel free to reach out.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
                <ul className="space-y-4">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start">
                      <detail.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="block font-medium text-foreground">{detail.label}</span>
                        <a
                          href={detail.href}
                          target={detail.label === "Website" || detail.label === "Social" ? "_blank" : undefined}
                          rel={
                            detail.label === "Website" || detail.label === "Social" ? "noopener noreferrer" : undefined
                          }
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
