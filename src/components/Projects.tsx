"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, HelpCircle, ShieldAlert, Award, BookOpen, Layers, X, Cpu, Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLink {
  label: string;
  ios?: string;
  android?: string;
}

interface Project {
  id: string;
  name: string;
  category: "fintech" | "logistics" | "social";
  summary: string;
  role: string;
  problem: string;
  features: string[];
  techs: string[];
  architecture: string;
  challenges: string;
  solutions: string;
  results: string;
  lessons: string;
  links?: ProjectLink[];
}

const PROJECTS: Project[] = [
  {
    id: "ajexpay",
    name: "AJEXPAY",
    category: "fintech",
    summary: "Secure digital wallet and utility payments portal featuring government-grade UAE PASS verification.",
    role: "Associate Flutter Engineer",
    problem: "Financial utility signups experience extreme dropoffs during onboarding due to manual ID uploads and verification processes. Integrating the secure UAE PASS national authentication system was crucial but challenging.",
    features: [
      "Secure UAE PASS single sign-on integration for immediate KYC verification.",
      "Secured transactions logs, invoice bills, and wallet balances.",
      "Local biometrics authentication (Biometric Auth/FaceID).",
      "Google Play Integrity, FIDO2 integration, and SSL Pinning to prevent unauthorized access."
    ],
    techs: ["Flutter", "Dart", "UAE PASS SDK", "FIDO2 SDK", "Play Integrity API", "Firebase Auth", "SQLite", "Local Auth", "Flutter Secure Storage"],
    architecture: "Clean Architecture with Provider state management. Enhanced with FIDO2 Passwordless Auth, Google Play Integrity API, and SSL Pinning.",
    challenges: "Safely processing browser authorization redirect schemes (Deep Links) and securing access tokens across Android and iOS sandbox roots.",
    solutions: "Configured robust Custom URL Schemes and App Links to intercept UAE PASS login callbacks, and saved credentials using encrypted preferences via AES-256.",
    results: "Achieved seamless KYC login reducing onboarding from 12 inputs to a single secure click, leading to a 40% increase in successful wallet setup completions.",
    lessons: "Validating redirect links requires precise deep link path checking to shield apps from URI spoofing vulnerabilities.",
    links: [
      {
        label: "Ajexpay Wallet",
        ios: "https://apps.apple.com/app/id6751193078",
        android: "https://play.google.com/store/apps/details?id=com.ajex.app&hl=en_IN"
      }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Project</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 max-w-md mx-auto gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10 flex flex-col justify-between cursor-pointer hover:border-brand-purple/40 shadow-sm glass-card-hover"
              >
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-cyan text-[10px] font-semibold mb-4 capitalize">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-purple transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed font-light mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.techs.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded bg-foreground/5 text-[9px] text-foreground/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-foreground/5 text-[9px] text-foreground/50">
                        +{project.techs.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple dark:text-brand-cyan group-hover:underline">
                    View Project Case Study
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Details Case Study Modal Backdrop */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="glass-panel w-full max-w-4xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden relative max-h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-cyan text-[10px] font-semibold mb-2 capitalize">
                      {selectedProject.category} Case Study
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{selectedProject.name}</h3>
                    <p className="text-xs text-foreground/50">Role: <span className="font-semibold text-foreground/70">{selectedProject.role}</span></p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground cursor-pointer"
                    aria-label="Close Case Study"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Case Study Details Scrollable Content */}
                <div className="flex-1 overflow-y-auto pr-2 mt-6 flex flex-col gap-6 text-sm">
                  
                  {/* Grid Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Problem Solved</h4>
                        <p className="text-foreground/70 font-light leading-relaxed text-xs sm:text-sm">{selectedProject.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Layers className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Architecture &amp; Design</h4>
                        <p className="text-foreground/70 font-light leading-relaxed text-xs sm:text-sm">{selectedProject.architecture}</p>
                      </div>
                    </div>
                  </div>

                  {/* App Links (Download) */}
                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="glass-panel p-5 rounded-2xl border border-white/5 dark:border-white/10 bg-brand-purple/[0.01] flex flex-col gap-4">
                      <h4 className="font-bold text-foreground text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-brand-purple" /> App Downloads
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {selectedProject.links.map((link, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/5 dark:border-white/5">
                            <span className="font-semibold text-foreground text-xs sm:text-sm">{link.label}</span>
                            <div className="flex gap-2">
                              {link.ios && (
                                <a 
                                  href={link.ios} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black hover:bg-black/80 text-white text-xs font-semibold border border-white/10 transition-colors shadow-sm cursor-pointer"
                                >
                                  <Apple className="w-3.5 h-3.5" />
                                  App Store
                                </a>
                              )}
                              {link.android && (
                                <a 
                                  href={link.android} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                                >
                                  <Play className="w-3.5 h-3.5 fill-current" />
                                  Play Store
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Features */}
                  <div>
                    <h4 className="font-bold text-foreground flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-brand-cyan" /> Key Features Implemented
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 list-disc text-foreground/70 font-light text-xs sm:text-sm">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/5" />

                  {/* Challenges, Solutions, & Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                      <h4 className="font-bold text-red-400 flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wide">
                        <ShieldAlert className="w-4 h-4" /> Challenge
                      </h4>
                      <p className="text-xs text-foreground/70 font-light leading-relaxed">{selectedProject.challenges}</p>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                      <h4 className="font-bold text-brand-cyan flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wide">
                        <Cpu className="w-4 h-4" /> Solution
                      </h4>
                      <p className="text-xs text-foreground/70 font-light leading-relaxed">{selectedProject.solutions}</p>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col gap-2">
                      <h4 className="font-bold text-brand-emerald flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wide">
                        <Award className="w-4 h-4" /> Result
                      </h4>
                      <p className="text-xs text-foreground/70 font-light leading-relaxed">{selectedProject.results}</p>
                    </div>
                  </div>

                  {/* Lessons Learned */}
                  <div className="glass-panel p-5 rounded-2xl border border-white/5 flex gap-3 items-start bg-brand-purple/[0.02]">
                    <BookOpen className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground text-xs sm:text-sm mb-1">Lessons Learned</h4>
                      <p className="text-xs text-foreground/70 font-light leading-relaxed">{selectedProject.lessons}</p>
                    </div>
                  </div>

                  {/* Tech stack badge lists */}
                  <div>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm mb-3">Technologies Leveraged</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-xl bg-foreground/5 border border-foreground/5 text-xs text-foreground/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
