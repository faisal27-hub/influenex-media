import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { creators, creatorCategories } from '../../data/creators';
import CreatorCard from './CreatorCard';

export default function CreatorGrid() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = creators.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.handle.toLowerCase().includes(search.toLowerCase()) ||
      c.niche.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search + Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-455 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search creators by name, handle, or niche..."
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 outline-none focus:border-accent/50 focus:bg-[#05010f] focus:ring-4 focus:ring-purple-500/5 transition-all duration-300"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          {creatorCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-white shadow-md shadow-purple-650/10'
                  : 'bg-white/5 border border-white/5 text-slate-355 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-400 text-sm font-mono">
          {filtered.length} creator{filtered.length !== 1 ? 's' : ''} found
        </p>
        {(search || activeCategory !== 'All') && (
          <button
            onClick={() => { setSearch(''); setActiveCategory('All'); }}
            className="text-accent text-xs hover:opacity-80 transition-opacity flex items-center gap-1 font-semibold"
          >
            <X size={12} /> Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((creator, i) => (
              <CreatorCard key={creator.id} creator={creator} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-white font-semibold mb-2 transition-colors duration-300">No creators found</h3>
            <p className="text-slate-400 text-sm transition-colors duration-300">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
