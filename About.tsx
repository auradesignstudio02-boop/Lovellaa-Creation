import React from 'react';
import { Heart, Sparkles, ShieldCheck, Truck, Instagram, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 bg-[#FCEEF3] py-16 px-6 rounded-3xl border border-[#F8DDE6]">
        <div className="w-16 h-16 rounded-full bg-[#B83D75] text-white flex items-center justify-center mx-auto shadow-lg">
          <Heart className="w-8 h-8 fill-white" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#B83D75]">Notre Histoire</span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#3D2933]">À propos de Lovellaa Creation</h1>
        <p className="text-base text-[#5A3E4D] max-w-2xl mx-auto leading-relaxed">
          {BRAND_CONFIG.subtitle}
        </p>
      </div>

      {/* Story & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#3D2933]">
            Célébrer la féminité et le confort au quotidien
          </h2>
          <p className="text-sm text-[#5A3E4D] leading-relaxed">
            Fondée en Algérie avec une vision passionnée, <strong className="text-[#B83D75]">Lovellaa Creation</strong> est née de l’envie d’offrir aux femmes des pièces à la fois sombres de mystère, lumineuses de douceur et d’un confort irréprochable.
          </p>
          <p className="text-sm text-[#5A3E4D] leading-relaxed">
            Que ce soit pour vos soirées cocooning dans nos pyjamas douillets, vos instants de détente ou vos tenues d’exception, chaque collection est pensée dans les moindres détails pour sublimer votre silhouette.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B83D75] hover:bg-[#962f60] text-white px-6 py-3.5 rounded-2xl font-bold text-xs flex items-center gap-2 transition shadow-md"
            >
              <Instagram className="w-4 h-4" /> Suivre @lovellaa_creation
            </a>
          </div>
        </div>

        <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="/public/assets/aistudio/image_6112952c.png"
            alt="Lovellaa Creation Atelier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F8DDE6] space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEEF3] text-[#B83D75] flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#3D2933]">Élégance & Raffinement</h3>
          <p className="text-xs text-[#5A3E4D] leading-relaxed">
            Des coupes cintrées, des matières douces et des finitions soignées pour vous faire sentir belle en toute circonstance.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F8DDE6] space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEEF3] text-[#B83D75] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#3D2933]">Qualité Garantie</h3>
          <p className="text-xs text-[#5A3E4D] leading-relaxed">
            Sélection rigoureuse des tissus (satin, dentelle, coton molletonné) pour allier résistance et douceur sur la peau.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F8DDE6] space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEEF3] text-[#B83D75] flex items-center justify-center mx-auto">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#3D2933]">Proximité & Livraison</h3>
          <p className="text-xs text-[#5A3E4D] leading-relaxed">
            Un service client à votre écoute sur WhatsApp et une livraison rapide dans les 58 Wilayas d’Algérie.
          </p>
        </div>
      </div>

    </div>
  );
};
