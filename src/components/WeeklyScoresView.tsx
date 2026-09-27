import React, { useMemo } from 'react';
import { BarChart3, TrendingUp, Calendar, CheckCircle2, RotateCcw, Award, Trash2 } from 'lucide-react';
import { getWeeklySummaries, getWeekKey } from '../utils/storage';
import { WeeklyScoreSummary } from '../types';

interface WeeklyScoresViewProps {
  onStartQuiz: () => void;
  isDark: boolean;
}

export const WeeklyScoresView: React.FC<WeeklyScoresViewProps> = ({
  onStartQuiz,
  isDark
}) => {
  const summaries: WeeklyScoreSummary[] = useMemo(() => {
    return getWeeklySummaries();
  }, []);

  const currentWeekKey = getWeekKey(new Date());
  const currentWeek = summaries.find(s => s.weekKey === currentWeekKey);

  const totalQuizzesAllTime = summaries.reduce((acc, curr) => acc + curr.attemptsCount, 0);
  const bestAllTime = Math.max(0, ...summaries.map(s => s.highestPercentage));

  const handleClearHistory = () => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to reset your quiz score history?')) {
      localStorage.removeItem('alamin_quiz_scores_v1');
      window.location.reload();
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
            Weekly Performance Ledger
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Weekly Quiz Score Records
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Track your knowledge retention over time. Every completed quiz round is automatically recorded and grouped by calendar week.
          </p>
        </div>

        <button
          type="button"
          onClick={onStartQuiz}
          className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          Take a Quiz Now →
        </button>
      </div>

      {/* Highlights Bento Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            This Week's Attempts
          </div>
          <div className="text-3xl font-black font-mono text-slate-100 dark:text-slate-100">
            {currentWeek ? currentWeek.attemptsCount : 0}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Quizzes recorded this week
          </div>
        </div>

        {/* Metric 2 */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            This Week's Average
          </div>
          <div className="text-3xl font-black font-mono text-emerald-500">
            {currentWeek && currentWeek.attemptsCount > 0 ? `${currentWeek.averagePercentage}%` : '—'}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Accuracy across all attempts
          </div>
        </div>

        {/* Metric 3 */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            All-Time High Score
          </div>
          <div className="text-3xl font-black font-mono text-cyan-400">
            {bestAllTime > 0 ? `${bestAllTime}%` : '—'}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Personal best record
          </div>
        </div>

        {/* Metric 4 */}
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Lifetime Quizzes
          </div>
          <div className="text-3xl font-black font-mono text-slate-100 dark:text-slate-100">
            {totalQuizzesAllTime}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Total completed challenges
          </div>
        </div>
      </div>

      {/* Weekly Breakdown Table / Timeline */}
      <div className={`rounded-xl border overflow-hidden ${
        isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-500" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Weekly Breakdown Log
            </h3>
          </div>

          {totalQuizzesAllTime > 0 && (
            <button
              type="button"
              onClick={handleClearHistory}
              className="text-xs text-slate-500 hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Reset history
            </button>
          )}
        </div>

        {summaries.length === 0 || totalQuizzesAllTime === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <Award className="w-10 h-10 mx-auto mb-2 text-slate-600 opacity-60" />
            <p className="text-sm font-medium text-slate-300 mb-1">No quizzes taken yet this week</p>
            <p className="text-xs max-w-sm mx-auto mb-4">
              Take your first knowledge sprint or government acronym quiz to start your weekly score history.
            </p>
            <button
              type="button"
              onClick={onStartQuiz}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer"
            >
              Start First Quiz
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-800/80">
            {summaries.map((week) => {
              const isCurrent = week.weekKey === currentWeekKey;

              return (
                <div key={week.weekKey} className="p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {week.weekLabel}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Current Week
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {week.attemptsCount} {week.attemptsCount === 1 ? 'quiz taken' : 'quizzes taken'}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <div>
                        <span className="text-slate-500 text-[11px] block">Average:</span>
                        <span className="text-base font-bold text-emerald-500">
                          {week.attemptsCount > 0 ? `${week.averagePercentage}%` : '—'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[11px] block">Best Score:</span>
                        <span className="text-base font-bold text-cyan-400">
                          {week.attemptsCount > 0 ? `${week.highestPercentage}%` : '—'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Individual quiz attempts inside that week */}
                  {week.history && week.history.length > 0 && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {week.history.map((item) => (
                        <div
                          key={item.id}
                          className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                            isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-slate-200 block truncate max-w-[150px]">
                              {item.categoryMode}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {item.dateStr}
                            </span>
                          </div>

                          <div className="text-right">
                            <span className="font-mono font-bold text-emerald-400">
                              {item.score}/{item.totalQuestions}
                            </span>
                            <span className="text-[10px] text-slate-400 block font-mono">
                              ({item.percentage}%)
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
