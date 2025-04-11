'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBackground({
  children,
  className = '',
}: GradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Transform color based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'rgb(17, 24, 39)', // Dark start
      'rgb(31, 41, 55)', // Middle transition color
      'rgb(17, 24, 39)'  // Return to dark
    ]
  );

  // Handle mouse move event
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to window percentage
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      className={`min-h-screen w-full overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {/* Dynamic gradient halo effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(120, 150, 255, 0.15), 
            transparent 40%
          )`
        }}
      />
      
      {/* 顶部光晕 */}
      <div className="absolute top-0 left-0 right-0 h-[500px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(100, 130, 255, 0.2), transparent 70%)'
        }}
      />
      
      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}