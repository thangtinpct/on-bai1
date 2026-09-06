import React from 'react';
import { BookOpen, History, Volume2, VolumeX, Sparkles, GraduationCap } from 'lucide-react';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenHistory: () => void;
  onOpenTheory: () => void;
  onGoHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenHistory,
  onOpenTheory,
  onGoHome
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left: App Logo & Teacher */}
        <div
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer group"
          role="button"
          tabIndex={0}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
            <span className="text-xl">🧠</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                GIA SƯ THÔNG THÁI <span className="text-blue-600">TIN HỌC 10</span>
              </h1>
            </div>
            <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              <span>Giáo viên:</span>
              <strong className="text-indigo-700 font-bold">NGUYỄN TẤN THẮNG</strong>
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theory button */}
          <button
            onClick={onOpenTheory}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200/70 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            title="Xem tóm tắt kiến thức trọng tâm SGK Bài 2"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">Cẩm nang</span> Bài 2
          </button>

          {/* History button */}
          <button
            onClick={onOpenHistory}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer"
            title="Xem lịch sử làm bài"
          >
            <History className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Lịch sử</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Âm thanh: Đang BẬT' : 'Âm thanh: Đang TẮT'}
            aria-label="Bật tắt âm thanh"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
