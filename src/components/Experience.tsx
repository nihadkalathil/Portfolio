"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
  techs: string[];
}

const EXPERIENCES: Job[] = [
  {
    role: "Associate Software Engineer",
    company: "Aufait Technologies Pvt. Ltd.",
    location: "Kozhikode, Kerala, India",
    duration: "Feb 2025 – Present",
    type: "Full-Time",
    achievements: [
      "Engineered a highly scalable social matchmaking application (Click4Marry) utilizing Cloud Firestore listeners for real-time messaging, secure private albums, and native-level screen capture blocking.",
      "Successfully integrated secure national identity authorization redirect flows (UAE PASS) for frictionless digital wallet verification inside AJEXPAY.",
      "Developed OLO (On-Demand Utility suite), implementing continuous real-time GPS tracking, Google Maps overlays, and background location services.",
      "Optimized offline local synchronization states and data persistence layers using SQLite and Hive cache, improving application speed by up to 25%.",
      "Configured robust security frameworks including FIDO2 integration, Google Play Integrity, biometrics (FaceID/Fingerprint), and deep link scheme protections.",
      "Managed end-to-end publishing pipelines, distribution provisioning, and releases on Apple App Store Connect and Google Play Console.",
      "Collaborated in Agile teams, adopting MVVM Architecture paired with Provider state management to write clean, maintainable, and modular codebases."
    ],
    techs: ["Flutter", "Dart", "Firebase", "WebSockets", "Google Maps API", "UAE PASS SDK", "FIDO2 SDK", "Play Integrity API", "SQLite", "Hive Cache", "Provider", "Git", "Xcode", "Android Studio"]
  },
  {
    role: "Flutter Intern",
    company: "Aufait Technologies Pvt. Ltd.",
    location: "Kozhikode, Kerala, India",
    duration: "Aug 2024 – Feb 2025",
    type: "Internship",
    achievements: [
      "Assisted senior engineers in prototyping, drafting modular widgets, and integrating backend REST endpoints into core views.",
      "Developed cross-platform responsive screens supporting various screen dimensions and aspect ratios across Android and iOS devices.",
      "Debugged local database states, state management variables (Provider), and HTTP errors, resolving 50+ user-reported layout and data errors.",
      "Wrote structured unit and widget test cases, achieving a 75% coverage rate for critical business validation modules.",
      "Participated in daily standups, code walk-throughs, and collaborative git work branches in Bitbucket and GitHub environments."
    ],
    techs: ["Flutter", "Dart", "RESTful APIs", "Firebase", "Git", "Provider State Management", "Android Studio", "Postman"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-foreground/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Work <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (on desktop, left on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 dark:bg-white/10 -translate-x-1/2" />

          {/* Jobs loop */}
          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={job.role + job.duration} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-background border-[4px] border-brand-purple dark:border-brand-cyan -translate-x-1/2 z-20 shadow-md" />

                  {/* Left / Right Card Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                      className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 dark:border-white/10 relative hover:border-brand-purple/20 transition-all shadow-md group"
                    >
                      {/* Job Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple dark:text-brand-cyan text-[10px] font-semibold mb-2">
                            {job.type}
                          </span>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-brand-purple dark:group-hover:text-brand-cyan transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-sm font-semibold text-foreground/80">{job.company}</p>
                          <p className="text-xs text-foreground/40">{job.location}</p>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{job.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements Bullets */}
                      <ul className="flex flex-col gap-2.5 mb-6">
                        {job.achievements.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/5 dark:border-white/5">
                        {job.techs.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 rounded-lg bg-foreground/5 border border-foreground/5 text-[10px] text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for layout balancing on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
