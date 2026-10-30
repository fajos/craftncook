import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const item = testimonials[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#f2ece0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Heading matching Alanzo testimonials */}
        <span className="section-tag">Word of Mouth</span>
        <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
          What Customers Are Saying About Us
        </h2>
        <div className="ornament-line" />

        {/* Carousel Container */}
        <div className="mt-12 relative bg-white/80 p-8 sm:p-14 rounded-2xl shadow-xl border border-[#e4dcce] min-h-[340px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-[#f4d699] mx-auto opacity-70 mb-4" />

          {/* Rating */}
          <div className="flex justify-center gap-1 text-[#fe7259] mb-6">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Quote Body */}
          <p className="text-lg sm:text-2xl font-serif text-[#1e1d22] italic leading-relaxed mb-8 max-w-2xl mx-auto">
            "{item.quote}"
          </p>

          {/* Author Details (Avatar, Name, Role, Location) */}
          <div className="flex flex-col items-center">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#f4d699] shadow mb-3"
            />
            <h4 className="font-heading text-lg text-[#1e1d22] tracking-wider">
              {item.name}
            </h4>
            <span className="text-xs font-sans uppercase tracking-widest text-zinc-500 font-semibold">
              {item.role} • {item.location}
            </span>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e1d22] text-[#f4d699] flex items-center justify-center shadow-lg hover:bg-[#fe7259] hover:text-white transition"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e1d22] text-[#f4d699] flex items-center justify-center shadow-lg hover:bg-[#fe7259] hover:text-white transition"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 transition-all rounded-full ${
                i === activeIndex ? 'w-6 bg-[#fe7259]' : 'w-2 bg-zinc-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
