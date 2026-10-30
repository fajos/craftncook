import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  UtensilsCrossed, 
  Sparkles, 
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Header({ 
  headerStyle, 
  setHeaderStyle, 
  currency,
  setCurrency,
  onOpenBooking, 
  onOpenEvidence, 
  tastingBasketCount, 
  onOpenBasket 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menus & Soups', href: '#menus' },
    { name: 'Custom Cakes', href: '#services' },
    { name: 'Book An Event', href: '#booking' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar with Real Google Business Profile Data */}
      <div className="bg-[#0e0d12] text-[#f2ece0]/80 text-xs py-2.5 px-4 sm:px-8 border-b border-[#2e2c33]/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Phone & WhatsApp */}
            <a 
              href="https://wa.me/2348078604886?text=Hello%20CraftnCook,%20I%20would%20like%20to%20make%20an%20inquiry" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
              title="Chat with CraftnCook on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="font-semibold text-white">+234 807 860 4886</span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#fe7259]" />
              <span>Ojodu Berger / Ikeja, Lagos, Nigeria</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#f4d699]" />
              <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Currency Toggle */}
            <div className="flex items-center bg-[#1e1d22] rounded px-2 py-0.5 border border-[#3a3842] text-[11px]">
              <span className="text-zinc-400 mr-2">Currency:</span>
              <button 
                onClick={() => setCurrency('NGN')}
                className={`px-1.5 py-0.5 rounded transition ${currency === 'NGN' ? 'bg-[#fe7259] text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                ₦ NGN
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-1.5 py-0.5 rounded transition ${currency === 'USD' ? 'bg-[#fe7259] text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                $ USD
              </button>
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/craft.ncook"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-[#f4d699] transition-colors"
              title="Visit CraftnCook on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#fe7259]" />
              <span>@craft.ncook</span>
            </a>

            {/* Header Style Switcher (Alanzo Theme Header 1 vs Header 2) */}
            <div className="flex items-center bg-[#1e1d22] rounded px-2 py-0.5 border border-[#3a3842] text-[11px]">
              <span className="text-zinc-400 mr-2">Theme:</span>
              <button 
                onClick={() => setHeaderStyle('header1')}
                className={`px-2 py-0.5 rounded transition ${headerStyle === 'header1' ? 'bg-[#f4d699] text-[#1e1d22] font-semibold' : 'text-zinc-300 hover:text-white'}`}
                title="Alanzo Dark Slate / Gold Header Style"
              >
                Header 1 (Dark)
              </button>
              <button 
                onClick={() => setHeaderStyle('header2')}
                className={`px-2 py-0.5 rounded transition ${headerStyle === 'header2' ? 'bg-[#f4d699] text-[#1e1d22] font-semibold' : 'text-zinc-300 hover:text-white'}`}
                title="Alanzo Light Creamy Header Style"
              >
                Header 2 (Light)
              </button>
            </div>

            {/* Google Business Profile Verified Badge */}
            <button
              onClick={onOpenEvidence}
              className="flex items-center gap-1.5 bg-[#fe7259]/20 hover:bg-[#fe7259]/30 text-[#fe7259] px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors border border-[#fe7259]/30"
              title="Inspect Google Business Profile & Template Architecture"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GBP Verified</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          headerStyle === 'header1'
            ? isScrolled 
              ? 'bg-[#1e1d22]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#3a3842]' 
              : 'bg-[#1e1d22] py-5 border-b border-[#2e2c33]'
            : isScrolled
              ? 'bg-[#f2ece0]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#e4dcce]'
              : 'bg-[#f2ece0] py-5 border-b border-[#e4dcce]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#f4d699] flex items-center justify-center text-[#1e1d22] shadow-md group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-2xl font-heading tracking-wider block ${headerStyle === 'header1' ? 'text-white' : 'text-[#1e1d22]'}`}>
                Craft<span className="text-[#fe7259]">n</span>Cook
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] block text-[#f4d699]">
                Catering • Soups • Cakes • Lagos
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans uppercase text-xs tracking-widest font-medium transition-colors hover:text-[#f4d699] ${
                  headerStyle === 'header1' ? 'text-zinc-200' : 'text-zinc-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/2348078604886?text=Hello%20CraftnCook,%20I%20would%20like%20to%20order%20catering%20or%20cakes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded text-xs font-sans font-bold shadow transition"
              title="Quick WhatsApp Order"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Tasting Basket button */}
            <button
              onClick={onOpenBasket}
              className={`relative p-2.5 rounded-full transition ${
                headerStyle === 'header1' ? 'text-zinc-200 hover:bg-[#2e2c33]' : 'text-zinc-800 hover:bg-[#e6decf]'
              }`}
              title="View Selected Dishes &amp; Soups"
            >
              <ShoppingBag className="w-5 h-5" />
              {tastingBasketCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#fe7259] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {tastingBasketCount}
                </span>
              )}
            </button>

            {/* Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="btn-gold flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book An Event</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="https://wa.me/2348078604886"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#25D366]"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenBasket}
              className={`p-2 rounded ${headerStyle === 'header1' ? 'text-white' : 'text-[#1e1d22]'}`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded focus:outline-none ${headerStyle === 'header1' ? 'text-white' : 'text-[#1e1d22]'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1e1d22] text-[#f2ece0] px-6 py-6 border-t border-[#3a3842] shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-[#2e2c33]">
                <span className="text-xs text-zinc-400 font-sans">Currency:</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrency('NGN')}
                    className={`px-2 py-1 rounded text-xs ${currency === 'NGN' ? 'bg-[#fe7259] text-white font-bold' : 'text-zinc-400'}`}
                  >
                    ₦ NGN
                  </button>
                  <button 
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-1 rounded text-xs ${currency === 'USD' ? 'bg-[#fe7259] text-white font-bold' : 'text-zinc-400'}`}
                  >
                    $ USD
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans uppercase text-sm tracking-wider py-2 border-b border-[#2e2c33] text-zinc-200 hover:text-[#f4d699]"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="https://wa.me/2348078604886?text=Hello%20CraftnCook,%20I%20would%20like%20to%20order"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white py-3 rounded text-center font-sans font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+234 807 860 4886)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-gold w-full text-center"
                >
                  Book An Appointment
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEvidence();
                  }}
                  className="text-xs text-[#fe7259] bg-[#fe7259]/10 py-2.5 px-4 rounded text-center border border-[#fe7259]/20"
                >
                  View Google Business Profile &amp; Template Specs
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
