import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[10000] shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
