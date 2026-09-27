import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Sparkles, Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import { Fact } from '../types';
import { getDailyFact } from '../utils/dailyFact';
import { AudioPlayerButton } from './AudioPlayerButton';

interface DailyFactBannerProps {
  onToggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
  onSelectCategory?: (catId: string) => void;
  onInspectAcronym?: (code: string) => void;
}

export const DailyFactBanner: React.FC<DailyFactBannerProps> = ({
  onToggleBookmark,
  isBookmarked,
  activePlayingId,
  setActivePlayingId,
  isDark,
  onSelectCategory,
  onInspectAcronym
}) => {
  const [dayOffset, setDayOffset] = useState<number>(0);
  const { fact, dateLabel } = getDailyFact(dayOffset);
  const bookmarked = isBookmarked(fact.id);

  const handlePrevDay = () => setDayOffset(prev => prev - 1);
  const handleNextDay = () => setDayOffset(prev => Math.min(0, prev + 1));
  const handleResetToday = () => setDayOffset(0);

  return (
    <section className="relative overflow-hidden rounded-2xl border transition-all duration-300 mb-8 shadow-xl">
      {/* Background Graphic & Scrim */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none">
        <img
          src="/src/assets/images/ph_heritage_emerald_1790473705686.jpg"
          alt="Philippine Heritage Emblem"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 object-center mix-blend-luminosity filter contrast-125"
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/85'
            : 'bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-emerald-950/70'
        }`} />
      </div>

      {/* Decorative Emerald Accent Border */}
      <div className="relative z-10 p-6 md:p-8 text-slate-100 flex flex-col justify-between min-h-[300px]">
        {/* Top Operational Utility Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Fact of the Day
            </span>
            <span className="text-slate-500 text-xs">·</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-emerald-400/80" />
              <span>{dateLabel}</span>
            </div>
          </div>

          {/* Daily Archive Steppers */}
          <div className="flex items-center gap-1.5">
            {dayOffset !== 0 && (
              <button
                type="button"
                onClick={handleResetToday}
                className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 transition-colors mr-1 cursor-pointer"
              >
                Today
              </button>
            )}
            <button
              type="button"
              onClick={handlePrevDay}
              title="Previous day's knowledge"
              aria-label="Previous day's fact"
              className="p-1.5 rounded-lg border border-slate-700 hover:border-emerald-400 hover:bg-slate-800/80 text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextDay}
              disabled={dayOffset >= 0}
              title={dayOffset >= 0 ? "You're viewing today's knowledge" : "Next day's knowledge"}
              aria-label="Next day's fact"
              className={`p-1.5 rounded-lg border text-slate-300 transition-colors cursor-pointer ${
                dayOffset >= 0
                  ? 'border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                  : 'border-slate-700 hover:border-emerald-400 hover:bg-slate-800/80'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Headline & Core Insight */}
        <div className="max-w-3xl my-2">
          <div className="text-xs uppercase tracking-wider text-emerald-400/80 font-mono mb-2">
            Essential Civic & Intellectual Knowledge
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            {fact.title}
          </h2>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 backdrop-blur-sm mb-4">
            <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
              "{fact.digest}"
            </p>
          </div>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-2 hover:line-clamp-none transition-all">
            {fact.deepDive}
          </p>

          {fact.acronymDetails && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-emerald-300 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                {fact.acronymDetails.code}
              </span>
              <span className="text-xs text-slate-300">
                {fact.acronymDetails.standsFor}
              </span>
              {onInspectAcronym && (
                <button
                  type="button"
                  onClick={() => onInspectAcronym(fact.acronymDetails!.code)}
                  className="text-xs text-emerald-400 underline underline-offset-2 ml-1 cursor-pointer"
                >
                  Inspect agency
                </button>
              )}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 mt-4">
          <div className="flex items-center gap-3">
            <AudioPlayerButton
              id={`daily-${fact.id}`}
              textToSpeak={fact.audioNarrative || `${fact.title}. ${fact.digest} ${fact.deepDive}`}
              title={fact.title}
              pronunciation={fact.pronunciation}
              activePlayingId={activePlayingId}
              setActivePlayingId={setActivePlayingId}
              isDark={true}
              size="md"
            />

            <button
              type="button"
              onClick={() => onToggleBookmark(fact.id)}
              className={`h-9 px-3 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                bookmarked
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-900/60 border-slate-700 hover:border-emerald-400 text-slate-200'
              }`}
            >
              {bookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark Daily Fact</span>
                </>
              )}
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Source:</span>
            <span className="text-slate-300 italic">{fact.citation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
