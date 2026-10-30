import React, { useState } from 'react';
import { UtensilsCrossed, Send, Check, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenEvidence }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 5000);
  };

  return (
    <footer className="bg-[#0e0d12] text-[#f2ece0] border-t border-[#2e2c33] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Newsletter Banner matching Alanzo sc_services_newsletter */}
        <div className="bg-[#1e1d22] border border-[#3a3842] rounded-xl p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#f4d699] font-bold block mb-1">
              Join Our Culinary Circle
            </span>
            <h3 className="text-2xl font-heading text-white mb-2">
              Subscribe to Tasting Invitations
            </h3>
            <p className="text-xs text-zinc-400 font-serif leading-relaxed">
              Receive seasonal recipe releases, private degustation invitations, and exclusive catering availability.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-200 px-6 py-3 rounded text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you for joining our private culinary list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#0e0d12] border border-[#3a3842] text-white px-4 py-3 rounded text-xs font-sans focus:outline-none focus:border-[#f4d699] flex-1"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4d699] flex items-center justify-center text-[#1e1d22]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-heading tracking-wider text-white">
                Craft<span className="text-[#fe7259]">n</span>Cook
              </span>
            </div>
            <p className="text-sm text-zinc-400 font-serif leading-relaxed max-w-sm">
              Artisanal personal chef and boutique catering based in Chicago. Dedicated to seasonal provenance, bespoke menus, and effortless hospitality.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEvidence}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#fe7259] hover:underline"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Inspect Theme Architecture &amp; Evidence</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-300">
              <li><a href="#hero" className="hover:text-white transition">Home Page</a></li>
              <li><a href="#about" className="hover:text-white transition">Chef &amp; Philosophy</a></li>
              <li><a href="#services" className="hover:text-white transition">Catering Services</a></li>
              <li><a href="#menus" className="hover:text-white transition">Seasonal Menus</a></li>
              <li><a href="#booking" className="hover:text-white transition">Book An Event</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Culinary Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Menus */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Menus
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-300">
              <li><a href="#menus" className="hover:text-white transition">Dinner Menu</a></li>
              <li><a href="#menus" className="hover:text-white transition">Brunch Menu</a></li>
              <li><a href="#menus" className="hover:text-white transition">Vegan &amp; Gluten Free</a></li>
              <li><a href="#menus" className="hover:text-white transition">Chef Degustation</a></li>
              <li><a href="#menus" className="hover:text-white transition">Wine &amp; Cocktail Pairings</a></li>
            </ul>
          </div>

          {/* Column 4: Studio Contact */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Studio
            </h4>
            <div className="space-y-2 text-xs font-serif text-zinc-300">
              <p>8500 Lorem Street</p>
              <p>Chicago, IL, 55030</p>
              <p className="pt-2">
                <a href="tel:8445950487" className="text-[#f4d699] hover:underline font-sans">
                  (844) 595-0487
                </a>
              </p>
              <p className="text-zinc-500 font-sans text-[11px]">Tue – Sun: 10AM – 11PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2e2c33] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} CraftnCook. All Rights Reserved. Built with inspiration from Alanzo Personal Chef &amp; Catering WP Theme.</p>
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Food Safety Certification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
