import React, { useState } from 'react';
import { galleryImages, galleryCategories } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#fbf8f3] border-t border-[#e4dcce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">Visual Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            Culinary Craft &amp; Event Gallery
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            A window into the plating elegance, private estates, and unforgettable celebrations we bring to life.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-sans uppercase text-xs tracking-wider font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-[#1e1d22] text-[#f4d699]'
                  : 'bg-white text-zinc-700 hover:bg-zinc-200 border border-[#e4dcce]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img)}
              className="relative group h-72 rounded overflow-hidden shadow-md cursor-pointer border border-[#e4dcce]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#f4d699] font-bold">
                  {img.subtitle}
                </span>
                <h4 className="font-heading text-lg leading-tight mb-1">
                  {img.title}
                </h4>
                <div className="inline-flex items-center gap-1 text-xs text-zinc-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#f4d699] p-2 transition"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center text-white mt-4">
              <span className="text-xs uppercase font-sans tracking-widest text-[#f4d699] font-semibold block">
                {selectedImage.subtitle}
              </span>
              <h3 className="text-2xl font-heading mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
