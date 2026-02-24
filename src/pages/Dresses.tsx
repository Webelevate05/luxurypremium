import { motion } from 'motion/react';
import { DRESSES } from '../constants';
import DressCard from '../components/DressCard';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Dresses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Evening', 'Cocktail', 'Daywear'];

  const filteredDresses = activeCategory === 'All'
    ? DRESSES
    : DRESSES.filter(d => d.category === activeCategory);

  return (
    <div className="pt-48 pb-48 px-6 md:px-12 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[10px] tracking-[0.5em] uppercase font-bold text-brand-accent mb-6 block"
              >
                The 2025 Retrospective
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl font-serif leading-none"
              >
                Our <span className="italic">Collection</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12 pb-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 pb-2 border-b-2",
                    activeCategory === cat ? "border-brand-accent text-brand-ink" : "border-transparent text-brand-muted hover:text-brand-ink"
                  )}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredDresses.map((dress, index) => (
            <DressCard key={dress.id} dress={dress} index={index} />
          ))}
        </div>

        {/* Brand Philosophy Section */}
        <section className="mt-64 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-t border-brand-border pt-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight italic">The Philosophy <br /> behind the drape.</h2>
            <p className="text-brand-muted text-lg font-light leading-relaxed max-w-md">
              Each piece in our collection is a study in architectural minimalism. We believe that true luxury lies in the tension between structure and fluidity.
            </p>
          </div>
          <div className="aspect-[16/9] bg-brand-ink/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2070&auto=format&fit=crop"
              alt="Process"
              className="w-full h-full object-cover opacity-60 grayscale"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
