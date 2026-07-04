"use client";

import { motion } from "framer-motion";
import { Award, Zap, Smartphone, Layers, CheckCircle2, ShieldCheck } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: any;
  desc: string;
  colorClass: string;
}

const STATS: StatItem[] = [
  {
    value: "5+",
    label: "Production Apps",
    icon: Smartphone,
    desc: "Complete Flutter applications launched or maintained across mobile stores.",
    colorClass: "text-brand-purple"
  },
  {
    value: "10+",
    label: "API & Integrations",
    icon: Zap,
    desc: "REST APIs, WebSockets, and third-party SDK systems (including UAE PASS) linked.",
    colorClass: "text-brand-blue"
  },
  {
    value: "2+",
    label: "Years Experience",
    icon: Award,
    desc: "Dedicated professional software experience in Agile workspace structures.",
    colorClass: "text-brand-cyan"
  },
  {
    value: "100%",
    label: "Clean Architecture",
    icon: Layers,
    desc: "Strict adherence to Clean Coding, MVC/Bloc structures, and robust modular testing.",
    colorClass: "text-brand-emerald"
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Key <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Highlight Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 dark:border-white/10 hover:border-brand-purple/20 transition-all flex flex-col justify-between items-center text-center cursor-default"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-foreground/5 border border-foreground/5 text-foreground/50 inline-block mb-4">
                  <stat.icon className="w-6 h-6 text-foreground/80" />
                </div>
                <h3 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${stat.colorClass} mb-2`}>
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold text-foreground mb-2">{stat.label}</h4>
                <p className="text-xs text-foreground/50 font-light leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Qualitative Achievements Callout */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-emerald" /> Operational Highlights
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-foreground/75 font-light">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>**Fintech Security**: Safe session locks, SSL Pinning, and client data sandbox isolation.</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>**Deployment Excellence**: Released 3 separate store distributions with automated Bitbucket/Git pipelines.</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>**Real-time Synchronization**: Maintained continuous map streams utilizing adaptive location polling.</span>
              </div>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-white/5 dark:border-white/10 pt-6 md:pt-0 md:pl-8 flex flex-col gap-3">
            <h4 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-purple" /> Technical Masteries
            </h4>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">
              Demonstrated success in writing modular packages, handling cross-origin web socket connections, customizing native Java/Swift integrations for deep-level APIs, and structuring memory cache indices (Hive / SQLite).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
