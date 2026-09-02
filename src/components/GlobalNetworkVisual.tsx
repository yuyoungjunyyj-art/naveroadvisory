import React, { useState, useEffect, useRef } from 'react';
import { Radio, ArrowLeftRight, Globe, Layers } from 'lucide-react';
import { Theme, Language } from '../types';

interface GlobalNetworkVisualProps {
  theme: Theme;
  lang: Language;
}

interface HubNode {
  id: string;
  nameEn: string;
  nameKo: string;
  lat: number;
  lng: number;
  isHub?: boolean;
  isIndicatorOnly?: boolean;
}

interface Corridor {
  id: string;
  nameEn: string;
  nameKo: string;
  originNodeId: string;
  destNodeId: string;
  sectors: {
    en: string[];
    ko: string[];
  };
  marketFocal: {
    en: string;
    ko: string;
  };
}

// Simplified continent landmasses (Lat, Lng in degrees)
const CONTINENTS: [number, number][][] = [
  // Eurasia / Asia
  [
    [70, 30], [72, 60], [70, 90], [72, 130], [65, 170], [60, 160], [55, 140],
    [45, 135], [38, 128], [35, 120], [22, 115], [10, 105], [1, 104], [15, 95],
    [22, 70], [25, 60], [30, 50], [32, 35], [40, 28], [45, 15], [55, 10],
    [60, 5], [68, 15], [70, 30]
  ],
  // Korean Peninsula & Japan (Detail)
  [
    [42, 130], [38, 129], [34, 126], [35, 129], [40, 130], [42, 130]
  ],
  [
    [44, 144], [40, 140], [35, 139], [33, 131], [34, 135], [38, 141], [44, 144]
  ],
  // Europe & UK (Detail)
  [
    [58, -4], [55, -2], [51, 1], [50, -5], [54, -5], [58, -4]
  ],
  // Africa
  [
    [32, 32], [30, 32], [12, 44], [0, 42], [-15, 40], [-28, 32], [-34, 20],
    [-30, 15], [-15, 12], [5, 2], [5, -5], [15, -17], [28, -12], [36, 0],
    [37, 10], [32, 32]
  ],
  // Australia
  [
    [-12, 132], [-15, 125], [-22, 114], [-32, 116], [-35, 138], [-38, 146],
    [-30, 153], [-20, 148], [-12, 142], [-12, 132]
  ],
  // North America
  [
    [70, -160], [70, -130], [65, -90], [55, -55], [45, -65], [30, -80],
    [25, -80], [20, -87], [15, -90], [18, -105], [32, -117], [48, -125],
    [58, -138], [60, -150], [65, -168], [70, -160]
  ],
  // South America
  [
    [10, -75], [5, -52], [-5, -35], [-20, -40], [-35, -55], [-54, -68],
    [-45, -75], [-20, -70], [-5, -80], [5, -78], [10, -75]
  ]
];

const NODES: HubNode[] = [
  {
    id: 'southKorea',
    nameEn: 'Korea (HQ)',
    nameKo: '대한민국 (본사)',
    lat: 37.56,
    lng: 126.97,
    isHub: true,
  },
  {
    id: 'sea',
    nameEn: 'Southeast Asia',
    nameKo: '동남아시아',
    lat: 1.35,
    lng: 103.81,
  },
  {
    id: 'japan',
    nameEn: 'Japan',
    nameKo: '일본',
    lat: 35.67,
    lng: 139.65,
  },
  {
    id: 'greaterChina',
    nameEn: 'Greater China',
    nameKo: '중화권',
    lat: 22.3,
    lng: 114.17,
  },
  {
    id: 'middleEast',
    nameEn: 'Middle East',
    nameKo: '중동 (GCC)',
    lat: 25.20,
    lng: 55.27,
  },
  {
    id: 'uk',
    nameEn: 'UK',
    nameKo: '영국',
    lat: 51.5,
    lng: -0.12,
    isIndicatorOnly: true,
  },
  {
    id: 'usa',
    nameEn: 'USA',
    nameKo: '미국',
    lat: 38.9,
    lng: -77.0,
    isIndicatorOnly: true,
  },
];

const CORRIDORS: Corridor[] = [
  {
    id: 'sea-korea',
    nameEn: 'Southeast Asia ↔ Korea',
    nameKo: '동남아시아 ↔ 대한민국',
    originNodeId: 'sea',
    destNodeId: 'southKorea',
    sectors: {
      en: ['Hospitality', 'F&B Concepts', 'Cross-Border Capital'],
      ko: ['호스피탈리티', 'F&B 컨셉', '크로스보더 자본'],
    },
    marketFocal: {
      en: 'Pan-Asian F&B franchising, lifestyle hospitality expansion, cross-border venture capital & regional brand scaling.',
      ko: '아세안 F&B 프랜차이즈, 라이프스타일 호스피탈리티 확장, 크로스보더 벤처 자본 및 지역 브랜드 스케일업.',
    },
  },
  {
    id: 'japan-korea',
    nameEn: 'Japan ↔ Korea',
    nameKo: '일본 ↔ 대한민국',
    originNodeId: 'japan',
    destNodeId: 'southKorea',
    sectors: {
      en: ['Luxury Gastronomy', 'Boutique Retail', 'Master Franchising'],
      ko: ['프리미엄 미식', '부티크 리테일', '마스터 프랜차이즈'],
    },
    marketFocal: {
      en: 'High-end gastronomy, luxury boutique retail, pop-up curation & bilateral master franchise licensing.',
      ko: '파인다이닝 미식, 럭셔리 부티크 리테일, 팝업 큐레이션 및 한일 양방향 마스터 프랜차이즈 라이선싱.',
    },
  },
  {
    id: 'china-korea',
    nameEn: 'Greater China ↔ Korea',
    nameKo: '중화권 ↔ 대한민국',
    originNodeId: 'greaterChina',
    destNodeId: 'southKorea',
    sectors: {
      en: ['Entertainment IP', 'Flagship Retail', 'Beauty & Tech'],
      ko: ['엔터테인먼트 IP', '플래그십 리테일', '뷰티 & 테크'],
    },
    marketFocal: {
      en: 'Entertainment IP licensing, flagship retail positioning, beauty tech & cross-border consumer lifestyle distribution.',
      ko: '엔터테인먼트 IP 라이선싱, 플래그십 리테일 포지셔닝, 뷰티 테크 및 크로스보더 소비재 유통.',
    },
  },
  {
    id: 'sea-japan',
    nameEn: 'Southeast Asia ↔ Japan',
    nameKo: '동남아시아 ↔ 일본',
    originNodeId: 'sea',
    destNodeId: 'japan',
    sectors: {
      en: ['Resort Hospitality', 'Culinary Exports', 'Retail Syndication'],
      ko: ['리조트 호스피탈리티', '컬리너리 수출', '리테일 신디케이션'],
    },
    marketFocal: {
      en: 'Experiential hospitality developments, resort investments, culinary exports & ASEAN-Japan retail syndication.',
      ko: '체험형 호스피탈리티 개발, 리조트 투자, 컬리너리 수출 및 아세안-일본 리테일 신디케이션.',
    },
  },
  {
    id: 'me-nea',
    nameEn: 'Middle East ↔ Northeast Asia',
    nameKo: '중동 ↔ 동북아시아',
    originNodeId: 'middleEast',
    destNodeId: 'southKorea',
    sectors: {
      en: ['Sovereign Capital', 'Luxury Consortia', 'Mega-Projects'],
      ko: ['국부 자본 유치', '럭셔리 컨소시엄', '메가 프로젝트'],
    },
    marketFocal: {
      en: 'Sovereign & private family capital placement, luxury hospitality consortia, mega-project F&B franchising & tech partnerships.',
      ko: '국부 및 패밀리오피스 자본 유치, 하이엔드 호스피탈리티 컨소시엄, 메가 프로젝트 F&B 프랜차이즈 및 혁신 파트너십.',
    },
  },
];

export const GlobalNetworkVisual: React.FC<GlobalNetworkVisualProps> = ({ theme, lang }) => {
  const [activeCorridorId, setActiveCorridorId] = useState<string>('sea-korea');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotation states for silky transition & full spin on corridor click
  const rotationRef = useRef<number>(115); // Current rotation in degrees
  const targetRotationRef = useRef<number | null>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const pulsePhaseRef = useRef<number>(0);

  const selectedCorridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];
  const originNode = NODES.find((n) => n.id === selectedCorridor.originNodeId) || NODES[1];
  const destNode = NODES.find((n) => n.id === selectedCorridor.destNodeId) || NODES[0];

  // Handler for Corridor Button click: swiftly and smoothly centers the target corridor via shortest path
  const handleCorridorSelect = (corridorId: string) => {
    setActiveCorridorId(corridorId);
    const corr = CORRIDORS.find((c) => c.id === corridorId);
    if (!corr) return;

    const orig = NODES.find((n) => n.id === corr.originNodeId) || NODES[1];
    const dest = NODES.find((n) => n.id === corr.destNodeId) || NODES[0];

    // Calculate midpoint longitude between selected corridor hubs
    const midLng = (orig.lng + dest.lng) / 2;
    const targetDeg = ((midLng % 360) + 360) % 360;
    const currentNorm = ((rotationRef.current % 360) + 360) % 360;

    // Shortest angular difference between -180 and +180
    const diff = ((targetDeg - currentNorm + 540) % 360) - 180;

    targetRotationRef.current = rotationRef.current + diff;
    isTransitioningRef.current = true;
  };

  // Silky-smooth canvas globe rendering loop
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Handle smooth transition rotation or natural ambient spin
      if (isTransitioningRef.current && targetRotationRef.current !== null) {
        const diff = targetRotationRef.current - rotationRef.current;
        if (Math.abs(diff) > 0.25) {
          // Fast, elegant ease-out glide to target center without full 360 spin
          const step = diff * 0.12;
          rotationRef.current += step;
        } else {
          rotationRef.current = targetRotationRef.current;
          targetRotationRef.current = null;
          isTransitioningRef.current = false;
        }
      } else {
        // Continuous slow, elegant ambient rotation
        rotationRef.current = (rotationRef.current + 0.12) % 360;
      }

      pulsePhaseRef.current = (pulsePhaseRef.current + 0.04) % (Math.PI * 2);
      const rotDeg = rotationRef.current;

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;
      const radius = 88; // Balanced spherical radius

      ctx.clearRect(0, 0, width, height);

      // Coordinate 3D to 2D projection function with tilt
      const project = (lat: number, lng: number): { x: number; y: number; z: number; visible: boolean } => {
        const radLat = (lat * Math.PI) / 180;
        const radLng = ((lng - rotDeg) * Math.PI) / 180;
        const tilt = (10 * Math.PI) / 180; // 10 deg gentle axial tilt

        // Base 3D Sphere coordinates
        const x0 = radius * Math.cos(radLat) * Math.sin(radLng);
        const y0 = -radius * Math.sin(radLat);
        const z0 = radius * Math.cos(radLat) * Math.cos(radLng);

        // Apply tilt around X axis
        const y = y0 * Math.cos(tilt) - z0 * Math.sin(tilt);
        const z = y0 * Math.sin(tilt) + z0 * Math.cos(tilt);
        const x = x0;

        return {
          x: cx + x,
          y: cy + y,
          z,
          visible: z > 0, // front hemisphere
        };
      };

      // 1. Globe Background / Atmosphere (Spherical Circle)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);

      const globeGrad = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, radius);
      if (theme === 'dark') {
        globeGrad.addColorStop(0, '#0c224a');
        globeGrad.addColorStop(0.7, '#07152d');
        globeGrad.addColorStop(1, '#040b17');
      } else {
        globeGrad.addColorStop(0, '#f0f6ff');
        globeGrad.addColorStop(0.7, '#e2ecfa');
        globeGrad.addColorStop(1, '#cddcf2');
      }
      ctx.fillStyle = globeGrad;
      ctx.fill();

      // Clip to sphere for all interior drawings
      ctx.clip();

      // 2. Subtle Longitude / Latitude Grids
      ctx.strokeStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(12, 28, 79, 0.07)';
      ctx.lineWidth = 1;

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lng = 0; lng <= 360; lng += 10) {
          const pt = project(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 45) {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 10) {
          const pt = project(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 3. Simplified Continents Map
      ctx.fillStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.16)' : 'rgba(12, 28, 79, 0.13)';
      ctx.strokeStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.35)' : 'rgba(12, 28, 79, 0.28)';
      ctx.lineWidth = 1.2;

      CONTINENTS.forEach((continent) => {
        ctx.beginPath();
        let started = false;
        continent.forEach(([lat, lng]) => {
          const pt = project(lat, lng);
          if (pt.visible) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
        });
        if (started) {
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      });

      // 4. Strategic Corridor Connections (Connecting line between selected corridor hubs)
      const origProj = project(originNode.lat, originNode.lng);
      const destProj = project(destNode.lat, destNode.lng);

      if (origProj.visible || destProj.visible) {
        ctx.beginPath();
        const steps = 20;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const curLat = originNode.lat + (destNode.lat - originNode.lat) * t;
          const curLng = originNode.lng + (destNode.lng - originNode.lng) * t;
          const pt = project(curLat, curLng);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = theme === 'dark' ? '#38bdf8' : '#0c1c4f';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated traveling packet along the active corridor
        const travelT = (Math.sin(pulsePhaseRef.current) + 1) / 2;
        const packetLat = originNode.lat + (destNode.lat - originNode.lat) * travelT;
        const packetLng = originNode.lng + (destNode.lng - originNode.lng) * travelT;
        const packetPt = project(packetLat, packetLng);
        if (packetPt.visible) {
          ctx.beginPath();
          ctx.arc(packetPt.x, packetPt.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = theme === 'dark' ? '#67e8f9' : '#0284c7';
          ctx.fill();
        }
      }

      // 5. Clean, Static Node Pins
      NODES.forEach((node) => {
        const pt = project(node.lat, node.lng);
        if (!pt.visible) return;

        const isKorea = node.isHub;
        const isCorridorEndpoint = node.id === originNode.id || node.id === destNode.id;
        const isIndicator = node.isIndicatorOnly;

        // Pulsing ring for active corridor endpoints
        if (isCorridorEndpoint) {
          const pulseRadius = 6 + Math.sin(pulsePhaseRef.current) * 2;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(12, 28, 79, 0.35)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Clean circular marker
        ctx.beginPath();
        ctx.arc(
          pt.x,
          pt.y,
          isKorea ? 5.5 : isCorridorEndpoint ? 4.5 : isIndicator ? 3.5 : 3.5,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = isKorea
          ? '#38bdf8'
          : isCorridorEndpoint
          ? theme === 'dark'
            ? '#60a5fa'
            : '#0c1c4f'
          : isIndicator
          ? theme === 'dark'
            ? '#a5b4fc'
            : '#6366f1'
          : theme === 'dark'
          ? '#94a3b8'
          : '#64748b';
        ctx.fill();

        ctx.strokeStyle = theme === 'dark' ? '#07152d' : '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node Label
        ctx.font = isKorea
          ? "bold 11px 'Plus Jakarta Sans', sans-serif"
          : isCorridorEndpoint
          ? "bold 10px 'Plus Jakarta Sans', sans-serif"
          : "600 9.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = isKorea
          ? '#38bdf8'
          : isCorridorEndpoint
          ? theme === 'dark'
            ? '#ffffff'
            : '#0c1c4f'
          : isIndicator
          ? theme === 'dark'
            ? '#c7d2fe'
            : '#4f46e5'
          : theme === 'dark'
          ? '#cbd5e1'
          : '#475569';
        ctx.textAlign = 'center';

        const labelY = pt.y < cy - radius + 20 ? pt.y + 14 : pt.y - 8;
        ctx.fillText(lang === 'en' ? node.nameEn : node.nameKo, pt.x, labelY);
      });

      ctx.restore();

      // 6. Crisp Sphere Outer Rim Ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(12, 28, 79, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, lang, activeCorridorId, originNode, destNode]);

  return (
    <div
      id="global-network-radar"
      className={`w-full max-w-[540px] mx-auto rounded-3xl p-5 sm:p-6 border transition-all duration-500 flex flex-col shadow-xl ${
        theme === 'dark'
          ? 'bg-[#081225]/90 border-sky-500/20 shadow-sky-950/40 text-white'
          : 'bg-white/95 border-slate-200/90 shadow-slate-900/5 text-[#0c1c4f]'
      }`}
    >
      {/* 1. Header: Status Indicator */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span
            className={`text-xs font-bold tracking-wider uppercase font-mono ${
              theme === 'dark' ? 'text-sky-300' : 'text-[#0c1c4f]'
            }`}
          >
            {lang === 'en' ? 'LIVE STRATEGIC CORRIDORS' : '글로벌 진출 실시간 전략 회랑'}
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
            theme === 'dark'
              ? 'bg-sky-950/50 border-sky-500/30 text-sky-300'
              : 'bg-sky-50 border-sky-200 text-sky-800'
          }`}
        >
          <Radio className="w-3 h-3 text-sky-500" />
          <span>{lang === 'en' ? 'Active Cross-Border Flows' : '양방향 교류 활성화'}</span>
        </div>
      </div>

      {/* 2. Corridor Selector Buttons: 5 Principal Corridors */}
      <div className="pt-3 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
            {lang === 'en' ? 'Select Strategic Corridor:' : '전략 회랑 선택:'}
          </span>
          <span className="text-[10px] font-mono text-sky-400">
            {CORRIDORS.findIndex((c) => c.id === activeCorridorId) + 1} / {CORRIDORS.length}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {CORRIDORS.map((corridor) => {
            const isSelected = activeCorridorId === corridor.id;
            return (
              <button
                key={corridor.id}
                type="button"
                id={`corridor-btn-${corridor.id}`}
                onClick={() => handleCorridorSelect(corridor.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? theme === 'dark'
                      ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/30'
                      : 'bg-[#0c1c4f] text-white shadow-md shadow-slate-900/20'
                    : theme === 'dark'
                    ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{lang === 'en' ? corridor.nameEn : corridor.nameKo}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Smooth Rotating 3D Spherical Globe Canvas */}
      <div className="relative w-full h-[220px] flex items-center justify-center my-1 select-none">
        <canvas
          ref={canvasRef}
          width={400}
          height={220}
          className="w-[400px] h-[220px] max-w-full"
        />
      </div>

      {/* 4. Strategic Pipeline Information (Positioned UNDER globe, never covering it) */}
      <div
        className={`p-4 rounded-2xl border transition-all ${
          theme === 'dark'
            ? 'bg-[#050b14]/70 border-white/10 text-white'
            : 'bg-slate-50 border-slate-200 text-[#0c1c4f]'
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`p-2.5 rounded-xl flex-shrink-0 mt-0.5 ${
              theme === 'dark' ? 'bg-sky-500/15 text-sky-400' : 'bg-white text-[#0c1c4f] shadow-sm'
            }`}
          >
            <Globe className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-sky-400">
                <span>{lang === 'en' ? selectedCorridor.nameEn : selectedCorridor.nameKo}</span>
                <ArrowLeftRight className="w-3.5 h-3.5 opacity-80" />
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
                {lang === 'en' ? 'ACTIVE PIPELINE' : '활성 파이프라인'}
              </span>
            </div>

            <p
              className={`text-xs leading-relaxed mb-3 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {selectedCorridor.marketFocal[lang]}
            </p>

            {/* Sector Tags */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-200/60 dark:border-white/10">
              <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                <Layers className="w-3 h-3" />
                {lang === 'en' ? 'Key Focus:' : '주요 초점:'}
              </span>
              {selectedCorridor.sectors[lang].map((sec, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                    theme === 'dark'
                      ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20'
                      : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
                  }`}
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
