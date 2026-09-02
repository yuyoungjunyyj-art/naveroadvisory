import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  Send,
} from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';
import { assessmentQuestionsData } from '../data/content';

interface MarketAssessmentToolProps {
  theme: Theme;
  lang: Language;
}

export const MarketAssessmentTool: React.FC<MarketAssessmentToolProps> = ({ theme, lang }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedTips, setSelectedTips] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const t = translations[lang];

  const question = assessmentQuestionsData[currentStep];
  const totalQuestions = assessmentQuestionsData.length;

  const handleSelectOption = (questionId: string, score: number, tip: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setSelectedTips((prev) => ({ ...prev, [questionId]: tip }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSelectedTips({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculate total score (normalized to 100)
  const totalScore = (Object.values(answers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
  const normalizedScore = Math.min(100, Math.round((totalScore / 125) * 100));

  const isCurrentAnswered = answers[question?.id] !== undefined;

  return (
    <section
      id="assessment"
      className={`py-24 transition-colors duration-500 border-t ${
        theme === 'dark'
          ? 'bg-[#060e1b] text-white border-white/5'
          : 'bg-[#f4f7fc] text-[#0c1c4f] border-slate-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
              {t.assessment.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-serif">
            {t.assessment.title}
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.assessment.subtitle}
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div
          id="diagnostic-tool-box"
          className={`rounded-3xl border p-6 sm:p-10 transition-all duration-500 shadow-2xl ${
            theme === 'dark'
              ? 'bg-[#081225] border-white/10'
              : 'bg-white border-slate-200 shadow-slate-900/5'
          }`}
        >
          {!showResult ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  {t.assessment.stepIndicator} {currentStep + 1} {t.assessment.of} {totalQuestions}
                </span>
                <div className="w-36 h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
                {question.question[lang]}
              </h3>

              {/* Options Grid */}
              <div className="space-y-3.5 mb-8">
                {question.options.map((opt, idx) => {
                  const isSelected = answers[question.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() =>
                        handleSelectOption(question.id, opt.score, opt.tip[lang])
                      }
                      className={`w-full p-4.5 rounded-2xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? theme === 'dark'
                            ? 'bg-sky-500/15 border-sky-400 text-white shadow-md'
                            : 'bg-sky-50 border-[#0c1c4f] text-[#0c1c4f] shadow-md'
                          : theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? 'border-sky-400 bg-sky-400 text-slate-950'
                              : 'border-slate-400'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                        </div>
                        <span className="text-sm font-semibold">{opt.label[lang]}</span>
                      </div>

                      {/* Strategic Tip Pill if Selected */}
                      {isSelected && (
                        <div className="sm:ml-auto text-[11px] font-medium px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20">
                          {opt.tip[lang]}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all ${
                    currentStep === 0
                      ? 'opacity-30 cursor-not-allowed border-transparent'
                      : theme === 'dark'
                      ? 'border-white/20 text-white hover:bg-white/10'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {t.assessment.prev}
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className={`text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                    !isCurrentAnswered
                      ? 'opacity-40 cursor-not-allowed bg-slate-500 text-white'
                      : theme === 'dark'
                      ? 'bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-lg shadow-sky-500/20'
                      : 'bg-[#0c1c4f] text-white hover:bg-slate-900 shadow-md'
                  }`}
                >
                  <span>
                    {currentStep === totalQuestions - 1
                      ? t.assessment.calculate
                      : t.assessment.next}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.assessment.resultTitle}</span>
                </div>

                {/* Score Dial */}
                <div className="py-4">
                  <div className="text-6xl sm:text-7xl font-extrabold font-serif text-sky-400">
                    {normalizedScore}
                    <span className="text-3xl text-slate-500">/100</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mt-2">
                    {normalizedScore >= 75
                      ? t.assessment.readinessHigh
                      : normalizedScore >= 45
                      ? t.assessment.readinessMedium
                      : t.assessment.readinessEarly}
                  </h4>
                </div>
              </div>

              {/* Tailored Insights Grid */}
              <div
                className={`p-6 rounded-2xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h5 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.assessment.recommendationsHeading}</span>
                </h5>
                <div className="space-y-3">
                  {Object.entries(selectedTips).map(([qId, tip], i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                      <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bridge to Consultation */}
              <div
                className={`p-6 rounded-2xl border text-center space-y-4 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border-sky-500/30'
                    : 'bg-sky-50 border-sky-200'
                }`}
              >
                <p className="text-sm font-medium text-slate-300 dark:text-slate-200">
                  {t.assessment.actionPrompt}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      theme === 'dark'
                        ? 'bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-lg shadow-sky-500/20'
                        : 'bg-[#0c1c4f] text-white hover:bg-slate-900 shadow-md'
                    }`}
                  >
                    <span>{t.nav.bookConsultation}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.assessment.reset}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
