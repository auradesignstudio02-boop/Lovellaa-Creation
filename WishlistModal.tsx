import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/config';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onSelectProduct: (product: Product) => void;
  onRemoveFromWishlist: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onSelectProduct,
  onRemoveFromWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#F8DDE6] flex items-center justify-between bg-[#FCEEF3]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#B83D75] fill-[#B83D75]" />
              <h2 className="text-xl font-serif font-bold text-[#3D2933]">Mes Favoris</h2>
              <span className="bg-[#B83D75] text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2">
                {wishlistItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#3D2933] hover:text-[#B83D75] transition rounded-full hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500 py-12">
                <div className="w-20 h-20 rounded-full bg-[#FCEEF3] flex items-center justify-center text-[#B83D75] mb-2">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#3D2933]">Aucun favori pour l'instant</h3>
                <p className="text-xs text-[#5A3E4D] max-w-xs">
                  Cliquez sur l'icône de cœur sur les articles qui vous font craquer pour les retrouver ici.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#B83D75] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#962f60] transition"
                >
                  Explorer la boutique
                </button>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex gap-4 p-4 rounded-2xl bg-[#FCEEF3]/40 border border-[#F8DDE6] relative group cursor-pointer hover:border-[#B83D75] transition"
                >
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-white shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#B83D75]">{product.category}</span>
                      <h4 className="font-serif font-semibold text-sm text-[#3D2933] line-clamp-1 mt-0.5">
                        {product.name}
                      </h4>
                      <p className="font-bold text-sm text-[#B83D75] mt-1">
                        {product.price.toLocaleString()} {BRAND_CONFIG.currency}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="bg-[#F8DDE6] hover:bg-[#B83D75] hover:text-white text-[#3D2933] text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Voir / Commander
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFromWishlist(product);
                    }}
                    className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 transition"
                    title="Retirer des favoris"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
