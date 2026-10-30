import React from 'react';
import { processSteps } from '../data/services';
import { CheckCircle2, Award, HeartHandshake, ChefHat, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f2ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Story Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Visual Composition with Chef and Plating */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Executive Black Chef */}
              <div className="rounded shadow-2xl overflow-hidden border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80"
                  alt="Executive Chef CraftnCook"
                  className="w-full h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Culinary Badge */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 bg-[#1e1d22] text-[#f2ece0] p-6 rounded shadow-2xl border border-[#f4d699]/30 max-w-[220px]">
                <div className="flex items-center gap-2 text-[#f4d699] mb-1">
                  <Award className="w-5 h-5" />
                  <span className="font-heading text-lg">18+ Years</span>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-tight">
                  Of Michelin-level private culinary mastery &amp; hospitality.
                </p>
              </div>

              {/* Decorative Accent Background Box */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#fe7259]/30 -z-10 rounded" />
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <span className="section-tag">Culinary Philosophy</span>
            <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-6 leading-tight">
              Eat and Be Happy: <br className="hidden sm:inline" />
              <span className="text-[#fe7259]">Where Precision</span> Meets Hospitality
            </h2>

            <div className="space-y-4 text-zinc-700 font-serif text-lg leading-relaxed mb-8">
              <p>
                At <strong>CraftnCook</strong>, food is more than nourishment; it is an intimate celebration of flavor, family, and Nigerian hospitality. Based in Lagos, we blend authentic traditional techniques—from firewood-smoked Party Jollof and rich heritage soups to exquisite bespoke celebration cakes—with contemporary culinary presentation.
              </p>
              <p className="text-base text-zinc-600">
                Whether orchestrating a 300-guest wedding banquet in Ikeja, delivering weekly gourmet soup bowls to Magodo and Lekki, or catering an intimate private anniversary dinner, Chef CraftnCook sources the freshest ingredients daily from local markets and sustainable fisheries.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3 bg-white/70 rounded border border-[#e4dcce]">
                <CheckCircle2 className="w-5 h-5 text-[#fe7259] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm text-[#1e1d22]">100% Bespoke Menus</h4>
                  <p className="text-xs text-zinc-600 font-serif">Never pre-set packages; every course is tailored to your palate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/70 rounded border border-[#e4dcce]">
                <CheckCircle2 className="w-5 h-5 text-[#fe7259] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm text-[#1e1d22]">Full Kitchen White-Glove Cleanup</h4>
                  <p className="text-xs text-zinc-600 font-serif">We leave your kitchen and venue spotless and immaculate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/70 rounded border border-[#e4dcce]">
                <CheckCircle2 className="w-5 h-5 text-[#fe7259] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm text-[#1e1d22]">Dietary Mastery</h4>
                  <p className="text-xs text-zinc-600 font-serif">Seamless vegan, celiac-safe gluten-free, and kosher-style catering.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/70 rounded border border-[#e4dcce]">
                <CheckCircle2 className="w-5 h-5 text-[#fe7259] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm text-[#1e1d22]">Sommelier Wine Pairings</h4>
                  <p className="text-xs text-zinc-600 font-serif">Curated vintage selections to elevate every single dish.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={onOpenBooking}
                className="btn-dark"
              >
                Schedule A Consultation
              </button>
              
              <div className="flex items-center gap-3">
                <ChefHat className="w-8 h-8 text-[#fe7259]" />
                <div className="text-xs font-sans">
                  <span className="block font-bold text-[#1e1d22] uppercase tracking-wider">Chef CraftnCook &amp; Brigade</span>
                  <span className="text-zinc-500">Executive Culinary Direction • Lagos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "The Process" Section (Identical to Alanzo's "The Process" Section) */}
        <div className="bg-[#1e1d22] text-white rounded-lg p-8 sm:p-14 shadow-2xl border border-[#3a3842] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4d699]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-sans uppercase text-xs tracking-[0.25em] text-[#f4d699] font-semibold block mb-2">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading tracking-wide mb-4 text-white">
              The Process: From Vision to Table
            </h2>
            <div className="ornament-line" />
            <p className="text-zinc-300 font-serif text-base leading-relaxed">
              We eliminate every ounce of stress from hosting, guiding you through a smooth, consultative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="relative bg-[#2e2c33]/70 p-6 rounded border border-[#3a3842] hover:border-[#f4d699]/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-heading text-[#f4d699] mb-4 group-hover:scale-110 transition-transform origin-left">
                  {step.step}
                </div>
                <h3 className="text-lg font-heading tracking-wide text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1e1d22] border border-[#f4d699]/30 text-[#f4d699] flex items-center justify-center text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
