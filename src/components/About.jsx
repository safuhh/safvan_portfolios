'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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

    // Ensure layout is captured correctly after initial render
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="section-container bg-dark-bg relative overflow-hidden">
      <div className="about-content grid lg:grid-cols-2 gap-20 items-center">
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
    </section>
  );
}
