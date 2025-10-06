"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type Role = "student" | "teacher"

export default function OnboardingPage() {
  const params = useSearchParams()
  const router = useRouter()
  const role = (params.get("role") as Role) || "student"

  // Teacher fields
  const [subject, setSubject] = useState("")
  const [tags, setTags] = useState("")

  // Student fields
  const [dob, setDob] = useState("")
  const [exam, setExam] = useState("")

  const title = useMemo(
    () => (role === "teacher" ? "Complete your Teacher profile" : "Complete your Student profile"),
    [role],
  )

  const handleSubmit = async () => {
    const payload = role === "teacher" ? { role, subject, tags } : { role, dob, exam }

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to save profile")
      // Navigate to dashboard/home
      router.push(role === "teacher" ? "/dashboard/teacher" : "/dashboard/student")
    } catch (e: any) {
      console.log("[v0] Onboarding error:", e?.message)
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">We’ll tailor your experience for Indian Govt job exams.</p>

      {role === "teacher" ? (
        <div className="mt-6 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Primary Subject</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g., Quantitative Aptitude"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Tags (comma separated)</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="reasoning, arithmetic, gk"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Preparing for which exam?</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g., SSC CGL, Banking PO"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="mt-6">
        <Button onClick={handleSubmit} className="w-full">
          Continue
        </Button>
      </div>
    </main>
  )
}
