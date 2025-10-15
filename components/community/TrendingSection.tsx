"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDataContext } from "@/lib/context/dataProvider";
import { Flame, MessageSquareMore, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import PostTypeChip from "./PostTypeChip";

// Skeleton Loader Component
const TrendingSkeletonLoader = () => {
  return (
    <ul className="space-y-5">
      {[1, 2, 3].map((item) => (
        <li
          key={item}
          className="border-b last:border-b-0 border-gray-200 dark:border-gray-700 pb-3 last:pb-0"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-slate-300 dark:bg-[#4C1D4E] rounded w-3/4"></div>
              <div className="h-6 w-16 bg-slate-300 dark:bg-[#4C1D4E] rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-300 dark:bg-[#4C1D4E] rounded w-full"></div>
              <div className="h-3 bg-slate-300 dark:bg-[#4C1D4E] rounded w-5/6"></div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-3">
                <div className="h-3 w-20 bg-slate-300 dark:bg-[#4C1D4E] rounded"></div>
                <div className="h-3 w-20 bg-slate-300 dark:bg-[#4C1D4E] rounded"></div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const TrendingSection = () => {
  const { postsData, loading } = useDataContext();
  const trendingPosts = postsData ? postsData.trendingPosts : [];
  return (
    <Card className="w-full max-w-md mx-auto border-none shadow-lg rounded-xl bg-gradient-purple-to-rose ">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Flame className="w-6 h-6 text-pink-600" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">
              Trending Now
            </h3>
          </div>
          <TrendingUp className="w-5 h-5 text-pink-500 opacity-70" />
        </div>
      </CardHeader>
      <CardContent className="pt-3">
        {loading ? (
          <TrendingSkeletonLoader />
        ) : trendingPosts.length === 0 ? (
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 py-4">
            No trending posts available.
          </p>
        ) : (
          <ul className="space-y-3">
            {trendingPosts.map((topic, index) => (
              <li
                key={index}
                className="group border-b last:border-b-0 border-pink-500 dark:border-gray-700 pb-3 last:pb-0"
              >
                <Link href={`/post/${topic.slug}`} className="block">
                  <div className="transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-[1.02]">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {topic.title}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                      {topic.content && topic?.content?.length > 100
                        ? topic.content?.slice(0, 100) + "..."
                        : topic.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Star className="w-4 h-4 mr-1 text-pink-600" />
                          {topic.totalLikes || 0}
                        </span>
                        <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <MessageSquareMore className="w-4 h-4 mr-1 text-pink-500" />
                          {topic.totalComments || 0}
                        </span>
                      </div>
                      {topic.postType && <PostTypeChip text={topic.postType} />}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default TrendingSection;
