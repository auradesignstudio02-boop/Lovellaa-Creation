import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ShopProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToCartQuick: (product: Product) => void;
  initialCategory?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Shop: React.FC<ShopProps> = ({
  products,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onAddToCartQuick,
  initialCategory = 'Tous',
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSize, setSelectedSize] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = ['Tous', 'Pyjamas', 'Robes', 'Lingerie', 'Sous-vêtements', 'Nouveautés'];
  const sizes = ['Tous', 'S', 'M', 'L', 'XL', 'XXL'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory === 'Nouveautés') {
        if (!p.isNew) return false;
      } else if (selectedCategory !== 'Tous' && p.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Size filter
      if (selectedSize !== 'Tous' && !p.sizes.includes(selectedSize)) {
        return false;
      }

      // Price filter
      if (p.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - b.price * -1 ? b.price - a.price : 0;
      if (sortBy === 'rating') return b.rating - a.rating;
      // newest
      return b.id.localeCompare(a.id);
    });
  }, [products, selectedCategory, searchQuery, selectedSize, maxPrice, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Title Header */}
      <div className="text-center space-y-3 bg-[#FCEEF3] py-12 rounded-3xl border border-[#F8DDE6]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B83D75]">Catalogue Lovellaa</span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#3D2933]">Notre Boutique</h1>
        <p className="text-sm text-[#5A3E4D] max-w-lg mx-auto">
          Explorez l'ensemble de nos créations féminines, pyjamas cocooning, robes et lingerie raffinée.
        </p>
      </div>

      {/* Filter Bar & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#F8DDE6]">
        
        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide shrink-0 transition ${
                selectedCategory === cat
                  ? 'bg-[#B83D75] text-white shadow-xs'
                  : 'bg-[#FCEEF3] text-[#3D2933] hover:bg-[#F8DDE6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 bg-[#FCEEF3] text-[#3D2933] px-4 py-2 rounded-xl text-xs font-bold"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#B83D75]" /> Filtres
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#FCEEF3] border border-[#F8DDE6] text-[#3D2933] text-xs font-bold px-4 py-2 rounded-xl outline-none"
          >
            <option value="newest">Nouveautés</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <div className={`lg:block ${mobileFiltersOpen ? 'block' : 'hidden'} space-y-6 bg-white p-6 rounded-3xl border border-[#F8DDE6] h-fit`}>
          <div className="flex items-center justify-between border-b border-[#FCEEF3] pb-4">
            <h3 className="font-serif font-bold text-base text-[#3D2933] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#B83D75]" /> Filtres avancés
            </h3>
            {mobileFiltersOpen && (
              <button onClick={() => setMobileFiltersOpen(false)} className="lg:hidden text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Box inside filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-[#3D2933]">Recherche</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Nom d'article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl pl-9 pr-4 py-2 text-xs outline-none"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#B83D75]" />
            </div>
          </div>

          {/* Sizes Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-[#3D2933]">Taille</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
                    selectedSize === sz
                      ? 'bg-[#B83D75] text-white border-[#B83D75]'
                      : 'bg-white text-[#3D2933] border-[#F8DDE6] hover:border-[#B83D75]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-[#3D2933]">
              <span>Prix maximum</span>
              <span className="text-[#B83D75]">{maxPrice.toLocaleString()} DA</span>
            </div>
            <input
              type="range"
              min={3000}
              max={10000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#B83D75] cursor-pointer"
            />
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSelectedCategory('Tous');
              setSelectedSize('Tous');
              setSearchQuery('');
              setMaxPrice(10000);
            }}
            className="w-full bg-[#FCEEF3] hover:bg-[#F8DDE6] text-[#3D2933] text-xs font-bold py-2.5 rounded-xl transition"
          >
            Réinitialiser les filtres
          </button>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-[#F8DDE6]">
              <h3 className="font-serif font-bold text-xl text-[#3D2933]">Aucun article trouvé</h3>
              <p className="text-xs text-[#5A3E4D]">Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Tous');
                  setSelectedSize('Tous');
                  setSearchQuery('');
                  setMaxPrice(10000);
                }}
                className="bg-[#B83D75] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md"
              >
                Voir tous les produits
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
          )}
        </div>

      </div>
    </div>
  );
};
