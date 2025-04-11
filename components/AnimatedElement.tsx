'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideRight' | 'scale' | 'bounce';

interface AnimatedElementProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedElement({
  children,
  type = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
}: AnimatedElementProps) {
  const variants: Record<AnimationType, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 10,
        }
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants[type]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}