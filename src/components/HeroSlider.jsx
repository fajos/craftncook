import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Utensils, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSlider({ onOpenBooking, onSelectService }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Personal Chef & Catering Services",
      title: "Experience The Sublime!",
      description: "CraftnCook curates artisanal private dining, luxury wedding galas, and bespoke culinary journeys tailored with uncompromising excellence.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Explore Menus",
      ctaHref: "#menus",
      accent: "Farm-to-Table Gastronomy"
    },
    {
      subtitle: "Intimate Occasions & Milestones",
      title: "Artistry in Every Course",
      description: "From candlelit five-course dinners in your residence to prestigious corporate receptions, every ingredient is selected for peak seasonal flavor.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Book An Event",
      ctaHref: "#booking",
      accent: "Michelin-Trained Chefs"
    },
    {
      subtitle: "Weekly Gourmet Living",
      title: "Table-Ready Gourmet Meals",
      description: "Reclaim your precious time. Fresh, organic, chef-crafted meals prepared in your kitchen and ready to savor whenever you desire.",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1920&q=80",
      ctaText: "Discover Services",
      ctaHref: "#services",
      accent: "Custom Nutrition & Taste"
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
                    <span>Reserve Your Date</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

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

      {/* 3 Signature Quick Feature Cards (Direct from Alanzo Theme Evidence) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Catering Services */}
          <div className="bg-[#fbf8f3] text-[#222222] p-8 rounded-sm shadow-xl border-t-4 border-[#fe7259] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#fe7259]">01</span>
              <div className="w-12 h-12 rounded-full bg-[#fe7259]/10 text-[#fe7259] flex items-center justify-center group-hover:bg-[#fe7259] group-hover:text-white transition-colors">
                <Award className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-[#1e1d22] mb-2 tracking-wide">
              Catering Services
            </h3>
            <p className="text-sm text-zinc-600 font-serif leading-relaxed mb-4">
              Our menu features time-honored favorites and contemporary culinary craft that have come to define unforgettable event dining.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#1e1d22] group-hover:text-[#fe7259] transition-colors"
            >
              <span>Explore Catering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Table Ready Meals */}
          <div className="bg-[#1e1d22] text-[#f2ece0] p-8 rounded-sm shadow-xl border-t-4 border-[#f4d699] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#f4d699]">02</span>
              <div className="w-12 h-12 rounded-full bg-[#f4d699]/15 text-[#f4d699] flex items-center justify-center group-hover:bg-[#f4d699] group-hover:text-[#1e1d22] transition-colors">
                <Utensils className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-white mb-2 tracking-wide">
              Table Ready Meals
            </h3>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed mb-4">
              Weekly personal chef visits to curate custom, nutrient-rich meals packaged in your home and ready to heat whenever you wish.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#f4d699] hover:underline transition-colors"
            >
              <span>Weekly Meal Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Sample Menus */}
          <div className="bg-[#fbf8f3] text-[#222222] p-8 rounded-sm shadow-xl border-t-4 border-[#b49ebf] hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-3xl text-[#a68eb2]">03</span>
              <div className="w-12 h-12 rounded-full bg-[#b49ebf]/20 text-[#8f749d] flex items-center justify-center group-hover:bg-[#b49ebf] group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-heading text-[#1e1d22] mb-2 tracking-wide">
              Sample Menus
            </h3>
            <p className="text-sm text-zinc-600 font-serif leading-relaxed mb-4">
              Explore our dinner, brunch, vegan and gluten-free degustation portfolios crafted with pristine seasonal ingredients.
            </p>
            <a 
              href="#menus" 
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#1e1d22] group-hover:text-[#8f749d] transition-colors"
            >
              <span>View Tasting Menus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
