import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, Milestone } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';
import { processStepsData } from '../data/content';

interface ProcessSectionProps {
  theme: Theme;
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ theme, lang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const t = translations[lang];
  const activeStep = processStepsData[activeStepIndex];

  return (
    <section
      id="process"
      className={`py-24 transition-colors duration-500 border-t border-b ${
        theme === 'dark'
          ? 'bg-[#060e1b] text-white border-white/5'
          : 'bg-[#f4f7fc] text-[#0c1c4f] border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
            <Milestone className="w-3.5 h-3.5 text-sky-400" />
            <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
              {t.process.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif">
            {t.process.title}
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Step Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {processStepsData.map((step, idx) => (
            <button
              key={step.step}
              id={`process-tab-${idx}`}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                activeStepIndex === idx
                  ? theme === 'dark'
                    ? 'bg-[#0d1e38] border-sky-400 text-white shadow-xl shadow-sky-950/50'
                    : 'bg-white border-[#0c1c4f] text-[#0c1c4f] shadow-lg shadow-slate-900/10'
                  : theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  : 'bg-white/60 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`text-xl font-serif font-bold ${
                    activeStepIndex === idx ? 'text-sky-400' : 'text-slate-500'
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-semibold">
                  {step.duration[lang]}
                </span>
              </div>
              <span className="text-sm font-bold tracking-tight block line-clamp-1">
                {step.title[lang]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div
          id="active-process-showcase"
          className={`rounded-3xl border p-6 sm:p-10 transition-all duration-500 overflow-hidden ${
            theme === 'dark'
              ? 'bg-[#081225] border-white/10 shadow-2xl'
              : 'bg-white border-slate-200 shadow-xl shadow-slate-900/5'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Step Details & Activities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-serif font-bold text-sky-400">
                  {activeStep.step}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {activeStep.title[lang]}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-500">
                    {activeStep.subtitle[lang]}
                  </p>
                </div>
              </div>

              <p
                className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {activeStep.description[lang]}
              </p>

              {/* Key Activities List */}
              <div
                className={`p-6 rounded-2xl border ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    {t.process.viewDetails}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.process.durationLabel} {activeStep.duration[lang]}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.keyActivities[lang].map((activity, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step Nav */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                    activeStepIndex === 0
                      ? 'opacity-30 cursor-not-allowed border-transparent'
                      : theme === 'dark'
                      ? 'border-white/20 text-white hover:bg-white/10'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  ◀ {lang === 'en' ? 'Previous Step' : '이전 단계'}
                </button>

                <button
                  disabled={activeStepIndex === processStepsData.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      Math.min(processStepsData.length - 1, prev + 1)
                    )
                  }
                  className={`text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                    activeStepIndex === processStepsData.length - 1
                      ? 'opacity-30 cursor-not-allowed bg-slate-500 text-white'
                      : theme === 'dark'
                      ? 'bg-sky-400 text-slate-950 hover:bg-sky-300'
                      : 'bg-[#0c1c4f] text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{lang === 'en' ? 'Next Step' : '다음 단계'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Step Context Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3] bg-slate-900">
                <img
                  id="process-step-image"
                  key={activeStep.step}
                  src={activeStep.image}
                  alt={activeStep.title[lang]}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/market-research-scoping.svg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    EXECUTION BENCHMARK
                  </span>
                  <p className="text-sm font-semibold leading-snug">
                    {activeStep.subtitle[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
