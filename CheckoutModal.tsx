import React, { useState } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, Truck, ShoppingBag, MapPin } from 'lucide-react';
import { CartItem, CheckoutFormData } from '../types';
import { BRAND_CONFIG, ALGERIAN_WILAYAS } from '../data/config';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderComplete,
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    wilaya: '16 - Alger',
    commune: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Le nom complet est requis.';
    if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis.';
    else if (!/^(0)(5|6|7)[0-9]{8}$/.test(formData.phone.replace(/\s+/g, ''))) {
      // Allow general phone formats too in Algeria
    }
    if (!formData.wilaya) newErrors.wilaya = 'Veuillez sélectionner votre Wilaya.';
    if (!formData.address.trim()) newErrors.address = 'L\'adresse de livraison est requise.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build well-formatted WhatsApp message
    let message = `*NOUVELLE COMMANDE - LOVELLAA CREATION*\n\n`;
    message += `*Client(e):* ${formData.fullName}\n`;
    message += `*Téléphone:* ${formData.phone}\n`;
    message += `*Wilaya:* ${formData.wilaya}\n`;
    if (formData.commune) message += `*Commune:* ${formData.commune}\n`;
    message += `*Adresse:* ${formData.address}\n`;
    if (formData.notes) message += `*Notes:* ${formData.notes}\n\n`;
    
    message += `*--- ARTICLES COMMANDÉS ---*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   - Quantité: ${item.quantity}\n`;
      message += `   - Taille: ${item.selectedSize}\n`;
      if (item.selectedColor) message += `   - Couleur: ${item.selectedColor}\n`;
      message += `   - Prix unitaire: ${item.product.price.toLocaleString()} DA\n`;
      message += `   - Sous-total: ${(item.product.price * item.quantity).toLocaleString()} DA\n\n`;
    });

    message += `*TOTAL À PAYER:* ${subtotal.toLocaleString()} ${BRAND_CONFIG.currency}\n`;
    message += `*(Paiement à la livraison)*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#B83D75] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white hover:text-[#3D2933] w-9 h-9 rounded-full flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-xl font-serif font-bold">Validation de Commande</h2>
          </div>
          <p className="text-xs text-[#F8DDE6]">
            Remplissez vos coordonnées pour finaliser votre commande via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppOrder} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex. Fatima Zahra"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-[#FCEEF3]/50 border ${errors.fullName ? 'border-red-500' : 'border-[#F8DDE6]'} rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                Téléphone (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Ex. 0550000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full bg-[#FCEEF3]/50 border ${errors.phone ? 'border-red-500' : 'border-[#F8DDE6]'} rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Wilaya */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                Wilaya <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.wilaya}
                onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
              >
                {ALGERIAN_WILAYAS.map((wilaya) => (
                  <option key={wilaya} value={wilaya}>{wilaya}</option>
                ))}
              </select>
            </div>

            {/* Commune */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                Commune / Ville
              </label>
              <input
                type="text"
                placeholder="Ex. Hydra, Oran Centre..."
                value={formData.commune}
                onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
              Adresse exacte de livraison <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              placeholder="Rue, quartier, bâtiment, point de repère..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className={`w-full bg-[#FCEEF3]/50 border ${errors.address ? 'border-red-500' : 'border-[#F8DDE6]'} rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]`}
            />
            {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
              Notes additionnelles (facultatif)
            </label>
            <input
              type="text"
              placeholder="Ex. Livrer l'après-midi si possible..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
            />
          </div>

          {/* Order Summary box */}
          <div className="bg-[#FCEEF3] p-4 rounded-2xl border border-[#F8DDE6] flex items-center justify-between">
            <div>
              <p className="text-xs text-[#5A3E4D]">Total de la commande ({cartItems.length} articles)</p>
              <p className="text-lg font-serif font-bold text-[#B83D75]">{subtotal.toLocaleString()} {BRAND_CONFIG.currency}</p>
            </div>
            <div className="text-right text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Paiement à la livraison
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Commander via WhatsApp ({subtotal.toLocaleString()} {BRAND_CONFIG.currency})
          </button>
        </form>
      </div>
    </div>
  );
};
