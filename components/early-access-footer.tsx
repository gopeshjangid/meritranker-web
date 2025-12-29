"use client"

import Link from "next/link"
import { Mail, Phone, Sparkles } from "lucide-react"

export function EarlyAccessFooter() {
    const phoneNumber = "+91 00000 00000"
    const telLink = "tel:+910000000000"
    const emailAddress = "info@bytechminds.com"
    const mailtoLink = `mailto:${emailAddress}`

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                MeritRanker
                            </h3>
                        </div>
                        <p className="text-sm text-slate-400">
                            India's First AI-Powered Platform for Government Job Exam Educators. Empowering students and teachers to
                            excel in competitive exams.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 group">
                                <Mail className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                <a href={mailtoLink} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    {emailAddress}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Privacy Disclaimer */}
                <div className="border-t border-slate-800 pt-6 mb-6">
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <p className="text-sm text-slate-300 text-center">
                            <strong className="text-white">🔒 Privacy First:</strong> Your contact information is safe with us and will only be used to notify you about our launch. We never share your data with third parties.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-sm text-slate-500">
                        © 2025 Bytech Minds Private Limited
                    </p>
                </div>
            </div>
        </footer>
    )
}
