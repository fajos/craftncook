import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Utensils, Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

export default function HeroSlider({ onOpenBooking, onSelectService }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Bespoke Catering & Event Hospitality",
      title: "Experience The Sublime!",
      description: "CraftnCook curates legendary firewood Smokey Party Jollof, artisanal Nigerian soup bowls, custom celebration cakes, and private dining across Lagos.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Explore Menus & Soups",
      ctaHref: "#menus",
      accent: "Lagos Premier Catering"
    },
    {
      subtitle: "Weddings, Birthdays & Anniversaries",
      title: "Artisan Cakes & Grand Banquets",
      description: "From magnificent multi-tier wedding cakes to crispy Small Chops fiesta platters and luxury seafood feasts, every occasion is curated with passion.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Book An Event",
      ctaHref: "#booking",
      accent: "Bespoke Pastry & Cuisine"
    },
    {
      subtitle: "Doorstep Delivery Across Lagos",
      title: "Table-Ready Gourmet Soup Bowls",
      description: "Rich Egusi, Seafood Okra, and Efo Riro delivered freshly prepared in 2L, 3L & 5L containers. Wholesome home-style nutrition ready whenever you crave it.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Order Soup Bowls",
      ctaHref: "#menus",
      accent: "Fresh Natural Ingredients"
    }
  ];

  // Auto-advance slides every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#1e1d22]">
      {/* Slides Container */}
      <div className="relative h-[620px] sm:h-[700px] w-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Dark Vignette Gradient */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 transform scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d12]/95 via-[#1e1d22]/80 to-[#1e1d22]/40" />

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4d699]/15 border border-[#f4d699]/30 text-[#f4d699] font-sans text-xs uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{slide.subtitle}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading text-white tracking-wide leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-lg sm:text-xl text-[#f2ece0]/85 font-serif leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenBooking}
                    className="btn-gold flex items-center gap-2 group"
                  >
                    <span>Reserve Event Date</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/2348078604886?text=Hello%20CraftnCook,%20I%20would%20like%20to%20inquire%20about%20catering"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded font-sans uppercase tracking-widest text-xs font-semibold shadow-lg transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </a>

                  <a
                    href={slide.ctaHref}
                    className="btn-outline-gold"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#f4d699] text-white hover:text-[#1e1d22] flex items-center justify-center transition-all border border-white/20 backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#f4d699] text-white hover:text-[#1e1d22] flex items-center justify-center transition-all border border-white/20 backdrop-blur-sm"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-8 bg-[#f4d699]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 3 Signature Quick Feature Cards */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Event Catering & Smokey Jollof */}
          <div className="bg-[#fbf8f3] text-[#222222] p-8 rounded-sm shadow-xl border-t-4 border-[#fe7259] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#fe7259]">01</span>
              <div className="w-12 h-12 rounded-full bg-[#fe7259]/10 text-[#fe7259] flex items-center justify-center group-hover:bg-[#fe7259] group-hover:text-white transition-colors">
                <Award className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-[#1e1d22] mb-2 tracking-wide">
              Event &amp; Party Catering
            </h3>
            <p className="text-sm text-zinc-600 font-serif leading-relaxed mb-4">
              Famous for our firewood-smoked Party Jollof, spicy small chops, and complete banquet orchestration for weddings and celebrations.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#1e1d22] group-hover:text-[#fe7259] transition-colors"
            >
              <span>Explore Catering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Gourmet Soups Delivery */}
          <div className="bg-[#1e1d22] text-[#f2ece0] p-8 rounded-sm shadow-xl border-t-4 border-[#f4d699] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#f4d699]">02</span>
              <div className="w-12 h-12 rounded-full bg-[#f4d699]/15 text-[#f4d699] flex items-center justify-center group-hover:bg-[#f4d699] group-hover:text-[#1e1d22] transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-white mb-2 tracking-wide">
              Gourmet Nigerian Soups
            </h3>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed mb-4">
              Authentic Egusi, Seafood Okra, and Efo Riro prepared in 2L, 3L &amp; 5L containers delivered fresh to your home or office in Lagos.
            </p>
            <a 
              href="#menus" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#f4d699] hover:underline transition-colors"
            >
              <span>Order Soup Bowls</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Custom Cakes & Bakes */}
          <div className="bg-[#fbf8f3] text-[#222222] p-8 rounded-sm shadow-xl border-t-4 border-[#b49ebf] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#a68eb2]">03</span>
              <div className="w-12 h-12 rounded-full bg-[#b49ebf]/20 text-[#8f749d] flex items-center justify-center group-hover:bg-[#b49ebf] group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-[#1e1d22] mb-2 tracking-wide">
              Bespoke Custom Cakes
            </h3>
            <p className="text-sm text-zinc-600 font-serif leading-relaxed mb-4">
              Stunning custom wedding cakes, birthday tiers, and dessert tables sculpted with rich buttercreams and premium vanilla beans.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#1e1d22] group-hover:text-[#8f749d] transition-colors"
            >
              <span>Custom Cake Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
