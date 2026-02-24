import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Dress } from '../types';
import { useEffect, useState } from 'react';
import { generateDressImage } from '../services/gemini';

interface DressCardProps {
  dress: Dress;
  index: number;
}

export default function DressCard({ dress, index }: DressCardProps) {
  const [imageUrl, setImageUrl] = useState<string>(dress.imageUrl || '');
  const [loading, setLoading] = useState(!dress.imageUrl);

  useEffect(() => {
    if (!dress.imageUrl) {
      generateDressImage(dress.imagePrompt).then((url) => {
        setImageUrl(url);
        setLoading(false);
      });
    }
  }, [dress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/dresses/${dress.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#efefef] mb-6">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-px bg-brand-ink/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-brand-accent/40 w-full"
                />
              </div>
            </div>
          ) : (
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              src={imageUrl}
              alt={dress.name}
              className="w-full h-full object-cover transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          )}

          <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/[0.03] transition-colors duration-700" />

          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 font-serif italic text-sm text-brand-ink bg-white/20 backdrop-blur-md px-4 py-2 text-center border border-white/30">
            View Details
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <h3 className="text-[10px] tracking-[0.3em] font-semibold uppercase text-brand-ink group-hover:text-brand-accent transition-colors duration-500">
              {dress.name}
            </h3>
            <span className="text-xs font-serif italic opacity-60">${dress.price.toLocaleString()}</span>
          </div>
          <p className="text-[9px] text-brand-muted uppercase tracking-[0.2em]">{dress.category}</p>
        </div>
      </Link>
    </motion.div>
  );
}
