"use client";

import { cn } from "@/lib/utils";
import { client } from "@/sanity/client";
import { CATEGORIES_QUERY } from "@/sanity/queries";
import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesSkeletonLoader = () => {
  return (
    <ul className="space-y-2">
      {[1, 2, 3, 4].map((item) => (
        <li
          key={item}
          className="h-5 w-3/4 bg-slate-800/40 dark:bg-slate-800/40 rounded"
        ></li>
      ))}
    </ul>
  );
};

const Categories = () => {
  const [blogCategories, setBlogCategories] = useState<SanityDocument[]>([]); // State for categories
  const [loading, setLoading] = useState<boolean>(true); // Loader state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await client.fetch<SanityDocument[]>(CATEGORIES_QUERY);
      setBlogCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return (
    <div className="bg-slate-800/40  rounded-[10px] p-4 shadow-[0_2px_15px_rgba(6,182,212,0.2)]">
      <h3 className="text-lg mb-4 font-medium text-cyan-400">Categories</h3>

      {loading ? (
        <CategoriesSkeletonLoader />
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <ul className="space-y-2">
          <li className="cursor-pointer hover:underline">
            <Link
              href={"/blogs"}
              className={cn(
                "dark:text-slate-300 text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400",
                {
                  "text-cyan-400 dark:text-cyan-400": type === null,
                }
              )}
            >
              All
            </Link>
          </li>
          {blogCategories.map((item) => (
            <li key={item._id} className="cursor-pointer hover:underline">
              <Link
                href={`/blogs?type=${item.slug.current}`}
                className={cn(
                  "dark:text-slate-300 text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400",
                  {
                    "text-cyan-400 dark:text-cyan-400":
                      type === item.slug.current,
                  }
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
