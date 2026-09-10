import React, { useState } from 'react';
import {
  Newspaper,
  BookOpen,
  ArrowRight,
  Share2,
  Check,
  Calendar,
  Clock,
  ExternalLink,
  Bookmark,
  Sparkles,
  Linkedin,
  Twitter,
  Copy,
  Eye,
} from 'lucide-react';
import { Theme, Language } from '../types';
import { insightsArticles } from '../data/insightsData';
import { getInsightShareUrl, copyTextToClipboard } from '../utils/seo';
import {
  getArticleViews,
  formatArticleViews,
  formatPublishedDate,
} from '../utils/articleViews';
import { trackArticleShare, trackArticleView } from '../lib/analytics';

interface InsightsSectionProps {
  theme: Theme;
  lang: Language;
  onOpenArticle: (slug: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  theme,
  lang,
  onOpenArticle,
}) => {
  const isEn = lang === 'en';
  const [activeSlug, setActiveSlug] = useState<string>(insightsArticles[0].slug);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Active featured article
  const featuredArticle =
    insightsArticles.find((a) => a.slug === activeSlug) || insightsArticles[0];
  const shareUrl = getInsightShareUrl(featuredArticle.slug);

  // Dynamic publication view count
  const viewCount = getArticleViews(featuredArticle.id, featuredArticle.publishedAt);

  const handleArticleClick = (slug: string) => {
    const art = insightsArticles.find((a) => a.slug === slug) || featuredArticle;
    const views = getArticleViews(art.id, art.publishedAt);
    trackArticleView({
      articleId: art.id,
      articleTitle: art.title[lang],
      category: art.category[lang],
      publishedAt: art.publishedAt,
      viewCount: views,
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
      trackArticleShare(featuredArticle.id, 'copy_link');
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

        {/* Publication Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
            <Newspaper className="w-3.5 h-3.5 text-sky-400" />
            {isEn ? 'Publications:' : '발행 리포트:'}
          </span>
          {insightsArticles.map((art, idx) => {
            const isActive = art.slug === featuredArticle.slug;
            return (
              <button
                key={art.id}
                onClick={() => setActiveSlug(art.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all border ${
                  isActive
                    ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20 font-semibold'
                    : theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                }`}
              >
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase ${
                  isActive
                    ? 'bg-white/20 text-white font-bold'
                    : 'bg-sky-500/10 text-sky-400 font-semibold'
                }`}>
                  {idx === 0 ? (isEn ? 'LATEST' : '최신') : (isEn ? 'REPORT' : '리포트')}
                </span>
                <span className="truncate max-w-[200px] sm:max-w-xs">{art.title[lang]}</span>
              </button>
            );
          })}
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
                {featuredArticle.category[lang]} | {featuredArticle.corridor[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Featured Publication
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5" title="Publication Date">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{formatPublishedDate(featuredArticle.publishedAt, lang)}</span>
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px]" title="Total Reads">
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold text-slate-300">{formatArticleViews(viewCount, lang)}</span>
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{featuredArticle.readTime[lang]}</span>
              </span>
            </div>
          </div>

          {/* Main Teaser Content Area */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Headline & Subtitle */}
            <div className="space-y-3">
              <h3
                onClick={() => handleArticleClick(featuredArticle.slug)}
                className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight cursor-pointer transition-colors ${
                  theme === 'dark' ? 'text-white hover:text-sky-300' : 'text-[#0c1c4f] hover:text-sky-600'
                }`}
              >
                {featuredArticle.title[lang]}
              </h3>

              <p
                className={`text-base sm:text-xl font-light leading-relaxed ${
                  theme === 'dark' ? 'text-sky-200' : 'text-sky-900'
                }`}
              >
                {featuredArticle.subtitle[lang]}
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
                {featuredArticle.teaserSummary[lang]}
              </p>
            </div>

            {/* 3 Key Takeaway Previews */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                {isEn ? 'Key Critical Insights in This Publication:' : '본 리포트에서 다루는 핵심 인사이트:'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {featuredArticle.previewTakeaways[lang].map((takeaway, idx) => (
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
                  onClick={(e) => handleShare(featuredArticle.slug, e)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                    copiedSlug === featuredArticle.slug
                      ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                      : theme === 'dark'
                      ? 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                  title={shareUrl}
                >
                  {copiedSlug === featuredArticle.slug ? (
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
                onClick={() => handleArticleClick(featuredArticle.slug)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/30 group"
              >
                <span>{isEn ? 'Read Full Publication' : '전체 아티클 읽기'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </article>

        {/* All Publications Directory */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
              }`}>
                {isEn ? 'All Advisory Publications' : '전체 리서치 아티클 목록'}
              </h3>
              <p className={`text-xs sm:text-sm mt-1 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {isEn
                  ? 'Access the complete catalog of NAVERO strategic research papers and operational frameworks.'
                  : '나베로 전략 자문단이 발행한 모든 전문 리서치 및 크로스보더 운영 프레임워크를 확인하실 수 있습니다.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightsArticles.map((art, idx) => {
              const artViews = getArticleViews(art.id, art.publishedAt);
              const isCurrent = art.slug === featuredArticle.slug;
              return (
                <div
                  key={art.id}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? theme === 'dark'
                        ? 'bg-sky-950/20 border-sky-500/40 ring-1 ring-sky-500/30'
                        : 'bg-sky-50/40 border-sky-300 ring-1 ring-sky-300/50'
                      : theme === 'dark'
                      ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                        {art.category[lang]}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                        <span>{formatPublishedDate(art.publishedAt, lang)}</span>
                        <span>•</span>
                        <span>{art.readTime[lang]}</span>
                      </div>
                    </div>

                    <h4
                      onClick={() => handleArticleClick(art.slug)}
                      className={`text-lg sm:text-xl font-serif font-bold tracking-tight cursor-pointer transition-colors ${
                        theme === 'dark' ? 'text-white hover:text-sky-300' : 'text-[#0c1c4f] hover:text-sky-600'
                      }`}
                    >
                      {art.title[lang]}
                    </h4>

                    <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {art.subtitle[lang]}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {formatArticleViews(artViews, lang)}
                    </span>
                    <button
                      onClick={() => handleArticleClick(art.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-500 hover:text-sky-400 transition-colors group"
                    >
                      <span>{isEn ? 'Read Article' : '전문 읽기'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
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
