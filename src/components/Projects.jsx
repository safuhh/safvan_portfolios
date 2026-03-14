'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
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

    // 3D Tilt Logic
    const cards = gsap.utils.toArray(".project-card-3d");
    cards.forEach(card => {
      const glint = card.querySelector(".glint-effect");
      
      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const tiltX = (y - 0.5) * 8; 
        const tiltY = (0.5 - x) * 8; 

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
          opacity: 0.15,
          duration: 0.4
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        });
        gsap.to(glint, { opacity: 0, duration: 0.6 });
      });
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
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Cinematic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="header-text mb-16 px-2">
          <p className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Selected Works</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Things <span className="text-primary italic font-light lowercase">I’ve Built</span>
          </h2>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="project-card-3d group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[440px] transition-all duration-500 hover:border-primary/20 preserve-3d shadow-2xl"
            >
              <div className="glint-effect absolute -inset-20 bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-opacity opacity-0" />

              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest px-2 py-1 border border-white/5 rounded">Ref.0{i+1}</span>
                    {project.live !== "#" && (
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[8px] font-mono text-primary/60 uppercase">Live</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">Active_Mod</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light italic">
                  "{project.description}"
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded text-[9px] font-mono text-gray-500 group-hover:text-white transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-[9px] font-bold uppercase tracking-widest text-white/40 hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Source <FaGithub />
                  </a>
                  {project.live !== "#" ? (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-4 bg-primary/10 border border-primary/20 rounded-2xl text-[9px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all duration-500"
                    >
                      Demo <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center py-4 bg-white/[0.01] border border-white/5 rounded-2xl text-[9px] font-bold uppercase tracking-widest text-white/10 select-none">
                      Private
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[250px]" />
      </div>
    </section>
  );
}
