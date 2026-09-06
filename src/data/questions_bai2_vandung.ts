import { Question } from '../types';

export const vanDungQuestions: Question[] = [
  {
    id: 301,
    lessonId: 'bai2',
    topic: 'topic_1',
    topicName: 'Thiết bị thông minh trong an ninh gia đình',
    level: 'van_dung',
    question: 'Gia đình bạn Nam lắp đặt một chiếc camera an ninh thông minh ở cửa ra vào. Khi có người lạ bước vào sân vào lúc nửa đêm, camera tự động bật đèn pha, phát chuông cảnh báo và gửi video trực tiếp về điện thoại của bố Nam. Tình huống này chứng minh camera thông minh sở hữu những đặc điểm nào?',
    options: {
      A: 'Khả năng cảm biến phát hiện chuyển động, tự xử lý ra quyết định và kết nối mạng không dây để cảnh báo thời gian thực',
      B: 'Chỉ là một chiếc camera quang học thông thường có người ngồi canh 24/24',
      C: 'Thiết bị sử dụng năng lượng hạt nhân siêu nhỏ',
      D: 'Camera chỉ có thể hoạt động khi được cắm trực tiếp vào máy in laser'
    },
    answer: 'A',
    explanation: 'Camera thông minh kết hợp cảm biến hồng ngoại, thuật toán xử lý hình ảnh tự động và kết nối Internet để thực hiện chuỗi phản ứng thông minh bảo vệ ngôi nhà.',
    keyKnowledge: 'Thiết bị an ninh thông minh tích hợp cảm biến, xử lý tự chủ và truyền tin báo động tức thời qua mạng.'
  },
  {
    id: 302,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'Hệ thống giao thông thông minh (ITS)',
    level: 'van_dung',
    question: 'Tại một thành phố hiện đại, hệ thống đèn tín hiệu giao thông tự động điều chỉnh thời gian đèn xanh dài hơn trên các tuyến đường đang bị ùn ứ dựa vào dữ liệu truyền về từ các camera giám sát trên cao. Đây là ứng dụng thực tế của:',
    options: {
      A: 'Hệ thống IoT và thuật toán điều khiển tự động thích ứng với lưu lượng giao thông thực tế',
      B: 'Việc cử cảnh sát giao thông đứng chỉnh từng nút bấm thủ công ở mỗi cột đèn',
      C: 'Phương pháp đếm xe bằng tay của các tình nguyện viên',
      D: 'Hệ thống phát thanh radio FM truyền thống'
    },
    answer: 'A',
    explanation: 'Camera giao thông đóng vai trò cảm biến IoT thu thập mật độ phương tiện thời gian thực, máy chủ tính toán và điều tiết thời lượng đèn xanh/đỏ để giảm ùn tắc.',
    keyKnowledge: 'IoT trong giao thông thông minh giúp thu thập dữ liệu diện rộng và tối ưu hóa luồng phương tiện tự động.'
  },
  {
    id: 303,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'Nhà thông minh (Smart Home)',
    level: 'van_dung',
    question: 'Bạn Lan chuẩn bị đi học về vào một ngày hè oi bức. Trước khi về nhà 15 phút, Lan mở ứng dụng trên smartphone và bật điều hòa phòng khách lên 25°C. Khi Lan mở cửa bước vào, cảm biến nhận diện khuôn mặt tự động mở khóa cửa và đèn chiếu sáng tự bật. Mô hình này vận hành nhờ:',
    options: {
      A: 'Mạng lưới các thiết bị gia dụng thông minh kết nối IoT và điều khiển đồng bộ qua Internet',
      B: 'Lan đã thuê một người giúp việc ngồi chờ sẵn ở cửa',
      C: 'Các thiết bị gia dụng tự nối dây điện dài tới trường học của Lan',
      D: 'Các thiết bị chỉ hoạt động khi có sóng siêu âm từ trường phát ra'
    },
    answer: 'A',
    explanation: 'Smart Home liên kết các thiết bị điện trong nhà qua mạng Wi-Fi/Zigbee và máy chủ đám mây, cho phép người dùng giám sát và điều khiển từ xa linh hoạt.',
    keyKnowledge: 'Nhà thông minh mang lại tiện nghi, tiết kiệm năng lượng và an toàn nhờ sự kết nối của các thiết bị IoT.'
  },
  {
    id: 304,
    lessonId: 'bai2',
    topic: 'topic_5',
    topicName: 'Trí tuệ nhân tạo trong học tập',
    level: 'van_dung',
    question: 'Khi học sinh chụp ảnh một bài toán hình học hoặc một đoạn văn tiếng Anh khó bằng ứng dụng di động, app tự động nhận diện chữ viết (OCR), phân tích nội dung và đưa ra hướng dẫn giải chi tiết từng bước. Ứng dụng này đã vận dụng thành tựu Tin học nào?',
    options: {
      A: 'Trí tuệ nhân tạo (AI) trong thị giác máy tính và xử lý ngôn ngữ tự nhiên',
      B: 'Chỉ là chức năng phóng to thu nhỏ hình ảnh của ống kính máy ảnh',
      C: 'Bộ vi xử lý làm mát bằng nitơ lỏng',
      D: 'Công nghệ in 3D laser kim loại'
    },
    answer: 'A',
    explanation: 'Ứng dụng sử dụng Computer Vision (thị giác máy tính) để nhận diện ký tự từ ảnh và thuật toán AI để phân tích tri thức, tạo lời giải phù hợp.',
    keyKnowledge: 'AI hỗ trợ đắc lực trong giáo dục thông qua nhận dạng hình ảnh, dịch thuật và gia sư học tập cá nhân hóa.'
  },
  {
    id: 305,
    lessonId: 'bai2',
    topic: 'topic_7',
    topicName: 'Tin học trong quản lý trường học',
    level: 'van_dung',
    question: 'Trường THPT của bạn An sử dụng Căn cước công dân gắn chip hoặc thẻ học sinh thông minh tích hợp điểm danh bằng nhận diện khuôn mặt ở cổng trường. Hệ thống tự động gửi tin nhắn thông báo cho phụ huynh khi học sinh đã vào trường. Giải pháp này đem lại lợi ích quản lý nào sau đây?',
    options: {
      A: 'Chính xác, nhanh chóng, minh bạch thông tin chuyên cần và tăng cường sự phối hợp giữa nhà trường với gia đình',
      B: 'Làm tăng thời gian xếp hàng của học sinh lên 2 tiếng',
      C: 'Bắt buộc học sinh phải nộp lại điện thoại cho bảo vệ giữ',
      D: 'Không lưu lại được bất kỳ dữ liệu nào vào sổ điểm'
    },
    answer: 'A',
    explanation: 'Điểm danh thông minh tự động hóa khâu quản lý sĩ số, tránh gian lận, tiết kiệm thời gian cho giáo viên chủ nhiệm và giúp phụ huynh an tâm.',
    keyKnowledge: 'Tin học quản lý trường học giúp tối ưu quy trình nghiệp vụ, số hóa dữ liệu học sinh chính xác và tiện lợi.'
  },
  {
    id: 306,
    lessonId: 'bai2',
    topic: 'topic_6',
    topicName: 'Kinh tế tri thức trong xuất bản và sáng tạo',
    level: 'van_dung',
    question: 'Một lập trình viên trẻ tại Việt Nam viết một ứng dụng di động hữu ích và phát hành trên Google Play / App Store. Ứng dụng này thu hút 1 triệu lượt tải toàn cầu và đem lại doanh thu cao từ quảng cáo và mua tính năng. Đây là ví dụ tiêu biểu cho:',
    options: {
      A: 'Giá trị to lớn của sản phẩm trí tuệ và phần mềm trong nền kinh tế tri thức số',
      B: 'Sự phụ thuộc hoàn toàn vào xuất khẩu tài nguyên khoáng sản thô',
      C: 'Phương thức buôn bán trao đổi hàng đổi hàng thời cổ đại',
      D: 'Hoạt động kinh doanh chỉ dựa vào mặt bằng cửa hàng vật lý truyền thống'
    },
    answer: 'A',
    explanation: 'Trong kinh tế số, phần mềm và sản phẩm số có chi phí nhân bản gần bằng 0, có thể phân phối toàn cầu tức thời và tạo ra giá trị kinh tế rất lớn từ tri thức.',
    keyKnowledge: 'Kinh tế số cho phép các sản phẩm tri thức (phần mềm, nội dung số) tiếp cận thị trường toàn cầu với chi phí tối ưu.'
  },
  {
    id: 307,
    lessonId: 'bai2',
    topic: 'topic_8',
    topicName: 'Tự động hóa trong nông nghiệp công nghệ cao',
    level: 'van_dung',
    question: 'Trong một trang trại trồng dưa lưới công nghệ cao, các cảm biến độ ẩm đất và nhiệt độ không khí liên tục đo đạc. Khi độ ẩm đất giảm dưới ngưỡng 40%, máy tính điều khiển tự động bật hệ thống tưới nhỏ giọt kết hợp bón phân dinh dưỡng vi lượng. Tình huống này chứng tỏ:',
    options: {
      A: 'Tin học và tự động hóa giúp nông nghiệp nâng cao năng suất, tiết kiệm nguồn nước và tối ưu hóa chi phí sản xuất',
      B: 'Nông nghiệp công nghệ cao bắt buộc nông dân phải dùng gầu múc nước tưới thủ công',
      C: 'Cây trồng không cần ánh sáng mặt trời mà chỉ cần sóng Wi-Fi',
      D: 'Đất canh tác sẽ biến thành kim loại sau khi tưới tự động'
    },
    answer: 'A',
    explanation: 'Nông nghiệp chính xác (Smart Agriculture) ứng dụng IoT và tự động hóa giúp kiểm soát môi trường sinh trưởng của cây trồng một cách tối ưu và khoa học.',
    keyKnowledge: 'Tự động hóa nông nghiệp với cảm biến và điều khiển máy tính nâng cao chất lượng nông sản và tiết kiệm tài nguyên.'
  },
  {
    id: 308,
    lessonId: 'bai2',
    topic: 'topic_9',
    topicName: 'Tin học trong y học và giải phẫu',
    level: 'van_dung',
    question: 'Trước một ca phẫu thuật phức tạp, các bác sĩ sử dụng hình ảnh chụp CT/MRI đưa vào phần mềm đồ họa 3D để tái tạo mô hình cơ thể bệnh nhân và thực hành thử nghiệm các đường mổ mô phỏng. Ứng dụng này giúp:',
    options: {
      A: 'Lên kế hoạch mổ chính xác, dự đoán trước các rủi ro và tăng tỉ lệ thành công của ca phẫu thuật',
      B: 'Thay thế hoàn toàn thuốc gây mê và thuốc kháng sinh',
      C: 'Bệnh nhân không cần phải thực hiện phẫu thuật thật nữa',
      D: 'Làm tăng nguy cơ nhiễm trùng vết mổ'
    },
    answer: 'A',
    explanation: 'Mô phỏng y khoa và đồ họa 3D cho phép bác sĩ phẫu thuật quan sát chi tiết giải phẫu ở mọi góc độ, chọn đường mổ tối ưu và giảm thiểu tổn thương cho bệnh nhân.',
    keyKnowledge: 'Tin học trong y tế hỗ trợ chẩn đoán hình ảnh, mô phỏng phẫu thuật và nâng cao độ an toàn cho người bệnh.'
  },
  {
    id: 309,
    lessonId: 'bai2',
    topic: 'topic_10',
    topicName: 'Tin học thay đổi cách thức mua sắm',
    level: 'van_dung',
    question: 'Bạn Minh muốn mua một cuốn sách tham khảo Tin học. Thay vì phải đi xe 15km đến hiệu sách, Minh mở sàn thương mại điện tử trên điện thoại, so sánh giá của 5 nhà sách khác nhau, đọc đánh giá của độc giả trước và bấm đặt giao hàng tận nhà trong 2 giờ. Trải nghiệm này thể hiện:',
    options: {
      A: 'Tin học và Internet thay đổi phương thức thương mại, giúp người tiêu dùng tiết kiệm thời gian, chi phí và có nhiều lựa chọn tối ưu',
      B: 'Minh đã vi phạm quy chế mua bán hàng hóa',
      C: 'Sách in giấy sẽ không bao giờ được xuất bản nữa',
      D: 'Hiệu sách truyền thống bị cấm hoạt động hoàn toàn'
    },
    answer: 'A',
    explanation: 'Thương mại điện tử (E-commerce) kết nối người mua và người bán thông qua mạng, cung cấp công cụ so sánh, đánh giá và thanh toán trực tuyến thuận tiện.',
    keyKnowledge: 'Thương mại điện tử làm thay đổi thói quen mua sắm, mở rộng thị trường và tối ưu hóa chuỗi cung ứng.'
  },
  {
    id: 310,
    lessonId: 'bai2',
    topic: 'topic_18',
    topicName: 'Big Data trong phân tích dịch bệnh',
    level: 'van_dung',
    question: 'Trong đại dịch, các cơ quan y tế tổng hợp dữ liệu di chuyển, khai báo y tế điện tử và kết quả xét nghiệm của hàng triệu người dân để xây dựng bản đồ dịch tễ và dự báo vùng có nguy cơ bùng phát cao. Đây là ứng dụng cụ thể của:',
    options: {
      A: 'Xử lý dữ liệu lớn (Big Data) và phân tích dữ liệu không gian hỗ trợ ra quyết định phòng dịch',
      B: 'Chỉ là việc in các tờ rơi giấy dán ở đầu ngõ',
      C: 'Phương pháp gửi thư tay hỏi thăm từng hộ gia đình',
      D: 'Hệ thống loa phường phát tin radio đơn thuần'
    },
    answer: 'A',
    explanation: 'Big Data y tế cho phép phân tích các mô hình lây nhiễm phức tạp, phát hiện sớm các ổ dịch và phân bổ nguồn lực y tế chính xác, kịp thời.',
    keyKnowledge: 'Big Data giúp giải quyết các bài toán xã hội quy mô lớn như kiểm soát dịch bệnh và quản lý y tế cộng đồng.'
  },
  {
    id: 311,
    lessonId: 'bai2',
    topic: 'topic_11',
    topicName: 'Tin học và giao tiếp an toàn',
    level: 'van_dung',
    question: 'Khi nhận được một tin nhắn trên mạng xã hội từ tài khoản người quen thông báo: "Bạn vừa trúng thưởng xe máy điện SH, hãy nhấp vào đường link này và nhập mật khẩu ngân hàng để nhận quà", bạn học sinh lớp 10 nên xử lý như thế nào?',
    options: {
      A: 'Cảnh giác, không bấm vào liên kết lạ, không cung cấp mật khẩu/mã OTP và gọi điện trực tiếp xác minh với người bạn đó',
      B: 'Lập tức làm theo hướng dẫn và gửi tiếp tin nhắn cho 20 người khác',
      C: 'Gửi số tài khoản và mật khẩu của bố mẹ để nhận thêm quà gấp đôi',
      D: 'Tắt máy tính và không bao giờ dùng Internet nữa'
    },
    answer: 'A',
    explanation: 'Đây là hình thức lừa đảo giả mạo (Phishing) chiếm đoạt tài khoản. Nguyên tắc an toàn thông tin cơ bản là không nhấp liên kết lạ và không bao giờ cung cấp mật khẩu/OTP.',
    keyKnowledge: 'Sử dụng Internet văn minh đòi hỏi kỹ năng nhận diện lừa đảo trực tuyến và bảo vệ an toàn thông tin cá nhân.'
  },
  {
    id: 312,
    lessonId: 'bai2',
    topic: 'topic_16',
    topicName: 'Lập trình giải quyết bài toán thực tế',
    level: 'van_dung',
    question: 'Để tính điểm trung bình môn cả năm và xếp loại học lực cho 45 bạn trong lớp một cách nhanh chóng và không nhầm lẫn, giải pháp tối ưu nhất bằng Tin học là:',
    options: {
      A: 'Viết một chương trình ngắn bằng Python hoặc dùng bảng tính điện tử với công thức tự động',
      B: 'Dùng bút mực tính nhẩm từng phép chia trên giấy nháp nhiều lần',
      C: 'Ước lượng cảm tính điểm số của từng bạn',
      D: 'Gieo xúc xắc để chọn điểm cho ngẫu nhiên'
    },
    answer: 'A',
    explanation: 'Ngôn ngữ lập trình và bảng tính điện tử giúp xử lý tính toán lặp lại tự động, chuẩn xác tuyệt đối và tiết kiệm thời gian.',
    keyKnowledge: 'Lập trình bậc cao giúp tự động hóa việc tính toán và giải quyết các bài toán thực tiễn trong học tập và công việc.'
  },
  {
    id: 313,
    lessonId: 'bai2',
    topic: 'topic_17',
    topicName: 'Thiết kế cơ sở dữ liệu thư viện trường',
    level: 'van_dung',
    question: 'Thư viện trường học có 10.000 đầu sách và 1.200 học sinh thường xuyên mượn trả. Để việc tra cứu sách theo tên tác giả, thể loại và theo dõi hạn trả sách diễn ra trong vài giây, thủ thư cần:',
    options: {
      A: 'Sử dụng phần mềm quản lý thư viện chạy trên một Hệ quản trị cơ sở dữ liệu quan hệ (như MySQL/SQL Server)',
      B: 'Ghi nhớ tất cả 10.000 cuốn sách vào trong đầu mà không dùng sổ sách gì',
      C: 'Viết từng cuốn sách vào 1 tờ giấy dán quanh phòng đọc',
      D: 'Xếp tất cả sách vào 1 đống ở giữa phòng để ai cần gì tự bới'
    },
    answer: 'A',
    explanation: 'Hệ quản trị CSDL cho phép đánh chỉ mục (index), tìm kiếm nhanh theo nhiều tiêu chí (tác giả, năm xuất bản, trạng thái mượn) và cập nhật dữ liệu mượn trả tức thì.',
    keyKnowledge: 'Hệ quản trị CSDL là công cụ nền tảng để xây dựng các hệ thống tra cứu và quản lý thông tin quy mô lớn.'
  },
  {
    id: 314,
    lessonId: 'bai2',
    topic: 'topic_13',
    topicName: 'Lựa chọn hệ điều hành',
    level: 'van_dung',
    question: 'Khi mua một chiếc máy tính xách tay mới để phục vụ học tập Tin học 10 và lập trình Python, người dùng cần cài đặt thành phần phần mềm nào đầu tiên trước khi cài các ứng dụng khác?',
    options: {
      A: 'Hệ điều hành (như Windows, Linux hoặc macOS)',
      B: 'Trò chơi điện tử 3D',
      C: 'Phần mềm xem phim hoạt hình',
      D: 'Phần mềm nghe nhạc trực tuyến'
    },
    answer: 'A',
    explanation: 'Hệ điều hành là phần mềm hệ thống nền tảng bắt buộc phải có để điều khiển phần cứng và tạo môi trường cài đặt cho mọi phần mềm ứng dụng khác.',
    keyKnowledge: 'Hệ điều hành là phần mềm đầu tiên cần cài đặt trên máy tính để quản lý tài nguyên và chạy các chương trình ứng dụng.'
  },
  {
    id: 315,
    lessonId: 'bai2',
    topic: 'topic_3',
    topicName: 'Xe tự hành trong vận tải công cộng',
    level: 'van_dung',
    question: 'Xe bus điện tự hành không người lái được thử nghiệm tại một khu đô thị thông minh. Hành khách chỉ cần mở app đặt điểm đến, xe tự động di chuyển theo lộ trình an toàn, tránh người đi bộ và tự tấp vào lề đón trả khách. Xe bus này là thành tựu kết hợp của:',
    options: {
      A: 'Thiết bị thông minh, cảm biến IoT, định vị vệ tinh và trí tuệ nhân tạo (AI)',
      B: 'Một tài xế tàng hình ngồi lái xe',
      C: 'Dây cáp kéo ngầm dưới lòng đường giống như cáp treo',
      D: 'Sức gió đẩy từ các tòa nhà cao tầng'
    },
    answer: 'A',
    explanation: 'Phương tiện tự hành là kết tinh của CMCN 4.0, kết hợp cảm biến thu nhận dữ liệu môi trường, AI ra quyết định và hệ thống cơ điện tử chính xác.',
    keyKnowledge: 'Xe tự hành kết hợp cảm biến, AI và IoT để tự động định vị, tránh vật cản và điều khiển an toàn.'
  },
  {
    id: 316,
    lessonId: 'bai2',
    topic: 'topic_14',
    topicName: 'Ứng dụng Internet trong học tập nhóm',
    level: 'van_dung',
    question: 'Một nhóm 4 học sinh ở 4 địa điểm khác nhau cùng làm một bài thuyết trình môn Tin học. Họ cùng mở một tệp Google Docs/Slides để cùng soạn thảo, nhận xét và chỉnh sửa bài thuyết trình cùng lúc theo thời gian thực. Hoạt động này được hỗ trợ trực tiếp bởi:',
    options: {
      A: 'Điện toán đám mây và ứng dụng cộng tác trực tuyến trên nền tảng Internet',
      B: 'Việc gửi từng đĩa mềm qua đường bưu điện',
      C: 'Phương pháp in bài ra giấy rồi cắt dán thủ công',
      D: 'Máy fax thế hệ cũ'
    },
    answer: 'A',
    explanation: 'Các công cụ văn phòng đám mây (Cloud Office) cho phép nhiều người dùng đồng bộ chỉnh sửa một tài liệu theo thời gian thực nhờ kết nối Internet.',
    keyKnowledge: 'Điện toán đám mây và Internet hỗ trợ làm việc nhóm trực tuyến hiệu quả và đồng bộ tức thời.'
  },
  {
    id: 317,
    lessonId: 'bai2',
    topic: 'topic_8',
    topicName: 'Tự động hóa nhà kho thông minh',
    level: 'van_dung',
    question: 'Trong các trung tâm phân phối hàng hóa lớn (như Amazon hay bưu điện), các robot tự hành AGV tự động chạy đến các kệ hàng, nâng kiện hàng và mang đến vị trí đóng gói cho công nhân. Việc này mang lại hiệu quả gì?',
    options: {
      A: 'Tăng tốc độ xử lý đơn hàng lên nhiều lần, giảm sức lao động nặng nhọc cho con người và giảm thiểu nhầm lẫn hàng hóa',
      B: 'Làm thất lạc toàn bộ hàng hóa trong kho',
      C: 'Bắt buộc công nhân phải đi bộ hàng chục km mỗi ngày',
      D: 'Làm hỏng tất cả các gói hàng dễ vỡ'
    },
    answer: 'A',
    explanation: 'Robot kho hàng di chuyển theo mã vạch dưới sàn và hướng dẫn từ máy chủ quản lý, tối ưu hóa quãng đường và tốc độ phân loại kiện hàng.',
    keyKnowledge: 'Tự động hóa kho vận thông minh giúp tối ưu hóa thời gian giao hàng và nâng cao năng suất logistics.'
  },
  {
    id: 318,
    lessonId: 'bai2',
    topic: 'topic_2',
    topicName: 'Tính thích ứng của thiết bị thông minh',
    level: 'van_dung',
    question: 'Màn hình điện thoại thông minh tự động tăng độ sáng khi bạn ra ngoài trời nắng gắt và tự động giảm độ sáng kèm chuyển sang tông màu vàng ấm khi bạn dùng trong phòng tối trước khi ngủ. Tính năng này hoạt động nhờ:',
    options: {
      A: 'Cảm biến ánh sáng môi trường kết hợp thuật toán phần mềm tự động điều chỉnh thông số hiển thị',
      B: 'Màn hình tự phát sinh cảm xúc giống con người',
      C: 'Bóng đèn huỳnh quang trong phòng phát lệnh điều khiển điện thoại',
      D: 'Nhà sản xuất điện thoại trực tiếp theo dõi qua vệ tinh để chỉnh hộ'
    },
    answer: 'A',
    explanation: 'Thiết bị thông minh thu nhận cường độ ánh sáng môi trường từ cảm biến quang và tự động điều chỉnh độ sáng/nhiệt độ màu để bảo vệ mắt và tiết kiệm pin.',
    keyKnowledge: 'Khả năng thích ứng với môi trường xung quanh là một đặc trưng quan trọng của thiết bị thông minh.'
  },
  {
    id: 319,
    lessonId: 'bai2',
    topic: 'topic_5',
    topicName: 'AI nhận diện khuôn mặt',
    level: 'van_dung',
    question: 'Tính năng mở khóa bằng khuôn mặt (Face ID / Face Unlock) trên smartphone vẫn nhận diện đúng chủ nhân ngay cả khi người đó đeo kính cận mới hoặc cắt tóc ngắn. Điều này là nhờ:',
    options: {
      A: 'Mô hình học sâu (Deep Learning) của AI đã học các đặc trưng 3D bất biến của khuôn mặt (khoảng cách mắt, mũi, xương gò má)',
      B: 'Camera điện thoại chỉ ghi lại màu tóc của người dùng',
      C: 'Điện thoại ghi nhớ chiếc kính cận chứ không ghi nhớ mặt',
      D: 'Bất kỳ ai đưa mặt vào cũng mở khóa được'
    },
    answer: 'A',
    explanation: 'Thuật toán AI nhận diện khuôn mặt trích xuất hàng vạn điểm đo đạc cấu trúc hình học 3D bất biến của xương mặt, giúp nhận diện chính xác kể cả khi có thay đổi nhỏ.',
    keyKnowledge: 'AI trong nhận diện sinh trắc học có khả năng học các đặc trưng cốt lõi để nhận dạng chính xác và an toàn.'
  },
  {
    id: 320,
    lessonId: 'bai2',
    topic: 'topic_10',
    topicName: 'Dạy và học trực tuyến',
    level: 'van_dung',
    question: 'Trong thời gian phải học tập từ xa do bão lũ, lớp học của thầy Thắng vẫn duy trì giảng dạy bình thường qua phần mềm hội thảo trực tuyến và làm bài tập trên ứng dụng web ôn tập. Yếu tố công nghệ nào đóng vai trò quyết định giúp việc học không bị gián đoạn?',
    options: {
      A: 'Hạ tầng mạng Internet tốc độ cao kết hợp các nền tảng phần mềm Tin học giáo dục trực tuyến',
      B: 'Việc gửi thư viết tay bưu điện qua đường chim bồ câu',
      C: 'Chỉ cần một chiếc máy cassette chạy băng từ',
      D: 'Học sinh tự học thuộc lòng mà không cần tài liệu học tập'
    },
    answer: 'A',
    explanation: 'Internet và các nền tảng EdTech (Google Meet, Zoom, hệ thống thi online) đảm bảo kết nối tri thức, tương tác thầy trò thông suốt mọi lúc mọi nơi.',
    keyKnowledge: 'Tin học và giáo dục số giúp quá trình học tập diễn ra liên tục, linh hoạt và không bị cản trở bởi khoảng cách địa lý.'
  },
  {
    id: 321,
    lessonId: 'bai2',
    topic: 'topic_12',
    topicName: 'Bảo vệ môi trường nhờ Tin học',
    level: 'van_dung',
    question: 'Việc theo dõi biến đổi khí hậu toàn cầu và hiện tượng băng tan ở Bắc Cực được thực hiện chính xác nhất hiện nay nhờ công cụ Tin học nào?',
    options: {
      A: 'Xử lý và so sánh ảnh viễn thám từ vệ tinh quan trắc Trái Đất qua nhiều năm bằng các thuật toán máy tính',
      B: 'Cử một người đứng đếm từng tảng băng trôi bằng mắt thường',
      C: 'Đo nhiệt độ bằng nhiệt kế thủy ngân cắm xuống biển ở một bãi tắm',
      D: 'Đọc các câu chuyện thần thoại dân gian cổ đại'
    },
    answer: 'A',
    explanation: 'Vệ tinh chụp ảnh Trái Đất liên tục, máy tính phân tích sự thay đổi diện tích bề mặt băng tuyết và nhiệt độ qua các thuật toán xử lý ảnh số chuyên dụng.',
    keyKnowledge: 'Tin học cung cấp công cụ giám sát môi trường toàn cầu, giúp nhân loại ứng phó với biến đổi khí hậu kịp thời.'
  },
  {
    id: 322,
    lessonId: 'bai2',
    topic: 'topic_15',
    topicName: 'Tìm kiếm học liệu trên WWW',
    level: 'van_dung',
    question: 'Khi cần tìm tài liệu nghiên cứu về "Lịch sử phát triển của Tin học" phục vụ bài thuyết trình, bạn học sinh nên sử dụng công cụ nào trên World Wide Web để tìm kiếm nhanh nhất?',
    options: {
      A: 'Công cụ tìm kiếm thông tin (Search Engine như Google, Bing) với các từ khóa chính xác',
      B: 'Mở từng trang web ngẫu nhiên trong số hàng tỉ trang web để đọc',
      C: 'Tắt kết nối mạng và chờ đợi tài liệu tự hiện lên màn hình',
      D: 'Gõ chữ "Tin học" vào thanh tiêu đề của trình phát nhạc Windows Media Player'
    },
    answer: 'A',
    explanation: 'Công cụ tìm kiếm trên Web lập chỉ mục hàng tỉ tài liệu và cho phép tra cứu thông tin học tập tức thì bằng các từ khóa truy vấn.',
    keyKnowledge: 'Kỹ năng tìm kiếm và chọn lọc thông tin trên WWW là năng lực số quan trọng của học sinh thời đại số.'
  },
  {
    id: 323,
    lessonId: 'bai2',
    topic: 'topic_7',
    topicName: 'Thẻ Căn cước công dân gắn chip',
    level: 'van_dung',
    question: 'Thẻ Căn cước công dân gắn chip điện tử của công dân Việt Nam tích hợp nhiều thông tin (họ tên, ngày sinh, số định danh, bảo hiểm y tế, mã định danh cá nhân...). Ưu điểm nổi bật của thẻ gắn chip so với chứng minh nhân dân bằng giấy trước đây là gì?',
    options: {
      A: 'Độ bảo mật thông tin cao, khó làm giả, có thể đọc và xác thực dữ liệu nhanh chóng qua đầu đọc chuyên dụng khi thực hiện thủ tục hành chính',
      B: 'Thẻ làm bằng vàng nguyên chất 24K',
      C: 'Thẻ có thể thay thế bóng đèn chiếu sáng ban đêm',
      D: 'Mỗi công dân phải làm lại thẻ mới vào mỗi tuần'
    },
    answer: 'A',
    explanation: 'Chip điện tử lưu trữ dữ liệu được mã hóa bảo mật, giúp các cơ quan quản lý xác thực danh tính nhanh gọn, hướng tới chính phủ điện tử hiện đại.',
    keyKnowledge: 'Thiết bị số có chip nhớ và mã hóa thông tin giúp hiện đại hóa công tác quản lý công dân và dịch vụ công trực tuyến.'
  },
  {
    id: 324,
    lessonId: 'bai2',
    topic: 'topic_18',
    topicName: 'AI dịch thuật thời gian thực',
    level: 'van_dung',
    question: 'Một học sinh Việt Nam đi giao lưu quốc tế, bạn sử dụng ứng dụng dịch trên điện thoại để nói chuyện với một bạn học sinh người Nhật Bản. Khi bạn nói tiếng Việt, điện thoại lập tức phát ra giọng nói tiếng Nhật và ngược lại. Quá trình này đã kết hợp các thành tựu nào?',
    options: {
      A: 'Nhận dạng giọng nói (Speech-to-Text) + Dịch máy thông minh bằng AI + Tổng hợp giọng nói (Text-to-Speech)',
      B: 'Chỉ là việc ghi âm giọng nói và phát lại chậm hơn',
      C: 'Có một thông dịch viên người Nhật ngồi trong chiếc điện thoại',
      D: 'Điện thoại tự động xóa ngôn ngữ tiếng Nhật đi'
    },
    answer: 'A',
    explanation: 'Dịch thuật hai chiều tức thời là sự kết hợp hoàn hảo giữa công nghệ xử lý âm thanh, mô hình AI dịch máy thần kinh (NMT) và tổng hợp tiếng nói tự nhiên.',
    keyKnowledge: 'AI dịch thuật phá bỏ rào cản ngôn ngữ, thúc đẩy hội nhập và giao lưu quốc tế dễ dàng.'
  },
  {
    id: 325,
    lessonId: 'bai2',
    topic: 'topic_1',
    topicName: 'Đồng hồ thông minh theo dõi sức khỏe',
    level: 'van_dung',
    question: 'Khi bạn học sinh đeo đồng hồ thông minh (Smartwatch) đi chạy bộ, đồng hồ tự động ghi nhận số bước chân, quãng đường GPS, nhịp tim trung bình và lượng calo tiêu thụ, sau đó đưa ra lời khuyên nghỉ ngơi nếu nhịp tim quá cao. Đây là minh chứng rõ ràng cho:',
    options: {
      A: 'Một thiết bị thông minh nhỏ gọn, tự động thu thập và xử lý dữ liệu để chăm sóc sức khỏe người dùng',
      B: 'Một chiếc đồng hồ cơ cổ điển chỉ có kim giờ và kim phút',
      C: 'Một dụng cụ làm tăng trọng lượng cánh tay khi chạy',
      D: 'Thiết bị không có bất kỳ tác dụng nào đối với người tập luyện'
    },
    answer: 'A',
    explanation: 'Đồng hồ thông minh tích hợp cảm biến chuyển động gia tốc kế, cảm biến quang nhịp tim và GPS để theo dõi luyện tập khoa học.',
    keyKnowledge: 'Thiết bị đeo thông minh hỗ trợ lối sống lành mạnh thông qua đo đạc và phân tích dữ liệu thể chất cá nhân.'
  },
  {
    id: 326,
    lessonId: 'bai2',
    topic: 'topic_17',
    topicName: 'An toàn dữ liệu trong ngân hàng',
    level: 'van_dung',
    question: 'Khi một chi nhánh ngân hàng bị mất điện đột ngột trong lúc đang xử lý giao dịch nộp tiền của khách hàng, hệ thống cơ sở dữ liệu sẽ xử lý thế nào để không làm thất thoát tiền?',
    options: {
      A: 'Tự động khôi phục về trạng thái an toàn trước giao dịch hoặc hoàn tất giao dịch nhờ cơ chế giao dịch an toàn (Transaction/Rollback) của Hệ quản trị CSDL',
      B: 'Xóa sạch toàn bộ số dư của tất cả khách hàng trong ngân hàng',
      C: 'Nhân viên ngân hàng phải tự bỏ tiền túi ra đền bù',
      D: 'Tiền mặt trong két sắt tự động bay mất'
    },
    answer: 'A',
    explanation: 'Hệ quản trị CSDL hỗ trợ tính chất nguyên tử (Atomicity) trong giao dịch: hoặc giao dịch thành công trọn vẹn, hoặc hủy bỏ phục hồi trạng thái cũ nếu gặp sự cố.',
    keyKnowledge: 'Hệ quản trị CSDL bảo đảm an toàn dữ liệu và tính toàn vẹn giao dịch ngay cả khi hệ thống gặp sự cố mất điện.'
  },
  {
    id: 327,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'Công tơ điện tử thông minh',
    level: 'van_dung',
    question: 'Hiện nay, ngành Điện lực thay thế toàn bộ công tơ điện cơ bằng công tơ điện tử thông minh. Hàng tháng, chỉ số điện tiêu thụ được tự động truyền qua mạng về trung tâm để lập hóa đơn điện tử mà không cần nhân viên đến từng nhà trèo cột ghi số. Lợi ích lớn nhất của việc này là:',
    options: {
      A: 'Tiết kiệm nhân công, thu thập dữ liệu chính xác tức thời, tránh sai sót ghi chỉ số và minh bạch hóa việc tính tiền điện cho người dân',
      B: 'Làm mất điện của các hộ gia đình nhiều hơn',
      C: 'Bắt buộc người dân phải tự trèo lên cột điện kiểm tra',
      D: 'Công tơ điện tử tiêu tốn nhiều điện hơn cả điều hòa'
    },
    answer: 'A',
    explanation: 'Công tơ điện tử thông minh là thiết bị IoT truyền số liệu từ xa qua sóng vô tuyến/Internet, tự động hóa toàn bộ quy trình ghi chỉ số và thanh toán.',
    keyKnowledge: 'Công tơ điện tử thông minh ứng dụng IoT trong ngành năng lượng, nâng cao tính chính xác và hiệu quả quản lý.'
  },
  {
    id: 328,
    lessonId: 'bai2',
    topic: 'topic_8',
    topicName: 'Robot cứu hộ trong thiên tai',
    level: 'van_dung',
    question: 'Sau một trận động đất sạt lở nguy hiểm, lực lượng cứu hộ sử dụng máy bay không người lái (Drone) gắn camera nhiệt và robot trinh sát nhỏ để tìm kiếm người còn mắc kẹt dưới đống đổ nát. Việc ứng dụng thiết bị thông minh này có ý nghĩa gì?',
    options: {
      A: 'Tiếp cận nhanh chóng vào những khu vực nguy hiểm con người không thể vào, phát hiện kịp thời nạn nhân và bảo vệ an toàn cho đội cứu hộ',
      B: 'Chỉ để quay phim quảng cáo cho khu nghỉ dưỡng',
      C: 'Làm chậm tiến độ tìm kiếm cứu nạn',
      D: 'Phát nhạc giải trí cho người dân xung quanh'
    },
    answer: 'A',
    explanation: 'Thiết bị thông minh và robot cứu hộ có thể hoạt động ở môi trường khắc nghiệt, hầm sập, khói bụi độc hại để bảo toàn mạng sống cho con người.',
    keyKnowledge: 'Robot và thiết bị thông minh phát huy vai trò tối quan trọng trong các nhiệm vụ cứu hộ, cứu nạn khẩn cấp và nguy hiểm.'
  },
  {
    id: 329,
    lessonId: 'bai2',
    topic: 'topic_16',
    topicName: 'Ứng dụng lập trình Python',
    level: 'van_dung',
    question: 'Một nhà nghiên cứu sinh học muốn tìm kiếm nhanh chuỗi gen "ATCGGCTA" xuất hiện bao nhiêu lần trong một chuỗi ADN dài 1 triệu ký tự. Lựa chọn công cụ phù hợp nhất là:',
    options: {
      A: 'Viết một chương trình Python ngắn sử dụng thuật toán tìm kiếm xâu ký tự để máy tính đếm trong chưa đầy 1 giây',
      B: 'In 1 triệu ký tự ra 500 trang giấy A4 rồi dùng bút dạ vàng đánh dấu thủ công',
      C: 'Đọc to từng chữ cái cho một người khác ghi chép',
      D: 'Chờ đợi chuỗi gen tự động biến đổi thành chữ số'
    },
    answer: 'A',
    explanation: 'Tin học sinh học (Bioinformatics) sử dụng các ngôn ngữ lập trình bậc cao như Python với các thư viện xử lý chuỗi mạnh mẽ để giải mã và phân tích dữ liệu di truyền.',
    keyKnowledge: 'Ngôn ngữ lập trình bậc cao là công cụ không thể thiếu trong các ngành khoa học mũi nhọn hiện đại như sinh học phân tử.'
  },
  {
    id: 330,
    lessonId: 'bai2',
    topic: 'topic_6',
    topicName: 'Kinh tế tri thức và khởi nghiệp',
    level: 'van_dung',
    question: 'Một nhóm học sinh THPT thiết kế một trang web hỗ trợ học sinh ôn thi môn Tin học trực quan, sinh động và miễn phí. Dự án nhận được sự đón nhận của hàng nghìn bạn bè trên cả nước. Hoạt động này thể hiện tinh thần nào phù hợp với xã hội tri thức?',
    options: {
      A: 'Vận dụng kiến thức Tin học để sáng tạo sản phẩm hữu ích cho cộng đồng, thúc đẩy học tập chủ động và lan tỏa tri thức',
      B: 'Lãng phí thời gian học tập vào máy tính vô bổ',
      C: 'Hạn chế các bạn khác không cho tìm tài liệu',
      D: 'Chống lại việc đổi mới phương pháp học tập'
    },
    answer: 'A',
    explanation: 'Sáng tạo các giải pháp phần mềm giáo dục thể hiện rõ nét năng lực số, tinh thần học tập chủ động và đóng góp tích cực vào xã hội tri thức.',
    keyKnowledge: 'Học sinh chủ động làm chủ công nghệ Tin học sẽ trở thành những công dân số tích cực trong kỷ nguyên số.'
  },
  {
    id: 331,
    lessonId: 'bai2',
    topic: 'topic_2',
    topicName: 'Hệ thống cảnh báo cháy thông minh',
    level: 'van_dung',
    question: 'Tại một chung cư cao tầng, khi cảm biến phát hiện khói đậm đặc vượt mức cho phép ở tầng 5, hệ thống thông minh tự động: hú còi báo động toàn tòa nhà, kích hoạt vòi phun nước dập lửa tại chỗ, điều khiển thang máy về tầng trệt và mở cửa, đồng thời gửi cuộc gọi khẩn cấp đến tổng đài 114. Đây là sự kết hợp của:',
    options: {
      A: 'Hệ thống cảm biến IoT, bộ điều khiển trung tâm tự động hóa và tích hợp liên thông an toàn phòng cháy chữa cháy',
      B: 'Sự can thiệp thủ công hoàn toàn của nhân viên bảo vệ sau khi thấy ngọn lửa lớn',
      C: 'Hiện tượng chập điện ngẫu nhiên không có tính toán',
      D: 'Các thiết bị không hề liên kết với nhau'
    },
    answer: 'A',
    explanation: 'Hệ thống PCCC thông minh tự động kích hoạt chuỗi kịch bản an toàn cứu nạn trong vài giây, giảm thiểu thiệt hại về người và của.',
    keyKnowledge: 'Thiết bị thông minh kết nối mạng giúp xử lý nhanh chóng các tình huống khẩn cấp theo các kịch bản định sẵn.'
  },
  {
    id: 332,
    lessonId: 'bai2',
    topic: 'topic_11',
    topicName: 'Ứng xử văn hóa trên không gian mạng',
    level: 'van_dung',
    question: 'Khi tham gia vào một nhóm học tập trực tuyến trên Zalo hoặc Facebook, bạn thấy một bạn cùng trường bị một số tài khoản nặc danh bình luận xúc phạm và chia sẻ hình ảnh chế giễu bôi nhọ. Hành động đúng đắn nhất của bạn là gì?',
    options: {
      A: 'Không hùa theo chia sẻ, an ủi động viên bạn bị hại, lưu lại bằng chứng và báo cáo ngay với thầy cô giáo hoặc quản trị viên để xử lý',
      B: 'Thả biểu tượng cười hả hê và bình luận thêm lời lẽ khiếm nhã',
      C: 'Tải các hình ảnh xúc phạm đó về máy rồi gửi cho tất cả các lớp khác xem',
      D: 'Cổ vũ cho hành vi bạo lực mạng tiếp tục diễn ra'
    },
    answer: 'A',
    explanation: 'Chống bạo lực mạng (Cyberbullying) và giữ gìn văn hóa ứng xử trên mạng xã hội là trách nhiệm và đạo đức của mỗi công dân số.',
    keyKnowledge: 'Ứng xử có văn hóa, bảo vệ bạn bè và tuân thủ pháp luật khi giao tiếp trên không gian mạng là kỹ năng sống thiết yếu.'
  }
];
