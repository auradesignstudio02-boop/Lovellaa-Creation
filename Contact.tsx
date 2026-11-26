import React, { useState } from 'react';
import { Phone, Instagram, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 bg-[#FCEEF3] py-16 px-6 rounded-3xl border border-[#F8DDE6]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B83D75]">Nous Contacter</span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#3D2933]">Parlons de vous</h1>
        <p className="text-base text-[#5A3E4D] max-w-lg mx-auto">
          Une question sur nos tailles, une commande spéciale ou un conseil ? Notre équipe est à votre écoute.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F8DDE6] space-y-6">
            <h3 className="font-serif font-bold text-2xl text-[#3D2933]">Nos Coordonnées</h3>
            
            <div className="space-y-4 text-sm text-[#5A3E4D]">
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50 hover:bg-[#FCEEF3] transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">WhatsApp Direct</span>
                  <span className="font-bold text-[#3D2933] text-base group-hover:text-emerald-600 transition">
                    {BRAND_CONFIG.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50 hover:bg-[#FCEEF3] transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B83D75] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Instagram Officiel</span>
                  <span className="font-bold text-[#3D2933] text-base group-hover:text-[#B83D75] transition">
                    {BRAND_CONFIG.instagramHandle}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
                <div className="w-12 h-12 rounded-xl bg-[#3D2933] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Localisation</span>
                  <span className="font-bold text-[#3D2933] text-base">
                    {BRAND_CONFIG.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCEEF3]/50">
                <div className="w-12 h-12 rounded-xl bg-[#B83D75] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Horaires de service</span>
                  <span className="font-bold text-[#3D2933] text-sm">
                    {BRAND_CONFIG.customerServiceHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F8DDE6]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-[#3D2933]">Envoyez-nous un message</h3>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2 text-emerald-800">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">Message envoyé avec succès !</h4>
                <p className="text-xs">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                    Votre Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex. Amel Benali"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                    Email ou Téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. amel@gmail.com ou 0550..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D2933] mb-1">
                    Votre Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FCEEF3]/50 border border-[#F8DDE6] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#B83D75]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B83D75] hover:bg-[#962f60] text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Send className="w-4 h-4" /> Envoyer le message
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};
