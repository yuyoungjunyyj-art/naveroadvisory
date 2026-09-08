import React, { useState, useEffect } from 'react';
import { Globe, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { NaveroLogo } from './NaveroLogo';
import { trackConsultationClick } from '../lib/analytics';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.assessment, href: '#assessment' },
    { name: t.nav.insight, href: '#insights' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#050b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-900/5 py-3.5'
          : theme === 'dark'
          ? 'bg-transparent py-5 border-b border-white/5'
          : 'bg-transparent py-5 border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02]"
            aria-label="NAVERO Korea Market Entry & Advisory"
          >
            <NaveroLogo theme={theme} size="md" align="left" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-400 relative py-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls: Theme, Language, CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <div
              className={`flex items-center p-1 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-100 border-slate-200'
              }`}
            >
              <button
                id="theme-light-btn"
                type="button"
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-all text-xs flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-white text-amber-500 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Light Mode"
                aria-label="Switch to light mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                id="theme-dark-btn"
                type="button"
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-all text-xs flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-sky-500 text-[#050b14] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dark Mode"
                aria-label="Switch to dark mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Language Toggle */}
            <div
              className={`flex items-center p-1 rounded-full border transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-100 border-slate-200'
              }`}
            >
              <button
                id="lang-en-btn"
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'en'
                    ? theme === 'dark'
                      ? 'bg-sky-400 text-[#050b14] shadow-sm'
                      : 'bg-[#0c1c4f] text-white shadow-sm'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                id="lang-ko-btn"
                type="button"
                onClick={() => setLang('ko')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'ko'
                    ? theme === 'dark'
                      ? 'bg-sky-400 text-[#050b14] shadow-sm'
                      : 'bg-[#0c1c4f] text-white shadow-sm'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                한국어
              </button>
            </div>

            {/* Primary Consultation CTA */}
            <a
              id="header-cta-btn"
              href="#contact"
              onClick={() => trackConsultationClick('header_desktop')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-sky-400 to-sky-500 text-[#050b14] hover:shadow-lg hover:shadow-sky-500/25'
                  : 'bg-[#0c1c4f] text-white hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900/20'
              }`}
            >
              <span>{t.nav.bookConsultation}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            {/* Quick Lang toggle on mobile header */}
            <button
              id="mobile-quick-lang"
              onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
              className={`px-2 py-1 rounded-md text-xs font-bold border ${
                theme === 'dark'
                  ? 'border-white/10 text-sky-400 bg-white/5'
                  : 'border-slate-300 text-[#0c1c4f] bg-slate-100'
              }`}
            >
              {lang === 'en' ? 'KO' : 'EN'}
            </button>

            {/* Quick Theme toggle on mobile header */}
            <button
              id="mobile-quick-theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-1.5 rounded-md border ${
                theme === 'dark'
                  ? 'border-white/10 text-amber-300 bg-white/5'
                  : 'border-slate-300 text-slate-700 bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#0c1c4f] hover:bg-slate-100'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden px-4 pt-4 pb-6 border-b transition-all ${
            theme === 'dark'
              ? 'bg-[#050b14]/98 border-white/10 text-white'
              : 'bg-white/98 border-slate-200 text-[#0c1c4f]'
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4 border-b border-slate-200 dark:border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold py-2 px-3 rounded-md transition-colors hover:bg-sky-500/10 hover:text-sky-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Language / 언어
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLang('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-xs rounded-full font-bold ${
                    lang === 'en'
                      ? 'bg-sky-400 text-slate-950'
                      : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLang('ko');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-xs rounded-full font-bold ${
                    lang === 'ko'
                      ? 'bg-sky-400 text-slate-950'
                      : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  한국어
                </button>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => {
                trackConsultationClick('header_mobile');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-center py-3 rounded-xl text-sm font-bold uppercase tracking-wider mt-2 ${
                theme === 'dark'
                  ? 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20'
                  : 'bg-[#0c1c4f] text-white shadow-lg shadow-slate-900/20'
              }`}
            >
              {t.nav.bookConsultation}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
