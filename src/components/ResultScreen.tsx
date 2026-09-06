import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  Clock,
  HelpCircle,
  Home,
  Lightbulb,
  ListFilter,
  RotateCcw,
  Sparkles,
  TrendingUp,
  User,
  XCircle
} from 'lucide-react';
import { ModeType, ShuffledQuestion, UserAnswer } from '../types';
import { generateTutorAdvice, sounds } from '../utils/quizHelper';

interface ResultScreenProps {
  studentName: string;
  studentClass: string;
  questions: ShuffledQuestion[];
  answers: Record<number, UserAnswer>;
  durationSec: number;
  mode: ModeType;
  onRetryAll: () => void;
  onRetryWrongOnly: (wrongQuestionIds: number[]) => void;
  onGoHome: () => void;
  onOpenHistory: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  studentName,
  studentClass,
  questions,
  answers,
  durationSec,
  mode,
  onRetryAll,
  onRetryWrongOnly,
  onGoHome,
  onOpenHistory
}) => {
  const totalQuestions = questions.length;
  const correctCount = questions.filter(q => answers[q.id]?.isCorrect).length;
  const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 10 : 0;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Level statistics
  const levelStats = {
    nhan_biet: {
      correct: questions.filter(q => q.level === 'nhan_biet' && answers[q.id]?.isCorrect).length,
      total: questions.filter(q => q.level === 'nhan_biet').length
    },
    thong_hieu: {
      correct: questions.filter(q => q.level === 'thong_hieu' && answers[q.id]?.isCorrect).length,
      total: questions.filter(q => q.level === 'thong_hieu').length
    },
    van_dung: {
      correct: questions.filter(q => q.level === 'van_dung' && answers[q.id]?.isCorrect).length,
      total: questions.filter(q => q.level === 'van_dung').length
    }
  };

  const advice = generateTutorAdvice(levelStats, percentage);

  const wrongQuestions = questions.filter(q => !answers[q.id]?.isCorrect);
  const wrongQuestionIds = wrongQuestions.map(q => q.id);

  useEffect(() => {
    sounds.playVictory();
    if (percentage >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs} giây`;
    return `${mins} phút ${secs} giây`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-8 animate-in fade-in duration-300">
      {/* Result Hero Header */}
      <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl shadow-blue-700/20 relative overflow-hidden space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Báo Cáo Tổng Kết Ôn Tập</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">🎉 HOÀN THÀNH!</h1>
          <p className="text-sm sm:text-base text-blue-100 font-medium">
            Học sinh: <strong className="text-white underline">{studentName}</strong> • Lớp:{' '}
            <strong className="text-amber-300">{studentClass}</strong>
          </p>
        </div>

        {/* Score Showcase */}
        <div className="py-4 max-w-md mx-auto grid grid-cols-3 gap-2 sm:gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/15">
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-black text-amber-300">{score.toFixed(1)}</div>
            <div className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold">Điểm số / 10</div>
          </div>
          <div className="space-y-0.5 border-x border-white/20">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300">
              {correctCount}/{totalQuestions}
            </div>
            <div className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold">Số câu đúng</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-black text-sky-200">{percentage}%</div>
            <div className="text-[11px] text-blue-100 uppercase tracking-wider font-semibold">Tỉ lệ chính xác</div>
          </div>
        </div>

        {/* Evaluation Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 font-black text-base shadow-md">
          <span>{advice.icon}</span>
          <span>Xếp loại:</span>
          <span className="text-blue-700">{advice.rating}</span>
        </div>

        <div className="text-xs text-blue-200 flex items-center justify-center gap-2 pt-1">
          <Clock className="w-3.5 h-3.5" />
          <span>Thời gian làm bài: {formatDuration(durationSec)}</span>
        </div>
      </div>

      {/* Level Breakdown & Smart Recommendation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Level Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-base sm:text-lg">Phân Tích Theo Mức Độ</h2>
          </div>

          <div className="space-y-3.5">
            {/* Nhan biet */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-emerald-800">🟢 MỨC 1 – NHẬN BIẾT</span>
                <span className="text-slate-700">
                  {levelStats.nhan_biet.correct} / {levelStats.nhan_biet.total} câu
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      levelStats.nhan_biet.total > 0
                        ? Math.round((levelStats.nhan_biet.correct / levelStats.nhan_biet.total) * 100)
                        : 0
                    }%`
                  }}
                />
              </div>
            </div>

            {/* Thong hieu */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-amber-800">🟡 MỨC 2 – THÔNG HIỂU</span>
                <span className="text-slate-700">
                  {levelStats.thong_hieu.correct} / {levelStats.thong_hieu.total} câu
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      levelStats.thong_hieu.total > 0
                        ? Math.round((levelStats.thong_hieu.correct / levelStats.thong_hieu.total) * 100)
                        : 0
                    }%`
                  }}
                />
              </div>
            </div>

            {/* Van dung */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-rose-800">🔴 MỨC 3 – VẬN DỤNG</span>
                <span className="text-slate-700">
                  {levelStats.van_dung.correct} / {levelStats.van_dung.total} câu
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      levelStats.van_dung.total > 0
                        ? Math.round((levelStats.van_dung.correct / levelStats.van_dung.total) * 100)
                        : 0
                    }%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Smart Tutor Advice */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h2 className="font-bold text-base sm:text-lg">Gợi Ý Ôn Tập Từ Gia Sư</h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
            💡 {advice.summary}
          </p>

          <ul className="space-y-2 text-xs text-slate-700">
            {advice.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                <span className="text-blue-600 font-bold">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        {wrongQuestionIds.length > 0 && (
          <button
            type="button"
            onClick={() => onRetryWrongOnly(wrongQuestionIds)}
            className="w-full sm:w-auto px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md shadow-rose-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>🔄 ÔN LẠI {wrongQuestionIds.length} CÂU SAI</span>
          </button>
        )}

        <button
          type="button"
          onClick={onRetryAll}
          className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>🔄 LÀM LẠI BÀI</span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base rounded-2xl border border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>🏠 VỀ TRANG CHỦ</span>
        </button>
      </div>

      {/* Detailed Questions Review (Section 17) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-slate-900">
            <ListFilter className="w-5 h-5 text-indigo-600" />
            <h2 className="font-bold text-lg sm:text-xl">
              {wrongQuestions.length > 0 ? '📌 Danh Sách Câu Hỏi Cần Ôn Lại' : '✅ Xem Lại Chi Tiết Toàn Bộ Câu Hỏi'}
            </h2>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 font-semibold text-slate-600">
            {wrongQuestions.length} câu sai / {totalQuestions} câu
          </span>
        </div>

        {wrongQuestions.length === 0 ? (
          <div className="text-center py-8 space-y-2 bg-emerald-50/70 rounded-2xl border border-emerald-200 p-6">
            <div className="text-4xl">🏆</div>
            <h3 className="font-extrabold text-emerald-900 text-lg">Bạn trả lời đúng tất cả các câu hỏi!</h3>
            <p className="text-xs text-emerald-700">
              Kiến thức Bài 2 của bạn rất hoàn hảo. Thầy Thắng khen ngợi tinh thần học tập tuyệt vời của bạn!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {wrongQuestions.map((q, idx) => {
              const ans = answers[q.id];
              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 border border-rose-200">
                        Câu {idx + 1} (Mã #{q.id})
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-medium">
                        {q.level === 'nhan_biet' ? '🟢 Nhận biết' : q.level === 'thong_hieu' ? '🟡 Thông hiểu' : '🔴 Vận dụng'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">🏷️ {q.topicName}</span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{q.question}</h4>

                  {/* Comparison choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-rose-900 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-rose-700">
                        <XCircle className="w-4 h-4" />
                        <span>Bạn chọn: {ans?.selectedOptionKey || 'Chưa chọn'}</span>
                      </div>
                      <p>{ans?.selectedText || 'Bỏ trống'}</p>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Đáp án đúng: {q.answer}</span>
                      </div>
                      <p>{q.options[q.answer]}</p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 space-y-1 leading-relaxed">
                    <strong className="text-indigo-800">💡 Giải thích chi tiết: </strong>
                    <span>{q.explanation}</span>
                  </div>

                  {/* Key knowledge */}
                  {q.keyKnowledge && (
                    <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex items-start gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Kiến thức cần nhớ: </strong>
                        {q.keyKnowledge}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
