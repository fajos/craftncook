import React from 'react';
import { X, Trash2, Calendar, ArrowRight, Utensils } from 'lucide-react';

export default function TastingBasketDrawer({ 
  isOpen, 
  onClose, 
  basket, 
  onRemoveItem, 
  onClearBasket,
  onProceedToBooking 
}) {
  if (!isOpen) return null;

  const totalPerPerson = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#fbf8f3] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#e4dcce]">
        {/* Drawer Header */}
        <div className="p-6 bg-[#1e1d22] text-white flex items-center justify-between border-b border-[#3a3842]">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#f4d699]" />
            <h3 className="text-xl font-heading tracking-wide">
              Selected Tasting Menu ({basket.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {basket.length === 0 ? (
            <div className="text-center py-16 text-zinc-500 font-serif">
              <p className="text-base mb-2">No dishes in your tasting selection yet.</p>
              <p className="text-xs font-sans text-zinc-400">
                Browse our menus and click "+ Add to Tasting" to curate your personalized event course list.
              </p>
            </div>
          ) : (
            basket.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-[#e4dcce] flex items-center justify-between gap-3"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded object-cover shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm text-[#1e1d22] truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-sans">
                    {item.category.toUpperCase()} • ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-zinc-400 hover:text-rose-500 p-1.5 transition"
                  title="Remove Dish"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Calculations */}
        {basket.length > 0 && (
          <div className="p-6 bg-white border-t border-[#e4dcce] space-y-4 shadow-lg">
            <div className="flex items-center justify-between text-sm font-serif text-zinc-700">
              <span>Courses Selected:</span>
              <span className="font-semibold text-zinc-900">{basket.length} Dishes</span>
            </div>
            <div className="flex items-center justify-between text-base font-serif border-t border-zinc-100 pt-2">
              <span className="font-bold text-[#1e1d22]">Course Base Total:</span>
              <span className="text-xl font-heading text-[#fe7259]">${totalPerPerson.toFixed(2)} / guest</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Apply to Event Booking</span>
              </button>

              <button
                onClick={onClearBasket}
                className="text-xs font-sans text-zinc-500 hover:text-rose-600 text-center py-1 transition"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
