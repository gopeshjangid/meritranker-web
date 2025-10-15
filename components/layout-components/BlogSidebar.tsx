"use client";

import { useEffect, useState } from "react";
import PostWidgets from "./PostWidgets";
// import Hashtags from './Hashtags';
import { client } from "@/sanity/client";
import { LATEST_POSTS_QUERY } from "@/sanity/queries";
import { type SanityDocument } from "next-sanity";
import Categories from "./Categories";

const BlogSidebar = () => {
  const [latestBlogs, setLatestBlogs] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await client.fetch<SanityDocument[]>(LATEST_POSTS_QUERY);
      setLatestBlogs(data);
    } catch (err) {
      console.error("Error fetching latest blogs:", err);
      setError("Failed to load latest blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  return (
    <>
      <PostWidgets
        widgetsTitle="Latest Blogs"
        data={latestBlogs}
        loading={loading}
        error={error}
      />
      {/* <Hashtags /> */}
      <Categories />
    </>
  );
};

export default BlogSidebar;
