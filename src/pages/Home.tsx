import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DRESSES, TESTIMONIALS } from '../constants';
import DressCard from '../components/DressCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredDresses = DRESSES.slice(0, 3);
  const luxuryTerms = ["Exquisite", "Architectural", "Sustainable", "Bespoke", "Timeless", "Ethereal", "Sophisticated"];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 grayscale saturate-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-4 mb-8"
          >
            <span className="w-8 h-px bg-brand-accent/40" />
            <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-brand-accent">
              Spring / Summer 2025
            </span>
            <span className="w-8 h-px bg-brand-accent/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[11rem] font-serif font-light tracking-tight leading-[0.85] mb-16"
          >
            Beyond <br />
            <span className="italic font-extralight text-brand-accent">Couture</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/dresses"
              className="group relative inline-flex items-center space-x-6 px-16 py-6 overflow-hidden"
            >
              <div className="absolute inset-0 border border-brand-ink/10 transition-transform duration-500 group-hover:scale-105" />
              <span className="relative text-[10px] tracking-[0.4em] font-bold uppercase transition-transform duration-500 group-hover:translate-x-2">
                Explore The Collection
              </span>
              <ArrowRight className="relative w-4 h-4 transition-transform duration-500 group-hover:translate-x-4" strokeWidth={1} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-ink/40 to-transparent" />
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 border-y border-brand-border bg-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {luxuryTerms.map((term) => (
                <span key={term} className="text-[10px] tracking-[1em] uppercase font-bold text-brand-ink/20 mx-12">
                  {term}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dress Showcase */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[9px] tracking-[0.4em] uppercase font-bold text-brand-accent mb-4 block"
              >
                The Edit
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Iconic Silhouettes</h2>
              <p className="text-brand-muted text-lg font-light leading-relaxed">
                A highly selective collection of pieces that redefine modern evening wear through architectural precision and fluid grace.
              </p>
            </div>
            <Link to="/dresses" className="flex items-center space-x-3 text-[10px] tracking-[0.3em] font-bold luxury-underline pb-2 uppercase group">
              <span>View Full Gallery</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {featuredDresses.map((dress, index) => (
              <DressCard key={dress.id} dress={dress} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Impact Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 py-32 overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2069&auto=format&fit=crop"
            alt="Bespoke Experience"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/60 to-transparent" />

        <div className="relative z-10 max-w-3xl text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block"
          >
            An Exclusive Invitation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-[6rem] font-serif font-light leading-[0.9] mb-12"
          >
            Tailored to <br />
            <span className="italic">Perfection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl mb-16 opacity-70 font-light leading-relaxed max-w-xl"
          >
            From initial sketch to final stitch, our private ateliers bring your vision to life. Experience luxury that is made only for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-brand-accent text-white px-16 py-6 text-[10px] tracking-[0.4em] font-bold hover:bg-white hover:text-brand-ink transition-all duration-700 uppercase"
            >
              Order Bespoke
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-48 px-6 md:px-12 bg-brand-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="font-serif">
              <span className="text-[10px] tracking-[0.5em] uppercase text-brand-ink/40 mb-8 block font-sans">Voices</span>
              <h2 className="text-5xl md:text-7xl mb-12 italic leading-tight">The <br /> Experience</h2>
            </div>
            <div className="space-y-32">
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.4 }}
                >
                  <blockquote className="text-2xl font-serif italic leading-relaxed mb-8 opacity-80">
                    "{t.text}"
                  </blockquote>
                  <cite className="not-italic flex items-center space-x-6">
                    <div className="w-8 h-px bg-brand-ink/20" />
                    <div>
                      <span className="block text-[10px] tracking-[0.3em] font-bold uppercase mb-1">{t.author}</span>
                      <span className="text-[9px] tracking-[0.2em] text-brand-muted uppercase">{t.role}</span>
                    </div>
                  </cite>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
