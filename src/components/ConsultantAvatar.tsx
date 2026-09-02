import React from 'react';
import { Linkedin } from 'lucide-react';
import consultantPhoto from '../assets/images/regenerated_image_1788279539498.png';

interface ConsultantAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showBadge?: boolean;
}

export const ConsultantAvatar: React.FC<ConsultantAvatarProps> = ({
  size = 'md',
  className = '',
  showBadge = true,
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const badgeSizeMap = {
    sm: 'w-4 h-4 p-0.5',
    md: 'w-6 h-6 p-1',
    lg: 'w-7 h-7 p-1.5',
  };

  return (
    <a
      href="https://www.linkedin.com/in/youngjunyu/"
      target="_blank"
      rel="noopener noreferrer"
      title="Youngjun Yu - Principal Consultant (View LinkedIn Profile)"
      className={`relative group inline-block focus:outline-none flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}
      id="principal-consultant-linkedin-link"
    >
      {/* Circular Profile Photo Frame */}
      <div
        className={`${sizeMap[size]} rounded-full overflow-hidden border-2 border-sky-400/80 shadow-lg shadow-sky-950/40 group-hover:border-sky-300 group-hover:shadow-sky-400/40 transition-all duration-300 bg-slate-900`}
      >
        <img
          src={consultantPhoto}
          alt="Youngjun Yu - Principal Consultant"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/youngjun-yu.png';
          }}
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Official LinkedIn Icon Badge */}
      {showBadge && (
        <span
          className={`absolute -bottom-1 -right-1 bg-[#0a66c2] text-white rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-md group-hover:bg-[#004182] transition-colors ${badgeSizeMap[size]}`}
          title="LinkedIn Profile Verified"
        >
          <Linkedin className="w-full h-full fill-current" />
        </span>
      )}
    </a>
  );
};

export default ConsultantAvatar;
