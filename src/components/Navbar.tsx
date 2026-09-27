import React from 'react';
import { Sun, Moon, Bookmark, Award, Building2, BookOpen, Sparkles, BarChart2 } from 'lucide-react';

export type ActiveTab = 'explore' | 'agencies' | 'daily' | 'quiz' | 'scores' | 'bookmarks';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  bookmarksCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  onToggleTheme,
  bookmarksCount
}) => {
  return (
    <>
      {/* Desktop / Main Top Navigation Bar (Zone 1 - Zone 2 - Zone 3) */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors border-b ${
        isDark
          ? 'bg-slate-950/90 border-slate-800/80 text-slate-100'
          : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark (Executive emerald & cyan insignia) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('explore')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 flex items-center justify-center text-white font-black shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-serif text-base tracking-tighter">D</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight font-serif text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  DID YOU KNOW
                </span>
                <span className="hidden sm:inline text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest ml-2 uppercase">
                  Atlas ng Bayan
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('explore')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'explore'
                  ? isDark
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-emerald-950 bg-emerald-50 border border-emerald-300'
                  : isDark
                  ? 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Explore Facts
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('agencies')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'agencies'
                  ? isDark
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-emerald-950 bg-emerald-50 border border-emerald-300'
                  : isDark
                  ? 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Agencies & Acronyms
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('daily')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'daily'
                  ? isDark
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-emerald-950 bg-emerald-50 border border-emerald-300'
                  : isDark
                  ? 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Daily Insight
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'quiz'
                  ? isDark
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-emerald-950 bg-emerald-50 border border-emerald-300'
                  : isDark
                  ? 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Quiz Arena
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('scores')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'scores'
                  ? isDark
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                    : 'text-emerald-950 bg-emerald-50 border border-emerald-300'
                  : isDark
                  ? 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Weekly Scores
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Theme Toggle & Bookmarks) */}
          <div className="flex items-center gap-2">
            {/* Bookmarks Counter Button */}
            <button
              type="button"
              onClick={() => setActiveTab('bookmarks')}
              title="View Bookmarks"
              aria-label="View Bookmarks"
              className={`h-9 px-3 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'bookmarks'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : isDark
                  ? 'border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-slate-700 bg-slate-900/60'
                  : 'border-slate-200 text-slate-700 hover:text-emerald-900 hover:border-emerald-300 bg-slate-50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Bookmarks</span>
              {bookmarksCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-slate-950">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`h-9 w-9 flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'border-slate-800 bg-slate-900/80 text-emerald-400 hover:bg-slate-800 hover:border-emerald-500/40'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-emerald-900 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav aria-label="Mobile Navigation" className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md ${
        isDark
          ? 'bg-slate-950/95 border-slate-800/90 text-slate-400'
          : 'bg-white/95 border-slate-200 text-slate-600 shadow-lg'
      }`}>
        <div className="grid grid-cols-5 h-14 max-w-lg mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'explore' ? 'text-emerald-500 font-bold' : 'hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px] tracking-tight">Facts</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('agencies')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'agencies' ? 'text-emerald-500 font-bold' : 'hover:text-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span className="text-[10px] tracking-tight">Agencies</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('daily')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'daily' ? 'text-emerald-500 font-bold' : 'hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] tracking-tight">Daily</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'quiz' ? 'text-emerald-500 font-bold' : 'hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="text-[10px] tracking-tight">Quiz</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('scores')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'scores' ? 'text-emerald-500 font-bold' : 'hover:text-slate-200'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span className="text-[10px] tracking-tight">Scores</span>
          </button>
        </div>
      </nav>
    </>
  );
};
