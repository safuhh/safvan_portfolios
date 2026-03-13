import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
  FaPython, FaBootstrap, FaProjectDiagram 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiExpress, SiMongodb, SiRedux 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "#ffffff" },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />, color: "#764ABC" },
  { name: "System Design", icon: <FaProjectDiagram className="text-gray-200" />, color: "#E2E8F0" },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, color: "#339933" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, color: "#3178C6" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "#47A248" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, color: "#ffffff" },
  { name: "React Native", icon: <FaReact className="text-[#61DAFB]" />, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "#06B6D4" },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, color: "#1572B6" },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" />, color: "#3776AB" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, color: "#7952B3" },
];

const SkillTile = ({ skill, index }) => {
  const tileRef = useRef();
  const innerRef = useRef();
  const lightRef = useRef();

  useGSAP(() => {
    // Continuous 3D Floating Animation
    gsap.to(innerRef.current, {
      y: "random(-5, 5)",
      x: "random(-3, 3)",
      rotateZ: "random(-1, 1)",
      rotateX: "random(-2, 2)",
      rotateY: "random(-2, 2)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: tileRef });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = tileRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 12;
    const y = (clientY - (top + height / 2)) / -12;
    
    const lX = clientX - left;
    const lY = clientY - top;

    gsap.to(innerRef.current, {
      rotateY: x,
      rotateX: y,
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      overwrite: "auto"
    });

    gsap.to(lightRef.current, {
      left: lX,
      top: lY,
      opacity: 0.15,
      duration: 0.1
    });
  };

  const handleMouseLeave = () => {
    gsap.to(innerRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto"
    });
    
    gsap.to(lightRef.current, {
      opacity: 0,
      duration: 0.5
    });
  };

  return (
    <div 
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="skill-item relative h-40 md:h-44 group perspective-1000"
    >
      <div 
        ref={innerRef}
        className="w-full h-full bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:border-primary/40 shadow-xl overflow-hidden transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          ref={lightRef}
          className="absolute w-48 h-48 bg-white rounded-full blur-[60px] pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-overlay"
        />

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 rounded-[1.5rem] pointer-events-none z-0"
          style={{ backgroundColor: skill.color }}
        />
        
        <div 
          className="text-4xl md:text-5xl transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] relative z-10"
          style={{ transform: 'translateZ(40px)' }}
        >
          {skill.icon}
        </div>
        
        <span 
          className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors relative z-10"
          style={{ transform: 'translateZ(20px)' }}
        >
          {skill.name}
        </span>
      </div>

      <div className="absolute top-0 right-6 px-2 py-0.5 bg-white/5 rounded-b-lg border-x border-b border-white/10 font-mono text-[7px] text-gray-700 group-hover:text-primary group-hover:border-primary/20 transition-all opacity-40 group-hover:opacity-100">
          STK_{index + 1 < 10 ? `0${index + 1}` : index + 1}
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".skill-item", {
      y: 60,
      opacity: 0,
      scale: 0.8,
      stagger: {
        each: 0.04,
        grid: "auto",
        from: "start"
      },
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.to(".skills-bg-text", {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1.5,
        start: "top bottom",
        end: "bottom top"
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="skills" 
      className="py-24 md:py-32 bg-[#050505] relative overflow-hidden"
    >
      <div className="skills-bg-text absolute top-1/2 left-0 -translate-y-1/2 text-[25rem] md:text-[35rem] font-black text-white/[0.01] whitespace-nowrap select-none pointer-events-none z-0">
        TECHNOLOGY CORE STACK ARCHIVE
      </div>

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <p className="text-primary font-mono text-xs tracking-[1em] uppercase mb-4 flex items-center justify-center md:justify-start gap-4">
             <span className="w-8 h-[1px] bg-primary/30" />
             Core Systems
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Technical <span className="text-primary italic text-6xl md:text-7xl">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {allSkills.map((skill, i) => (
            <SkillTile key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
