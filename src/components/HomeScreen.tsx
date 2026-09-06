import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Layers,
  Rocket,
  Sparkles,
  User,
  Users,
  Zap,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { LevelFilter, ModeType, QuizConfig } from '../types';
import { LESSONS } from '../data/lessons';

interface HomeScreenProps {
  initialConfig: QuizConfig;
  onStartQuiz: (config: QuizConfig) => void;
  onOpenTheory: () => void;
  onOpenHistory: () => void;
  totalAvailableQuestions: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  initialConfig,
  onStartQuiz,
  onOpenTheory,
  onOpenHistory,
  totalAvailableQuestions
}) => {
  const [studentName, setStudentName] = useState(initialConfig.studentName);
  const [studentClass, setStudentClass] = useState(initialConfig.studentClass || '10A1');
  const [questionCount, setQuestionCount] = useState<number>(initialConfig.questionCount || 10);
  const [level, setLevel] = useState<LevelFilter>(initialConfig.level || 'all');
  const [mode, setMode] = useState<ModeType>(initialConfig.mode || 'quick_study');
  const [lessonId, setLessonId] = useState<string>(initialConfig.lessonId || 'bai2');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const questionOptions = [10, 15, 20, 25, 30];

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentName.trim()) {
      setErrorMessage('Bạn hãy nhập họ và tên trước khi bắt đầu nhé! 😊');
      // Auto focus name input
      const input = document.getElementById('student-name-input');
      input?.focus();
      return;
    }

    if (!studentClass.trim()) {
      setErrorMessage('Bạn hãy nhập lớp học (ví dụ: 10A1, 10A2...) nhé! 😊');
      return;
    }

    setErrorMessage(null);

    onStartQuiz({
      studentName: studentName.trim(),
      studentClass: studentClass.trim(),
      questionCount,
      level,
      mode,
      lessonId
    });
  };

  const currentLesson = LESSONS[lessonId] || LESSONS.bai2;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white p-6 sm:p-8 shadow-xl shadow-blue-700/15 mb-8">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Nền tảng ôn tập thông minh SGK Tin học 10</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              🧠 GIA SƯ THÔNG THÁI TIN HỌC 10
            </h1>
            <p className="text-sm sm:text-base text-blue-100 font-medium flex items-center gap-2">
              <span>Giáo viên phụ trách:</span>
              <span className="font-bold text-amber-300">NGUYỄN TẤN THẮNG</span>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-blue-100/90 font-medium italic border-l-2 border-amber-300 pl-3">
            "Học thông minh – Luyện tập chủ động – Tiến bộ mỗi ngày"
          </p>

          {/* Current Lesson Badge */}
          <div className="mt-4 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <div className="p-2 bg-amber-400/20 text-amber-300 rounded-xl mt-0.5">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Chủ đề trọng tâm đang mở
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-tight">
                  📚 BÀI 2 – VAI TRÒ CỦA THIẾT BỊ THÔNG MINH VÀ TIN HỌC ĐỐI VỚI XÃ HỘI
                </div>
                <div className="text-xs text-blue-200 mt-0.5">
                  Bộ sách Kết nối tri thức với cuộc sống • Ngân hàng {totalAvailableQuestions}+ câu hỏi phong phú
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenTheory}
              className="self-start sm:self-center px-3.5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer backdrop-blur-xs"
            >
              <BookOpen className="w-4 h-4" />
              Xem cẩm nang bài học
            </button>
          </div>
        </div>

        {/* Decorative background glow circles */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Configuration Form */}
      <form onSubmit={handleStart} className="space-y-8">
        {/* Error Alert Box */}
        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 animate-in shake duration-300 shadow-sm">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <div className="text-sm font-semibold">{errorMessage}</div>
          </div>
        )}

        {/* Section 1: Student Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-800">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-base sm:text-lg">1. Thông Tin Học Sinh</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="student-name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                👤 Họ và tên học sinh <span className="text-rose-500">*</span>
              </label>
              <input
                id="student-name-input"
                type="text"
                value={studentName}
                onChange={e => {
                  setStudentName(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Nhập họ và tên..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-blue-500 focus:bg-white rounded-xl text-slate-800 font-medium placeholder-slate-400 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="student-class-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                🏫 Lớp học <span className="text-rose-500">*</span>
              </label>
              <input
                id="student-class-input"
                type="text"
                value={studentClass}
                onChange={e => setStudentClass(e.target.value)}
                placeholder="Ví dụ: 10A1"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 focus:border-blue-500 focus:bg-white rounded-xl text-slate-800 font-medium placeholder-slate-400 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Question Count */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-800">
              <Layers className="w-5 h-5 text-indigo-600" />
              <h2 className="font-bold text-base sm:text-lg">2. Chọn Số Câu Hỏi</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">Tối đa 30 câu</span>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {questionOptions.map(count => {
              const isSelected = questionCount === count;
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-3.5 px-2 rounded-xl font-extrabold text-sm sm:text-base transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.03]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span>{count}</span>
                  <span className={`text-[10px] font-normal ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    câu
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Difficulty Level Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-800">
              <Award className="w-5 h-5 text-amber-600" />
              <h2 className="font-bold text-base sm:text-lg">3. Chọn Mức Độ Nhận Thức</h2>
            </div>
            <span className="text-xs text-slate-500">Chuẩn ma trận giáo dục</span>
          </div>

          {/* Level Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Level 1: Nhan biet */}
            <div
              onClick={() => setLevel('nhan_biet')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
                level === 'nhan_biet'
                  ? 'border-emerald-500 bg-emerald-50/70 shadow-md shadow-emerald-500/10 scale-[1.01]'
                  : 'border-slate-200 bg-slate-50/60 hover:border-emerald-300 hover:bg-emerald-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                  🟢 MỨC 1 – NHẬN BIẾT
                </span>
                {level === 'nhan_biet' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
              </div>
              <p className="text-xs text-slate-600 font-medium mt-2">
                Nhớ và nhận ra kiến thức cơ bản theo SGK.
              </p>
            </div>

            {/* Level 2: Thong hieu */}
            <div
              onClick={() => setLevel('thong_hieu')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
                level === 'thong_hieu'
                  ? 'border-amber-500 bg-amber-50/70 shadow-md shadow-amber-500/10 scale-[1.01]'
                  : 'border-slate-200 bg-slate-50/60 hover:border-amber-300 hover:bg-amber-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full">
                  🟡 MỨC 2 – THÔNG HIỂU
                </span>
                {level === 'thong_hieu' && <CheckCircle className="w-4 h-4 text-amber-600" />}
              </div>
              <p className="text-xs text-slate-600 font-medium mt-2">
                Hiểu bản chất và giải thích được kiến thức.
              </p>
            </div>

            {/* Level 3: Van dung */}
            <div
              onClick={() => setLevel('van_dung')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
                level === 'van_dung'
                  ? 'border-rose-500 bg-rose-50/70 shadow-md shadow-rose-500/10 scale-[1.01]'
                  : 'border-slate-200 bg-slate-50/60 hover:border-rose-300 hover:bg-rose-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-full">
                  🔴 MỨC 3 – VẬN DỤNG
                </span>
                {level === 'van_dung' && <CheckCircle className="w-4 h-4 text-rose-600" />}
              </div>
              <p className="text-xs text-slate-600 font-medium mt-2">
                Vận dụng kiến thức giải quyết tình huống thực tế.
              </p>
            </div>
          </div>

          {/* All Levels Option */}
          <div
            onClick={() => setLevel('all')}
            className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
              level === 'all'
                ? 'border-indigo-500 bg-indigo-50/80 shadow-xs'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={level === 'all'}
                onChange={() => setLevel('all')}
                className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-indigo-950">
                  ☑️ TẤT CẢ MỨC ĐỘ (Khuyên dùng)
                </span>
                <p className="text-[11px] text-slate-500">
                  Phân bố câu hỏi đồng đều giữa 3 mức độ (Nhận biết • Thông hiểu • Vận dụng).
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-indigo-200 hidden sm:inline">
              Toàn diện
            </span>
          </div>
        </div>

        {/* Section 4: Practice Mode Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-800">
              <Zap className="w-5 h-5 text-amber-500" />
              <h2 className="font-bold text-base sm:text-lg">4. Chọn Chế Độ Ôn Luyện</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Mode 1: Hoc nhanh */}
            <div
              onClick={() => setMode('quick_study')}
              className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                mode === 'quick_study'
                  ? 'border-blue-600 bg-blue-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">📚</span>
                <div className="font-bold text-xs sm:text-sm text-slate-800">HỌC NHANH</div>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Không giới hạn thời gian. Có giải thích chi tiết ngay sau mỗi câu trả lời.
              </p>
            </div>

            {/* Mode 2: Luyen tap */}
            <div
              onClick={() => setMode('practice')}
              className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                mode === 'practice'
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🎯</span>
                <div className="font-bold text-xs sm:text-sm text-slate-800">LUYỆN TẬP</div>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Có chấm điểm chuẩn thang 10, hiển thị giải thích và lưu lịch sử học tập.
              </p>
            </div>

            {/* Mode 3: Thu thach */}
            <div
              onClick={() => setMode('challenge')}
              className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                mode === 'challenge'
                  ? 'border-violet-600 bg-violet-50/70 shadow-xs'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">⚡</span>
                <div className="font-bold text-xs sm:text-sm text-slate-800">THỬ THÁCH</div>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Có đồng hồ đếm ngược (45s/câu). Giải thích được hiển thị sau khi hoàn thành bài.
              </p>
            </div>
          </div>
        </div>

        {/* Big Start Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-lg sm:text-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            <Rocket className="w-6 h-6 animate-bounce" />
            <span>🚀 BẮT ĐẦU ÔN TẬP NGAY</span>
          </button>
          <p className="text-center text-xs text-slate-500 mt-2.5">
            Dữ liệu câu hỏi được bảo đảm chính xác tuyệt đối theo SGK Tin học 10 Kết nối tri thức.
          </p>
        </div>
      </form>
    </div>
  );
};
