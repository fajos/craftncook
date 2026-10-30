import React from 'react';
import { stats } from '../data/testimonials';
import { Award, Users, Utensils, Clock } from 'lucide-react';

export default function StatsCounter() {
  const icons = [Users, Utensils, Award, Clock];

  return (
    <section className="py-20 bg-[#1e1d22] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans uppercase text-xs tracking-[0.25em] text-[#f4d699] font-semibold block mb-2">
            Proven Culinary Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading tracking-wide mb-4 text-white">
            My Work in Numbers
          </h2>
          <div className="ornament-line" />
          <p className="text-zinc-300 font-serif text-base leading-relaxed">
            Along with our brigade, CraftnCook offers premier culinary orchestration, personalized in-home hospitality, and culinary consulting designed to achieve the ultimate sensory satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={stat.label}
                className="bg-[#2e2c33]/60 p-8 rounded border border-[#3a3842] text-center hover:border-[#f4d699]/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f4d699]/10 text-[#f4d699] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#f4d699] group-hover:text-[#1e1d22] transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-4xl sm:text-5xl font-heading text-white mb-2 tracking-wider">
                  {stat.value}
                </div>
                <h3 className="text-sm font-sans uppercase tracking-widest text-[#f4d699] font-bold mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
