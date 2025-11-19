export interface Module {
  id: string;
  title: string;
  summary: string;
  icon: string;
  sections: Section[];
  keyPoints: string[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  pearls?: string[];
  pitfalls?: string[];
}

export interface Vignette {
  id: string;
  moduleId: string;
  stem: string;
  options: VignetteOption[];
  correctOptionId: string;
  rationale: string;
}

export interface VignetteOption {
  id: string;
  text: string;
}

export interface QuizQuestion extends Vignette {
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface ReferenceItem {
  id: string;
  title: string;
  category: string;
  content: string;
  rows?: ReferenceRow[];
}

export interface ReferenceRow {
  term: string;
  definition: string;
  examPattern?: string;
}

export type Theme = 'light' | 'dark' | 'system';
