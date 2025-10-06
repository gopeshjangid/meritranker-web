import type React from "react"
import type { Metadata, Viewport } from "next" // Added Viewport
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingActionButton } from "@/components/floating-action-button"
import { Toaster } from "@/components/ui/toaster" // For potential toast notifications

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
})

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eSIM Myanmar",
  url: "https://esim.com.mm",
  logo: "https://esim.com.mm/logo.png", // ENSURE public/logo.png exists (e.g., 112x112px or larger, square or rectangular)
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+959650000172",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["Burmese", "English"],
    },
    {
      "@type": "ContactPoint",
      email: "info@esim.com.mm",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["Burmese", "English"],
    },
  ],
  sameAs: [
    "https://x.com/eSIMMyanmar", // REPLACE with your actual primary social media link
    // "https://www.facebook.com/eSIMMyanmar", // Example: Add other social media links
    // "https://www.linkedin.com/company/esimmyanmar", // Example
  ],
}

// Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL("https://esim.com.mm"), // Crucial for resolving relative image paths
  title: {
    default: "eSIM Myanmar - Instant Digital SIMs for Myanmar | Fast & Easy Activation",
    template: "%s | eSIM Myanmar",
  },
  description:
    "Get your eSIM for Myanmar instantly. Choose from top providers like ATOM, Mytel, Ooredoo. Easy activation with MyanmarPay. Secure, reliable, and GSMA compliant. Contact: 09650000172, info@esim.com.mm.",
  keywords: [
    "eSIM Myanmar",
    "digital SIM Myanmar",
    "Myanmar eSIM",
    "ATOM eSIM",
    "Mytel eSIM",
    "Ooredoo eSIM",
    "MyanmarPay",
    "travel SIM Myanmar",
    "eSIM activation",
    "GSMA compliant eSIM",
  ],
  authors: [{ name: "eSIM Myanmar Team", url: "https://esim.com.mm/about" }],
  creator: "eSIM Myanmar",
  publisher: "eSIM Myanmar",
  openGraph: {
    title: "eSIM Myanmar: Instant Digital SIMs for Seamless Connectivity",
    description:
      "Activate your Myanmar eSIM in minutes. Top providers, secure payments with MyanmarPay. Travel smart with eSIM Myanmar.",
    url: "https://esim.com.mm",
    siteName: "eSIM Myanmar",
    images: [
      {
        url: "/og-image.png", // PLACEHOLDER - Create public/og-image.png (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "eSIM Myanmar - Digital SIM Solutions for Myanmar",
      },
    ],
    locale: "en_US", // Consider 'my_MM' if primary content is Burmese
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eSIM Myanmar - Your Gateway to Instant Digital SIMs in Myanmar",
    description:
      "Get your eSIM for Myanmar now! Fast activation, top providers, and secure payments. Visit esim.com.mm.",
    site: "@eSIMMyanmar", // REPLACE with your actual Twitter handle if available
    creator: "@CreatorHandle", // REPLACE with the content creator's Twitter handle if different
    images: ["/twitter-image.png"], // PLACEHOLDER - Create public/twitter-image.png (e.g., 1200x675px or 1200x600px)
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
  icons: {
    // Favicon configuration
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png", // Place in /public/apple-touch-icon.png
  },
  manifest: "/manifest.json", // Place in /public/manifest.json for PWA capabilities
  alternates: {
    // Canonical URL
    canonical: "https://esim.com.mm",
  },
    generator: 'v0.app'
}

// Viewport configuration for responsiveness and theme color
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Light theme
    { media: "(prefers-color-scheme: dark)", color: "#1E2F3C" }, // Dark theme (your darkBlue)
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Optional: prevent zooming if desired for app-like feel
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {/* Any other critical head elements */}
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased selection:bg-cyan-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Setting dark as default as per site aesthetic
          enableSystem
          disableTransitionOnChange
        >
          {/* global-error.tsx will render its own html/body if it catches an error here */}
          {children}
          <FloatingActionButton />
          <Toaster /> {/* For displaying toast notifications */}
        </ThemeProvider>
      </body>
    </html>
  )
}
