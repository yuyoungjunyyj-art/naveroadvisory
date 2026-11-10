import React, { useState, useRef } from 'react';
import {
  Newspaper,
  BookOpen,
  ArrowRight,
  Share2,
  Check,
  Calendar,
  Clock,
  Bookmark,
  Sparkles,
  Eye,
  ChevronLeft,
  ChevronRight,
  Layers,
  SlidersHorizontal,
} from 'lucide-react';
import { Theme, Language } from '../types';
import { InsightArticle, insightsArticles } from '../data/insightsData';
import { getInsightShareUrl, copyTextToClipboard } from '../utils/seo';
import {
  formatArticleViews,
  formatPublishedDate,
  useRealtimeArticleViews,
} from '../utils/articleViews';
import { trackArticleShare, trackArticleView } from '../lib/analytics';

interface InsightsSectionProps {
  theme: Theme;
  lang: Language;
  onOpenArticle: (slug: string) => void;
}

type InsightCategoryFilter = 'all' | 'hospitality' | 'wellness' | 'districts' | 'strategy';

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  theme,
  lang,
  onOpenArticle,
}) => {
  const isEn = lang === 'en';
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>(insightsArticles[0].slug);
  const [selectedCategory, setSelectedCategory] = useState<InsightCategoryFilter>('all');
  const railRef = useRef<HTMLDivElement>(null);

  const activeArticle =
    insightsArticles.find((a) => a.slug === activeSlug) || insightsArticles[0];
  const shareUrl = getInsightShareUrl(activeArticle.slug);

  // Real-time Firebase synchronized view count per article
  const { views: viewCount, isLive } = useRealtimeArticleViews(
    activeArticle.id,
    activeArticle.publishedAt
  );

  const filterLabels: Record<
    InsightCategoryFilter,
    { en: string; ko: string }
  > = {
    all: { en: 'All Publications', ko: '전체 리포트' },
    hospitality: { en: 'Hospitality & F&B', ko: '호스피탈리티 & F&B' },
    wellness: { en: 'Wellness & Medical', ko: '웰니스 & 메디컬' },
    districts: { en: 'Seoul Districts & Property', ko: '서울 상권 & 부동산' },
    strategy: { en: 'Market Strategy & Entry', ko: '시장 진출 전략' },
  };

  const matchesFilter = (article: InsightArticle, filter: InsightCategoryFilter): boolean => {
    if (filter === 'all') return true;
    const text = `${article.id} ${article.category.en} ${article.corridor.en} ${article.title.en}`.toLowerCase();
    if (filter === 'hospitality') {
      return (
        text.includes('hospitality') ||
        text.includes('hotel') ||
        text.includes('tourism') ||
        text.includes('f&b')
      );
    }
    if (filter === 'wellness') {
      return (
        text.includes('wellness') ||
        text.includes('medical') ||
        text.includes('beauty') ||
        text.includes('patient')
      );
    }
    if (filter === 'districts') {
      return (
        text.includes('district') ||
        text.includes('real estate') ||
        text.includes('property') ||
        text.includes('site selection') ||
        text.includes('seoul')
      );
    }
    if (filter === 'strategy') {
      return (
        text.includes('strategy') ||
        text.includes('entry') ||
        text.includes('franchis') ||
        text.includes('governance')
      );
    }
    return true;
  };

  const filteredArticles = insightsArticles.filter((article) =>
    matchesFilter(article, selectedCategory)
  );

  const getFilterCount = (filterKey: InsightCategoryFilter): number => {
    return insightsArticles.filter((a) => matchesFilter(a, filterKey)).length;
  };

  const scrollRail = (direction: 'left' | 'right') => {
    if (railRef.current) {
      const scrollAmount = 320;
      railRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleArticleClick = (slug: string) => {
    const article = insightsArticles.find((a) => a.slug === slug) || activeArticle;
    trackArticleView({
      articleId: article.id,
      articleTitle: article.title[lang],
      category: article.category[lang],
      publishedAt: article.publishedAt,
      viewCount,
      lang,
    });
    onOpenArticle(slug);
  };

  const handleShare = async (slug: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const url = getInsightShareUrl(slug);
    const success = await copyTextToClipboard(url);

    if (success) {
      setCopiedSlug(slug);
      trackArticleShare(activeArticle.id, 'copy_link');
      setTimeout(() => {
        setCopiedSlug(null);
      }, 3000);
    }
  };

  return (
    <section
      id="insights"
      className={`py-24 transition-colors duration-500 border-t scroll-mt-20 sm:scroll-mt-24 ${
        theme === 'dark'
          ? 'bg-[#050c18] text-white border-white/10'
          : 'bg-[#f8fafc] text-[#0c1c4f] border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest bg-sky-500/10 border-sky-500/20 text-sky-400">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{isEn ? 'STRATEGIC INSIGHTS & PUBLICATIONS' : '전략 인사이트 및 리서치'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif">
              {isEn ? 'Advisory Publications' : '전략 리서치 및 분석 리포트'}
            </h2>
            <p
              className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isEn
                ? 'Independent commentary, operational frameworks, and critical market intelligence for international brand principals entering South Korea.'
                : '한국 시장에 진출하는 글로벌 브랜드 의사결정자를 위한 독자적 시장 분석, 운영 프레임워크 및 전략적 조언을 제공합니다.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isEn ? 'Request Full Briefing' : '전략 자문 요청'}</span>
            </a>
          </div>
        </div>

        {/* Clean Publication Selector Bar with Topic Filters & Jump Dropdown */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b dark:border-white/10 border-slate-200">
            {/* Topic Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
                {isEn ? 'Topic:' : '주제:'}
              </span>
              {(['all', 'hospitality', 'wellness', 'districts', 'strategy'] as InsightCategoryFilter[]).map(
                (catKey) => {
                  const isCatActive = selectedCategory === catKey;
                  const count = getFilterCount(catKey);
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(catKey);
                        const matching = insightsArticles.filter((a) =>
                          matchesFilter(a, catKey)
                        );
                        if (
                          matching.length > 0 &&
                          !matching.some((a) => a.slug === activeSlug)
                        ) {
                          setActiveSlug(matching[0].slug);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        isCatActive
                          ? 'bg-sky-500 text-white shadow-sm font-semibold'
                          : theme === 'dark'
                          ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950'
                      }`}
                    >
                      <span>{filterLabels[catKey][lang]}</span>
                      <span
                        className={`text-[10px] font-mono px-1 rounded ${
                          isCatActive
                            ? 'bg-white/20 text-white'
                            : theme === 'dark'
                            ? 'bg-white/10 text-slate-400'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* Quick Jump Dropdown and Rail Scroll Controls */}
            <div className="flex items-center gap-2.5 self-end lg:self-auto shrink-0">
              <div className="relative">
                <select
                  value={activeSlug}
                  onChange={(e) => setActiveSlug(e.target.value)}
                  aria-label={isEn ? 'Select advisory publication' : '리포트 선택'}
                  className={`text-xs pl-3 pr-8 py-1.5 rounded-lg border font-medium transition-colors appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 ${
                    theme === 'dark'
                      ? 'bg-[#08152b] border-white/10 text-slate-200'
                      : 'bg-white border-slate-300 text-slate-800 shadow-sm'
                  }`}
                >
                  {insightsArticles.map((article, idx) => (
                    <option key={article.id} value={article.slug}>
                      #{String(insightsArticles.length - idx).padStart(2, '0')} · {article.date[lang]} · {article.title[lang]}
                    </option>
                  ))}
                </select>
                <Layers className="w-3.5 h-3.5 text-sky-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-70" />
              </div>

              {/* Scroll buttons for rail */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollRail('left')}
                  aria-label="Scroll left"
                  className={`p-1.5 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail('right')}
                  aria-label="Scroll right"
                  className={`p-1.5 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Clean Horizontal Scroll Rail (Single Row, Uniform Cards) */}
          <div className="relative mt-3">
            <div
              ref={railRef}
              className="flex gap-3 overflow-x-auto scrollbar-none scroll-smooth pb-2 pt-1"
            >
              {filteredArticles.map((article) => {
                const isSelected = article.slug === activeArticle.slug;
                const originalIdx = insightsArticles.findIndex((a) => a.id === article.id);
                const issueNumber = String(insightsArticles.length - originalIdx).padStart(2, '0');
                const isLatest = originalIdx === 0;

                return (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => setActiveSlug(article.slug)}
                    className={`w-[270px] sm:w-[300px] flex-shrink-0 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between text-left group relative ${
                      isSelected
                        ? theme === 'dark'
                          ? 'bg-sky-950/40 border-sky-400 ring-1 ring-sky-400/50 shadow-lg shadow-sky-500/10'
                          : 'bg-sky-50/80 border-sky-400 ring-1 ring-sky-400/50 shadow-md shadow-sky-500/10'
                        : theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10 hover:border-sky-500/40 hover:bg-white/[0.06]'
                        : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Top: Issue # + Date + Latest badge */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[10px] font-bold tracking-wider text-sky-400 uppercase">
                            ISSUE #{issueNumber}
                          </span>
                          {isLatest && (
                            <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              {isEn ? 'LATEST' : '최신'}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[10px] text-slate-400">
                          {article.date[lang]}
                        </span>
                      </div>

                      {/* Clean 2-line title with no awkward cut-offs */}
                      <h4
                        className={`text-xs sm:text-sm font-serif font-bold line-clamp-2 leading-snug transition-colors ${
                          isSelected
                            ? 'text-sky-400'
                            : theme === 'dark'
                            ? 'text-white group-hover:text-sky-300'
                            : 'text-[#0c1c4f] group-hover:text-sky-600'
                        }`}
                      >
                        {article.title[lang]}
                      </h4>
                    </div>

                    {/* Bottom: Read time & Active indicator */}
                    <div className="mt-3 pt-2 border-t dark:border-white/10 border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-400" />
                        {article.readTime[lang]}
                      </span>
                      <span
                        className={`font-medium ${
                          isSelected
                            ? 'text-sky-400 font-bold'
                            : 'text-slate-400 group-hover:text-sky-400'
                        }`}
                      >
                        {isSelected ? (isEn ? '● Active' : '● 선택됨') : (isEn ? 'Preview →' : '미리보기 →')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Publication Teaser Card */}
        <article
          id="insight-teaser"
          className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl relative ${
            theme === 'dark'
              ? 'bg-[#08152b] border-white/10 shadow-black/40 hover:border-sky-500/30'
              : 'bg-white border-slate-200 shadow-slate-200/80 hover:border-sky-300'
          }`}
        >
          {/* Card Top Banner with Metadata & Unique Social Link */}
          <div
            className={`p-6 sm:p-8 border-b flex flex-wrap items-center justify-between gap-4 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-sky-950/40 via-[#0a1c38] to-[#08152b] border-white/10'
                : 'bg-gradient-to-r from-sky-50/70 via-slate-50 to-white border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-500/15 text-sky-400 border border-sky-400/30">
                <Sparkles className="w-3 h-3" />
                {activeArticle.category[lang]} | {activeArticle.corridor[lang]}
              </span>
              {activeArticle.slug === insightsArticles[0].slug && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {isEn ? 'Featured Publication' : '주요 추천 리포트'}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5" title="Publication Date">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{formatPublishedDate(activeArticle.publishedAt, lang)}</span>
              </span>
              <span className="opacity-30">|</span>
              <span
                className="flex items-center gap-1.5 font-mono text-[11px]"
                title={isEn ? 'Globally synchronized real-time readers' : '전 세계 실시간 동기화 누적 조회수'}
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold text-slate-300">{formatArticleViews(viewCount, lang)}</span>
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
                <span>{activeArticle.readTime[lang]}</span>
              </span>
            </div>
          </div>

          {/* Main Teaser Content Area */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Headline & Subtitle */}
            <div className="space-y-3">
              <h3
                onClick={() => handleArticleClick(activeArticle.slug)}
                className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight cursor-pointer transition-colors ${
                  theme === 'dark' ? 'text-white hover:text-sky-300' : 'text-[#0c1c4f] hover:text-sky-600'
                }`}
              >
                {activeArticle.title[lang]}
              </h3>

              <p
                className={`text-base sm:text-xl font-light leading-relaxed ${
                  theme === 'dark' ? 'text-sky-200' : 'text-sky-900'
                }`}
              >
                {activeArticle.subtitle[lang]}
              </p>
            </div>

            {/* Teaser Excerpt Box */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/[0.03] border-white/10 text-slate-200'
                  : 'bg-sky-50/50 border-sky-100 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-500 mb-2">
                {isEn ? 'Article Thesis & Scope' : '아티클 핵심 논제'}
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-sans">
                {activeArticle.teaserSummary[lang]}
              </p>
            </div>

            {/* 3 Key Takeaway Previews */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                {isEn ? 'Key Critical Insights in This Publication:' : '본 리포트에서 다루는 핵심 인사이트:'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activeArticle.previewTakeaways[lang].map((takeaway, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex flex-col justify-between ${
                      theme === 'dark'
                        ? 'bg-white/[0.02] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-sky-400 flex-shrink-0">
                        0{idx + 1}.
                      </span>
                      <p
                        className={`text-xs sm:text-sm font-medium leading-snug ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Actions */}
          <div
            className={`p-6 sm:px-10 py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              theme === 'dark'
                ? 'bg-white/[0.02] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            {/* Unique URL Reference */}
            <div className="flex items-center gap-2 text-xs text-slate-400 overflow-hidden max-w-full sm:max-w-md">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-sky-500 flex-shrink-0">
                URL:
              </span>
              <span className="font-mono text-[11px] text-slate-400 truncate select-all">
                {shareUrl}
              </span>
            </div>

            {/* Action Buttons: Read Full Article & Share */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {/* Share Button */}
              <div className="relative">
                <button
                  id="btn-teaser-share"
                  onClick={(e) => handleShare(activeArticle.slug, e)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                    copiedSlug === activeArticle.slug
                      ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                      : theme === 'dark'
                      ? 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                  title={shareUrl}
                >
                  {copiedSlug === activeArticle.slug ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isEn ? 'Link Copied' : '링크 복사됨'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Share' : '공유하기'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Read Full Article Button */}
              <button
                id="btn-open-article-subpage"
                onClick={() => handleArticleClick(activeArticle.slug)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/30 group"
              >
                <span>{isEn ? 'Read Full Publication' : '전체 아티클 읽기'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </article>

        {/* Complete Publications Archive Grid - All 9 Articles Cleanly Arranged */}
        <div className="mt-20 pt-16 border-t dark:border-white/10 border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold uppercase tracking-wider bg-sky-500/10 border-sky-500/20 text-sky-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isEn ? 'COMPLETE ARCHIVE · 9 EDITIONS' : '전체 리포트 아카이브 · 총 9편'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                {isEn ? 'All Published Strategic Intelligence' : '발행된 전략 분석 리포트 전체 보기'}
              </h3>
              <p className={`text-sm mt-1 max-w-2xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {isEn
                  ? 'Explore our complete library of decision-grade intelligence covering hospitality, tourism, district economics, and market entry strategy in South Korea.'
                  : '한국 시장 진출, 호텔·F&B 운영, 서울 상권 분석 및 웰니스 전략을 다룬 NAVERO Advisory의 전체 리서치 라이브러리입니다.'}
              </p>
            </div>
            <span className="font-mono text-xs text-slate-400 self-start md:self-end">
              {isEn ? 'Chronologically organized' : '발행일 순 정렬'}
            </span>
          </div>

          {/* 3-Column Uniform Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsArticles.map((article, idx) => {
              const issueNumber = String(insightsArticles.length - idx).padStart(2, '0');
              const isLatest = idx === 0;
              const isCurrentlyActive = article.slug === activeArticle.slug;

              return (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article.slug)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isCurrentlyActive
                      ? theme === 'dark'
                        ? 'bg-[#081833] border-sky-500/60 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400/40'
                        : 'bg-sky-50/70 border-sky-400 shadow-lg shadow-sky-500/10'
                      : theme === 'dark'
                      ? 'bg-[#08152b]/60 border-white/10 hover:border-sky-500/40 hover:bg-[#08152b] hover:shadow-lg'
                      : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-md'
                  }`}
                >
                  {/* Card Top: Issue, Date, Category */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                          ISSUE #{issueNumber}
                        </span>
                        {isLatest && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {isEn ? 'LATEST' : '최신'}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-sky-400" />
                        {article.date[lang]}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wide mb-3 truncate">
                      {article.category[lang]}
                    </div>

                    {/* Full Title (unabbreviated, beautiful font) */}
                    <h4
                      className={`text-lg sm:text-xl font-serif font-bold tracking-tight mb-2.5 leading-snug group-hover:text-sky-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                      }`}
                    >
                      {article.title[lang]}
                    </h4>

                    {/* Subtitle / Teaser */}
                    <p
                      className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {article.subtitle[lang]}
                    </p>
                  </div>

                  {/* Card Footer: Metadata & Read Action */}
                  <div className="pt-4 border-t dark:border-white/10 border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {article.readTime[lang]}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-sky-300 transition-colors uppercase tracking-wider">
                      <span>{isEn ? 'Read Report' : '리포트 읽기'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
