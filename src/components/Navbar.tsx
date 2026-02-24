import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'COLLECTION', path: '/dresses' },
    { name: 'BESPOKE', path: '/contact' },
    { name: 'JOURNAL', path: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-8',
        scrolled ? 'bg-brand-bg/70 backdrop-blur-xl py-6 border-b border-brand-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest font-light transition-opacity hover:opacity-70">
          L'ÉLÉGANCE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-[10px] tracking-[0.3em] font-medium luxury-underline pb-1 transition-colors duration-300',
                location.pathname === link.path ? 'after:w-full text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 border border-brand-ink/20 px-6 py-2 text-[10px] tracking-[0.3em] hover:bg-brand-ink hover:text-brand-bg transition-all duration-500 uppercase"
          >
            Reserved
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border overflow-hidden md:hidden"
          >
            <div className="flex flex-col space-y-8 p-12 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-[0.3em] font-medium text-brand-ink uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
