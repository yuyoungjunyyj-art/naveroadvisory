import React from 'react';
import { Theme } from '../types';

interface NaveroLogoProps {
  theme?: Theme;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NaveroLogo: React.FC<NaveroLogoProps> = ({
  theme = 'light',
  variant = 'auto',
  size = 'md',
  align = 'left',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark' || (variant === 'auto' && theme === 'dark');

  // Height configurations calibrated for crisp navbar and footer display
  const heightConfig = {
    xs: 'h-7',
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  }[size];

  // Colors matched directly to the official NAVERO brand asset
  const primaryColor = isDark ? '#ffffff' : '#00205B';
  const subtitleColor = isDark ? '#cbd5e1' : '#00205B';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer transition-transform duration-200 active:scale-95 ${className}`}
      title="NAVERO - Korea Market Entry & Advisory"
      style={{
        display: 'inline-flex',
        alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      <svg
        viewBox="0 0 620 140"
        className={`${heightConfig} w-auto transition-colors duration-300`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          color: primaryColor,
          overflow: 'visible',
        }}
      >
        <defs>
          <style>
            {`
              .nv-main-title {
                font-family: 'Montserrat', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-weight: 700;
              }
              .nv-main-subtitle {
                font-family: 'Montserrat', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-weight: 600;
              }
            `}
          </style>
        </defs>

        {/* Primary Brand Text: NAVERO (Spans width 520, centered at 310) */}
        <text
          x="310"
          y="70"
          textAnchor="middle"
          fill={primaryColor}
          className="nv-main-title"
          fontSize="64"
          textLength="520"
          lengthAdjust="spacing"
        >
          NAVERO
        </text>

        {/* Subtitle: KOREA MARKET ENTRY & ADVISORY (Spans width 514, strictly bounded inside NAVERO) */}
        {showSubtitle && (
          <text
            x="310"
            y="114"
            textAnchor="middle"
            fill={subtitleColor}
            className="nv-main-subtitle"
            fontSize="15.5"
            textLength="514"
            lengthAdjust="spacing"
            opacity={isDark ? '0.92' : '1'}
          >
            KOREA MARKET ENTRY &amp; ADVISORY
          </text>
        )}
      </svg>
    </div>
  );
};

export default NaveroLogo;
