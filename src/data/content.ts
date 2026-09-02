import { ServiceItem, ProcessStep, CaseStudy, AssessmentQuestion, MetricItem } from '../types';
import marketResearchImg from '../assets/images/regenerated_image_1788279310681.jpg';

export const metricsData: MetricItem[] = [
  {
    value: 'Top-Tier',
    label: {
      en: 'Korea Market Expansion Leadership',
      ko: '대한민국 비즈니스 확장 총괄',
    },
    sublabel: {
      en: 'Hospitality & Premium Services',
      ko: '호스피탈리티 및 프리미엄 서비스',
    },
  },
  {
    value: '100%',
    label: {
      en: 'Korea-Market Dedication',
      ko: '대한민국 시장 특화 자문',
    },
    sublabel: {
      en: 'Hyper-localized strategic execution',
      ko: '현지 규제 및 시장 환경 밀착 실행',
    },
  },
  {
    value: '25+',
    label: {
      en: 'Tier-1 Partner Alliances',
      ko: '국내 최상위 파트너십 구축',
    },
    sublabel: {
      en: 'Landlords, Operators, Investors',
      ko: '부동산 자산운용사, 운영사, 투자사',
    },
  },
  {
    value: '94%',
    label: {
      en: 'Commercial Go-Live Success',
      ko: '상업적 런칭 실행 성공률',
    },
    sublabel: {
      en: 'From concept to operational reality',
      ko: '초기 기획부터 안정적 영업 개시까지',
    },
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'strategic-management',
    number: '01',
    title: {
      en: 'Strategic Management Consulting',
      ko: '전략 경영 및 진출 종합 자문',
    },
    subtitle: {
      en: 'Executive advisory tailored for cross-border scale & operational governance.',
      ko: '크로스보더 확장과 지속 가능한 운영 거버넌스를 위한 경영진 맞춤 자문.',
    },
    description: {
      en: 'We assist founders, CEOs, and expansion heads in defining clear commercial objectives, organizational blueprints, and legal/regulatory structuring for Korean operations.',
      ko: '창업자, CEO 및 글로벌 확장 총괄 임원을 대상으로 명확한 상업적 목표 설정, 조직 구조 설계 및 국내 운영을 위한 법적·규제적 체계를 자문합니다.',
    },
    deliverables: {
      en: [
        'Korea Market Opportunity & Risk Diagnostic',
        'Entity Structuring & JV vs. Direct Operating Models',
        'Commercial Target & Revenue Projections in KRW/USD',
        'C-Suite Strategy Briefings & Advisory Retainers',
      ],
      ko: [
        '한국 시장 기회 및 리스크 정밀 진단',
        '법인 형태(JV, 직영, 마스터 프랜차이즈) 비교 분석',
        '원화/달러 기반 매출 추정 및 상업 모델 수립',
        '경영진 전용 전략 브리핑 및 상시 자문 리테이너',
      ],
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Briefcase',
    badge: {
      en: 'Core Pillar',
      ko: '핵심 역량',
    },
  },
  {
    id: 'market-intelligence',
    number: '02',
    title: {
      en: 'Market Intelligence & Global Entry',
      ko: '시장 인텔리전스 및 진입 로드맵',
    },
    subtitle: {
      en: 'Deep qualitative & quantitative research across Korean consumer dynamics.',
      ko: '한국 소비자 트렌드 및 경쟁 구도에 대한 심층 정량·정성 시장 분석.',
    },
    description: {
      en: 'Unfiltered, boots-on-the-ground intelligence on local demographics, spending habits, competitor pricing benchmarks, and prime real estate micro-markets.',
      ko: '현지 인구 통계, 소비 성향, 경쟁사 가격 벤치마킹 및 강남·성수·명동 등 핵심 상권 분석을 바탕으로 한 가공되지 않은 현장 실물 인텔리전스를 제공합니다.',
    },
    deliverables: {
      en: [
        'Micro-District Footfall & Demographic Analysis (Gangnam, Seongsu, Hannam, Haeundae)',
        'Competitive Positioning Matrix & Price Elasticity Study',
        'Regulatory Compliance & Licensing Roadmap',
        'Korean Consumer Sentiment & Cultural Resonance Audit',
      ],
      ko: [
        '주요 상권(강남, 성수, 한남, 해운대) 유동인구 및 인구통계 분석',
        '경쟁 포지셔닝 매트릭스 및 가격 탄력성 연구',
        '국내 인허가 규제 준수 및 라이선스 취득 로드맵',
        '한국 소비자 감성 및 문화적 수용도 감사',
      ],
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Compass',
    badge: {
      en: 'Research & Insights',
      ko: '연구 및 인사이트',
    },
  },
  {
    id: 'hospitality-structuring',
    number: '03',
    title: {
      en: 'Hospitality & Tourism Project Structuring',
      ko: '호스피탈리티 & 라이프스타일 프로젝트 조성',
    },
    subtitle: {
      en: 'From concept design and feasibility to developer negotiations and operator selection.',
      ko: '공간 컨셉 기획과 사업 타당성 검토부터 디벨로퍼 협상, 위탁운영사 선정까지.',
    },
    description: {
      en: 'Specialized project development for luxury boutique hotels, private member clubs, serviced residences, and high-concept wellness hubs entering South Korea.',
      ko: '한국 시장에 진입하는 럭셔리 부티크 호텔, 프라이빗 멤버십 클럽, 서비스드 레지던스, 하이엔드 웰니스 공간 조성을 전문적으로 지원합니다.',
    },
    deliverables: {
      en: [
        'Hospitality Concept Brief & Spatial Programming',
        'Real Estate Asset Sourcing & Landlord Lease / Master Lease Structuring',
        'Hotel Management Agreement (HMA) & Licensing Negotiations',
        'Capex / Opex Feasibility Models & Financial Sensitivity',
      ],
      ko: [
        '호스피탈리티 공간 컨셉 기획 및 공간 프로그래밍',
        '부동산 자산 발굴 및 마스터리스 / 임대차 구조화',
        '호텔 위탁운영계약(HMA) 및 브랜드 라이선스 협상 지원',
        'Capex / Opex 사업성 수지분석 및 금융 민감도 검토',
      ],
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Hotel',
    badge: {
      en: 'Domain Specialization',
      ko: '특화 전문 영역',
    },
  },
  {
    id: 'business-development',
    number: '04',
    title: {
      en: 'Marketing & Business Development',
      ko: '사업 개발 및 현지 파트너십 실행',
    },
    subtitle: {
      en: 'Hands-on local partner matchmaking, distributor contracts, and GTM launch.',
      ko: '신뢰할 수 있는 로컬 파트너 매칭, 유통 계약 체결 및 온오프라인 런칭 실행.',
    },
    description: {
      en: 'Connecting global brand leadership directly with vetted Korean conglomerates, franchise operators, PR agencies, and distribution allies to execute commercial contracts.',
      ko: '해외 본사 경영진을 국내 주요 유통 대기업, 전문 운영사, 최상위 PR 에이전시 및 투자 파트너와 직접 연결하여 실질적인 계약 체결을 견인합니다.',
    },
    deliverables: {
      en: [
        'Vetted Local Partner Shortlisting & Due Diligence',
        'Bilingual Commercial Negotiation Support & Term Sheet Structuring',
        'Influencer, VIP & Media Relations Launch Campaign Planning',
        'Post-Launch Operations Governance & KPI Tracking',
      ],
      ko: [
        '검증된 국내 파트너 쇼트리스트 발굴 및 실사',
        '한/영 상업 협상 지원 및 텀시트(Term Sheet) 조율',
        'VIP 및 미디어 대상 현지 런칭 캠페인 기획',
        '런칭 후 초기 운영 거버넌스 및 성과(KPI) 모니터링',
      ],
    },
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    iconName: 'TrendingUp',
    badge: {
      en: 'Commercial Execution',
      ko: '상업적 실행',
    },
  },
];

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    title: {
      en: 'Market Research & Scoping',
      ko: '시장 조사 및 타당성 분석',
    },
    subtitle: {
      en: 'Diagnostic & Opportunity Assessment',
      ko: '시장 기회 진단 및 잠재력 평가',
    },
    description: {
      en: 'We conduct comprehensive qualitative market scoping, identifying your addressable customer segments, regulatory hurdles, and immediate competitive landscape in Korea.',
      ko: '국내 목표 고객 세그먼트, 인허가 규제 요건, 경쟁 구도를 종합적으로 분석하여 한국 진출의 타당성과 기회 요인을 정밀 진단합니다.',
    },
    keyActivities: {
      en: [
        'Korea TAM / SAM / SOM calculation',
        'Target customer persona & spending habit mapping',
        'Initial legal & foreign direct investment (FDI) review',
        'Micro-market site visits & benchmarking',
      ],
      ko: [
        '한국 시장 규모(TAM/SAM/SOM) 산정',
        '타깃 고객 페르소나 및 소비 행태 맵핑',
        '외국인직접투자(FDI) 및 기초 법률 검토',
        '주요 후보 상권 현장 답사 및 벤치마킹',
      ],
    },
    duration: {
      en: 'Weeks 1 – 4',
      ko: '1 – 4주차',
    },
    image: marketResearchImg,
  },
  {
    step: '02',
    title: {
      en: 'Entry Strategy & Roadmap',
      ko: '진출 전략 및 실행 로드맵',
    },
    subtitle: {
      en: 'Operational Blueprint & Positioning',
      ko: '운영 청사진 및 포지셔닝 전략',
    },
    description: {
      en: 'Translating market findings into an actionable phased entry roadmap tailored to your brand identity, capital requirements, and local unit economics.',
      ko: '시장 조사 결과를 브랜드 정체성, 투자 예산, 로컬 단위 경제성(Unit Economics)에 최적화된 단계별 실행 로드맵으로 구체화합니다.',
    },
    keyActivities: {
      en: [
        'Localized pricing and positioning matrix',
        'Entity structure selection (Wholly Owned vs. JV vs. License)',
        '3-Year pro-forma financial forecast in KRW',
        'Phased milestone & risk mitigation framework',
      ],
      ko: [
        '현지화된 가격 및 포지셔닝 매트릭스 수립',
        '진출 방식(100% 단독법인, 합작법인, 마스터라이선스) 결정',
        '3개년 원화 기반 추정 손익계산서 작성',
        '마일스톤별 리스크 헷징 및 완화 프레임워크',
      ],
    },
    duration: {
      en: 'Weeks 5 – 8',
      ko: '5 – 8주차',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '03',
    title: {
      en: 'Partner Structuring & Dealmaking',
      ko: '파트너 발굴 및 계약 구조화',
    },
    subtitle: {
      en: 'High-Level Introductions & Negotiations',
      ko: '신뢰 기반 파트너십 및 상업 협상',
    },
    description: {
      en: 'Facilitating strategic introductions to verified Korean operators, landlords, developers, and institutional stakeholders to negotiate win-win commercial terms.',
      ko: '검증된 국내 유력 운영사, 디벨로퍼, 자산운용사 및 주요 유통 채널과의 고위급 미팅을 주선하고 상호 윈-윈 가능한 상업 조건을 조율합니다.',
    },
    keyActivities: {
      en: [
        'Confidential outreach to vetted local decision-makers',
        'Bilingual deal structuring and Term Sheet alignment',
        'Site evaluation and lease agreement advisory',
        'Local vendor & agency selection (Legal, PR, Interior)',
      ],
      ko: [
        '국내 주요 의사결정권자 대상 비공개 접촉 및 제안',
        '한/영 계약서 텀시트(Term Sheet) 조율 및 협상 자문',
        '상업용 부동산 입지 선정 및 임대차 계약 검토',
        '현지 전문 협력사(법무, 세무, PR, 인테리어) 선정',
      ],
    },
    duration: {
      en: 'Weeks 9 – 14',
      ko: '9 – 14주차',
    },
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: '04',
    title: {
      en: 'Go-To-Market & Execution',
      ko: '시장 런칭 및 운영 안정화',
    },
    subtitle: {
      en: 'On-the-Ground Launch Oversight',
      ko: '현장 런칭 총괄 및 초기 운영 관리',
    },
    description: {
      en: 'Hands-on operational coordination ensuring your flagship location or service launch executes flawlessly with maximum market impact in South Korea.',
      ko: '플래그십 오픈 및 서비스 런칭 시 현장 실행을 밀착 조율하여 한국 시장에서 강력한 브랜드 인지도와 초기 모멘텀을 확보합니다.',
    },
    keyActivities: {
      en: [
        'Pre-opening countdown project management',
        'VIP preview & targeted Korean influencer activation',
        'Quality assurance & brand standard compliance',
        'Quarterly business review & expansion scaling plan',
      ],
      ko: [
        '오픈 전 카운트다운 프로젝트 매니지먼트 총괄',
        'VIP 프리뷰 및 국내 최정상 인플루언서/미디어 런칭',
        '글로벌 브랜드 기준 현장 운영 품질 감사(QA)',
        '분기별 운영 성과 리뷰 및 2호점 확장 전략 수립',
      ],
    },
    duration: {
      en: 'Weeks 15+',
      ko: '15주차 이후',
    },
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'kokoro-hospitality',
    title: {
      en: 'Kokoro Hospitality Korea Strategic Expansion',
      ko: '코코로 호스피탈리티(Kokoro) 한국 전략 진출 프로젝트',
    },
    client: 'Kokoro Hospitality Group',
    sector: {
      en: 'Luxury Lifestyle & Hospitality',
      ko: '럭셔리 라이프스타일 & 호스피탈리티',
    },
    location: 'Seoul (Gangnam / Seongsu Corridor)',
    description: {
      en: 'Supporting Kokoro Hospitality’s strategic expansion into South Korea by translating high-growth market opportunity into a focused, locally informed entry roadmap, partner matchmaking, and flagship spatial planning.',
      ko: '코코로 호스피탈리티의 한국 시장 확장을 위해 시장 기회를 정밀 분석하고, 현지화된 진출 로드맵 수립, 국내 최상위 부동산 파트너십 구축 및 플래그십 공간 조성을 총괄 자문하였습니다.',
    },
    impact: {
      en: [
        'Identified and vetted 3 prime development sites in core Seoul districts',
        'Negotiated strategic operating terms with premier Korean institutional partners',
        'Structured phased 3-year market entry roadmap saving 40% in initial overhead',
        'Established full regulatory compliance framework for hospitality operations in KR',
      ],
      ko: [
        '서울 핵심 상권 내 3곳의 최적 후보 부지 발굴 및 사업성 검토',
        '국내 유력 기관 투자자 및 운영 파트너와의 상업적 협상 조율',
        '초기 고정비 40%를 절감하는 3개년 단계별 진출 로드맵 구축',
        '국내 호스피탈리티 및 F&B 영업을 위한 인허가 법률 요건 완비',
      ],
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'boutique-residence',
    title: {
      en: 'International Private Member Club & Serviced Living',
      ko: '글로벌 프라이빗 멤버스 클럽 & 서비스드 레지던스',
    },
    client: 'Pan-Asian Lifestyle Holding',
    sector: {
      en: 'Private Club & Premium Living',
      ko: '멤버십 클럽 & 프리미엄 레지던스',
    },
    location: 'Hannam-dong, Seoul',
    description: {
      en: 'Advising an ultra-luxury private member club on site acquisition, high-net-worth customer profiling, and local governance partnerships in Hannam-dong, Seoul.',
      ko: '서울 한남동 핵심 입지에 최고급 멤버십 클럽 도입을 위해 자산 소싱, 초고자산가(HNW) 고객층 분석 및 현지 거버넌스 파트너십을 자문하였습니다.',
    },
    impact: {
      en: [
        'Secured exclusive 15-year master lease agreement on prime asset',
        'Curated 100+ founding members from Korean business & cultural elite',
        'Achieved 100% regulatory clearance within 5 months of engagement',
      ],
      ko: [
        '한남동 프라임 자산 대상 15년 장기 마스터리스 계약 성사',
        '국내 주요 기업인 및 문화 예술 리더 100인 창립 멤버십 유치',
        '프로젝트 착수 5개월 만에 인허가 및 규제 승인 100% 완료',
      ],
    },
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'dining-concept',
    title: {
      en: 'Michelin-Caliber Dining Group Korea Market Debut',
      ko: '미쉐린 스타급 글로벌 다이닝 그룹 한국 런칭',
    },
    client: 'Epicurean Holdings Global',
    sector: {
      en: 'High-End Gastronomy & F&B',
      ko: '하이엔드 미식 & 프리미엄 F&B',
    },
    location: 'Cheongdam-dong & Dosan Park, Seoul',
    description: {
      en: 'End-to-end commercial development, local supplier chain establishment, and VIP opening launch campaign for a multi-outlet international gastronomic brand in Seoul.',
      ko: '서울 청담 및 도산공원 상권에 글로벌 다이닝 브랜드의 성공적인 안착을 위해 식자재 공급망 구축, 현지 라이선스 계약 및 VIP 오프닝 캠페인을 총괄 지원했습니다.',
    },
    impact: {
      en: [
        'Full reservation booked for first 90 days post-launch',
        'Built direct farm-to-table premium Korean ingredient supply lines',
        'Generated over 1.2M impressions across premier Korean media & social channels',
      ],
      ko: [
        '런칭 후 90일 전 좌석 예약 완료(Full Booking) 달성',
        '국내 프리미엄 산지 직송 식자재 공급망 단독 구축',
        '국내 주요 미디어 및 소셜 채널 누적 노출수 120만 건 돌파',
      ],
    },
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const assessmentQuestionsData: AssessmentQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'What is your current phase of South Korea market expansion?',
      ko: '현재 귀사의 대한민국 시장 진출 단계는 어디에 해당합니까?',
    },
    options: [
      {
        label: {
          en: 'Initial Exploratory / Feasibility Assessment',
          ko: '초기 시장 탐색 및 사업 타당성 검토 단계',
        },
        value: 'exploratory',
        score: 15,
        tip: {
          en: 'Recommended focus: Comprehensive market intelligence & consumer sentiment audit.',
          ko: '추천 집중 영역: 심층 시장 인텔리전스 및 소비자 선호도 조사.',
        },
      },
      {
        label: {
          en: 'Strategic Planning / Selecting Entry Model',
          ko: '전략 수립 및 진출 모델(직영, JV, 라이선스) 검토 중',
        },
        value: 'planning',
        score: 25,
        tip: {
          en: 'Recommended focus: Unit economics modeling & FDI regulatory blueprint.',
          ko: '추천 집중 영역: 단위 경제성 모델링 및 외국인투자 규제 청사진 수립.',
        },
      },
      {
        label: {
          en: 'Active Partner Search / Real Estate Sourcing',
          ko: '로컬 파트너 발굴 및 부지/부동산 입지 확보 단계',
        },
        value: 'partner_search',
        score: 35,
        tip: {
          en: 'Recommended focus: Direct introductions to vetted landlords & tier-1 Korean operators.',
          ko: '추천 집중 영역: 검증된 국내 자산가 및 1군 운영사와의 직접 협상 조율.',
        },
      },
      {
        label: {
          en: 'Pre-Opening / Launch Execution within 6 Months',
          ko: '오픈 준비 및 6개월 이내 시장 런칭 예정',
        },
        value: 'launch_ready',
        score: 45,
        tip: {
          en: 'Recommended focus: On-the-ground GTM coordination & VIP PR activation.',
          ko: '추천 집중 영역: 현장 GTM 총괄 관리 및 VIP/인플루언서 런칭 캠페인.',
        },
      },
    ],
  },
  {
    id: 'q2',
    question: {
      en: 'Which primary industry sector defines your brand?',
      ko: '귀사의 주요 비즈니스 부문은 무엇입니까?',
    },
    options: [
      {
        label: {
          en: 'Hospitality, Luxury Hotels & Resorts',
          ko: '호스피탈리티, 럭셔리 호텔 & 리조트',
        },
        value: 'hospitality',
        score: 25,
        tip: {
          en: 'High potential: South Korea luxury travel spending has surged by 28% year-on-year.',
          ko: '높은 성장성: 한국의 럭셔리 호스피탈리티 지출은 전년 대비 28% 급증하고 있습니다.',
        },
      },
      {
        label: {
          en: 'Premium F&B, Gastronomy & Nightlife',
          ko: '프리미엄 F&B, 파인다이닝 & 라이프스타일 바',
        },
        value: 'fnb',
        score: 20,
        tip: {
          en: 'Critical requirement: Micro-market footfall analysis in Dosan, Hannam, and Seongsu.',
          ko: '필수 요소: 도산공원, 한남, 성수 상권의 미세 유동인구 및 체류시간 분석.',
        },
      },
      {
        label: {
          en: 'Lifestyle, Retail & Member Clubs',
          ko: '라이프스타일, 명품 리테일 & 프라이빗 클럽',
        },
        value: 'retail',
        score: 20,
        tip: {
          en: 'Strategic lever: VIP curated community building and pop-up buzz generation.',
          ko: '전략 레버: VIP 커뮤니티 큐레이션 및 체험형 팝업 버즈 생성.',
        },
      },
      {
        label: {
          en: 'Service Sector, Co-Living or Tech-Enabled Services',
          ko: '서비스 산업, 코리빙 또는 혁신 서비스 솔루션',
        },
        value: 'service',
        score: 15,
        tip: {
          en: 'Key driver: Regulatory zoning compliance and local operating partner synergy.',
          ko: '주요 요인: 건축물 용도 변경 등 규제 준수 및 현지 운영사 시너지 창출.',
        },
      },
    ],
  },
  {
    id: 'q3',
    question: {
      en: 'What is your preferred expansion structure in South Korea?',
      ko: '선호하시는 한국 진출 사업 구조는 무엇입니까?',
    },
    options: [
      {
        label: {
          en: 'Wholly-Owned Subsidiary (Direct Investment)',
          ko: '100% 단독 직접 투자 (한국 지사/법인 설립)',
        },
        value: 'direct',
        score: 30,
        tip: {
          en: 'Maximized brand control: Requires thorough local compliance and HR setup support.',
          ko: '브랜드 통제력 극대화: 완벽한 현지 법률 컴플라이언스 및 초기 인력 구성 지원 필요.',
        },
      },
      {
        label: {
          en: 'Joint Venture (JV) with a Korean Strategic Partner',
          ko: '국내 전략적 파트너와의 합작투자법인(JV) 설립',
        },
        value: 'jv',
        score: 25,
        tip: {
          en: 'Accelerated speed: Demands rigorous partner vetting and governance term sheets.',
          ko: '빠른 시장 안착: 엄격한 파트너 실사 및 명확한 거버넌스 텀시트(Term Sheet) 조율 필수.',
        },
      },
      {
        label: {
          en: 'Master Franchise / Licensing / Management Agreement',
          ko: '마스터 프랜차이즈 / 라이선싱 / 위탁운영(HMA)',
        },
        value: 'license',
        score: 20,
        tip: {
          en: 'Asset-light expansion: Highly dependent on finding tier-1 accredited Korean operators.',
          ko: '자산 경량화 확장: 역량과 자본력을 갖춘 국내 1군 운영사 발굴이 성패의 핵심.',
        },
      },
      {
        label: {
          en: 'Undecided / Open to Strategic Recommendation',
          ko: '미정 / 나베로의 전략적 추천을 통해 결정 희망',
        },
        value: 'undecided',
        score: 15,
        tip: {
          en: 'Optimal path: We model all 3 structures with financial sensitivity analysis.',
          ko: '최적의 경로: 3가지 구조별 재무 시뮬레이션 및 장단점 비교 분석을 제공합니다.',
        },
      },
    ],
  },
  {
    id: 'q4',
    question: {
      en: 'What is your primary strategic challenge or priority in Korea?',
      ko: '한국 시장 진출 시 가장 중점적으로 해결하고자 하는 과제는 무엇입니까?',
    },
    options: [
      {
        label: {
          en: 'Navigating local regulations, permits & legal hurdles',
          ko: '현지 인허가, 법률 규제 및 행정 절차 해결',
        },
        value: 'regulation',
        score: 20,
        tip: {
          en: 'NAVERO provides direct advisory on Korean zoning, food safety, and hospitality laws.',
          ko: '나베로는 국내 건축 용도, 위생 및 관광호스피탈리티 관련 법규를 전문적으로 자문합니다.',
        },
      },
      {
        label: {
          en: 'Securing prime real estate in high-barrier Seoul districts',
          ko: '서울 최상위 핵심 상권의 프라임 입지/부동산 확보',
        },
        value: 'real_estate',
        score: 25,
        tip: {
          en: 'Our direct network with Korean institutional REITs unlocks off-market spaces.',
          ko: '국내 주요 자산운용사 및 빌딩 소유주와의 직통 네트워크를 통해 비공개 매물을 확보합니다.',
        },
      },
      {
        label: {
          en: 'Connecting with trustworthy, verified local partners & suppliers',
          ko: '신뢰할 수 있는 검증된 로컬 파트너 및 공급망 연결',
        },
        value: 'partners',
        score: 25,
        tip: {
          en: 'We conduct background audits and guide senior bilingual negotiations.',
          ko: '철저한 평판 조회 및 양국 비즈니스 문화에 정통한 C-레벨 협상을 총괄합니다.',
        },
      },
      {
        label: {
          en: 'Localizing brand positioning and acquiring core Korean consumers',
          ko: '브랜드 포지셔닝 현지화 및 초기 타깃 고객 확보',
        },
        value: 'localization',
        score: 20,
        tip: {
          en: 'We combine Korean cultural resonance audits with targeted high-impact launch campaigns.',
          ko: '한국 소비자 정서에 맞춘 문화적 감수성 감사와 강력한 오프닝 캠페인을 결합합니다.',
        },
      },
    ],
  },
];
