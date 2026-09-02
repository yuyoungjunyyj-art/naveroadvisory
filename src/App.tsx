import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { MarketAssessmentTool } from './components/MarketAssessmentTool';
import { InsightsSection } from './components/InsightsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FadeSection } from './components/FadeSection';

export default function App() {
  // Initialize language (default 'en' as requested, with persistence)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('navLang');
    return (saved === 'ko' || saved === 'en') ? saved : 'en';
  });

  // Initialize theme (default 'dark' matching executive aesthetic, with toggle to 'light')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('navTheme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('navLang', newLang);
  };

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('navTheme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#050b14';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fdfdfe';
      document.body.style.color = '#0c1c4f';
    }
  }, [theme]);

  return (
    <div
      id="app-root"
      className={`min-h-screen font-sans transition-colors duration-500 selection:bg-sky-500 selection:text-white ${
        theme === 'dark' ? 'bg-[#050b14] text-white' : 'bg-[#fdfdfe] text-[#0c1c4f]'
      }`}
    >
      {/* Fixed Navigation Header with Theme and Language controls */}
      <Header
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        setTheme={handleSetTheme}
      />

      {/* Main Content Sections with scroll fade-in / fade-out animations */}
      <main id="main-content" className="space-y-0 overflow-hidden">
        <FadeSection id="section-hero">
          <Hero theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-services">
          <ServicesSection theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-process">
          <ProcessSection theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-assessment">
          <MarketAssessmentTool theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-insights">
          <InsightsSection theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-about">
          <AboutSection theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-contact">
          <ContactSection theme={theme} lang={lang} />
        </FadeSection>
      </main>

      {/* Comprehensive Footer */}
      <FadeSection id="section-footer">
        <Footer theme={theme} lang={lang} />
      </FadeSection>
    </div>
  );
}

