import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';
import { metricsData } from '../data/content';
import { GlobalNetworkVisual } from './GlobalNetworkVisual';

interface HeroProps {
  theme: Theme;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ theme, lang }) => {
  const t = translations[lang];

  return (
    <section
      id="hero-section"
      className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#050b14] via-[#081225] to-[#050b14] text-white'
          : 'bg-gradient-to-b from-[#fdfdff] via-[#f4f7fc] to-[#edf2f9] text-[#0c1c4f]'
      }`}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 ${
          theme === 'dark' ? 'bg-sky-500/10' : 'bg-sky-200/40'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              <span className={`block font-serif font-medium ${theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'}`}>
                {t.hero.titleLine1}
              </span>
              <span
                className={`block mt-1 sm:mt-2 font-serif font-bold ${
                  theme === 'dark'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300'
                    : 'text-[#0a2540]'
                }`}
              >
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {t.hero.subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                id="hero-primary-cta"
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 transform hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40'
                    : 'bg-[#0c1c4f] text-white shadow-xl shadow-slate-900/15 hover:bg-slate-900'
                }`}
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#services"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm tracking-wide transition-all border ${
                  theme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                    : 'border-slate-300 text-[#0c1c4f] hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Assurance Footer */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>100% Confidential Briefings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Seoul On-the-Ground Presence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Global Radar & Interactive Network Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <GlobalNetworkVisual theme={theme} lang={lang} />
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          id="hero-metrics-bar"
          className={`mt-16 lg:mt-24 p-6 sm:p-8 rounded-3xl border transition-all ${
            theme === 'dark'
              ? 'bg-[#081225]/70 border-white/10 shadow-2xl'
              : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-900/5'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
            {metricsData.map((metric, idx) => (
              <div
                key={idx}
                className={`text-center ${idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
              >
                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-serif tracking-tight ${
                    theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'
                  }`}
                >
                  {metric.value}
                </div>
                <div
                  className={`text-xs sm:text-sm font-bold mt-1.5 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {metric.label[lang]}
                </div>
                <div
                  className={`text-[11px] mt-0.5 hidden sm:block ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {metric.sublabel[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
