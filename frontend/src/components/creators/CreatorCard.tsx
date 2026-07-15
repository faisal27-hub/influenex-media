import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, TrendingUp } from 'lucide-react';
import type { Creator } from '../../data/creators';

interface CreatorCardProps {
  creator: Creator;
  index: number;
}

const platformColors: Record<string, string> = {
  Instagram: 'from-pink-500/10 to-purple-500/10 border-pink-500/20 text-pink-400',
  YouTube: 'from-red-500/10 to-red-500/20 border-red-500/20 text-red-400',
  TikTok: 'from-slate-500/10 to-slate-500/20 border-slate-500/20 text-slate-300',
};

export default function CreatorCard({ creator, index }: CreatorCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="creator-card group flex flex-col"
    >
      {/* Card Top */}
      <div className="relative p-6 pb-0">
        {/* Background shimmer on hover */}
        <div className="absolute inset-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, var(--primary-light) 0%, transparent 70%)' }}
        />

        {/* Header Row */}
        <div className="relative flex items-start justify-between mb-5">
          {/* Avatar */}
          <div className="relative">
            {!imgError ? (
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 shadow-md"
                onError={() => setImgError(true)}
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                {creator.name.charAt(0)}
              </div>
            )}
            {/* Online dot */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#05010f]" />
          </div>

          {/* Platform Badge */}
          <div className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r border ${platformColors[creator.platform] || 'from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-accent'}`}>
            {creator.platform}
          </div>
        </div>

        {/* Handle & Name */}
        <div className="relative mb-4">
          <h3 className="font-display font-bold text-white text-lg leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
            {creator.name}
          </h3>
          <p className="text-accent text-sm font-mono">{creator.handle}</p>
        </div>

        {/* Stats Row */}
        <div className="relative grid grid-cols-2 gap-2 sm:gap-3 mb-5">
          <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5 min-w-0">
            <Users size={14} className="text-accent shrink-0" />
            <div className="min-w-0">
              <div className="text-white font-bold text-xs sm:text-sm truncate">{creator.followers}</div>
              <div className="text-slate-400 text-[10px] sm:text-xs truncate">Followers</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5 min-w-0">
            <TrendingUp size={14} className="text-cyan-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-white font-bold text-xs sm:text-sm truncate">{creator.engagement}</div>
              <div className="text-slate-400 text-[10px] sm:text-xs truncate">Engagement</div>
            </div>
          </div>
        </div>

        {/* Niche Badge */}
        <div className="mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wide bg-white/5 border border-white/5 text-slate-400">
            {creator.niche}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        {/* Tagline */}
        <p className="text-slate-300 text-sm leading-relaxed italic mb-4 flex-1">
          {creator.tagline}
        </p>

        {/* Proof */}
        <p className="text-slate-400 text-xs leading-relaxed mb-5">
          {creator.proof}
        </p>

        {/* Language + Category */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 mb-5">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <span>🌐</span> {creator.language}
          </div>
          <div className="hidden sm:block w-px h-3 bg-slate-800" />
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <span>📁</span> {creator.category}
          </div>
        </div>

        {/* CTA */}
        <a
          href={creator.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center justify-between w-full px-4 py-3 rounded-2xl transition-all duration-300 text-sm font-semibold border border-accent/20 bg-accent/5 text-accent hover:bg-accent/10 hover:border-accent/40"
        >
          <span>View Profile</span>
          <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
