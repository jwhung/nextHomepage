'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import HoverCard from './HoverCard';

interface ResearchCardProps {
  title: string;
  imageUrl: string;
  methodology: string;
  findings?: string;
  impact?: string;
  className?: string;
}

export default function ResearchCard({
  title,
  imageUrl,
  methodology,
  findings = 'Discovered key pain points and needs of users when using the product',
  impact = 'Influenced product roadmap and feature prioritization',
  className = '',
}: ResearchCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 rounded-xl overflow-hidden shadow-xl ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-400 mb-1 block">Research Methodology</span>
          <p className="text-zinc-300">{methodology}</p>
        </div>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-400 mb-1 block">Key Findings</span>
          <p className="text-zinc-300">{findings}</p>
        </div>
        
        <div>
          <span className="text-sm font-medium text-blue-400 mb-1 block">Business Impact</span>
          <p className="text-zinc-300">{impact}</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-4 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors"
        >
          SHOW MORE
        </motion.button>
      </div>
    </motion.div>
  );
}