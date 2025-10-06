"use server"

// IMPORTANT: This function requires a Vercel Access Token.
// You would typically store this token as an environment variable (e.g., VERCEL_ACCESS_TOKEN)
// and access it via process.env.VERCEL_ACCESS_TOKEN.
// For security, ensure this token has the minimum necessary permissions.

const VERCEL_API_TOKEN = process.env.VERCEL_ACCESS_TOKEN // This will be undefined as per current setup
const VERCEL_API_BASE_URL = "https://api.vercel.com"

interface VercelProject {
  id: string
  name: string
  framework: string
  updatedAt: number
}

export async function getVercelProjects(): Promise<{
  projects?: VercelProject[]
  error?: string
  needsToken?: boolean
}> {
  if (!VERCEL_API_TOKEN) {
    console.warn("VERCEL_ACCESS_TOKEN is not set. Returning mock data.")
    return {
      error: "VERCEL_ACCESS_TOKEN is not configured on the server.",
      needsToken: true,
      // Returning mock data for demonstration purposes
      projects: [
        { id: "proj_mock1", name: "esim-myanmar-frontend", framework: "nextjs", updatedAt: Date.now() },
        { id: "proj_mock2", name: "esim-myanmar-api", framework: "nodejs", updatedAt: Date.now() - 86400000 },
      ],
    }
  }

  try {
    const response = await fetch(`${VERCEL_API_BASE_URL}/v9/projects`, {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { error: `Failed to fetch Vercel projects: ${response.status} ${errorData.error?.message || ""}` }
    }

    const data = await response.json()
    return { projects: data.projects as VercelProject[] }
  } catch (error) {
    console.error("Error fetching Vercel projects:", error)
    return { error: "An unexpected error occurred while fetching Vercel projects." }
  }
}
