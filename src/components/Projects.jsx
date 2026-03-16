'use client';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Vyntra E-Commerce",
    description: "A high-performance e-commerce platform built with the MERN stack, featuring secure payments and a powerful admin suite.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/safuhh/ecom-frontend",
    live: "https://vyntra-dqdt.vercel.app/"
  },
  {
    title: "Zoelume Streaming",
    description: "A cinematic movie streaming interface designed for seamless discovery and high-fidelity visual experience.",
    tech: ["Next.js", "Tailwind", "REST API"],
    github: "https://github.com/safuhh/Zoelume",
    live: "#"
  },
  {
    title: "Chocovera",
    description: "An elegant digital storefront for luxury chocolates, focusing on artisanal storytelling and smooth user flow.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/safuhh/choco",
    live: "https://choco-eight.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 bg-[#020202] border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Static Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] font-medium">Selected Lab</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Featured <span className="text-gray-600 italic font-light">Works.</span>
          </h2>
        </div>

        {/* Static Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="h-full bg-[#080808] border border-white/[0.05] rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.02]">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full">
                      Project 0{i+1}
                    </span>
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors p-2"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.live !== "#" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors p-2"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-light italic">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/[0.05]">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/[0.03] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
