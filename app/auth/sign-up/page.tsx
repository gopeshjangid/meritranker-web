"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

type Role = "student" | "teacher"

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("student")
  const router = useRouter()

  const title = useMemo(() => (role === "student" ? "Join as a Student" : "Join as a Teacher"), [role])
  const desc = useMemo(
    () =>
      role === "student"
        ? "Create your account to practice, track notes, and prepare for govt job exams."
        : "Create your teaching workspace to publish notes, mock tests, and grow your brand.",
    [role],
  )

  const handleGoogle = () => {
    const next = `/auth/onboarding?role=${role}`
    console.log("[v0] UI-only Google sign-up, redirecting to:", next)
    router.push(next)
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <div className="mb-6 inline-flex rounded-full border border-border/60 bg-muted px-3 py-1 text-xs">
        {role === "student" ? "Student Sign Up" : "Teacher Sign Up"}
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

      <p className="mt-4 text-xs text-muted-foreground">
        Already have an account?{" "}
        <a className="underline" href="/auth/sign-in">
          Sign in
        </a>
        .
      </p>
    </main>
  )
}
