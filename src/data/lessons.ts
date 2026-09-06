import { LessonInfo, Question } from '../types';
import { nhanBietQuestions } from './questions_bai2_nhanbiet';
import { thongHieuQuestions } from './questions_bai2_thonghieu';
import { vanDungQuestions } from './questions_bai2_vandung';

export const LESSONS: Record<string, LessonInfo> = {
  bai2: {
    id: 'bai2',
    code: 'BÀI 2',
    title: 'Vai trò của thiết bị thông minh và Tin học đối với xã hội',
    description: 'Tìm hiểu về thiết bị thông minh, IoT, AI, CMCN 4.0, kinh tế tri thức và các thành tựu nổi bật của ngành Tin học.',
    topics: [
      '1. Thiết bị thông minh và đặc điểm',
      '2. Cách mạng công nghiệp 4.0 & IoT',
      '3. Trí tuệ nhân tạo (AI) & Kinh tế tri thức',
      '4. Đóng góp của Tin học trong xã hội (Quản lý, Tự động hóa, KH-KT)',
      '5. Thành tựu phát triển Tin học (Hệ điều hành, Internet, WWW, Ngôn ngữ bậc cao, CSDL, Big Data)'
    ]
  },
  bai1: {
    id: 'bai1',
    code: 'BÀI 1',
    title: 'Thông tin và xử lí thông tin',
    description: 'Khái niệm thông tin, dữ liệu, các bước xử lý thông tin và các đơn vị đo lường thông tin cơ bản.',
    topics: [
      '1. Thông tin và dữ liệu',
      '2. Đơn vị lưu trữ dữ liệu (Bit, Byte, KB, MB, GB, TB...)',
      '3. Lưu trữ, xử lí và truyền thông tin bằng thiết bị số'
    ]
  },
  bai3: {
    id: 'bai3',
    code: 'BÀI 3',
    title: 'Một số kiểu dữ liệu và dữ liệu văn bản',
    description: 'Khám phá cách biểu diễn số, văn bản, bảng mã ASCII và Unicode tiếng Việt trong máy tính.',
    topics: [
      '1. Phân loại và biểu diễn thông tin trong máy tính',
      '2. Bảng mã ASCII và Unicode tiếng Việt',
      '3. Số hóa dữ liệu văn bản'
    ]
  }
};

// All questions for Bai 2 (Total: 96 questions = 32 Nhận biết + 32 Thông hiểu + 32 Vận dụng)
export const ALL_QUESTIONS: Record<string, Question[]> = {
  bai2: [
    ...nhanBietQuestions,
    ...thongHieuQuestions,
    ...vanDungQuestions
  ]
};

export const DEFAULT_LESSON_ID = 'bai2';

export function getQuestionsByLesson(lessonId: string = DEFAULT_LESSON_ID): Question[] {
  return ALL_QUESTIONS[lessonId] || ALL_QUESTIONS.bai2;
}
