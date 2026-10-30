import React, { useState } from 'react';
import { Calendar, Clock, Users, Utensils, CheckCircle, Sparkles, MessageCircle, Send } from 'lucide-react';

export default function BookingSection({ preselectedService, currency = 'NGN' }) {
  const [serviceType, setServiceType] = useState(preselectedService || 'Event Catering & Smokey Jollof');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('14:00');
  const [guestCount, setGuestCount] = useState(25);
  const [dietary, setDietary] = useState('None');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const servicesList = [
    { name: 'Event Catering & Smokey Jollof', baseRateNGN: 6500, baseRateUSD: 5 },
    { name: 'Custom Cake & Dessert Banquet', baseRateNGN: 45000, baseRateUSD: 30 },
    { name: 'Gourmet Soup Bowls Package', baseRateNGN: 25000, baseRateUSD: 18 },
    { name: 'Party Small Chops Fiesta', baseRateNGN: 2000, baseRateUSD: 1.5 },
    { name: 'In-Home Private Chef Dining', baseRateNGN: 50000, baseRateUSD: 35 },
  ];

  const currentServiceObj = servicesList.find((s) => s.name === serviceType) || servicesList[0];
  const unitPrice = currency === 'NGN' ? currentServiceObj.baseRateNGN : currentServiceObj.baseRateUSD;
  const estimatedTotal = serviceType.includes('Cake') || serviceType.includes('Soup') 
    ? unitPrice 
    : unitPrice * guestCount;

  const timeSlots = [
    '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your name and phone/WhatsApp number.");
      return;
    }

    const bookingRef = 'CNC-' + Math.floor(100000 + Math.random() * 900000);
    const bookingDetails = {
      ref: bookingRef,
      service: serviceType,
      date,
      timeSlot,
      guestCount,
      name: fullName,
      email,
      phone,
      address: deliveryAddress,
      notes: specialNotes,
      currency,
      estimatedTotal,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('craftncook_bookings') || '[]');
    existing.push(bookingDetails);
    localStorage.setItem('craftncook_bookings', JSON.stringify(existing));

    setConfirmation(bookingDetails);
  };

  const handleWhatsAppSend = () => {
    if (!confirmation) return;
    const msg = `*New CraftnCook Booking Request (${confirmation.ref})*
- *Service:* ${confirmation.service}
- *Date & Time:* ${confirmation.date} at ${confirmation.timeSlot}
- *Guest Count / Size:* ${confirmation.guestCount}
- *Client Name:* ${confirmation.name}
- *Phone:* ${confirmation.phone}
- *Location/Address:* ${confirmation.address || 'Lagos'}
- *Estimated Quote:* ${currency === 'NGN' ? '₦' : '$'}${confirmation.estimatedTotal.toLocaleString()}
- *Special Notes:* ${confirmation.notes || 'None'}`;

    window.open(`https://wa.me/2348078604886?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#fbf8f3] relative border-b border-[#e4dcce]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">Direct Kitchen Booking &amp; Quotes</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            Book CraftnCook For Your Next Event
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            Reserve party catering, custom wedding cakes, weekly soup delivery, or private chef service across Lagos.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-[#e4dcce] overflow-hidden">
          {confirmation ? (
            <div className="p-8 sm:p-14 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-heading text-[#1e1d22] mb-2">Booking Request Generated!</h3>
              <p className="text-sm font-sans uppercase tracking-widest text-[#fe7259] font-bold mb-6">
                Booking Reference: {confirmation.ref}
              </p>

              <div className="bg-[#f2ece0] p-6 rounded-lg max-w-md mx-auto text-left mb-8 space-y-2 text-sm font-serif border border-[#e4dcce]">
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Service:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.service}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Date &amp; Time:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.date} at {confirmation.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Size / Guests:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.guestCount}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Client:</span>
                  <span className="font-semibold text-zinc-900">{confirmation.name} ({confirmation.phone})</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-zinc-500 font-sans text-xs uppercase">Estimated Investment:</span>
                  <span className="font-bold text-[#fe7259] text-base">
                    {currency === 'NGN' ? '₦' : '$'}{confirmation.estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded font-sans uppercase tracking-wider text-xs font-bold inline-flex items-center gap-2 shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct via WhatsApp</span>
                </button>

                <button
                  onClick={() => setConfirmation(null)}
                  className="btn-gold"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-12 space-y-8">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-3">
                  1. Select Service Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {servicesList.map((s) => {
                    const priceStr = currency === 'NGN' ? `₦${s.baseRateNGN.toLocaleString()}` : `$${s.baseRateUSD}`;
                    return (
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
                          <span className="truncate pr-1">{s.name}</span>
                          <span className="opacity-80 shrink-0">{priceStr}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-2">
                    2. Event / Delivery Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#fe7259]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-2">
                    3. Serving / Delivery Window
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

              {/* Step 3: Guest / Portion Count & Live Price Calculator */}
              <div className="bg-[#f2ece0] p-6 rounded-lg border border-[#e4dcce]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold">
                      4. Guest Count / Portions: <span className="text-[#fe7259] text-base ml-1">{guestCount}</span>
                    </label>
                    <span className="text-xs text-zinc-500 font-serif">Includes food prep, safe packaging &amp; service logistics</span>
                  </div>

                  {/* Live Quote Display */}
                  <div className="text-right">
                    <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 block">Estimated Quote:</span>
                    <span className="text-2xl font-heading text-[#fe7259] font-bold">
                      {currency === 'NGN' ? '₦' : '$'}{estimatedTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="5"
                  max="500"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                  className="w-full accent-[#fe7259] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-sans text-zinc-500 mt-1">
                  <span>Intimate (5-20)</span>
                  <span>Party (100)</span>
                  <span>Gala Banquet (500)</span>
                </div>
              </div>

              {/* Step 4: Contact & Location */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-widest text-[#1e1d22] font-bold mb-3">
                  5. Contact &amp; Lagos Delivery Location
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
                      type="tel"
                      placeholder="Phone / WhatsApp *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Delivery Area (e.g. Ikeja, Lekki, Ojodu)"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                </div>

                <textarea
                  rows="3"
                  placeholder="Dietary requests (e.g. no pepper, vegetarian), cake design brief, or specific soup selections..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans focus:outline-none focus:border-[#fe7259]"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-serif">
                  <Sparkles className="w-4 h-4 text-[#fe7259]" />
                  <span>Doorstep delivery available across Lagos State &amp; Ogun border</span>
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto"
                >
                  Generate Booking Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
