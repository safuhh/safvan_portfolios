'use client';
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGraduationCap, FaBriefcase, FaCodeBranch, FaCircle, FaChevronDown } from 'react-icons/fa';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: "MOD_01",
    title: "MERN Stack Specialist",
    company: "Freelance",
    date: "2026",
    description: "Engineering advanced full-stack ecosystems with a focus on high-load optimization and secure database architecture.",
    tech: ["MongoDB", "Express", "Node.js", "Redis"],
    color: "#3b82f6"
  },
  {
    id: "MOD_02",
    title: "Full Stack Engineer",
    company: "Bridgeon Private Limited",
    date: "2025",
    description: "Developing robust enterprise solutions, implementing microservices, and orchestrating complex cloud deployments.",
    tech: ["React", "Microservices", "Docker", "AWS"],
    color: "#a855f7"
  },
  {
    id: "MOD_03",
    title: "Data Analyst Intern",
    company: "Cozmek Private Limited",
    date: "2024",
    description: "Synthesizing complex data streams into actionable intelligence using high-performance mathematical models.",
    tech: ["Python", "SQL", "Pandas", "PowerBI"],
    color: "#06b6d4"
  },
  {
    id: "MOD_04",
    title: "Humanities Graduate",
    company: "Victory College",
    date: "2021",
    description: "Mastering the cross-section of human psychology and digital interfaces to build more empathetic tech solutions.",
    tech: ["Design Thinking", "Psychology", "Communication"],
    color: "#f97316"
  }
];

export default function Experience() {
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (!isMobile) {
      // DESKTOP HORIZONTAL ANIMATION
      const panels = gsap.utils.toArray(".exp-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + containerRef.current.offsetWidth * 3,
        }
      });
    } else {
      // MOBILE VERTICAL ANIMATION
      const cards = gsap.utils.toArray(".mobile-exp-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }
  }, { scope: containerRef, dependencies: [isMobile] });

  return (
    <div ref={containerRef} className="bg-[#050505] overflow-hidden">
      {!isMobile ? (
        /* --- DESKTOP VIEW --- */
        <section id="experience" className="flex w-[400%] h-screen relative z-10">
          <div className="exp-panel w-screen h-screen flex flex-col justify-center px-32 shrink-0">
            <div className="max-w-4xl space-y-6">
              <p className="text-primary font-mono text-sm tracking-[0.5em] uppercase border-l-2 border-primary pl-6">04 / HISTORY</p>
              <h2 className="text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                Sequence<br /><span className="italic text-primary">Mastery</span>
              </h2>
              <div className="flex items-center gap-6 pt-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Scroll to traverse</p>
              </div>
            </div>
          </div>

          {experiences.map((exp, i) => (
            <div key={i} className="exp-panel w-screen h-screen flex items-center justify-center shrink-0 px-20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.01] select-none pointer-events-none uppercase">Archive</div>
              <div className="w-full max-w-7xl grid grid-cols-12 gap-16 items-center relative z-10">
                <div className="col-span-4">
                  <div className="p-16 rounded-[4rem] bg-white/[0.01] border border-white/10 backdrop-blur-2xl flex items-center justify-center relative group">
                    <div className="text-9xl transition-transform duration-700 group-hover:scale-110" style={{ color: exp.color }}>
                      {exp.title.includes("MERN") ? <FaBriefcase /> : <FaCodeBranch />}
                    </div>
                  </div>
                </div>
                <div className="col-span-8 space-y-8">
                  <span className="text-primary font-mono text-xl tracking-tighter">{exp.date} / {exp.id}</span>
                  <div className="space-y-4">
                    <h3 className="text-8xl font-black text-white tracking-tighter uppercase leading-none italic">{exp.title}</h3>
                    <p className="text-primary font-bold text-2xl uppercase tracking-[0.2em]">{exp.company}</p>
                  </div>
                  <p className="text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-primary/20 pl-8">"{exp.description}"</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        /* --- MOBILE VIEW --- */
        <section id="experience" className="min-h-screen py-24 px-6 relative">
          <div className="mb-20">
            <p className="text-primary font-mono text-xs tracking-[0.4em] uppercase mb-4">04. Timeline</p>
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
              History <br /><span className="text-primary italic">Archive</span>
            </h2>
          </div>

          <div className="flex flex-col gap-12 relative">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-white/5 md:hidden" />

            {experiences.map((exp, i) => (
              <div key={i} className="mobile-exp-card relative pl-10">
                {/* Visual Connector */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full border-2 border-dark-bg bg-primary z-10"
                  style={{ boxShadow: `0 0 10px ${exp.color}` }}
                />

                <div className="p-8 rounded-[2.5rem] bg-[#0d0d0d] border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <span className="text-4xl font-black font-mono text-white">{i + 1}</span>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10" style={{ color: exp.color }}>
                        {exp.title.includes("MERN") ? <FaBriefcase size={20} /> : <FaCodeBranch size={20} />}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">{exp.date}</span>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{exp.title}</h4>
                      <p className="text-primary font-medium italic text-sm mb-4">{exp.company}</p>
                      <p className="text-gray-400 text-sm font-light leading-relaxed italic">"{exp.description}"</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-mono text-gray-500 uppercase tracking-widest border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center opacity-30">
            <FaChevronDown className="animate-bounce text-primary" />
          </div>
        </section>
      )}
    </div>
  );
}
