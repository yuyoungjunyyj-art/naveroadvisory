import React, { useState } from 'react';
import {
  Newspaper,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  FileCheck2,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  Check,
} from 'lucide-react';
import { Theme, Language } from '../types';

interface InsightsSectionProps {
  theme: Theme;
  lang: Language;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ theme, lang }) => {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Return the official Navero Advisory URL with direct insight article anchor
  const getShareUrl = (): string => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      if (host === 'www.naveroadvisory.com') {
        return 'https://www.naveroadvisory.com/#insights';
      }
    }
    return 'https://naveroadvisory.com/#insights';
  };

  const handleShare = async () => {
    const url = getShareUrl();
    let success = false;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        success = true;
      } catch {
        success = false;
      }
    }

    if (!success && typeof document !== 'undefined') {
      // Fallback for sandboxed iframes or browsers without clipboard permissions
      try {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (err) {
        console.error('Failed to copy link via fallback', err);
      }
    }

    setCopied(true);

    // Ensure the article is scrolled smoothly into clear view
    const articleElem = document.getElementById('insight-article') || document.getElementById('insights');
    if (articleElem) {
      articleElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const fiveAssumptions = isEn
    ? [
        {
          num: '01',
          headline: 'A successful regional concept is not automatically locally legible.',
          detail: 'Brand cachet in Bangkok, Singapore or Jakarta does not translate directly into Korean consumer trust without localized framing and sensory resonance.',
        },
        {
          num: '02',
          headline: 'A high-profile Seoul address is not a customer thesis.',
          detail: 'Securing a high-rent flagship in Gangnam or Seongsu without understanding footfall demographics and dwelling occasion risks empty capacity.',
        },
        {
          num: '03',
          headline: 'A Korean partner is not simply a distribution channel.',
          detail: 'Local operators require aligned capital incentives, operational autonomy boundaries, and clear intellectual property safeguards to perform.',
        },
        {
          num: '04',
          headline: 'Digital fluency does not mean every overseas customer journey will convert.',
          detail: 'South Korea’s hyper-integrated super-apps (Kakao, Naver, Baemin) require bespoke UX, localized payment rails, and distinctive review loops.',
        },
        {
          num: '05',
          headline: 'A fast launch is not always an advantage if the learning loop is weak.',
          detail: 'Premature multi-unit commitments before proving unit economics in one micro-district compound operational liabilities rather than speed.',
        },
      ]
    : [
        {
          num: '01',
          headline: '지역에서 성공한 콘셉트가 한국에서 자동으로 현지 소비자에게 직관적으로 전달되는 것은 아닙니다.',
          detail: '싱가포르, 방콕, 자카르타에서의 브랜드 인지도가 로컬라이징된 프레이밍과 감각적 공명 없이는 한국 소비자의 신뢰로 바로 전환되지 않습니다.',
        },
        {
          num: '02',
          headline: '서울 중심부의 화려한 랜드마크 주소가 타깃 고객 가설을 대체할 수는 없습니다.',
          detail: '유동 인구 특성과 실제 소비 오케이션을 검증하지 않은 채 강남이나 성수 등 고임대료 플래그십에 입점하는 것은 공실 및 운영 리스크를 초래합니다.',
        },
        {
          num: '03',
          headline: '한국 현지 파트너는 단순한 유통 채널이 아닙니다.',
          detail: '국내 파트너사는 상호 일치된 자본 인센티브, 명확한 운영 자율권 경계, 철저한 지식재산권(IP) 안전장치가 마련되어야만 역량을 발휘합니다.',
        },
        {
          num: '04',
          headline: '높은 디지털 친화력이 해외에서의 고객 경험 여정이 그대로 전환됨을 의미하지는 않습니다.',
          detail: '카카오, 네이버, 배달의민족 등 한국의 고도화된 슈퍼앱 생태계에 최적화된 결제 인프라와 진성 리뷰 루프가 필수적으로 결합되어야 합니다.',
        },
        {
          num: '05',
          headline: '학습 루프(Learning loop)가 취약하다면 빠른 론칭이 결코 경쟁 우위가 될 수 없습니다.',
          detail: '단일 마이크로 상권에서 단위 경제성을 입증하기 전의 성급한 다점포 확장은 속도가 아닌 누적 운영 부채로 이어집니다.',
        },
      ];

  const decisionQuestions = isEn
    ? [
        'Who is the first repeat customer, rather than the first visitor?',
        'Which district can support the price, format and service rhythm?',
        'What would make Navero recommend no-go or delay?',
      ]
    : [
        '첫 방문객이 아닌, "첫 번째 재방문 고객"은 누구인가?',
        '가격대, 포맷, 서비스 템포를 뒷받침할 수 있는 상권은 어디인가?',
        '나베로(NAVERO)가 진출 보류(No-Go 또는 Delay)를 권고하게 만드는 결정적 요인은 무엇인가?',
      ];

  const sourceLinks = [
    {
      title: isEn ? 'KTO Data Lab' : '한국관광 데이터랩 (KTO Data Lab)',
      url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
      desc: isEn ? 'Korea Tourism Organization Big Data Portal' : '한국관광공사 빅데이터 통합 분석 포털',
    },
    {
      title: isEn ? 'KTO Methodology' : 'KTO 통계 방법론 메타 정보',
      url: 'https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do',
      desc: isEn ? 'Data collection and verification standards' : '관광 통계 메타데이터 및 분석 프레임워크',
    },
    {
      title: isEn ? 'KOSIS (Korean Statistical Information Service)' : '국가통계포털 (KOSIS)',
      url: 'https://kosis.kr/eng/',
      desc: isEn ? 'National commercial & demographic data' : '통계청 국가 통계 정보 서비스',
    },
  ];

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

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {copied && (
              <div
                className={`text-xs px-3 py-1.5 rounded-full border font-mono animate-fadeIn flex items-center gap-1.5 ${
                  theme === 'dark'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}
              >
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="truncate max-w-[240px]">https://naveroadvisory.com/#insights</span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <button
                id="btn-share-insight"
                onClick={handleShare}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                  copied
                    ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400'
                    : theme === 'dark'
                    ? 'border-white/10 text-slate-300 hover:bg-white/5 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
                title="https://naveroadvisory.com/#insights"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isEn ? 'Request Full Briefing' : '전략 자문 요청'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Publication Container */}
        <article
          id="insight-article"
          className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl scroll-mt-24 sm:scroll-mt-28 ${
            theme === 'dark'
              ? 'bg-[#08152b] border-white/10 shadow-black/40'
              : 'bg-white border-slate-200 shadow-slate-200/80'
          }`}
        >
          {/* Article Header Bar */}
          <div
            className={`p-6 sm:p-10 border-b ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-sky-950/40 via-[#0a1c38] to-[#08152b] border-white/10'
                : 'bg-gradient-to-r from-sky-50/70 via-slate-50 to-white border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-500/15 text-sky-400 border border-sky-400/30">
                CROSS-BORDER STRATEGY | SOUTHEAST ASIA ↔ KOREA
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>2026 Strategic Advisory Release</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>5 min read</span>
                </span>
                <span>•</span>
                <button
                  onClick={handleShare}
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-colors ${
                    copied ? 'text-emerald-400' : 'text-sky-400 hover:text-sky-300'
                  }`}
                  title="Copy official article link"
                >
                  <Share2 className="w-3 h-3" />
                  <span>{copied ? (isEn ? 'Copied' : '복사됨') : (isEn ? 'Share' : '공유')}</span>
                </button>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
              }`}
            >
              {isEn ? 'Is South Korea the Next Market?' : '한국은 과연 다음 시장인가? (Is South Korea the Next Market?)'}
            </h1>

            {/* Subtitle / Deck */}
            <p
              className={`text-lg sm:text-2xl font-light leading-snug mb-6 ${
                theme === 'dark' ? 'text-sky-200' : 'text-sky-900'
              }`}
            >
              {isEn
                ? 'Five assumptions Southeast Asian hospitality brands should retire before entry'
                : '동남아시아 호스피탈리티 브랜드가 한국 진출 전 재검토해야 할 5가지 전제'}
            </p>

            {/* Executive Lead Summary Callout */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-200'
                  : 'bg-sky-50/50 border-sky-100 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-500 mb-2 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>{isEn ? 'Executive Thesis' : '핵심 요약 (Executive Thesis)'}</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-sans font-medium">
                {isEn
                  ? 'Regional familiarity can make a Korea entry plan look safer than it is. The more useful question is not whether a concept can travel, but which parts of the operating model will still work once district, customer, and local governance are taken into account.'
                  : '지역적 친숙함은 한국 진출 계획을 실제보다 안전해 보이게 만들 수 있습니다. 더 유의미한 질문은 브랜드 콘셉트가 국경을 넘을 수 있는가가 아니라, 상권, 타깃 고객, 현지 거버넌스를 종합 고려했을 때 운영 모델의 어떤 요소가 실질적으로 작동할 것인가입니다.'}
              </p>
            </div>
          </div>

          {/* Article Full Body */}
          <div className="p-6 sm:p-10 space-y-12">
            {/* Section 1: The assumption problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                  }`}
                >
                  {isEn ? 'The assumption problem' : '전제의 함정 (The assumption problem)'}
                </h3>
              </div>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {isEn
                  ? 'Southeast Asian founders often see Korea through the familiar lenses of density, mobile-first consumers, strong food culture and sophisticated urban spending. Those are useful observations, but they are not a market-entry plan. They can conceal the decisions that determine whether a format earns repeat demand: who the first customer is, which neighbourhood creates the right occasion, what the service routine must feel like, and who controls the local operating levers.'
                  : '동남아시아 창업자들은 종종 인구 밀도, 모바일 중심 소비자, 강력한 미식 문화, 세련된 도시 소비 성향이라는 익숙한 렌즈를 통해 한국을 바라봅니다. 이는 유용한 관찰이지만 시장 진입 계획 그 자체는 아닙니다. 이러한 관찰은 해당 포맷이 재방문 수요를 확보할 수 있는지를 결정하는 핵심 의사결정—즉, 최초의 고객은 누구인가, 어떤 상권이 적합한 소비 기회를 창출하는가, 서비스 루틴은 어떤 경험을 전달해야 하는가, 현지 운영 레버리지를 누가 통제하는가—을 가릴 수 있습니다.'}
              </p>
            </section>

            {/* Section 2: Five assumptions to retire */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                  }`}
                >
                  {isEn ? 'Five assumptions to retire' : '재검토해야 할 5가지 전제 (Five assumptions to retire)'}
                </h3>
              </div>

              {/* 5 Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fiveAssumptions.map((item, idx) => (
                  <div
                    key={item.num}
                    className={`p-5 rounded-2xl border transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border-white/10 hover:border-sky-500/40'
                        : 'bg-slate-50/80 border-slate-200 hover:border-sky-300 hover:bg-white'
                    } ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  >
                    <div className="text-sky-400 font-mono text-xs font-bold mb-2 tracking-wider">
                      ASSUMPTION {item.num}
                    </div>
                    <h4
                      className={`text-sm sm:text-base font-bold leading-snug mb-2.5 ${
                        theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                      }`}
                    >
                      {item.headline}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`p-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center gap-3 ${
                  theme === 'dark'
                    ? 'bg-sky-500/10 border-sky-400/20 text-sky-200'
                    : 'bg-sky-50 border-sky-200 text-sky-900'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>
                  {isEn
                    ? 'Each assumption should be tested against a defined customer cohort, one micro-market and one operating model.'
                    : '각 전제는 명확히 정의된 고객 집단, 단일 마이크로 상권, 구체적 운영 모델에 대입하여 엄격히 검증되어야 합니다.'}
                </span>
              </div>
            </section>

            {/* Section 3: Navero advisory verdict */}
            <section
              className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#0c234b] to-[#07152f] border-sky-400/30'
                  : 'bg-gradient-to-br from-slate-900 to-[#0c1c4f] text-white border-slate-900'
              }`}
            >
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-sky-400/20 text-sky-300 border border-sky-400/30">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Navero Advisory Verdict' : '나베로 자문 평결 (Navero Advisory Verdict)'}</span>
                </div>
                <p className="text-base sm:text-xl font-serif leading-relaxed text-white font-medium">
                  "{isEn
                    ? 'Build the Korea business case from the customer backwards. Before discussing a master agreement or a first site, set a non-negotiable brand promise, map the local moments that need adaptation and decide which rights must remain with the brand. That work does not slow a rollout. It protects the capital and reputation behind it.'
                    : '한국 진출 비즈니스 케이스는 철저히 고객으로부터 역산하여 수립해야 합니다. 마스터 프랜차이즈 계약이나 첫 매장 입지를 논의하기 전에, 타협 불가능한 브랜드 핵심 가치를 설정하고, 현지화가 필요한 세부 경험을 맵핑하며, 브랜드가 직접 보유해야 할 권리를 명확히 규정해야 합니다. 이러한 사전 정밀화 작업은 론칭 속도를 늦추는 것이 아니라, 투입된 자본과 브랜드의 명성을 보호하는 가장 확실한 장치입니다.'}"
                </p>
                <div className="pt-2 text-xs text-sky-300 font-mono tracking-wider">
                  — NAVERO ADVISORY PRACTICE GROUP · SEOUL
                </div>
              </div>
            </section>

            {/* Section 4: Decision questions */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-400" />
                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-[#0c1c4f]'
                  }`}
                >
                  {isEn ? 'Decision questions' : '핵심 의사결정 질문 (Decision questions)'}
                </h3>
              </div>
              <div className="space-y-3">
                {decisionQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3.5 p-4 rounded-xl border ${
                      theme === 'dark'
                        ? 'bg-white/[0.02] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/15 text-sky-400 font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <p
                      className={`text-sm sm:text-base font-semibold leading-relaxed ${
                        theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Sources and methodology */}
            <section
              className={`pt-8 border-t space-y-4 text-xs ${
                theme === 'dark' ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}
            >
              <h4
                className={`font-mono uppercase tracking-widest text-[11px] font-bold ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {isEn ? 'Sources and Methodology' : '출처 및 데이터 방법론 (Sources & Methodology)'}
              </h4>

              {/* Source External Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sourceLinks.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between group ${
                      theme === 'dark'
                        ? 'bg-white/[0.02] border-white/10 hover:border-sky-400/40 hover:bg-white/[0.05]'
                        : 'bg-slate-50 border-slate-200 hover:border-sky-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-sky-500 font-semibold mb-1">
                        <span>{source.title}</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] leading-normal opacity-80">{source.desc}</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-2 truncate">
                      {source.url.replace('https://', '')}
                    </span>
                  </a>
                ))}
              </div>

              {/* Analytical Disclaimer */}
              <p className="leading-relaxed text-[11px] pt-2">
                {isEn
                  ? 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.'
                  : '출처 링크는 분석의 근거 자료를 식별하며 게시일 기준으로 재확인되어야 합니다. 나베로(NAVERO)의 견해는 분석적 해석이며 제3자의 사실 진술이 아닙니다. 본 아티클은 시장 해설이며 법률, 의료, 규제 또는 투자 자문에 해당하지 않습니다.'}
              </p>
            </section>
          </div>

          {/* Article Footer Call to Action */}
          <div
            className={`px-6 py-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t ${
              theme === 'dark'
                ? 'bg-white/[0.02] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="text-xs">
              <span className="font-semibold text-slate-400">
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
                title="https://naveroadvisory.com/#insights"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0c1c4f] dark:bg-sky-500 hover:opacity-90 transition-opacity"
              >
                <span>{isEn ? 'Consult with Advisory Team' : '자문팀과 상담하기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InsightsSection;
