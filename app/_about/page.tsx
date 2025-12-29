import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Zap, Smartphone, Settings, Globe, Shield, CheckCircle, Users, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Merit Ranker",
  description: "Learn more about Merit Ranker, an AI-powered learning platform by Bytech Minds Private Limited for government exam preparation.",
}

const comparisonData = [
  {
    feature: "Content Creation",
    traditional: "Manual creation takes hours",
    meritRanker: "AI generates content in minutes",
    icon: Zap,
  },
  {
    feature: "Personalization",
    traditional: "One-size-fits-all approach",
    meritRanker: "AI adapts to individual learning needs",
    icon: Target,
  },
  {
    feature: "Accessibility",
    traditional: "Limited to classroom hours",
    meritRanker: "24/7 access from anywhere",
    icon: Globe,
  },
  {
    feature: "Assessment",
    traditional: "Manual grading and feedback",
    meritRanker: "Instant AI-powered evaluation",
    icon: CheckCircle,
  },
  {
    feature: "Scalability",
    traditional: "Limited to class size",
    meritRanker: "Unlimited students and content",
    icon: Users,
  },
  {
    feature: "Cost Efficiency",
    traditional: "High operational costs",
    meritRanker: "Affordable digital solution",
    icon: Shield,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-slate-900 text-slate-200">
        <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Merit Ranker</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Merit Ranker is a product of Bytech Minds Private Limited, revolutionizing government exam preparation with AI-powered learning tools.
          </p>
        </div>

          <section id="vision-mission" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-slate-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Eye className="h-10 w-10 text-cyan-400" />
                  <CardTitle className="text-2xl text-cyan-400">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    To empower students and teachers across India with cutting-edge AI technology for government exam
                    preparation, making quality education accessible and personalized for everyone.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-slate-200">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="h-10 w-10 text-cyan-400" />
                  <CardTitle className="text-2xl text-cyan-400">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    To educate and empower Myanmar citizens and visitors about eSIM technology, provide comprehensive
                    compatibility information, offer a wide range of plans from leading carriers, and facilitate the
                    seamless adoption of eSIMs across all major networks in the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="merit-ranker-vs-traditional" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">Merit Ranker vs Traditional Learning</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-cyan-400">Feature</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-slate-300">
                      Traditional SIM
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-cyan-400">eSIM</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                      <td className="py-3 px-4 flex items-center">
                        <item.icon className="h-5 w-5 mr-2 text-cyan-400 opacity-80" />
                        {item.feature}
                      </td>
                      <td className="py-3 px-4">{item.traditional}</td>
                      <td className="py-3 px-4 text-cyan-300">{item.meritRanker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="why-choose-us" className="mb-16">
            <h2 className="text-3xl font-semibold text-white text-center mb-10">Why Choose Merit Ranker?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Learning",
                  description: "Advanced AI creates personalized study materials and assessments.",
                  icon: Zap,
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Complete preparation for UPSC, state PSCs, and other government exams.",
                  icon: Target,
                },
                {
                  title: "Teacher Tools",
                  description: "Empower educators with smart content creation and student management.",
                  icon: Users,
                },
                {
                  title: "Real-time Analytics",
                  description: "Track progress and performance with detailed insights and reports.",
                  icon: CheckCircle,
                },
                {
                  title: "24/7 Accessibility",
                  description: "Learn anytime, anywhere with our mobile-first platform.",
                  icon: Globe,
                },
                {
                  title: "Cost Effective",
                  description: "Affordable education technology for students and institutions.",
                  icon: Shield,
                },
              ].map((item) => (
                <Card key={item.title} className="bg-slate-800 border-slate-700 text-slate-200">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-slate-700 rounded-full inline-block mb-2">
                      <item.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
