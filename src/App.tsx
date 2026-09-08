import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { MarketAssessmentTool } from './components/MarketAssessmentTool';
import { InsightsSection } from './components/InsightsSection';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { insightsArticles } from './data/insightsData';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FadeSection } from './components/FadeSection';
import {
  initGA,
  trackPageView,
  trackPreferenceChange,
} from './lib/analytics';

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
    trackPreferenceChange('language', newLang);
  };

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('navTheme', newTheme);
    trackPreferenceChange('theme', newTheme);
  };

  // State for article reader modal
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const articleParam = params.get('article');
      if (articleParam) return articleParam;
    }
    return null;
  });

  const handleOpenArticle = (slug: string) => {
    setSelectedArticleSlug(slug);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('article', slug);
      window.history.pushState({}, '', url.toString());
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticleSlug(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('article');
      window.history.pushState({}, '', url.toString());
    }
  };

  const currentArticle =
    insightsArticles.find((a) => a.slug === selectedArticleSlug) || null;

  // Initialize GA4 and track initial pageview
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname + window.location.hash);
  }, []);

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

  // Handle direct navigation to hash anchors (e.g., #insights, #contact)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace(/^#/, '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          trackPageView(window.location.pathname + hash, `Section: ${targetId}`);
        }
      }
    };

    // Trigger on mount after layout stabilization and on subsequent hash changes
    const timer1 = setTimeout(handleHashScroll, 150);
    const timer2 = setTimeout(handleHashScroll, 500);
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

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
      <main id="main-content" className="space-y-0 overflow-x-hidden">
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
          <InsightsSection
            theme={theme}
            lang={lang}
            onOpenArticle={handleOpenArticle}
          />
        </FadeSection>

        <FadeSection id="section-about">
          <AboutSection theme={theme} lang={lang} />
        </FadeSection>

        <FadeSection id="section-contact">
          <ContactSection theme={theme} lang={lang} />
        </FadeSection>
      </main>

      {/* Full Article Reader Modal */}
      <ArticleReaderModal
        article={currentArticle}
        isOpen={Boolean(selectedArticleSlug && currentArticle)}
        onClose={handleCloseArticle}
        theme={theme}
        lang={lang}
      />

      {/* Comprehensive Footer */}
      <FadeSection id="section-footer">
        <Footer theme={theme} lang={lang} />
      </FadeSection>
    </div>
  );
}

