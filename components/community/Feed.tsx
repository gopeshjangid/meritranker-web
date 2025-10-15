"use client";

import { Button } from "@/components/ui/button";
import useAuthmode from "@/hooks/useAuthmode";
import useMediaQuery from "@/hooks/useMediaQuery";
import { queryClient } from "@/lib/utils";
// import { getPostList } from "@/services";
// import { RecursiveFilterInput } from "@/services/filters";
// import { PostListType, TPost, TPostType } from "@/services/models";
// import { onNewPostSubscribe } from "@/services/subscriptions";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { BadgeMinus, BadgePlus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "../aws-auth/useAuth";
import SearchBar from "../layout-components/SearchBar";
import { AddPostLoader } from "../loaders";
import { PostcardLoader } from "../loaders/components/PostcardLoader";
import AddPost from "../posts/create-post/AddPost";
import NoPostsAvailable from "../posts/NoPostAvailable";
import PostCard from "../posts/post-card/PostCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
const Feed = () => {
  const { userId } = useAuth();
  const params = useSearchParams();
  const type = params.get("type");
  const q = params.get("q");
  const authMode = useAuthmode();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  // const {
  //   status,
  //   data,
  //   isFetching,
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  // } = useInfiniteQuery<{ posts: PostListType[]; nextToken: string | null }>({
  //   queryKey: ["posts", authMode, type, q],
  //   queryFn: async ({
  //     pageParam,
  //   }): Promise<{ posts: PostListType[]; nextToken: string | null }> => {
  //     //@ts-ignore
  //     let filter: RecursiveFilterInput<TPostType> | null = type
  //       ? { postType: { eq: type } }
  //       : null;
  //     if (q) {
  //       filter = !filter
  //         ? { content: { contains: q } }
  //         : { ...filter, content: { contains: q } };
  //     }
  //     return await getPostList(authMode, filter, 10, pageParam as string);
  //   },
  //   initialPageParam: null,
  //   getNextPageParam: (lastPage) => lastPage.nextToken || undefined,
  //   enabled: authMode !== "none",
  //   retry: 1,
  // });

  // useEffect(() => {
  //   if (authMode === "none" || authMode === "identityPool") return;

  //   const subscription = onNewPostSubscribe(
  //     {
  //       authorId: { notContains: userId },
  //     },
  //     (newPost: TPost["type"]) => {
  //       queryClient.setQueryData(
  //         ["posts", authMode],
  //         (
  //           oldData:
  //             | InfiniteData<{
  //                 posts: PostListType[];
  //                 nextToken: string | null;
  //               }>
  //             | undefined
  //         ) => {
  //           if (!oldData) {
  //             return {
  //               pageParams: [undefined],
  //               pages: [
  //                 {
  //                   posts: [newPost],
  //                   nextToken: null,
  //                 },
  //               ],
  //             };
  //           }

  //           return {
  //             ...oldData,
  //             pages: oldData.pages.map((page, index) => {
  //               // Only update the first page to add the new post at the top
  //               if (index === 0) {
  //                 return {
  //                   ...page,
  //                   posts: [newPost, ...page.posts],
  //                 };
  //               } else {
  //                 return page;
  //               }
  //             }),
  //           };
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.log("Error in new post subscription:", error);
  //     },
  //     authMode
  //   );
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [authMode, userId]);
  // console.log("feed data", data);
  return (
    <div className="space-y-4 w-full px-0">
      {/* search bar in feed and create post button to toggle addPost area */}
      {isMobile ? (
        <Button
          className="fixed bottom-4 right-4 bg-opacity-80 primary-btn rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-lg z-50"
          onClick={() => setIsCreatingPost((prev) => !prev)}
        >
          {isCreatingPost ? (
            <BadgeMinus className="transition-transform active:scale-95" />
          ) : (
            <BadgePlus className="transition-transform active:scale-95" />
          )}
        </Button>
      ) : (
        <div className="w-full">
          <div className="flex justify-center items-center gap-1">
            <SearchBar />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="ml-auto primary-btn rounded-lg w-10 p-0 flex-none h-10 m-0"
                    onClick={() => setIsCreatingPost((prev) => !prev)}
                  >
                    {isCreatingPost ? (
                      <BadgeMinus className="transition-transform active:scale-95" />
                    ) : (
                      <BadgePlus className="transition-transform active:scale-95" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isCreatingPost ? "Done" : "Create Expressions"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
      {/* Post creation area */}
      {isCreatingPost && (
        <div className="w-full">
          <Suspense fallback={<AddPostLoader />}>
            <AddPost />
          </Suspense>
        </div>
      )}

      {/* Loading/Error states */}
      {status === "pending" && <PostcardLoader />}

      {/* {!isCreatingPost &&
        (status === "error" ||
          data?.pages.every((page) => page.posts.length === 0)) && (
          <NoPostsAvailable
            isCreatingPost={isCreatingPost}
            setIsCreatingPost={setIsCreatingPost}
          />
        )} */}

      <div className="space-y-4">
        {/* {data?.pages.map((page) =>
          page.posts.map((post) => (
            <PostCard
              key={post.id + "post-"}
              postId={post.id!}
              postTitle={post.title}
              postText={post.content}
              poll={post.poll!}
              postImage={post.image}
              userAvatar={
                post.author?.profileImage ?? "https://github.com/shadcn.png"
              }
              username={post.author?.fullName || "Anonymous"}
              postType={post.postType}
              likes={post.totalLikes || 0}
              comments={post.comments?.items ?? []}
              commentCount={post.totalComments || 0}
              shares={post.totalShares || 0}
              time={post.createdAt}
              isOwnPost={post?.authorId === userId}
              slug={post.slug}
              aiSummary={post.aiSummary}
              isPostDetails={false}
            />
          ))
        )} */}
        <div className="flex justify-center mt-4">
          {/* {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-4 py-2 text-white rounded 
                      bg-gradient-to-br 
                      from-purple-500 via-pink-500 to-rose-500 
                      dark:from-[#ad0da2] dark:via-[#814798] dark:to-[#ce2fda] 
                      hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 
                      dark:hover:from-[#7A12BD] dark:hover:via-[#9A3EE2] dark:hover:to-[#AB42DC]
                      disabled:opacity-50 disabled:cursor-not-allowed 
                      transition-all duration-300 ease-in-out"
            >
              {isFetchingNextPage ? "Loading more..." : "Load More"}
            </button>
          )} */}
        </div>
        {/* {isFetching && !isFetchingNextPage && (
          <div>
            <PostcardLoader />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Feed;
