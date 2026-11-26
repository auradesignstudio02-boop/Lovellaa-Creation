import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'lov-001',
    name: 'Robe Élégante Grenat à Volants',
    category: 'Robes',
    price: 6800,
    originalPrice: 8200,
    images: [
      '/public/assets/aistudio/image_6112952c.png',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Une robe sophistiquée et ajustée de couleur grenat profond, dotée d’un double volant délicat aux épaules et d’une fente subtile. Conçue pour sublimer votre silhouette lors de vos soirées et moments d’exception.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Grenat Passion', hex: '#800020' },
      { name: 'Noir Nuit', hex: '#111111' },
      { name: 'Rose Poudré', hex: '#F8DDE6' }
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 'lov-002',
    name: 'Pyjama Cocooning Plaid Rose',
    category: 'Pyjamas',
    price: 4900,
    originalPrice: 5800,
    images: [
      '/public/assets/aistudio/image_16814a53.png',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Le compagnon idéal de vos soirées cocooning. Ensemble pyjama ultra-doux en maille polie motif écossais rose et noir, associé à un haut douillet à encolure ronde pour un confort absolu.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rose Plaid', hex: '#F8DDE6' },
      { name: 'Blanc Ivoire', hex: '#FFFFFF' }
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 52
  },
  {
    id: 'lov-003',
    name: 'Robe de Nuit Sheer & Dentelle Noire',
    category: 'Lingerie',
    price: 5500,
    originalPrice: 6500,
    images: [
      '/public/assets/aistudio/image_ef202f1b.png',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fb1b?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Une pièce d’exception en tulle transparent et jeux de volants noirs. Cette nuisette longue incarne le mystère et le raffinement avec une coupe spectaculaire qui épouse gracieusement les formes.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Noir Mystère', hex: '#000000' },
      { name: 'Bordeaux Profond', hex: '#6b1d2f' }
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 24
  },
  {
    id: 'lov-004',
    name: 'Ensemble Loungewear Sport-Chic',
    category: 'Sous-vêtements',
    price: 5200,
    originalPrice: 6000,
    images: [
      '/public/assets/aistudio/image_549c5e3a.png',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Ensemble côtelé bicolore zippé à manches longues et pantalon ajusté avec cordon de serrage. Confortable et tendance, idéal pour le sport à la maison ou un style casual chic.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Noir Intense', hex: '#1a1a1a' },
      { name: 'Rose Nude', hex: '#e8c5d0' }
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.7,
    reviewsCount: 45
  },
  {
    id: 'lov-005',
    name: 'Ensemble Séduction Grenat & Jarretelles',
    category: 'Lingerie',
    price: 4500,
    originalPrice: 5400,
    images: [
      '/public/assets/aistudio/image_42b7c2de.png',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Ensemble sensuel drapé grenat avec nœud délicat et jarretelles intégrées. Conçu pour sublimer votre féminité avec des finitions haut de gamme et un maintien parfait.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Grenat Velours', hex: '#800020' },
      { name: 'Rouge Passion', hex: '#C41E3A' }
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: 'lov-006',
    name: 'Top Croché Bohème & Short Denim',
    category: 'Robes',
    price: 4800,
    originalPrice: 5600,
    images: [
      '/public/assets/aistudio/image_36b3b902.png',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Duo estival irrésistible composé d’un crop top blanc en crochet artisanal avec franges délicates et d’un short en jean effet usé. Frais, lumineux et parfaitement tendance.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Blanc & Denim', hex: '#ffffff' }
    ],
    isNew: true,
    isFeatured: false,
    inStock: true,
    rating: 4.6,
    reviewsCount: 19
  },
  {
    id: 'lov-007',
    name: 'Pyjama Satiné Soie Rose Poudré',
    category: 'Pyjamas',
    price: 5900,
    originalPrice: 6900,
    images: [
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ensemble pyjama en satin fluide effet soie douce, chemise boutonnée à liseré contrasté et pantalon droit. La quintessence de l’élégance nocturne.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Rose Poudré', hex: '#F8DDE6' },
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Noir Satin', hex: '#222222' }
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 64
  },
  {
    id: 'lov-008',
    name: 'Ensemble Lingerie Dentelle Romantique',
    category: 'Sous-vêtements',
    price: 3600,
    originalPrice: 4200,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Parure de sous-vêtements en dentelle florale ultra-douce. Confort quotidien sans compromis sur le style et la sensualité.',
    sizes: ['85B', '90B', '95B', '90C', '95C'],
    colors: [
      { name: 'Rose Blush', hex: '#FCEEF3' },
      { name: 'Blanc Pur', hex: '#FFFFFF' },
      { name: 'Noir Chic', hex: '#000000' }
    ],
    isNew: true,
    isFeatured: false,
    inStock: true,
    rating: 4.8,
    reviewsCount: 41
  }
];
