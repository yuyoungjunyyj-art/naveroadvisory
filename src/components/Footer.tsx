import React from 'react';
import { Globe, MapPin, Mail, ArrowUp } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';
import { NaveroLogo } from './NaveroLogo';

interface FooterProps {
  theme: Theme;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ theme, lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-[#030710] text-white border-white/10'
          : 'bg-[#0c1c4f] text-white border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <NaveroLogo variant="dark" size="lg" align="left" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">
              {t.footer.quickLinks}
            </span>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-400 transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#assessment" className="hover:text-sky-400 transition-colors">
                  {t.nav.assessment}
                </a>
              </li>
              {/* Temporarily hidden: Insights quick link
              <li>
                <a href="#insights" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <span>{t.nav.insight || 'Insight'}</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold">New</span>
                </a>
              </li>
              */}
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.footer.location}</span>
            <span>•</span>
            <span>{t.footer.copyright}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sky-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
