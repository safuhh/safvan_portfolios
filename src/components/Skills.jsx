'use client';
import React, { useState } from 'react';
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
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  // Triple content to ensure seamless loop on any screen size
  const firstRow = [...skills.slice(0, 7), ...skills.slice(0, 7), ...skills.slice(0, 7)];
  const secondRow = [...skills.slice(7), ...skills.slice(7), ...skills.slice(7)];

  const SkillCard = ({ skill }) => (
    <div className="flex-shrink-0 px-4 md:px-6">
      <div className="group relative h-28 w-44 md:h-32 md:w-56 bg-[#080808] border border-white/[0.05] rounded-3xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.03] hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        <div 
          className="text-4xl md:text-5xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--skill-color-rgb),0.5)]"
          style={{ 
            color: skill.color,
          }}
        >
          {skill.icon}
        </div>
        <span className="text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-[0.3em]">
          {skill.name}
        </span>
        
        {/* Dynamic Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none rounded-3xl"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="py-24 md:py-40 bg-[#020202] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-primary/50" />
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] font-semibold">Stack & Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
            >
              Calculated <span className="text-gray-600 font-light italic">Capabilities.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-mono text-xs uppercase tracking-[0.25em] leading-relaxed max-w-xs border-l border-white/10 pl-8"
          >
            Engineering scalable solutions with a focus on performance, security, and developer experience.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-10 md:gap-14 py-10">
        {/* Edge Vignettes for Seamless Feel */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward */}
        <div 
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
              paused: isHoveredRow1
            }}
            style={{ 
              animationPlayState: isHoveredRow1 ? 'paused' : 'running'
            }}
          >
            {firstRow.map((skill, i) => (
              <SkillCard key={`row1-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward */}
        <div 
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["-33.33%", 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ 
              animationPlayState: isHoveredRow2 ? 'paused' : 'running'
            }}
          >
            {secondRow.map((skill, i) => (
              <SkillCard key={`row2-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-20 max-w-7xl mx-auto px-6">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
