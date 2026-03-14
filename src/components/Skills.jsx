'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaProjectDiagram, FaPython 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiFirebase, SiDocker, SiVite
} from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Express", icon: <SiExpress />, color: "#CCCCCC" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "System Design", icon: <FaProjectDiagram />, color: "#E2E8F0" },
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 bg-[#020202] relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Clean Professional Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-primary/40" />
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em]">Stack & Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Calculated <span className="text-gray-500 font-light italic">Capabilities.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] leading-relaxed max-w-xs">
            Focused on building scalable, performant, and type-safe applications with modern tools.
          </p>
        </div>

        {/* Professional 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="h-full bg-[#080808] border border-white/[0.05] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white/[0.02] group-hover:border-primary/20">
                {/* Minimalist Icon */}
                <div 
                  className="text-4xl md:text-5xl mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                
                {/* Clean Label */}
                <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-[0.3em]">
                  {skill.name}
                </span>

                {/* Subtle Radial Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-3xl pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
    </section>
  );
}
