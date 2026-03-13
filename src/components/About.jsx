import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRocket } from 'react-icons/fa';

export default function About() {
  const cards = [
    {
      icon: <FaCode className="text-3xl text-primary mb-4" />,
      title: 'Frontend Excellence',
      description: 'Passionate about creating intuitive, dynamic, and highly engaging user interfaces using React and modern CSS frameworks.'
    },
    {
      icon: <FaServer className="text-3xl text-primary mb-4" />,
      title: 'MERN Stack Focus',
      description: 'Specialized in the MERN ecosystem to build robust backend architecture and seamless database integrations.'
    },
    {
      icon: <FaRocket className="text-3xl text-primary mb-4" />,
      title: 'Scalable Solutions',
      description: 'Dedicated to writing clean, maintainable code to ensure applications scale efficiently as user base grows.'
    }
  ];

  return (
    <section id="about" className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading-secondary">
          <span className="text-primary">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
            <p>
              Hello! My name is <span className="text-white font-medium">Safvan</span>, and I enjoy creating things that live on the internet. My interest in web development started back when I decided to craft custom interactive experiences.
            </p>
            <p>
              Fast-forward to today, and I've focused my attention strictly on the <span className="text-primary font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js) and modern ecosystem tools. I specialize in building highly responsive, aesthetically pleasing web applications from the ground up to production.
            </p>
            <p>
              Whether it's writing complex server-side logic, designing massive database architectures, or pushing pixels to perfection on the frontend, I deliver premium quality results.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full w-full bg-dark-surface border border-white/10 rounded-2xl p-8 glass-card overflow-hidden">

              {/* Decorative elements representing code */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-gray-400 mt-6 overflow-x-auto">
                  <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> <span className="text-pink-500">=</span> {'{'}</p>
                  <p className="ml-4 md:ml-6">name: <span className="text-green-400">'Safvan'</span>,</p>
                  <p className="ml-4 md:ml-6">role: <span className="text-green-400">'MERN Stack Dev'</span>,</p>
                  <p className="ml-4 md:ml-6">focus: <span className="text-green-400">'Premium UI & Scalability'</span>,</p>
                  <p className="ml-4 md:ml-6">passionate: <span className="text-orange-400">true</span></p>
                  <p>{'}'};</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              {card.icon}
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
