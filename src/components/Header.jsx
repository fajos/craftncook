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
  ShieldCheck
} from 'lucide-react';

export default function Header({ 
  headerStyle, 
  setHeaderStyle, 
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
    { name: 'Menus', href: '#menus' },
    { name: 'Book A Chef', href: '#booking' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar matching Alanzo Top Bar specifications */}
      <div className="bg-[#0e0d12] text-[#f2ece0]/80 text-xs py-2.5 px-4 sm:px-8 border-b border-[#2e2c33]/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="tel:8445950487" className="flex items-center gap-1.5 hover:text-[#f4d699] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#f4d699]" />
              <span>(844) 595-0487</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#f4d699]" />
              <span>8500 Lorem Street, Chicago, IL 55030</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#f4d699]" />
              <span>Tue - Sun: 10:00 AM – 11:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Header Style Switcher (Demonstrating Alanzo's Header 1 vs Header 2) */}
            <div className="flex items-center bg-[#1e1d22] rounded px-2 py-0.5 border border-[#3a3842] text-[11px]">
              <span className="text-zinc-400 mr-2">Layout:</span>
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

            {/* Template Evidence Inspector Pill */}
            <button
              onClick={onOpenEvidence}
              className="flex items-center gap-1.5 bg-[#fe7259]/20 hover:bg-[#fe7259]/30 text-[#fe7259] px-2.5 py-1 rounded text-[11px] font-sans font-medium transition-colors border border-[#fe7259]/30"
              title="Inspect extracted evidence from Alanzo ThemeForest template"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Live Theme Evidence</span>
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
          {/* Logo with Culinary Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#f4d699] flex items-center justify-center text-[#1e1d22] shadow-md group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-2xl font-heading tracking-wider block ${headerStyle === 'header1' ? 'text-white' : 'text-[#1e1d22]'}`}>
                Craft<span className="text-[#fe7259]">n</span>Cook
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] block text-[#f4d699]">
                Personal Chef &amp; Catering
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
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
          <div className="hidden sm:flex items-center space-x-4">
            {/* Tasting Basket button */}
            <button
              onClick={onOpenBasket}
              className={`relative p-2.5 rounded-full transition ${
                headerStyle === 'header1' ? 'text-zinc-200 hover:bg-[#2e2c33]' : 'text-zinc-800 hover:bg-[#e6decf]'
              }`}
              title="View Selected Tasting Dishes"
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
                  View Template Evidence &amp; Architecture
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
