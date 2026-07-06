"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GitHub, LinkedIn } from "./SocialIcons";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-background relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
        
        {/* Author copyright */}
        <div>
          <p className="text-xs sm:text-sm text-foreground/40 font-light">
            © {new Date().getFullYear()} Nihad K. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-foreground/30 font-light mt-1">
            Designed &amp; Developed with Next.js, Tailwind v4 &amp; Framer Motion.
          </p>
        </div>

        {/* Social shortcut profiles */}
        <div className="flex items-center gap-6 text-foreground/50">
          <a
            href="https://www.linkedin.com/in/nihad-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedIn className="w-5 h-5" />
          </a>
          <a
            href="mailto:nihadkalathil@gmail.com"
            className="hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-xl shadow-brand-purple/20 hover:scale-110 active:scale-95 transition-all z-40 cursor-pointer border border-white/15"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
