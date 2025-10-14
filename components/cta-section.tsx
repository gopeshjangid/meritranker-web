"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { AnimatedTechParticles } from "./animated-tech-patterns";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-darkBlue text-slate-100 relative overflow-hidden">
      <AnimatedTechParticles particleCount={25} className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/90 to-darkBlue/70 z-[-1]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Zap className="mx-auto h-12 w-12 text-yellow-400 mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">
              Learn, Practice & Rank Smarter
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mx-auto mb-10">
            Join Meritranker - your AI study helper and exam preparation
            partner. Learn smarter, teach smarter, and grow faster with
            Intelligence.
          </p>
          <p className="text-lg md:text-xl text-slate-300 mx-auto mb-10">
            Meritranker is one of the most advanced learning platforms designed
            for both teachers and students, focusing on professional development
            and smarter learning. With powerful AI tools for teachers and
            educators, it helps streamline content creation, automate tasks, and
            enhance classroom engagement.
          </p>
          <p className="text-lg md:text-xl text-slate-300 mx-auto mb-10">
            Students preparing for competitive exams can access high-quality
            study material for students and apply smart study tips to boost
            performance. Teachers can use teacher tools online to manage
            lessons, build quizzes, and track student progress effortlessly.
          </p>
          <p className="text-lg md:text-xl text-slate-300 mx-auto mb-10">
            For those looking to grow their careers, online teaching platforms
            to earn money like Meritranker make it easy to share knowledge,
            build courses, and earn from your expertise. Discover all the key
            features that make Meritranker the perfect blend of technology,
            teaching, and success.
          </p>

          <Button
            asChild
            size="lg"
            className="group relative overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            <Link href="/#students">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <div className="mt-4">
            <Link
              href="/#teachers"
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline"
            >
              Create as a Teacher
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
