import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { DRESSES } from '../constants';
import { useEffect, useState } from 'react';
import { generateDressImage } from '../services/gemini';
import { OrderFormData } from '../types';
import { Check, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const dress = DRESSES.find((d) => d.id === id);

  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [ordered, setOrdered] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    address: '',
    phone: '',
    quantity: 1,
  });

  useEffect(() => {
    if (dress) {
      setLoading(true);
      generateDressImage(dress.imagePrompt).then((url) => {
        setImageUrl(url);
        setLoading(false);
      });
    }
  }, [dress]);

  if (!dress) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-brand-bg">
        <h1 className="text-3xl font-serif mb-8 italic">Pardon, the piece was not found.</h1>
        <Link to="/dresses" className="text-[10px] tracking-[0.4em] font-bold border border-brand-ink px-12 py-4 hover:bg-brand-ink hover:text-white transition-all duration-500 uppercase">
          Back to Collection
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => setOrdered(false), 8000);
  };

  return (
    <div className="pt-40 pb-40 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Link to="/dresses" className="inline-flex items-center space-x-3 text-[10px] tracking-[0.4em] font-bold uppercase mb-16 hover:text-brand-accent transition-colors group">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-2" />
          <span>Return To Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Image Gallery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] bg-[#f8f8f8] overflow-hidden"
            >
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-px bg-brand-ink/10 relative overflow-hidden">
                    <motion.div
                      initial={{ left: "-100%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-brand-accent w-full"
                    />
                  </div>
                </div>
              ) : (
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={imageUrl}
                  alt={dress.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>

            <div className="mt-8 grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-[#f8f8f8] border border-brand-border opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              ))}
            </div>
          </div>

          {/* Product Info & Form */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-b border-brand-border pb-12 mb-12"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-brand-accent">{dress.category}</span>
                <span className="w-4 h-px bg-brand-border" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-muted">Reference: {dress.id.padStart(4, '0')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">{dress.name}</h1>
              <p className="text-3xl font-serif italic text-brand-ink/80">${dress.price.toLocaleString()}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16 space-y-8"
            >
              <div>
                <h3 className="text-[10px] tracking-[0.3em] font-bold uppercase mb-4 opacity-40">Composition & Care</h3>
                <p className="text-brand-muted leading-relaxed font-light text-lg">
                  {dress.description} 100% sustainably sourced silk. Hand-finished by our master tailors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-brand-border">
                <div className="flex items-center space-x-3 text-[9px] tracking-[0.2em] font-bold uppercase opacity-60">
                  <ShieldCheck size={14} strokeWidth={1.5} />
                  <span>Authentic</span>
                </div>
                <div className="flex items-center space-x-3 text-[9px] tracking-[0.2em] font-bold uppercase opacity-60">
                  <Truck size={14} strokeWidth={1.5} />
                  <span>Express</span>
                </div>
                <div className="flex items-center space-x-3 text-[9px] tracking-[0.2em] font-bold uppercase opacity-60">
                  <RotateCcw size={14} strokeWidth={1.5} />
                  <span>Returns</span>
                </div>
              </div>
            </motion.div>

            {/* Order Form */}
            <AnimatePresence mode="wait">
              {ordered ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-brand-bg p-12 text-center border border-brand-accent/20"
                >
                  <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-accent/20">
                    <Check size={40} className="text-brand-accent" strokeWidth={1} />
                  </div>
                  <h4 className="text-3xl font-serif mb-4 italic">Request Received</h4>
                  <p className="text-sm text-brand-muted font-light leading-relaxed max-w-xs mx-auto">
                    Your exclusive acquisition request has been registered. Our private concierge will reach out to you within the hour.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="block text-[9px] tracking-[0.4em] uppercase font-bold mb-3 opacity-40 transition-opacity group-focus-within:opacity-100">Client Name</label>
                      <input
                        required
                        type="text"
                        placeholder="ALEXANDRA VOGUE"
                        className="w-full bg-transparent border-b border-brand-border pb-4 text-sm font-light placeholder:text-brand-ink/10 focus:outline-none focus:border-brand-accent transition-all duration-500 uppercase tracking-widest"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-[9px] tracking-[0.4em] uppercase font-bold mb-3 opacity-40 transition-opacity group-focus-within:opacity-100">Contact Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+44 20 7946 0958"
                        className="w-full bg-transparent border-b border-brand-border pb-4 text-sm font-light placeholder:text-brand-ink/10 focus:outline-none focus:border-brand-accent transition-all duration-500"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-[9px] tracking-[0.4em] uppercase font-bold mb-3 opacity-40 transition-opacity group-focus-within:opacity-100">Bespoke Delivery Address</label>
                    <textarea
                      required
                      placeholder="MAYFAIR, LONDON..."
                      rows={1}
                      className="w-full bg-transparent border-b border-brand-border pb-4 text-sm font-light placeholder:text-brand-ink/10 focus:outline-none focus:border-brand-accent transition-all duration-500 uppercase tracking-widest resize-none"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-[9px] tracking-[0.4em] uppercase font-bold mb-3 opacity-40 transition-opacity group-focus-within:opacity-100">Quantity</label>
                    <div className="flex items-center space-x-8 border-b border-brand-border pb-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                        className="text-xl font-light hover:text-brand-accent transition-colors px-2"
                      >
                        —
                      </button>
                      <span className="text-sm font-light tracking-widest w-8 text-center">{formData.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                        className="text-xl font-light hover:text-brand-accent transition-colors px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-ink text-white py-6 text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-brand-accent transition-all duration-700 mt-8 shadow-2xl shadow-brand-ink/10"
                  >
                    Acquire Perspective Piece
                  </button>
                  <p className="text-[9px] tracking-[0.2em] text-center text-brand-muted uppercase">Secure Private Consultation</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Reviews Section */}
        {dress.reviews.length > 0 && (
          <section className="mt-48 pt-24 border-t border-brand-border">
            <h2 className="text-4xl font-serif mb-20 italic">Peer Perspective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {dress.reviews.map((review) => (
                <div key={review.id} className="group">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 border border-brand-ink/20 ${i < review.rating ? "bg-brand-accent/60" : ""}`} />
                    ))}
                  </div>
                  <p className="text-xl font-serif italic mb-8 opacity-70 leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase">{review.author}</span>
                    <span className="w-4 h-px bg-brand-border" />
                    <span className="text-[10px] tracking-[0.1em] text-brand-muted">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
