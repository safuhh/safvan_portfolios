'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Vyntra E-Commerce",
    description: "Premium full-stack shopping with secure payments and elite admin dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/safuhh/ecom-frontend",
    live: "https://vyntra-dqdt.vercel.app/"
  },
  {
    title: "Zoelume Streaming",
    description: "High-fidelity cinematic interface for seamless movie discovery and rendering.",
    tech: ["Next.js", "Json", "Tailwind"],
    github: "https://github.com/safuhh/Zoelume",
    live: "#"
  },
  {
    title: "Chocovera",
    description: "Digital storefront focused on premium storytelling for luxury chocolate lovers.",
    tech: ["React.js", "Json", "Tailwind"],
    github: "https://github.com/safuhh/choco",
    live: "https://choco-eight.vercel.app/"
  }
];

export default function Projects() {
  const containerRef = useRef();

  useGSAP(() => {
    // Header Reveal
    gsap.from(".header-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header-text",
        start: "top 90%"
      }
    });

    // 3D Tilt Logic - Optimized
    const cards = gsap.utils.toArray(".project-card-3d");
    cards.forEach(card => {
      const glint = card.querySelector(".glint-effect");
      
      const onMouseMove = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const tiltX = (y - 0.5) * 10; 
        const tiltY = (0.5 - x) * 10; 

        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          duration: 0.5,
          ease: "power2.out",
          transformPerspective: 1000
        });

        gsap.to(glint, {
          x: (x - 0.5) * 200,
          y: (y - 0.5) * 200,
          opacity: 0.2,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        });
        gsap.to(glint, { opacity: 0, duration: 0.6 });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    // Staggered Entrance
    gsap.from(".project-card-3d", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Initial Refresh for layouts
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      {/* Cinematic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="header-text mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-primary/50" />
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] font-semibold">Selected Works</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Things <span className="text-gray-600 italic font-light lowercase">I’ve Built.</span>
          </h2>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 overflow-visible">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="project-card-3d group relative bg-[#080808] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[460px] md:min-h-[520px] transition-all duration-500 hover:bg-white/[0.02] hover:border-primary/30 preserve-3d shadow-2xl"
            >
              <div className="glint-effect absolute -inset-20 bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-opacity opacity-0" />

              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest px-3 py-1.5 border border-white/5 rounded-lg bg-white/[0.02]">Ref.0{i+1}</span>
                    {project.live !== "#" && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="text-[9px] font-bold font-mono text-primary uppercase tracking-tight">Active</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">v2.4.0</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-tighter">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-8 font-light italic">
                  "{project.description}"
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-white/[0.02] border border-white/5 rounded-lg text-[10px] font-mono text-gray-500 group-hover:text-white group-hover:bg-white/[0.05] group-hover:border-white/10 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                    className="flex items-center justify-center gap-2 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-500 active:scale-95"
                  >
                    Source <FaGithub className="text-sm" />
                  </a>
                  {project.live !== "#" ? (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      suppressHydrationWarning
                      className="flex items-center justify-center gap-2 py-4 bg-primary/5 border border-primary/20 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 active:scale-95 shadow-lg shadow-primary/5"
                    >
                      Demo <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <div 
                      suppressHydrationWarning
                      className="flex items-center justify-center py-4 bg-white/[0.01] border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/10 select-none cursor-not-allowed"
                    >
                      Private
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[250px]" />
      </div>
    </section>
  );
}
