import { LangCode, QuizResult, UserProgress } from "@/types";

export const STORAGE_KEY = "linguastart.progress.v1";

export const defaultProgress: UserProgress = {
  selectedLanguage: undefined,
  completedTheoryTopicIds: [],
  quizResults: [],
};

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadUserProgress(): UserProgress {
  if (!canUseStorage()) {
    return defaultProgress;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultProgress;
    }

    const parsed = JSON.parse(raw) as UserProgress;

    return {
      selectedLanguage: parsed.selectedLanguage,
      completedTheoryTopicIds: Array.isArray(parsed.completedTheoryTopicIds)
        ? parsed.completedTheoryTopicIds
        : [],
      quizResults: Array.isArray(parsed.quizResults) ? parsed.quizResults : [],
    };
  } catch {
    return defaultProgress;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function resetStoredProgress(): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

export function withSelectedLanguage(progress: UserProgress, lang: LangCode): UserProgress {
  return {
    ...progress,
    selectedLanguage: lang,
  };
}

export function withTheoryTopicStatus(
  progress: UserProgress,
  topicId: string,
  completed: boolean
): UserProgress {
  const existing = new Set(progress.completedTheoryTopicIds);

  if (completed) {
    existing.add(topicId);
  } else {
    existing.delete(topicId);
  }

  return {
    ...progress,
    completedTheoryTopicIds: Array.from(existing),
  };
}

export function withQuizResult(progress: UserProgress, result: QuizResult): UserProgress {
  const nextResults = progress.quizResults.filter(
    (entry) => !(entry.quizId === result.quizId && entry.lang === result.lang)
  );

  nextResults.push(result);

  return {
    ...progress,
    quizResults: nextResults,
  };
}

export function getLanguageQuizResults(progress: UserProgress, lang: LangCode): QuizResult[] {
  return progress.quizResults.filter((entry) => entry.lang === lang);
}
