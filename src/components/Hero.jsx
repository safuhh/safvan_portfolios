'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-content > *", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    });

    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-[#020202]"
    >
      {/* 3D Background Placeholder or Empty */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {/* Ballpit removed */}
      </div>

      {/* Main UI Overlay */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <div className="hero-content space-y-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-primary/30" />
            <span className="text-primary font-mono text-[10px] uppercase tracking-[1em] whitespace-nowrap">Full Stack Architect</span>
            <span className="h-px w-8 bg-primary/30" />
          </div>

          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-none tracking-tighter uppercase mb-6 drop-shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            Safvan<span className="text-primary">.</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-mono text-xs uppercase tracking-widest bg-white/[0.02] border border-white/5 py-4 px-10 rounded-full backdrop-blur-xl">
            {["React", "NexJS", "NodeJS", "MongoDB", "Express.js"].map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="hover:text-primary transition-colors cursor-default">{tech}</span>
                {i < 4 && <span className="text-white/10">•</span>}
              </React.Fragment>
            ))}
          </div>

          <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-2xl italic">
            Weaving complex logic into high-performance digital experiences.
            Focused on the intersection of aesthetic precision and system scalability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95 cursor-pointer"
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.01] whitespace-nowrap select-none pointer-events-none tracking-tighter uppercase italic">
        Digital Frontier
      </div>

      {/* Optimized Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-12 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[8px] font-mono text-white uppercase tracking-[0.4em] rotate-90">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202] pointer-events-none z-0" />
    </section>
  );
}
