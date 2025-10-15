import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import FaqClientPage from "./FaqClientPage"

export const metadata: Metadata = {
  title: "FAQs | Help for Teachers & Students",
  description: "Find answers about Meritranker’s AI learning tools, teacher features, and government exam preparation support for students of UPSC, SSC, Banking, Railway and more.",
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FaqClientPage />
      <Footer />
    </>
  )
}
