import React from 'react';
import { Instagram, Phone, MapPin, Clock, Heart, Mail, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { ActivePage } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-[#3D2933] text-[#FCEEF3] pt-16 pb-12 border-t-4 border-[#B83D75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#FFFFFF] tracking-wide">
              <span className="text-[#F8DDE6]">Lovellaa</span> Creation
            </h3>
            <p className="text-sm text-[#E5D4DC] leading-relaxed">
              {BRAND_CONFIG.tagline}. {BRAND_CONFIG.subtitle}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#B83D75]/30 flex items-center justify-center hover:bg-[#B83D75] transition text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600/30 flex items-center justify-center hover:bg-emerald-600 transition text-white"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] border-b border-[#B83D75]/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-[#F8DDE6] transition">Accueil</button>
              </li>
              <li>
                <button onClick={() => setActivePage('shop')} className="hover:text-[#F8DDE6] transition">Boutique Complète</button>
              </li>
              <li>
                <button onClick={() => setActivePage('pyjamas')} className="hover:text-[#F8DDE6] transition">Pyjamas Cocooning</button>
              </li>
              <li>
                <button onClick={() => setActivePage('robes')} className="hover:text-[#F8DDE6] transition">Robes & Tenues</button>
              </li>
              <li>
                <button onClick={() => setActivePage('lingerie')} className="hover:text-[#F8DDE6] transition">Lingerie & Nuit</button>
              </li>
              <li>
                <button onClick={() => setActivePage('nouveautes')} className="hover:text-[#F8DDE6] transition">Nouveautés</button>
              </li>
            </ul>
          </div>

          {/* Customer Service & Delivery */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] border-b border-[#B83D75]/40 pb-2">
              Informations & Aide
            </h4>
            <ul className="space-y-3 text-sm text-[#E5D4DC]">
              <li className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#F8DDE6] shrink-0 mt-0.5" />
                <span>Livraison 58 Wilayas avec paiement à la réception.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#F8DDE6] shrink-0 mt-0.5" />
                <span>Articles rigoureusement sélectionnés pour votre confort.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F8DDE6] shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.customerServiceHours}</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-[#FFFFFF] border-b border-[#B83D75]/40 pb-2">
              Contactez-nous
            </h4>
            <ul className="space-y-3 text-sm text-[#E5D4DC]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F8DDE6] shrink-0" />
                <a href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`} className="hover:underline">
                  {BRAND_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#F8DDE6] shrink-0" />
                <a href={BRAND_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {BRAND_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F8DDE6] shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#5A3E4D] text-center text-xs text-[#C5A8B5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lovellaa Creation. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-3.5 h-3.5 text-[#B83D75] fill-[#B83D75]" /> pour les femmes algériennes élégantes.
          </p>
        </div>
      </div>
    </footer>
  );
};
