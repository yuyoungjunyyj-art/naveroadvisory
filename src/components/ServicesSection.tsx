import React, { useState } from 'react';
import {
  Briefcase,
  Compass,
  Hotel,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Theme, Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/content';

interface ServicesSectionProps {
  theme: Theme;
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ theme, lang }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className={`py-24 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050b14] text-white' : 'bg-[#f7f9fd] text-[#0c1c4f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
              {t.services.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif">
            {t.services.title}
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`group relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                theme === 'dark'
                  ? 'bg-[#081225]/70 border-white/10 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-950/60'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-900/5'
              }`}
            >
              <div>
                {/* Top Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      theme === 'dark'
                        ? 'bg-sky-500/15 text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950'
                        : 'bg-[#0c1c4f]/10 text-[#0c1c4f] group-hover:bg-[#0c1c4f] group-hover:text-white'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${
                        theme === 'dark'
                          ? 'bg-white/5 text-slate-300 border border-white/10'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {service.badge[lang]}
                    </span>
                    <span
                      className={`text-2xl font-serif font-light ${
                        theme === 'dark' ? 'text-slate-600' : 'text-slate-300'
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  {service.title[lang]}
                </h3>
                <p className="text-xs font-semibold text-sky-500 uppercase tracking-wider mb-4">
                  {service.subtitle[lang]}
                </p>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {service.description[lang]}
                </p>

                {/* Deliverables Preview List */}
                <div className="space-y-2.5 mb-6 border-t pt-5 border-slate-100 dark:border-white/5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {t.services.deliverablesHeading}
                  </span>
                  {service.deliverables[lang].slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button to Open Detail Modal */}
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className={`w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-sky-400 hover:text-slate-950 text-white border border-white/10'
                    : 'bg-slate-100 hover:bg-[#0c1c4f] hover:text-white text-[#0c1c4f] border border-slate-200'
                }`}
              >
                <span>{t.services.exploreDeliverables}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
              theme === 'dark'
                ? 'bg-[#081225] border-sky-500/30 text-white'
                : 'bg-white border-slate-300 text-[#0c1c4f]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-sky-400 hover:text-slate-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-serif font-light text-sky-400">
                {selectedService.number}
              </span>
              <span className="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-sky-400/20 text-sky-400">
                {selectedService.badge[lang]}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              {selectedService.title[lang]}
            </h3>
            <p className="text-sm font-semibold text-sky-500 mb-6">
              {selectedService.subtitle[lang]}
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {selectedService.description[lang]}
            </p>

            {/* Full Deliverables Scope */}
            <div
              className={`p-6 rounded-2xl border mb-8 ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{t.services.deliverablesHeading}</span>
              </h4>
              <div className="space-y-3">
                {selectedService.deliverables[lang].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                    <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA inside Modal */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-white/10">
              <span className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Customized scope of work available upon initial scoping discussion.'
                  : '초기 상담 후 귀사에 최적화된 맞춤형 자문 범위를 제안해 드립니다.'}
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-center ${
                  theme === 'dark'
                    ? 'bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-lg shadow-sky-500/20'
                    : 'bg-[#0c1c4f] text-white hover:bg-slate-900 shadow-md'
                }`}
              >
                {t.nav.bookConsultation}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
