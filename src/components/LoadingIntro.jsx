'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
  "INITIALIZING NEURAL INTERFACE...",
  "MAPPING DIGITAL FRONTIER...",
  "SYNCHRONIZING CORE MODULES...",
  "OPTIMIZING SPATIAL RENDERING...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "SYSTEMS ONLINE."
];

export default function LoadingIntro({ onComplete }) {
  const containerRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: "expo.inOut",
            onComplete: () => {
              setIsVisible(false);
              if (onComplete) onComplete();
            }
          });
        }
      });

      // 1. Initial State
      gsap.set(".logo-reveal", { y: 100, opacity: 0 });
      gsap.set(".scanner-line", { scaleX: 0, opacity: 0 });
      gsap.set(".glitch-char", { opacity: 0, scale: 0.8 });
      gsap.set(".meta-block", { opacity: 0, x: -20 });

      tl
        // 2. The Power On (Flicker)
        .to(containerRef.current, {
            backgroundColor: "#000000",
            duration: 0.1
        })
        .to(".scanner-line", {
            scaleX: 1,
            opacity: 0.8,
            duration: 1.2,
            ease: "expo.inOut"
        })
        .to(".scanner-line", {
            top: "100%",
            duration: 2.5,
            ease: "none"
        }, "-=0.2")

        // 3. Status Cycle
        .to({ val: 0 }, {
            val: STATUS_MESSAGES.length - 1,
            duration: 4,
            ease: "none",
            onUpdate: function() {
                setStatusIndex(Math.floor(this.targets()[0].val));
            }
        }, 0.5)

        // 4. Percentage Counter
        .to({ val: 0 }, {
          val: 100,
          duration: 4.5,
          ease: "power2.inOut",
          onUpdate: function() {
            setCounter(Math.floor(this.targets()[0].val));
          }
        }, 0.5)

        // 5. Letter Reveal (Glitchy & Smooth)
        .to(".glitch-char", {
            opacity: 1,
            scale: 1,
            duration: 0.05,
            stagger: {
                amount: 0.8,
                from: "random"
            },
            ease: "power4.out"
        }, "-=3.5")
        .to(".glitch-char", {
            color: "#ffffff",
            textShadow: "0 0 20px rgba(255,255,255,0.8)",
            duration: 0.5,
            stagger: 0.1
        }, "-=2")

        // 6. Meta Reveal
        .to(".meta-block", {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=3")

        // 7. Exit Burst
        .to(".scanner-line", {
            opacity: 0,
            duration: 0.5
        })
        .to(".glitch-char", {
            letterSpacing: "2em",
            opacity: 0,
            filter: "blur(20px)",
            duration: 1.5,
            ease: "expo.inOut"
        }, "-=0.5")
        .to(".glow-aura", {
            scale: 4,
            opacity: 0,
            duration: 2,
            ease: "expo.inOut"
        }, "-=1.5");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden font-mono selection:bg-none"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                 backgroundSize: '100px 100px'
             }} 
        />
        
        {/* Radial Aura Glow */}
        <div className="glow-aura absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[120px]" />
        
        {/* Moving Scanner Line */}
        <div className="scanner-line absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] z-50" />
      </div>

      {/* Main UI Interface */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center">
        
        {/* Top Left: System Architecture */}
        <div className="meta-block absolute top-12 left-12 hidden md:flex flex-col gap-1">
            <span className="text-[8px] text-zinc-600 tracking-[0.4em] uppercase">Architecture</span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase">NX_CORE_v2.0</span>
            <div className="w-24 h-px bg-white/10 mt-2" />
        </div>

        {/* Top Right: Clock/Time */}
        <div className="meta-block absolute top-12 right-12 hidden md:flex flex-col items-end gap-1 text-right">
            <span className="text-[8px] text-zinc-600 tracking-[0.4em] uppercase">Local Status</span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase">NODE_ACTIVE</span>
            <div className="flex gap-1 mt-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
            </div>
        </div>

        {/* Center: Hero Reveal */}
        <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-1 md:gap-4 overflow-hidden">
                {"WELCOME".split("").map((char, i) => (
                    <span key={i} className="glitch-char text-6xl md:text-[10rem] font-bold tracking-tighter text-white/10 leading-none">
                        {char}
                    </span>
                ))}
            </div>

            {/* Status & Loader */}
            <div className="flex flex-col items-center gap-6 mt-12">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={statusIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="text-[9px] md:text-[11px] text-cyan-400/60 uppercase tracking-[0.6em] font-light text-center h-4"
                    >
                        {STATUS_MESSAGES[statusIndex]}
                    </motion.p>
                </AnimatePresence>

                {/* Counter & Progress bar */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-2xl md:text-3xl font-light text-white/80 tracking-tighter tabular-nums antialiased">
                        {counter?.toString().padStart(2, '0')}<span className="text-[10px] opacity-20 ml-1">%</span>
                    </span>
                    <div className="w-48 md:w-64 h-[2px] bg-white/5 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-cyan-400"
                            style={{ width: `${counter}%` }}
                        />
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Left: Coordinates */}
        <div className="meta-block absolute bottom-12 left-12 hidden md:flex flex-col gap-1">
            <span className="text-[8px] text-zinc-600 tracking-[0.4em] uppercase">Coordinates</span>
            <span className="text-[9px] text-white/30 tracking-widest font-mono">LAT_28.6139 | LON_77.2090</span>
        </div>

        {/* Bottom Right: Digital Signature */}
        <div className="meta-block absolute bottom-12 right-12 hidden md:flex flex-col items-end text-right">
            <span className="text-[8px] text-zinc-600 tracking-[0.4em] uppercase">Legal</span>
            <span className="text-[9px] text-white/30 tracking-widest uppercase">© MMXXVI PORTFOLIO OS</span>
        </div>
      </div>

      {/* Film Grain & Overlay Texture */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stichTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      
      {/* Global Vignette */}
      <div className="absolute inset-0 z-40 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)] bg-gradient-to-t from-black/80 via-transparent to-black/80" />

      {/* Floating Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white/10 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "-30%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    </div>
  );
}
