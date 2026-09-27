import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, RotateCcw, ArrowRight, Sparkles, Volume2, BarChart2, ShieldCheck, Flame } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { QuizQuestion, QuizScoreEntry } from '../types';
import { saveQuizScore } from '../utils/storage';
import { AudioPlayerButton } from './AudioPlayerButton';

interface QuizArenaProps {
  onScoreSaved: (entry: QuizScoreEntry) => void;
  onNavigateWeeklyScores: () => void;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
}

type QuizMode = 'sprint' | 'ph_civics' | 'master';

export const QuizArena: React.FC<QuizArenaProps> = ({
  onScoreSaved,
  onNavigateWeeklyScores,
  activePlayingId,
  setActivePlayingId,
  isDark
}) => {
  const [mode, setMode] = useState<QuizMode>('ph_civics');
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [savedResult, setSavedResult] = useState<QuizScoreEntry | null>(null);

  // Filter questions based on mode
  const activeQuestions = useMemo(() => {
    let pool: QuizQuestion[] = [];
    if (mode === 'ph_civics') {
      pool = QUIZ_QUESTIONS.filter(q => q.category === 'ph_gov' || q.category === 'ph_agency' || q.category === 'civics' || q.category === 'banks_finance' || q.category === 'filipino');
      pool = [...pool].sort(() => 0.5 - Math.random());
      return pool.slice(0, 8);
    } else if (mode === 'sprint') {
      pool = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5);
      return pool;
    } else {
      pool = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
      return pool.slice(0, 10);
    }
  }, [mode, hasStarted]);

  const currentQ = activeQuestions[currentIndex];

  const handleStartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setIsCompleted(false);
    setSavedResult(null);
    setHasStarted(true);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      const nextScore = score + 1;
      const nextStreak = streak + 1;
      setScore(nextScore);
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz Finished!
      handleCompleteQuiz();
    }
  };

  const handleCompleteQuiz = () => {
    setIsCompleted(true);

    // Trigger celebration confetti with emerald & cyan hues
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#06B6D4', '#34D399', '#38BDF8', '#E2E8F0']
      });
    } catch {
      // ignore
    }

    // Save score to weekly tracking
    const categoryModeLabel =
      mode === 'ph_civics'
        ? 'PH Civics & Acronyms'
        : mode === 'sprint'
        ? 'Quick 5-Q Sprint'
        : 'All Categories Master';

    const recorded = saveQuizScore({
      score,
      totalQuestions: activeQuestions.length,
      categoryMode: categoryModeLabel
    });

    setSavedResult(recorded);
    onScoreSaved(recorded);
  };

  // Render Start Screen
  if (!hasStarted) {
    return (
      <div className={`max-w-2xl mx-auto rounded-2xl border p-6 md:p-8 text-center transition-all ${
        isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
          <Award className="w-7 h-7 text-emerald-500" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
          Memory & Retention Arena
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          Test Your Knowledge & Acronym Recall
        </h2>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6">
          Challenge yourself on Philippine government structures, DPWH/DOH/PhilHealth mandates, science, and world facts. Your scores are automatically recorded in your weekly progress chart!
        </p>

        {/* Mode Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          <button
            type="button"
            onClick={() => setMode('ph_civics')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              mode === 'ph_civics'
                ? isDark
                  ? 'bg-emerald-500/20 border-emerald-500 text-slate-100 ring-1 ring-emerald-500'
                  : 'bg-emerald-50 border-emerald-500 text-slate-900 ring-1 ring-emerald-500'
                : isDark
                ? 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="font-semibold text-xs text-emerald-500 uppercase tracking-wider mb-1">
              Featured
            </div>
            <div className="font-bold text-sm text-slate-100 dark:text-slate-100">
              PH Gov & Acronyms
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Senate, DPWH, DOH, PhilHealth, PAGASA, RHU
            </div>
          </button>

          <button
            type="button"
            onClick={() => setMode('sprint')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              mode === 'sprint'
                ? isDark
                  ? 'bg-emerald-500/20 border-emerald-500 text-slate-100 ring-1 ring-emerald-500'
                  : 'bg-emerald-50 border-emerald-500 text-slate-900 ring-1 ring-emerald-500'
                : isDark
                ? 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="font-semibold text-xs text-emerald-500 uppercase tracking-wider mb-1">
              5 Questions
            </div>
            <div className="font-bold text-sm text-slate-100 dark:text-slate-100">
              Rapid Sprint
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Quick randomized multi-topic recall
            </div>
          </button>

          <button
            type="button"
            onClick={() => setMode('master')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              mode === 'master'
                ? isDark
                  ? 'bg-emerald-500/20 border-emerald-500 text-slate-100 ring-1 ring-emerald-500'
                  : 'bg-emerald-50 border-emerald-500 text-slate-900 ring-1 ring-emerald-500'
                : isDark
                ? 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="font-semibold text-xs text-emerald-500 uppercase tracking-wider mb-1">
              Comprehensive
            </div>
            <div className="font-bold text-sm text-slate-100 dark:text-slate-100">
              Grand Master
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Deep dive spanning all disciplines
            </div>
          </button>
        </div>

        <button
          type="button"
          onClick={handleStartQuiz}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
        >
          Begin Quiz Arena →
        </button>
      </div>
    );
  }

  // Render Completed Summary Screen
  if (isCompleted) {
    const total = activeQuestions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className={`max-w-xl mx-auto rounded-2xl border p-6 md:p-8 text-center transition-all ${
        isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-md'
      }`}>
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-emerald-500" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
          Challenge Concluded
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-1">
          Quiz Completed!
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Your score has been securely saved to this week's progress ledger.
        </p>

        {/* Score Ring / Gauge */}
        <div className={`p-6 rounded-xl border mb-6 ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-4xl md:text-5xl font-black font-mono text-emerald-500 dark:text-emerald-400 mb-1">
            {percentage}%
          </div>
          <div className="text-xs text-slate-400 font-medium">
            You answered <span className="text-slate-200 font-bold">{score}</span> out of{' '}
            <span className="text-slate-200 font-bold">{total}</span> questions correctly.
          </div>

          {maxStreak > 1 && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Flame className="w-3.5 h-3.5 fill-current text-emerald-500" />
              Highest streak: {maxStreak} in a row
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleStartQuiz}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-slate-100 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Another Round
          </button>

          <button
            type="button"
            onClick={onNavigateWeeklyScores}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5" />
            View Weekly Scores Ledger →
          </button>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  return (
    <div className={`max-w-2xl mx-auto rounded-2xl border p-5 md:p-7 transition-all ${
      isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-md'
    }`}>
      {/* Progress & Stats Bar */}
      <div className="flex items-center justify-between gap-3 text-xs mb-4 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-emerald-500 uppercase tracking-wider text-[11px]">
            Question {currentIndex + 1} of {activeQuestions.length}
          </span>
          {streak > 1 && (
            <span className="flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
              <Flame className="w-3.5 h-3.5 fill-current" />
              {streak} streak!
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="font-mono text-slate-300">
            Score: <span className="text-emerald-400 font-bold">{score}</span>
          </div>
          <AudioPlayerButton
            id={`quiz-q-${currentQ.id}`}
            textToSpeak={`${currentQ.question}. Options: ${currentQ.options.join(', ')}`}
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
            isDark={isDark}
            size="sm"
          />
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-teal-400 to-cyan-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Prompt */}
      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug mb-5">
        {currentQ.question}
      </h3>

      {/* Answer Options */}
      <div className="space-y-2.5 mb-6">
        {currentQ.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === currentQ.correctIndex;

          let optionStyle = isDark
            ? 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-emerald-500/40'
            : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-400';

          if (isAnswerSubmitted) {
            if (isCorrect) {
              optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-medium';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-medium';
            } else {
              optionStyle = 'opacity-40 border-slate-800 text-slate-500';
            }
          } else if (isSelected) {
            optionStyle = isDark
              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500'
              : 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-500';
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswerSubmitted}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-3.5 rounded-xl border text-sm flex items-start gap-3 transition-all cursor-pointer ${optionStyle}`}
            >
              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                  : 'bg-slate-800/40 border-slate-700 text-slate-400'
              }`}>
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1 leading-snug">{option}</span>

              {isAnswerSubmitted && isCorrect && (
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              {isAnswerSubmitted && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Box when answer is submitted */}
      {isAnswerSubmitted && (
        <div className={`p-4 rounded-xl border mb-6 text-xs leading-relaxed animate-fadeIn ${
          selectedOption === currentQ.correctIndex
            ? isDark
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-emerald-50 border-emerald-300 text-emerald-900'
            : isDark
            ? 'bg-slate-950/80 border-slate-700 text-slate-300'
            : 'bg-slate-100 border-slate-300 text-slate-800'
        }`}>
          <div className="font-bold uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Explanation
          </div>
          <p>{currentQ.explanation}</p>
        </div>
      )}

      {/* Bottom Button */}
      <div className="flex items-center justify-end">
        {!isAnswerSubmitted ? (
          <button
            type="button"
            disabled={selectedOption === null}
            onClick={handleSubmitAnswer}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedOption === null
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <span>{currentIndex + 1 < activeQuestions.length ? 'Next Question' : 'View Results'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
