'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [currentYear, setCurrentYear] = React.useState(null);
  
  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#020202] pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="max-w-md">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">
              Safvan<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest leading-relaxed">
              Architecting high-performance digital solutions with technical precision and creative flair.
            </p>
          </div>

          {/* Contact Quick Link */}
          <div className="group">
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">Initialize Contact</p>
            <a 
              href="mailto:safu99000@gmail.com" 
              className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors duration-300 flex items-center gap-3"
            >
              safu99000@gmail.com
              <FaEnvelope className="text-sm opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Action Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-10 border-y border-white/[0.05]">
          
          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/safuhh" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/safvan-p-8386a524b/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/safuhh/" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-gray-500 hover:text-white transition-all transform hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-center order-first md:order-none">
            <button
              onClick={scrollToTop}
              suppressHydrationWarning
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:bg-primary transition-all duration-500"
            >
              <FaArrowUp className="text-white text-sm group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Availability */}
          <div className="flex items-center md:justify-end gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em]">Open for collaboration</span>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
              &copy; {currentYear || '2024'} // Designed & Developed by Safvan
            </p>
          
          <div className="flex gap-8">
            {['Privacy', 'Legal', 'System'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-700 hover:text-white transition-colors text-[9px] font-mono uppercase tracking-[0.4em]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-primary/20 to-transparent" />
    </footer>
  );
}
