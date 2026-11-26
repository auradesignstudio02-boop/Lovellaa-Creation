import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Phone, Check, Truck, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/config';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onDirectWhatsAppOrder: (product: Product, size: string, color: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectWhatsAppOrder,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToCartClick = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    onDirectWhatsAppOrder(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-[#B83D75] hover:text-white text-[#3D2933] w-10 h-10 rounded-full flex items-center justify-center transition shadow-md"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Images */}
        <div className="md:w-1/2 bg-[#FCEEF3] p-6 flex flex-col justify-between">
          <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-md bg-white mb-4">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-[#B83D75] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Content */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-bold text-[#B83D75] bg-[#F8DDE6] px-3 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-[#3D2933] font-semibold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400 text-xs">({product.reviewsCount} avis)</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3D2933]">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[#B83D75]">
                {product.price.toLocaleString()} {BRAND_CONFIG.currency}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-base text-gray-400 line-through">
                  {product.originalPrice.toLocaleString()} {BRAND_CONFIG.currency}
                </span>
              )}
            </div>

            <p className="text-sm text-[#5A3E4D] leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3D2933]">
                  Couleur: <span className="font-normal text-[#B83D75]">{selectedColor}</span>
                </label>
                <div className="flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 transition flex items-center justify-center ${
                        selectedColor === c.name ? 'border-[#B83D75] scale-110 shadow-sm' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-4 h-4 ${c.hex === '#FFFFFF' || c.hex === '#ffffff' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3D2933]">
                  Taille <span className="text-red-500">*</span>: <span className="font-normal text-[#B83D75]">{selectedSize || 'Sélectionnez'}</span>
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => {
                      setSelectedSize(sz);
                      setSizeError(false);
                    }}
                    className={`min-w-12 h-10 px-3 rounded-xl font-medium text-sm transition border ${
                      selectedSize === sz
                        ? 'bg-[#B83D75] text-white border-[#B83D75] shadow-xs'
                        : 'bg-white text-[#3D2933] border-[#F8DDE6] hover:border-[#B83D75]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-xs text-red-500 font-medium">Veuillez sélectionner une taille avant de continuer.</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D2933]">Quantité:</span>
              <div className="flex items-center border border-[#F8DDE6] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-[#3D2933] hover:bg-[#FCEEF3] transition font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-sm font-bold text-[#3D2933]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-[#3D2933] hover:bg-[#FCEEF3] transition font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#FCEEF3] text-xs text-[#5A3E4D]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B83D75]" />
                <span>Livraison 58 Wilayas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B83D75]" />
                <span>Paiement à la livraison</span>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 mt-6 border-t border-[#F8DDE6]">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCartClick}
                className="flex-1 bg-[#F8DDE6] hover:bg-[#B83D75] hover:text-white text-[#3D2933] py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                {addedSuccess ? 'Ajouté au panier !' : 'Ajouter au panier'}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition flex items-center justify-center ${
                  isWishlisted
                    ? 'bg-[#B83D75] text-white border-[#B83D75]'
                    : 'bg-white text-[#3D2933] border-[#F8DDE6] hover:border-[#B83D75]'
                }`}
                title="Favoris"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-md"
            >
              <Phone className="w-4 h-4" />
              Commander directement via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
