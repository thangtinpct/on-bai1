import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  XCircle,
  Clock,
  Send,
  Home,
  Check,
  AlertTriangle
} from 'lucide-react';
import { ModeType, OptionKey, ShuffledQuestion, UserAnswer } from '../types';
import { sounds } from '../utils/quizHelper';

interface QuizScreenProps {
  questions: ShuffledQuestion[];
  studentName: string;
  studentClass: string;
  mode: ModeType;
  onFinishQuiz: (answers: Record<number, UserAnswer>, totalDurationSec: number) => void;
  onExitQuiz: () => void;
  soundEnabled: boolean;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  studentName,
  studentClass,
  mode,
  onFinishQuiz,
  onExitQuiz,
  soundEnabled
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [challengeRemainingSeconds, setChallengeRemainingSeconds] = useState(questions.length * 45); // 45s per question in challenge mode
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  const questionStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<number | null>(null);

  const currentQ = questions[currentIndex];
  const currentAnswer = answers[currentQ?.id];
  const isAnswered = !!currentAnswer;

  // Track timer
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
      if (mode === 'challenge') {
        setChallengeRemainingSeconds(prev => {
          if (prev <= 1) {
            // Auto finish on time up
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode]);

  // Keyboard navigation & answering support (A, B, C, D or 1, 2, 3, 4, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if in inputs or modals
      if (showExitConfirm || showFinishConfirm) return;

      const key = e.key.toUpperCase();

      if (!isAnswered) {
        if (key === 'A' || key === '1') handleSelectOption('A');
        else if (key === 'B' || key === '2') handleSelectOption('B');
        else if (key === 'C' || key === '3') handleSelectOption('C');
        else if (key === 'D' || key === '4') handleSelectOption('D');
      }

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnswered, showExitConfirm, showFinishConfirm]);

  // Voice speech synthesis
  const handleSpeak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ đọc văn bản bằng giọng nói.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const textToRead = `${currentQ.question}. Các phương án là: A, ${currentQ.options.A}. B, ${currentQ.options.B}. C, ${currentQ.options.C}. D, ${currentQ.options.D}.`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;

    // Pick a Vietnamese voice if available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi'));
    if (viVoice) utterance.voice = viVoice;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Stop speech when changing question
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    questionStartTimeRef.current = Date.now();
  }, [currentIndex]);

  const handleSelectOption = (key: OptionKey) => {
    if (isAnswered) return; // Prevent changing answer

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
    const selectedOption = currentQ.displayOptions.find(o => o.key === key);
    const isCorrect = !!selectedOption?.isCorrect;

    const answerRecord: UserAnswer = {
      questionId: currentQ.id,
      selectedOptionKey: key,
      selectedText: selectedOption?.text || '',
      isCorrect,
      timeSpentSec: timeSpent
    };

    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: answerRecord
    }));

    if (isCorrect) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Check if all answered
      const answeredCount = Object.keys(answers).length;
      if (answeredCount < questions.length) {
        setShowFinishConfirm(true);
      } else {
        handleFinish();
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    onFinishQuiz(answers, elapsedSeconds);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);
  const totalAnswered = Object.keys(answers).length;

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'nhan_biet':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300/80">
            🟢 NHẬN BIẾT
          </span>
        );
      case 'thong_hieu':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300/80">
            🟡 THÔNG HIỂU
          </span>
        );
      case 'van_dung':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300/80">
            🔴 VẬN DỤNG
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8 space-y-6">
      {/* Top Header Card: Progress + Stats */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Student Info */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
              10
            </span>
            <div>
              <div className="text-xs text-slate-500 font-medium">Học sinh</div>
              <div className="text-sm font-bold text-slate-900 leading-none">
                {studentName} <span className="text-blue-600">({studentClass})</span>
              </div>
            </div>
          </div>

          {/* Question Index Badge */}
          <div className="text-center">
            <div className="text-xs font-semibold text-slate-500">Tiến độ bài làm</div>
            <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Câu {String(currentIndex + 1).padStart(2, '0')} <span className="text-slate-400">/</span> {questions.length}
            </div>
          </div>

          {/* Timer & Controls */}
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1.5 rounded-xl border font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
              mode === 'challenge'
                ? challengeRemainingSeconds <= 60
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{formatTimer(mode === 'challenge' ? challengeRemainingSeconds : elapsedSeconds)}</span>
            </div>

            {/* Read Aloud Button */}
            <button
              onClick={handleSpeak}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-blue-600 text-white border-blue-600 animate-pulse'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title="Đọc câu hỏi bằng giọng nói"
              aria-label="Đọc to câu hỏi"
            >
              {isSpeaking ? <Volume2 className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Exit Button */}
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              title="Thoát bài ôn tập"
              aria-label="Thoát bài"
            >
              <Home className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-1">
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-500 px-0.5">
            <span>Đã làm: {totalAnswered}/{questions.length} câu</span>
            <span>{progressPercent}% hoàn thành</span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md shadow-slate-200/50 border border-slate-200 space-y-6">
        {/* Meta tags: Level and Topic */}
        <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            {getLevelBadge(currentQ.level)}
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
              🏷️ {currentQ.topicName}
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">Phím tắt: A, B, C, D hoặc 1, 2, 3, 4</span>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* 4 Options Grid */}
        <div className="space-y-3 pt-2">
          {currentQ.displayOptions.map((opt) => {
            const isSelected = currentAnswer?.selectedOptionKey === opt.key;
            const isCorrectOption = opt.isCorrect;

            let optionStyle = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/30 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';

            if (isAnswered) {
              if (mode === 'challenge') {
                // In challenge mode, just highlight what the user picked
                if (isSelected) {
                  optionStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-bold';
                  badgeStyle = 'bg-blue-600 text-white border-blue-600';
                } else {
                  optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-600 opacity-80';
                }
              } else {
                // In quick study and practice modes, reveal correct answer immediately
                if (isCorrectOption) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold shadow-xs';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-semibold shadow-xs';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600';
                } else {
                  optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-500 opacity-60';
                }
              }
            }

            return (
              <button
                key={opt.key}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full p-4 sm:p-4.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 text-left cursor-pointer ${optionStyle} ${
                  isAnswered ? 'cursor-default' : 'active:scale-[0.99]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm border shrink-0 transition-colors ${badgeStyle}`}
                  >
                    {opt.key}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
                </div>

                {isAnswered && mode !== 'challenge' && (
                  <div className="shrink-0">
                    {isCorrectOption && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                    {isSelected && !isCorrectOption && <XCircle className="w-6 h-6 text-rose-600" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Box (Quick Study & Practice Modes) */}
        {isAnswered && mode !== 'challenge' && (
          <div
            className={`p-5 rounded-2xl border transition-all animate-in fade-in zoom-in-95 duration-200 space-y-3 ${
              currentAnswer.isCorrect
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-rose-50/80 border-rose-200 text-rose-950'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-black text-base sm:text-lg">
                {currentAnswer.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span className="text-emerald-800">🎉 CHÍNH XÁC!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-rose-600" />
                    <span className="text-rose-800">💡 CHƯA CHÍNH XÁC</span>
                  </>
                )}
              </div>

              {!currentAnswer.isCorrect && (
                <div className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Đáp án đúng: {currentQ.answer}
                </div>
              )}
            </div>

            {/* Explanation */}
            <div className="text-xs sm:text-sm leading-relaxed text-slate-800 bg-white/70 p-3 rounded-xl border border-slate-200/60">
              <strong className="text-blue-800">📖 Giải thích: </strong>
              {currentQ.explanation}
            </div>

            {/* Key Knowledge Note */}
            {currentQ.keyKnowledge && (
              <div className="text-xs leading-relaxed text-amber-900 bg-amber-50/90 p-3 rounded-xl border border-amber-200/80 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Kiến thức cần nhớ: </strong>
                  {currentQ.keyKnowledge}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-5 py-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            currentIndex === 0
              ? 'opacity-40 bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>CÂU TRƯỚC</span>
        </button>

        {/* Quick jump to next or finish */}
        {currentIndex < questions.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
          >
            <span>CÂU TIẾP THEO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>HOÀN THÀNH BÀI LÀM</span>
          </button>
        )}
      </div>

      {/* Question Jump Palette Matrix */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Bảng điều hướng câu hỏi:</span>
          <span>
            {totalAnswered} / {questions.length} đã trả lời
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const ans = answers[q.id];
            const hasAnswered = !!ans;

            let btnColor = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';

            if (isCurrent) {
              btnColor = 'ring-2 ring-blue-600 ring-offset-2 bg-blue-600 text-white border-blue-600 font-bold';
            } else if (hasAnswered) {
              if (mode === 'challenge') {
                btnColor = 'bg-indigo-100 text-indigo-800 border-indigo-300 font-semibold';
              } else if (ans.isCorrect) {
                btnColor = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold';
              } else {
                btnColor = 'bg-rose-100 text-rose-800 border-rose-300 font-semibold';
              }
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`w-9 h-9 rounded-xl text-xs flex items-center justify-center border transition-all cursor-pointer ${btnColor}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal Confirm Exit */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Rời khỏi bài ôn tập?</h3>
              <p className="text-xs text-slate-500">
                Tiến độ của bài làm hiện tại sẽ không được lưu nếu bạn quay lại trang chủ ngay lúc này.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Làm tiếp
              </button>
              <button
                onClick={onExitQuiz}
                className="py-2.5 px-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Confirm Finish with Unanswered questions */}
      {showFinishConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Xác nhận nộp bài?</h3>
              <p className="text-xs text-slate-500">
                Bạn còn <strong className="text-rose-600">{questions.length - totalAnswered}</strong> câu chưa trả lời. Bạn có chắc muốn nộp bài luôn không?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => setShowFinishConfirm(false)}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Làm tiếp
              </button>
              <button
                onClick={handleFinish}
                className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
