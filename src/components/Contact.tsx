"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Download } from "lucide-react";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nihadkalathil@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate API request
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setFormSubmitted(false);
      alert("Thank you for reaching out! Your message was sent successfully.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Get In <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-brand-purple rounded-full mt-4" />
        </div>

        {/* Form and Contact Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 dark:border-white/10 flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Let&apos;s build something amazing together.</h3>
                <p className="text-xs sm:text-sm text-foreground/50 font-light leading-relaxed">
                  I&apos;m currently open to full-time roles, contracts, and collaborations in mobile application engineering. Let me know how I can help bring your ideas to life!
                </p>
              </div>

              {/* Detail Items */}
              <div className="flex flex-col gap-4">
                {/* Email Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 text-brand-blue dark:text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-wide">Email</p>
                    <a href="mailto:nihadkalathil@gmail.com" className="text-sm font-semibold text-foreground hover:underline block truncate">
                      nihadkalathil@gmail.com
                    </a>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-2 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-colors text-foreground cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 text-brand-purple">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-wide">Phone</p>
                    <a href="tel:+919747216500" className="text-sm font-semibold text-foreground hover:underline block">
                      +91 97472 16500
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10 text-brand-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-foreground">
                      Malappuram, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Status and Resume download inside column */}
              <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
                  </span>
                  <span>Active Availability: Open to work</span>
                </div>

                <a
                  href="/resume.pdf"
                  download="Nihad_K_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-foreground/10 hover:bg-foreground/5 text-sm font-medium hover:scale-[1.02] active:scale-95 transition-all text-foreground glass-panel"
                >
                  <Download className="w-4 h-4" />
                  Download Complete CV
                </a>
              </div>
            </div>

            {/* Testimonials Placeholder block */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 dark:border-white/10 text-center cursor-default">
              <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-1">Testimonials</p>
              <p className="text-sm text-foreground/60 italic font-light">
                &ldquo;Recommendations coming soon.&rdquo;
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 w-full">
            <form 
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-3xl border border-white/5 dark:border-white/10 flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/60">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-brand-purple transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/60">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-brand-purple transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-foreground/60">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Enter the subject"
                  className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-brand-purple transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-foreground/60">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or role..."
                  className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:border-brand-purple transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium hover:opacity-90 active:scale-95 disabled:opacity-50 transition-all shadow-lg shadow-brand-purple/20 cursor-pointer"
              >
                {formSubmitted ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
