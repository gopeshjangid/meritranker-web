"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EarlyAccessNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSignup = () => {
        const signupSection = document.getElementById("early-access-signup")
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                MeritRanker
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="#features"
                            className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            How It Works
                        </Link>
                        <Button
                            onClick={scrollToSignup}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                        >
                            Get Early Access
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <Button
                            onClick={scrollToSignup}
                            size="sm"
                            className="mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                        >
                            Join Waitlist
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 inset-x-0 z-40">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950 border-b border-slate-800 shadow-lg">
                        <Link
                            href="#features"
                            className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            How It Works
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
