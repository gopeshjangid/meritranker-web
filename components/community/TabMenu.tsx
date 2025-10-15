"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { POST_TYPES } from "@/services";

interface TabMenuProps {
  onFilterChange: (val: string) => void;
  selectedTab: string;
}
export default function TabMenu({ onFilterChange, selectedTab }: TabMenuProps) {
  const handleTabChange = (value: string) => {
    onFilterChange(value);
  };
  return (
    <div className="w-auto flex overflow-x-auto scrollbar-hide rounded-lg ">
      <Tabs
        value={selectedTab}
        onValueChange={handleTabChange}
        className="w-auto  rounded-lg "
      >
        <TabsList>
          {/* {["Explore", ...POST_TYPES].map((key, index) => (
            <TabsTrigger
              value={key}
              key={"keys-" + index}
              className="data-[state=active]:primary-btn data-[state=active]:text-pink-100 dark:data-[state=active]:text-purple-100"
            >
              <span className="whitespace-nowrap">{key}</span>
            </TabsTrigger>
          ))} */}
        </TabsList>
      </Tabs>
    </div>
  );
}
