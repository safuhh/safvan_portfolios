import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict body scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light cursor-pointer lowercase tracking-tighter">
            Safvan<span className="text-white">.</span>
          </Link>

          {/* Desktop Nav - Unchanged */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="!text-primary font-medium"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500} className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-sm font-medium">
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-3xl text-gray-300 hover:text-white transition-colors z-[100]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="text-primary" /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-[90] md:hidden flex flex-col justify-center px-8 touch-none overscroll-none"
            style={{ height: '100vh', width: '100vw' }}
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl md:text-[15rem] font-bold select-none pointer-events-none uppercase italic leading-none">
              Archived
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col w-fit"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono text-xs">0{i + 1}</span>
                      <span className="text-4xl font-black text-white group-hover:text-primary transition-all group-hover:translate-x-2 lowercase tracking-tighter">
                        {link.name}<span className="text-primary-light">.</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* EXIT Button */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.7 }}
               className="absolute top-8 right-8 cursor-pointer z-[100]"
               onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-full transition-all group">
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-gray-400 group-hover:text-primary">EXIT</span>
                <HiX className="text-gray-400 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
              </div>
            </motion.div>

            {/* Fixed Footer info */}
            <div className="absolute bottom-12 left-8 right-8 z-10">
              <div className="h-px w-full bg-white/10 mb-8" />
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a href="https://github.com/safuhh" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all"><FaGithub size={18} /></a>
                  <a href="https://www.linkedin.com/in/safvan-p-/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all"><FaLinkedin size={18} /></a>
                </div>
                <div className="text-[9px] font-mono text-gray-700 uppercase tracking-widest leading-none">
                  &copy; {new Date().getFullYear()} SAFVAN
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
