"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg bg-cyan-500 hover:bg-cyan-600 text-white w-16 h-16 sm:w-auto sm:h-auto sm:px-6 sm:py-3"
        aria-label="Get Started"
      >
        <Link href="/#early-access-signup">
          {" "}
          {/* Link to early access signup */}
          <Sparkles className="h-6 w-6 sm:mr-2" />
          <span className="hidden sm:inline">Get Started</span>
        </Link>
      </Button>
    </div>
  )
}
