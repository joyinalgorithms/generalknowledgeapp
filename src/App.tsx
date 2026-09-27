import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { ExploreView } from './components/ExploreView';
import { AgencyDirectory } from './components/AgencyDirectory';
import { DailyFactBanner } from './components/DailyFactBanner';
import { QuizArena } from './components/QuizArena';
import { WeeklyScoresView } from './components/WeeklyScoresView';
import { BookmarksView } from './components/BookmarksView';
import { CategoryId, QuizScoreEntry } from './types';
import { getSavedBookmarks, toggleSavedBookmark, getStoredTheme, setStoredTheme } from './utils/storage';
import { audioSpeech } from './utils/audioSpeech';
import { Landmark, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeTab, setActiveTab] = useState<ActiveTab>('explore');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [preselectedAgencyCode, setPreselectedAgencyCode] = useState<string | null>(null);

  // Initialize theme and bookmarks
  useEffect(() => {
    const savedTheme = getStoredTheme();
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setBookmarkedIds(getSavedBookmarks());
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setStoredTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleToggleBookmark = (id: string) => {
    const updated = toggleSavedBookmark(id);
    setBookmarkedIds(updated);
  };

  const handleInspectAcronym = (code: string) => {
    setPreselectedAgencyCode(code);
    setActiveTab('agencies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stop ongoing audio whenever switching main tabs
  const handleTabChange = (newTab: ActiveTab) => {
    if (activePlayingId) {
      audioSpeech.stop();
      setActivePlayingId(null);
    }
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark
          ? 'bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300'
          : 'bg-[#F8FAFC] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950'
      }`}
    >
      {/* Top Header Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        bookmarksCount={bookmarkedIds.length}
      />

      {/* Main Content Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 lg:pb-16">
        {activeTab === 'explore' && (
          <ExploreView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
            isDark={isDark}
            onInspectAcronym={handleInspectAcronym}
          />
        )}

        {activeTab === 'agencies' && (
          <AgencyDirectory
            isBookmarked={(id) => bookmarkedIds.includes(id)}
            onToggleBookmark={handleToggleBookmark}
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
            isDark={isDark}
            preselectedCode={preselectedAgencyCode}
            onClearPreselected={() => setPreselectedAgencyCode(null)}
          />
        )}

        {activeTab === 'daily' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
                24-Hour Cycle Knowledge Spark
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Daily Knowledge & Archival Rotation
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                Every single day, Did you Know surfaces an authoritative insight from Philippine governance, constitutional history, or universal science.
              </p>
            </div>

            <DailyFactBanner
              onToggleBookmark={handleToggleBookmark}
              isBookmarked={(id) => bookmarkedIds.includes(id)}
              activePlayingId={activePlayingId}
              setActivePlayingId={setActivePlayingId}
              isDark={isDark}
              onInspectAcronym={handleInspectAcronym}
            />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
                Active Recall & Self Assessment
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Knowledge Retention Quiz Arena
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                Strengthen your memory of Philippine government agencies (DPWH, DOH, PhilHealth, PAGASA, RHU) and global trivia. Your results are logged automatically into weekly records.
              </p>
            </div>

            <QuizArena
              onScoreSaved={() => {}}
              onNavigateWeeklyScores={() => handleTabChange('scores')}
              activePlayingId={activePlayingId}
              setActivePlayingId={setActivePlayingId}
              isDark={isDark}
            />
          </div>
        )}

        {activeTab === 'scores' && (
          <WeeklyScoresView
            onStartQuiz={() => handleTabChange('quiz')}
            isDark={isDark}
          />
        )}

        {activeTab === 'bookmarks' && (
          <BookmarksView
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
            isDark={isDark}
            onNavigateExplore={() => handleTabChange('explore')}
            onInspectAcronym={handleInspectAcronym}
          />
        )}
      </main>

      {/* Editorial Prestige Footer */}
      <footer className={`border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800/80 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-serif font-black text-[10px]">
              A
            </div>
            <span className="font-semibold text-slate-300 dark:text-slate-300">
              DID YOU KNOW · Philippine Civics & Universal Knowledge Atlas
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Client-side persistent storage</span>
            <span aria-hidden="true">·</span>
            <span>Fact-checked against official Philippine Republic statutes</span>
            <span aria-hidden="true">·</span>
            <span>Speech Synthesis Audio Narration</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
