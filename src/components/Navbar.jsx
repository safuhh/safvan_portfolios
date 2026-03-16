'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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

  // Refined Animation Variants
  const menuVariants = {
    initial: {
      x: '100%',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      }
    },
  };

  const linkVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      }
    }
  };

  const footerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 1, duration: 0.5 } 
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 cursor-pointer lowercase tracking-tighter">
            Safvan<span className="text-white">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="!text-white font-semibold"
                className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer text-xs uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500} className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer text-xs font-bold uppercase tracking-wider">
              Work With Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 z-[100] group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            suppressHydrationWarning
          >
            <span className={`h-[1px] bg-white transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-[4px]' : 'w-8'}`} />
            <span className={`h-[1px] bg-white transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-[4px]' : 'w-5 group-hover:w-8'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#0a0a0a] z-[90] md:hidden flex flex-col justify-center px-10 overflow-hidden"
          >
            {/* Close Interaction */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 right-8 z-[110]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                suppressHydrationWarning
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full transition-all active:scale-95"
              >
                <span className="text-[10px] font-mono font-black tracking-[0.4em] text-gray-400 group-hover:text-primary transition-colors">CLOSE</span>
                <div className="relative w-4 h-4">
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white group-hover:bg-primary rotate-45 transition-colors" />
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white group-hover:bg-primary -rotate-45 transition-colors" />
                </div>
              </button>
            </motion.div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-black text-[25vw] leading-none select-none italic text-white p-10 flex items-center">
              NAVIGATION
            </div>

            <motion.div 
              variants={containerVariants}
              className="flex flex-col gap-8 relative z-10"
            >
              <div className="mb-4">
                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Explore</span>
              </div>
              
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden h-16 flex items-center">
                  <motion.div variants={linkVariants} className="w-full">
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={800}
                      spy={true}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6 w-full cursor-pointer"
                    >
                      <span className="text-gray-600 font-mono text-xs group-hover:text-primary transition-colors">0{i + 1}</span>
                      <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-primary transition-all group-hover:translate-x-4 lowercase tracking-tighter">
                        {link.name}<span className="text-primary">.</span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Mobile Footer */}
            <motion.div 
              variants={footerVariants}
              className="absolute bottom-12 left-10 right-10 z-10"
            >
              <div className="h-px w-full bg-white/5 mb-10" />
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <motion.a whileHover={{ y: -2 }} href="https://github.com/safuhh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em]"><FaGithub size={18} /> Github</motion.a>
                  <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/safvan-p-/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em]"><FaLinkedin size={18} /> LinkedIn</motion.a>
                  <motion.a whileHover={{ y: -2 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em]"><FaInstagram size={18} /> Instagram</motion.a>
                </div>
                <div className="text-[10px] font-mono text-gray-800 uppercase tracking-[0.5em]">
                  &copy; {new Date().getFullYear()} SAFVAN STUDIO
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
