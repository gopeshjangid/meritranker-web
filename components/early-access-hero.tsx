"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, BookOpen, GraduationCap } from "lucide-react"
import { AnimatedCircle } from "./animated-shapes"
import { AnimatedTechLines } from "./animated-tech-patterns"

export function EarlyAccessHero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    }

    const scrollToSignup = () => {
        const signupSection = document.getElementById("early-access-signup")
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    if (!mounted) {
        return (
            <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                            Create Content Faster & Save Time
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 text-cyan-200">
                            For YouTube Govt Exam Educators: AI-Powered Mock Tests, Visual Slides & Smart Study Material
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            <AnimatedTechLines className="opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
            <AnimatedCircle size={400} color="rgba(6, 182, 212, 0.08)" className="top-20 -left-20 animate-pulse" />
            <AnimatedCircle
                size={500}
                color="rgba(6, 182, 212, 0.05)"
                className="bottom-20 -right-20 animate-pulse"
                delay={1.5}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 backdrop-blur-sm">
                            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                            <span className="text-sm md:text-base font-medium text-cyan-200">
                                India's First AI-Powered Platform for Govt Job Exam Educators
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-white">Create Content Faster &</span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Save Time
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl mb-4 text-cyan-200 font-medium"
                    >
                        For YouTube Govt Exam Educators: AI-Powered Mock Tests, Visual Slides & Smart Study Material
                    </motion.p>

                    {/* Exam Categories */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-10 text-sm md:text-base"
                    >
                        {["UPSC", "SSC", "Banking", "Railway", "State-PSC"].map((exam) => (
                            <div
                                key={exam}
                                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium"
                            >
                                {exam}
                            </div>
                        ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p variants={itemVariants} className="text-lg md:text-xl mb-10 text-slate-300 max-w-3xl mx-auto">
                        Create high-quality notes, quizzes, and slides in minutes, not hours.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <Button
                            onClick={scrollToSignup}
                            size="lg"
                            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 h-auto"
                        >
                            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                            <span className="relative z-10 font-semibold">Get Early Access</span>
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ scaleX: 0, originX: "left" }}
                                whileHover={{ scaleX: 1, originX: "left" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div variants={itemVariants} className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                                <BookOpen className="h-6 w-6 text-cyan-400" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white text-lg">For Educators</div>
                                <div className="text-sm">Create Smart Content</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/30">
                                <GraduationCap className="h-6 w-6 text-purple-400" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white text-lg">For Students</div>
                                <div className="text-sm">Learn & Practice Smarter</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
