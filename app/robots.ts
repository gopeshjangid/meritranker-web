import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/profile/*",
          "/join",
          "/Help",
          "/about",
          "/not-found",
          "https://meritranker.com/favicon.ico",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}