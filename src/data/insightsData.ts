export interface InsightArticle {
  id: string;
  slug: string;
  category: {
    en: string;
    ko: string;
  };
  corridor: {
    en: string;
    ko: string;
  };
  publishedAt: string; // ISO date format (YYYY-MM-DD) for automatic date calculation & views tracking
  date: {
    en: string;
    ko: string;
  };
  readTime: {
    en: string;
    ko: string;
  };
  title: {
    en: string;
    ko: string;
  };
  subtitle: {
    en: string;
    ko: string;
  };
  teaserSummary: {
    en: string;
    ko: string;
  };
  previewTakeaways: {
    en: string[];
    ko: string[];
  };
  executiveThesis: {
    en: string;
    ko: string;
  };
  assumptionProblem?: {
    en: string;
    ko: string;
  };
  fiveAssumptions?: Array<{
    num: string;
    headline: {
      en: string;
      ko: string;
    };
    detail: {
      en: string;
      ko: string;
    };
  }>;
  coreSections?: Array<{
    id: string;
    title: {
      en: string;
      ko: string;
    };
    content: {
      en: string;
      ko: string;
    };
  }>;
  verdictQuote: {
    en: string;
    ko: string;
  };
  verdictDetail: {
    en: string;
    ko: string;
  };
  decisionQuestions: {
    en: string[];
    ko: string[];
  };
  linkedInDistribution?: {
    brandPage: {
      timing: { en: string; ko: string };
      body: { en: string; ko: string };
      hashtags: string[];
    };
    principalConsultant: {
      timing: { en: string; ko: string };
      body: { en: string; ko: string };
    };
    executiveQuestion: {
      timing: { en: string; ko: string };
      body: { en: string; ko: string };
    };
  };
  sources: Array<{
    title: {
      en: string;
      ko: string;
    };
    url: string;
    desc: {
      en: string;
      ko: string;
    };
  }>;
  disclaimer: {
    en: string;
    ko: string;
  };
}

export const insightsArticles: InsightArticle[] = [
  {
    id: 'wellness-hospitality-beyond-seoul',
    slug: 'wellness-hospitality-beyond-seoul',
    category: {
      en: 'WELLNESS | REGIONAL TOURISM',
      ko: '웰니스 | 지역 관광',
    },
    corridor: {
      en: 'SITE SELECTION',
      ko: '입지 선정 전략',
    },
    publishedAt: '2026-09-09',
    date: {
      en: 'Sep 9, 2026',
      ko: '2026년 9월 9일',
    },
    readTime: {
      en: '4 min read',
      ko: '4분 소요',
    },
    title: {
      en: 'Wellness Hospitality Beyond Seoul',
      ko: '서울을 넘어선 웰니스 호스피탈리티 (Wellness Hospitality Beyond Seoul)',
    },
    subtitle: {
      en: 'Where a regional Korea proposition can work - and what must be true first',
      ko: '지방 거점 웰니스 모델이 성립할 수 있는 입지 조건과 충족되어야 할 필수 전제',
    },
    teaserSummary: {
      en: 'A regional wellness asset needs more than scenery. The proposition must earn the return journey through access, length of stay, repeat demand, credible programming and an economics that survives seasonality.',
      ko: '지방 웰니스 자산에는 수려한 자연경관 그 이상이 필요합니다. 접근성, 체류 기간, 재방문 수요, 신뢰할 수 있는 로컬 프로그램, 그리고 계절적 비수기를 극복하는 경제성을 통해 다시 찾는 여정(return journey)을 증명해야 합니다.',
    },
    previewTakeaways: {
      en: [
        'Korea’s regional landscape makes wellness concepts attractive, but scenery is not an operating model.',
        'Weekend spikes and viral social media moments cannot replace sustainable weekday and off-season demand.',
        'Credible local programming and operating partner capability determine viability beyond the launch phase.',
      ],
      ko: [
        '한국의 수려한 자연경관이 웰니스 콘셉트를 매력적으로 만들지만, 풍경 자체가 운영 모델이 될 수는 없습니다.',
        '단순한 주말 쏠림이나 SNS 바이럴 모멘텀은 주중과 비수기를 지탱할 안정적 수요 기반이 되지 못합니다.',
        '초기 오픈 기간을 넘어 비즈니스를 지속시키는 핵심은 신뢰할 수 있는 로컬 프로그램과 운영 파트너 역량입니다.',
      ],
    },
    executiveThesis: {
      en: 'A regional wellness asset needs more than scenery. The proposition must earn the return journey through access, length of stay, repeat demand, credible programming and an economics that survives seasonality.',
      ko: '지방 웰니스 자산에는 수려한 자연경관 그 이상이 필요합니다. 접근성, 체류 기간, 재방문 수요, 신뢰할 수 있는 프로그램, 그리고 비수기를 버텨낼 수 있는 단위 경제성을 통해 다시 찾는 여정을 성립시켜야 합니다.',
    },
    coreSections: [
      {
        id: 'regional-temptation',
        title: {
          en: 'The regional temptation',
          ko: '지방 시장의 유혹과 현실 (The regional temptation)',
        },
        content: {
          en: 'Korea’s regional landscape can make a wellness-hospitality story immediately attractive. Yet a destination is not an operating model. The market may be constrained by access, travel time, seasonality, staffing, domestic travel patterns, local partner capability and the narrowness of the addressable customer cohort. These variables need more attention than a visual concept deck.',
          ko: '한국의 수려한 지방 자연경관은 웰니스 호스피탈리티 서사를 즉각적으로 매력적으로 보이게 만듭니다. 그러나 매력적인 여행지(destination)라는 사실 그 자체가 지속 가능한 운영 모델(operating model)을 의미하지는 않습니다. 실제 시장은 접근성, 이동 소요 시간, 계절성, 인력 채용, 국내 여행 패턴, 현지 파트너의 실행 역량, 그리고 유효 타깃 고객군의 협소함에 의해 강하게 제약받을 수 있습니다. 이러한 핵심 변수들은 화려한 시각적 콘셉트 기획서보다 훨씬 더 깊은 주의를 기울여야 할 대상입니다.',
        },
      },
      {
        id: 'return-journey-test',
        title: {
          en: 'The return-journey test',
          ko: '다시 찾는 여정의 검증 (The return-journey test)',
        },
        content: {
          en: 'Ask whether a guest can get there easily, stay long enough, pay for the experience and return. Then ask whether local programming is credible enough to sustain the proposition beyond the launch period. KTO regional visitation and spending tools, transport assessment and primary customer research should be read together. A single weekend spike or social-media moment is not a reliable demand base.',
          ko: '고객이 수월하게 도달할 수 있는지, 충분한 기간 머무르는지, 그 경험에 대해 기꺼이 적정 가격을 지불하고 다시 돌아올 것인지를 먼저 물어야 합니다. 그다음 현지 프로그램이 초기 론칭 홍보 기간을 지나서도 사업을 지탱할 만큼 신뢰할 수 있는지 검토해야 합니다. 한국관광공사(KTO)의 지역별 방문·소비 분석 툴, 교통망 평가, 그리고 1차 타깃 고객 조사를 반드시 종합적으로 분석해야 합니다. 단 한 번의 주말 인파 급증이나 SNS상의 바이럴 모멘텀은 결코 신뢰할 수 있는 수요 기반이 될 수 없습니다.',
        },
      },
    ],
    verdictQuote: {
      en: 'Begin with a modest, testable proposition. If the first customer, the stay pattern, the operating partner and the off-season plan are not clear, the opportunity remains a destination story rather than a viable regional business.',
      ko: '검증 가능한 규모의 절제된 가설부터 시작하십시오. 최초의 고객, 체류 패턴, 운영 파트너, 그리고 비수기 계획이 명확하지 않다면, 그것은 사업성 있는 지역 비즈니스가 아니라 단지 하나의 목적지 서사에 머무를 뿐입니다.',
    },
    verdictDetail: {
      en: 'Define the first customer, the stay pattern, the operating partner and the off-season plan. If those elements are not clear, the opportunity remains a destination story rather than a viable regional business.',
      ko: '첫 번째 고객 프로필, 체류 패턴, 현지 운영 파트너, 그리고 비수기 방어 계획을 정밀하게 규정하십시오. 이 요소들이 명확하지 않다면, 해당 기회는 실질적인 지역 비즈니스가 아니라 단순한 여행지 이야기에 불과합니다.',
    },
    decisionQuestions: {
      en: [
        'Can the guest reach the asset without friction?',
        'What supports off-season and weekday demand?',
        'Which local partner makes the experience credible?',
      ],
      ko: [
        '고객이 이동 과정의 마찰 없이 해당 자산에 수월하게 도달할 수 있는가?',
        '비수기와 주중의 수요를 실질적으로 지탱해 줄 요소는 무엇인가?',
        '어떤 현지 파트너가 이 웰니스 경험의 진정성과 신뢰성을 담보하는가?',
      ],
    },
    linkedInDistribution: {
      brandPage: {
        timing: {
          en: 'Brand page - Monday',
          ko: '브랜드 공식 채널 - 월요일',
        },
        body: {
          en: 'The question is not whether wellness hospitality can exist beyond Seoul. It is where the operating conditions are strong enough for it to work. Access, seasonality, regional demand, length of stay, local partnerships and price tolerance matter more than a beautiful landscape alone. Navero sets out the location test.',
          ko: '질문은 서울 이외의 지역에서 웰니스 호스피탈리티가 존재할 수 있는가가 아닙니다. 성공을 뒷받침할 운영 조건이 충분히 강력한 입지가 과연 어디인가입니다. 아름다운 풍경 그 자체보다 접근성, 계절성, 지역 내 유효 수요, 체류 기간, 로컬 파트너십, 그리고 가격 수용성이 훨씬 더 결정적입니다. 나베로가 입지 검증 테스트를 제시합니다.',
        },
        hashtags: ['#WellnessHospitality', '#KoreaMarket', '#TourismStrategy'],
      },
      principalConsultant: {
        timing: {
          en: 'Principal Consultant - Wednesday',
          ko: '수석 컨설턴트 인사이트 - 수요일',
        },
        body: {
          en: 'For a regional wellness proposition, I do not begin with the asset. I begin with the return journey. Can the guest reach it easily, stay long enough, come back, pay for the experience and access credible local programming? If the answer is unclear, the concept is still a destination story - not yet an operating model.',
          ko: '지방 거점 웰니스 제안을 검토할 때, 저는 자산(건물/외관)에서 시작하지 않습니다. 저는 ‘다시 찾는 여정(return journey)’에서 시작합니다. 고객이 쉽게 도달하고, 충분히 머물며, 다시 방문하고, 그 가치에 지불하며, 신뢰할 수 있는 로컬 프로그램을 경험할 수 있는가? 이 질문에 명확한 답이 없다면, 그 기획은 아직 목적지 서사일 뿐 운영 모델이 아닙니다.',
        },
      },
      executiveQuestion: {
        timing: {
          en: 'Executive question - Friday',
          ko: '경영진 핵심 질문 - 금요일',
        },
        body: {
          en: 'When assessing a Korean regional wellness location, what would you rank first: access, domestic repeat demand, international appeal, seasonality or partner ecosystem?',
          ko: '한국 지방의 웰니스 입지를 평가할 때, 귀하는 무엇을 최우선으로 꼽으시겠습니까: 접근성, 국내 재방문 수요, 글로벌 매력도, 계절성, 아니면 파트너 생태계입니까?',
        },
      },
    },
    sources: [
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩 (KTO Data Lab)',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization Regional Visitation & Spending Big Data',
          ko: '한국관광공사 지역별 방문자 및 관광 소비 빅데이터 포털',
        },
      },
      {
        title: {
          en: 'KTO Methodology',
          ko: 'KTO 통계 방법론 메타 정보',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do',
        desc: {
          en: 'Regional tourism verification standards and sampling frameworks',
          ko: '지역 관광 데이터 수집 표준 및 분석 방법론',
        },
      },
      {
        title: {
          en: 'KOSIS (Korean Statistical Information Service)',
          ko: '국가통계포털 (KOSIS)',
        },
        url: 'https://kosis.kr/eng/',
        desc: {
          en: 'National demographic, transportation, and regional economic accounts',
          ko: '통계청 국가 통계 정보 포털 (인구, 교통, 지역 경제 계정)',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.',
      ko: '본 자료의 출처 링크는 근거 데이터를 명시하며 발행일 기준 재확인이 필요합니다. 나베로(Navero)의 견해는 분석적 해석이며 제3자의 사실 진술이 아닙니다. 본 아티클은 시장 분석 논평이며 법률, 의료, 규제 또는 투자 자문이 아닙니다.',
    },
  },
  {
    id: 'korea-entry-assumptions',
    slug: 'is-south-korea-the-next-market',
    category: {
      en: 'CROSS-BORDER STRATEGY',
      ko: '크로스보더 전략',
    },
    corridor: {
      en: 'SOUTHEAST ASIA ↔ KOREA',
      ko: '동남아시아 ↔ 한국',
    },
    publishedAt: '2026-09-07',
    date: {
      en: 'Sep 7, 2026',
      ko: '2026년 9월 7일',
    },
    readTime: {
      en: '5 min read',
      ko: '5분 소요',
    },
    title: {
      en: 'Is South Korea the Next Market?',
      ko: '한국은 과연 다음 시장인가? (Is South Korea the Next Market?)',
    },
    subtitle: {
      en: 'Five assumptions Southeast Asian hospitality brands should retire before entry',
      ko: '동남아시아 호스피탈리티 브랜드가 한국 진출 전 재검토해야 할 5가지 전제',
    },
    teaserSummary: {
      en: 'Regional familiarity can make a Korea entry plan look safer than it is. The more useful question is not whether a concept can travel, but which parts of the operating model will still work once district, customer, and local governance are taken into account.',
      ko: '지역적 친숙함은 한국 진출 계획을 실제보다 안전해 보이게 만들 수 있습니다. 더 유의미한 질문은 브랜드 콘셉트가 국경을 넘을 수 있는가가 아니라, 상권, 타깃 고객, 현지 거버넌스를 종합 고려했을 때 운영 모델의 어떤 요소가 실질적으로 작동할 것인가입니다.',
    },
    previewTakeaways: {
      en: [
        'Regional brand prestige in Bangkok or Singapore does not convert directly into Korean consumer trust without localized framing.',
        'A high-profile Seoul flagship address in Gangnam or Seongsu cannot substitute for a validated customer footfall thesis.',
        'Local Korean operators require aligned capital incentives, clear autonomy boundaries, and strong IP safeguards to succeed.',
      ],
      ko: [
        '동남아 주요 도시에서의 브랜드 인지도가 로컬라이징된 프레이밍 없이는 한국 소비자의 신뢰로 직결되지 않습니다.',
        '강남이나 성수 등 서울 중심부의 화려한 플래그십 주소가 타깃 고객의 방문 및 재방문 가설을 대신할 수 없습니다.',
        '한국 현지 파트너사는 상호 일치된 자본 인센티브와 운영 자율권, 지식재산권(IP) 보호가 필수적입니다.',
      ],
    },
    executiveThesis: {
      en: 'Regional familiarity can make a Korea entry plan look safer than it is. The more useful question is not whether a concept can travel, but which parts of the operating model will still work once district, customer, and local governance are taken into account.',
      ko: '지역적 친숙함은 한국 진출 계획을 실제보다 안전해 보이게 만들 수 있습니다. 더 유의미한 질문은 브랜드 콘셉트가 국경을 넘을 수 있는가가 아니라, 상권, 타깃 고객, 현지 거버넌스를 종합 고려했을 때 운영 모델의 어떤 요소가 실질적으로 작동할 것인가입니다.',
    },
    assumptionProblem: {
      en: 'Southeast Asian founders often see Korea through the familiar lenses of density, mobile-first consumers, strong food culture and sophisticated urban spending. Those are useful observations, but they are not a market-entry plan. They can conceal the decisions that determine whether a format earns repeat demand: who the first customer is, which neighbourhood creates the right occasion, what the service routine must feel like, and who controls the local operating levers.',
      ko: '동남아시아 창업자들은 종종 인구 밀도, 모바일 중심 소비자, 강력한 미식 문화, 세련된 도시 소비 성향이라는 익숙한 렌즈를 통해 한국을 바라봅니다. 이는 유용한 관찰이지만 시장 진입 계획 그 자체는 아닙니다. 이러한 관찰은 해당 포맷이 재방문 수요를 확보할 수 있는지를 결정하는 핵심 의사결정—즉, 최초의 고객은 누구인가, 어떤 상권이 적합한 소비 기회를 창출하는가, 서비스 루틴은 어떤 경험을 전달해야 하는가, 현지 운영 레버리지를 누가 통제하는가—을 가릴 수 있습니다.',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'A successful regional concept is not automatically locally legible.',
          ko: '지역에서 성공한 콘셉트가 한국에서 자동으로 현지 소비자에게 직관적으로 전달되는 것은 아닙니다.',
        },
        detail: {
          en: 'Brand cachet in Bangkok, Singapore or Jakarta does not translate directly into Korean consumer trust without localized framing and sensory resonance.',
          ko: '싱가포르, 방콕, 자카르타에서의 브랜드 인지도가 로컬라이징된 프레이밍과 감각적 공명 없이는 한국 소비자의 신뢰로 바로 전환되지 않습니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'A high-profile Seoul address is not a customer thesis.',
          ko: '서울 중심부의 화려한 랜드마크 주소가 타깃 고객 가설을 대체할 수는 없습니다.',
        },
        detail: {
          en: 'Securing a high-rent flagship in Gangnam or Seongsu without understanding footfall demographics and dwelling occasion risks empty capacity.',
          ko: '유동 인구 특성과 실제 소비 오케이션을 검증하지 않은 채 강남이나 성수 등 고임대료 플래그십에 입점하는 것은 공실 및 운영 리스크를 초래합니다.',
        },
      },
      {
        num: '03',
        headline: {
          en: 'A Korean partner is not simply a distribution channel.',
          ko: '한국 현지 파트너는 단순한 유통 채널이 아닙니다.',
        },
        detail: {
          en: 'Local operators require aligned capital incentives, operational autonomy boundaries, and clear intellectual property safeguards to perform.',
          ko: '국내 파트너사는 상호 일치된 자본 인센티브, 명확한 운영 자율권 경계, 철저한 지식재산권(IP) 안전장치가 마련되어야만 역량을 발휘합니다.',
        },
      },
      {
        num: '04',
        headline: {
          en: 'Digital fluency does not mean every overseas customer journey will convert.',
          ko: '높은 디지털 친화력이 해외에서의 고객 경험 여정이 그대로 전환됨을 의미하지는 않습니다.',
        },
        detail: {
          en: 'South Korea’s hyper-integrated super-apps (Kakao, Naver, Baemin) require bespoke UX, localized payment rails, and distinctive review loops.',
          ko: '카카오, 네이버, 배달의민족 등 한국의 고도화된 슈퍼앱 생태계에 최적화된 결제 인프라와 진성 리뷰 루프가 필수적으로 결합되어야 합니다.',
        },
      },
      {
        num: '05',
        headline: {
          en: 'A fast launch is not always an advantage if the learning loop is weak.',
          ko: '학습 루프(Learning loop)가 취약하다면 빠른 론칭이 결코 경쟁 우위가 될 수 없습니다.',
        },
        detail: {
          en: 'Premature multi-unit commitments before proving unit economics in one micro-district compound operational liabilities rather than speed.',
          ko: '단일 마이크로 상권에서 단위 경제성을 입증하기 전의 성급한 다점포 확장은 속도가 아닌 누적 운영 부채로 이어집니다.',
        },
      },
    ],
    verdictQuote: {
      en: 'Korea rewards precision over momentum. Entering without granular district calibration is not expansion; it is subsidised experimentation.',
      ko: '한국 시장은 단순한 기세보다 정밀한 실행력을 보상합니다. 상권별 정밀 검증 없는 진출은 확장이 아니라 비용이 드는 실험일 뿐입니다.',
    },
    verdictDetail: {
      en: 'Success in Seoul requires separating what is non-negotiable in your brand identity from what must be ruthlessly adapted for the Korean daily routine. The prize for brands that get this right is not just commercial viability, but long-term consumer loyalty in Asia’s most influential trend crucible.',
      ko: '서울에서의 성공은 브랜드의 타협할 수 없는 핵심 정체성과, 한국인의 일상 루틴에 맞춰 과감하게 현지화해야 할 요소를 명확히 분리하는 데 있습니다. 이를 달성한 브랜드는 단순한 상업적 생존을 넘어, 아시아에서 가장 역동적인 트렌드 발신지에서 확고한 고객 충성도를 확보하게 됩니다.',
    },
    decisionQuestions: {
      en: [
        'Who is the first repeat customer, rather than the first visitor?',
        'Which district can support the price, format and service rhythm?',
        'What would make Navero recommend no-go or delay?',
      ],
      ko: [
        '첫 방문객이 아닌, "첫 번째 재방문 고객"은 누구인가?',
        '가격대, 포맷, 서비스 템포를 뒷받침할 수 있는 상권은 어디인가?',
        '나베로(NAVERO)가 진출 보류(No-Go 또는 Delay)를 권고하게 만드는 결정적 요인은 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩 (KTO Data Lab)',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization Big Data Portal',
          ko: '한국관광공사 빅데이터 통합 분석 포털',
        },
      },
      {
        title: {
          en: 'KTO Methodology',
          ko: 'KTO 통계 방법론 메타 정보',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do',
        desc: {
          en: 'Data collection and verification standards',
          ko: '관광 통계 메타데이터 및 분석 프레임워크',
        },
      },
      {
        title: {
          en: 'KOSIS (Korean Statistical Information Service)',
          ko: '국가통계포털 (KOSIS)',
        },
        url: 'https://kosis.kr/eng/',
        desc: {
          en: 'National commercial & demographic data',
          ko: '통계청 국가 통계 정보 서비스',
        },
      },
    ],
    disclaimer: {
      en: 'Disclaimer: This publication is provided by Navero Strategic Advisory for strategic discussion purposes only and does not constitute binding legal, financial, or tax advice. Market dynamics are subject to real-time shifts.',
      ko: '안내: 본 리포트는 전략적 의사결정 참고를 위해 나베로(Navero Strategic Advisory)에서 발행한 독립 연구 자료이며, 법률·금융·세무에 관한 법적 구속력을 갖는 자문이 아닙니다.',
    },
  },
];
