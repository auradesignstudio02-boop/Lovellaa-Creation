import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Instagram, Phone, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';
import { BRAND_CONFIG } from '../data/config';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'shop', label: 'Boutique' },
    { id: 'pyjamas', label: 'Pyjamas' },
    { id: 'robes', label: 'Robes' },
    { id: 'lingerie', label: 'Lingerie' },
    { id: 'nouveautes', label: 'Nouveautés' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#F8DDE6] shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#B83D75] text-[#FFFFFF] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>Livraison express disponible dans les 58 Wilayas d'Algérie • Paiement à la livraison</span>
        <a 
          href={BRAND_CONFIG.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 underline hover:text-[#F8DDE6] transition"
        >
          <Instagram className="w-3.5 h-3.5" /> {BRAND_CONFIG.instagramHandle}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3D2933] hover:text-[#B83D75] transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <div 
            onClick={() => setActivePage('home')} 
            className="cursor-pointer flex flex-col items-center md:items-start"
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#3D2933] tracking-wider flex items-center gap-2">
              <span className="text-[#B83D75]">Lovellaa</span> <span className="font-light text-xl md:text-2xl">Creation</span>
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-[#B83D75] font-semibold hidden sm:block">
              Lingerie & Mode Féminine
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                  activePage === link.id
                    ? 'text-[#B83D75] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B83D75]'
                    : 'text-[#3D2933] hover:text-[#B83D75]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-[#FCEEF3] border border-[#F8DDE6] rounded-full px-3 py-1 shadow-sm">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="text-xs outline-none bg-transparent w-36 sm:w-48 text-[#3D2933]"
                  />
                  <button 
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="text-[#3D2933] hover:text-[#B83D75] ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-[#3D2933] hover:text-[#B83D75] transition"
                  title="Rechercher"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-[#3D2933] hover:text-[#B83D75] transition relative"
              title="Favoris"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#B83D75] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="bg-[#F8DDE6] hover:bg-[#B83D75] hover:text-white text-[#3D2933] px-3.5 py-2 rounded-full flex items-center gap-2 transition shadow-xs group"
              title="Panier"
            >
              <ShoppingBag className="w-4 h-4 text-[#B83D75] group-hover:text-white transition" />
              <span className="text-xs font-bold">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#F8DDE6] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="py-2 mb-2 border-b border-[#FCEEF3]">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FCEEF3] px-4 py-2 rounded-lg text-xs outline-none text-[#3D2933]"
            />
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                activePage === link.id
                  ? 'bg-[#F8DDE6] text-[#B83D75] font-bold'
                  : 'text-[#3D2933] hover:bg-[#FCEEF3]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-[#F8DDE6] flex items-center justify-between text-xs text-[#3D2933]">
            <a 
              href={BRAND_CONFIG.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#B83D75] font-semibold"
            >
              <Instagram className="w-4 h-4" /> {BRAND_CONFIG.instagramHandle}
            </a>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#B83D75]" /> {BRAND_CONFIG.whatsappDisplay}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
