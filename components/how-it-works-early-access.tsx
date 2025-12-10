"use client"

import { motion } from "framer-motion"
import { UserPlus, LogIn, Smartphone, CheckCircle } from "lucide-react"

const steps = [
    {
        icon: UserPlus,
        title: "Join Free",
        description: "Sign up with your Google account in seconds",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: LogIn,
        title: "Google Login",
        description: "Quick and secure authentication",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Smartphone,
        title: "Add Phone Number",
        description: "We'll notify you when we launch",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: CheckCircle,
        title: "Get Early Access",
        description: "Be the first to experience MeritRanker",
        gradient: "from-orange-500 to-red-500",
    },
]

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-white">How It</span>{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Get started in just a few simple steps and be among the first to experience the future of exam preparation
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connection line for desktop */}
                        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-30" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Step number badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="relative pt-8 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
                                    <div
                                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
