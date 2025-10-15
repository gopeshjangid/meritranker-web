"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/client";
import BlogList from "@/components/layout-components/BlogList";
import BlogSidebar from "@/components/layout-components/BlogSidebar";
import { POSTS_QUERY, CATEGORY_POSTS_QUERY } from "@/sanity/queries";
import { type SanityDocument } from "next-sanity";

/**
 * BlogsPage Component
 * Fetches and displays blog posts based on the query parameter.
 */
export default function BlogsPage() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true); // Initially loading
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // Extract type from query string

  useEffect(() => {
    // Fetch posts based on query parameters
    const fetchPosts = async () => {
      setLoading(true); // Start loading
      const query = type ? CATEGORY_POSTS_QUERY : POSTS_QUERY; // Use filtered or initial query
      const params = type ? { slug: type } : {};

      try {
        const data = await client.fetch<SanityDocument[]>(query, params);
        console.log("query:", query);
        console.log("params:", params);
        console.log("type:", type);
        console.log("response from blogsPage:", data);

        setPosts(data); // Set fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts();
  }, [type]); // Refetch posts when `type` changes

  return (
    <section className="py-[40px]">
      <div className="container grid gap-[20px] grid-cols-12">
        {/* Sidebar Section */}
        <div className="lg:col-span-3 col-span-12 *:mb-[30px] order-2 lg:order-1">
          <BlogSidebar />
        </div>

        {/* Main Content Section */}
        <div className="order-1 rounded-md lg:order-2 lg:col-span-9 col-span-12 sm:px-6">
          <BlogList loading={loading} initialPosts={posts} />
        </div>
      </div>
    </section>
  );
}
