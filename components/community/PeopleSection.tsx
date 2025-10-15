"use client";
import Link from "next/link";

import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PeopleSection = () => {
  return (
    <div className="dark:bg-[#3E0D40] bg-[#F5D0F1] rounded-[10px] p-4 mt-4">
      <h3 className="text-lg mb-4 font-medium flex items-center">
        <Users className="mr-2 text-bemingle-pink" /> People
      </h3>
      <div className="space-y-3">
        <Link
          href={""}
          className="flex items-center justify-between bg-white dark:bg-bemingle-dark p-3 rounded-lg"
        >
          <div className="flex items-center">
            <Users className="mr-2" />
            <span>Following</span>
          </div>
          <Badge variant="secondary">24</Badge>
        </Link>
        <Link
          href={""}
          className="flex items-center justify-between bg-white dark:bg-bemingle-dark p-3 rounded-lg"
        >
          <div className="flex items-center">
            <Users className="mr-2" />
            <span>Profile Matches</span>
          </div>
          <Badge variant="secondary">14</Badge>
        </Link>
      </div>
    </div>
  );
};

export default PeopleSection;
