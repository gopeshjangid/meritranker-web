"use client";

import React, { useEffect, useState, useCallback } from "react";
import { type SanityDocument } from "next-sanity";
import BlogCard from "./BlogCard";
import Loader from "./Loader";
import { client } from "@/sanity/client";
import { PAGINATED_POSTS_QUERY } from "@/sanity/queries";
import { Button } from "../ui/button";

interface BlogListProps {
  loading?: boolean;
  isBlogDetails?: boolean;
  initialPosts?: SanityDocument[];
}

export default function BlogList({
  isBlogDetails = false,
  initialPosts = [],
  loading,
}: BlogListProps) {
  console.log("initialPosts:", initialPosts);

  const [blogsList, setBlogsList] = useState<SanityDocument[]>(initialPosts);
  const [lastCreatedAt, setLastCreatedAt] = useState<string | null>(
    initialPosts.length
      ? initialPosts[initialPosts.length - 1]._createdAt
      : null
  );
  const [lastId, setLastId] = useState<string | null>(
    initialPosts.length ? initialPosts[initialPosts.length - 1]._id : null
  );
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setBlogsList(initialPosts);
    if (initialPosts.length > 0) {
      setLastCreatedAt(initialPosts[initialPosts.length - 1]._createdAt);
      setLastId(initialPosts[initialPosts.length - 1]._id);
    }
  }, [initialPosts]);

  const fetchBlogs = useCallback(async () => {
    if (allLoaded) return;

    setLoadingMore(true);
    try {
      const queryParams = {
        lastCreatedAt: lastCreatedAt || new Date("1970-01-01").toISOString(),
        lastId: lastId || "",
      };

      const data = await client.fetch<SanityDocument[]>(
        PAGINATED_POSTS_QUERY,
        queryParams
      );

      console.log("lastCreatedAt:", lastCreatedAt);
      console.log("lastId:", lastId);
      console.log("data:", data);

      if (data.length === 0) {
        setAllLoaded(true);
      } else {
        setBlogsList((prevBlogs) => [...prevBlogs, ...data]);
        setLastCreatedAt(data[data.length - 1]._createdAt);
        setLastId(data[data.length - 1]._id);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [lastCreatedAt, lastId, allLoaded]);

  const handleLoadMore = () => {
    if (!loadingMore) {
      fetchBlogs();
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogsList.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center mt-8">
          <Loader />
        </div>
      )}

      {!isBlogDetails && (
        <div className="text-center mt-6">
          {!allLoaded && !loading && (
            <Button
              className="group relative overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              onClick={handleLoadMore}
              disabled={loadingMore}
            >{loadingMore ? "Loading..." : "Load More"}</Button>
          )}

          {allLoaded && !loading && (
            <p className="text-slate-300 dark:text-slate-300 mt-4">
              No more blogs to load
            </p>
          )}
        </div>
      )}
    </>
  );
}
