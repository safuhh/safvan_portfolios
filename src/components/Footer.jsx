'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaArrowUp, 
  FaEnvelope, 
  FaCircle 
} from 'react-icons/fa';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/safuhh", color: "hover:text-white" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/safvan-p-8386a524b/", color: "hover:text-blue-400" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/safuhh/", color: "hover:text-pink-500" }
  ];

  if (!mounted) return null;

  return (
    <footer className="relative bg-[#000000] text-white pt-32 pb-16 px-6 overflow-hidden">
      
      {/* --- Ambient Background Effects (No Borders) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] translate-y-1/2" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stichTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Top Section: Status & Brand --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full blur-[4px] animate-pulse" />
                <div className="relative w-2 h-2 bg-cyan-400 rounded-full" />
              </div>
              <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-500 uppercase">Available for Collaboration</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Safvan<span className="text-white/20">.</span>
            </h2>
            <p className="max-w-xs text-zinc-500 font-light text-sm tracking-wide leading-relaxed">
              Design-driven development. Building cinematic digital experiences with technical excellence.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase">Secure Transmission</span>
            <a 
              href="mailto:safvann000@gmail.com"
              className="group relative flex items-center gap-4 text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors">safvann000@gmail.com</span>
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                <FaEnvelope className="text-base group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              </div>
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>

        {/* --- Middle Section: Navigation & Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-16 bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] px-12">
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a 
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-xl text-zinc-500 ${social.color} transition-all duration-300 relative group`}
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl group-hover:scale-125 group-hover:blur-md transition-all opacity-0 group-hover:opacity-100" />
                <span className="relative z-10">{social.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="order-first md:order-none">
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <FaArrowUp className="text-xl relative z-10" />
            </motion.button>
          </div>

          {/* Availability Pulse */}
          <div className="flex items-center gap-4 px-6 py-3 bg-zinc-900/50 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400">Node_Active</span>
          </div>
        </div>

        {/* --- Bottom Section: Metadata --- */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-700">
              &copy; {currentYear} // PORTFOLIO INTELLECTUAL PROPERTY
            </p>
            <p className="text-[8px] font-mono uppercase tracking-[0.4em] text-zinc-800">
              EST. MMXXIV // ALL SYSTEMS OPERATIONAL
            </p>
          </div>

          <div className="flex gap-12">
            {['ENCRYPT', 'PROTOCOL', 'SYSTEM'].map((txt, i) => (
              <a 
                key={txt} 
                href="#"
                className="text-[9px] font-mono uppercase tracking-[0.6em] text-zinc-800 hover:text-white transition-colors"
              >
                {txt}
              </a>
            ))}
          </div>

          <div className="text-right hidden md:block">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-800">
              Handcrafted in <span className="text-zinc-600">Kerala, India</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
