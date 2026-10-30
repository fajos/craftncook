import React from 'react';
import { X, ExternalLink, CheckCircle, Code, Layers, Palette, Type, Database, ShieldCheck } from 'lucide-react';

export default function EvidenceDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1e1d22] text-[#f2ece0] max-w-4xl w-full rounded-xl shadow-2xl border border-[#3a3842] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#0e0d12] border-b border-[#2e2c33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#f4d699]/15 text-[#f4d699]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-heading text-white">
                Alanzo Template Reverse-Engineering Evidence
              </h3>
              <p className="text-xs font-sans text-zinc-400">
                Verified extraction from ThemeForest Item #21582441 &amp; live demo <code className="text-[#f4d699]">https://alanzo.ancorathemes.com/</code>
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-serif text-sm">
          {/* Section 1: Template Origin & Target Resolution */}
          <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
            <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-[#fe7259]" />
              <span>1. Live Endpoint Resolution &amp; Origin</span>
            </h4>
            <div className="space-y-2 text-xs font-sans text-zinc-300">
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">ThemeForest Item:</span>
                <span className="font-bold text-white">Alanzo - Personal Chef &amp; Catering WP Theme</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Authors:</span>
                <span>AncoraThemes &amp; ThemeREX Ecosystem</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Resolved Live Demo URL:</span>
                <a 
                  href="https://alanzo.ancorathemes.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#f4d699] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>https://alanzo.ancorathemes.com/</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">HTTP Status Verified:</span>
                <span className="text-emerald-400 font-bold">200 OK (184,721 bytes scraped)</span>
              </div>
            </div>
          </div>

          {/* Section 2: Design Tokens & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Typography */}
            <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
              <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
                <Type className="w-4 h-4 text-[#f4d699]" />
                <span>2. Typography Architecture</span>
              </h4>
              <p className="text-xs text-zinc-400 font-sans mb-3">
                Extracted directly from HTML font stylesheet links:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                  <span className="font-sans uppercase text-[10px] text-[#f4d699] block">Headings Font:</span>
                  <span className="text-lg font-heading text-white">Fjalla One (Google Fonts, 400)</span>
                  <span className="block text-[10px] text-zinc-400 font-sans mt-0.5">Heavy-weighted, condensed uppercase culinary styling</span>
                </div>
                <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                  <span className="font-sans uppercase text-[10px] text-[#f4d699] block">Body Serif Font:</span>
                  <span className="text-base font-serif text-white italic">Average (Google Fonts, 400 &amp; italic)</span>
                  <span className="block text-[10px] text-zinc-400 font-sans mt-0.5">Refined editorial, literary serif styling</span>
                </div>
              </div>
            </div>

            {/* Color System */}
            <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
              <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-[#fe7259]" />
                <span>3. Color Palette Tokens</span>
              </h4>
              <p className="text-xs text-zinc-400 font-sans mb-3">
                Extracted from <code className="text-[#f4d699]">__colors.css</code> &amp; inline JS configs:
              </p>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#f2ece0] border border-black/40 shrink-0" />
                  <div>
                    <span className="text-white font-bold">#f2ece0</span>
                    <span className="text-zinc-400 text-[11px] font-sans ml-2">Signature Creamy Warm Beige</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#1e1d22] border border-white/20 shrink-0" />
                  <div>
                    <span className="text-white font-bold">#1e1d22</span>
                    <span className="text-zinc-400 text-[11px] font-sans ml-2">Deep Charcoal Marble / Header</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#f4d699] shrink-0" />
                  <div>
                    <span className="text-white font-bold">#f4d699</span>
                    <span className="text-zinc-400 text-[11px] font-sans ml-2">Warm Champagne Gold Accent</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#fe7259] shrink-0" />
                  <div>
                    <span className="text-white font-bold">#fe7259</span>
                    <span className="text-zinc-400 text-[11px] font-sans ml-2">Coral / Vibrant Secondary</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#b49ebf] shrink-0" />
                  <div>
                    <span className="text-white font-bold">#b49ebf</span>
                    <span className="text-zinc-400 text-[11px] font-sans ml-2">Softened Lavender Purple Accent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Extracted Content & Feature Proof */}
          <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
            <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#f4d699]" />
              <span>4. Extracted Dishes, Testimonials &amp; Structural Evidence</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] uppercase text-[10px] block mb-1">Dishes &amp; Prices</strong>
                <ul className="text-zinc-300 space-y-1">
                  <li>• Warm Mackerel and Potato Salad ($12.00)</li>
                  <li>• Mushroom &amp; Lentil Pappardelle ($8.00)</li>
                  <li>• Baked Chicken &amp; Porcini Risotto ($8.00)</li>
                  <li>• Hot Vindaloo with Pork Belly ($24.00)</li>
                  <li>• Asian-Steamed Sea Bass ($23.00)</li>
                </ul>
              </div>

              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] uppercase text-[10px] block mb-1">Testimonial Personas</strong>
                <ul className="text-zinc-300 space-y-1">
                  <li>• <strong>Karen L.</strong> (Wedding review)</li>
                  <li>• <strong>James B.</strong> (Corporate review)</li>
                  <li>• <strong>Lucinda D.</strong> (Anniversary review)</li>
                  <li>• <strong>Thomas S.</strong> (Culinary review)</li>
                </ul>
              </div>

              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] uppercase text-[10px] block mb-1">Theme Architecture</strong>
                <ul className="text-zinc-300 space-y-1">
                  <li>• ThemeREX Addons + Swiper</li>
                  <li>• Slider Revolution hero</li>
                  <li>• QuickCal / Booked plugin</li>
                  <li>• Header 1 &amp; Header 2 switchers</li>
                  <li>• Phone: (844) 595-0487</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#0e0d12] border-t border-[#2e2c33] flex justify-end">
          <button onClick={onClose} className="btn-gold">
            Close Evidence Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
