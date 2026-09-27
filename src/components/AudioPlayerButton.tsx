import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play, Gauge } from 'lucide-react';
import { audioSpeech } from '../utils/audioSpeech';

interface AudioPlayerButtonProps {
  id: string;
  textToSpeak: string;
  title?: string;
  pronunciation?: string;
  size?: 'sm' | 'md' | 'lg';
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
  isDark: boolean;
}

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  id,
  textToSpeak,
  title,
  pronunciation,
  size = 'md',
  activePlayingId,
  setActivePlayingId,
  isDark
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1.0);
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);

  const isActive = activePlayingId === id;

  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [isActive, isPlaying]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isActive && isPlaying) {
      if (isPaused) {
        audioSpeech.resume();
        setIsPaused(false);
      } else {
        audioSpeech.pause();
        setIsPaused(true);
      }
      return;
    }

    // Prepare full spoken utterance
    let script = textToSpeak;
    if (pronunciation) {
      script = `Pronunciation: ${pronunciation}. ${script}`;
    }
    if (title && !script.includes(title)) {
      script = `${title}. ${script}`;
    }

    setActivePlayingId(id);
    setIsPlaying(true);
    setIsPaused(false);

    audioSpeech.speak(script, {
      rate,
      onStart: () => {
        setIsPlaying(true);
        setIsPaused(false);
      },
      onEnd: () => {
        setIsPlaying(false);
        setIsPaused(false);
        if (activePlayingId === id) {
          setActivePlayingId(null);
        }
      },
      onError: () => {
        setIsPlaying(false);
        setIsPaused(false);
        if (activePlayingId === id) {
          setActivePlayingId(null);
        }
      }
    });
  };

  const handleSpeedChange = (newRate: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setRate(newRate);
    setShowSpeedMenu(false);
    if (isActive && isPlaying) {
      // Re-trigger speech with updated rate
      audioSpeech.stop();
      handleTogglePlay(e);
    }
  };

  const sizeClasses = {
    sm: 'h-8 px-2.5 text-xs gap-1.5',
    md: 'h-9 px-3 text-xs gap-2',
    lg: 'h-10 px-4 text-sm gap-2.5'
  }[size];

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleTogglePlay}
        title={isActive && isPlaying ? (isPaused ? 'Resume narration' : 'Pause narration') : 'Listen to fact audio'}
        aria-label={isActive && isPlaying ? (isPaused ? 'Resume narration' : 'Pause audio') : 'Listen to narration'}
        className={`flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer select-none border ${sizeClasses} ${
          isActive && isPlaying
            ? isDark
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
              : 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-sm'
            : isDark
            ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 border-slate-800 hover:border-emerald-500/40'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-emerald-900 border-slate-200 hover:border-emerald-400'
        }`}
      >
        {isActive && isPlaying ? (
          isPaused ? (
            <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
          ) : (
            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-emerald-400 animate-pulse rounded-full" />
              <span className="w-1 h-4 bg-emerald-400 animate-pulse delay-75 rounded-full" />
              <span className="w-1 h-2 bg-emerald-400 animate-pulse delay-150 rounded-full" />
            </div>
          )
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
        )}

        <span className="whitespace-nowrap">
          {isActive && isPlaying ? (isPaused ? 'Resume' : 'Listening...') : 'Listen'}
        </span>
      </button>

      {/* Speed control toggle button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowSpeedMenu(!showSpeedMenu);
        }}
        title="Adjust narration speed"
        aria-label="Adjust narration speed"
        className={`ml-1 h-8 w-7 flex items-center justify-center rounded-md border text-[11px] font-mono transition-colors ${
          isDark
            ? 'border-slate-800 text-slate-400 hover:text-emerald-300 hover:bg-slate-800'
            : 'border-slate-200 text-slate-600 hover:text-emerald-900 hover:bg-slate-200'
        }`}
      >
        {rate}x
      </button>

      {/* Speed dropdown menu */}
      {showSpeedMenu && (
        <div
          className={`absolute right-0 top-full mt-1.5 z-50 py-1 px-1 rounded-lg border shadow-xl backdrop-blur-md min-w-[90px] ${
            isDark
              ? 'bg-slate-900/95 border-emerald-500/30 text-slate-200'
              : 'bg-white/95 border-emerald-200 text-slate-800'
          }`}
        >
          <div className="text-[10px] px-2 py-1 text-slate-400 uppercase tracking-wider font-semibold">
            Speed
          </div>
          {[0.8, 1.0, 1.25].map((speed) => (
            <button
              key={speed}
              type="button"
              onClick={(e) => handleSpeedChange(speed, e)}
              className={`w-full text-left px-2 py-1 rounded text-xs flex items-center justify-between transition-colors ${
                rate === speed
                  ? isDark
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'bg-emerald-50 text-emerald-900 font-semibold'
                  : isDark
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>{speed}x</span>
              {rate === speed && <span className="text-[10px] text-emerald-400">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
