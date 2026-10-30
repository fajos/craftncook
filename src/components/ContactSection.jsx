import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Event Catering & Smokey Jollof');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 6000);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello CraftnCook! My name is ${name || 'Customer'}. I am contacting you regarding: ${service}. ${message ? `Note: ${message}` : ''}`;
    window.open(`https://wa.me/2348078604886?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f2ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Direct Kitchen &amp; Studio Orders</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            Contact CraftnCook
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            Operating from Ojodu Berger / Ikeja, Lagos. Delivering artisan celebration cakes, party catering, and authentic soup bowls across Lagos and environs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Real Google Business Profile Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#e4dcce] space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fe7259]/10 text-[#fe7259] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Kitchen Location</h4>
                  <p className="text-sm text-zinc-600 font-serif">
                    Ojodu Berger / Ikeja axis<br />
                    Lagos State, Nigeria
                  </p>
                  <span className="text-[11px] font-sans text-zinc-400">Serving Mainland &amp; Island deliveries</span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Call &amp; WhatsApp</h4>
                  <a href="tel:+2348078604886" className="text-sm text-zinc-800 font-serif font-bold hover:text-[#25D366] transition block">
                    +234 807 860 4886
                  </a>
                  <p className="text-xs text-zinc-500 font-sans mt-0.5">Direct line for instant catering booking</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4d699]/30 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-6 h-6 text-[#fe7259]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Social Channels</h4>
                  <a 
                    href="https://www.instagram.com/craft.ncook" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-zinc-800 font-serif hover:text-[#fe7259] transition flex items-center gap-1"
                  >
                    <span>Instagram: @craft.ncook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">Explore our daily cake and soup showcases</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e1d22]/10 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#1e1d22]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Operating Hours</h4>
                  <p className="text-sm text-zinc-600 font-serif">
                    Mon – Sat: 8:00 AM – 8:00 PM<br />
                    Sunday: Pre-ordered Event Deliveries
                  </p>
                </div>
              </div>
            </div>

            {/* Google Business Profile Verified Card */}
            <div className="bg-[#1e1d22] text-white p-6 rounded-lg shadow-md border border-[#3a3842] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  <span className="text-xs font-sans uppercase tracking-widest text-[#f4d699] font-bold">
                    Google Business Profile
                  </span>
                </div>
                <span className="text-xs text-zinc-400">Lagos, NG</span>
              </div>

              <div className="space-y-3 bg-[#2e2c33] p-4 rounded border border-[#3a3842]">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-lg text-white">CraftnCook</span>
                  <span className="text-xs font-sans bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded font-bold">
                    Active Kitchen
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-serif">
                  Food service, custom celebration cakes, authentic Nigerian soup delivery, and bespoke catering across Lagos state.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[#3a3842] text-xs font-sans">
                  <a
                    href="https://maps.google.com/?cid=12163188647910001204"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f4d699] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href="https://wa.me/2348078604886?text=Hello%20CraftnCook,%20I%20found%20you%20on%20Google"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#25D366] hover:underline flex items-center gap-1 font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry & Instant WhatsApp Action */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-lg shadow-xl border border-[#e4dcce]">
            <h3 className="text-2xl sm:text-3xl font-heading text-[#1e1d22] mb-2">
              Send an Order or Catering Request
            </h3>
            <p className="text-zinc-600 font-serif text-sm mb-8">
              Fill out the details below to receive a fast quote or initiate your WhatsApp order directly.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-lg text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-heading text-emerald-900 mb-2">Inquiry Successfully Received!</h4>
                <p className="text-sm text-emerald-700 font-serif max-w-md mx-auto mb-4">
                  Thank you, <strong>{name}</strong>. The CraftnCook kitchen desk will contact you via <strong>{phone}</strong> shortly to confirm details.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded font-sans font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp Now</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08078604886"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. adebayo@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Service / Order Category
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    >
                      <option value="Event Catering & Smokey Jollof">Event Catering &amp; Smokey Jollof</option>
                      <option value="Custom Birthday / Wedding Cake">Custom Birthday / Wedding Cake</option>
                      <option value="Nigerian Soups Delivery (Egusi, Seafood Okra, Efo)">Nigerian Soups Delivery (Egusi, Seafood Okra, Efo)</option>
                      <option value="Party Small Chops Platters">Party Small Chops Platters</option>
                      <option value="In-Home Private Chef Experience">In-Home Private Chef Experience</option>
                      <option value="Weekly Family Meal Prep Plan">Weekly Family Meal Prep Plan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                    Order Details, Delivery Location &amp; Event Date *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Specify delivery address (e.g. Ikeja, Lekki, Magodo, Ojodu), guest count, cake design or soup preferences..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded font-sans uppercase tracking-widest text-xs font-semibold w-full sm:w-auto flex items-center justify-center gap-2 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
