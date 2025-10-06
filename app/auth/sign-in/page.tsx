"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { createBrowserClient } from "@supabase/ssr"

type Role = "student" | "teacher"

function getSupabaseClient() {
  // singleton-ish in this component scope
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export default function SignInPage() {
  const params = useSearchParams()
  const initialRole = (params.get("role") as Role) || "student"
  const [role, setRole] = useState<Role>(initialRole)
  const router = useRouter()

  const title = useMemo(() => (role === "student" ? "Welcome, Student" : "Welcome, Teacher"), [role])
  const desc = useMemo(
    () =>
      role === "student"
        ? "Sign in to manage notes, practice, and stay updated on all govt exams."
        : "Sign in to create notes, mock tests, and grow your personal brand.",
    [role],
  )

  const handleGoogle = async () => {
    const next = `/auth/onboarding?role=${role}`
    console.log("[v0] UI-only Google sign-in, redirecting to:", next)
    router.push(next)
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <div className="mb-6 inline-flex rounded-full border border-border/60 bg-muted px-3 py-1 text-xs">
        {role === "student" ? "Student Account" : "Teacher Account"}
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>

      <div className="mt-6 flex items-center gap-2">
        <Button variant={role === "student" ? "default" : "outline"} onClick={() => setRole("student")}>
          Student
        </Button>
        <Button variant={role === "teacher" ? "default" : "outline"} onClick={() => setRole("teacher")}>
          Teacher
        </Button>
      </div>

      <div className="mt-6">
        <Button onClick={handleGoogle} className="w-full">
          Continue with Google
        </Button>
      </div>

      {/* fix Terms/Privacy links to match actual routes */}
      <p className="mt-3 text-xs text-muted-foreground">
        By continuing, you agree to our{" "}
        <a className="underline" href="/terms-of-service">
          Terms of Service
        </a>{" "}
        and{" "}
        <a className="underline" href="/privacy-policy">
          Privacy Policy
        </a>
        .
      </p>
    </main>
  )
}
