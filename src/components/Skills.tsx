"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Layers, MapPin, Key } from "lucide-react";

interface SkillItem {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: [
      { name: "Dart" },
      { name: "Flutter SDK" },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    title: "State Management",
    icon: Layers,
    skills: [
      { name: "Provider (production)" },
      { name: "Bloc (working knowledge)" },
      { name: "Riverpod (working knowledge)" }
    ]
  },
  {
    title: "APIs & Authentication",
    icon: Smartphone,
    skills: [
      { name: "REST APIs & JSON" },
      { name: "Token-based & OAuth authentication" },
      { name: "WebSockets" },
      { name: "Deep linking" },
      { name: "Third-party API integration" }
    ]
  },
  {
    title: "Firebase & Storage",
    icon: Database,
    skills: [
      { name: "Firebase Authentication, Firestore & FCM" },
      { name: "Firebase Analytics & Crashlytics" },
      { name: "SQLite & Hive" },
      { name: "SharedPreferences & secure storage" }
    ]
  },
  {
    title: "Mobile Features",
    icon: MapPin,
    skills: [
      { name: "Offline data handling" },
      { name: "Barcode & QR scanning" },
      { name: "Photo capture" },
      { name: "Location tracking & Google Maps" },
      { name: "Responsive UI from Figma" },
      { name: "Mobile app security" }
    ]
  },
  {
    title: "Authentication & Security",
    icon: Key,
    skills: [
      { name: "FIDO2 passwordless authentication" },
      { name: "Google Play Integrity API" },
      { name: "UAE PASS integration" },
      { name: "Firebase Authentication" },
      { name: "OAuth 2.0 & session tokens" },
      { name: "SSL pinning" },
      { name: "Biometric authentication" }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10 hover:border-brand-purple/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple dark:text-brand-cyan">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1.5 rounded-lg bg-foreground/5 border border-foreground/5 text-xs text-foreground/75"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
