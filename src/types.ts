export type LevelType = 'nhan_biet' | 'thong_hieu' | 'van_dung';
export type LevelFilter = LevelType | 'all';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export type ModeType = 'quick_study' | 'practice' | 'challenge';

export interface Question {
  id: number;
  lessonId: string;
  topic: string;
  topicName: string;
  level: LevelType;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: OptionKey;
  explanation: string;
  keyKnowledge?: string;
}

export interface ShuffledQuestion extends Question {
  originalId: number;
  displayOptions: {
    key: OptionKey;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface UserAnswer {
  questionId: number;
  selectedOptionKey: OptionKey;
  selectedText: string;
  isCorrect: boolean;
  timeSpentSec: number;
}

export interface QuizConfig {
  studentName: string;
  studentClass: string;
  questionCount: number;
  level: LevelFilter;
  mode: ModeType;
  lessonId: string;
}

export interface HistoryRecord {
  id: string;
  timestamp: number;
  studentName: string;
  studentClass: string;
  lessonTitle: string;
  totalQuestions: number;
  correctCount: number;
  score: number; // Scale of 10
  percentage: number;
  durationSec: number;
  mode: ModeType;
  level: LevelFilter;
  levelStats: {
    nhan_biet: { correct: number; total: number };
    thong_hieu: { correct: number; total: number };
    van_dung: { correct: number; total: number };
  };
  wrongQuestionIds: number[];
}

export interface LessonInfo {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: string[];
}
