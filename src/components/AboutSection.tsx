import React from 'react';
import { UserCheck, Shield, Target, Network, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';
import { ConsultantAvatar } from './ConsultantAvatar';

interface AboutSectionProps {
  theme: Theme;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme, lang }) => {
  const t = translations[lang];

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050b14] text-white' : 'bg-[#fdfdfe] text-[#0c1c4f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Leadership Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`relative rounded-3xl p-8 border shadow-2xl overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-[#0a1832] to-[#050b14] border-sky-500/25'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Leadership Role Badge with Clickable LinkedIn Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <ConsultantAvatar size="md" />
                <div>
                  <a
                    href="https://www.linkedin.com/in/youngjunyu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus:outline-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <h3
                        className={`text-xl font-bold tracking-tight transition-colors group-hover:text-sky-500 ${
                          theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                        }`}
                      >
                        {t.about.founderName}
                      </h3>
                      <ExternalLink
                        className={`w-3.5 h-3.5 transition-colors opacity-70 group-hover:opacity-100 group-hover:text-sky-500 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {t.about.leadName}
                    </p>
                  </a>
                  <p
                    className={`text-xs font-semibold mt-0.5 ${
                      theme === 'dark' ? 'text-sky-400' : 'text-sky-600'
                    }`}
                  >
                    {t.about.firm}
                  </p>
                </div>
              </div>

              {/* Founder Direct Quote */}
              <div
                className={`relative p-5 rounded-2xl border mb-6 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <Quote
                  className={`w-6 h-6 absolute top-3 right-3 ${
                    theme === 'dark' ? 'text-sky-400/40' : 'text-sky-600/30'
                  }`}
                />
                <p
                  className={`text-sm italic leading-relaxed font-serif ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  {t.about.quote}
                </p>
              </div>

              {/* Strategic Specialization Checklist */}
              <div
                className={`space-y-2.5 text-xs mb-6 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                  <span>Hospitality, Hotel & Service-Sector Specialization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                  <span>Cross-Border FDI & Commercial Deal Structuring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                  <span>Direct Access to Seoul Landlords & Tier-1 Operators</span>
                </div>
              </div>

              {/* Direct LinkedIn CTA Button */}
              <a
                href="https://www.linkedin.com/in/youngjunyu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-900/30 group"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span>{lang === 'en' ? 'View LinkedIn Profile' : '링크드인 프로필 바로가기'}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Mission, Detailed Narrative & 3 Core Values */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif leading-tight">
              {t.about.title}
            </h2>

            <div
              className={`space-y-4 text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.values.map((v, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 hover:border-sky-500/40'
                      : 'bg-slate-50 border-slate-200 hover:border-sky-300'
                  }`}
                >
                  <div className="text-sky-400 font-bold text-sm mb-1.5">{v.title}</div>
                  <p
                    className={`text-xs leading-relaxed ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
