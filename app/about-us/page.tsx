import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | MeritRanker",
  description: "Learn about MeritRanker, India's first AI-powered platform for government exam educators. Our mission is to revolutionize content creation for YouTube educators and empower students with smart study materials.",
  alternates: {
    canonical: "https://meritranker.com/about-us",
  },
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">About </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    MeritRanker
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                  India's first AI-powered platform designed specifically for government exam educators and content creators.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-slate-300 mb-6">
                  At MeritRanker, we believe that quality education should be accessible to everyone. Our mission is to empower YouTube educators and content creators with cutting-edge AI tools that transform the way study materials are created and delivered.
                </p>
                <p className="text-slate-300 mb-6">
                  We understand the challenges educators face in creating comprehensive, engaging content. That's why we've built a platform that automates the tedious parts of content creation, allowing educators to focus on what they do best - teaching and inspiring students.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-4">AI-Powered Content</div>
                    <p className="text-slate-300">
                      Generate high-quality notes, slides, and quizzes in minutes using our advanced AI algorithms trained on educational content.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-purple-400 mb-4">Smart Analytics</div>
                    <p className="text-slate-300">
                      Track student engagement, performance, and learning patterns to optimize your teaching strategies.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-blue-400 mb-4">Seamless Integration</div>
                    <p className="text-slate-300">
                      Connect with popular platforms like YouTube, WhatsApp, and Telegram for effortless content distribution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Our Story</h2>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <p className="text-slate-300 mb-6">
                    MeritRanker was founded by a team of educators and technologists who witnessed firsthand the challenges of creating quality educational content in the digital age. After spending countless hours manually creating study materials, our founders realized there had to be a better way.
                  </p>
                  <p className="text-slate-300 mb-6">
                    Combining their expertise in education and artificial intelligence, they built MeritRanker - a platform that understands the nuances of Indian government exam preparation and the unique needs of both educators and students.
                  </p>
                  <p className="text-slate-300 mb-6">
                    Merit Ranker is a product of Bytech Minds Private Limited.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Be part of the revolution in educational content creation. Join thousands of educators who are already transforming their teaching with MeritRanker.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#early-access-signup"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-200"
                  >
                    Get Early Access
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
