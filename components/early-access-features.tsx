"use client"

import { motion } from "framer-motion"
import {
    FileText,
    Presentation,
    ClipboardList,
    FileCheck,
    Layers,
    Youtube,
    User,
    Palette,
    Users,
    MessageSquare,
    BookOpen,
    Calendar,
    Lightbulb,
    TrendingUp,
    Sparkles,
} from "lucide-react"

const educatorFeatures = [
    {
        icon: FileText,
        title: "AI Study Notes Maker",
        description: "Create notes from text, PDF, images, YouTube videos",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Presentation,
        title: "AI Presentation Builder",
        description: "Beautiful slides with diagrams for your classes",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: FileCheck,
        title: "AI Test & Mock Creator",
        description: "Create practice tests, quizzes & full mock exams",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Layers,
        title: "Test Series Builder",
        description: "Multi-level exam sets for complete preparation",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        icon: Youtube,
        title: "YouTube to Content",
        description: "Turn your videos into notes, slides, and tests",
        gradient: "from-red-500 to-pink-500",
    },
    {
        icon: Palette,
        title: "Free Personal Branding",
        description: "Your own profile, logo, banners & thumbnails",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: TrendingUp,
        title: "Sell Your Content",
        description: "Monetize test series, notes & courses easily",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Sparkles,
        title: "Content Protection",
        description: "Anti-piracy features to protect your hard work",
        gradient: "from-pink-500 to-rose-500",
    },
]

const studentFeatures = [
    {
        icon: MessageSquare,
        title: "AI Doubt Solver",
        description: "Get instant help in math, reasoning, English, GK & current affairs",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: BookOpen,
        title: "Practice by Subject",
        description: "Topic-wise questions organized by difficulty level",
        gradient: "from-green-500 to-teal-500",
    },
    {
        icon: FileCheck,
        title: "Mock Tests & Past Papers",
        description: "Previous year questions with detailed solutions",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: Calendar,
        title: "Daily Updates",
        description: "GK, current affairs & one-liners every day",
        gradient: "from-orange-500 to-yellow-500",
    },
    {
        icon: Lightbulb,
        title: "Step-by-Step Solutions",
        description: "AI explains answers with diagrams in simple language",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: TrendingUp,
        title: "Smart Study from Notes",
        description: "Upload your notes, AI makes them easier to understand",
        gradient: "from-blue-500 to-purple-500",
    },
]

export function EarlyAccessFeatures() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
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

    return (
        <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-2 mb-6">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-200">Powerful Features</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Everything You Need
                        </span>
                        <br />
                        <span className="text-white">To Excel in Your Journey</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Whether you're an educator creating content or a student preparing for exams, we've got you covered
                    </p>
                </motion.div>

                {/* For Educators */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                            <Users className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">For Educators</h3>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {educatorFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                            >
                                <div
                                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* For Students */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">For Students</h3>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {studentFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                            >
                                <div
                                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
