import React, { useState } from 'react';
import { UtensilsCrossed, Send, Check, Heart, ShieldCheck, MessageCircle, MapPin, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

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
        {/* Newsletter Banner */}
        <div className="bg-[#1e1d22] border border-[#3a3842] rounded-xl p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#f4d699] font-bold block mb-1">
              Join Our Culinary Circle
            </span>
            <h3 className="text-2xl font-heading text-white mb-2">
              Subscribe for Weekly Menus &amp; Discounts
            </h3>
            <p className="text-xs text-zinc-400 font-serif leading-relaxed">
              Get weekend soup bowl schedules, custom cake promotions, and early party catering booking notices.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-200 px-6 py-3 rounded text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing to CraftnCook updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email or phone"
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
              Artisan cakes, authentic Nigerian soup delivery, party small chops, and bespoke event catering based in Ojodu Berger / Ikeja, Lagos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/2348078604886"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/craft.ncook"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenEvidence}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#fe7259] hover:underline"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Google Business Profile &amp; Theme Specs</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-300">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About CraftnCook</a></li>
              <li><a href="#services" className="hover:text-white transition">Catering &amp; Cakes</a></li>
              <li><a href="#menus" className="hover:text-white transition">Soups &amp; Jollof</a></li>
              <li><a href="#booking" className="hover:text-white transition">Book An Event</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-300">
              <li><a href="#menus" className="hover:text-white transition">Smokey Party Jollof</a></li>
              <li><a href="#menus" className="hover:text-white transition">Luxury Seafood Okra</a></li>
              <li><a href="#menus" className="hover:text-white transition">Rich Egusi Soup Bowls</a></li>
              <li><a href="#services" className="hover:text-white transition">Bespoke Wedding Cakes</a></li>
              <li><a href="#services" className="hover:text-white transition">Party Small Chops Platters</a></li>
            </ul>
          </div>

          {/* Column 4: Kitchen Studio Contact */}
          <div>
            <h4 className="font-heading text-sm text-[#f4d699] uppercase tracking-widest mb-4">
              Kitchen Studio
            </h4>
            <div className="space-y-2.5 text-xs font-serif text-zinc-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#fe7259] shrink-0" />
                <span>Ojodu Berger / Ikeja, Lagos, Nigeria</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href="tel:+2348078604886" className="text-white hover:text-[#25D366] font-sans font-bold">
                  +234 807 860 4886
                </a>
              </p>
              <p className="text-zinc-500 font-sans text-[11px] pt-1">
                Mon – Sat: 8:00 AM – 8:00 PM<br />
                Sunday: Pre-ordered Event Deliveries
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2e2c33] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} CraftnCook. All Rights Reserved. Google Business Profile Verified • Designed with Alanzo Theme Architecture.</p>
          <div className="flex items-center space-x-6">
            <a href="https://maps.google.com/?cid=12163188647910001204" target="_blank" rel="noreferrer" className="hover:text-zinc-300">
              Google Maps
            </a>
            <a href="https://www.instagram.com/craft.ncook" target="_blank" rel="noreferrer" className="hover:text-zinc-300">
              Instagram
            </a>
            <a href="https://wa.me/2348078604886" target="_blank" rel="noreferrer" className="hover:text-[#25D366]">
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
