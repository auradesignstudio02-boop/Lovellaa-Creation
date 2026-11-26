import React from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCartQuick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  isWishlisted,
  onToggleWishlist,
  onAddToCartQuick,
}) => {
  return (
    <div className="group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#F8DDE6] flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-[#FCEEF3] cursor-pointer" onClick={() => onSelectProduct(product)}>
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#B83D75]">Lovellaa</div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#B83D75] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Nouveau
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-[#3D2933] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              Promo
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
            isWishlisted
              ? 'bg-[#B83D75] text-white'
              : 'bg-white/90 text-[#3D2933] hover:bg-[#B83D75] hover:text-white'
          }`}
          aria-label="Favoris"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-150 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="bg-white text-[#3D2933] hover:bg-[#B83D75] hover:text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" /> Voir le produit
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white">
        <div>
          <div className="flex items-center justify-between text-xs text-[#8c6d7d] mb-1">
            <span className="uppercase tracking-wider font-semibold text-[#B83D75]">{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif font-semibold text-[#3D2933] text-base hover:text-[#B83D75] transition cursor-pointer line-clamp-1 mb-2"
          >
            {product.name}
          </h3>
        </div>

        <div className="pt-2 border-t border-[#FCEEF3] flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-[#B83D75]">
                {product.price.toLocaleString()} <span className="text-xs font-normal">DA</span>
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  {product.originalPrice.toLocaleString()} DA
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onSelectProduct(product)}
            className="bg-[#F8DDE6] hover:bg-[#B83D75] hover:text-white text-[#3D2933] p-2 rounded-full transition"
            title="Commander / Détails"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
