import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { TheoryModal } from './components/TheoryModal';
import { HistoryModal } from './components/HistoryModal';
import {
  HistoryRecord,
  QuizConfig,
  ShuffledQuestion,
  UserAnswer
} from './types';
import {
  generateQuizQuestions,
  getHistoryRecords,
  getSavedStudentProfile,
  getSoundEnabled,
  saveHistoryRecord,
  saveSoundEnabled,
  saveStudentProfile
} from './utils/quizHelper';
import { getQuestionsByLesson } from './data/lessons';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'quiz' | 'result'>('home');
  const [savedProfile, setSavedProfile] = useState<{ name: string; class: string }>({ name: '', class: '10A1' });
  const [quizConfig, setQuizConfig] = useState<QuizConfig>({
    studentName: '',
    studentClass: '10A1',
    questionCount: 10,
    level: 'all',
    mode: 'quick_study',
    lessonId: 'bai2'
  });

  const [currentQuestions, setCurrentQuestions] = useState<ShuffledQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [quizDurationSec, setQuizDurationSec] = useState<number>(0);

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isTheoryOpen, setIsTheoryOpen] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [historyList, setHistoryList] = useState<HistoryRecord[]>([]);

  // Initialize saved states
  useEffect(() => {
    const profile = getSavedStudentProfile();
    setSavedProfile(profile);
    setQuizConfig(prev => ({
      ...prev,
      studentName: profile.name,
      studentClass: profile.class || '10A1'
    }));

    setSoundEnabled(getSoundEnabled());
    setHistoryList(getHistoryRecords());
  }, []);

  const totalAvailableQuestions = getQuestionsByLesson(quizConfig.lessonId).length;

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    saveSoundEnabled(next);
  };

  const handleStartQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
    saveStudentProfile(config.studentName, config.studentClass);

    const questions = generateQuizQuestions(config.lessonId, config.level, config.questionCount);
    setCurrentQuestions(questions);
    setUserAnswers({});
    setQuizDurationSec(0);
    setCurrentScreen('quiz');
  };

  const handleFinishQuiz = (answers: Record<number, UserAnswer>, totalDurationSec: number) => {
    setUserAnswers(answers);
    setQuizDurationSec(totalDurationSec);

    const totalQuestions = currentQuestions.length;
    const correctCount = currentQuestions.filter(q => answers[q.id]?.isCorrect).length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 10 : 0;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    const levelStats = {
      nhan_biet: {
        correct: currentQuestions.filter(q => q.level === 'nhan_biet' && answers[q.id]?.isCorrect).length,
        total: currentQuestions.filter(q => q.level === 'nhan_biet').length
      },
      thong_hieu: {
        correct: currentQuestions.filter(q => q.level === 'thong_hieu' && answers[q.id]?.isCorrect).length,
        total: currentQuestions.filter(q => q.level === 'thong_hieu').length
      },
      van_dung: {
        correct: currentQuestions.filter(q => q.level === 'van_dung' && answers[q.id]?.isCorrect).length,
        total: currentQuestions.filter(q => q.level === 'van_dung').length
      }
    };

    const wrongQuestionIds = currentQuestions.filter(q => !answers[q.id]?.isCorrect).map(q => q.id);

    const record: HistoryRecord = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      timestamp: Date.now(),
      studentName: quizConfig.studentName,
      studentClass: quizConfig.studentClass,
      lessonTitle: 'Bài 2 - Thiết bị thông minh và Tin học',
      totalQuestions,
      correctCount,
      score,
      percentage,
      durationSec: totalDurationSec,
      mode: quizConfig.mode,
      level: quizConfig.level,
      levelStats,
      wrongQuestionIds
    };

    saveHistoryRecord(record);
    setHistoryList(getHistoryRecords());
    setCurrentScreen('result');
  };

  const handleRetryAll = () => {
    const questions = generateQuizQuestions(quizConfig.lessonId, quizConfig.level, quizConfig.questionCount);
    setCurrentQuestions(questions);
    setUserAnswers({});
    setQuizDurationSec(0);
    setCurrentScreen('quiz');
  };

  const handleRetryWrongOnly = (wrongQuestionIds: number[]) => {
    if (wrongQuestionIds.length === 0) return;
    const questions = generateQuizQuestions(quizConfig.lessonId, quizConfig.level, wrongQuestionIds.length, wrongQuestionIds);
    setCurrentQuestions(questions);
    setUserAnswers({});
    setQuizDurationSec(0);
    setCurrentScreen('quiz');
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Top sticky navigation */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenTheory={() => setIsTheoryOpen(true)}
        onGoHome={handleGoHome}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-12">
        {currentScreen === 'home' && (
          <HomeScreen
            initialConfig={quizConfig}
            onStartQuiz={handleStartQuiz}
            onOpenTheory={() => setIsTheoryOpen(true)}
            onOpenHistory={() => setIsHistoryOpen(true)}
            totalAvailableQuestions={totalAvailableQuestions}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen
            questions={currentQuestions}
            studentName={quizConfig.studentName}
            studentClass={quizConfig.studentClass}
            mode={quizConfig.mode}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={handleGoHome}
            soundEnabled={soundEnabled}
          />
        )}

        {currentScreen === 'result' && (
          <ResultScreen
            studentName={quizConfig.studentName}
            studentClass={quizConfig.studentClass}
            questions={currentQuestions}
            answers={userAnswers}
            durationSec={quizDurationSec}
            mode={quizConfig.mode}
            onRetryAll={handleRetryAll}
            onRetryWrongOnly={handleRetryWrongOnly}
            onGoHome={handleGoHome}
            onOpenHistory={() => setIsHistoryOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500 space-y-1">
        <p className="font-semibold text-slate-700">
          🧠 Gia Sư Thông Thái Tin Học 10 • Giáo viên: NGUYỄN TẤN THẮNG
        </p>
        <p className="text-slate-400">
          SGK Tin học 10 Kết nối tri thức với cuộc sống • Thiết kế trực quan, thông minh & chuẩn sư phạm
        </p>
      </footer>

      {/* Modals */}
      <TheoryModal isOpen={isTheoryOpen} onClose={() => setIsTheoryOpen(false)} />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={historyList}
        onHistoryChange={() => setHistoryList(getHistoryRecords())}
        onRetryWrongQuestions={(wrongIds) => {
          handleRetryWrongOnly(wrongIds);
        }}
      />
    </div>
  );
}
