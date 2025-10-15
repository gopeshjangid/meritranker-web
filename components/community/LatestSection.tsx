"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDataContext } from "@/lib/context/dataProvider";
import { MessageSquareMore, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import PostTypeChip from "./PostTypeChip";

// Loader Component
const LatestPostsLoader = () => {
  return (
    <div className="flex flex-col space-y-4">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-[#4C1D4E] rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-[#4C1D4E] rounded w-1/2"></div>
          <div className="flex items-center space-x-2 mt-1">
            <div className="h-3 bg-gray-200 dark:bg-[#4C1D4E] rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-[#4C1D4E] rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LatestSection = () => {
  const { postsData, loading } = useDataContext();
  const latestPosts = postsData ? postsData.latestPosts : [];

  return (
    <Card className="border-none shadow-md bg-gradient-purple-to-rose ">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-pink-500" />
            <h3 className="font-semibold text-lg">Latest Posts</h3>
          </div>
          <TrendingUp className="w-4 h-4 text-pink-400" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <LatestPostsLoader />
        ) : latestPosts.length === 0 ? (
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center py-4">
            No latest posts available.
          </p>
        ) : (
          <ul className="space-y-3">
            {latestPosts
              .filter((post) => post?.title && post.title.length > 0)
              .slice(0, 3)
              .map((post, index) => (
                <li
                  key={index}
                  className="group transition-all duration-200 ease-in-out"
                >
                  <Link href={`/post/${post.slug}`} className="block">
                    <div className="p-3 rounded-lg bg-white/40 dark:bg-[#0000001A] hover:bg-white/80 dark:hover:bg-[#0000004D] transition-all duration-200 ease-in-out">
                      <div className="space-y-2">
                        {/* Title */}
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-200">
                          {post.title}
                        </p>

                        {/* Content */}
                        {post.content && (
                          <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2">
                            {post.content.length > 100
                              ? post.content.slice(0, 100) + "..."
                              : post.content}
                          </p>
                        )}

                        {/* Reactions and Post Type */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Star className="w-4 h-4 mr-1 text-pink-600" />
                              {post.totalLikes || 0}
                            </span>
                            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <MessageSquareMore className="w-4 h-4 mr-1 text-pink-500" />
                              {post.totalComments || 0}
                            </span>
                          </div>

                          {post.postType && (
                            <PostTypeChip text={post.postType} />
                          )}
                        </div>
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

export default LatestSection;
