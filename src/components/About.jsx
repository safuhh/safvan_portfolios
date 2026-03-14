'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaCode, FaServer, FaRocket } from 'react-icons/fa';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".about-content", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      }
    });

    gsap.from(".about-card", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-cards-grid",
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    });

    // Ensure layout is captured correctly after initial render
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, { scope: containerRef });

  const cards = [
    {
      icon: <FaCode />,
      title: 'Frontend Excellence',
      description: 'Passionate about creating intuitive, dynamic, and highly engaging user interfaces using React and modern CSS frameworks.',
      color: '#3b82f6'
    },
    {
      icon: <FaServer />,
      title: 'MERN Stack Focus',
      description: 'Specialized in the MERN ecosystem to build robust backend architecture and seamless database integrations.',
      color: '#10b981'
    },
    {
      icon: <FaRocket />,
      title: 'Scalable Solutions',
      description: 'Dedicated to writing clean, maintainable code to ensure applications scale efficiently as user base grows.',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="about" ref={containerRef} className="section-container bg-dark-bg relative overflow-hidden">
      <div className="about-content grid lg:grid-cols-2 gap-20 items-center mb-20">
        <div className="space-y-8">
          <div>
            <p className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-4">01. Identity</p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] italic">
              About <span className="text-primary">Me.</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-primary/20 pl-8 transition-colors hover:border-primary duration-500">
            <p>
              I am <span className="text-white font-medium">Safvan</span>, a dedicated Full Stack Developer with a sharp focus on the <span className="text-primary font-bold">MERN Ecosystem</span>. I transform complex problems into elegant, scalable digital solutions.
            </p>
            <p>
              With a background in humanities and a transition into deep technical engineering, I bring a unique perspective to <span className="text-white">User Experience</span> and <span className="text-white">System Architecture</span>.
            </p>
            <p>
              My goal is to build software that is not just functional, but an experience in itself.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-[3rem] blur-2xl group-hover:opacity-100 transition duration-1000 opacity-50"></div>
          <div className="relative bg-dark-card border border-white/5 rounded-[3rem] p-10 md:p-16 backdrop-blur-3xl overflow-hidden shadow-2xl">
             <div className="flex gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             
             <div className="font-mono text-sm md:text-base space-y-4">
                <p className="text-pink-500">class <span className="text-blue-400">SafvanEngineer</span> {'{'}</p>
                <p className="ml-6"><span className="text-purple-400">constructor</span>() {'{'}</p>
                <p className="ml-12">this.<span className="text-blue-300">stack</span> = [<span className="text-green-400">'MERN'</span>, <span className="text-green-400">'NextJS'</span>, <span className="text-green-400">'GSAP'</span>];</p>
                <p className="ml-12">this.<span className="text-blue-300">mission</span> = <span className="text-green-400">'Absolute Digital Excellence'</span>;</p>
                <p className="ml-6">{'}'}</p>
                <p className="ml-6 flex items-center gap-2 animate-pulse">
                  <span className="text-orange-400">executing</span>() <span className="text-gray-600">...</span>
                </p>
                <p className="text-pink-500">{'}'}</p>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-32">
        <div className="about-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-visible">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="about-card group relative overflow-hidden bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col justify-between min-h-[320px] md:min-h-[380px] hover:bg-[#1a1a1a] hover:shadow-2xl"
            >
              <style jsx>{`
                .about-card:hover { border-color: ${card.color} !important; }
              `}</style>

              {/* Animated Corner Accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" 
                style={{ backgroundColor: card.color }}
              />
              
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div 
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300" 
                  style={{ backgroundColor: card.color + '40' }}
                />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">System_OK</span>
              </div>

              {/* Card Header */}
              <div>
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl md:text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  style={{ color: card.color, boxShadow: `0 0 20px ${card.color}20` }}
                >
                  {card.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors italic">
                  "{card.description}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[9px] font-mono text-gray-400 uppercase tracking-widest">Core_Mod</span>
                  <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[9px] font-mono text-gray-400 uppercase tracking-widest">v2.0</span>
                </div>
                <span 
                  className="text-[12px] font-mono font-bold transition-opacity"
                  style={{ color: card.color }}
                >0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
