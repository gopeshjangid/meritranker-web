"use client";
import { useAuth } from "@/components/aws-auth/useAuth";
// import { getAnalytics, getInsightsPosts } from '@/services';
// import { TInsights } from '@/services/models';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext<DataContextType | undefined>(undefined);

export interface PostItem {
  id: string;
  title?: string;
  content: string;
  postType?: string;
  slug: string;
  createdAt: string;
  totalComments?: number;
  totalLikes?: number;
}

export interface PostsData {
  trendingPosts: PostItem[];
  relatedPosts: PostItem[];
  latestPosts: PostItem[];
}

export interface DataContextType {
  postsData: PostsData | null;
  // analytics: Partial<TInsights["type"]>;
  loading: boolean;
  refreshData: (postType: string) => Promise<void>;
}

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [postsData, setPostsData] = useState<PostsData | null>(null);
  const { authStatus } = useAuth();
  // const [analytics, setAnalytics] = useState<Partial<TInsights["type"]>>({
  //   totalPosts: 0,
  //   totalUsers: 0,
  //   totalEngagement: 0,
  //   totalPolls: 0,
  // });
  const [loading, setLoading] = useState<boolean>(true);

  // Combined fetch function to load both posts and analytics
  const fetchData = async (postType = "ALL") => {
    setLoading(true);
    try {
      // const [postResponse, analyticsResponse]: [
      //   any,
      //   Partial<TInsights["type"]>,
      // ] = await Promise.all([
      //   getInsightsPosts(
      //     postType,
      //     authStatus === "authenticated" ? "userPool" : "identityPool"
      //   ), // Fetch posts data
      //   getAnalytics(
      //     authStatus === "authenticated" ? "userPool" : "identityPool"
      //   ), // Fetch analytics data
      // ]);
      // setPostsData(postResponse);
      // setAnalytics(analyticsResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  // Fetch data on mount
  useEffect(() => {
    if (authStatus === "configuring") return;
    fetchData();
  }, [authStatus]);

  // Refresh function
  const refreshData = async (postType: string) => {
    await fetchData(postType);
  };

  const value: DataContextType = {
    postsData,
    // analytics,
    loading,
    refreshData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
