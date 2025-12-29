"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, BookOpen, GraduationCap, Mail, Phone, User, Loader2, CheckCircle2, AlertCircle, Bell } from "lucide-react"
import { AnimatedCircle } from "./animated-shapes"
import { AnimatedTechLines } from "./animated-tech-patterns"
import { useToast } from "@/hooks/use-toast"
import { event } from "nextjs-google-analytics"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EarlyAccessHero() {
    const [mounted, setMounted] = useState(false)
    const [role, setRole] = useState<"teacher" | "student">("teacher")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        phone: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [showNotifyForm, setShowNotifyForm] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        setMounted(true)
        // Track hero section view
        event("hero_section_viewed", {
            category: "engagement",
            label: "Landing Page Hero"
        })
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

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    const validatePhone = (phone: string) => {
        const re = /^\+?[0-9]{10,15}$/
        return re.test(phone.replace(/[\s-]/g, ""))
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear errors when user types
        if (field === "email") setErrors((prev) => ({ ...prev, email: "" }))
        if (field === "phone") setErrors((prev) => ({ ...prev, phone: "" }))
        
        // Track field interaction
        event("form_field_interaction", {
            category: "engagement",
            label: field,
            role: role
        })
    }

    const handleNotifyClick = () => {
        setShowNotifyForm(true)
        event("notify_button_clicked", {
            category: "engagement",
            label: "Interest Signal"
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation
        let isValid = true
        const newErrors = { email: "", phone: "" }

        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address"
            isValid = false
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number"
            isValid = false
        }

        setErrors(newErrors)

        if (!isValid) {
            event("form_validation_error", {
                category: "form",
                label: "Hero Form",
                role: role
            })
            return
        }

        setIsLoading(true)
        event("signup_start", { method: "hero_form", role })

        try {
            const formspreeEndpoint = "https://formspree.io/f/xblnzpyw"

            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    role,
                    timestamp: new Date().toISOString(),
                    source: 'hero_early_access',
                }),
            })

            if (response.ok) {
                setIsSuccess(true)
                event("signup_complete", { method: "hero_form", role })
                event("early_access_registered", {
                    category: "conversion",
                    label: "Hero Form Success",
                    role: role
                })
                toast({
                    title: "Welcome Aboard! 🎉",
                    description: "You've successfully joined the waitlist!",
                })
            } else {
                throw new Error("Submission failed")
            }
        } catch (error) {
            event("signup_error", { method: "hero_form", role })
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const scrollToSignup = () => {
        const signupSection = document.getElementById("early-access-signup")
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    if (!mounted) {
        return (
            <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white text-center">
                            Create Content Faster & Save Time
                        </h1>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
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
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Hero Content */}
                        <div className="text-center lg:text-left">
                            {/* Badge */}
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 backdrop-blur-sm">
                                    <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                                    <span className="text-sm md:text-base font-medium text-cyan-200">
                                        India's First AI Platform for Govt Exam Educators
                                    </span>
                                </div>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
                                className="text-lg md:text-xl mb-6 text-cyan-200 font-medium"
                            >
                                For YouTube Govt Exam Educators: AI-Powered Mock Tests, Visual Slides & Smart Study Material
                            </motion.p>

                            {/* Launch Date Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-3"
                            >
                                <span className="text-lg font-bold text-yellow-200">
                                    🚀 New Year Launch: 5th Jan 2026
                                </span>
                            </motion.div>

                            {/* Exam Categories */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 text-sm md:text-base"
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
                            <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 text-slate-300">
                                Create high-quality notes, quizzes, and slides in minutes, not hours. Join thousands of educators already transforming their content creation process.
                            </motion.p>

                            {/* Trust Indicators - Moved to bottom of left section */}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-8">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                                        <BookOpen className="h-5 w-5 text-cyan-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white">For Educators</div>
                                        <div className="text-sm">Create Smart Content</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/30">
                                        <GraduationCap className="h-5 w-5 text-purple-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white">For Students</div>
                                        <div className="text-sm">Learn & Practice Smarter</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Early Access Form */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative p-6 md:p-8 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                                {!isSuccess ? (
                                    <div>
                                        {/* Form Header */}
                                        <div className="text-center mb-6">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 mb-4">
                                                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                                                <span className="text-sm font-medium text-cyan-200">Get Early Access</span>
                                            </div>
                                            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-xl p-3 mb-4">
                                                <p className="text-base font-semibold text-yellow-200">
                                                    🎉 <span className="text-white font-bold bg-yellow-600/50 px-2 py-0.5 rounded">50% OFF</span> for the first month!
                                                </p>
                                            </div>
                                        </div>

                                        <Tabs defaultValue="teacher" className="w-full mb-6" onValueChange={(val) => {
                                            setRole(val as "teacher" | "student")
                                            event("role_tab_clicked", {
                                                category: "engagement",
                                                label: val
                                            })
                                        }}>
                                            <TabsList className="grid w-full grid-cols-2 bg-slate-900/50 border border-slate-700">
                                                <TabsTrigger value="teacher" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-400">Teacher</TabsTrigger>
                                                <TabsTrigger value="student" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-slate-400">Student</TabsTrigger>
                                            </TabsList>
                                        </Tabs>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="hero-name" className="text-white text-sm">Full Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                    <Input
                                                        id="hero-name"
                                                        placeholder="John Doe"
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                                        required
                                                        className="pl-10 h-11 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="hero-email" className="text-white text-sm">Email Address</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                    <Input
                                                        id="hero-email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                                        required
                                                        className={`pl-10 h-11 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 ${errors.email ? "border-red-500" : ""}`}
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <p className="text-red-400 text-xs flex items-center mt-1">
                                                        <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="hero-phone" className="text-white text-sm">Phone Number</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                    <Input
                                                        id="hero-phone"
                                                        type="tel"
                                                        placeholder="+91 98765 43210"
                                                        value={formData.phone}
                                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                                        required
                                                        className={`pl-10 h-11 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 ${errors.phone ? "border-red-500" : ""}`}
                                                    />
                                                </div>
                                                {errors.phone && (
                                                    <p className="text-red-400 text-xs flex items-center mt-1">
                                                        <AlertCircle className="h-3 w-3 mr-1" /> {errors.phone}
                                                    </p>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full h-11 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-base font-semibold shadow-lg shadow-cyan-500/25"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Joining...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles className="mr-2 h-4 w-4" />
                                                        Join Waitlist & Claim Offer
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-xs text-center text-slate-500 mt-3">
                                                🔒 We respect your privacy. No spam, just updates.
                                            </p>
                                        </form>

                                        {/* Interest Signal Button */}
                                        <div className="mt-6 pt-6 border-t border-slate-700">
                                            <Button
                                                type="button"
                                                onClick={handleNotifyClick}
                                                variant="outline"
                                                className="w-full h-11 border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 hover:text-white font-semibold"
                                            >
                                                <Bell className="mr-2 h-4 w-4" />
                                                Just Browsing? Notify Me Later
                                            </Button>
                                            {showNotifyForm && (
                                                <p className="text-xs text-center text-green-400 mt-2">
                                                    ✓ We've noted your interest! Join the waitlist above to get updates.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="inline-flex p-6 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                            <CheckCircle2 className="h-12 w-12 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">You're In! 🎉</h3>
                                        <p className="text-base text-slate-300 mb-4">
                                            Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>!
                                        </p>
                                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                                            <p className="text-slate-300 mb-2 text-sm">We've reserved your spot:</p>
                                            <div className="text-xl font-bold text-yellow-400 mb-3">50% OFF First Month</div>
                                            <p className="text-xs text-slate-400">
                                                We'll notify you at <span className="text-white">{formData.email}</span> when we launch.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
