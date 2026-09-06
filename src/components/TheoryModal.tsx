import React from 'react';
import { BookOpen, CheckCircle2, Cpu, Globe, Layers, ShieldCheck, Sparkles, X } from 'lucide-react';

interface TheoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TheoryModal: React.FC<TheoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/15 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Cẩm Nang Kiến Thức Trọng Tâm - Bài 2</h2>
              <p className="text-xs text-blue-100">SGK Tin học 10 (Kết nối tri thức) • GV: Nguyễn Tấn Thắng</p>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Section 1 */}
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 flex items-center gap-2 text-base mb-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              1. Thiết bị thông minh là gì?
            </h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Định nghĩa:</strong> Là thiết bị điện tử có thể hoạt động <em>tự chủ</em> không cần sự can thiệp liên tục của con người, <em>tự thích ứng</em> với hoàn cảnh và có khả năng <em>kết nối trao đổi dữ liệu</em> với các thiết bị khác qua mạng không dây (Wi-Fi, Bluetooth...).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Ví dụ:</strong> Điện thoại thông minh (smartphone), máy tính bảng, camera IP nhận diện chuyển động, đồng hồ thông minh (smartwatch), robot hút bụi...</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 flex items-center gap-2 text-base mb-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              2. Bốn cuộc Cách mạng công nghiệp & IoT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="p-3 bg-white rounded-lg border border-indigo-100">
                <div className="font-semibold text-indigo-800 text-xs">CMCN 1.0 (Thế kỉ XVIII - XIX)</div>
                <div className="text-xs text-slate-600">Động cơ hơi nước • Cơ giới hóa lao động</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-100">
                <div className="font-semibold text-indigo-800 text-xs">CMCN 2.0 (Thế kỉ XIX - XX)</div>
                <div className="text-xs text-slate-600">Năng lượng điện • Sản xuất dây chuyền</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-100">
                <div className="font-semibold text-indigo-800 text-xs">CMCN 3.0 (Thế kỉ XX - XXI)</div>
                <div className="text-xs text-slate-600">Máy tính điện tử • Tin học hóa tự động</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-100">
                <div className="font-semibold text-indigo-800 text-xs">CMCN 4.0 (Đầu thế kỉ XXI)</div>
                <div className="text-xs text-slate-600">Công nghệ số • IoT • AI • Hệ thực - ảo (CPS)</div>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              <strong>IoT (Internet of Things):</strong> Kết nối các thiết bị thông minh với nhau qua mạng để tự động thu thập, trao đổi và xử lý dữ liệu thời gian thực trên diện rộng (ví dụ: Nhà thông minh, thu phí không dừng ETC, xe tự hành).
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-900 flex items-center gap-2 text-base mb-2">
              <Layers className="w-5 h-5 text-amber-600" />
              3. Đóng góp của Tin học đối với xã hội
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• <strong>Quản lý:</strong> Số hóa trường học (LMS, học bạ điện tử), ngân hàng điện tử, sàn thương mại, thẻ CCCD gắn chip.</li>
              <li>• <strong>Tự động hóa:</strong> Robot công nghiệp làm việc chính xác, an toàn trong môi trường độc hại, nhà máy thông minh.</li>
              <li>• <strong>Khoa học – kỹ thuật:</strong> Siêu máy tính tính toán hàng triệu tỉ phép tính/giây, dự báo thời tiết, giải mã bản đồ gen, mô phỏng phản ứng.</li>
              <li>• <strong>Thay đổi cách làm việc:</strong> Họp trực tuyến, văn phòng không giấy tờ, nhiếp ảnh số, dạy và học online.</li>
              <li>• <strong>Giao tiếp cộng đồng:</strong> Email, mạng xã hội (Facebook, Zalo, Youtube) kết nối tức thời, xóa bỏ khoảng cách.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-base mb-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              4. Các mốc thành tựu phát triển nổi bật
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex justify-between items-center py-1 border-b border-emerald-200/50">
                <span className="font-semibold text-emerald-800">1957</span>
                <span>Ngôn ngữ lập trình bậc cao đầu tiên: <strong>FORTRAN</strong></span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-emerald-200/50">
                <span className="font-semibold text-emerald-800">1964</span>
                <span>Hệ điều hành đầu tiên đặt nền móng hiện đại: <strong>OS/360</strong> của IBM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-emerald-200/50">
                <span className="font-semibold text-emerald-800">Cuối 1960s & sau 1970</span>
                <span>Hệ cơ sở dữ liệu quan hệ dạng bảng (DB2, Oracle, MySQL, SQL Server)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-emerald-200/50">
                <span className="font-semibold text-emerald-800">1983</span>
                <span>Bộ giao thức <strong>TCP/IP</strong> chuẩn hóa kết nối mạng toàn cầu Internet</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-emerald-200/50">
                <span className="font-semibold text-emerald-800">1992</span>
                <span>Phát minh mạng thông tin toàn cầu <strong>World Wide Web (WWW)</strong></span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-semibold text-emerald-800">Hiện đại</span>
                <span>Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data) tạo bước đột phá tri thức số</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Đã hiểu, bắt đầu ôn luyện
          </button>
        </div>
      </div>
    </div>
  );
};
