import React, { useState } from 'react';
import { dishes, menuCategories } from '../data/dishes';
import { Search, Plus, Check, Eye, Leaf, Shield, Sparkles } from 'lucide-react';

export default function MenuSection({ 
  onSelectDishModal, 
  onAddToBasket, 
  tastingBasket 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);

  // Filter dishes based on tab, search query, and dietary toggles
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGf = !filterGlutenFree || dish.isGlutenFree;
    const matchesVegan = !filterVegan || dish.isVegan;
    return matchesCategory && matchesSearch && matchesGf && matchesVegan;
  });

  const isDishInBasket = (id) => {
    return tastingBasket.some((item) => item.id === id);
  };

  return (
    <section id="menus" className="py-20 sm:py-28 bg-[#f2ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading matching Alanzo Menus section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">Gourmet Selection</span>
          <h2 className="text-4xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            Menus &amp; Signature Dishes
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            Every dish is thoughtfully conceptualized with organic produce, wild-caught seafood, and artisanal grains.
          </p>
        </div>

        {/* Categories Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-[#e4dcce] pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded font-sans uppercase text-xs tracking-widest font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1e1d22] text-[#f4d699] shadow-md'
                    : 'bg-white/60 text-zinc-700 hover:bg-white hover:text-black border border-[#e4dcce]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Dietary Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ingredients, dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#e4dcce] rounded pl-9 pr-3 py-2 text-xs font-sans text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#fe7259]"
              />
            </div>

            {/* Vegan Filter */}
            <button
              onClick={() => setFilterVegan(!filterVegan)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-sans transition ${
                filterVegan
                  ? 'bg-emerald-700 text-white font-semibold'
                  : 'bg-white text-zinc-600 border border-[#e4dcce] hover:bg-zinc-100'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Vegan</span>
            </button>

            {/* Gluten Free Filter */}
            <button
              onClick={() => setFilterGlutenFree(!filterGlutenFree)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-sans transition ${
                filterGlutenFree
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-white text-zinc-600 border border-[#e4dcce] hover:bg-zinc-100'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Gluten-Free</span>
            </button>
          </div>
        </div>

        {/* Dishes Grid (2-column layout mirroring Alanzo's sc_dishes_item 1_2 columns) */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white/50 rounded border border-dashed border-[#e4dcce]">
            <p className="text-zinc-500 font-serif text-lg">No dishes found matching your current filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterGlutenFree(false);
                setFilterVegan(false);
              }}
              className="mt-4 text-xs font-sans uppercase font-bold text-[#fe7259] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDishes.map((dish) => {
              const inBasket = isDishInBasket(dish.id);
              return (
                <div
                  key={dish.id}
                  className="bg-white rounded-lg p-5 sm:p-6 shadow-md border border-[#e4dcce] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
                >
                  {/* Dish Thumbnail */}
                  <div className="relative w-full sm:w-36 h-36 shrink-0 rounded overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {dish.isVegan && (
                      <span className="absolute top-2 left-2 bg-emerald-600 text-white p-1 rounded-full text-[10px]" title="Vegan">
                        <Leaf className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1 flex flex-col justify-between w-full h-full">
                    <div>
                      {/* Title & Price (Alanzo sc_dishes_item_title) */}
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h4 
                          onClick={() => onSelectDishModal(dish)}
                          className="text-xl font-heading text-[#1e1d22] group-hover:text-[#fe7259] transition-colors cursor-pointer"
                        >
                          {dish.name}
                        </h4>
                        <div className="text-lg font-heading text-[#fe7259] font-bold shrink-0">
                          ${dish.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 font-serif leading-relaxed mb-3">
                        {dish.description}
                      </p>

                      {/* Tags & Calories */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {dish.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase font-sans tracking-wider bg-[#f2ece0] text-zinc-700 px-2 py-0.5 rounded font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="text-[10px] font-sans text-zinc-400">
                          {dish.calories}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons: Learn More & Add to Tasting Selection */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                      <button
                        onClick={() => onSelectDishModal(dish)}
                        className="text-xs font-sans uppercase tracking-wider text-zinc-700 hover:text-[#fe7259] flex items-center gap-1 font-semibold transition"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Learn More</span>
                      </button>

                      <button
                        onClick={() => onAddToBasket(dish)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-semibold transition ${
                          inBasket
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#f4d699] text-[#1e1d22] hover:bg-[#e7c57f]'
                        }`}
                      >
                        {inBasket ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Tasting</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Tasting</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
