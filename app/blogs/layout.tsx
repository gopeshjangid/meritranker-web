import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vivah Rishta Blogs | Indian Marriage & Matchmaking Tips",
  description:
    "Explore expert articles on Indian marriage trends, online rishta tips, relationship advice, and success stories. Discover how an online marriage bureau helps you find your life partner.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
