import {
  HistoryRecord,
  LevelFilter,
  LevelType,
  OptionKey,
  Question,
  ShuffledQuestion
} from '../types';
import { getQuestionsByLesson } from '../data/lessons';

// Fisher-Yates shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Prepare question with randomized options
export function prepareShuffledQuestion(q: Question): ShuffledQuestion {
  const originalOptions: { text: string; isCorrect: boolean }[] = [
    { text: q.options.A, isCorrect: q.answer === 'A' },
    { text: q.options.B, isCorrect: q.answer === 'B' },
    { text: q.options.C, isCorrect: q.answer === 'C' },
    { text: q.options.D, isCorrect: q.answer === 'D' }
  ];

  const shuffled = shuffleArray(originalOptions);
  const keys: OptionKey[] = ['A', 'B', 'C', 'D'];

  const displayOptions = shuffled.map((item, idx) => ({
    key: keys[idx],
    text: item.text,
    isCorrect: item.isCorrect
  }));

  const newCorrectKey = displayOptions.find(o => o.isCorrect)?.key || 'A';

  return {
    ...q,
    originalId: q.id,
    answer: newCorrectKey,
    options: {
      A: displayOptions[0].text,
      B: displayOptions[1].text,
      C: displayOptions[2].text,
      D: displayOptions[3].text
    },
    displayOptions
  };
}

export function generateQuizQuestions(
  lessonId: string,
  level: LevelFilter,
  count: number,
  specificQuestionIds?: number[]
): ShuffledQuestion[] {
  const allLessonQuestions = getQuestionsByLesson(lessonId);

  // If retry specific wrong questions
  if (specificQuestionIds && specificQuestionIds.length > 0) {
    const targeted = allLessonQuestions.filter(q => specificQuestionIds.includes(q.id));
    return shuffleArray(targeted).map(prepareShuffledQuestion);
  }

  let selected: Question[] = [];

  if (level === 'all') {
    const nbList = allLessonQuestions.filter(q => q.level === 'nhan_biet');
    const thList = allLessonQuestions.filter(q => q.level === 'thong_hieu');
    const vdList = allLessonQuestions.filter(q => q.level === 'van_dung');

    const baseCount = Math.floor(count / 3);
    const remainder = count % 3;

    const nbCount = baseCount + (remainder >= 1 ? 1 : 0);
    const thCount = baseCount + (remainder === 2 ? 1 : 0);
    const vdCount = baseCount;

    const pickedNb = shuffleArray(nbList).slice(0, nbCount);
    const pickedTh = shuffleArray(thList).slice(0, thCount);
    const pickedVd = shuffleArray(vdList).slice(0, vdCount);

    selected = shuffleArray([...pickedNb, ...pickedTh, ...pickedVd]);
  } else {
    const filtered = allLessonQuestions.filter(q => q.level === level);
    selected = shuffleArray(filtered).slice(0, count);
  }

  // If still less than count for some reason, pad from all
  if (selected.length < count) {
    const existingIds = new Set(selected.map(q => q.id));
    const leftovers = allLessonQuestions.filter(q => !existingIds.has(q.id));
    const extra = shuffleArray(leftovers).slice(0, count - selected.length);
    selected = shuffleArray([...selected, ...extra]);
  }

  return selected.map(prepareShuffledQuestion);
}

// LocalStorage helpers
const STORAGE_KEY_HISTORY = 'giasu_tinhoc10_history_v1';
const STORAGE_KEY_STUDENT = 'giasu_tinhoc10_student_v1';
const STORAGE_KEY_SOUND = 'giasu_tinhoc10_sound_v1';

export function getSavedStudentProfile(): { name: string; class: string } {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_STUDENT);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load student profile', e);
  }
  return { name: '', class: '10A1' };
}

export function saveStudentProfile(name: string, studentClass: string): void {
  try {
    localStorage.setItem(
      STORAGE_KEY_STUDENT,
      JSON.stringify({ name: name.trim(), class: studentClass.trim() })
    );
  } catch (e) {
    console.error('Failed to save student profile', e);
  }
}

export function getHistoryRecords(): HistoryRecord[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to read history', e);
  }
  return [];
}

export function saveHistoryRecord(record: HistoryRecord): void {
  try {
    const history = getHistoryRecords();
    const updated = [record, ...history].slice(0, 30); // keep last 30
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save history', e);
  }
}

export function clearHistoryRecords(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_HISTORY);
  } catch (e) {
    console.error('Failed to clear history', e);
  }
}

export function getSoundEnabled(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SOUND);
    return saved !== null ? saved === 'true' : true;
  } catch {
    return true;
  }
}

export function saveSoundEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY_SOUND, String(enabled));
  } catch (e) {
    console.error('Failed to save sound settings', e);
  }
}

// Gentle Web Audio API Sound Synthesizer
class SoundEffects {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  playCorrect(): void {
    if (!getSoundEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(659.25, now + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.22); // G5

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.35);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.35);
  }

  playIncorrect(): void {
    if (!getSoundEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.2);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  }

  playVictory(): void {
    if (!getSoundEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const now = ctx.currentTime + i * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.16, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    });
  }
}

export const sounds = new SoundEffects();

// Smart recommendation generation based on quiz results
export function generateTutorAdvice(
  levelStats: {
    nhan_biet: { correct: number; total: number };
    thong_hieu: { correct: number; total: number };
    van_dung: { correct: number; total: number };
  },
  percentage: number
): {
  rating: string;
  badgeColor: string;
  icon: string;
  summary: string;
  recommendations: string[];
} {
  let rating = '🙂 Khá';
  let badgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
  let icon = '🙂';
  let summary = 'Bạn đã hoàn thành bài ôn tập với kết quả tương đối tốt.';

  if (percentage >= 90) {
    rating = '🌟 Xuất sắc';
    badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    icon = '🌟';
    summary = 'Tuyệt vời! Bạn nắm cực kỳ vững kiến thức Bài 2 và có tư duy vận dụng công nghệ rất nhạy bén!';
  } else if (percentage >= 80) {
    rating = '👍 Tốt';
    badgeColor = 'bg-indigo-100 text-indigo-800 border-indigo-300';
    icon = '👍';
    summary = 'Rất tốt! Bạn đã hiểu rõ hầu hết các khái niệm thiết bị thông minh, IoT và các thành tựu của Tin học.';
  } else if (percentage >= 65) {
    rating = '🙂 Khá';
    badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    icon = '🙂';
    summary = 'Khá tốt! Bạn đã nắm được kiến thức nền tảng, chỉ cần rèn luyện thêm một vài tình huống thực tế.';
  } else {
    rating = '📚 Cần ôn tập thêm';
    badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
    icon = '📚';
    summary = 'Đừng nản lòng nhé! Hãy xem lại các câu trả lời sai bên dưới và bấm nút "Ôn lại câu sai" để củng cố ngay.';
  }

  const recommendations: string[] = [];

  const nbRatio = levelStats.nhan_biet.total > 0 ? levelStats.nhan_biet.correct / levelStats.nhan_biet.total : 1;
  const thRatio = levelStats.thong_hieu.total > 0 ? levelStats.thong_hieu.correct / levelStats.thong_hieu.total : 1;
  const vdRatio = levelStats.van_dung.total > 0 ? levelStats.van_dung.correct / levelStats.van_dung.total : 1;

  if (nbRatio < 0.7) {
    recommendations.push('Đọc lại khái niệm về Thiết bị thông minh, các mốc thời gian lịch sử (Hệ điều hành OS/360 năm 1964, TCP/IP năm 1983, WWW năm 1992, FORTRAN 1957).');
  }
  if (thRatio < 0.7) {
    recommendations.push('Ôn tập kĩ bản chất của IoT (Internet vạn vật), Trí tuệ nhân tạo (AI), kinh tế tri thức và 4 cuộc Cách mạng công nghiệp.');
  }
  if (vdRatio < 0.7) {
    recommendations.push('Liên hệ thực tế nhiều hơn với các ví dụ: Hệ thống Smart Home, xe tự hành, camera nhận diện, thu phí ETC và an toàn khi tham gia mạng xã hội.');
  }

  if (recommendations.length === 0) {
    recommendations.push('Bạn đã nắm rất toàn diện Bài 2. Hãy tự tin bước vào các bài học tiếp theo hoặc thử thách chế độ thi bấm giờ nhé!');
  }

  return {
    rating,
    badgeColor,
    icon,
    summary,
    recommendations
  };
}
