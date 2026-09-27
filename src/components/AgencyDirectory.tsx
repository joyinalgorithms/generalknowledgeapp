import React, { useState, useMemo } from 'react';
import { Search, Building, Bookmark, BookmarkCheck, CheckCircle2, Award, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { PHILIPPINE_AGENCIES } from '../data/agencies';
import { GovernmentAgency } from '../types';
import { AudioPlayerButton } from './AudioPlayerButton';

interface AgencyDirectoryProps {
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
  preselectedCode?: string | null;
  onClearPreselected?: () => void;
}

export const AgencyDirectory: React.FC<AgencyDirectoryProps> = ({
  isBookmarked,
  onToggleBookmark,
  activePlayingId,
  setActivePlayingId,
  isDark,
  preselectedCode,
  onClearPreselected
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(preselectedCode || '');
  const [selectedSector, setSelectedSector] = useState<string>('All');

  // Sectors list
  const sectors = useMemo(() => {
    const list = Array.from(new Set(PHILIPPINE_AGENCIES.map(a => a.sector)));
    return ['All', ...list];
  }, []);

  const filteredAgencies = useMemo(() => {
    return PHILIPPINE_AGENCIES.filter(agency => {
      const matchSearch =
        searchTerm === '' ||
        agency.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.filipinoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.mandate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.keyServices.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchSector = selectedSector === 'All' || agency.sector === selectedSector;

      return matchSearch && matchSector;
    });
  }, [searchTerm, selectedSector]);

  return (
    <section className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
            Republic of the Philippines · Official Directory
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Government Agencies & Acronyms
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Decipher every essential department acronym—DPWH, DOH, PhilHealth, PAGASA, RHU, SSS, and beyond—with verified mandates, citizen services, and audio pronunciations.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Showing <span className="text-emerald-500 font-bold">{filteredAgencies.length}</span> of {PHILIPPINE_AGENCIES.length} agencies
        </div>
      </div>

      {/* Search & Sector Filters */}
      <div className="flex flex-col gap-3">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (preselectedCode && onClearPreselected) {
                onClearPreselected();
              }
            }}
            placeholder="Search by acronym (DPWH, DOH, PAGASA, RHU...) or service (roads, hospitals, pensions)..."
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all outline-none ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30'
                : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20'
            }`}
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                if (onClearPreselected) onClearPreselected();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sector Interactive Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {sectors.map((sector) => {
            const isSelected = selectedSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                      : 'bg-emerald-50 text-emerald-950 border-emerald-400 shadow-sm font-semibold'
                    : isDark
                    ? 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory Grid */}
      {filteredAgencies.length === 0 ? (
        <div className={`text-center py-16 rounded-xl border ${
          isDark ? 'bg-slate-900/30 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <Building className="w-10 h-10 mx-auto mb-2 text-slate-500 opacity-60" />
          <h3 className="text-base font-semibold text-slate-300 mb-1">No agencies matching "{searchTerm}"</h3>
          <p className="text-xs max-w-sm mx-auto">
            Try searching by acronym like "DPWH", "DOH", "PhilHealth", "PAGASA", or "RHU".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredAgencies.map((agency) => {
            const bookmarked = isBookmarked(`agency-${agency.id}`);

            return (
              <div
                key={agency.id}
                className={`rounded-xl border p-5 transition-all duration-200 flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40 hover:shadow-lg'
                    : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Acronym and Sector */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className={`text-xl md:text-2xl font-black font-mono tracking-tight px-2.5 py-1 rounded border ${
                        isDark
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      }`}>
                        {agency.acronym}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400">
                        {agency.sector} · Est. {agency.establishedYear}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleBookmark(`agency-${agency.id}`)}
                      title={bookmarked ? 'Remove bookmark' : 'Bookmark this agency'}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        bookmarked
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          : isDark
                          ? 'border-slate-800 text-slate-500 hover:text-emerald-300 hover:border-emerald-500/30'
                          : 'border-slate-200 text-slate-400 hover:text-emerald-800 hover:border-emerald-400'
                      }`}
                    >
                      {bookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-current text-emerald-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Agency Full Names */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {agency.fullName}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-2.5">
                    {agency.filipinoName}
                  </p>

                  {/* Audio Pronunciation Guide */}
                  <div className={`p-2 rounded-lg border mb-3 flex items-center justify-between gap-2 text-xs font-mono ${
                    isDark ? 'bg-slate-950/70 border-slate-800/80 text-emerald-300/90' : 'bg-slate-50 border-slate-200 text-emerald-900'
                  }`}>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[10px] text-slate-400 font-sans uppercase">Pronounce:</span>
                      <span className="truncate">{agency.pronunciation}</span>
                    </div>
                  </div>

                  {/* Mandate */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {agency.mandate}
                  </p>

                  {/* Citizen Services Checklist */}
                  <div className="mb-3 space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400/80 block mb-1">
                      Key Citizen Services & Functions:
                    </span>
                    {agency.keyServices.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Fun Fact / Trivia */}
                  <div className={`p-2.5 rounded-lg border text-xs leading-relaxed ${
                    isDark ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-semibold text-emerald-500 dark:text-emerald-400 text-[10px] uppercase tracking-wider block mb-0.5">
                      Did You Know?
                    </span>
                    <p>{agency.funFact}</p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 mt-4 flex items-center justify-between">
                  <AudioPlayerButton
                    id={`agency-${agency.id}`}
                    textToSpeak={agency.audioText}
                    title={agency.fullName}
                    pronunciation={agency.pronunciation}
                    activePlayingId={activePlayingId}
                    setActivePlayingId={setActivePlayingId}
                    isDark={isDark}
                    size="sm"
                  />

                  <div className="text-[11px] text-slate-400 font-mono truncate max-w-[180px]">
                    Basis: {agency.legalBasis}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
