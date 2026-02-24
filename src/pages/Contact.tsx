import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Instagram, Twitter, Globe } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="pt-48 pb-48 px-6 md:px-12 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left Column: Context & Info */}
          <div className="flex flex-col h-full">
            <header className="mb-24">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10px] tracking-[0.5em] uppercase font-bold text-brand-accent mb-8 block"
              >
                Inquiries & Appointments
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-7xl md:text-[9rem] font-serif leading-[0.85] mb-12"
              >
                Let us <br />
                <span className="italic font-extralight text-brand-accent">Connect</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-brand-muted max-w-lg text-xl font-light leading-relaxed"
              >
                Our boutiques and ateliers remain at your disposal for bespoke silhouette design and collection inquiries.
              </motion.p>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-auto space-y-20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40">Direct Contact</h3>
                  <div className="space-y-3">
                    <a href="mailto:concierge@lelegance.com" className="group flex items-center space-x-3 text-sm luxury-underline pb-1">
                      <span>concierge@lelegance.com</span>
                    </a>
                    <a href="tel:+12125550198" className="group flex items-center space-x-3 text-sm luxury-underline pb-1">
                      <span>+1 (212) 555-0198</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40">Social Space</h3>
                  <div className="flex space-x-6">
                    <Instagram size={18} strokeWidth={1.5} className="hover:text-brand-accent cursor-pointer transition-colors" />
                    <Twitter size={18} strokeWidth={1.5} className="hover:text-brand-accent cursor-pointer transition-colors" />
                    <Globe size={18} strokeWidth={1.5} className="hover:text-brand-accent cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              <div className="pt-20 border-t border-brand-border flex items-start gap-12">
                <div className="w-1/2">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40 mb-6 font-sans">New York Flagship</h3>
                  <address className="not-italic text-sm font-light leading-relaxed tracking-wide opacity-70">
                    721 Fifth Avenue, <br />
                    Manhattan, NY 10022 <br />
                    United States
                  </address>
                </div>
                <div className="w-1/2">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40 mb-6 font-sans">Hours</h3>
                  <div className="text-[10px] tracking-[0.1em] uppercase opacity-70 space-y-2">
                    <p>Mon — Sat: 10:00 — 19:00</p>
                    <p>Sun: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-white p-12 md:p-20 shadow-2xl shadow-brand-ink/5 border border-brand-border">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-brand-bg rounded-full flex items-center justify-center mb-10 border border-brand-accent/20">
                      <Check size={44} className="text-brand-accent" strokeWidth={1} />
                    </div>
                    <h2 className="text-4xl font-serif mb-6 italic">Inquiry Received</h2>
                    <p className="text-brand-muted font-light leading-relaxed max-w-sm">
                      Your message has been delivered to our concierge team. We aim to respond within twenty-four hours of receipt.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="group relative">
                        <label className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-30 group-focus-within:opacity-100 transition-opacity mb-4 block">First Name</label>
                        <input
                          required
                          type="text"
                          placeholder="ALEXANDRA"
                          className="w-full border-b border-brand-border pb-4 text-sm font-light tracking-widest focus:outline-none focus:border-brand-accent transition-all duration-500 bg-transparent uppercase"
                        />
                      </div>
                      <div className="group relative">
                        <label className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-30 group-focus-within:opacity-100 transition-opacity mb-4 block">Last Name</label>
                        <input
                          required
                          type="text"
                          placeholder="VOGUE"
                          className="w-full border-b border-brand-border pb-4 text-sm font-light tracking-widest focus:outline-none focus:border-brand-accent transition-all duration-500 bg-transparent uppercase"
                        />
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-30 group-focus-within:opacity-100 transition-opacity mb-4 block">Email Residence</label>
                      <input
                        required
                        type="email"
                        placeholder="CONCIERGE@VOGUE.COM"
                        className="w-full border-b border-brand-border pb-4 text-sm font-light tracking-widest focus:outline-none focus:border-brand-accent transition-all duration-500 bg-transparent uppercase"
                      />
                    </div>

                    <div className="group relative">
                      <label className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-30 group-focus-within:opacity-100 transition-opacity mb-4 block">Nature of Inquiry</label>
                      <select className="w-full border-b border-brand-border pb-4 text-sm font-light tracking-widest focus:outline-none focus:border-brand-accent transition-all duration-500 bg-white appearance-none uppercase cursor-pointer">
                        <option>BESPOKE CONSULTATION</option>
                        <option>COLLECTION INQUIRY</option>
                        <option>PRIVATE FITTING</option>
                        <option>PRESS & MEDIA</option>
                      </select>
                    </div>

                    <div className="group relative">
                      <label className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-30 group-focus-within:opacity-100 transition-opacity mb-4 block">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="HOW MAY WE ASSIST YOU?"
                        className="w-full border-b border-brand-border pb-4 text-sm font-light tracking-widest focus:outline-none focus:border-brand-accent transition-all duration-500 bg-transparent uppercase resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-ink text-white py-6 text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-brand-accent transition-all duration-700 shadow-xl shadow-brand-ink/10"
                    >
                      Establish Connection
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-12 opacity-60">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop"
                alt="Studio"
                className="w-full aspect-video object-cover grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
