import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaSpinner, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaCheckCircle, 
  FaExclamationCircle 
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const SERVICE_ID = "service_c4sq51d";
  const TEMPLATE_ID = "template_f61c0er";
  const PUBLIC_KEY = "9lzaakBG4H2qfc-PX";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );

      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you faster than light.",
      });
      formRef.current.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Let's try that again?",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-container relative z-10 py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono tracking-[0.4em] uppercase text-sm mb-4 block"
          >
            05 / Connection
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-500 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Column: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[35%] space-y-8"
          >
            <div className="glass-card p-10 border-primary/20 bg-dark-bg/40 backdrop-blur-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaEnvelope size={120} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-mono">Email Me At</p>
                    <p className="text-gray-200 font-medium">safvan@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-mono">Location</p>
                    <p className="text-gray-200 font-medium">Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-6 font-mono font-bold">Social Echo</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
                    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:shadow-glow-sm"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 border-white/10 bg-dark-bg/30 backdrop-blur-xl relative"
            >
              {/* Alert Message */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    className={`mb-8 p-5 rounded-2xl flex items-center gap-4 ${
                      status.type === "success" 
                        ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? <FaCheckCircle size={22}/> : <FaExclamationCircle size={22}/>}
                    <p className="text-sm font-medium tracking-tight">{status.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 ml-1">Identity</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="E.g. Elon Musk"
                    required
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 ml-1">Digital Address</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="name@company.com"
                    required
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 ml-1">The Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your vision..."
                  required
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none placeholder:text-gray-700 mt-1"
                />
              </div>

              {/* Bot Check / Hidden Field */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-4 text-lg group active:scale-95 disabled:opacity-50 disabled:active:scale-100 uppercase tracking-[0.2em] font-bold"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" /> Transmission...
                  </>
                ) : (
                  <>
                    Send Message 
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}