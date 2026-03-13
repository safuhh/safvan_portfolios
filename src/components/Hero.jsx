import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background Animated Gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content Block */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-1 bg-primary rounded-full"></span>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Safvan. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 block mt-2">
              MERN Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            I build exceptional and accessible digital experiences for the web.
            Focused on creating scalable, high-performance applications with elegant modern designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-5"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary cursor-pointer border border-transparent"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-secondary cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Image Content Block */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="relative group w-72 h-72 md:w-[26rem] md:h-[26rem]"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Soft Animated Glowing Backlight */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 blur-[70px] opacity-40 group-hover:opacity-70 transition-opacity duration-500 z-0"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Creative Morphing Blob Container */}
            <motion.div
              className="relative w-full h-full bg-dark-surface border border-white/20 overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <img src="/sa.jpeg" alt="Safvan - MERN Stack Developer" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
