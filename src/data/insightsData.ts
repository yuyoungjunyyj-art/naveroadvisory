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
