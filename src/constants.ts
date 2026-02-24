import { Dress } from './types';

export const DRESSES: Dress[] = [
  {
    id: '1',
    name: 'The Eternal Draped Gown',
    price: 2400,
    category: 'Evening',
    description: 'An architectural marvel in 40-momme silk crepe. This floor-length masterpiece features a hand-rolled hem and a gravity-defying open back, engineered for the modern gala.',
    imagePrompt: 'Full length luxury silk evening gown in deep emerald green, high-fashion editorial photography, minimalist Prada aesthetic, architectural silhouette, studio lighting, elegant drape, 8k resolution, professional fashion model',
    reviews: [
      { id: 'r1', author: 'Sophia L.', rating: 5, comment: 'The weight of the silk is extraordinary. It moves like liquid.', date: '2024-01-15' },
      { id: 'r2', author: 'Isabella M.', rating: 4, comment: 'A study in perfection. The shade of emerald is visceral.', date: '2024-02-10' }
    ]
  },
  {
    id: '2',
    name: 'Midnight Architectural Mini',
    price: 1850,
    category: 'Cocktail',
    description: 'A sharp, structural silhouette in double-faced wool silk. Clean lines meet an avant-garde neckline, defining the new standard for evening sophistication.',
    imagePrompt: 'Minimalist black luxury cocktail dress, sharp architectural silhouette, Prada aesthetic, high-end fashion photography, clean neutral background, professional studio lighting, 8k',
    reviews: [
      { id: 'r3', author: 'Emma W.', rating: 5, comment: 'Power and grace in one silhouette. The structure is flawless.', date: '2024-02-20' }
    ]
  },
  {
    id: '3',
    name: 'Fluid Silk Slip No. 03',
    price: 1200,
    category: 'Daywear',
    description: 'An exercise in refined ease. Cut on the bias from Italian champagne satin, this piece offers a second-skin feel that transitions seamlessly from atelier to evening air.',
    imagePrompt: 'Champagne satin slip dress, luxury fashion, minimalist Prada style, soft natural lighting, elegant and simple, high-fashion editorial, 8k',
    reviews: []
  },
  {
    id: '4',
    name: 'The Grand Velvet Column',
    price: 3200,
    category: 'Evening',
    description: 'Rich, deep burgundy velvet sourced from heritage mills. Featuring an internal corset for a razor-sharp silhouette and a dramatic floor-sweeping train.',
    imagePrompt: 'Full length burgundy velvet luxury gala gown, structured shoulders, Prada style, dramatic high-fashion lighting, architectural silhouette, 8k',
    reviews: [
      { id: 'r4', author: 'Charlotte K.', rating: 5, comment: 'The presence this gown commands is unmatched.', date: '2024-03-05' }
    ]
  },
  {
    id: '5',
    name: 'Modernist Tweed Ensemble',
    price: 1550,
    category: 'Daywear',
    description: 'A contemporary deconstruction of classic tailoring. Custom-woven tweed with metallic micro-filaments, offering a shimmering depth to a precision-cut shift.',
    imagePrompt: 'Luxury tweed shift dress with metallic accents, modern Prada aesthetic, clean lines, high-end fashion photography, professional model, 8k',
    reviews: []
  },
  {
    id: '6',
    name: 'The Ethereal Organza Cloud',
    price: 2100,
    category: 'Cocktail',
    description: 'Layers of translucent silk organza create a weightless, floating silhouette. A soft blush dream designed for grand entrances and unforgettable departures.',
    imagePrompt: 'Blush organza luxury party dress, ethereal layers, Prada style, soft lighting, delicate silhouette, high-fashion editorial, 8k',
    reviews: []
  },
  {
    id: '7',
    name: 'Asymmetric Slate Sculpture',
    price: 1950,
    category: 'Cocktail',
    description: 'A striking study in geometry. This mid-length piece in industrial slate grey features a precision-draped neckline that challenges the traditional silhouette.',
    imagePrompt: 'Asymmetric slate grey luxury midi dress, draped neckline, minimalist Prada aesthetic, high-fashion photography, architectural silhouette, 8k',
    reviews: []
  },
  {
    id: '8',
    name: 'Sunray Pleated Maxi No. 12',
    price: 2800,
    category: 'Evening',
    description: 'Hand-pleated sunray folds in deep obsidian navy. Every movement creates a rhythmic dance of light and shadow, finished with a discreet silk lining.',
    imagePrompt: 'Full length navy pleated luxury maxi dress, sunray pleats, Prada style, high-fashion movement photography, elegant silhouette, 8k',
    reviews: []
  },
  {
    id: '9',
    name: 'Ivory Sculptural Pillar',
    price: 2200,
    category: 'Daywear',
    description: 'Heavyweight ivory wool-crepe structured with internal boning. Sculptural sleeves and a cinched waist define this modernist manifesto of daytime luxury.',
    imagePrompt: 'Ivory sculptural wool luxury dress, structured sleeves, minimalist Prada aesthetic, high-fashion photography, clean background, 8k',
    reviews: []
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    text: "L'ÉLÉGANCE has redefined my wardrobe. The tension between the fabric's weight and the silhouette's fluidity is sheer poetry.",
    author: "Alexandra V.",
    role: "Global Fashion Editor"
  },
  {
    id: 't2',
    text: "Every piece I've acquired feels like an architectural extension of myself. This is the new standard of minimalist luxury.",
    author: "Elena R.",
    role: "Creative Director, Paris"
  },
  {
    id: 't3',
    text: "The bespoke experience was transformative. They don't just dress the body; they curate an aura.",
    author: "Julianne S.",
    role: "Haute Couture Collector"
  }
];
