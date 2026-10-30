import React, { useState } from 'react';
import { services } from '../data/services';
import { ArrowRight, Check, Sparkles, X } from 'lucide-react';

export default function ServicesSection({ onOpenBooking, onSelectServiceForBooking }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fbf8f3] border-t border-b border-[#e4dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Bespoke Offerings</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            We Specialize in Intimate Catering
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            From candlelit residence dining to grand galas and interactive workshops, discover culinary services tailored to your taste.
          </p>
        </div>

        {/* Services Grid (6 Cards mirroring Alanzo's full services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded overflow-hidden shadow-lg border border-[#e4dcce] hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-sans uppercase tracking-widest font-semibold bg-[#fe7259] px-2.5 py-1 rounded">
                    {service.priceRange}
                  </span>
                  <span className="text-xs font-sans text-zinc-300">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-heading text-[#1e1d22] mb-2 group-hover:text-[#fe7259] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 font-serif leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-sans uppercase tracking-widest font-bold text-[#1e1d22] group-hover:text-[#fe7259] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Inclusions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="text-xs font-sans font-semibold text-[#1e1d22] bg-[#f4d699] px-3.5 py-1.5 rounded hover:bg-[#e6c47c] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#fbf8f3] max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden border border-[#e4dcce] max-h-[90vh] flex flex-col">
            <div className="relative h-60">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white drop-shadow-md">
                <span className="text-xs font-sans uppercase tracking-widest font-semibold bg-[#fe7259] px-2.5 py-1 rounded inline-block mb-1">
                  {activeModalService.priceRange}
                </span>
                <h3 className="text-3xl font-heading">{activeModalService.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-zinc-700 font-serif text-base leading-relaxed">
                {activeModalService.longDescription}
              </p>

              <div>
                <h4 className="font-heading text-lg text-[#1e1d22] mb-3">Service Inclusions:</h4>
                <ul className="space-y-2">
                  {activeModalService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 font-serif">
                      <Check className="w-4 h-4 text-[#fe7259] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#e4dcce] flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 rounded font-sans uppercase text-xs tracking-wider text-zinc-600 hover:bg-zinc-200 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="btn-gold"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
