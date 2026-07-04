"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Smartphone, Layers, Flame } from "lucide-react";
import { GitHub, LinkedIn } from "./SocialIcons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
          className="relative w-32 h-32 sm:w-36 sm:h-36 mb-6 rounded-full p-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan shadow-xl shadow-brand-purple/20"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-background/20 dark:border-white/10 bg-foreground/10 relative">
            <img 
              src="/profile.jpg" 
              alt="Nihad K - Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-brand-emerald/20 text-xs font-semibold mb-8 text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Hero Title & Gradient Headings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] sm:leading-[1.05]"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">Nihad K</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 mt-4 tracking-wide"
          >
            Flutter Developer &amp; Cross-Platform Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-foreground/60 mt-6 max-w-2xl leading-relaxed font-light"
          >
            Focused on building high-performance, secure, and production-ready mobile applications for Android and iOS. Specializing in social, matchmaking, and chat applications with MVVM Architecture.
          </motion.p>

          {/* Social Badges and Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-purple/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 font-medium hover:scale-105 active:scale-95 transition-all text-foreground glass-panel"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Nihad_K_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 font-medium hover:scale-105 active:scale-95 transition-all text-foreground glass-panel"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-8 text-foreground/50"
          >
            <a
              href="https://github.com/nihadkalathil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nihad-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:nihadkalathil@gmail.com"
              className="hover:text-foreground transition-colors hover:scale-110"
              aria-label="Email Nihad"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Technology Cards (Visual Showcase) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
          {[
            { icon: Smartphone, label: "Flutter & Dart", desc: "Cross-Platform" },
            { icon: Layers, label: "MVVM Architecture", desc: "Provider / State Mgmt" },
            { icon: Flame, label: "Firebase Services", desc: "Auth, Firestore, FCM" },
            { icon: Mail, label: "REST APIs", desc: "Secure Payments & Maps" },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel p-5 rounded-2xl border border-white/5 dark:border-white/10 flex flex-col items-center text-center group cursor-pointer hover:border-brand-purple/40"
            >
              <div className="p-3 rounded-xl bg-brand-purple/5 border border-brand-purple/10 text-brand-purple mb-4 group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{card.label}</h3>
              <p className="text-xs text-foreground/40 mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
