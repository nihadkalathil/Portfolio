"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import BackgroundEffect from "@/components/BackgroundEffect";

export default function NotFound() {
  return (
    <>
      <BackgroundEffect />
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 dark:border-white/10 max-w-md w-full flex flex-col items-center gap-6 shadow-2xl"
        >
          <div className="p-4 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
            <AlertCircle className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-foreground mb-2">404</h1>
            <h2 className="text-lg font-bold text-foreground/80 mb-4">Page Not Found</h2>
            <p className="text-sm text-foreground/50 font-light leading-relaxed">
              The screen you are seeking doesn&apos;t exist or has been shifted. Let&apos;s get you back on track.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-brand-purple/20 w-full justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
}
