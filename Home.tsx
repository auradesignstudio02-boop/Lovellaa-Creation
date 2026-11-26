import React from 'react';
import { ArrowRight, Instagram, Sparkles, Truck, ShieldCheck, Heart, Star, Phone } from 'lucide-react';
import { Product, ActivePage } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BRAND_CONFIG } from '../data/config';

interface HomeProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToCartQuick: (product: Product) => void;
  setActivePage: (page: ActivePage) => void;
  setSelectedCategory: (category: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  products,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onAddToCartQuick,
  setActivePage,
  setSelectedCategory,
}) => {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);

  const categories = [
    {
      id: 'Pyjamas',
      name: 'Pyjamas',
      subtitle: 'Confort et douceur',
      image: '/public/assets/aistudio/image_16814a53.png',
      page: 'pyjamas' as ActivePage,
    },
    {
      id: 'Robes',
      name: 'Robes',
      subtitle: 'Élégance et séduction',
      image: '/public/assets/aistudio/image_6112952c.png',
      page: 'robes' as ActivePage,
    },
    {
      id: 'Lingerie',
      name: 'Lingerie',
      subtitle: 'Raffinement intime',
      image: '/public/assets/aistudio/image_ef202f1b.png',
      page: 'lingerie' as ActivePage,
    },
    {
      id: 'Sous-vêtements',
      name: 'Sous-vêtements',
      subtitle: 'Tendance & Loungewear',
      image: '/public/assets/aistudio/image_549c5e3a.png',
      page: 'shop' as ActivePage,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FCEEF3] via-[#F8DDE6]/50 to-[#FCEEF3] py-16 md:py-24 overflow-hidden border-b border-[#F8DDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-[#F8DDE6] px-4 py-1.5 rounded-full text-xs font-bold text-[#B83D75] shadow-xs">
                <Sparkles className="w-4 h-4" />
                <span>Collection Exclusive Algérie</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#3D2933] leading-tight">
                Votre féminité, <br />
                <span className="text-[#B83D75] italic">notre passion</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A3E4D] leading-relaxed max-w-lg mx-auto md:mx-0">
                {BRAND_CONFIG.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                <button
                  onClick={() => setActivePage('shop')}
                  className="w-full sm:w-auto bg-[#B83D75] hover:bg-[#962f60] text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg group"
                >
                  <span>Découvrir la collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}?text=Bonjour%20Lovellaa%20Creation,%20je%20souhaite%20commander%20un%20article.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-[#FCEEF3] text-[#3D2933] border border-[#F8DDE6] px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Commander maintenant</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Collage */}
            <div className="relative flex justify-center">
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float">
                <img
                  src="/public/assets/aistudio/image_6112952c.png"
                  alt="Lovellaa Creation Mode"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:left-4 w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src="/public/assets/aistudio/image_16814a53.png"
                  alt="Pyjama Cocooning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-36 sm:w-44 aspect-3/4 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src="/public/assets/aistudio/image_ef202f1b.png"
                  alt="Lingerie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#F8DDE6]">
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
            <div className="w-12 h-12 rounded-2xl bg-[#B83D75] text-white flex items-center justify-center shrink-0 shadow-md">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#3D2933]">Livraison 58 Wilayas</h3>
              <p className="text-xs text-[#5A3E4D] mt-0.5">Rapide à domicile ou bureau</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
            <div className="w-12 h-12 rounded-2xl bg-[#B83D75] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#3D2933]">Paiement à la livraison</h3>
              <p className="text-xs text-[#5A3E4D] mt-0.5">100% sécurisé et sans risque</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
            <div className="w-12 h-12 rounded-2xl bg-[#B83D75] text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#3D2933]">Collection Féminine</h3>
              <p className="text-xs text-[#5A3E4D] mt-0.5">Pensée pour votre élégance</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
            <div className="w-12 h-12 rounded-2xl bg-[#B83D75] text-white flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#3D2933]">Service Client WhatsApp</h3>
              <p className="text-xs text-[#5A3E4D] mt-0.5">À votre écoute 6j/7</p>
            </div>
          </div>

        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B83D75]">Univers Lovellaa</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3D2933]">Explorez nos catégories</h2>
          <p className="text-sm text-[#5A3E4D] max-w-md mx-auto">
            Des pièces délicates et raffinées pour chaque moment de votre journée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActivePage(cat.page);
              }}
              className="group relative aspect-4/5 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#F8DDE6]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs text-[#F8DDE6] font-medium tracking-wide">{cat.subtitle}</span>
                <h3 className="text-2xl font-serif font-bold mt-1 mb-3">{cat.name}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-fit group-hover:bg-[#B83D75] transition">
                  Découvrir <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B83D75]">Tendance & Coups de Cœur</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3D2933] mt-1">Nouveautés & Incontournables</h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-sm font-bold text-[#B83D75] hover:text-[#962f60] flex items-center gap-1.5 transition w-fit"
          >
            <span>Voir toute la boutique</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCartQuick={onAddToCartQuick}
            />
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-[#F8DDE6]/40 py-20 border-y border-[#F8DDE6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#B83D75] text-white flex items-center justify-center mx-auto shadow-lg">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#3D2933]">
            Lovellaa Creation
          </h2>
          <p className="text-base md:text-lg text-[#5A3E4D] leading-relaxed max-w-2xl mx-auto font-light">
            "Lovellaa Creation, votre boutique dédiée à la féminité, au confort et à l'élégance. Des pièces soigneusement sélectionnées pour vous accompagner dans vos moments de douceur."
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setActivePage('about')}
              className="bg-[#3D2933] hover:bg-[#B83D75] text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition shadow-md"
            >
              En savoir plus sur notre marque
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B83D75] hover:underline"
          >
            <Instagram className="w-4 h-4" /> {BRAND_CONFIG.instagramHandle}
          </a>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3D2933]">Rejoignez notre communauté Instagram</h2>
          <p className="text-sm text-[#5A3E4D]">Suivez nos looks quotidiens et partagez vos moments Lovellaa.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            '/public/assets/aistudio/image_6112952c.png',
            '/public/assets/aistudio/image_16814a53.png',
            '/public/assets/aistudio/image_ef202f1b.png',
            '/public/assets/aistudio/image_549c5e3a.png',
            '/public/assets/aistudio/image_42b7c2de.png',
            '/public/assets/aistudio/image_36b3b902.png',
          ].map((img, idx) => (
            <a
              key={idx}
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#F8DDE6] block"
            >
              <img src={img} alt="Instagram Lovellaa" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-[#B83D75]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram className="w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B83D75] hover:bg-[#962f60] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            <span>Suivez-nous sur Instagram</span>
          </a>
        </div>
      </section>

    </div>
  );
};
