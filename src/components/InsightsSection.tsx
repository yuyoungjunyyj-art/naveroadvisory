import React from 'react';
import { Newspaper, BookOpen, ArrowUpRight, Sparkles, Clock, Calendar, Bookmark } from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';

interface InsightsSectionProps {
  theme: Theme;
  lang: Language;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ theme, lang }) => {
  const isEn = lang === 'en';

  const insightArticles = isEn
    ? [
        {
          id: 1,
          category: 'Market Intelligence',
          readTime: '6 min read',
          date: 'Q3 2026 Briefing',
          title: '2026 Korea Hospitality & F&B Expansion Outlook: Seongsu, Hannam, and Beyond',
          summary:
            'A strategic analysis of high-demand lifestyle micro-districts in Seoul, comparing tenant profiles, lease yields, and regulatory compliance considerations for international operators.',
          tag: 'Hospitality FDI',
          status: 'Featured Briefing',
        },
        {
          id: 2,
          category: 'Regulatory & Structuring',
          readTime: '8 min read',
          date: 'Special Report',
          title: 'Navigating Korean Commercial Leasing, Zoning & Master Franchise Governance',
          summary:
            'Essential legal frameworks and cross-border partnership structuring models to mitigate operational friction when entering South Korea’s premium commercial sectors.',
          tag: 'Legal & Deal Flow',
          status: 'Executive Memo',
        },
        {
          id: 3,
          category: 'Consumer Dynamics',
          readTime: '5 min read',
          date: 'Strategic Note',
          title: 'Gen MZ Premium Consumption Patterns & Experiential Retail Strategy in Seoul',
          summary:
            'How global lifestyle brands leverage pop-up architecture, cultural storytelling, and localized digital ecosystems to capture high-velocity Korean consumer demand.',
          tag: 'Consumer Trends',
          status: 'Case Study',
        },
      ]
    : [
        {
          id: 1,
          category: '시장 인텔리전스',
          readTime: '6분 분량',
          date: '2026 3분기 브리핑',
          title: '2026 대한민국 호스피탈리티 & F&B 확장 전망: 성수, 한남, 도산 상권 분석',
          summary:
            '서울 주요 라이프스타일 핵심 상권의 임차인 프로필, 임대 수익률, 글로벌 브랜드의 인허가 및 현지화 전략을 종합 비교한 전략 분석 보고서입니다.',
          tag: '호스피탈리티 FDI',
          status: '추천 브리핑',
        },
        {
          id: 2,
          category: '규제 및 딜 구조화',
          readTime: '8분 분량',
          date: '스페셜 리포트',
          title: '한국 상업용 부동산 임대차, 용도변경 규제 및 마스터 프랜차이즈 거버넌스',
          summary:
            '대한민국 프리미엄 상업 부문 진입 시 운영 리스크를 완화하기 위한 필수 법률 프레임워크와 국경 간 파트너십 구조화 모델을 제시합니다.',
          tag: '법률 및 계약 구조화',
          status: '임원용 메모',
        },
        {
          id: 3,
          category: '소비자 트렌드',
          readTime: '5분 분량',
          date: '전략 노트',
          title: '서울의 MZ 프리미엄 소비 성향과 체험형 리테일 로컬라이징 전략',
          summary:
            '글로벌 라이프스타일 브랜드가 팝업 아키텍처, 문화적 스토리텔링, 디지털 플랫폼을 결합하여 한국 시장에서 성공적으로 안착하는 실행 방안.',
          tag: '소비자 트렌드',
          status: '사례 연구',
        },
      ];

  return (
    <section
      id="insights"
      className={`py-24 transition-colors duration-500 border-t ${
        theme === 'dark'
          ? 'bg-[#060e1a] text-white border-white/10'
          : 'bg-[#f8fafc] text-[#0c1c4f] border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
              <Newspaper className="w-3.5 h-3.5 text-sky-400" />
              <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
                {isEn ? 'STRATEGIC INSIGHTS & PUBLICATIONS' : '전략 인사이트 및 리서치'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif">
              {isEn ? 'Executive Briefings' : '전략 브리핑 및 마켓 리포트'}
            </h2>
            <p
              className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isEn
                ? 'Authoritative analysis and strategic commentary on South Korea’s hospitality, luxury service sectors, and cross-border commercial dynamics.'
                : '대한민국 호스피탈리티, 프리미엄 서비스 부문 및 해외 기업 진출 전략에 대한 독점적 분석과 통찰을 제공합니다.'}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                theme === 'dark'
                  ? 'border-sky-400/30 text-sky-400 hover:bg-sky-400/10'
                  : 'border-[#0c1c4f]/30 text-[#0c1c4f] hover:bg-slate-100'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isEn ? 'Request Custom Market Report' : '맞춤형 리포트 요청'}</span>
            </a>
          </div>
        </div>

        {/* Insight Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightArticles.map((article) => (
            <article
              key={article.id}
              className={`flex flex-col justify-between rounded-3xl p-7 border transition-all duration-300 group hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-[#0a1832]/90 to-[#060e1a] border-white/10 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-xl hover:shadow-slate-200/70'
              }`}
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-sky-400 tracking-wide uppercase">
                    {article.category}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      theme === 'dark' ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {article.status}
                  </span>
                </div>

                {/* Article Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold leading-snug font-serif group-hover:text-sky-400 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                  }`}
                >
                  {article.title}
                </h3>

                {/* Summary */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sky-400 font-semibold group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{isEn ? 'Briefing' : '전문 문의'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
