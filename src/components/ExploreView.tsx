import React, { useState, useMemo } from 'react';
import { 
  Search, Sparkles, Filter, Landmark, Building2, Sun, Atom, Orbit, Binary, 
  Globe2, Scale, BookOpen, BadgeDollarSign, AlertCircle, Dna, FlaskConical, 
  Cpu, Fingerprint, Palette, Type 
} from 'lucide-react';
import { FACTS, CATEGORIES } from '../data/facts';
import { Fact, CategoryId } from '../types';
import { FactCard } from './FactCard';
import { DailyFactBanner } from './DailyFactBanner';

interface ExploreViewProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
  onInspectAcronym: (code: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  selectedCategory,
  onSelectCategory,
  bookmarkedIds,
  onToggleBookmark,
  activePlayingId,
  setActivePlayingId,
  isDark,
  onInspectAcronym
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Available tags in current category
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    FACTS.forEach(f => {
      if (selectedCategory === 'all' || f.category === selectedCategory) {
        f.tags.forEach(t => tags.add(t));
      }
    });
    return Array.from(tags).slice(0, 10);
  }, [selectedCategory]);

  const filteredFacts = useMemo(() => {
    return FACTS.filter(fact => {
      const matchCat = selectedCategory === 'all' || fact.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        fact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fact.digest.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fact.deepDive.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fact.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fact.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchTag = !selectedTag || fact.tags.includes(selectedTag);

      return matchCat && matchSearch && matchTag;
    });
  }, [selectedCategory, searchQuery, selectedTag]);

  // Helper for icon rendering
  const renderCatIcon = (id: CategoryId) => {
    switch (id) {
      case 'ph_gov': return <Landmark className="w-3.5 h-3.5" />;
      case 'ph_agency': return <Building2 className="w-3.5 h-3.5" />;
      case 'filipino': return <Sun className="w-3.5 h-3.5" />;
      case 'banks_finance': return <BadgeDollarSign className="w-3.5 h-3.5" />;
      case 'myths_debunked': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'biology_animals': return <Dna className="w-3.5 h-3.5" />;
      case 'chemistry_nutrition': return <FlaskConical className="w-3.5 h-3.5" />;
      case 'tech_ai': return <Cpu className="w-3.5 h-3.5" />;
      case 'forensics_psych': return <Fingerprint className="w-3.5 h-3.5" />;
      case 'arts_colors': return <Palette className="w-3.5 h-3.5" />;
      case 'language_english': return <Type className="w-3.5 h-3.5" />;
      case 'science': return <Atom className="w-3.5 h-3.5" />;
      case 'galaxy': return <Orbit className="w-3.5 h-3.5" />;
      case 'math': return <Binary className="w-3.5 h-3.5" />;
      case 'world': return <Globe2 className="w-3.5 h-3.5" />;
      case 'civics': return <Scale className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Featured Daily Fact Marquee */}
      <DailyFactBanner
        onToggleBookmark={onToggleBookmark}
        isBookmarked={(id) => bookmarkedIds.includes(id)}
        activePlayingId={activePlayingId}
        setActivePlayingId={setActivePlayingId}
        isDark={isDark}
        onSelectCategory={(cat) => onSelectCategory(cat as CategoryId)}
        onInspectAcronym={onInspectAcronym}
      />

      {/* Category Segmented Interactive Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400">
            Browse Knowledge Categories
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {filteredFacts.length} facts available
          </span>
        </div>

        {/* Scrollable Category Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  onSelectCategory(cat.id);
                  setSelectedTag(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-sm ring-1 ring-emerald-500/30'
                      : 'bg-emerald-50 text-emerald-950 border-emerald-400 shadow-sm ring-1 ring-emerald-400/40'
                    : isDark
                    ? 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className={isSelected ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-400'}>
                  {renderCatIcon(cat.id)}
                </span>
                <span>{cat.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search and Tag Refinement */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Did You Know facts (e.g. Senate, 1987 Constitution, Speed of Light, DPWH)..."
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all outline-none ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30'
                : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Tag Pills */}
        {allTags.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[11px] text-slate-400 shrink-0 hidden md:inline">Topic:</span>
            {allTags.map((tag) => {
              const isTagActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(isTagActive ? null : tag)}
                  className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors border cursor-pointer ${
                    isTagActive
                      ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                      : isDark
                      ? 'border-slate-800 text-slate-400 hover:text-slate-200 bg-slate-900/40'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-slate-100'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Facts Card Grid */}
      {filteredFacts.length === 0 ? (
        <div className={`p-16 text-center rounded-2xl border ${
          isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-500 opacity-60" />
          <h3 className="text-lg font-bold text-slate-200 mb-1">No Facts Found</h3>
          <p className="text-xs max-w-sm mx-auto mb-4">
            Try adjusting your search query or reset the category filter to explore all verified knowledge.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
              onSelectCategory('all');
            }}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFacts.map((fact) => (
            <FactCard
              key={fact.id}
              fact={fact}
              isBookmarked={bookmarkedIds.includes(fact.id)}
              onToggleBookmark={onToggleBookmark}
              activePlayingId={activePlayingId}
              setActivePlayingId={setActivePlayingId}
              isDark={isDark}
              onInspectAcronym={onInspectAcronym}
            />
          ))}
        </div>
      )}
    </div>
  );
};
