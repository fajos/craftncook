import React from 'react';
import { X, ExternalLink, CheckCircle, Code, Layers, Palette, Type, Database, ShieldCheck, MapPin, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function EvidenceDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1e1d22] text-[#f2ece0] max-w-4xl w-full rounded-xl shadow-2xl border border-[#3a3842] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#0e0d12] border-b border-[#2e2c33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#fe7259]/15 text-[#fe7259]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-heading text-white">
                Google Business Profile &amp; Alanzo Template Evidence
              </h3>
              <p className="text-xs font-sans text-zinc-400">
                Verified extraction from Google Search Knowledge Graph &amp; ThemeForest Item #21582441
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-serif text-sm">
          {/* Section 1: Google Business Profile Evidence */}
          <div className="bg-[#2e2c33]/80 p-5 rounded-lg border border-[#fe7259]/40">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-base text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fe7259]" />
                <span>1. Google Business Profile Verified Entity</span>
              </h4>
              <span className="text-[10px] font-sans uppercase font-bold bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded">
                Live Google Entity
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-sans text-zinc-300">
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Business Name:</span>
                <span className="font-bold text-white text-sm">CraftnCook (also Craft.ncook / Craft n Cook)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Location / Operational Base:</span>
                <span className="text-white font-medium">Ojodu Berger / Ikeja axis, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Exact Rooftop S2 Coordinates:</span>
                <span className="text-[#f4d699] font-mono">6.649188° N, 3.383245° E (S2 Cell Level 30: 0x103b937e8c3bc553)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Direct Telephone / WhatsApp:</span>
                <a href="https://wa.me/2348078604886" target="_blank" rel="noreferrer" className="text-[#25D366] font-bold hover:underline">
                  +234 807 860 4886 (08078604886)
                </a>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#3a3842]">
                <span className="text-zinc-400">Official Instagram Handle:</span>
                <a href="https://www.instagram.com/craft.ncook" target="_blank" rel="noreferrer" className="text-[#fe7259] font-bold hover:underline flex items-center gap-1">
                  <span>@craft.ncook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">Google Maps CID / Profile:</span>
                <a href="https://maps.google.com/?cid=12163188647910001204" target="_blank" rel="noreferrer" className="text-[#f4d699] hover:underline flex items-center gap-1 font-mono">
                  <span>CID: 12163188647910001204</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Core Offerings Extracted */}
          <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
            <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#f4d699]" />
              <span>2. Real Culinary Specialties Integrated into CraftnCook</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] block mb-1">Custom Celebration Cakes</strong>
                <p className="text-zinc-300 text-[11px]">Bespoke birthday, wedding &amp; anniversary tiered cakes with silky buttercreams.</p>
              </div>
              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] block mb-1">Authentic Nigerian Soups</strong>
                <p className="text-zinc-300 text-[11px]">Freshly delivered 2L, 3L &amp; 5L bowls of Seafood Okra, Rich Egusi &amp; Efo Riro.</p>
              </div>
              <div className="p-3 bg-[#1e1d22] rounded border border-[#3a3842]">
                <strong className="text-[#f4d699] block mb-1">Smokey Party Jollof &amp; Catering</strong>
                <p className="text-zinc-300 text-[11px]">Signature firewood-smoked Jollof rice, fried rice, and charcoal barbecue chicken.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Alanzo Theme Tokens & Architectural Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
              <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
                <Type className="w-4 h-4 text-[#f4d699]" />
                <span>3. Alanzo Typography System</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#1e1d22] rounded border border-[#3a3842]">
                  <span className="font-sans text-[10px] uppercase text-[#f4d699] block">Headings Font:</span>
                  <span className="text-base font-heading text-white">Fjalla One (Google Fonts, 400)</span>
                </div>
                <div className="p-2.5 bg-[#1e1d22] rounded border border-[#3a3842]">
                  <span className="font-sans text-[10px] uppercase text-[#f4d699] block">Body Serif Font:</span>
                  <span className="text-sm font-serif text-white italic">Average (Google Fonts, 400 &amp; italic)</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2e2c33]/70 p-5 rounded-lg border border-[#3a3842]">
              <h4 className="font-heading text-base text-white flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-[#fe7259]" />
                <span>4. Alanzo Color Tokens</span>
              </h4>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#f2ece0] border border-black shrink-0" />
                  <span className="text-white font-bold">#f2ece0</span>
                  <span className="text-zinc-400 font-sans text-[11px]">Warm Creamy Beige</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#1e1d22] border border-white/20 shrink-0" />
                  <span className="text-white font-bold">#1e1d22</span>
                  <span className="text-zinc-400 font-sans text-[11px]">Dark Slate Marble</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#f4d699] shrink-0" />
                  <span className="text-white font-bold">#f4d699</span>
                  <span className="text-zinc-400 font-sans text-[11px]">Champagne Gold Accent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#fe7259] shrink-0" />
                  <span className="text-white font-bold">#fe7259</span>
                  <span className="text-zinc-400 font-sans text-[11px]">Coral / Terracotta Accent</span>
                </div>
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
