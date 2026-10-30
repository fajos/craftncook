import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Catering Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f2ece0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-heading text-[#1e1d22] mb-4">
            Contact Information &amp; Studio
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-600 font-serif text-lg leading-relaxed">
            Planning a wedding, milestone gala, or looking for recurring personal chef service? Speak directly with our culinary coordination desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Visual Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#e4dcce] space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4d699]/30 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#fe7259]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Main Studio</h4>
                  <p className="text-sm text-zinc-600 font-serif">
                    8500 Lorem Street, Suite 400<br />
                    Chicago, IL, 55030
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4d699]/30 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#fe7259]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Direct Phone</h4>
                  <a href="tel:8445950487" className="text-sm text-zinc-800 font-serif hover:text-[#fe7259] transition">
                    (844) 595-0487
                  </a>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">Concierge desk open daily</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4d699]/30 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#fe7259]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Electronic Mail</h4>
                  <a href="mailto:chef@craftncook.com" className="text-sm text-zinc-800 font-serif hover:text-[#fe7259] transition">
                    chef@craftncook.com
                  </a>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">Prompt responses within 4 hours</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f4d699]/30 text-[#1e1d22] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#fe7259]" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#1e1d22]">Operating Hours</h4>
                  <p className="text-sm text-zinc-600 font-serif">
                    Tue – Sun: 10:00 AM – 11:00 PM<br />
                    Monday: Kitchen Prep &amp; Farm Sourcing
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Visual Map Card */}
            <div className="bg-[#1e1d22] text-white p-6 rounded-lg shadow-md border border-[#3a3842] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans uppercase tracking-widest text-[#f4d699]">Culinary Studio Location</span>
                <span className="text-xs text-zinc-400">Chicago Loop District</span>
              </div>
              <div className="h-44 rounded bg-[#2e2c33] border border-[#3a3842] relative flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-[#fe7259] mx-auto animate-bounce" />
                  <p className="text-xs font-serif text-zinc-300">
                    Located near Lake Michigan waterfront &amp; West Loop restaurant corridor.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] font-sans font-bold text-[#f4d699] uppercase tracking-wider hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-lg shadow-xl border border-[#e4dcce]">
            <h3 className="text-2xl sm:text-3xl font-heading text-[#1e1d22] mb-2">
              Send an Inquiry to Chef
            </h3>
            <p className="text-zinc-600 font-serif text-sm mb-8">
              Fill out your details below to begin custom menu discussions.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-lg text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-xl font-heading text-emerald-900 mb-2">Inquiry Successfully Transmitted!</h4>
                <p className="text-sm text-emerald-700 font-serif max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Chef CraftnCook and our catering manager will review your note and respond to <strong>{email}</strong> shortly.
                </p>
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
                      placeholder="e.g. Katherine Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. katherine@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (312) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                    >
                      <option value="General Catering Inquiry">General Catering Inquiry</option>
                      <option value="Wedding Reception Catering">Wedding Reception Catering</option>
                      <option value="Private Home Multi-Course Dinner">Private Home Multi-Course Dinner</option>
                      <option value="Corporate Executive Banquet">Corporate Executive Banquet</option>
                      <option value="Cooking Masterclass Workshop">Cooking Masterclass Workshop</option>
                      <option value="Restaurant Advisory / Consulting">Restaurant Advisory / Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                    Your Message / Event Concept *
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell us about the occasion, estimated guest count, preferred dates, or culinary preferences..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#fbf8f3] border border-[#e4dcce] rounded px-4 py-3 text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#fe7259]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Chef</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
