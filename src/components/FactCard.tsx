import React, { useState } from 'react';
import { Bookmark, BookmarkCheck, Share2, Check, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { Fact } from '../types';
import { AudioPlayerButton } from './AudioPlayerButton';
import { getFactNarration, getFactSimpleDefinition } from '../utils/audioSpeech';

interface FactCardProps {
  fact: Fact;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
  onInspectAcronym?: (code: string) => void;
}

export const FactCard: React.FC<FactCardProps> = ({
  fact,
  isBookmarked,
  onToggleBookmark,
  activePlayingId,
  setActivePlayingId,
  isDark,
  onInspectAcronym
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `Did you know? ${fact.title}\n\n${fact.digest}\n\nSource: ${fact.citation} via Did you Know`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  // Category labels without pills
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'ph_gov': return 'Philippine Governance';
      case 'ph_agency': return 'Government Agency';
      case 'filipino': return 'Filipino Heritage';
      case 'banks_finance': return 'Banking & Finance';
      case 'myths_debunked': return 'Debunked Myth';
      case 'biology_animals': return 'Animals & Biology';
      case 'chemistry_nutrition': return 'Chemistry & Nutrition';
      case 'tech_ai': return 'Tech, AI & Security';
      case 'forensics_psych': return 'Forensics & Psychology';
      case 'arts_colors': return 'Color Theory';
      case 'language_english': return 'English & Linguistics';
      case 'science': return 'Natural Science';
      case 'galaxy': return 'Cosmic & Space';
      case 'math': return 'Mathematics & Logic';
      case 'world': return 'World Extremes';
      case 'civics': return 'Citizen Rights';
      default: return 'Knowledge Spark';
    }
  };

  return (
    <article
      className={`group relative rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isDark
          ? 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/30'
          : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-950/5'
      }`}
    >
      {/* Visual Accent Top Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex items-center flex-wrap gap-2 text-xs mb-2.5 text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase text-[11px]">
              {getCategoryLabel(fact.category)}
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Fact-Checked</span>
            {fact.tags?.[0] && (
              <>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="italic">{fact.tags[0]}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-lg font-bold leading-snug tracking-tight mb-3 transition-colors ${
              isDark ? 'text-slate-100 group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-800'
            }`}
          >
            {fact.title}
          </h3>

          {/* Pronunciation cue if present */}
          {fact.pronunciation && (
            <div className={`mb-3 text-xs flex items-center gap-1.5 font-mono px-2.5 py-1 rounded border ${
              isDark ? 'bg-slate-950/60 text-emerald-300/90 border-emerald-500/20' : 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
            }`}>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans">Pronunciation:</span>
              <span className="font-medium">{fact.pronunciation}</span>
            </div>
          )}

          {/* Plain-language definition */}
          <div
            className={`p-3.5 rounded-lg border-l-2 mb-4 leading-relaxed text-sm ${
              isDark
                ? 'bg-slate-950/50 border-emerald-500 text-slate-300'
                : 'bg-slate-50 border-emerald-600 text-slate-800'
            }`}
          >
            <p className="font-medium text-emerald-600 dark:text-emerald-400 text-xs mb-1 uppercase tracking-wider">
              Simple Definition
            </p>
            <p>{getFactSimpleDefinition(fact)}</p>
          </div>

          {/* Acronym Quick Decoder trigger */}
          {fact.acronymDetails && (
            <div className={`mb-3.5 p-3 rounded-lg border text-xs ${
              isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300' : 'bg-emerald-50/50 border-emerald-200 text-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold font-mono text-emerald-500 dark:text-emerald-400">
                  {fact.acronymDetails.code}
                </span>
                {onInspectAcronym && (
                  <button
                    type="button"
                    onClick={() => onInspectAcronym(fact.acronymDetails!.code)}
                    className="text-[11px] underline underline-offset-2 hover:text-emerald-400 transition-colors"
                  >
                    View Full Agency File →
                  </button>
                )}
              </div>
              <p className="font-semibold">{fact.acronymDetails.standsFor}</p>
              {fact.acronymDetails.filipinoTitle && (
                <p className="italic text-slate-400 text-[11px] mt-0.5">{fact.acronymDetails.filipinoTitle}</p>
              )}
            </div>
          )}

          {/* Expandable Deep Dive & Context */}
          {isExpanded && (
            <div className="space-y-3 pt-2 text-xs leading-relaxed text-slate-400 border-t border-slate-200 dark:border-slate-800 mb-4 animate-fadeIn">
              <div>
                <span className="font-semibold text-slate-300 block mb-1">Verified Context:</span>
                <p>{fact.deepDive}</p>
              </div>

              {fact.funFact && (
                <div className={`p-2.5 rounded border ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  <span className="font-semibold text-emerald-400 text-[11px] uppercase tracking-wider block mb-0.5">
                    Trivia Tidbit:
                  </span>
                  <p>{fact.funFact}</p>
                </div>
              )}

              <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                <span className="font-semibold">Authority / Source: </span>
                <span className="italic">{fact.citation}</span>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer / Action Bar */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2 mt-2">
          {/* Audio Narration Button */}
          <AudioPlayerButton
            id={fact.id}
            textToSpeak={getFactNarration(fact)}
            title={fact.title}
            pronunciation={fact.pronunciation}
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
            isDark={isDark}
            size="sm"
          />

          <div className="flex items-center gap-1.5">
            {/* Deep dive toggle */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse context' : 'Expand full context'}
              className={`h-8 px-2.5 rounded-lg border text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                isDark
                  ? 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 bg-slate-900/50'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 bg-slate-50'
              }`}
            >
              <span>{isExpanded ? 'Less' : 'Context'}</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Share / Copy */}
            <button
              type="button"
              onClick={handleCopy}
              title={copied ? 'Copied to clipboard!' : 'Copy fact'}
              aria-label="Copy fact text"
              className={`h-8 w-8 flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                  : isDark
                  ? 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-emerald-300 bg-slate-900/50'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:text-emerald-800 bg-slate-50'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            {/* Bookmark button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(fact.id);
              }}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this fact'}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this fact'}
              className={`h-8 w-8 flex items-center justify-center rounded-lg border transition-all cursor-pointer ${
                isBookmarked
                  ? isDark
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-sm'
                    : 'bg-emerald-100 text-emerald-800 border-emerald-400 shadow-sm'
                  : isDark
                  ? 'border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 bg-slate-900/50'
                  : 'border-slate-200 hover:border-emerald-400 text-slate-600 hover:text-emerald-800 bg-slate-50'
              }`}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4 fill-current text-emerald-400" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
