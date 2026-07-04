"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Dynamic Ambient Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Glowing Orb 1: Blue-purple */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-brand-purple/20 dark:bg-brand-purple/10 blur-[80px] sm:blur-[120px]"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "15%",
        }}
      />

      {/* Floating Glowing Orb 2: Cyan-blue */}
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full bg-brand-cyan/20 dark:bg-brand-cyan/10 blur-[80px] sm:blur-[120px]"
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          bottom: "15%",
          right: "10%",
        }}
      />

      {/* Floating Glowing Orb 3: Emerald accent */}
      <motion.div
        className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full bg-brand-emerald/10 dark:bg-brand-emerald/5 blur-[80px] sm:blur-[100px]"
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 30, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          top: "45%",
          right: "30%",
        }}
      />

      {/* Interactive spotlight following the cursor (subtle desktop only) */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full bg-brand-blue/5 dark:bg-brand-blue/[0.03] blur-[150px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}
