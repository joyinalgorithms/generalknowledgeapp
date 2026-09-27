import React, { useState, useMemo } from 'react';
import { Bookmark, Search, Trash2, ArrowRight } from 'lucide-react';
import { FACTS } from '../data/facts';
import { PHILIPPINE_AGENCIES } from '../data/agencies';
import { FactCard } from './FactCard';
import { AudioPlayerButton } from './AudioPlayerButton';

interface BookmarksViewProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
  onNavigateExplore: () => void;
  onInspectAcronym?: (code: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  activePlayingId,
  setActivePlayingId,
  isDark,
  onNavigateExplore,
  onInspectAcronym
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract saved facts
  const bookmarkedFacts = useMemo(() => {
    return FACTS.filter(f => bookmarkedIds.includes(f.id)).filter(f => 
      searchQuery === '' ||
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.digest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [bookmarkedIds, searchQuery]);

  // Extract saved agencies
  const bookmarkedAgencies = useMemo(() => {
    return PHILIPPINE_AGENCIES.filter(a => bookmarkedIds.includes(`agency-${a.id}`)).filter(a =>
      searchQuery === '' ||
      a.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.mandate.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [bookmarkedIds, searchQuery]);

  const totalBookmarks = bookmarkedIds.length;

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
            Personal Knowledge Vault
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            My Saved Bookmarks
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Review your collection of saved civic insights, government agency directories, and intellectual trivia. Stored locally without requiring login.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          <span className="text-emerald-500 font-bold">{totalBookmarks}</span> saved items
        </div>
      </div>

      {totalBookmarks > 0 && (
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within your saved bookmarks..."
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all outline-none ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30'
                : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20'
            }`}
          />
        </div>
      )}

      {totalBookmarks === 0 ? (
        <div className={`p-16 text-center rounded-2xl border ${
          isDark ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <Bookmark className="w-12 h-12 mx-auto mb-3 text-slate-600 opacity-60" />
          <h3 className="text-lg font-bold text-slate-200 mb-1">No Bookmarks Saved Yet</h3>
          <p className="text-xs max-w-md mx-auto mb-5">
            Click the bookmark icon on any Philippine government fact, agency acronym card, or scientific trivia to preserve it here for offline revision.
          </p>
          <button
            type="button"
            onClick={onNavigateExplore}
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Explore Knowledge Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Saved Agencies */}
          {bookmarkedAgencies.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3">
                Saved Agencies ({bookmarkedAgencies.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedAgencies.map((agency) => (
                  <div
                    key={agency.id}
                    className={`rounded-xl border p-4 flex flex-col justify-between ${
                      isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-mono font-bold text-lg text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                          {agency.acronym}
                        </span>
                        <button
                          type="button"
                          onClick={() => onToggleBookmark(`agency-${agency.id}`)}
                          className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="font-bold text-sm text-slate-100">{agency.fullName}</h4>
                      <p className="text-xs text-slate-400 italic mb-2">{agency.filipinoName}</p>
                      <p className="text-xs text-slate-300 line-clamp-2">{agency.mandate}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 mt-3 flex items-center justify-between">
                      <AudioPlayerButton
                        id={`bm-agency-${agency.id}`}
                        textToSpeak={agency.audioText}
                        activePlayingId={activePlayingId}
                        setActivePlayingId={setActivePlayingId}
                        isDark={isDark}
                        size="sm"
                      />
                      <span className="text-[10px] text-slate-400 uppercase">{agency.sector}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Facts */}
          {bookmarkedFacts.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3">
                Saved Did You Know Facts ({bookmarkedFacts.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {bookmarkedFacts.map((fact) => (
                  <FactCard
                    key={fact.id}
                    fact={fact}
                    isBookmarked={true}
                    onToggleBookmark={onToggleBookmark}
                    activePlayingId={activePlayingId}
                    setActivePlayingId={setActivePlayingId}
                    isDark={isDark}
                    onInspectAcronym={onInspectAcronym}
                  />
                ))}
              </div>
            </div>
          )}

          {bookmarkedAgencies.length === 0 && bookmarkedFacts.length === 0 && (
            <div className="text-center py-10 text-slate-500 text-xs">
              No bookmarks found matching "{searchQuery}".
            </div>
          )}
        </div>
      )}
    </section>
  );
};
