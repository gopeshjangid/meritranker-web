"use client";
import { Images } from "@/assets/Images";
import useMediaQuery from "@/hooks/useMediaQuery";
// import { TPOST_TYPE } from "@/services";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import UserButton from "../layout-components/UserButton";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import TabMenu from "./TabMenu";
export default function CommunityHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const isMobile = useMediaQuery("(max-width: 639px)");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const type = params.get("type");
  const query = params.get("q") || "";

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const input = document.getElementById("mobile-search-input");
        input?.focus();
      }, 100);
    }
  };

  const onFilterChange = useCallback(
    (value: string) => {
      // const selectedValue = value as TPOST_TYPE & "Explore";
      const newSearchParams = new URLSearchParams(params.toString());

      // if (selectedValue === "Explore") {
      //   newSearchParams.delete("type");
      //   newSearchParams.delete("q");
      // } else {
      //   newSearchParams.set("type", value);
      // }

      const updatedPath = newSearchParams.toString()
        ? `${pathname}?${newSearchParams.toString()}`
        : pathname;

      router.push(updatedPath);
    },
    [params, pathname, router],
  );

  const onSearch = useCallback(
    (searchTerm: string) => {
      const trimmedSearch = searchTerm.trim();
      const newSearchParams = new URLSearchParams(params.toString());

      if (trimmedSearch) {
        newSearchParams.set("q", trimmedSearch);
      } else {
        newSearchParams.delete("q");
      }

      const updatedPath = newSearchParams.toString()
        ? `${pathname}?${newSearchParams.toString()}`
        : pathname;

      router.push(updatedPath);
      setSearchInput("");
      setIsSearchOpen(false);
    },
    [params, pathname, router],
  );

  return (
    <header className="flex flex-col bg-background dark:bg-[#19051A] border-b border-border">
      <div className="flex flex-col w-full max-w-7xl mx-auto ">
        <div className="flex items-center justify-between gap-2 px-3 pt-3 pb-2">
          {isMobile ? (
            isSearchOpen ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSearch(searchInput);
                }}
                className="flex items-center gap-2 w-full"
              >
                <Input
                  id="mobile-search-input"
                  type="text"
                  placeholder="Explore Coupal, search any name..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 h-10 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-3 bg-[#E6E6E6] dark:bg-black"
                  autoFocus
                />
                <div className="flex gap-1">
                  <Button
                    type="submit"
                    className="primary-btn p-2 text-white rounded-lg"
                    aria-label="Submit Search"
                  >
                    <Search className="h-6 w-6" />
                  </Button>
                  <Button
                    type="button"
                    onClick={toggleSearch}
                    className="p-2 primary-btn text-white rounded-lg"
                    aria-label="Close Search"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex-grow max-w-[calc(100%-100px)] md:max-w-[calc(100%-180px)]">
                  <TabMenu
                    selectedTab={type ? type : "Explore"}
                    onFilterChange={onFilterChange}
                  />
                </div>
                <div className="flex items-center gap-2 md:gap-3 ml-2 md:ml-4">
                  <Button
                    onClick={toggleSearch}
                    className="flex justify-center items-center p-2 text-white rounded-lg primary-btn"
                    aria-label="Open Search"
                  >
                    <Search className="h-6 w-6" />
                  </Button>
                  {!isSearchOpen && (
                    <div className="flex items-center gap-2 md:gap-3">
                      <Button
                        onClick={() => router.push("/notifications")}
                        className="justify-center items-center bg-[#FFF0FD] dark:bg-bemingle-gray p-2 rounded-lg hidden md:flex"
                        aria-label="Notifications"
                      >
                        <Image
                          src={Images.bellIc}
                          alt="Notifications"
                          width={24}
                          height={24}
                          className="text-gray-600 dark:text-gray-300"
                        />
                      </Button>
                      <UserButton />
                    </div>
                  )}
                </div>
              </div>
            )
          ) : (
            <div className="flex w-full justify-between items-center">
              <div className="flex w-full justify-center items-center">
                <div className="ml-24">
                  <TabMenu
                    selectedTab={type ? type : "Explore"}
                    onFilterChange={onFilterChange}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => router.push("/notifications")}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  aria-label="Notifications"
                >
                  <Image
                    src={Images.bellIc}
                    alt="Notifications"
                    width={24}
                    height={24}
                  />
                </Button>
                <UserButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
