'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'border' | 'scale';
  glowColor?: string;
}

export default function HoverCard({
  children,
  className = '',
  hoverEffect = 'lift',
  glowColor = 'rgba(80, 130, 255, 0.5)',
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getHoverStyles = () => {
    switch (hoverEffect) {
      case 'lift':
        return {
          y: isHovered ? -8 : 0,
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 0 0 0 transparent',
        };
      case 'glow':
        return {
          boxShadow: isHovered ? `0 0 20px 5px ${glowColor}` : '0 0 0 0 transparent',
        };
      case 'border':
        return {
          outline: isHovered ? '2px solid rgba(255, 255, 255, 0.2)' : 'none',
          scale: isHovered ? 1.02 : 1,
        };
      case 'scale':
        return {
          scale: isHovered ? 1.05 : 1,
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      animate={getHoverStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
}