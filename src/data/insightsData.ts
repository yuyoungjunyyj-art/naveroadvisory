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
  assumptionProblem: {
    en: string;
    ko: string;
  };
  fiveAssumptions: Array<{
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
