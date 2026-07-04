"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, Compass } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            About <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Two Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Main Story Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              My Journey &amp; Engineering Philosophy
            </h3>
            <p className="text-foreground/75 font-light leading-relaxed">
              I am a passionate **Flutter Developer** who loves transforming complex business goals into fluid, scalable mobile applications. My path began with a solid academic foundation in computer programming, culminating in a **Master of Computer Applications (MCA)**.
            </p>
            <p className="text-foreground/75 font-light leading-relaxed">
              My engineering philosophy revolves around three main tenets: **Clean Architecture**, **Security-First Integration**, and **Seamless User Experience**. I believe a mobile app is not just code—it&apos;s a gateway for users to solve real-world problems. Whether integrating complex government authentication APIs like **UAE PASS** or implementing real-time WebSocket tracking in active logistics networks, I strive to write readable, unit-tested, and performant code.
            </p>
            <p className="text-foreground/75 font-light leading-relaxed">
              At **Aufait Technologies**, I have had the opportunity to build high-stakes applications in fintech, logistics, and client services. I thrive in collaborative Agile teams where code reviews push us to make better systems. When I&apos;m not coding, I keep up with mobile trends, experiment with new libraries, and explore systems engineering concepts.
            </p>
          </motion.div>

          {/* Sidebar Highlights Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Education Box */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4 text-brand-purple">
                <GraduationCap className="w-6 h-6" />
                <h4 className="font-bold text-foreground">Education</h4>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="font-semibold text-sm text-foreground">Master of Computer Applications (MCA)</h5>
                  <p className="text-xs text-foreground/50">APJ Abdul Kalam Technological University, Kerala · 2022 - 2024</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <h5 className="font-semibold text-sm text-foreground">Bachelor of Computer Applications (BCA)</h5>
                  <p className="text-xs text-foreground/50">University of Calicut, Kerala · 2019 - 2022</p>
                </div>
              </div>
            </div>

            {/* Languages Box */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4 text-brand-blue">
                <Globe className="w-5 h-5" />
                <h4 className="font-bold text-foreground">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "English", level: "Fluent" },
                  { name: "Malayalam", level: "Native" },
                  { name: "Tamil", level: "Conversational" },
                  { name: "Arabic", level: "Beginner" },
                  { name: "Hindi", level: "Beginner" },
                ].map((lang) => (
                  <span 
                    key={lang.name}
                    className="px-3 py-1.5 rounded-xl bg-foreground/5 border border-foreground/5 text-xs text-foreground/80 flex flex-col items-center"
                  >
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-[10px] text-foreground/45">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Focus / Philosophy Box */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10">
              <div className="flex items-center gap-3 mb-4 text-brand-cyan">
                <Compass className="w-5 h-5" />
                <h4 className="font-bold text-foreground">Development Pillars</h4>
              </div>
              <ul className="text-xs text-foreground/70 flex flex-col gap-2 list-disc pl-4">
                <li>Strict Separation of Concerns via Clean Architecture (Domain, Data, Presentation layers)</li>
                <li>State management optimized for rendering efficiency (Bloc/Cubit, Riverpod)</li>
                <li>Comprehensive security configurations (OAuth, token storage, SSL pinning)</li>
                <li>CI/CD pipelines for automatic lint, test, and build cycles</li>
              </ul>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
