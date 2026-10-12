export interface AdaptationCharterItem {
  dimension: {
    en: string;
    ko: string;
  };
  hqControl: {
    en: string;
    ko: string;
  };
  localAutonomy: {
    en: string;
    ko: string;
  };
}

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
  problemSectionTitle?: {
    en: string;
    ko: string;
  };
  assumptionProblem: {
    en: string;
    ko: string;
  };
  coreSectionTitle?: {
    en: string;
    ko: string;
  };
  coreSectionIntro?: {
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
  adaptationCharterTitle?: {
    en: string;
    ko: string;
  };
  adaptationCharterIntro?: {
    en: string;
    ko: string;
  };
  adaptationCharter?: AdaptationCharterItem[];
  modelComparison?: Array<{
    model: {
      en: string;
      ko: string;
    };
    riskAllocation: {
      en: string;
      ko: string;
    };
    decisionRights: {
      en: string;
      ko: string;
    };
    learningSpeed: {
      en: string;
      ko: string;
    };
    koreaSuitability: {
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
  decisionQuestionsTitle?: {
    en: string;
    ko: string;
  };
  decisionQuestionsIntro?: {
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
    id: 'koreas-wellness-opportunity-beyond-beauty-led-demand',
    slug: 'koreas-wellness-opportunity-beyond-beauty-led-demand',
    category: {
      en: 'WELLNESS | HOSPITALITY | MARKET DEFINITION',
      ko: '웰니스 | 호스피탈리티 | 시장 정의',
    },
    corridor: {
      en: 'GLOBAL ↔ SOUTH KOREA',
      ko: '글로벌 ↔ 한국',
    },
    publishedAt: '2026-10-12',
    date: {
      en: 'Oct 12, 2026',
      ko: '2026년 10월 12일',
    },
    readTime: {
      en: '5 min read',
      ko: '5분 소요',
    },
    title: {
      en: "Korea's Wellness Opportunity Is Moving Beyond Beauty-Led Demand",
      ko: '한국의 웰니스 시장 기회: 뷰티 주도형 수요를 넘어서다',
    },
    subtitle: {
      en: 'Why a broad wellness label is not yet a market-entry strategy',
      ko: '포괄적인 웰니스 라벨이 시장 진출 전략이 될 수 없는 이유',
    },
    teaserSummary: {
      en: '“Wellness” can describe very different businesses. A defensible Korea strategy defines the customer problem, operating boundary and repeat-demand model before it claims a market opportunity.',
      ko: '‘웰니스’라는 단어는 본질적으로 완전히 다른 사업들을 포괄합니다. 방어 가능한 한국 시장 진출 전략을 수립하려면, 시장 기회를 주장하기 전에 고객의 문제, 운영의 경계, 그리고 반복 수요 모델을 명확히 정의해야 합니다.',
    },
    previewTakeaways: {
      en: [
        'Beauty, medical services, recovery, sleep, and destination retreats are grouped under "wellness," but they are not interchangeable in motivation, frequency, or regulatory boundaries.',
        'Interest in K-beauty or medical tourism does not automatically validate a hotel spa, recovery club, or sleep concept; demand for one service does not prove repeat economics for another.',
        'Operators must define the customer problem, the operating boundary with regulated clinical care, and a commercial route to repeat willingness-to-pay before committing capital.',
      ],
      ko: [
        '뷰티, 의료 관광, 리커버리, 수면, 데스티네이션 리트리트는 모두 "웰니스"로 묶이지만 소비 동기, 방문 빈도, 규제 경계 측면에서 결코 상호 호환될 수 없습니다.',
        'K-뷰티나 의료 관광의 호조가 호텔 스파, 리커버리 클럽, 수면 케어 콘셉트의 사업성을 입증하지 않으며, 특정 서비스 수요가 다른 분야의 재방문 경제성으로 직결되지 않습니다.',
        '자본을 투입하기 전 고객의 구체적 결핍, 의료 규제와의 운영 경계선, 그리고 반복 지불 의향을 입증할 상업 모델을 먼저 정립해야 합니다.',
      ],
    },
    executiveThesis: {
      en: '“Wellness” can describe very different businesses. A defensible Korea strategy defines the customer problem, operating boundary and repeat-demand model before it claims a market opportunity.',
      ko: '‘웰니스’라는 단어는 본질적으로 완전히 다른 사업들을 포괄합니다. 방어 가능한 한국 시장 진출 전략을 수립하려면, 시장 기회를 주장하기 전에 고객의 문제, 운영의 경계, 그리고 반복 수요 모델을 명확히 정의해야 합니다.',
    },
    problemSectionTitle: {
      en: 'The category mistake',
      ko: '범주의 오류: 뷰티·의료 수요와 웰니스의 혼동',
    },
    assumptionProblem: {
      en: 'Beauty, aesthetics, medical services, recovery, fitness, sleep, functional food and destination stays are often grouped under “wellness.” They are not interchangeable.\n\nThey differ in customer motivation, willingness to pay, frequency of use, service delivery, capital requirements and regulatory boundaries. Treating them as one market creates an attractive presentation—but not an executable operating plan.\n\nThis matters particularly for hospitality brands. Interest in Korean beauty, medical tourism or premium lifestyle does not automatically validate a hotel spa, recovery club, sleep concept or destination retreat. Demand for one service does not prove repeat economics for another.\n\nThe real question is not whether Korea has a wellness opportunity. It is whether a specific offer can earn trust, create repeat behavior and operate credibly within local conditions.',
      ko: '뷰티, 에스테틱, 의료 서비스, 리커버리, 피트니스, 수면, 기능성 식품, 그리고 데스티네이션 스테이는 흔히 ‘웰니스’라는 하나의 포괄적 범주로 묶입니다. 그러나 이들은 결코 상호 대체 가능한 사업이 아닙니다.\n\n고객의 소비 동기, 지불 용의(WTP), 이용 빈도, 서비스 전달 방식, 자본 투입 규모, 그리고 규제적 경계선이 근본적으로 다릅니다. 이들을 단일 시장으로 취급하는 것은 투자 제안서상으로는 매력적일지 모르나, 실행 가능한 현장 운영 계획이 될 수 없습니다.\n\n이는 특히 호스피탈리티 브랜드에게 중대한 문제입니다. K-뷰티, 의료 관광 또는 프리미엄 라이프스타일에 대한 높은 관심이 호텔 스파, 리커버리 클럽, 수면 케어 콘셉트, 또는 리트리트 시설의 사업성을 자동으로 보장하지 않습니다. 한 영역의 수요가 다른 영역의 반복 소비 경제성을 증명해 주지 못하기 때문입니다.\n\n진짜 핵심 질문은 ‘한국에 웰니스 시장 기회가 존재하는가’가 아닙니다. ‘구체적으로 설계된 제안이 현지 소비자의 신뢰를 얻고, 반복 방문 행동을 창출하며, 한국 특유의 규제 및 시장 조건 속에서 신뢰성 있게 운영될 수 있는가’입니다.',
    },
    coreSectionTitle: {
      en: 'What to define first: Customer problem, boundary, and commercial model',
      ko: '시장 진입 전 우선 정의해야 할 4대 핵심 축',
    },
    coreSectionIntro: {
      en: 'Start with the customer problem, not the global category. Who is paying? What outcome are they buying? Is the proposition about recovery, sleep, stress relief, performance, preventative lifestyle or destination escape? How often can that customer realistically return? Then define the operating boundary, test the commercial model, and separate initial curiosity from defensible repeat retention:',
      ko: '글로벌 카테고리가 아니라 ‘고객의 구체적 문제’에서부터 출발해야 합니다. 비용을 지불하는 주체는 누구인가? 그들이 구매하고자 하는 실질적 결과(Outcome)는 무엇인가? 리커버리, 수면, 스트레스 해소, 퍼포먼스 향상, 예방적 라이프스타일, 혹은 일상 탈출 중 무엇을 약속하는가? 그 고객이 현실적으로 얼마나 자주 재방문할 수 있는가? 이후 운영 경계를 획정하고, 상업적 모델을 실증하여 일시적 호기심과 방어 가능한 재방문율을 엄격히 구분해야 합니다:',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'The customer problem & outcome purchased',
          ko: '고객의 구체적 결핍과 구매 효용(Outcome)',
        },
        detail: {
          en: 'Start with the customer problem, not the global category. Who is paying? What outcome are they buying? Is the proposition about recovery, sleep, stress relief, performance, preventative lifestyle or destination escape? How often can that customer realistically return?',
          ko: '글로벌 카테고리가 아닌 고객의 구체적 결핍에서 출발해야 합니다. 비용을 지불하는 주체는 누구이며, 어떤 실질적 결과를 구매하는가? 리커버리, 수면 개선, 스트레스 완화, 신체 퍼포먼스, 예방 건강, 데스티네이션 힐링 중 무엇을 제공하며, 고객이 연간 몇 회나 반복 방문할 수 있는지 현실적으로 산정해야 합니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'Hospitality vs regulated clinical operating boundaries',
          ko: '호스피탈리티와 규제된 의료·임상 서비스의 운영 경계선',
        },
        detail: {
          en: 'Define the operating boundary clearly. Which elements are hospitality-led? Which require specialist partners? Where does the lifestyle experience end and a clinical or regulated medical service begin in South Korea’s strict healthcare regulatory environment?',
          ko: '운영의 경계선을 정밀하게 획정해야 합니다. 어느 요소까지가 호스피탈리티 서비스이며, 어느 지점부터 전문 파트너가 필요한가? 한국의 엄격한 의료법 및 면허 규제 환경 속에서, 라이프스타일 웰니스 경험이 끝나고 인허가가 필요한 의료·임상 영역이 시작되는 지점을 명확히 분리해야 합니다.',
        },
      },
      {
        num: '03',
        headline: {
          en: 'Commercial route to repeatable demand',
          ko: '일회성 호기심을 넘어선 반복 수요 상업 모델 검증',
        },
        detail: {
          en: 'A concept must show a route to repeat demand—not simply initial curiosity. That means validating price acceptance, customer acquisition channels, daypart utilisation, membership or package conversion, staffing requirements, partnership economics and the metrics that indicate retention.',
          ko: '초기 호기심 고객을 넘어선 반복 수요 창출 경로를 입증해야 합니다. 객단가 수용도, 고객 획득 채널(CAC), 시간대별 공간 가동률, 멤버십 또는 패키지 전환율, 전문 테라피스트 인력 수급, 파트너십 수익 분배, 그리고 실질적인 고객 리텐션 지표를 검증해야 합니다.',
        },
      },
      {
        num: '04',
        headline: {
          en: 'Macro visitor data vs wellness-hospitality product validation',
          ko: '공공 거시 데이터와 현장 웰니스 상품성의 괴리 식별',
        },
        detail: {
          en: 'Public visitor, medical and consumer data can signal where to investigate. They do not, by themselves, validate a wellness-hospitality product. High-level medical tourist volumes do not automatically translate into viable room-yield or spa-treatment economics for an international operator.',
          ko: '공공 방문객 통계, 의료 관광 보고서, 소비 빅데이터는 추가 조사 대상을 가리키는 신호일 뿐, 그 자체로 개별 웰니스-호스피탈리티 상품의 타당성을 입증하지 못합니다. 거시적 외국인 환자 입국 통계가 특정 인터내셔널 호텔의 스파 및 리커버리 수익성을 보증하지 않습니다.',
        },
      },
    ],
    verdictQuote: {
      en: 'Korea’s wellness opportunity is not a single market waiting to be entered. It is a series of distinct operating models that must be defined, tested and governed differently.',
      ko: '한국의 웰니스 기회는 진입만을 기다리는 단일 시장이 아닙니다. 서로 다르게 정의되고, 검증되며, 관리되어야 하는 복수의 개별 운영 모델들의 집합입니다.',
    },
    verdictDetail: {
      en: 'The brands most likely to succeed will not lead with a broad “wellness” label. They will build a narrow and credible service proposition around a clear customer problem, a practical operating boundary and a measurable repeat-demand engine. For international hospitality and lifestyle operators, this is a management challenge as much as a market-entry question: align the concept, site, partner model, service design, compliance boundary and local KPIs before committing capital. Define the offer before sizing the market. Build the repeat model before scaling the footprint.',
      ko: '가장 성공 가능성이 높은 브랜드는 모호한 ‘웰니스’ 라벨을 전면에 내세우지 않습니다. 명확한 고객 결핍, 현실적인 운영 경계선, 그리고 측정 가능한 반복 수요 엔진을 중심으로 좁고 신뢰할 수 있는 서비스 제안을 구축합니다. 글로벌 호스피탈리티 및 라이프스타일 운영사에게 이는 단순한 시장 진입을 넘어선 거버넌스 과제입니다. 자본을 투입하기 전 콘셉트, 입지, 파트너십 모델, 서비스 설계, 규제 준수 경계, 로컬 KPI를 일치시켜야 합니다. 시장 규모를 추정하기 전에 구체적 오퍼를 정의하고, 거점을 확장하기 전에 반복 방문 모델을 먼저 입증하십시오.',
    },
    decisionQuestionsTitle: {
      en: 'Five decision questions for wellness and hospitality principals',
      ko: '웰니스 및 호스피탈리티 경영진이 자문해야 할 5대 질문',
    },
    decisionQuestionsIntro: {
      en: 'Before capital is committed to Korean wellness concepts, sites, or partnerships, leadership should demand clear, evidence-backed answers to five operational questions:',
      ko: '한국 웰니스 콘셉트, 출점 입지, 또는 현지 파트너십에 자본을 투입하기 전, 경영진은 다음 5가지 운영 질문에 대해 명확하고 실증적인 답을 요구해야 합니다:',
    },
    decisionQuestions: {
      en: [
        'Which specific customer problem are we solving?',
        'Who pays, and what outcome are they willing to pay for?',
        'Where is the boundary between hospitality, lifestyle and regulated care?',
        'What evidence would prove repeat willingness to pay?',
        'Which local operating capabilities or partnerships are essential to deliver the promise?',
      ],
      ko: [
        '우리가 해결하고자 하는 구체적인 고객의 문제는 무엇인가?',
        '비용을 지불하는 주체는 누구이며, 어떤 실질적 결과에 기꺼이 지불하는가?',
        '호스피탈리티, 라이프스타일, 그리고 인허가 규제를 받는 의료 영역 간의 경계는 어디인가?',
        '지속적인 재방문 지불 의향을 입증할 실증적 근거는 무엇인가?',
        '브랜드의 약속을 이행하기 위해 반드시 확보해야 할 현지 운영 역량 및 파트너십은 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'MOHW / KHIDI International Healthcare Briefing',
          ko: '보건복지부 / 한국보건산업진흥원 글로벌 헬스케어 동향',
        },
        url: 'https://www.korea.net/Government/Briefing-Room/Press-Releases/view?articleId=1485207&insttCode=A260111&type=N',
        desc: {
          en: 'Official briefing on international patient arrivals and medical tourism trends',
          ko: '외국인 환자 유치 및 글로벌 헬스케어 공식 브리핑',
        },
      },
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization big data analytics portal',
          ko: '한국관광공사 관광 빅데이터 통합 분석 플랫폼',
        },
      },
      {
        title: {
          en: 'Seoul visitor-spend reporting',
          ko: '서울시 외래 관광객 지출 보고서',
        },
        url: 'https://english.seoul.go.kr/international-arrivals-to-seoul-rise-21-spending-jumps-57-visitors-spend-krw-5-6-trillion-in-h1-2026/',
        desc: {
          en: 'International arrivals to Seoul rise 21%, spending jumps 57% in H1 2026',
          ko: '2026년 상반기 서울 방문 관광객 및 소비 지출 공식 분석 (서울시 발표)',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.',
      ko: '출처 링크는 본 분석의 실증적 근거를 식별하며, 발행일 기준으로 재확인되었습니다. 나베로의 견해는 독립적 분석 해석이며 제3자의 일방적 주장이 아닙니다. 본 기사는 시장 논평이며 법률, 의료, 규제 또는 투자에 관한 법적 자문이 아닙니다.',
    },
  },
  {
    id: 'four-seouls-four-entry-problems',
    slug: 'four-seouls-four-entry-problems',
    category: {
      en: 'DISTRICT STRATEGY | SEOUL | SITE SELECTION',
      ko: '상권 전략 | 서울 | 출점 입지 선정',
    },
    corridor: {
      en: 'SEOUL SUB-DISTRICTS ↔ GLOBAL OPERATORS',
      ko: '서울 핵심 상권 ↔ 글로벌 운영사',
    },
    publishedAt: '2026-10-05',
    date: {
      en: 'Oct 05, 2026',
      ko: '2026년 10월 5일',
    },
    readTime: {
      en: '4 min read',
      ko: '4분 소요',
    },
    title: {
      en: 'Four Seouls, Four Entry Problems',
      ko: '4개의 서울, 4개의 진출 과제',
    },
    subtitle: {
      en: 'Gangnam, Hannam, Seongsu and Yeouido are not interchangeable market definitions',
      ko: '강남, 한남, 성수, 여의도는 결코 상호 호환 가능한 시장이 아니다',
    },
    teaserSummary: {
      en: 'District names are useful shorthand, not market strategy. A proposal must define the repeat customer, occasion, micro-location requirements and operational constraints before it calls a Seoul district "right."',
      ko: '자치구 상권 명칭은 유용한 편의적 약칭일 뿐, 시장 진출 전략이 아닙니다. 특정 콘셉트가 서울의 어느 상권을 "적합하다"고 규정하기 전에, 반드시 반복 방문 고객, 소비 오케이션, 마이크로 입지 요건, 그리고 실질적인 운영 제약 조건을 먼저 정의해야 합니다.',
    },
    previewTakeaways: {
      en: [
        'Gangnam, Hannam, Seongsu, and Yeouido are brand signals that become dangerous when shorthand replaces evidence.',
        'The same city contains sharply different demand rhythms, spending mixes, weekday economics, and landlord expectations.',
        'Compare districts through four operating lenses: repeat customer cohort, target occasion, micro-location logistics, and invalidation data.',
      ],
      ko: [
        '강남, 한남, 성수, 여의도는 브랜드 지향점의 상징일 뿐, 이러한 편의적 라벨이 실증 데이터를 대체할 때 치명적인 실패로 이어집니다.',
        '동일한 서울 안에서도 상권에 따라 주중/주말 수요 리듬, 지출 믹스, 평일 경제성, 임대인 기대치가 극단적으로 상이합니다.',
        '운영사는 4대 운영 렌즈(반복 방문 고객군, 점유할 소비 오케이션, 마이크로 입지 물류·접근성, 가설 반증 데이터)를 통해 상권을 정밀 비교해야 합니다.',
      ],
    },
    executiveThesis: {
      en: 'District names are useful shorthand, not market strategy. A proposal must define the repeat customer, occasion, micro-location requirements and operational constraints before it calls a Seoul district "right."',
      ko: '자치구 상권 명칭은 유용한 편의적 약칭일 뿐, 시장 진출 전략이 아닙니다. 특정 콘셉트가 서울의 어느 상권을 "적합하다"고 규정하기 전에, 반드시 반복 방문 고객, 소비 오케이션, 마이크로 입지 요건, 그리고 실질적인 운영 제약 조건을 먼저 정의해야 합니다.',
    },
    problemSectionTitle: {
      en: 'The shorthand trap',
      ko: '약칭의 함정: 라벨이 실증 분석을 대체할 때',
    },
    assumptionProblem: {
      en: 'Gangnam, Hannam, Seongsu and Yeouido are regularly used as brand signals. That can be useful in a first conversation, but it becomes dangerous when the label replaces evidence. The same city can contain sharply different demand rhythms, spending mixes, customer motivations, weekday economics, visibility needs and landlord expectations. A beautiful district narrative does not show that a proposed format can trade there.',
      ko: '강남, 한남, 성수, 여의도는 글로벌 본사 경영진과의 초기 대화에서 손쉬운 브랜드 지향점 신호로 자주 활용됩니다. 첫 미팅에서는 유용할 수 있지만, 이러한 지역 라벨이 실증 데이터를 대체하기 시작하면 대단히 위험해집니다. 동일한 서울 시내라 하더라도 상권에 따라 수요 리듬, 지출 믹스, 고객의 방문 동기, 주중 경제성, 가시성 요구조건, 임대인의 기대치가 극단적으로 갈립니다. 매력적인 상권 스토리텔링만으로는 제안된 브랜드 포맷이 그곳에서 실제로 수익성 있게 영업할 수 있는지 전혀 증명하지 못합니다.',
    },
    coreSectionTitle: {
      en: 'A better comparison: Four operating lenses',
      ko: '실무적 상권 비교: 4대 핵심 운영 렌즈',
    },
    coreSectionIntro: {
      en: 'Compare districts through four operating lenses. First, who is the expected repeat customer? Second, which occasion is the format meant to own? Third, how must the micro-location work for access, frontage, staffing and delivery? Fourth, what data point would validate the hypothesis? Seoul’s public reporting provides a starting view of visitor-spend concentration, but an operator should add local observation, lease intelligence and competitor mapping.',
      ko: '상권은 4가지 실무 운영 렌즈를 통해 체계적으로 비교 분석되어야 합니다. 첫째, 지속적으로 유입되어야 할 반복 방문 고객은 누구인가? 둘째, 해당 포맷이 점유하고자 하는 소비 오케이션은 무엇인가? 셋째, 도로 접근성, 전면 노출도, 인력 수급, 배송 및 물류 측면에서 마이크로 입지는 어떻게 작동해야 하는가? 넷째, 이 출점 가설을 입증할 결정적 데이터는 무엇인가? 서울시의 공식 공공 보고서는 방문객 지출 집중도에 대한 초기 시각을 제공하지만, 운영사는 반드시 현장 관찰, 임대차 실거래 정보, 경쟁사 밀도 매핑을 결합해야 합니다.',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'Expected repeat customer cohort',
          ko: '반복 방문 핵심 고객 코호트 정의',
        },
        detail: {
          en: 'Who must visit twice for the concept to work? Tourism and first-time curiosity footfall can mask fatal commercial flaws. Each district attracts fundamentally distinct cohorts: corporate expense-account diners in Yeouido, status-seeking luxury spenders in Gangnam/Cheongdam, cosmopolitan tastemakers in Hannam, and trend-focused digital natives in Seongsu.',
          ko: '콘셉트가 지속되기 위해 두 번 이상 찾아와야 할 핵심 고객은 누구입니까? 관광객과 1회성 호기심 고객은 비즈니스의 치명적 결함을 가립니다. 여의도의 법인 카드 결제 직장인, 강남·청담의 사회적 위상 지향형 럭셔리 소비자, 한남의 글로벌 테이스트메이커, 성수의 트렌드 탐색형 청년층 등 상권별 반복 고객은 완전히 다른 층위를 형성합니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'Occasion ownership & daypart dynamics',
          ko: '소비 오케이션 점유 및 시간대별 매출 역학',
        },
        detail: {
          en: 'Which occasion is the format meant to own? A district’s strength in weekend leisurely brunches does not support a high-rent venue requiring weekday midday seat turnover. Yeouido demands 45-minute corporate lunch velocity; Seongsu thrives on aesthetic dwell time; Hannam rewards intimate evening culinary engagement.',
          ko: '해당 포맷이 확실하게 점유해야 하는 소비 오케이션은 무엇입니까? 주말 여유로운 브런치에 최적화된 상권은 주중 점심 빠른 회전율을 필요로 하는 고임대료 매장을 감당할 수 없습니다. 여의도는 45분짜리 비즈니스 런치 속도를 요구하고, 성수는 미학적 공간 체류 시간을 기반으로 하며, 한남은 밀도 높은 저녁 식음료 경험에 강력한 프리미엄을 부여합니다.',
        },
      },
      {
        num: '03',
        headline: {
          en: 'Micro-location logistics & physical constraints',
          ko: '마이크로 입지 물리 조건과 운영 제약 (접근성·전면·물류)',
        },
        detail: {
          en: 'How must the micro-location work for access, frontage, staffing, and delivery? Being in "Hannam" or "Seongsu" is meaningless if your back-alley site lacks delivery vehicle turnaround, valet staging, kitchen exhaust permits, or sufficient utility infrastructure. District reputation cannot overcome micro-site physical friction.',
          ko: '도로 접근성, 전면(Frontage) 가시성, 인력 채용, 납품 물류 측면에서 실제 현장은 어떻게 작동해야 합니까? 골목 안쪽에 위치해 발레파킹 대기 공간이 없거나, 주방 배기 닥트 인허가가 불가능하거나, 대형 식자재 배송 차량 진입이 막힌다면 "한남동"이나 "성수동"이라는 명칭은 아무런 보호막이 되지 못합니다.',
        },
      },
      {
        num: '04',
        headline: {
          en: 'Hypothesis validation & kill-metric data',
          ko: '가설 검증 및 실패 반증 데이터 지표',
        },
        detail: {
          en: 'What data point would validate or disprove the district thesis? Rather than collecting confirmatory marketing praise, operators must identify the kill-metrics: card-spend seasonality, evening footfall drop-off rates, local lease turnover velocity, and competitor attrition before committing capital.',
          ko: '해당 상권 진출 가설을 단번에 검증하거나 반증할 데이터 지표는 무엇입니까? 브랜드를 칭찬하는 마케팅 자료 대신, 자본 투입 전 신용카드 결제 계절성, 평일 야간 유동인구 급감율, 인근 점포 공실률 및 폐업 주기 등 핵심 위험 지표를 먼저 식별해야 합니다.',
        },
      },
    ],
    verdictQuote: {
      en: 'Do not choose a neighbourhood because it is culturally fashionable or commercially famous. Choose it because it gives the format the right customer, occasion and economics.',
      ko: '문화적으로 유행하거나 상업적으로 유명하다는 이유만으로 상권을 선택하지 마십시오. 오직 해당 브랜드 포맷에 부합하는 타깃 고객, 소비 오케이션, 그리고 지속 가능한 경제성을 제공하는 입지여야 합니다.',
    },
    verdictDetail: {
      en: 'The goal is a small number of validated micro-markets, not a list of fashionable addresses.',
      ko: '최종 목표는 유행하는 번지수 목록을 모으는 것이 아니라, 철저히 실증 검증된 소수의 마이크로 상권을 확보하는 것입니다.',
    },
    decisionQuestionsTitle: {
      en: 'Three decision questions for operators',
      ko: '운영사가 반드시 검증해야 할 3대 의사결정 질문',
    },
    decisionQuestionsIntro: {
      en: 'Before signing a commercial lease in Seoul, principals should demand quantitative, evidence-backed answers to three core questions:',
      ko: '서울 상권에서 임대차 계약에 서명하기 전, 경영진은 다음 3가지 핵심 질문에 대해 정량적이고 실증적인 답을 요구해야 합니다:',
    },
    decisionQuestions: {
      en: [
        'Who must visit twice for the concept to work?',
        'What does the micro-location need to deliver?',
        'Which data would disprove the district thesis?',
      ],
      ko: [
        '콘셉트가 안착하기 위해 반드시 두 번 이상 재방문해야 하는 핵심 고객은 누구인가?',
        '선택한 마이크로 입지가 물리적·운영적으로 반드시 충족해야 할 요건은 무엇인가?',
        '해당 상권 진출 가설을 단번에 반증하거나 무효화할 수 있는 데이터는 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'Seoul visitor spend report',
          ko: '서울시 외래 관광객 지출 보고서',
        },
        url: 'https://english.seoul.go.kr/international-arrivals-to-seoul-rise-21-spending-jumps-57-visitors-spend-krw-5-6-trillion-in-h1-2026/',
        desc: {
          en: 'International arrivals to Seoul rise 21%, spending jumps 57% in H1 2026',
          ko: '2026년 상반기 서울 방문 관광객 및 소비 지출 공식 분석 (서울시 발표)',
        },
      },
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization big data analytics portal',
          ko: '한국관광공사 관광 빅데이터 통합 분석 플랫폼',
        },
      },
      {
        title: {
          en: 'KOSIS (Korean Statistical Information Service)',
          ko: '국가통계포털',
        },
        url: 'https://kosis.kr/eng/',
        desc: {
          en: 'National official statistical portal for commercial, demographic, and economic accounts',
          ko: '통계청 국가통계포털 (상권 및 가계 소비 트렌드 통계)',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.',
      ko: '출처 링크는 본 분석의 실증적 근거를 식별하며, 발행일 기준으로 재확인되었습니다. 나베로의 견해는 독립적 분석 해석이며 제3자의 일방적 주장이 아닙니다. 본 기사는 시장 논평이며 법률, 의료, 규제 또는 투자에 관한 법적 자문이 아닙니다.',
    },
  },
  {
    id: 'korea-does-not-reward-foreign-concepts-that-arrive-untranslated',
    slug: 'korea-does-not-reward-foreign-concepts-that-arrive-untranslated',
    category: {
      en: 'BRAND STRATEGY | F&B and HOSPITALITY | KOREA MARKET ENTRY',
      ko: '브랜드 전략 | F&B 및 호스피탈리티 | 한국 시장 진출',
    },
    corridor: {
      en: 'GLOBAL ↔ SOUTH KOREA',
      ko: '글로벌 ↔ 한국',
    },
    publishedAt: '2026-09-28',
    date: {
      en: 'Sep 28, 2026',
      ko: '2026년 9월 28일',
    },
    readTime: {
      en: '5 min read',
      ko: '5분 소요',
    },
    title: {
      en: 'Korea Does Not Reward Foreign Concepts That Arrive Untranslated',
      ko: '한국 시장은 번역되지 않은 외래 콘셉트에 보상하지 않는다',
    },
    subtitle: {
      en: 'How global hospitality and F&B brands survive the cliff between initial hype and sustainable loyalty.',
      ko: '글로벌 호스피탈리티 및 F&B 브랜드가 초기 유행과 지속 가능한 재방문 사이의 절벽을 극복하는 법',
    },
    teaserSummary: {
      en: 'Localisation is not a cosmetic exercise menu twerk. It is the disciplined, non-negotiable separation of a brand’s core heritage promise from the indigenous digital, spatial, and operational systems required to survive in South Korea.',
      ko: '현지화는 단순한 메뉴 수정 같은 표면적 손질이 아닙니다. 이는 브랜드 고유의 헤리티지 가치와, 한국 시장에서 살아남기 위해 필수적인 고유의 디지털·공간·운영 시스템을 엄격하고 규율 있게 분리해내는 작업입니다.',
    },
    previewTakeaways: {
      en: [
        'A three-hour queue outside your flagship during month one does not validate product-market fit; it merely confirms that consumers recognize your concept as temporary social validation currency (injung-shot).',
        'The real commercial stress test occurs between months six and nine, when trend-seekers migrate to the next opening and P&L must depend on habitual, repeat local footfall.',
        'Durable market survival demands an Adaptation Charter: protecting the non-negotiable global brand promise while localizing native reservation tech, micro-district codes, and dining tempos.',
      ],
      ko: [
        '오픈 첫 달 플래그십 매장 앞의 3시간 대기열은 제품-시장 적합성을 증명하지 못하며, 단지 한국의 초연결 소비자들이 해당 콘셉트를 당 시즌의 "인증샷" 화폐로 소비했음을 의미할 뿐입니다.',
        '진정한 상업적 스트레스 테스트는 트렌드 추종자들이 다음 신규 매장으로 이동하고 손익계산서가 온전히 일상적인 지역 재방문 수요에 의존해야 하는 오픈 6~9개월 차에 비로소 시작됩니다.',
        '지속 가능한 시장 안착을 위해서는 글로벌 브랜드의 타협 불가능한 헤리티지를 수호하되, 예약 플랫폼·상권별 행동 양식·식사 템포를 철저히 현지화하는 "적응 헌장(Adaptation Charter)" 구축이 필수적입니다.',
      ],
    },
    executiveThesis: {
      en: 'Localisation is not a cosmetic exercise menu twerk. It is the disciplined, non-negotiable separation of a brand’s core heritage promise from the indigenous digital, spatial, and operational systems required to survive in South Korea.',
      ko: '현지화는 단순한 메뉴 수정 같은 표면적 손질이 아닙니다. 이는 브랜드 고유의 헤리티지 가치와, 한국 시장에서 살아남기 위해 필수적인 고유의 디지털·공간·운영 시스템을 엄격하고 규율 있게 분리해내는 작업입니다.',
    },
    problemSectionTitle: {
      en: 'Beyond the headline: Interpretation, not imitation',
      ko: '헤드라인 너머의 본질: 모방이 아닌 재해석',
    },
    assumptionProblem: {
      en: 'Foreign hospitality executives frequently mistake opening velocity for brand durability.\n\nIn Seoul, a three-hour queue outside your flagship during month one does not validate product-market fit. It merely confirms that South Korea’s hyper-connected consumer base has recognized your concept as this season’s social validation currency (injung-shot / 인증샷).\n\nThe real commercial stress test never happens during the launch cycle. It occurs between months six and nine, when the curious digital trend-seekers migrate to the next foreign opening, the social cameras disappear, and the P&L is forced to depend entirely on habitual, repeat local footfall.\n\nHistorically, imported concepts fail in one of two directions:\n\n• The Sovereign Replicator: Corporate headquarters insists every operational detail from London, Milan, or New York is sacred. They demand the Korean guest adapt their booking rituals, table pacing, and payment habits to match the foreign standard. The result: severe customer friction and rapid abandonment once the novelty wears off.\n\n• The Panicked Chameleon: Faced with dipping numbers in month five, the operator panics and alters the menu, price point, and service model to mimic domestic competitors. In doing so, they erase the authentic foreign identity and premium pricing power that justified market entry in the first place.',
      ko: '해외 호스피탈리티 경영진은 종종 오픈 초기 폭발적인 고객 유입 속도를 브랜드의 영속성으로 착각합니다.\n\n서울에서 오픈 첫 달 플래그십 매장 앞에 늘어선 3시간의 대기열은 제품-시장 적합성(PMF)을 입증하지 않습니다. 그것은 단지 한국의 초연결 소비자들이 귀사의 콘셉트를 이번 시즌의 사회적 인정 화폐("인증샷")로 소비하고 있음을 확인해 줄 뿐입니다.\n\n진정한 상업적 스트레스 테스트는 론칭 주기에 나타나지 않습니다. 호기심 많은 디지털 트렌드 탐색자들이 다음 외래 브랜드 오픈 매장으로 이동하고, 소셜 미디어 카메라 플래시가 사라지며, 손익계산서(P&L)가 오직 일상적인 현지인들의 습관적 재방문 매출에 의존해야 하는 6~9개월 차에 비로소 시작됩니다.\n\n역사적으로 한국에 수입된 외래 콘셉트는 주로 다음 두 가지 극단적인 방향으로 실패를 겪어왔습니다:\n\n• 군주적 복제자(The Sovereign Replicator): 본사가 런던, 밀라노, 뉴욕의 모든 운영 방식을 성역화합니다. 한국 고객이 현지 표준 대신 외국의 예약 방식, 식사 템포, 결제 습관에 맞추길 요구합니다. 그 결과 극심한 고객 마찰과 함께 유행이 끝남과 동시에 급격한 고객 이탈을 맞이합니다.\n\n• 공황에 빠진 카멜레온(The Panicked Chameleon): 5개월 차에 지표가 하락하기 시작하자 운영사가 패닉에 빠져 국내 경쟁업체를 흉내 내며 메뉴, 가격대, 서비스 모델을 마구잡이로 수정합니다. 그 과정에서 애초에 시장 진입을 정당화했던 고유한 외래 정체성과 프리미엄 가격 결정력을 스스로 지워버립니다.',
    },
    coreSectionTitle: {
      en: 'The practical operational work: Friction points that erode foreign equity',
      ko: '실무적 운영 과제: 해외 브랜드의 가치를 갉아먹는 마찰 지점들',
    },
    coreSectionIntro: {
      en: 'The durable alternative is interpretation, not imitation: identify the singular proposition that guests must recognize anywhere in the world, while systematically engineering local acceptance across seven critical touchpoints: discovery, table reservation, service cadence, product architecture, group dining behavior, price anchoring, and retention loops. A meaningful market entry strategy avoids broad generalisations about Korean consumer sophistication. Instead, it resolves specific operational frictions across three core dimensions:',
      ko: '지속 가능한 해법은 맹목적 모방이 아닌 "정밀한 재해석"입니다. 전 세계 고객이 어디서나 동일하게 인지해야 할 단 하나의 고유 가치 제안을 명확히 식별하되, 7가지 핵심 접점(발견, 테이블 예약, 서비스 템포, 제품 구조, 단체 식사 행동, 가격 기준점, 재방문 루프)에서 현지 수용성을 체계적으로 설계해야 합니다. 실효성 있는 시장 진출 전략은 한국 소비자의 안목에 대한 막연한 일반화를 지양하고, 3대 핵심 차원에서 발생하는 구체적인 운영 마찰을 체계적으로 해결합니다:',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'The indigenous digital ecosystem (Naver Place & CatchTable)',
          ko: '토착 디지털 생태계 장벽 (네이버 플레이스 및 캐치테이블 연동)',
        },
        detail: {
          en: 'Forcing Korean diners onto global booking engines, bespoke native apps, or legacy email concierges is a direct tax on customer acquisition. Dining discovery, user reviews, and geolocated social proof live natively on Naver Place; a brand without an optimised Naver Place presence is functionally invisible. In high-end and premium casual dining, CatchTable controls waitlisting, instant seat notifications, and cancellation deposit management. Friction-free booking within this native ecosystem determines local conversion.',
          ko: '한국 다이닝 고객에게 글로벌 자체 예약 엔진, 별도 다운로드 앱, 혹은 이메일 컨시어지 이용을 강요하는 것은 고객 획득 비용에 매기는 직접적인 세금과 같습니다. 식당 검색, 사용자 리뷰, 위치 기반 소셜 검증은 본질적으로 "네이버 플레이스"에서 발생하며, 최적화된 네이버 플레이스가 없는 브랜드는 사실상 존재하지 않는 것과 같습니다. 또한 파인다이닝 및 프리미엄 캐주얼 다이닝에서 "캐치테이블"은 대기 등록, 빈자리 알림, 취소 위약금 관리를 완벽히 장악하고 있습니다. 이 네이티브 생태계와의 매끄러운 연동이 현지 예약 전환율을 결정합니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'Micro-geography & cohort alignment (Seongsu, Apgujeong, Hannam, Yeouido)',
          ko: '마이크로 상권 지리와 고객 코호트 정합성 (성수·압구정·한남·여의도)',
        },
        detail: {
          en: 'The first physical address dictates the brand\'s social ceiling. Seoul is not a uniform market; its sub-districts operate with distinct cultural codes: Seongsu-dong (youth subculture, pop-up speed, aesthetic discovery; demands continuous reinvention to prevent rapid burnout), Apgujeong & Dosan (status-signalling, luxury lifestyle, VIP hospitality pacing), Hannam-dong (cosmopolitan, community-driven, uncompromising culinary concepts), and Yeouido & Gwanghwamun (institutionally corporate, high-speed business lunches, fixed courses, and Private Dining Rooms).',
          ko: '첫 번째 출점 주소는 브랜드가 도달할 수 있는 사회적 위상의 상한선을 결정합니다. 서울은 단일 상권이 아니며, 각 자치구는 고유한 문화적 규범을 따릅니다: 성수동(청년 하위문화, 팝업 속도, 미학적 탐색의 진앙지; 빠른 번아웃 방지를 위한 지속적 재발명 요구), 압구정·도산(사회적 지위 과시, 럭셔리 라이프스타일, VIP 호스피탈리티 페이싱), 한남동(코스모폴리탄 커뮤니티, 원형에 가까운 타협 없는 미식 콘셉트 선호), 여의도·광화문(제도권 대기업 중심, 빠른 비즈니스 런치, 코스 구조, 프라이빗 룸(PDR) 필수).',
        },
      },
      {
        num: '03',
        headline: {
          en: 'Dining rhythms and group economics (Turnover, PDR ratios, and Course pacing)',
          ko: '식사 템포와 단체 회식 경제학 (회전율, PDR 비율 및 코스 전개)',
        },
        detail: {
          en: 'Western dining models often celebrate extended, unhurried table occupancy. In contrast, Korean corporate dining and urban social gatherings operate on tight turnarounds, precise pacing, and fluid payment handling. Without dedicated Private Dining Rooms (PDRs) and course deployment tailored to the specific daypart (especially high-speed business lunch sets), operators compromise their seat-yield efficiency.',
          ko: '서구식 다이닝 모델은 종종 여유롭고 긴 테이블 체류 시간을 미덕으로 삼습니다. 반면 한국의 직장인 회식과 도심 소셜 모임은 매우 빠른 테이블 회전, 정밀한 음식 서빙 템포, 간편한 개별 결제를 요구합니다. 전용 프라이빗 룸(PDR)을 갖추지 못하거나, 특정 시간대(특히 점심 45분 집중 비즈니스 세트)에 맞춘 신속한 코스 배치가 이뤄지지 않으면 좌석 수익률(Seat Yield)이 치명적으로 훼손됩니다.',
        },
      },
    ],
    adaptationCharterTitle: {
      en: 'The Binding Strategic Framework: The Adaptation Charter',
      ko: '구속력 있는 전략 프레임워크: 적응 헌장 (Adaptation Charter)',
    },
    adaptationCharterIntro: {
      en: 'Before a master franchise agreement is signed or the first lease is secured, leadership must formalise a binding Adaptation Charter. This operational document defines what is centrally non-negotiable versus what local operating teams are empowered to modify based on verified customer behaviour:',
      ko: '마스터 프랜차이즈 계약을 체결하거나 첫 매장 임대차 계약을 맺기 전, 경영진은 구속력을 갖춘 "적응 헌장(Adaptation Charter)"을 공식화해야 합니다. 이 문서는 본사가 중앙에서 통제하는 타협 불가능한 영역과, 현지 고객 행동 데이터에 기반해 현지 운영팀이 변경할 수 있는 자율 영역을 명확히 정의합니다:',
    },
    adaptationCharter: [
      {
        dimension: {
          en: 'Brand Story & Identity',
          ko: '브랜드 스토리 & 아이덴티티',
        },
        hqControl: {
          en: 'Brand heritage, core typography, master architectural philosophy, tonal values.',
          ko: '브랜드 고유 헤리티지, 마스터 타이포그래피, 건축 철학, 브랜드 톤앤매너 원칙.',
        },
        localAutonomy: {
          en: 'Seating layout densities, queue staging, lighting warmth, private dining room (PDR) ratios.',
          ko: '좌석 배치 밀도, 대기열 동선 설계, 조명 색온도, 프라이빗 다이닝 룸(PDR) 공간 비율.',
        },
      },
      {
        dimension: {
          en: 'Product & Menu Architecture',
          ko: '제품 & 메뉴 구조',
        },
        hqControl: {
          en: 'Global hero recipes, signature beverage formats, core sensory standards.',
          ko: '글로벌 대표 시그니처 레시피, 핵심 음료 포맷, 미각 및 관능 품질 기준.',
        },
        localAutonomy: {
          en: 'Portion sizing, side-dish accompaniments, local seasonality, midday business lunch set architecture.',
          ko: '1인분 서빙 용량, 곁들임 반찬/피클류, 현지 제철 식자재 반영, 점심 비즈니스 세트 메뉴 구조.',
        },
      },
      {
        dimension: {
          en: 'Guest Journey & Tech',
          ko: '고객 여정 & 테크 시스템',
        },
        hqControl: {
          en: 'Service ethos, welcome standards, signature hospitality touchpoints.',
          ko: '서비스 철학, 고객 환대 기준, 시그니처 호스피탈리티 터치포인트.',
        },
        localAutonomy: {
          en: 'Booking platforms (CatchTable), local search (Naver Place), contactless checkout, service tempo.',
          ko: '현지 예약 플랫폼(캐치테이블), 로컬 검색(네이버 플레이스), 간편결제 시스템, 서빙 템포 조절.',
        },
      },
      {
        dimension: {
          en: 'Marketing & Partnerships',
          ko: '마케팅 & 로컬 파트너십',
        },
        hqControl: {
          en: 'Master visual assets, brand partnership guardrails.',
          ko: '글로벌 마스터 비주얼 에셋, 브랜드 협업 및 제휴 기본 가이드라인.',
        },
        localAutonomy: {
          en: 'Micro-district neighbourhood collaborations, Kakao gifting mechanics, local lifestyle alignment.',
          ko: '상권별 로컬 브랜드 협업, 카카오톡 선물하기 쿠폰 메커니즘, 현지 라이프스타일 접목.',
        },
      },
    ],
    verdictQuote: {
      en: 'Protect the brand promise. Localise the delivery system.',
      ko: '브랜드의 핵심 약속은 수호하고, 이를 전달하는 시스템은 철저히 현지화하라.',
    },
    verdictDetail: {
      en: 'Before a master franchise agreement is signed or the first lease is secured, leadership must formalise a binding Adaptation Charter. This operational document defines what is centrally non-negotiable versus what local operating teams are empowered to modify based on verified customer behaviour.',
      ko: '마스터 프랜차이즈 계약에 서명하거나 첫 매장 임대차 계약을 확정하기 전, 경영진은 구속력 있는 적응 헌장(Adaptation Charter)을 공식화해야 합니다. 본사가 중앙에서 통제하는 변경 불가 영역과 현지 고객의 검증된 행동 패턴에 맞춰 자율적으로 수정할 수 있는 영역을 문서로 확정하는 것만이 한국 시장에서의 장기 생존을 보장합니다.',
    },
    decisionQuestionsTitle: {
      en: 'Three critical decision questions before signing or committing capital',
      ko: '계약 체결 및 자본 투입 전 경영진이 자문해야 할 3대 질문',
    },
    decisionQuestionsIntro: {
      en: 'Before signing an expansion agreement or funding a rollout in Seoul, principals should insist on evidence-backed clarity for three strategic questions:',
      ko: '서울 진출 계약서에 서명하거나 매장 롤아웃에 자금을 투입하기 전, 경영진은 다음 3가지 전략 질문에 대해 명확한 실증 증거를 확보해야 합니다:',
    },
    decisionQuestions: {
      en: [
        'What is truly non-negotiable in the brand promise?',
        'Which service routines require local testing?',
        'Which changes require evidence rather than opinion?',
      ],
      ko: [
        '브랜드가 고객에게 전달하는 핵심 가치 중 절대로 타협할 수 없는 본질은 무엇인가?',
        '어떤 서비스 루틴과 운영 프로세스가 현지 실증 테스트를 거쳐야 하는가?',
        '단순한 직관이나 의견이 아니라, 철저한 고객 데이터와 실증 근거를 바탕으로 결정되어야 하는 변경 사항은 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization big data analytics portal',
          ko: '한국관광공사 관광 빅데이터 통합 분석 플랫폼',
        },
      },
      {
        title: {
          en: 'KOSIS (Korean Statistical Information Service)',
          ko: '국가통계포털',
        },
        url: 'https://kosis.kr/eng/',
        desc: {
          en: 'National official statistical portal for commercial, dining, and consumer trends',
          ko: '통계청 국가통계포털 (상권·식음료 및 가계 소비 트렌드 통계)',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.',
      ko: '출처 링크는 본 분석의 실증적 근거를 식별하며, 발행일 기준으로 재확인되었습니다. 나베로의 견해는 독립적 분석 해석이며 제3자의 일방적 주장이 아닙니다. 본 기사는 시장 논평이며 법률, 의료, 규제 또는 투자에 관한 법적 자문이 아닙니다.',
    },
  },
  {
    id: 'koreas-visitor-recovery-is-over',
    slug: 'koreas-visitor-recovery-is-over',
    category: {
      en: 'TOURISM | HOSPITALITY | SEOUL',
      ko: '관광 | 호스피탈리티 | 서울 상권',
    },
    corridor: {
      en: 'GLOBAL ↔ SOUTH KOREA',
      ko: '글로벌 ↔ 한국',
    },
    publishedAt: '2026-09-21',
    date: {
      en: 'Sep 21, 2026',
      ko: '2026년 9월 21일',
    },
    readTime: {
      en: '4 min read',
      ko: '4분 소요',
    },
    title: {
      en: "Korea's Visitor Recovery Is Over",
      ko: '한국의 방한 관광객 회복 국면은 끝났다',
    },
    subtitle: {
      en: 'The harder question for operators: where is value accruing in Seoul?',
      ko: '운영사를 위한 더 어려운 질문: 서울의 어디에서 가치가 축적되고 있는가?',
    },
    teaserSummary: {
      en: 'Arrival growth is an invitation to investigate, not a site-selection recommendation. A useful investment or operating decision requires evidence of visitor mix, purpose, category spend, district concentration and supply - all at the same time.',
      ko: '입국자 수 증가는 추가 조사를 위한 신호일 뿐, 출점지 추천서가 아닙니다. 유의미한 투자나 운영 의사결정을 내리려면 방문객 구성, 여행 목적, 카테고리별 지출, 상권 집중도, 그리고 신규 공급을 동시에 입증할 수 있는 다각도의 실증 데이터가 필요합니다.',
    },
    previewTakeaways: {
      en: [
        'National arrival figures can be encouraging while leaving the key commercial question unanswered: who is spending, where and on what?',
        'Read demand through a bundle of variables: source market mix, length of stay, trip purpose, category spend, district concentration, and supply.',
        'Treat visitor recovery as the top of the funnel. Build the commercial view one level deeper before deciding on format or commitment.',
      ],
      ko: [
        '국가 전체의 입국자 수 증가는 긍정적일 수 있으나, "누가, 어디서, 무엇에 지출하고 있는가"라는 핵심 상업적 질문에는 답을 주지 못합니다.',
        '수요는 출발국 구성, 체류 기간, 방문 목적, 소비 품목, 상권 집중도, 신규 공급 등 복합적인 변수를 통해 종합적으로 읽어야 합니다.',
        '방문객 회복을 단순한 깔때기 최상단으로 인식하고, 플래그십 직영이나 위탁운영 등 진출 포맷을 결정하기 전에 한 단계 더 깊은 상업적 관점을 정립해야 합니다.',
      ],
    },
    executiveThesis: {
      en: 'Arrival growth is an invitation to investigate, not a site-selection recommendation. A useful investment or operating decision requires evidence of visitor mix, purpose, category spend, district concentration and supply - all at the same time.',
      ko: '입국자 수 증가는 추가 조사를 위한 신호일 뿐, 출점지 추천서가 아닙니다. 유의미한 투자나 운영 의사결정을 내리려면 방문객 구성, 여행 목적, 카테고리별 지출, 상권 집중도, 그리고 신규 공급을 동시에 입증할 수 있는 다각도의 실증 데이터가 필요합니다.',
    },
    problemSectionTitle: {
      en: 'Beyond the headline',
      ko: '헤드라인 너머의 본질',
    },
    assumptionProblem: {
      en: 'National arrival figures can be encouraging while leaving the key commercial question unanswered: who is spending, where and on what? KTO’s public data infrastructure is valuable because it supports analysis by nationality, region and selected spending signals. Seoul’s own reporting shows how strongly visitor expenditure can concentrate by category and district. Neither source alone tells a hotel, restaurant or wellness brand where to sign a lease.',
      ko: '전국 단위의 입국자 통계는 긍정적일 수 있지만 정작 가장 중요한 상업적 질문—"누가, 어디에서, 무엇에 돈을 쓰고 있는가?"—에는 답을 주지 못합니다. 한국관광공사(KTO)의 공공 데이터 인프라는 국적, 지역 및 선별된 지출 신호별 분석을 지원하므로 대단히 유용합니다. 서울시의 자체 보고서 역시 관광객 지출이 특정 소비 카테고리와 자치구 상권에 얼마나 강하게 집중되는지를 여실히 보여줍니다. 그러나 두 데이터 소스 중 어느 하나만으로는 호텔, 레스토랑, 또는 웰니스 브랜드가 어디에 임대차 계약을 체결해야 하는지 알려주지 못합니다.',
    },
    coreSectionTitle: {
      en: 'What a decision-grade view needs',
      ko: '의사결정급 분석에 필요한 핵심 변수',
    },
    coreSectionIntro: {
      en: 'Read demand through a bundle of variables: source market mix, length of stay, trip purpose, spending category, district concentration, repeat behaviour and new supply. A destination can experience strong visitor growth while a proposed format sees weak conversion. Conversely, a smaller cohort can create a stronger premium opportunity if its location, occasion and price logic are aligned.',
      ko: '수요는 출발국 믹스, 체류 기간, 방문 목적, 소비 품목, 상권 집중도, 재방문 행동 및 신규 공급 등 복합적인 변수 묶음을 통해 종합적으로 파악해야 합니다. 목적지 전체는 강력한 방문객 증가를 경험할 수 있지만, 제안된 브랜드 포맷은 저조한 전환율을 보일 수 있습니다. 반대로, 규모가 작은 타깃 고객군이라도 입지, 소비 오케이션, 가격 논리가 정합성을 갖춘다면 훨씬 견고한 프리미엄 비즈니스 기회를 창출할 수 있습니다.',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'Source market mix & length of stay',
          ko: '출발국 구성 믹스 및 체류 기간의 질적 분화',
        },
        detail: {
          en: 'Aggregate arrival numbers conceal critical shifts in origin markets. High-volume transit visitors generate very different dwell times and hospitality conversion compared to high-intent regional travelers.',
          ko: '총 입국자 수의 단순 집계는 출발국별 중대한 구조적 변화를 가립니다. 단순 경유형 단기 방문객과 높은 목적성을 지닌 중장기 체류객은 접객 소비 전환율과 체류 시간에서 완전히 다른 패턴을 보입니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'Trip purpose & occasion alignment',
          ko: '여행 목적과 소비 오케이션의 정합성',
        },
        detail: {
          en: 'A destination can experience strong visitor growth while a proposed format sees weak conversion. Formats succeed only when aligned with the specific occasion and purpose driving the visit.',
          ko: '목적지 전체의 방문객이 급증하더라도 제안된 브랜드 포맷의 방문 동기와 불일치할 경우 전환율은 극히 저조할 수 있습니다. 소비자가 해당 공간을 찾는 구체적인 오케이션과 맞아떨어져야 합니다.',
        },
      },
      {
        num: '03',
        headline: {
          en: 'Spending category concentration',
          ko: '소비 품목별 극단적 편중과 객단가 현실',
        },
        detail: {
          en: 'Visitor expenditure concentrates heavily by category. Duty-free and cosmetics spending dynamics do not automatically translate into dining, nightlife, or premium hospitality service budgets.',
          ko: '방한 관광객의 지출은 특정 품목에 극도로 편중됩니다. 면세점이나 뷰티·의료 쇼핑 지출의 호조가 식음료(F&B), 라이프스타일 서비스, 프리미엄 호스피탈리티 객단가로 자동 전이되지 않습니다.',
        },
      },
      {
        num: '04',
        headline: {
          en: 'District concentration & micro-location footfall',
          ko: '서울 자치구 상권별 집중도와 미세 보행 동선',
        },
        detail: {
          en: 'Seoul’s official reporting reveals severe geographic concentration across select districts. Being "in Seoul" is meaningless without understanding micro-district footfall, transit accessibility, and dwell patterns.',
          ko: '서울시 공식 통계는 특정 자치구 상권으로의 극단적 지출 집중을 입증합니다. 마이크로 상권의 보행 동선과 체류 특성을 정밀 분석하지 않은 단순 "서울 진출"은 실패 리스크를 높입니다.',
        },
      },
      {
        num: '05',
        headline: {
          en: 'Repeat behaviour vs new supply absorption',
          ko: '재방문 행동 패턴과 신규 공급 흡수율',
        },
        detail: {
          en: 'A smaller cohort can create a stronger premium opportunity if its location, occasion, and price logic are aligned. Operators must evaluate whether upcoming hospitality supply will absorb demand.',
          ko: '규모가 작은 타깃 집단이라도 입지, 소비 오케이션, 가격 논리가 부합한다면 훨씬 견고한 프리미엄 기회를 창출합니다. 향후 공급될 신규 호텔과 상업 시설이 유입 수요를 잠식하지 않는지 면밀히 측정해야 합니다.',
        },
      },
    ],
    verdictQuote: {
      en: 'Treat visitor recovery as the top of the funnel. Build the commercial view one level deeper: which customer cohort can a specific site win repeatedly, and why?',
      ko: '방문객 회복을 깔때기의 최상단으로 취급하십시오. 한 단계 더 깊은 상업적 관점을 세워야 합니다: 특정 입지가 지속적으로 확보할 수 있는 핵심 고객군은 누구이며, 그 이유는 무엇인가?',
    },
    verdictDetail: {
      en: 'Only then should an operator decide whether the opportunity is a flagship, a managed format, a partnership or a wait-and-watch market.',
      ko: '그 질문에 명확한 답을 도출한 후에야 비로소 운영사는 플래그십 직영 출점, 위탁 운영 포맷, 파트너십 제휴, 혹은 시장 관망 중 어떤 전략을 택해야 할지 결정할 수 있습니다.',
    },
    decisionQuestionsTitle: {
      en: 'Decision questions for leadership before commitment',
      ko: '의사결정권자가 자문해야 할 3대 핵심 질문',
    },
    decisionQuestionsIntro: {
      en: 'Before signing a lease or committing capital to Seoul hospitality, brand leadership should establish clear, evidence-backed answers to three direct questions:',
      ko: '서울 시장에서 임대차 계약에 서명하거나 자본을 투입하기 전, 브랜드 경영진은 다음 세 가지 질문에 대해 명확하고 실증적인 답을 확보해야 합니다:',
    },
    decisionQuestions: {
      en: [
        'Which source markets matter to the proposed format?',
        'What does card-spend data include and exclude?',
        'Where is new supply likely to absorb demand?',
      ],
      ko: [
        '제안된 브랜드 포맷에 실질적으로 중요한 핵심 출발국 시장은 어디인가?',
        '카드 결제 빅데이터가 포함하는 영역과 누락하는 사각지대는 무엇인가?',
        '신규 공급이 유입 수요를 어느 지역에서 집중 흡수할 것인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization big data analytics portal',
          ko: '한국관광공사 관광 빅데이터 통합 분석 플랫폼',
        },
      },
      {
        title: {
          en: 'KTO methodology',
          ko: 'KTO 통계 방법론',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/getMetaInfoList.do',
        desc: {
          en: 'Data collection and verification standards metadata',
          ko: '관광 통계 메타데이터 및 분석 프레임워크',
        },
      },
      {
        title: {
          en: 'Seoul visitor spend report',
          ko: '서울시 외국인 관광객 지출 보고서',
        },
        url: 'https://english.seoul.go.kr/international-arrivals-to-seoul-rise-21-spending-jumps-57-visitors-spend-krw-5-6-trillion-in-h1-2026/',
        desc: {
          en: 'International arrivals to Seoul rise 21%, spending jumps 57% (KRW 5.6 trillion in H1 2026)',
          ko: '2026년 상반기 서울 방문 외래 관광객 21% 증가 및 지출액 5.6조 원 공식 분석 보고',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory or investment advice.',
      ko: '출처 링크는 본 분석의 실증적 근거를 식별하며, 발행일 기준으로 재확인되었습니다. 나베로의 견해는 독립적 분석 해석이며 제3자의 일방적 주장이 아닙니다. 본 기사는 시장 논평이며 법률, 의료, 규제 또는 투자에 관한 법적 자문이 아닙니다.',
    },
  },
  {
    id: 'franchising-governance-not-shortcut',
    slug: 'franchising-is-governance-not-a-shortcut',
    category: {
      en: 'OPERATING MODEL | FRANCHISE',
      ko: '운영 모델 | 프랜차이즈 거버넌스',
    },
    corridor: {
      en: 'GLOBAL ↔ SOUTH KOREA',
      ko: '글로벌 ↔ 한국',
    },
    publishedAt: '2026-09-14',
    date: {
      en: 'Sep 14, 2026',
      ko: '2026년 9월 14일',
    },
    readTime: {
      en: '4 min read',
      ko: '4분 소요',
    },
    title: {
      en: 'Franchising Is Governance, Not a Shortcut',
      ko: '프랜차이즈는 거버넌스이지, 지름길이 아니다',
    },
    subtitle: {
      en: 'How foreign brands should choose an operating model for South Korea',
      ko: '해외 브랜드가 한국 진출 운영 모델을 선택하는 실질적 기준',
    },
    teaserSummary: {
      en: 'Franchising can accelerate expansion, but it cannot replace a control decision. In South Korea, an incoming brand should choose the model that protects its customer promise and learning loop - not the model that produces the quickest launch headline.',
      ko: '프랜차이즈는 확장을 가속할 수 있지만, 통제권에 관한 핵심 의사결정을 대체할 수는 없습니다. 한국에 진입하는 해외 브랜드는 가장 빠른 론칭 헤드라인을 만들어내는 모델이 아니라, 고객과의 약속과 현지 학습 루프를 온전히 지켜낼 수 있는 운영 모델을 선택해야 합니다.',
    },
    previewTakeaways: {
      en: [
        'Operating models distribute risk, decision rights, and learning loops in fundamentally different ways.',
        "Korea’s franchise disclosure regulations are a compliance floor, not a guarantee of operational fidelity.",
        'Before partner selection, design a governance map defining what the principal must still decide in year three.',
      ],
      ko: [
        '운영 모델(프랜차이즈, JV, 라이선스, 직영)은 리스크, 의사결정 권한, 시장 학습 기회를 근본적으로 다르게 배분합니다.',
        '한국 공정위 정보공개서 규정은 필수적인 준법 하한선일 뿐, 파트너가 브랜드 품질을 유지해줄 것이라는 보증이 아닙니다.',
        '파트너를 선정하기 전, 진출 3년 차에도 본사가 반드시 통제해야 할 의사결정 권한을 정의한 거버넌스 지도를 수립해야 합니다.',
      ],
    },
    executiveThesis: {
      en: 'Franchising can accelerate expansion, but it cannot replace a control decision. In South Korea, an incoming brand should choose the model that protects its customer promise and learning loop - not the model that produces the quickest launch headline.',
      ko: '프랜차이즈는 확장을 가속할 수 있지만, 통제권에 관한 핵심 의사결정을 대체할 수는 없습니다. 한국에 진입하는 해외 브랜드는 가장 빠른 론칭 헤드라인을 만들어내는 모델이 아니라, 고객과의 약속과 현지 학습 루프를 온전히 지켜낼 수 있는 운영 모델을 선택해야 합니다.',
    },
    problemSectionTitle: {
      en: 'Why the model matters',
      ko: '운영 모델 선택이 결정적인 이유',
    },
    assumptionProblem: {
      en: 'A franchise, joint venture, licence, and direct corporate build distribute risk, decision rights, and learning in different ways. The wrong structure can separate a brand from the data, product decisions and customer feedback that define its equity. The right structure does not eliminate friction. It makes the friction visible and allocates it deliberately.',
      ko: '프랜차이즈, 합작투자(JV), 라이선스, 그리고 직영 법인 설립은 리스크, 의사결정 권한, 시장 학습을 각기 다른 방식으로 배분합니다. 잘못된 구조는 브랜드를 그 자산 가치의 본질인 고객 데이터, 제품 의사결정 권한, 소비자 피드백으로부터 완전히 분리시켜 버릴 수 있습니다. 올바른 구조는 마찰을 없애는 것이 아니라, 마찰을 투명하게 가시화하고 의도적으로 배분하는 것입니다.',
    },
    coreSectionTitle: {
      en: 'The structural test: Three foundational questions',
      ko: '구조적 적합성 테스트: 3가지 핵심 질문',
    },
    fiveAssumptions: [
      {
        num: '01',
        headline: {
          en: 'Which brand decisions are non-negotiable?',
          ko: '어떤 브랜드 의사결정이 타협 불가능한가?',
        },
        detail: {
          en: 'Preserving core brand integrity requires clear red lines on recipe formulations, service choreographies, and brand positioning that cannot be compromised for local convenience.',
          ko: '레시피 조리법, 서비스 접점 동선, 브랜드 포지셔닝 등 현지 파트너의 단기적 편의를 위해 결코 양보해서는 안 될 레드라인을 사전에 명확히 획정해야 합니다.',
        },
      },
      {
        num: '02',
        headline: {
          en: 'Which local capabilities are genuinely hard to build?',
          ko: '어떤 현지 역량이 자체 구축하기에 실질적으로 어려운가?',
        },
        detail: {
          en: 'Determine whether local real estate landlord access, cold-chain ingredient sourcing, or institutional talent acquisition truly justify sharing long-term brand equity upside.',
          ko: 'A급 핵심 상권 임대인 네트워크, 신선 식자재 콜드체인 수급, 현지 전문 인재 채용 등 파트너에게 장기적인 지분이나 로열티 초과 이익을 나눠줄 만한 실질적 역량이 무엇인지 냉정하게 판별해야 합니다.',
        },
      },
      {
        num: '03',
        headline: {
          en: 'What information must come back to the principal each week?',
          ko: '매주 본사 경영진으로 반드시 보고되어야 할 핵심 정보는 무엇인가?',
        },
        detail: {
          en: 'Ensure uninterrupted weekly access to unit-level POS data, customer satisfaction ratings, ingredient price variance, and footfall metrics rather than sanitised monthly summaries.',
          ko: '가공된 월간 보고서가 아닌, 매장 단위 POS 실시간 매출, 순고객추천지수(NPS), 원부자재 매입단가 변동, 방문객 객단가 데이터를 본사가 직접 실시간 검증할 수 있어야 합니다.',
        },
      },
      {
        num: '04',
        headline: {
          en: 'Compliance rules are a floor, not an operational guarantee.',
          ko: '한국 공정위 정보공개서 제도는 법적 하한선일 뿐, 품질 보증이 아닙니다.',
        },
        detail: {
          en: 'Korea’s strict Fair Trade Commission (KFTC) franchise disclosure requirements ensure transparency, but they do not answer whether your partner can preserve standards or navigate supply chain shifts without diluting your brand.',
          ko: '대한민국 공정거래위원회의 가맹사업 정보공개서 규제는 가맹점주 보호를 위한 법적 의무일 뿐, 현지 파트너가 브랜드 고유의 서비스 표준을 지키거나 공급망 위기 시 브랜드 가치 훼손 없이 대응해줄 수 있는지를 보장하지 않습니다.',
        },
      },
    ],
    modelComparison: [
      {
        model: {
          en: 'Direct Corporate Build',
          ko: '직영 법인 설립',
        },
        riskAllocation: {
          en: '100% Capital & Operational risk borne by principal',
          ko: '자본 및 운영 리스크 본사 100% 부담',
        },
        decisionRights: {
          en: 'Full, absolute control over menu, CX, pricing, and data',
          ko: '메뉴, 고객경험, 가격, 데이터 완전 통제',
        },
        learningSpeed: {
          en: 'Maximum direct learning loop with real Korean consumers',
          ko: '한국 소비자와의 직접 피드백 루프 극대화',
        },
        koreaSuitability: {
          en: 'Ideal for flagship 1-3 proof of concept before scaling',
          ko: '스케일업 전 1~3호점 단위 경제성 검증에 최적',
        },
      },
      {
        model: {
          en: 'Joint Venture (JV)',
          ko: '합작 법인 (JV)',
        },
        riskAllocation: {
          en: 'Shared equity capital & local operational risk',
          ko: '지분율에 따른 자본 및 운영 리스크 분담',
        },
        decisionRights: {
          en: 'Board-level veto rights on brand, IP, and key suppliers',
          ko: '이사회 수준의 브랜드·IP·핵심공급망 거부권 보유',
        },
        learningSpeed: {
          en: 'High data visibility via board and executive secondment',
          ko: '본사 파견 인력 및 이사회를 통한 높은 데이터 투명성',
        },
        koreaSuitability: {
          en: 'Best when deep Korean real-estate or logistics leverage is vital',
          ko: '한국 대기업 유통망이나 부동산 파이프라인 결합 시 적합',
        },
      },
      {
        model: {
          en: 'Master Franchise',
          ko: '마스터 프랜차이즈',
        },
        riskAllocation: {
          en: 'Low capital risk; heavy brand equity dilution risk',
          ko: '자본 투입 적으나 브랜드 가치 훼손 리스크 상존',
        },
        decisionRights: {
          en: 'Contractual rights only; local partner controls daily operations',
          ko: '계약상 권한에 국한되며 일상 운영은 파트너가 전담',
        },
        learningSpeed: {
          en: 'Low to moderate; depends strictly on audit and POS clauses',
          ko: '감사권 및 POS 데이터 연동 조항에 따라 가변적',
        },
        koreaSuitability: {
          en: 'Viable only with mature SOPs and comprehensive governance mapping',
          ko: '성숙한 매뉴얼과 정밀한 계약 거버넌스 체계 확보 시 가능',
        },
      },
      {
        model: {
          en: 'Brand Licence',
          ko: '브랜드 라이선스',
        },
        riskAllocation: {
          en: 'Minimal financial commitment; royalty-based yield',
          ko: '재무 부담 최소화, 로열티 수익 중심',
        },
        decisionRights: {
          en: 'Very limited; brand guideline enforcement through audits',
          ko: '극히 제한적, 가이드라인 위반 시 계약 해지권 중심',
        },
        learningSpeed: {
          en: 'Lowest; disconnected from day-to-day customer insights',
          ko: '최저 수준; 일상 고객 경험 및 데이터와 단절',
        },
        koreaSuitability: {
          en: 'Recommended only for non-core extensions or CPG retail goods',
          ko: 'F&B 매장보다는 완제품 유통 및 라이프스타일 굿즈에 권장',
        },
      },
    ],
    verdictQuote: {
      en: 'Do not begin with "Can we franchise?" Begin with "What must we still be able to decide in year three?"',
      ko: '“한국에서 프랜차이즈가 가능한가?”로 시작하지 마십시오. “진출 3년 차에도 본사가 반드시 직접 결정해야 할 사안은 무엇인가?”로 시작하십시오.',
    },
    verdictDetail: {
      en: 'Then create a governance map covering menu or service changes, supplier approval, data access, customer experience, site selection, and remediation rights. Korean legal counsel should review the structure before execution.',
      ko: '그런 다음 메뉴 및 서비스 변경 승인권, 원부자재 공급업체 승인권, 고객 데이터 접근 권한, 고객 경험 기준, 출점지 선정, 그리고 계약 위반 시 시정 조치권을 망라하는 정밀한 거버넌스 맵을 구축하십시오. 최종 실행에 앞서 한국 전문 법률 자문단을 통해 계약 구조를 면밀히 검토받아야 합니다.',
    },
    decisionQuestionsTitle: {
      en: 'Decision questions for leadership before signing',
      ko: '계약 서명 전 경영진이 자문해야 할 3대 질문',
    },
    decisionQuestionsIntro: {
      en: 'Before committing to a partner or corporate entity in South Korea, brand leadership should establish clear, consensus answers to these three strategic questions:',
      ko: '한국 현지 파트너 또는 법인 구조를 확정하기 전, 브랜드 경영진은 다음 세 가지 전략적 질문에 대해 확고한 내부 합의를 도출해야 합니다:',
    },
    decisionQuestions: {
      en: [
        'Which decision rights cannot be delegated under any circumstances?',
        'Which local capability is genuinely worth sharing long-term upside for?',
        'What concrete evidence would justify transitioning to a different operating model after the first flagship site?',
      ],
      ko: [
        '어떠한 상황에서도 현지 파트너에게 위임할 수 없는 핵심 의사결정 권한은 무엇인가?',
        '장기적인 초과 이익을 나눠주면서까지 현지 파트너로부터 확보할 가치가 있는 역량은 무엇인가?',
        '1호 플래그십 매장 오픈 이후 다른 운영 모델로 전환하는 것을 정당화할 실증적 데이터와 기준은 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'KFTC Franchise Policy',
          ko: '대한민국 공정거래위원회 가맹사업 정책',
        },
        url: 'https://www.ftc.go.kr/eng/contents.do?key=551',
        desc: {
          en: 'Korea Fair Trade Commission Franchise Information Disclosure & Compliance System',
          ko: '가맹사업거래의 공정화에 관한 법률 및 정보공개서 등록 가이드라인',
        },
      },
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
        },
        url: 'https://datalab.visitkorea.or.kr/datalab/portal/main/getMainForm.do',
        desc: {
          en: 'Korea Tourism Organization Big Data Commercial Footfall & Expenditure Portal',
          ko: '한국관광공사 상권 소비 패턴 및 외국인 관광 지출 빅데이터 분석 포털',
        },
      },
    ],
    disclaimer: {
      en: 'Source links identify the evidence base and should be rechecked on the date of publication. Navero views are analytical interpretations, not third-party facts. This article is market commentary, not legal, medical, regulatory, or investment advice.',
      ko: '출처 링크는 본 분석의 실증적 근거를 식별하며, 발행일 기준으로 재확인되었습니다. 나베로의 견해는 독립적 분석 해석이며 제3자의 일방적 주장이 아닙니다. 본 기사는 시장 논평이며 법률, 세무, 규제 또는 투자에 관한 법적 자문이 아닙니다.',
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
      ko: '한국은 과연 다음 시장인가?',
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
          ko: '학습 루프가 취약하다면 빠른 론칭이 결코 경쟁 우위가 될 수 없습니다.',
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
        '나베로가 진출 보류를 권고하게 만드는 결정적 요인은 무엇인가?',
      ],
    },
    sources: [
      {
        title: {
          en: 'KTO Data Lab',
          ko: '한국관광 데이터랩',
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
          ko: '국가통계포털',
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
