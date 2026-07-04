"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, Cpu, Sparkles, BookOpen } from "lucide-react";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  icon: any;
  desc: string;
}

const CERTIFICATIONS: Certificate[] = [
  {
    name: "Database Management System",
    issuer: "NPTEL / KTU Affiliated Course",
    date: "2023",
    icon: Database,
    desc: "Rigorous study in relational algebra, SQL optimization, indexing strategies, transaction handling, and schema designs."
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL / KTU Affiliated Course",
    date: "2023",
    icon: Cpu,
    desc: "Core concepts of IoT protocols, sensors architectures, device synchronization, and micro-controller hardware coding."
  },
  {
    name: "Cybersecurity Awareness and Opportunities",
    issuer: "Technical Workshop Seminars",
    date: "2024",
    icon: ShieldCheck,
    desc: "Interactive training on encryption standards, network protection layers, OAuth APIs, and mobile app sandboxing mechanisms."
  },
  {
    name: "Srishti 2024 Tech Summit",
    issuer: "State Level Technology Symposium",
    date: "2024",
    icon: Sparkles,
    desc: "Recognized participant in mobile application prototype competition, presenting novel cross-platform utilities."
  },
  {
    name: "Personality Development & Professional Training",
    issuer: "Career Services KTU",
    date: "2023",
    icon: BookOpen,
    desc: "A year-long training focused on Agile methodologies, technical communication, workplace collaboration, and leadership."
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Certifications &amp; <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10 hover:border-brand-purple/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-brand-blue dark:text-brand-cyan group-hover:scale-110 group-hover:bg-brand-blue/10 transition-transform">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <Award className="w-4 h-4 text-foreground/20 group-hover:text-brand-purple transition-colors" />
                </div>

                <h3 className="font-bold text-base text-foreground leading-snug group-hover:text-brand-purple dark:group-hover:text-brand-cyan transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-foreground/60 mt-1">{cert.issuer}</p>
                <p className="text-xs text-foreground/45 font-light leading-relaxed mt-3">
                  {cert.desc}
                </p>
              </div>

              <div className="border-t border-white/5 mt-5 pt-3 flex justify-between items-center text-[10px] text-foreground/40 font-semibold">
                <span>VERIFIABLE CREDENTIAL</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
