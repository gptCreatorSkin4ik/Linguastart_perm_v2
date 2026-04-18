export type LangCode = "en" | "it" | "es";

export type ResourceType = "rutube" | "site" | "dictionary" | "practice";

export type QuizType =
  | "anagram"
  | "categorization"
  | "memory"
  | "audio"
  | "matching"
  | "spanish_kids";

export interface Language {
  code: LangCode;
  nameRu: string;
  shortName: string;
  descriptionRu: string;
  levelTag: string;
  gradient: string;
}

export interface TheoryTopic {
  id: string;
  lang: LangCode;
  title: string;
  explanation: string;
  examples: string[];
  tips: string[];
}

export interface ResourceItem {
  id: string;
  lang: LangCode;
  title: string;
  type: ResourceType;
  url: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface Lexeme {
  word: string;
  translation: string;
}

export interface AnagramQuizPayload {
  words: Lexeme[];
}

export interface CategorizationGroup {
  id: string;
  label: string;
  words: string[];
}

export interface CategorizationQuizPayload {
  groups: CategorizationGroup[];
}

export interface MemoryRound {
  id: string;
  title: string;
  pairs: Lexeme[];
}

export interface MemoryQuizPayload {
  rounds: MemoryRound[];
}

export interface AudioQuestion {
  word: string;
  translation: string;
  options: string[];
}

export interface AudioQuizPayload {
  voiceLang: string;
  items: AudioQuestion[];
}

export interface MatchingPair {
  left: string;
  right: string;
  translation: string;
}

export interface MatchingQuizPayload {
  pairs: MatchingPair[];
}

export interface SpanishChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface SpanishFlagOption {
  id: string;
  label: string;
  imagePath: string;
  isCorrect: boolean;
}

export interface SpanishDialogueSlot {
  id: string;
  correctPhrase: string;
}

export interface SpanishKidsQuizPayload {
  nameQuestion: string;
  greetingQuestions: SpanishChoiceQuestion[];
  flagQuestion: {
    question: string;
    options: SpanishFlagOption[];
  };
  capitalQuestion: SpanishChoiceQuestion;
  dialogueTask: {
    lines: string[];
    slots: SpanishDialogueSlot[];
    phrasePool: string[];
  };
}

export type QuizPayload =
  | AnagramQuizPayload
  | CategorizationQuizPayload
  | MemoryQuizPayload
  | AudioQuizPayload
  | MatchingQuizPayload
  | SpanishKidsQuizPayload;

export interface QuizDefinition<TPayload = QuizPayload> {
  id: string;
  lang: LangCode;
  type: QuizType;
  title: string;
  description: string;
  hint: string;
  payload: TPayload;
}

export interface QuizResult {
  quizId: string;
  lang: LangCode;
  correct: number;
  total: number;
  percent: number;
  mistakes: string[];
  completedAt: string;
}

export interface UserProgress {
  selectedLanguage?: LangCode;
  completedTheoryTopicIds: string[];
  quizResults: QuizResult[];
}
