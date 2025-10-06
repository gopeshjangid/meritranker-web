import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://esim.com.mm"

  const staticRoutes = [
    "", // Homepage
    "/about",
    "/compatibility",
    "/how-it-works",
    "/partners",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/buy-esim", // Assuming this page will exist for the "Buy eSIM" button
  ]

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === "" ? "/" : route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route === "/buy-esim" ? 0.9 : 0.7,
  }))

  // Homepage sections (optional, if you want to explicitly list them)
  const homepageSections = ["/#features", "/#providers", "/#pricing"]
  homepageSections.forEach((section) => {
    // Only add if they are not full pages already listed above
    if (!staticRoutes.includes(section.replace("/#", "/"))) {
      // Check against root path for sections
      sitemapEntries.push({
        url: `${baseUrl}${section}`,
        lastModified: new Date(), // Assuming homepage content updates together
        changeFrequency: "monthly",
        priority: 0.6,
      })
    }
  })

  return sitemapEntries
}
