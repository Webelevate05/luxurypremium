import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-border pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/" className="text-4xl font-serif tracking-[0.3em] font-light block group">
              L'ÉLÉ<span className="italic">GANCE</span>
            </Link>
            <p className="text-brand-muted text-lg font-light leading-relaxed max-w-sm">
              An architectural exploration of the female form. Crafting silhouettes that transcend seasons and celebrate the art of minimalism.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-[10px] tracking-[0.3em] font-bold uppercase luxury-underline pb-1">Instagram</a>
              <a href="#" className="text-[10px] tracking-[0.3em] font-bold uppercase luxury-underline pb-1">Threads</a>
              <a href="#" className="text-[10px] tracking-[0.3em] font-bold uppercase luxury-underline pb-1">Vogue</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40">The Maison</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/dresses" className="hover:text-brand-accent transition-colors">All Pieces</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Ateliers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Bespoke</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40">Client Care</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Sale</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-ink/40">The Journal</h4>
            <div className="space-y-6">
              <p className="text-sm font-light opacity-60">Subscribe to receive private invitations and collection previews.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-brand-border py-2 text-[10px] tracking-widest focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-30"
                />
                <button className="absolute right-0 bottom-2 text-[10px] font-bold tracking-[0.2em] transform group-focus-within:translate-x-0 opacity-0 group-focus-within:opacity-100 transition-all duration-500">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] tracking-widest text-brand-muted uppercase">
              © {currentYear} L'ÉLÉGANCE Ateliers
            </span>
            <span className="w-8 h-px bg-brand-border hidden md:block" />
            <span className="text-[10px] tracking-widest text-brand-muted uppercase italic">Designed in Paris</span>
          </div>

          <div className="flex space-x-12">
            <motion.p
              whileHover={{ rotate: 180 }}
              className="text-brand-accent text-xl font-serif select-none"
            >
              ✧
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
