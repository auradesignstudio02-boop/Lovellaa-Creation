import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Phone } from 'lucide-react';
import { CartItem } from '../types';
import { BRAND_CONFIG } from '../data/config';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#F8DDE6] flex items-center justify-between bg-[#FCEEF3]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B83D75]" />
              <h2 className="text-xl font-serif font-bold text-[#3D2933]">Mon Panier</h2>
              <span className="bg-[#B83D75] text-white text-xs px-2 py-0.5 rounded-full font-bold ml-2">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#3D2933] hover:text-[#B83D75] transition rounded-full hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500 py-12">
                <div className="w-20 h-20 rounded-full bg-[#FCEEF3] flex items-center justify-center text-[#B83D75] mb-2">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#3D2933]">Votre panier est vide</h3>
                <p className="text-xs text-[#5A3E4D] max-w-xs">
                  Découvrez notre collection exclusive de pyjamas, robes et lingerie et ajoutez vos coups de cœur.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#B83D75] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#962f60] transition"
                >
                  Découvrir la collection
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="flex gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50 border border-[#F8DDE6] relative group">
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-white shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-semibold text-sm text-[#3D2933] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-[#5A3E4D] mt-1">
                        <span>Taille: <strong className="text-[#B83D75]">{item.selectedSize}</strong></span>
                        {item.selectedColor && (
                          <span>Couleur: <strong className="text-[#B83D75]">{item.selectedColor}</strong></span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#F8DDE6] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#3D2933] hover:bg-[#FCEEF3]"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 text-xs font-bold text-[#3D2933]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#3D2933] hover:bg-[#FCEEF3]"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold text-sm text-[#B83D75]">
                        {(item.product.price * item.quantity).toLocaleString()} {BRAND_CONFIG.currency}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 transition"
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#F8DDE6] bg-white space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#5A3E4D]">
                  <span>Sous-total</span>
                  <span className="font-semibold text-[#3D2933]">{subtotal.toLocaleString()} {BRAND_CONFIG.currency}</span>
                </div>
                <div className="flex justify-between text-[#5A3E4D]">
                  <span>Livraison (58 Wilayas)</span>
                  <span className="text-emerald-600 font-semibold">Calculée à l'étape suivante</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#3D2933] pt-2 border-t border-[#FCEEF3]">
                  <span>Total estimé</span>
                  <span className="text-xl text-[#B83D75]">{subtotal.toLocaleString()} {BRAND_CONFIG.currency}</span>
                </div>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full bg-[#B83D75] hover:bg-[#962f60] text-white py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg"
              >
                <span>Passer la commande (WhatsApp)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
