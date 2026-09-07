import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export const FadeSection: React.FC<FadeSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  once = true,
  amount = 'some',
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
