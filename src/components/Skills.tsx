"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Key, Layers, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Dart (Primary)", level: 95 },
      { name: "HTML & CSS", level: 90 },
      { name: "Kotlin / Java (Android Native)", level: 75 },
      { name: "Swift / Objective-C (iOS Native)", level: 70 }
    ]
  },
  {
    title: "Frameworks & SDKs",
    icon: Smartphone,
    skills: [
      { name: "Flutter SDK", level: 95 },
      { name: "Next.js & React (Web Basics)", level: 65 }
    ]
  },
  {
    title: "Architecture & State Mgmt",
    icon: Layers,
    skills: [
      { name: "Bloc / Cubit Pattern", level: 95 },
      { name: "Provider Pattern", level: 90 },
      { name: "Clean Architecture (Domain/Data/UI)", level: 92 },
      { name: "Riverpod Pattern", level: 80 }
    ]
  },
  {
    title: "Authentication",
    icon: Key,
    skills: [
      { name: "UAE PASS Integration", level: 95 },
      { name: "Firebase Authentication", level: 92 },
      { name: "OAuth 2.0 & Session Tokens", level: 88 }
    ]
  },
  {
    title: "Databases & APIs",
    icon: Database,
    skills: [
      { name: "RESTful Web APIs", level: 95 },
      { name: "SQLite DB & Floor ORM", level: 85 },
      { name: "Hive NoSQL Cache", level: 90 },
      { name: "WebSockets Live Streams", level: 88 }
    ]
  },
  {
    title: "DevOps & Tooling",
    icon: Terminal,
    skills: [
      { name: "Git, GitHub & Bitbucket", level: 90 },
      { name: "Xcode & App Store Deployments", level: 90 },
      { name: "Android Studio & Play Store Deployments", level: 92 },
      { name: "Postman & API Client Testing", level: 95 }
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

                {/* Skills Meters list */}
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs font-semibold text-foreground/75 mb-1.5">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="h-2 w-full rounded-full bg-foreground/10 dark:bg-white/5 overflow-hidden">
                        {/* Fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
                        />
                      </div>
                    </div>
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
