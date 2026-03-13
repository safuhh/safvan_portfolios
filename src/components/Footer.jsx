import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MagneticIcon = ({ children, link, label }) => {
  const iconRef = useRef();
  const innerRef = useRef();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = iconRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(innerRef.current, {
      x: x * 0.4,
      y: y * 0.4,
      rotateX: -y * 0.1,
      rotateY: x * 0.1,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(innerRef.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={iconRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 group cursor-pointer"
      aria-label={label}
    >
      <div
        ref={innerRef}
        className="text-3xl md:text-4xl text-gray-500 group-hover:text-primary transition-colors duration-300 transform-gpu"
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-50 transition-transform duration-500 origin-center" />
    </a>
  );
};

export default function Footer() {
  const footerRef = useRef();
  const floorRef = useRef();
  const titleContainerRef = useRef();

  useGSAP(() => {
    // 3D Floor Animation
    gsap.from(floorRef.current, {
      rotateX: 45,
      y: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
        end: "bottom bottom",
        scrub: 1
      }
    });

    // Giant Text Reveal
    gsap.from(".giant-footer-text span", {
      y: 200,
      rotateX: -90,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      }
    });

    // Mouse follow 3D tilt for the whole container
    const handleTilt = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 10;

      gsap.to(floorRef.current, {
        rotateY: xPos,
        rotateX: 10 - yPos,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleTilt);
    return () => window.removeEventListener('mousemove', handleTilt);
  }, { scope: footerRef });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#050505] pt-32 pb-12 relative overflow-hidden perspective-2000"
    >
      {/* 3D Grid Floor */}
      <div
        ref={floorRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[1000px] border-t border-white/5 origin-bottom transform-gpu pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'rotateX(60deg) translateY(200px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Giant Call to Action */}
        <div className="text-center mb-24 overflow-hidden">
          <h2 className="giant-footer-text flex flex-wrap justify-center text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-none text-white select-none pointer-events-none">
            {"LET'S BUILD".split("").map((char, i) => (
              <span key={i} className="inline-block transition-all hover:text-primary hover:-translate-z-20 transform-gpu">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 mb-32 items-center">
          <div className="flex flex-col items-center md:items-start space-y-4 order-2 md:order-1">
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">Availability</p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white text-lg font-medium">OPEN FOR PROJECTS</span>
            </div>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <button
              onClick={scrollToTop}
              className="group relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-500 hover:-translate-y-4 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <FaArrowUp className="relative z-10 text-xl text-white group-hover:animate-bounce" />
            </button>
            <span className="mt-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">Back to Top</span>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4 order-3">
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">Direct Communication</p>
            <a href="mailto:safvann000@gmail.com" className="text-white text-xl font-bold hover:text-primary transition-colors flex items-center gap-3 group">
              safvann000@gmail.com
              <FaEnvelope className="text-sm group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Social Ecosystem */}
        <div className="flex justify-center gap-4 md:gap-12 mb-24">
          <MagneticIcon link="https://github.com/safuhh" label="GitHub"><FaGithub /></MagneticIcon>
          <MagneticIcon link="https://www.linkedin.com/in/safvan-p-/" label="LinkedIn"><FaLinkedin /></MagneticIcon>
          <MagneticIcon link="https://www.instagram.com/safuhh/" label="Instagram"><FaInstagram /></MagneticIcon>
        </div>

        {/* Footer Meta */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-white/5 select-none tracking-tighter">SV.2026</span>
            <div className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
              &copy; ARCHIVE SYSTEM <br /> DATA ARCHITECT SAFVAN
            </div>
          </div>

          <div className="flex gap-10">
            {['Services', 'Journal', 'Privacy'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-[0.3em] relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Ambient Orbs */}
      <div className="absolute -bottom-48 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
    </footer>
  );
}
