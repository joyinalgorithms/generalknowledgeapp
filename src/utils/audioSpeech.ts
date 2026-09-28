import { Fact } from '../types';

export function getFactSimpleDefinition(fact: Fact): string {
  return fact.simpleDefinition || fact.digest;
}

export function getFactNarration(fact: Fact): string {
  const sections = [
    fact.title,
    `Simple definition: ${getFactSimpleDefinition(fact)}`,
    `More detail: ${fact.deepDive}`
  ];

  if (fact.funFact) {
    sections.push(`Fun fact: ${fact.funFact}`);
  }

  return sections.join('. ');
}

/**
 * Web Speech API Audio Narration Engine
 * Provides crystal clear text-to-speech playback with pronunciation support,
 * speed toggling, pause/resume, and voice discovery.
 */

type SpeechCallback = () => void;

class AudioSpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  public isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  private getBestVoice(): SpeechSynthesisVoice | null {
    if (!this.voices || this.voices.length === 0) {
      if (this.synth) {
        this.voices = this.synth.getVoices();
      }
    }

    // Try finding Philippine English or Filipino voice first
    const phVoice = this.voices.find(v => 
      v.lang.toLowerCase().includes('en-ph') || 
      v.lang.toLowerCase().includes('fil-ph') ||
      v.lang.toLowerCase().includes('tl-ph')
    );
    if (phVoice) return phVoice;

    // Next fallback: High quality natural English voice
    const naturalVoice = this.voices.find(v => 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium')) &&
      v.lang.startsWith('en')
    );
    if (naturalVoice) return naturalVoice;

    // Standard English fallback
    const standardEn = this.voices.find(v => v.lang.startsWith('en'));
    if (standardEn) return standardEn;

    return this.voices[0] || null;
  }

  public speak(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      onStart?: SpeechCallback;
      onEnd?: SpeechCallback;
      onError?: SpeechCallback;
    } = {}
  ): boolean {
    if (!this.synth || !this.isSupported) {
      options.onError?.();
      return false;
    }

    // Stop ongoing speech
    this.stop();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate ?? 1.0;
      utterance.pitch = options.pitch ?? 1.0;

      const voice = this.getBestVoice();
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => {
        options.onStart?.();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        options.onEnd?.();
      };

      utterance.onerror = () => {
        this.currentUtterance = null;
        options.onError?.();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
      return true;
    } catch {
      this.currentUtterance = null;
      options.onError?.();
      return false;
    }
  }

  public pause(): void {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  public resume(): void {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking);
  }

  public isPaused(): boolean {
    return !!(this.synth && this.synth.paused);
  }
}

export const audioSpeech = new AudioSpeechService();
