import React from 'react';
import { X, Plus, Check, Clock, Flame, Shield, Leaf } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToBasket, inBasket }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fbf8f3] max-w-xl w-full rounded-xl shadow-2xl border border-[#e4dcce] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Image */}
        <div className="relative h-64 shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white drop-shadow">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest font-semibold bg-[#fe7259] px-2 py-0.5 rounded inline-block mb-1">
                {dish.category.toUpperCase()} COURSE
              </span>
              <h3 className="text-2xl font-heading text-white">{dish.name}</h3>
            </div>
            <div className="text-2xl font-heading text-[#f4d699]">
              ${dish.price.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <p className="text-zinc-700 font-serif text-base leading-relaxed">
            {dish.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#e4dcce]">
            <div className="flex items-center gap-2 text-xs font-sans text-zinc-600">
              <Clock className="w-4 h-4 text-[#fe7259]" />
              <span>Prep Time: <strong>{dish.prepTime}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans text-zinc-600">
              <Flame className="w-4 h-4 text-[#fe7259]" />
              <span>Caloric Density: <strong>{dish.calories}</strong></span>
            </div>
          </div>

          {/* Ingredients Breakdown */}
          <div>
            <h4 className="font-heading text-sm text-[#1e1d22] uppercase tracking-wider mb-2">
              Sourced Ingredients:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="bg-white px-2.5 py-1 rounded text-xs font-sans text-zinc-700 border border-[#e4dcce]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Dietary Compliance */}
          <div>
            <h4 className="font-heading text-sm text-[#1e1d22] uppercase tracking-wider mb-2">
              Dietary Profile:
            </h4>
            <div className="flex items-center gap-3">
              {dish.isGlutenFree && (
                <span className="inline-flex items-center gap-1 text-xs font-sans bg-amber-100 text-amber-800 px-2.5 py-1 rounded font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  Gluten-Free Safe
                </span>
              )}
              {dish.isVegan ? (
                <span className="inline-flex items-center gap-1 text-xs font-sans bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-medium">
                  <Leaf className="w-3.5 h-3.5" />
                  100% Plant Based (Vegan)
                </span>
              ) : (
                <span className="text-xs font-sans text-zinc-500">
                  Non-vegan course
                </span>
              )}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-[#e4dcce] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded font-sans uppercase text-xs tracking-wider text-zinc-600 hover:bg-zinc-200 transition"
            >
              Close
            </button>
            <button
              onClick={() => onAddToBasket(dish)}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded font-sans uppercase text-xs tracking-wider font-semibold transition ${
                inBasket
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#f4d699] text-[#1e1d22] hover:bg-[#e7c57f]'
              }`}
            >
              {inBasket ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Tasting</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Tasting Selection</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
