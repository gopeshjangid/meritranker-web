"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, Phone, Mail, User, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { event } from "nextjs-google-analytics"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function EarlyAccessSignup() {
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
    const { toast } = useToast()

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    const validatePhone = (phone: string) => {
        // Basic validation for 10-digit phone number (Indian context assumed given previous context, but keeping generic enough)
        const re = /^\+?[0-9]{10,15}$/
        return re.test(phone.replace(/[\s-]/g, ""))
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear errors when user types
        if (field === "email") setErrors((prev) => ({ ...prev, email: "" }))
        if (field === "phone") setErrors((prev) => ({ ...prev, phone: "" }))
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

        if (!isValid) return

        setIsLoading(true)
        event("signup_start", { method: "form", role })

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
                    source: 'early_access_waitlist',
                }),
            })

            if (response.ok) {
                setIsSuccess(true)
                event("signup_complete", { method: "form", role })
                toast({
                    title: "Welcome Aboard! 🎉",
                    description: "You've successfully joined the waitlist!",
                })
            } else {
                throw new Error("Submission failed")
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section
            id="early-access-signup"
            className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-2 mb-6">
                            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                            <span className="text-sm font-medium text-cyan-200">Exclusive Early Access Offer</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Join the Waitlist
                            </span>
                        </h2>
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-xl p-4 mb-8 inline-block">
                            <p className="text-lg md:text-xl font-semibold text-yellow-200">
                                🚀 Join now & get <span className="text-white font-bold bg-yellow-600/50 px-2 py-0.5 rounded">50% OFF</span> for the first month!
                            </p>
                            <p className="text-sm text-yellow-400/80 mt-1 uppercase tracking-wider font-medium">Limited Time Offer</p>
                        </div>
                    </div>

                    {/* Signup Card */}
                    <div className="relative p-6 md:p-10 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                        {!isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Tabs defaultValue="teacher" className="w-full mb-8" onValueChange={(val) => setRole(val as "teacher" | "student")}>
                                    <TabsList className="grid w-full grid-cols-2 bg-slate-900/50 border border-slate-700">
                                        <TabsTrigger value="teacher" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-400">Teacher</TabsTrigger>
                                        <TabsTrigger value="student" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-slate-400">Student</TabsTrigger>
                                    </TabsList>
                                </Tabs>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-white">Full Name</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                required
                                                className="pl-10 h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white">Email Address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                required
                                                className={`pl-10 h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 ${errors.email ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-400 text-xs flex items-center mt-1">
                                                <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                required
                                                className={`pl-10 h-12 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 ${errors.phone ? "border-red-500" : ""}`}
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
                                        className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-lg font-semibold shadow-lg shadow-cyan-500/25 mt-4"
                                    >
                                        {isLoading ? (
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        ) : (
                                            "Join Waitlist & Claim Offer"
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-slate-500">
                                        We respect your privacy. No spam, just updates.
                                    </p>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-center py-8"
                            >
                                <div className="inline-flex p-6 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                    <CheckCircle2 className="h-16 w-16 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">You're In! 🎉</h3>
                                <p className="text-lg text-slate-300 mb-6">
                                    Thank you for joining, <span className="text-cyan-400 font-semibold">{formData.name}</span>!
                                </p>
                                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 max-w-sm mx-auto">
                                    <p className="text-slate-300 mb-2">We've reserved your spot and offer:</p>
                                    <div className="text-2xl font-bold text-yellow-400 mb-4">50% OFF First Month</div>
                                    <p className="text-sm text-slate-400">
                                        We'll notify you at <span className="text-white">{formData.email}</span> when we launch.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Privacy Notice */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-center"
                    >
                        <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                            <div className="flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>
                            <p className="text-sm text-slate-400">
                                <strong className="text-white">🔒 Privacy First.</strong> Your contact info is safe with us.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
