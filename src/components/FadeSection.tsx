import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const FadeSection: React.FC<FadeSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.18, margin: '-40px 0px -40px 0px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
