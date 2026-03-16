'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LoadingIntro({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const letterRefs = useRef([]);
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const word = "Digital Creations";
  const letters = word.split("");

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }
      });

      // Initial state
      gsap.set(".panel", { scaleY: 1 });
      gsap.set(letterRefs.current, {
        y: 40,
        opacity: 0,
        filter: "blur(15px)",
      });
      gsap.set(".loader-line", { scaleX: 0 });
      gsap.set(".status-element", { opacity: 0, y: 10 });

      // 1. Initial Sequence
      tl.to(".status-element", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      })
        .to({ val: 0 }, {
          val: 100,
          duration: 2.8,
          ease: "power4.inOut",
          onUpdate: function () {
            setCounter(Math.floor(this.targets()[0].val));
          }
        }, 0.2)

        // 2. Text Reveal (Cinematic Focus)
        .to(letterRefs.current, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: {
            each: 0.05,
            from: "center"
          },
          ease: "expo.out",
        }, 0.6)

        // 3. Spacing/Tracking Expansion
        .fromTo(textRef.current,
          { letterSpacing: "-0.2em" },
          { letterSpacing: "0.4em", duration: 3, ease: "power2.out" },
          0.6
        )

        // 4. Progress Line
        .to(".loader-line", {
          scaleX: 1,
          duration: 2.8,
          ease: "power4.inOut",
        }, 0.2)

        // 5. High-Frequency Micro-Glitch
        .to(textRef.current, {
          skewX: 10,
          duration: 0.05,
          repeat: 1,
          yoyo: true,
          ease: "none"
        }, "+=0.1")
        .to(textRef.current, {
          opacity: 0.5,
          duration: 0.03,
          repeat: 3,
          yoyo: true,
          ease: "none"
        }, "<")

        // 6. Cinematic Exit
        .to(textRef.current, {
          scale: 1.2,
          opacity: 0,
          filter: "blur(20px)",
          duration: 0.8,
          ease: "power4.in"
        }, "+=0.2")
        .to(".panel-top", {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut"
        }, "-=0.4")
        .to(".panel-bottom", {
          yPercent: 100,
          duration: 1.2,
          ease: "expo.inOut"
        }, "<")
        .to(".status-element, .loader-line-container", {
          opacity: 0,
          duration: 0.4,
        }, "-=1");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] contrast-150 brightness-150"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Cinematic Panels */}
      <div className="panel panel-top absolute top-0 left-0 w-full h-[51%] bg-[#080808] border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
      <div className="panel panel-bottom absolute bottom-0 left-0 w-full h-[51%] bg-[#080808] border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          ref={textRef}
          className="flex items-center justify-center"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              className="text-4xl md:text-7xl lg:text-9xl font-black text-white inline-block select-none pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Global Loading Line */}
        <div className="mt-12 w-64 md:w-[28rem] overflow-hidden loader-line-container opacity-20">
          <div className="loader-line h-[1px] bg-white w-full origin-left" />
        </div>
      </div>

      {/* System Metadata */}
      <div className="absolute bottom-12 left-12 z-20 font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 hidden md:block">
        <div className="status-element mb-1">System: Online</div>
        <div className="status-element mb-1">Access: Authorized</div>
        <div className="status-element">Module: Portfolio_v2.0</div>
      </div>

      <div className="absolute bottom-12 right-12 z-20 text-white font-mono text-sm flex flex-col items-end status-element">
        <div className="flex items-center space-x-6 mb-2">
          <span className="uppercase tracking-[0.5em] text-[8px] opacity-40">Loading Sequence</span>
          <span className="w-12 text-right text-lg font-light">{counter}%</span>
        </div>
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/40 animate-pulse" style={{ width: `${counter}%` }} />
        </div>
      </div>

      {/* Subtle Scanline */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-1 bg-white/20 blur-[2px] absolute animate-scan" />
      </div>
    </div>
  );
}
