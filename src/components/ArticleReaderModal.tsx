import React, { useEffect, useState, useRef } from 'react';
import {
  X,
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  ArrowUpRight,
  Sparkles,
  Eye,
  Linkedin,
  Copy,
  Table,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, Language } from '../types';
import { InsightArticle, insightsArticles } from '../data/insightsData';
import { getInsightShareUrl, copyTextToClipboard } from '../utils/seo';
import {
  incrementArticleView,
  formatArticleViews,
  formatPublishedDate,
  getArticleViews,
  useRealtimeArticleViews,
} from '../utils/articleViews';
import {
  trackArticleView,
  trackArticleScroll,
  trackArticleShare,
} from '../lib/analytics';

interface ArticleReaderModalProps {
  article: InsightArticle | null;
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  lang: Language;
  onSelectArticle?: (slug: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  theme,
  lang,
  onSelectArticle,
}) => {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);
  const [copiedPostKey, setCopiedPostKey] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Real-time Firebase synchronized view count
  const { views: realtimeViews, isLive } = useRealtimeArticleViews(
    article?.id,
    article?.publishedAt
  );

  // Track article open & increment view count
  useEffect(() => {
    if (!isOpen || !article) return;

    // Increment view count with session deduplication & Firebase sync
    const { views } = incrementArticleView(article.id, article.publishedAt);

    // Stream event to GA4
    trackArticleView({
      articleId: article.id,
      articleTitle: article.title[lang],
      category: article.category[lang],
      publishedAt: article.publishedAt,
      viewCount: views,
      lang,
    });
  }, [isOpen, article?.id, lang]);

  // Track reader scroll progress (25%, 50%, 75%, 100%)
  useEffect(() => {
    if (!isOpen || !article) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const milestonesReached = new Set<number>();

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) return;

      const percent = Math.min(100, Math.round((scrollTop / maxScroll) * 100));
      const milestones = [25, 50, 75, 100];

      for (const milestone of milestones) {
        if (percent >= milestone && !milestonesReached.has(milestone)) {
          milestonesReached.add(milestone);
          trackArticleScroll(article.id, milestone);
        }
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, article?.id]);

  // Close on Escape key press and lock background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const shareUrl = getInsightShareUrl(article.slug);

  const handleShare = async () => {
    const success = await copyTextToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      trackArticleShare(article.id, 'copy_link');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      <div
        ref={scrollContainerRef}
        className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center bg-black/75 backdrop-blur-md transition-all"
      >
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-4xl my-4 sm:my-8 mx-3 sm:mx-6 rounded-3xl border shadow-2xl overflow-hidden ${
            theme === 'dark'
              ? 'bg-[#08152b] border-white/10 text-slate-100 shadow-black/60'
              : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}
        >
          {/* Top Sticky Action Bar */}
          <div
            className={`sticky top-0 z-20 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-[#08152b]/95 border-white/10'
                : 'bg-white/95 border-slate-200 shadow-sm'
            }`}
          >
            <button
              onClick={onClose}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEn ? 'Back to Overview' : '전체 목록으로'}</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleShare}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  copied
                    ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                    : theme === 'dark'
                    ? 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title={shareUrl}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? (isEn ? 'Copied' : '복사됨') : (isEn ? 'Share' : '공유')}</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close reader"
                className={`p-1.5 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-400 hover:text-white hover:bg-white/10'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Header */}
          <div
            className={`p-6 sm:p-10 border-b ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-sky-950/40 via-[#0a1c38] to-[#08152b] border-white/10'
                : 'bg-gradient-to-r from-sky-50/70 via-slate-50 to-white border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-500/15 text-sky-400 border border-sky-400/30">
                <Sparkles className="w-3 h-3" />
                {article.category[lang]} | {article.corridor[lang]}
              </span>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5" title="Publication Date">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{formatPublishedDate(article.publishedAt, lang)}</span>
                </span>
                <span className="opacity-30">|</span>
                <span
                  className="flex items-center gap-1.5 font-mono text-[11px]"
                  title={isEn ? 'Globally synchronized real-time readers' : '전 세계 실시간 동기화 누적 조회수'}
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-semibold text-slate-300">{formatArticleViews(realtimeViews, lang)}</span>
                  {isLive && (
                    <span
                      className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 animate-pulse"
                      title={isEn ? 'Live Firebase sync active' : '실시간 전역 동기화 활성'}
                    >
                      LIVE
                    </span>
                  )}
                </span>
                <span className="opacity-30">|</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{article.readTime[lang]}</span>
                </span>
              </div>
            </div>

            <h1
              className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
              }`}
            >
              {article.title[lang]}
            </h1>

            <p
              className={`text-lg sm:text-2xl font-light leading-snug mb-6 ${
                theme === 'dark' ? 'text-sky-200' : 'text-sky-900'
              }`}
            >
              {article.subtitle[lang]}
            </p>

            {/* Executive Thesis */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-200'
                  : 'bg-sky-50/50 border-sky-100 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-500 mb-2 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Executive Thesis' : '핵심 요약'}</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-sans font-medium">
                {article.executiveThesis[lang]}
              </p>
            </div>
          </div>

          {/* Article Full Body */}
          <div className="p-6 sm:p-10 space-y-12">
            {/* Section 1: Problem / The Why */}
            <section className="space-y-4">
              <h2
                className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                }`}
              >
                {article.problemSectionTitle?.[lang] || (isEn ? 'The assumption problem' : '전제의 함정')}
              </h2>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {article.assumptionProblem[lang]}
              </p>
            </section>

            {/* Section 2: Core Analytical Breakdown / The Structural Test */}
            <section className="space-y-6">
              <h2
                className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                }`}
              >
                {article.coreSectionTitle?.[lang] || (isEn ? 'Five assumptions to retire' : '재검토해야 할 5가지 전제')}
              </h2>

              {/* Numbered Editorial List */}
              <ol className="divide-y divide-slate-200 dark:divide-white/10 list-none p-0 m-0">
                {article.fiveAssumptions.map((item, idx) => (
                  <li
                    key={item.num}
                    id={`core-point-${idx + 1}`}
                    className="py-6 first:pt-1 last:pb-2 flex items-start gap-4 sm:gap-6"
                  >
                    <div className="flex-shrink-0 w-8 sm:w-10">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-500 dark:text-sky-400 select-none">
                        {idx + 1}.
                      </span>
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3
                        className={`text-base sm:text-lg font-bold leading-snug ${
                          theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                        }`}
                      >
                        {item.headline[lang]}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {item.detail[lang]}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 2.5: Operating Model Comparison Matrix (If present) */}
            {article.modelComparison && article.modelComparison.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  <Table className="w-4 h-4" />
                  <span>
                    {isEn ? 'Operating Model Matrix: Risk vs Control vs Learning' : '운영 모델 비교 매트릭스: 리스크·통제권·학습'}
                  </span>
                </div>
                <h3
                  className={`text-lg sm:text-xl font-serif font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                  }`}
                >
                  {isEn
                    ? 'Comparing Four Entry Archetypes in South Korea'
                    : '한국 진출 4대 운영 모델 비교 분석'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {article.modelComparison.map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border space-y-3.5 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/[0.02] border-white/10 hover:border-sky-500/40 hover:bg-white/[0.04]'
                          : 'bg-white border-slate-200 shadow-sm hover:border-sky-300 hover:shadow'
                      }`}
                    >
                      <div className="flex items-center justify-between border-b pb-2.5 dark:border-white/10 border-slate-100">
                        <span className="font-bold text-sm sm:text-base text-sky-400 font-serif">
                          {m.model[lang]}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase">
                          {isEn ? 'Model 0' : '모델 0'}{idx + 1}
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">
                            {isEn ? 'Risk & Capital' : '리스크 & 자본 투입'}:
                          </span>
                          <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>
                            {m.riskAllocation[lang]}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">
                            {isEn ? 'Decision Rights' : '의사결정 통제권'}:
                          </span>
                          <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>
                            {m.decisionRights[lang]}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">
                            {isEn ? 'Learning Loop Speed' : '현지 학습 속도'}:
                          </span>
                          <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}>
                            {m.learningSpeed[lang]}
                          </span>
                        </div>
                        <div className="pt-1 border-t dark:border-white/5 border-slate-100">
                          <span className="text-sky-500 font-semibold block mb-0.5">
                            {isEn ? 'Korea Applicability' : '한국 시장 권고 기준'}:
                          </span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-sky-200' : 'text-sky-900'}`}>
                            {m.koreaSuitability[lang]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Advisory Verdict */}
            <section
              className={`p-6 sm:p-8 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-sky-950/20 border-sky-500/30'
                  : 'bg-sky-50/70 border-sky-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>{isEn ? 'Advisory Verdict' : '자문단 총평 & 핵심 시사점'}</span>
              </div>
              <blockquote
                className={`text-lg sm:text-xl font-serif italic mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                }`}
              >
                &ldquo;{article.verdictQuote[lang]}&rdquo;
              </blockquote>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {article.verdictDetail[lang]}
              </p>
            </section>

            {/* Section 4: Critical Decision Questions Before Signing */}
            <section className="space-y-4">
              <h2
                className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                }`}
              >
                {article.decisionQuestionsTitle?.[lang] ||
                  (isEn
                    ? 'Three questions principals should answer before signing'
                    : '계약 서명 전 경영진이 자문해야 할 3가지 질문')}
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {article.decisionQuestionsIntro?.[lang] ||
                  (isEn
                    ? 'Before capital is committed to leases, fit-outs, or joint ventures, leadership should establish explicit, evidence-backed answers to three core questions:'
                    : '임대차 계약, 인테리어 시공 또는 합작 투자에 자본을 투입하기 전에, 경영진은 다음 세 가지 핵심 질문에 대해 명확하고 실증적인 답을 확보해야 합니다:')}
              </p>
              <div className="space-y-3 pt-2">
                {article.decisionQuestions[lang].map((q, idx) => (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-xl border flex items-start gap-3.5 ${
                      theme === 'dark'
                        ? 'bg-white/[0.02] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-500/15 text-sky-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p
                      className={`text-sm sm:text-base font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                      }`}
                    >
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Official Benchmark Data Sources & Methodology */}
            <section
              className={`p-6 sm:p-8 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/[0.02] border-white/10'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>
                  {isEn
                    ? 'Official Benchmark Data Sources & Methodology'
                    : '공식 벤치마크 데이터 소스 및 방법론'}
                </span>
              </div>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {isEn
                  ? 'Market observations are calibrated against official statutory frameworks, commercial footfall indices, and macroeconomic accounts published by Korean statutory bodies:'
                  : '나베로의 시장 진단 및 조언은 대한민국 공공기관이 발표하는 공식 정책 규제, 상권 유동인구 지표 및 국가 통계 데이터를 바탕으로 정밀 검증됩니다:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {article.sources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-xl border text-xs block transition-all group ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 hover:border-sky-500/50 hover:bg-white/10'
                        : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-sky-400 mb-1">
                      <span className="truncate">{src.title[lang]}</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p
                      className={`text-[11px] leading-relaxed ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {src.desc[lang]}
                    </p>
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-4 leading-relaxed">
                {article.disclaimer[lang]}
              </p>
            </section>

            {/* Section 6: LinkedIn Thought Leadership & Distribution Kit (If provided) */}
            {article.linkedinKit && (
              <section
                className={`p-6 sm:p-8 rounded-2xl border ${
                  theme === 'dark'
                    ? 'bg-sky-950/20 border-sky-500/30'
                    : 'bg-sky-50/50 border-sky-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                    <Linkedin className="w-4 h-4" />
                    <span>
                      {isEn ? 'Executive Distribution & Thought Leadership Kit' : '경영진 브리핑 & 링크드인 배포 카피'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    Ready to Post
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {isEn
                    ? 'Copyable distribution copy tailored for corporate channels, principal consultant commentary, and Friday executive polls:'
                    : '기업 브랜드 페이지, 시니어 컨설턴트 인사이트, 금요일 경영진 설문용으로 검증된 배포용 카피입니다:'}
                </p>

                <div className="space-y-4">
                  {/* Monday: Brand Page */}
                  <div
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                        {isEn ? 'Monday — Brand Page' : '월요일 — 브랜드 공식 페이지'}
                      </span>
                      <button
                        onClick={async () => {
                          const success = await copyTextToClipboard(article.linkedinKit!.brandPageMonday[lang]);
                          if (success) {
                            setCopiedPostKey('brandMonday');
                            setTimeout(() => setCopiedPostKey(null), 2500);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 transition-colors"
                      >
                        {copiedPostKey === 'brandMonday' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{isEn ? 'Copied' : '복사됨'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{isEn ? 'Copy' : '복사'}</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {article.linkedinKit.brandPageMonday[lang]}
                    </p>
                  </div>

                  {/* Wednesday: Principal Consultant */}
                  <div
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                        {isEn ? 'Wednesday — Principal Consultant' : '수요일 — 총괄 컨설턴트 논평'}
                      </span>
                      <button
                        onClick={async () => {
                          const success = await copyTextToClipboard(article.linkedinKit!.consultantWednesday[lang]);
                          if (success) {
                            setCopiedPostKey('consultantWednesday');
                            setTimeout(() => setCopiedPostKey(null), 2500);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 transition-colors"
                      >
                        {copiedPostKey === 'consultantWednesday' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{isEn ? 'Copied' : '복사됨'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{isEn ? 'Copy' : '복사'}</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {article.linkedinKit.consultantWednesday[lang]}
                    </p>
                  </div>

                  {/* Friday: Executive Question */}
                  <div
                    className={`p-4 rounded-xl border space-y-2.5 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                        {isEn ? 'Friday — Executive Question & Poll' : '금요일 — 경영진 디스커션 질문'}
                      </span>
                      <button
                        onClick={async () => {
                          const success = await copyTextToClipboard(article.linkedinKit!.executiveQuestionFriday[lang]);
                          if (success) {
                            setCopiedPostKey('executiveFriday');
                            setTimeout(() => setCopiedPostKey(null), 2500);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-sky-400/30 text-sky-400 hover:bg-sky-400/10 transition-colors"
                      >
                        {copiedPostKey === 'executiveFriday' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">{isEn ? 'Copied' : '복사됨'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{isEn ? 'Copy' : '복사'}</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {article.linkedinKit.executiveQuestionFriday[lang]}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Section 7: Other Strategic Publications */}
            {insightsArticles.length > 1 && (
              <section className="pt-4 border-t dark:border-white/10 border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>{isEn ? 'Other Advisory Publications' : '기타 전략 리서치 리포트'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {insightsArticles
                    .filter((a) => a.id !== article.id)
                    .map((otherArticle) => (
                      <div
                        key={otherArticle.id}
                        onClick={() => {
                          if (onSelectArticle) {
                            onSelectArticle(otherArticle.slug);
                            if (scrollContainerRef.current) {
                              scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }
                        }}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          theme === 'dark'
                            ? 'bg-white/[0.02] border-white/10 hover:border-sky-500/50 hover:bg-white/[0.05]'
                            : 'bg-slate-50 border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                          <span className="font-mono text-sky-400 uppercase font-semibold">
                            {otherArticle.date[lang]}
                          </span>
                          <span>{otherArticle.readTime[lang]}</span>
                        </div>
                        <h4
                          className={`text-sm sm:text-base font-serif font-bold mb-1.5 leading-snug ${
                            theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                          }`}
                        >
                          {otherArticle.title[lang]}
                        </h4>
                        <p
                          className={`text-xs line-clamp-2 ${
                            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {otherArticle.subtitle[lang]}
                        </p>
                      </div>
                    ))}
                </div>
              </section>
            )}
          </div>

          {/* Article Footer Consultation Bar */}
          <div
            className={`p-6 sm:px-10 py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              theme === 'dark'
                ? 'bg-white/[0.02] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <span
                className={`text-xs sm:text-sm font-semibold ${
                  theme === 'dark' ? 'text-slate-200' : 'text-[#0c1c4f]'
                }`}
              >
                {isEn ? 'Interested in a localized market entry assessment?' : '한국 진출 타당성 및 상권 정밀 진단이 필요하십니까?'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                  copied
                    ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                    : theme === 'dark'
                    ? 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>
                  {copied
                    ? (isEn ? 'Copied Link' : '링크 복사됨')
                    : (isEn ? 'Share Article' : '기사 공유')}
                </span>
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 transition-opacity"
              >
                <span>{isEn ? 'Consult with Advisory Team' : '자문팀과 상담하기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
