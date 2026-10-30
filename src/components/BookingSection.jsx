import React, { useState } from 'react';
import { Calendar, Clock, Users, Utensils, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

export default function BookingSection({ preselectedService }) {
  const [serviceType, setServiceType] = useState(preselectedService || 'Special Events');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('18:30');
  const [guestCount, setGuestCount] = useState(8);
  const [dietary, setDietary] = useState('None');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const servicesList = [
    { name: 'Special Events', baseRate: 95 },
    { name: 'Weddings & Galas', baseRate: 120 },
    { name: 'Corporate Events', baseRate: 85 },
    { name: 'Cooking Classes', baseRate: 75 },
    { name: 'In-Home Meal Preparation', baseRate: 60 },
  ];

  const currentServiceObj = servicesList.find((s) => s.name === serviceType) || servicesList[0];
  const estimatedTotal = currentServiceObj.baseRate * guestCount;

  const timeSlots = [
    '12:00 PM', '01:30 PM', '05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("Please fill in your contact information.");
      return;
    }

    const bookingRef = 'CNC-' + Math.floor(100000 + Math.random() * 900000);
    const bookingDetails = {
      ref: bookingRef,
      service: serviceType,
      date,
      timeSlot,
      guestCount,
      dietary,
      name: fullName,
      email,
      phone,
      notes: specialNotes,
      estimatedTotal,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('craftncook_bookings') || '[]');
    existing.push(bookingDetails);
    localStorage.setItem('craftncook_bookings', JSON.stringify(existing));

    setConfirmation(bookingDetails);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#fbf8f3] relative border-b border-[#e4dcce]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header matching Alanzo booking section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">Online Reservation &amp; Appointments</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            We Can’t Wait to Get You Started
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            Reserve your chef consultation, tasting date, or catering experience with our instant booking manager.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-[#e4dcce] overflow-hidden">
          {confirmation ? (
            <div className="p-8 sm:p-14 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-heading text-[#1e1d22] mb-2">Reservation Request Confirmed!</h3>
              <p className="text-sm font-sans uppercase tracking-widest text-[#fe7259] font-bold mb-6">
                Booking Reference: {confirmation.ref}
              </p>

              <div className="bg-[#f2ece0] p-6 rounded-lg max-w-md mx-auto text-left mb-8 space-y-2 text-sm font-serif border border-[#e4dcce]">
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Experience:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.service}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Date &amp; Time:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.date} at {confirmation.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Party Size:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.guestCount} Guests</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Client:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.name}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Estimated Investment:</span>
                  <span className="font-bold text-[#fe7259] text-base">${confirmation.estimatedTotal}</span>
                </div>
              </div>

              <p className="text-zinc-600 font-serif text-sm max-w-lg mx-auto mb-6">
                Chef CraftnCook's culinary brigade will review your taste preferences and contact you via {confirmation.email} within 24 business hours to finalize course details and tasting logistics.
              </p>

              <button
                onClick={() => setConfirmation(null)}
                className="btn-gold"
              >
                Book Another Event
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-12 space-y-8">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-3">
                  1. Select Culinary Experience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {servicesList.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setServiceType(s.name)}
                      className={`p-3.5 rounded text-left border transition text-xs font-sans ${
                        serviceType === s.name
                          ? 'border-[#1e1d22] bg-[#1e1d22] text-[#f4d699] font-bold shadow-md'
                          : 'border-[#e4dcce] bg-white text-zinc-700 hover:border-zinc-400'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{s.name}</span>
                        <span className="opacity-80">${s.baseRate}/pp</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-2">
                    2. Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-2">
                    3. Preferred Serving Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#fe7259]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Guest Count & Live Price Calculator */}
              <div className="bg-[#f2ece0] p-6 rounded-lg border border-[#e4dcce]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold">
                      4. Number of Guests: <span className="text-[#fe7259] text-base ml-1">{guestCount}</span>
                    </label>
                    <span className="text-xs text-zinc-500 font-serif">Includes multi-course dining, table setting &amp; cleanup</span>
                  </div>

                  {/* Live Quote Display */}
                  <div className="text-right">
                    <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 block">Estimated Quote:</span>
                    <span className="text-2xl font-heading text-[#fe7259] font-bold">${estimatedTotal}</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="2"
                  max="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                  className="w-full accent-[#fe7259] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-sans text-zinc-500 mt-1">
                  <span>Intimate (2 Guests)</span>
                  <span>Dinner Party (20)</span>
                  <span>Gala Banquet (100+)</span>
                </div>
              </div>

              {/* Step 4: Contact & Dietary Notes */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-3">
                  5. Contact Information &amp; Dietary Preferences
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                </div>

                <textarea
                  rows="3"
                  placeholder="Dietary requirements (e.g. 2 Vegan, 1 Celiac Gluten-Free), venue address or celebration details..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-serif">
                  <Sparkles className="w-4 h-4 text-[#fe7259]" />
                  <span>No upfront payment required for booking request inquiry</span>
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                >
                  Submit Reservation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
