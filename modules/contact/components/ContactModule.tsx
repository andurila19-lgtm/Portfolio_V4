"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function ContactModule() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate send email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 items-center gap-8 pt-1 pb-6 lg:grid-cols-12 lg:gap-12">
      {/* Left Column: Headline & Direct Contact (6 Cols) */}
      <div className="space-y-8 lg:col-span-6">
        {/* Badge & Headline */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>OPEN FOR COLLABORATION</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            Let&apos;s start a <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>

          <p className="max-w-lg text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
            Whether you need a complete platform overhaul or a touch of creative magic, I&apos;m ready to engineer your vision into reality.
          </p>
        </div>

        {/* Direct Channel */}
        <div className="space-y-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500">
            DIRECT CHANNEL
          </span>
          <a
            href="mailto:andurila19@gmail.com"
            className="group flex items-center gap-2.5 text-sm font-semibold text-white transition-colors hover:text-cyan-400 sm:text-base"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-colors">
              <FiMail size={16} />
            </div>
            <span>andurila19@gmail.com</span>
          </a>
        </div>

        {/* Social Connect */}
        <div className="space-y-2 pt-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500">
            SOCIAL CONNECT
          </span>
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/andurila19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <BsGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/andurilahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <BsLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/anduril.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <BsInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form Box (6 Cols) */}
      <div className="lg:col-span-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Online green indicator dot */}
          <div className="absolute right-6 top-6 flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-3.5 py-3 text-xs text-white placeholder-slate-600 transition-colors focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email Address"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-3.5 py-3 text-xs text-white placeholder-slate-600 transition-colors focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-1.5 pt-1">
              <label className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project... (min. 20 characters)"
                className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-3.5 py-3 text-xs text-white placeholder-slate-600 transition-colors focus:border-cyan-400 focus:outline-none resize-none"
              />
            </div>

            {/* Send Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-black uppercase tracking-[0.2em] text-black shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 disabled:opacity-70"
              >
                {isSuccess ? (
                  <>
                    <FiCheck size={16} />
                    <span>MESSAGE SENT</span>
                  </>
                ) : isSubmitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <FiSend size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
