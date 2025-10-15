"use client"; // Make it a client component for interactivity

import React from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import { ArrowLeft } from "lucide-react"; // Import the ArrowLeft icon

interface BackButtonProps {
  label?: string; // Optional label text
  className?: string; // Optional custom class for styling
}

const BackButton: React.FC<BackButtonProps> = ({
  label = "Back",
  className = "",
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`flex items-center text-cyan-400 dark:text-cyan-400 hover:text-cyan-300 dark:hover:text-cyan-300 ${className}`}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
