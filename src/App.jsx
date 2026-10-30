import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import GiftCertificate from './components/GiftCertificate';
import BookingSection from './components/BookingSection';
import StatsCounter from './components/StatsCounter';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DishModal from './components/DishModal';
import TastingBasketDrawer from './components/TastingBasketDrawer';
import EvidenceDrawer from './components/EvidenceDrawer';

export default function App() {
  const [headerStyle, setHeaderStyle] = useState('header1');
  const [currency, setCurrency] = useState('NGN');
  const [selectedDishModal, setSelectedDishModal] = useState(null);
  const [tastingBasket, setTastingBasket] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState('Event Catering & Smokey Jollof');

  // Handle adding or removing dishes from tasting basket
  const handleToggleBasket = (dish) => {
    setTastingBasket((prev) => {
      const exists = prev.some((item) => item.id === dish.id);
      if (exists) {
        return prev.filter((item) => item.id !== dish.id);
      } else {
        return [...prev, dish];
      }
    });
  };

  const handleRemoveFromBasket = (dishId) => {
    setTastingBasket((prev) => prev.filter((item) => item.id !== dishId));
  };

  const handleClearBasket = () => {
    setTastingBasket([]);
  };

  const scrollToBooking = (serviceName = null) => {
    if (serviceName) {
      setPreselectedBookingService(serviceName);
    }
    const elem = document.getElementById('booking');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f2ece0] text-[#222222] font-serif flex flex-col selection:bg-[#f4d699] selection:text-[#1e1d22]">
      {/* Header with Style Switcher, Currency Selector & Verified Google Profile */}
      <Header
        headerStyle={headerStyle}
        setHeaderStyle={setHeaderStyle}
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => scrollToBooking()}
        onOpenEvidence={() => setIsEvidenceOpen(true)}
        tastingBasketCount={tastingBasket.length}
        onOpenBasket={() => setIsBasketOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Slider + 3 Feature Highlights */}
        <HeroSlider 
          onOpenBooking={() => scrollToBooking()} 
        />

        {/* Story, Culinary Lineage & 4-Step Process */}
        <AboutSection 
          onOpenBooking={() => scrollToBooking()} 
        />

        {/* Specialized Catering Offerings (Custom Cakes, Soups, Catering, Small Chops, Meal Prep) */}
        <ServicesSection 
          onOpenBooking={() => scrollToBooking()}
          onSelectServiceForBooking={(serviceTitle) => scrollToBooking(serviceTitle)}
        />

        {/* Filterable Signature Menus, Soups & Tasting Selection */}
        <MenuSection
          currency={currency}
          onSelectDishModal={(dish) => setSelectedDishModal(dish)}
          onAddToBasket={handleToggleBasket}
          tastingBasket={tastingBasket}
        />

        {/* Gift Certificate Banner with Live Digital Voucher Generator */}
        <GiftCertificate />

        {/* Online Appointment Booking & Catering Cost Estimator */}
        <BookingSection 
          currency={currency}
          preselectedService={preselectedBookingService} 
        />

        {/* Numbers & Accomplishments */}
        <StatsCounter />

        {/* Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* Culinary & Events Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Contact Information & Inquiry Desk with Verified GBP Integration */}
        <ContactSection />
      </main>

      {/* Multi-column Footer & Newsletter */}
      <Footer 
        onOpenEvidence={() => setIsEvidenceOpen(true)} 
      />

      {/* Dish Quick-View Modal */}
      <DishModal
        dish={selectedDishModal}
        onClose={() => setSelectedDishModal(null)}
        onAddToBasket={handleToggleBasket}
        inBasket={selectedDishModal ? tastingBasket.some((item) => item.id === selectedDishModal.id) : false}
      />

      {/* Tasting Basket / Course Selection Drawer */}
      <TastingBasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        basket={tastingBasket}
        currency={currency}
        onRemoveItem={handleRemoveFromBasket}
        onClearBasket={handleClearBasket}
        onProceedToBooking={() => scrollToBooking()}
      />

      {/* Google Business Profile & Template Evidence Modal */}
      <EvidenceDrawer
        isOpen={isEvidenceOpen}
        onClose={() => setIsEvidenceOpen(false)}
      />
    </div>
  );
}
