import React from 'react';
import { Award, Calendar, CheckCircle2, Clock, RotateCcw, Trash2, X, Zap } from 'lucide-react';
import { HistoryRecord } from '../types';
import { clearHistoryRecords } from '../utils/quizHelper';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryRecord[];
  onHistoryChange: () => void;
  onRetryWrongQuestions?: (wrongIds: number[]) => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onHistoryChange,
  onRetryWrongQuestions
}) => {
  if (!isOpen) return null;

  const handleClear = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử luyện tập không?')) {
      clearHistoryRecords();
      onHistoryChange();
    }
  };

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month} • ${hours}:${mins}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/15 rounded-xl">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Lịch Sử Luyện Tập Của Bạn</h2>
              <p className="text-xs text-blue-100">Dữ liệu được lưu an toàn trên trình duyệt thiết bị (localStorage)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {history.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-3">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <p className="font-semibold text-slate-700">Chưa có lịch sử làm bài</p>
              <p className="text-xs max-w-sm mx-auto text-slate-500">
                Hãy bắt đầu một lượt ôn tập để theo dõi điểm số và mức độ tiến bộ nhé!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((rec, index) => (
                <div
                  key={rec.id || index}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-800 text-sm">
                        {rec.studentName} ({rec.studentClass})
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">
                        Lần #{history.length - index}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                        {rec.mode === 'challenge' ? '⚡ Thử thách' : rec.mode === 'practice' ? '🎯 Luyện tập' : '📚 Học nhanh'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(rec.timestamp)}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Đúng: {rec.correctCount}/{rec.totalQuestions} câu ({rec.percentage}%)
                      </span>
                    </div>

                    {/* Level breakdown micro-stats */}
                    <div className="flex items-center gap-2 text-xs pt-1">
                      <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        🟢 NB: {rec.levelStats?.nhan_biet?.correct || 0}/{rec.levelStats?.nhan_biet?.total || 0}
                      </span>
                      <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        🟡 TH: {rec.levelStats?.thong_hieu?.correct || 0}/{rec.levelStats?.thong_hieu?.total || 0}
                      </span>
                      <span className="text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                        🔴 VD: {rec.levelStats?.van_dung?.correct || 0}/{rec.levelStats?.van_dung?.total || 0}
                      </span>
                    </div>
                  </div>

                  {/* Score pill & actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-blue-700">
                        {rec.score.toFixed(1)} <span className="text-xs font-normal text-slate-500">/ 10</span>
                      </div>
                    </div>

                    {rec.wrongQuestionIds && rec.wrongQuestionIds.length > 0 && onRetryWrongQuestions && (
                      <button
                        onClick={() => {
                          onRetryWrongQuestions(rec.wrongQuestionIds);
                          onClose();
                        }}
                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                        title="Làm lại những câu làm sai trong lần này"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Ôn lại ({rec.wrongQuestionIds.length})
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {history.length > 0 ? (
            <button
              onClick={handleClear}
              className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Xóa tất cả lịch sử
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
