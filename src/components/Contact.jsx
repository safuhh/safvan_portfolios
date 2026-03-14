'use client';
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaSpinner, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaGlobe
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
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#020202] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Simplified Responsive Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em]">Available for projects</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            Get In <span className="text-primary italic font-light lowercase">Touch.</span>
          </h2>
          <p className="mt-6 text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest max-w-xl">
            Building digital experiences that bridge the gap between design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {[
                { label: "Direct", value: "safu99000@gmail.com", icon: <FaEnvelope /> },
                { label: "Location", value: "Kerala, India", icon: <FaMapMarkerAlt /> },
                { label: "Status", value: "Ready to Collaborate", icon: <FaGlobe />, color: "text-primary" }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="text-primary text-xl">{item.icon}</div>
                    <div>
                      <p className="text-[9px] font-mono text-gray-700 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className={`text-white font-bold tracking-tight ${item.color || "text-lg md:text-xl"}`}>{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex gap-4">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/safvan-p-8386a524b/" },
                { icon: <FaGithub />, link: "https://github.com/safuhh" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl text-gray-500 hover:text-white hover:border-primary/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Clean Form Section */}
          <div className="lg:col-span-7">
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="bg-[#080808] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-600 ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Identity"
                    className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/10 text-white focus:outline-none focus:border-primary transition-all placeholder:text-gray-800"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-gray-600 ml-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Contact@domain"
                    className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/10 text-white focus:outline-none focus:border-primary transition-all placeholder:text-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-600 ml-2">Description</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-6 rounded-3xl bg-white/[0.02] border border-white/10 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-gray-800"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 rounded-2xl bg-primary text-white font-black uppercase text-xs tracking-[0.5em] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-4"
              >
                {isSubmitting ? <FaSpinner className="animate-spin" /> : <>Send Message <FaPaperPlane /></>}
              </button>

              {status.message && (
                <div className={`p-4 rounded-xl text-center text-[10px] font-mono uppercase tracking-widest ${
                  status.type === "success" ? "text-green-500 bg-green-500/5" : "text-red-500 bg-red-500/5"
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Static Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] pointer-events-none" />
    </section>
  );
}