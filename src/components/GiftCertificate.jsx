import React, { useState } from 'react';
import { Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function GiftCertificate() {
  const [amount, setAmount] = useState(250);
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [purchased, setPurchased] = useState(false);

  const presets = [100, 250, 500, 1000];

  const handlePurchase = (e) => {
    e.preventDefault();
    if (!recipient) return;
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      setRecipient('');
      setSender('');
    }, 5000);
  };

  return (
    <section className="py-16 bg-[#1e1d22] text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#f4d699_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-[#2e2c33] rounded-xl p-8 sm:p-12 shadow-2xl border border-[#3a3842] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#f4d699] text-xs font-sans uppercase tracking-widest mb-3">
              <Gift className="w-4 h-4" />
              <span>The Gift of Extraordinary Dining</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading text-white mb-4 tracking-wide">
              Want to Purchase a Gift Certificate?
            </h2>
            <p className="text-zinc-300 font-serif text-base leading-relaxed mb-6">
              Give your loved ones, colleagues, or wedding couples an unforgettable culinary journey. Redeemable for in-home private chef multi-course dinners, cooking workshops, or seasonal catering.
            </p>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-sans text-zinc-400 mr-2">Denomination:</span>
              {presets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`px-4 py-1.5 rounded text-xs font-sans font-semibold transition ${
                    amount === val
                      ? 'bg-[#f4d699] text-[#1e1d22]'
                      : 'bg-[#1e1d22] text-zinc-300 hover:text-white border border-[#3a3842]'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            {/* Purchase Form */}
            {purchased ? (
              <div className="bg-emerald-900/60 border border-emerald-500/50 p-4 rounded text-emerald-200 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <div>
                  <strong>Certificate Generated!</strong> A digital luxury voucher for ${amount} has been issued to {recipient}.
                </div>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Recipient Name"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="bg-[#1e1d22] border border-[#3a3842] text-white px-4 py-3 rounded text-xs font-sans focus:outline-none focus:border-[#f4d699] flex-1"
                />
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="bg-[#1e1d22] border border-[#3a3842] text-white px-4 py-3 rounded text-xs font-sans focus:outline-none focus:border-[#f4d699] flex-1"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  <span>Issue Voucher (${amount})</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Visual Voucher Preview */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0e0d12] via-[#1e1d22] to-[#25251b] p-6 sm:p-8 rounded-lg shadow-2xl border-2 border-[#f4d699]/40 relative text-left">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#f4d699] block">
                    Luxury Dining Pass
                  </span>
                  <span className="text-2xl font-heading text-white">CraftnCook</span>
                </div>
                <div className="text-3xl font-heading text-[#f4d699]">
                  ${amount}
                </div>
              </div>

              <div className="border-t border-b border-[#3a3842] py-4 my-4 space-y-1">
                <p className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider">
                  Prepared For: <span className="text-white font-serif normal-case text-sm">{recipient || 'Valued Guest'}</span>
                </p>
                {sender && (
                  <p className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider">
                    With Compliments From: <span className="text-white font-serif normal-case text-sm">{sender}</span>
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-sans tracking-widest uppercase">
                <span>Ref: CNC-VOUCH-{amount}-X</span>
                <span>Valid for 24 Months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
