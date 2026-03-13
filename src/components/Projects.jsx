import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Vyntra E-Commerce",
    description: "A premium full-stack shopping experience. Features secure payments, real-time inventory, and an elite admin dashboard.",
    tech: ["React", "Node", "MongoDB", "Stripe"],
    github: "https://github.com/safuhh/ecom-frontend",
    live: "https://vyntra-dqdt.vercel.app/",
    accent: "#3b82f6"
  },
  {
    title: "Zoelume Streaming",
    description: "High-fidelity cinematic interface. Built for seamless movie discovery with high-performance dynamic rendering.",
    tech: ["React.js", "Tailwind", "TMDB API"],
    github: "https://github.com/safuhh/Zoelume",
    live: "#",
    accent: "#dc2626"
  },
  {
    title: "Chocovera Artisan",
    description: "An artisan digital storefront focused on premium storytelling and smooth user experience journeys.",
    tech: ["React", "GSAP", "Tailwind"],
    github: "https://github.com/safuhh/choco",
    live: "https://choco-eight.vercel.app/",
    accent: "#f59e0b"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="group relative">
      <div className="relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
        
        {/* Project Visual Area */}
        <div className="h-48 md:h-72 bg-[#050505] relative overflow-hidden p-8 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div 
                className="absolute w-40 h-40 rounded-full blur-[80px] opacity-20"
                style={{ backgroundColor: project.accent }}
            />
            <h3 className="text-6xl md:text-8xl font-black text-white/5 uppercase select-none tracking-tighter italic">
                {project.title.split(' ')[0]}
            </h3>
            
            {/* Action Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                    <FaGithub size={24} />
                </a>
                {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                        <FaExternalLinkAlt size={22} />
                    </a>
                )}
            </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10 space-y-6">
          <div className="flex justify-between items-start">
            <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mt-1">Project.0{index + 1}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Index */}
      <div className="absolute -bottom-10 -right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none italic">
        0{index + 1}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      {/* Simple Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 text-center md:text-left">
          <p className="text-primary font-mono text-xs tracking-[1em] uppercase mb-4">Archive</p>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
             Selected <span className="italic text-primary">Works</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        {/* Collaborative Call */}
        <div className="mt-32 text-center p-12 rounded-[3rem] border border-white/5 bg-white/[0.01]">
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">Interested in more?</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">View my full archive on GitHub</h3>
            <a 
              href="https://github.com/safuhh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] rounded-full hover:bg-primary hover:text-white transition-all inline-block"
            >
              Open Repository
            </a>
        </div>
      </div>
    </section>
  );
}
