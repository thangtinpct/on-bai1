import { Question } from '../types';

export const thongHieuQuestions: Question[] = [
  {
    id: 201,
    lessonId: 'bai2',
    topic: 'topic_1',
    topicName: 'Thiết bị thông minh',
    level: 'thong_hieu',
    question: 'Tại sao máy tính bảng (tablet) được xem là thiết bị thông minh còn máy tính bỏ túi học sinh (calculator) thì không?',
    options: {
      A: 'Máy tính bảng đắt tiền hơn nhiều so với máy tính bỏ túi',
      B: 'Máy tính bảng có hệ điều hành, có thể cài thêm nhiều ứng dụng và tự thích ứng với các tác vụ đa dạng',
      C: 'Máy tính bỏ túi không dùng pin mà dùng năng lượng mặt trời',
      D: 'Máy tính bảng có vỏ kim loại còn máy tính bỏ túi có vỏ nhựa'
    },
    answer: 'B',
    explanation: 'Thiết bị thông minh có khả năng xử lý linh hoạt nhờ hệ điều hành, cài đặt ứng dụng tùy biến, kết nối mạng và hoạt động tự chủ. Máy tính bỏ túi chỉ có mạch vi xử lý cố định thực hiện phép toán đơn giản.',
    keyKnowledge: 'Khả năng chạy hệ điều hành, cài đặt phần mềm linh hoạt và kết nối mạng phân biệt thiết bị thông minh với máy tính chuyên dụng đơn giản.'
  },
  {
    id: 202,
    lessonId: 'bai2',
    topic: 'topic_2',
    topicName: 'Đặc điểm thiết bị thông minh',
    level: 'thong_hieu',
    question: 'Khả năng "tự chủ" của một thiết bị thông minh được thể hiện rõ nhất ở đặc điểm nào?',
    options: {
      A: 'Có thể tự sạc pin mà không cần cắm điện',
      B: 'Tự động nhận diện dữ liệu đầu vào và tự thực hiện hành vi xử lý phù hợp mà không cần con người bấm nút từng bước',
      C: 'Có khả năng bay lên không trung khi gặp nguy hiểm',
      D: 'Tự động xóa sạch dữ liệu sau mỗi ngày sử dụng'
    },
    answer: 'B',
    explanation: 'Tính tự chủ (autonomy) cho phép thiết bị thu thập thông tin từ cảm biến và tự đưa ra quyết định xử lý hoặc kích hoạt hành động theo chương trình đã lập trình.',
    keyKnowledge: 'Tính tự chủ giúp thiết bị tự thích ứng và vận hành theo hoàn cảnh mà không cần con người can thiệp trực tiếp liên tục.'
  },
  {
    id: 203,
    lessonId: 'bai2',
    topic: 'topic_3',
    topicName: 'Cách mạng công nghiệp 4.0',
    level: 'thong_hieu',
    question: 'Khái niệm "Hệ thống thực - ảo" (Cyber-Physical Systems) trong CMCN 4.0 có ý nghĩa gì?',
    options: {
      A: 'Sự kết hợp đồng bộ giữa các đối tượng thực tế (máy móc, xe cộ) với mô hình mô phỏng tính toán trong không gian số',
      B: 'Việc chơi trò chơi điện tử thực tế ảo trên kính 3D',
      C: 'Chỉ là việc thay thế toàn bộ công nhân bằng robot hình người',
      D: 'Hệ thống gửi thư điện tử bằng cáp quang ngầm dưới biển'
    },
    answer: 'A',
    explanation: 'Trong CMCN 4.0, các hệ thống thực (thế giới vật lý) và hệ thống ảo (thế giới số, không gian số) kết nối chặt chẽ, tối ưu hóa quy trình tính toán, thiết kế trước khi đưa vào thực tế.',
    keyKnowledge: 'Hệ thống thực - ảo làm mờ ranh giới giữa thế giới vật lý và thế giới số, nâng cao năng suất và chất lượng sản phẩm.'
  },
  {
    id: 204,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'IoT và hệ thống thu thập',
    level: 'thong_hieu',
    question: 'Tại sao hệ thống thu phí tự động không dừng (ETC) trên đường cao tốc lại được xem là ứng dụng tiêu biểu của IoT?',
    options: {
      A: 'Vì tài xế phải dừng xe lại trả tiền mặt trực tiếp cho nhân viên',
      B: 'Vì sử dụng cảm biến RFID nhận diện thẻ xe từ xa, tự động truyền dữ liệu qua Internet để trừ tiền trong tài khoản và mở rào chắn',
      C: 'Vì trạm thu phí được trang bị điều hòa nhiệt độ công suất lớn',
      D: 'Vì tất cả các xe đi qua đều được tặng miễn phí tiền xăng'
    },
    answer: 'B',
    explanation: 'Thẻ RFID trên kính xe và đầu đọc cảm biến tại trạm kết nối mạng dữ liệu, tự động trao đổi thông tin tức thời và xử lý giao dịch mà xe không cần dừng lại.',
    keyKnowledge: 'Hệ thống thu phí không dừng liên kết cảm biến thẻ RFID với máy chủ dữ liệu qua Internet, tối ưu lưu thông giao thông.'
  },
  {
    id: 205,
    lessonId: 'bai2',
    topic: 'topic_5',
    topicName: 'Trí tuệ nhân tạo (AI)',
    level: 'thong_hieu',
    question: 'Ứng dụng nào sau đây thể hiện khả năng "hiểu ngôn ngữ tự nhiên" của Trí tuệ nhân tạo (AI)?',
    options: {
      A: 'Đèn giao thông chuyển màu theo chu kỳ giây cố định',
      B: 'Trợ lý ảo (như Siri, Google Assistant) nghe khẩu lệnh tiếng Việt và thực hiện đặt báo thức',
      C: 'Máy in phun phun mực lên tờ giấy theo tọa độ điểm',
      D: 'Bàn phím cơ phát ra tiếng gõ lách cách khi bấm'
    },
    answer: 'B',
    explanation: 'Trợ lý ảo xử lý ngôn ngữ tự nhiên (NLP) để nhận diện giọng nói, phân tích ý định của người dùng và thực hiện hành động tương ứng.',
    keyKnowledge: 'AI giúp máy tính hiểu và giao tiếp bằng ngôn ngữ tự nhiên với con người.'
  },
  {
    id: 206,
    lessonId: 'bai2',
    topic: 'topic_6',
    topicName: 'Kinh tế tri thức',
    level: 'thong_hieu',
    question: 'Trong cơ cấu giá thành sản xuất một chiếc điện thoại thông minh cao cấp, phần chiếm tỉ trọng giá trị lớn nhất là:',
    options: {
      A: 'Giá trị kim loại nhôm, đồng và kính thô làm vỏ máy',
      B: 'Giá trị tri thức, nghiên cứu phát triển, thiết kế bản quyền và phần mềm điều khiển',
      C: 'Tiền đóng thùng carton và băng dính bọc hàng',
      D: 'Tiền in ấn sổ tay hướng dẫn sử dụng bằng giấy'
    },
    answer: 'B',
    explanation: 'SGK Tin học 10 nêu rõ: trong sản xuất smartphone, nguyên vật liệu kim loại chiếm chưa đến một nửa giá thành, phần còn lại là chi phí thiết kế, bản quyền công nghệ và phần mềm.',
    keyKnowledge: 'Trong nền kinh tế tri thức, hàm lượng chất xám và bản quyền phần mềm quyết định phần lớn giá trị sản phẩm.'
  },
  {
    id: 207,
    lessonId: 'bai2',
    topic: 'topic_7',
    topicName: 'Tin học trong quản lý',
    level: 'thong_hieu',
    question: 'Khi ngân hàng áp dụng hệ thống ngân hàng số (Digital Banking), lợi ích lớn nhất đối với khách hàng là gì?',
    options: {
      A: 'Khách hàng có thể chuyển tiền, thanh toán hóa đơn 24/7 tức thì ở mọi nơi mà không cần đến quầy giao dịch',
      B: 'Khách hàng bắt buộc phải viết đơn xin phép bằng tay trước 3 ngày',
      C: 'Ngân hàng không còn lưu trữ bất kỳ thông tin giao dịch nào',
      D: 'Tất cả các loại tiền giấy đều bị tiêu hủy ngay lập tức'
    },
    answer: 'A',
    explanation: 'Ứng dụng Tin học trong ngân hàng giúp tự động hóa giao dịch, cho phép thực hiện dịch vụ tài chính 24/7 an toàn, nhanh chóng và tiện lợi.',
    keyKnowledge: 'Tin học trong tài chính - ngân hàng giúp quản lý tài khoản chính xác, thực hiện giao dịch tức thì 24/7.'
  },
  {
    id: 208,
    lessonId: 'bai2',
    topic: 'topic_8',
    topicName: 'Tin học trong tự động hóa',
    level: 'thong_hieu',
    question: 'Điểm khác biệt căn bản giữa dây chuyền tự động hóa thế hệ mới (dùng robot thông minh) so với dây chuyền cơ khí truyền thống là:',
    options: {
      A: 'Dây chuyền cơ khí truyền thống tiêu tốn ít điện năng hơn robot',
      B: 'Robot thông minh có thể được lập trình lại linh hoạt để làm nhiều loại sản phẩm khác nhau và tự thích ứng khi phát hiện lỗi',
      C: 'Dây chuyền cơ khí có thể tự suy nghĩ và sửa chữa lỗi logic',
      D: 'Robot thông minh chỉ làm việc được vào ban ngày khi có ánh nắng mặt trời'
    },
    answer: 'B',
    explanation: 'Tự động hóa thông minh cho phép tái lập trình nhanh chóng, kết nối mạng điều khiển và linh hoạt thích ứng với các mẫu mã sản phẩm khác nhau.',
    keyKnowledge: 'Tự động hóa bằng thiết bị thông minh mang lại tính linh hoạt cao và khả năng giám sát chất lượng liên tục.'
  },
  {
    id: 209,
    lessonId: 'bai2',
    topic: 'topic_9',
    topicName: 'Tin học trong khoa học – kỹ thuật',
    level: 'thong_hieu',
    question: 'Tại sao công tác dự báo thời tiết hiện đại bắt buộc phải sử dụng các siêu máy tính hiệu năng cao?',
    options: {
      A: 'Vì siêu máy tính có màn hình hiển thị dự báo thời tiết rất đẹp',
      B: 'Vì dữ liệu khí tượng từ hàng nghìn trạm quan trắc, vệ tinh vô cùng khổng lồ và cần giải các phương trình động lực học chất lỏng với hàng trăm triệu phép tính/giây',
      C: 'Vì người dự báo viên không thích dùng máy tính cá nhân',
      D: 'Vì các đám mây chỉ bay qua nơi có siêu máy tính đặt trụ sở'
    },
    answer: 'B',
    explanation: 'Dữ liệu thời tiết biến đổi liên tục trên phạm vi toàn cầu với dung lượng khổng lồ. Siêu máy tính tính toán hàng trăm nghìn tỉ phép tính/giây để mô phỏng sự chuyển dịch của khí quyển.',
    keyKnowledge: 'Siêu máy tính là công cụ bắt buộc để giải các bài toán mô phỏng khoa học có khối lượng tính toán siêu lớn như dự báo thời tiết.'
  },
  {
    id: 210,
    lessonId: 'bai2',
    topic: 'topic_10',
    topicName: 'Tin học thay đổi cách thức làm việc',
    level: 'thong_hieu',
    question: 'Việc chuyển từ "chụp ảnh dùng phim tráng rửa hóa chất" sang "chụp ảnh kỹ thuật số" đem lại ưu thế vượt trội nào?',
    options: {
      A: 'Không xem được ảnh ngay sau khi chụp',
      B: 'Ảnh xem được ngay, dễ dàng chỉnh sửa, sao chép không giới hạn và chi phí lưu trữ gần như bằng 0',
      C: 'Bắt buộc phải mang phim ra hiệu ảnh phơi sáng trong phòng tối',
      D: 'Mỗi cuộn phim chỉ chụp được tối đa 36 kiểu ảnh'
    },
    answer: 'B',
    explanation: 'Nhiếp ảnh số hóa thay thế phim quang học, cho phép xem ảnh tức thì trên màn hình, chỉnh sửa hậu kỳ trên máy tính và lưu trữ hàng vạn bức ảnh trên thẻ nhớ.',
    keyKnowledge: 'Tin học số hóa thay đổi hoàn toàn công nghệ trong nhiều ngành nghề, giảm chi phí và tăng chất lượng rõ rệt.'
  },
  {
    id: 211,
    lessonId: 'bai2',
    topic: 'topic_11',
    topicName: 'Tin học và giao tiếp cộng đồng',
    level: 'thong_hieu',
    question: 'Mạng xã hội và các nền tảng trao đổi trực tuyến đã làm thay đổi giao tiếp cộng đồng như thế nào?',
    options: {
      A: 'Khiến việc gửi tin tức sang nước ngoài phải mất vài tuần như gửi thư bưu điện',
      B: 'Tạo môi trường giao tiếp đa chiều, trực quan, tức thời và xóa bỏ khoảng cách địa lý',
      C: 'Ngăn chặn hoàn toàn mọi người không cho trao đổi hình ảnh và video',
      D: 'Bắt buộc mọi người phải giao tiếp trực tiếp mặt đối mặt'
    },
    answer: 'B',
    explanation: 'Tin học và mạng xã hội cho phép kết nối tức thời hàng tỉ người trên toàn thế giới, chia sẻ ý tưởng, kiến thức và tương tác nhanh chóng.',
    keyKnowledge: 'Tin học biến giao tiếp cộng đồng thành không gian mở, trực quan và có tính tương tác thời gian thực cao.'
  },
  {
    id: 212,
    lessonId: 'bai2',
    topic: 'topic_13',
    topicName: 'Hệ điều hành',
    level: 'thong_hieu',
    question: 'Hệ điều hành đóng vai trò là "cầu nối" trung gian giữa những thành phần nào trong máy tính?',
    options: {
      A: 'Giữa nguồn điện 220V và phích cắm tường',
      B: 'Giữa người sử dụng / phần mềm ứng dụng với phần cứng của máy tính',
      C: 'Giữa màn hình và loa máy tính',
      D: 'Giữa bàn phím và chuột quang'
    },
    answer: 'B',
    explanation: 'Hệ điều hành quản lý tài nguyên phần cứng (CPU, bộ nhớ, thiết bị I/O) và cung cấp môi trường giao diện để người dùng chạy các ứng dụng thuận tiện.',
    keyKnowledge: 'Hệ điều hành quản lý tài nguyên hệ thống và cung cấp giao diện tương tác giữa người dùng, phần mềm và phần cứng.'
  },
  {
    id: 213,
    lessonId: 'bai2',
    topic: 'topic_14',
    topicName: 'Mạng máy tính và Internet',
    level: 'thong_hieu',
    question: 'Sự ra đời của bộ giao thức TCP/IP năm 1983 có ý nghĩa quyết định đối với Internet vì:',
    options: {
      A: 'Nó quy định giá bán của máy vi tính cá nhân trên thị trường',
      B: 'Nó đặt ra bộ quy tắc chuẩn chung để các mạng máy tính khác nhau trên thế giới có thể kết nối và hiểu được dữ liệu của nhau',
      C: 'Nó biến tất cả máy tính thành máy tính bảng siêu mỏng',
      D: 'Nó chỉ áp dụng riêng cho quân đội Mỹ và cấm dân sự sử dụng'
    },
    answer: 'B',
    explanation: 'Giao thức TCP/IP là chuẩn giao tiếp đồng nhất cho phép các hệ thống mạng không đồng nhất trên toàn cầu liên kết và truyền gói tin thông suốt.',
    keyKnowledge: 'TCP/IP (1983) là giao thức chuẩn mở đường cho mạng Internet kết nối toàn cầu không giới hạn phần cứng.'
  },
  {
    id: 214,
    lessonId: 'bai2',
    topic: 'topic_15',
    topicName: 'World Wide Web (WWW)',
    level: 'thong_hieu',
    question: 'Phát biểu nào sau đây phân biệt ĐÚNG giữa "Internet" và "World Wide Web"?',
    options: {
      A: 'Internet và World Wide Web là hai từ đồng nghĩa hoàn toàn giống hệt nhau',
      B: 'Internet là hạ tầng mạng kết nối các máy tính toàn cầu, còn World Wide Web là dịch vụ thông tin siêu văn bản chạy trên nền Internet',
      C: 'World Wide Web là phần cứng cáp quang, còn Internet là trang web html',
      D: 'Internet ra đời năm 1992, còn World Wide Web ra đời năm 1964'
    },
    answer: 'B',
    explanation: 'Internet là mạng lưới hạ tầng kết nối các thiết bị, còn WWW (World Wide Web) là một dịch vụ cung cấp tài liệu siêu văn bản (chứa văn bản, hình ảnh, liên kết) được truy cập qua trình duyệt.',
    keyKnowledge: 'Internet là hạ tầng mạng; World Wide Web (WWW) là dịch vụ chia sẻ thông tin siêu văn bản chạy trên Internet.'
  },
  {
    id: 215,
    lessonId: 'bai2',
    topic: 'topic_16',
    topicName: 'Ngôn ngữ lập trình bậc cao',
    level: 'thong_hieu',
    question: 'Tại sao ngôn ngữ lập trình bậc cao giúp tăng năng suất phát triển phần mềm vượt trội so với hợp ngữ và ngôn ngữ máy?',
    options: {
      A: 'Vì các câu lệnh được viết gần với ngôn ngữ tự nhiên và tư duy toán học, không phụ thuộc vào chi tiết phần cứng của từng loại chip xử lý',
      B: 'Vì ngôn ngữ bậc cao không cần máy tính thực thi',
      C: 'Vì người lập trình không cần học bất kỳ cú pháp nào',
      D: 'Vì chương trình tự động viết ra mà không cần người gõ mã'
    },
    answer: 'A',
    explanation: 'Ngôn ngữ bậc cao (như Python, C, Java) độc lập với kiến trúc phần cứng máy tính, người lập trình tập trung vào thuật toán thay vì điều khiển từng thanh ghi vi xử lý.',
    keyKnowledge: 'Ngôn ngữ bậc cao viết gần với ngôn ngữ tự nhiên, nâng cao hiệu quả và tốc độ phát triển phần mềm.'
  },
  {
    id: 216,
    lessonId: 'bai2',
    topic: 'topic_17',
    topicName: 'Hệ quản trị cơ sở dữ liệu',
    level: 'thong_hieu',
    question: 'Ưu điểm lớn nhất của Hệ quản trị cơ sở dữ liệu (DBMS) so với việc lưu trữ trên các tệp văn bản riêng rẽ là gì?',
    options: {
      A: 'Cung cấp công cụ chuẩn hóa để tổ chức, tìm kiếm, cập nhật và chia sẻ dữ liệu an toàn, độc lập với chương trình ứng dụng',
      B: 'Làm tăng dung lượng file lên hàng triệu lần',
      C: 'Chỉ cho phép duy nhất một người xem dữ liệu tại một thời điểm',
      D: 'Không cho phép chỉnh sửa dữ liệu sau khi đã ghi'
    },
    answer: 'A',
    explanation: 'Hệ quản trị CSDL giúp dữ liệu được tổ chức có cấu trúc, tránh dư thừa, bảo đảm tính nhất quán, phân quyền truy cập và cho phép nhiều ứng dụng cùng khai thác.',
    keyKnowledge: 'Hệ quản trị CSDL giúp tổ chức, truy cập và quản lý dữ liệu an toàn, độc lập với các bài toán cụ thể.'
  },
  {
    id: 217,
    lessonId: 'bai2',
    topic: 'topic_18',
    topicName: 'AI và Big Data',
    level: 'thong_hieu',
    question: 'Mối quan hệ hỗ trợ lẫn nhau giữa Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data) là gì?',
    options: {
      A: 'Big Data là nguồn "nguyên liệu" dồi dào để huấn luyện các mô hình AI, và AI là công cụ mạnh mẽ để phân tích khai phá giá trị từ Big Data',
      B: 'AI và Big Data là hai công nghệ triệt tiêu lẫn nhau',
      C: 'AI chỉ hoạt động khi không có dữ liệu',
      D: 'Big Data chỉ lưu trữ được những dữ liệu sai'
    },
    answer: 'A',
    explanation: 'Mô hình học máy/học sâu (AI) cần khối lượng dữ liệu khổng lồ (Big Data) để học hỏi quy luật, ngược lại AI giúp trích xuất tri thức hữu ích từ nguồn dữ liệu lớn đó.',
    keyKnowledge: 'Big Data cung cấp dữ liệu huấn luyện cho AI; AI giúp phân tích và khai phá giá trị tiềm ẩn trong Big Data.'
  },
  {
    id: 218,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'IoT trong y tế',
    level: 'thong_hieu',
    question: 'Trong lĩnh vực y tế, một chiếc đồng hồ thông minh đo nhịp tim và nồng độ oxy trong máu (SpO2) thể hiện ứng dụng IoT như thế nào?',
    options: {
      A: 'Tự động đo đạc liên tục bằng cảm biến quang học và truyền dữ liệu cảnh báo tới bác sĩ hoặc người thân qua Internet khi có bất thường',
      B: 'Chỉ phát ra tiếng kêu bíp bíp mà không lưu trữ dữ liệu',
      C: 'Chỉ dùng để xem giờ như đồng hồ quả quýt cổ',
      D: 'Bắt buộc bệnh nhân phải ngồi cố định một chỗ cạnh ổ cắm điện'
    },
    answer: 'A',
    explanation: 'Thiết bị đeo thông minh (Smart Wearable) thu thập chỉ số sinh học tức thời và đồng bộ hóa qua đám mây để theo dõi sức khỏe chủ động từ xa.',
    keyKnowledge: 'IoT y tế giúp theo dõi các chỉ số sức khỏe từ xa, phát hiện sớm dấu hiệu nguy hiểm và cảnh báo kịp thời.'
  },
  {
    id: 219,
    lessonId: 'bai2',
    topic: 'topic_6',
    topicName: 'Kinh tế tri thức',
    level: 'thong_hieu',
    question: 'Nhận định nào sau đây là ĐÚNG về vai trò của Tin học đối với nền kinh tế tri thức?',
    options: {
      A: 'Tin học là động lực then chốt thúc đẩy sự phát triển của nền kinh tế tri thức',
      B: 'Tin học làm giảm vai trò của tri thức trong sản xuất',
      C: 'Nền kinh tế tri thức chỉ xuất hiện ở các nước không dùng máy tính',
      D: 'Tin học chỉ phục vụ cho mục đích giải trí, không đóng góp vào kinh tế'
    },
    answer: 'A',
    explanation: 'Tin học cung cấp công cụ thu thập, xử lý, sáng tạo và truyền bá tri thức với tốc độ nhanh và chi phí thấp, là nền tảng cốt lõi của kinh tế tri thức.',
    keyKnowledge: 'Cuộc cách mạng công nghiệp 4.0 và Tin học đã thúc đẩy mạnh mẽ nền kinh tế tri thức toàn cầu.'
  },
  {
    id: 220,
    lessonId: 'bai2',
    topic: 'topic_7',
    topicName: 'Tin học trong quản lý',
    level: 'thong_hieu',
    question: 'Hệ thống Quản lý học tập trực tuyến (LMS) trong trường học mang lại lợi ích gì cho giáo viên và học sinh?',
    options: {
      A: 'Giúp giao bài tập, chấm điểm tự động, theo dõi tiến độ học tập và cung cấp kho học liệu số mọi lúc mọi nơi',
      B: 'Làm mất toàn bộ bài giảng của thầy cô',
      C: 'Hạn chế học sinh không cho tra cứu tài liệu học tập',
      D: 'Chỉ hoạt động được khi học sinh có mặt trực tiếp tại phòng máy'
    },
    answer: 'A',
    explanation: 'LMS giúp số hóa công tác giảng dạy: lưu trữ bài giảng video, kiểm tra đánh giá trực tuyến, thống kê phổ điểm tự động và hỗ trợ tự học hiệu quả.',
    keyKnowledge: 'Chuyển đổi số trong giáo dục giúp quản lý học tập thông minh, linh hoạt và cá nhân hóa trải nghiệm người học.'
  },
  {
    id: 221,
    lessonId: 'bai2',
    topic: 'topic_8',
    topicName: 'Tin học trong tự động hóa',
    level: 'thong_hieu',
    question: 'Tại sao robot hàn tự động trong sản xuất ô tô lại giúp nâng cao chất lượng sản phẩm hơn so với thao tác thủ công của con người?',
    options: {
      A: 'Vì robot làm việc đều đặn hàng nghìn mối hàn với độ chính xác cơ học đồng nhất và không bị mệt mỏi, mất tập trung',
      B: 'Vì robot tiêu tốn ít sắt thép hơn',
      C: 'Vì robot có thể tự lái chiếc ô tô ra khỏi nhà máy',
      D: 'Vì robot biết nói chuyện đùa vui với kỹ sư'
    },
    answer: 'A',
    explanation: 'Robot công nghiệp hoạt động với độ lặp lại và độ chính xác tính bằng milimet, vận hành 24/7 không suy giảm độ tập trung, loại bỏ lỗi do yếu tố tâm lý con người.',
    keyKnowledge: 'Tự động hóa bằng robot nâng cao độ chính xác, tính đồng đều và năng suất vượt bậc trong sản xuất công nghiệp.'
  },
  {
    id: 222,
    lessonId: 'bai2',
    topic: 'topic_9',
    topicName: 'Tin học trong khoa học – kỹ thuật',
    level: 'thong_hieu',
    question: 'Việc "mô phỏng các vụ va chạm xe hơi trên phần mềm máy tính" trước khi sản xuất thực tế giúp ích gì cho các nhà sản xuất xe?',
    options: {
      A: 'Tiết kiệm hàng triệu đô la chi phí phá hủy xe thật và rút ngắn thời gian thử nghiệm tính năng an toàn',
      B: 'Làm tăng nguy cơ tai nạn cho kỹ sư thiết kế',
      C: 'Bắt buộc phải đâm nát 100 chiếc xe thật cùng một lúc',
      D: 'Chỉ là một trò chơi điện tử để nhân viên giải trí'
    },
    answer: 'A',
    explanation: 'Mô phỏng máy tính (Simulation) dựa trên các định luật vật lý giúp phân tích biến dạng khung xe khi va chạm, tối ưu độ an toàn mà không cần tốn kém phá hủy nhiều nguyên mẫu thật.',
    keyKnowledge: 'Mô phỏng bằng Tin học hỗ trợ nghiên cứu thiết kế các công trình, thiết bị với chi phí thấp và độ an toàn cao.'
  },
  {
    id: 223,
    lessonId: 'bai2',
    topic: 'topic_10',
    topicName: 'Tin học thay đổi cách thức làm việc',
    level: 'thong_hieu',
    question: 'Khái niệm "Văn phòng không giấy tờ" (Paperless Office) phản ánh sự thay đổi nào của Tin học trong quản lý công việc?',
    options: {
      A: 'Cấm nhân viên không được sử dụng máy tính',
      B: 'Chuyển toàn bộ hồ sơ, hợp đồng, văn bản sang định dạng điện tử và ký số qua mạng',
      C: 'Chỉ sử dụng bút chì để viết lên mặt bàn làm việc',
      D: 'Đóng cửa toàn bộ văn phòng công ty'
    },
    answer: 'B',
    explanation: 'Văn phòng số lưu trữ tài liệu trên đám mây, luân chuyển văn bản qua phần mềm quản lý công việc và sử dụng chữ ký số, giúp tiết kiệm chi phí in ấn và thời gian lưu trữ.',
    keyKnowledge: 'Tin học thúc đẩy văn phòng số: lưu chuyển tài liệu điện tử nhanh chóng, bảo mật và thân thiện với môi trường.'
  },
  {
    id: 224,
    lessonId: 'bai2',
    topic: 'topic_11',
    topicName: 'Tin học và giao tiếp cộng đồng',
    level: 'thong_hieu',
    question: 'Khi sử dụng các nền tảng mạng xã hội để giao tiếp cộng đồng, điều nào sau đây là ứng xử văn minh và an toàn?',
    options: {
      A: 'Chia sẻ thông tin chưa được kiểm chứng để câu lượt tương tác',
      B: 'Tôn trọng người khác, bảo vệ thông tin cá nhân và kiểm tra kỹ tính chính xác của tin tức trước khi chia sẻ',
      C: 'Bình luận công kích và xúc phạm danh dự người khác ẩn danh',
      D: 'Cung cấp mật khẩu tài khoản cho người lạ trên mạng'
    },
    answer: 'B',
    explanation: 'Giao tiếp trên môi trường mạng đòi hỏi tuân thủ chuẩn mực đạo đức và pháp luật: kiểm chứng thông tin, bảo mật dữ liệu riêng tư và ứng xử văn hóa.',
    keyKnowledge: 'Khai thác tiện ích giao tiếp cộng đồng của Tin học luôn cần đi đôi với văn hóa số và bảo vệ an toàn thông tin.'
  },
  {
    id: 225,
    lessonId: 'bai2',
    topic: 'topic_13',
    topicName: 'Hệ điều hành',
    level: 'thong_hieu',
    question: 'Hệ điều hành Windows khác với hệ điều hành MS-DOS trước đây ở điểm nổi bật nào?',
    options: {
      A: 'Windows sử dụng giao diện đồ họa (GUI) với cửa sổ và chuột, còn MS-DOS sử dụng giao diện dòng lệnh văn bản đơn sắc',
      B: 'MS-DOS chạy nhanh hơn Windows trên mọi thiết bị hiện đại',
      C: 'Windows không thể kết nối mạng Internet',
      D: 'MS-DOS có khả năng xử lý đồ họa 3D sống động'
    },
    answer: 'A',
    explanation: 'Giao diện đồ họa người dùng (GUI) của Windows giúp thao tác bấm chuột trực quan trên biểu tượng và cửa sổ, thay vì phải ghi nhớ và gõ từng dòng lệnh như MS-DOS.',
    keyKnowledge: 'Giao diện đồ họa người dùng của hệ điều hành hiện đại giúp việc tương tác với máy tính trở nên trực quan và dễ tiếp cận.'
  },
  {
    id: 226,
    lessonId: 'bai2',
    topic: 'topic_14',
    topicName: 'Mạng máy tính và Internet',
    level: 'thong_hieu',
    question: 'Tại sao Internet không thuộc quyền sở hữu của bất kỳ một quốc gia hay công ty đơn lẻ nào?',
    options: {
      A: 'Vì Internet là mạng của các mạng (network of networks), được hình thành từ sự tự nguyện liên kết hạ tầng của hàng nghìn tổ chức và nhà mạng trên toàn thế giới',
      B: 'Vì không ai biết máy chủ Internet đặt ở đâu',
      C: 'Vì Internet chỉ hoạt động ngoài vũ trụ',
      D: 'Vì Internet hoàn toàn miễn phí cho tất cả mọi người'
    },
    answer: 'A',
    explanation: 'Internet là hệ thống liên mạng toàn cầu, được điều phối kỹ thuật bởi các tổ chức phi lợi nhuận quốc tế (như IETF, ICANN) về chuẩn giao thức và địa chỉ IP.',
    keyKnowledge: 'Internet là mạng toàn cầu phi tập trung, hoạt động dựa trên các tiêu chuẩn kỹ thuật mở được quốc tế đồng thuận.'
  },
  {
    id: 227,
    lessonId: 'bai2',
    topic: 'topic_15',
    topicName: 'World Wide Web (WWW)',
    level: 'thong_hieu',
    question: 'Đặc trưng cốt lõi của trang web trên World Wide Web (WWW) là gì?',
    options: {
      A: 'Khả năng liên kết siêu văn bản (Hyperlink) cho phép người dùng nhấp chuột để chuyển nhanh từ tài liệu này sang tài liệu khác trên toàn cầu',
      B: 'Chỉ chứa các con số nhị phân 0 và 1 hiển thị ra màn hình',
      C: 'Mỗi trang web chỉ tồn tại trong vòng 5 phút rồi tự biến mất',
      D: 'Không thể hiển thị được hình ảnh và video'
    },
    answer: 'A',
    explanation: 'Siêu liên kết (Hyperlink) và ngôn ngữ đánh dấu HTML là nền móng giúp World Wide Web kết nối hàng tỉ trang tài liệu thành một mạng lưới thông tin khổng lồ.',
    keyKnowledge: 'WWW sử dụng siêu văn bản và liên kết để người dùng duyệt thông tin đa phương tiện dễ dàng qua trình duyệt.'
  },
  {
    id: 228,
    lessonId: 'bai2',
    topic: 'topic_16',
    topicName: 'Ngôn ngữ lập trình bậc cao',
    level: 'thong_hieu',
    question: 'Điều gì xảy ra nếu ta viết một chương trình Python có cú pháp sai quy tắc?',
    options: {
      A: 'Máy tính sẽ tự động đoán ý người lập trình và thực thi theo ý đoán',
      B: 'Chương trình dịch (trình thông dịch Python) sẽ dừng lại và báo lỗi cú pháp (Syntax Error), không thực hiện được chương trình',
      C: 'Máy tính sẽ bốc khói và hỏng hoàn toàn ổ cứng',
      D: 'Chương trình vẫn chạy bình thường và cho kết quả chuẩn xác'
    },
    answer: 'B',
    explanation: 'Ngôn ngữ lập trình có quy tắc cú pháp nghiêm ngặt. Trình dịch sẽ kiểm tra cú pháp và phát hiện lỗi trước khi cho phép chạy chương trình.',
    keyKnowledge: 'Chương trình dịch đòi hỏi câu lệnh phải tuân thủ chính xác ngữ pháp và cú pháp của ngôn ngữ lập trình.'
  },
  {
    id: 229,
    lessonId: 'bai2',
    topic: 'topic_17',
    topicName: 'Hệ quản trị cơ sở dữ liệu',
    level: 'thong_hieu',
    question: 'Tại sao trong các ứng dụng lớn (như Facebook hay sàn thương mại Shopee), người ta phải sử dụng Hệ quản trị cơ sở dữ liệu thay vì lưu vào file Word/Excel?',
    options: {
      A: 'Vì DBMS hỗ trợ xử lý đồng thời hàng triệu truy vấn, bảo mật phân quyền chặt chẽ, khôi phục dữ liệu khi có sự cố và đảm bảo tính toàn vẹn',
      B: 'Vì file Word không cho phép gõ chữ hoa',
      C: 'Vì Excel chỉ cài được trên máy tính của giáo viên',
      D: 'Vì file Word tự động gửi dữ liệu sang máy người lạ'
    },
    answer: 'A',
    explanation: 'Hệ quản trị CSDL quy mô lớn xử lý giao dịch đồng thời (ACID), bảo mật nhiều lớp, sao lưu dự phòng và tối ưu hóa tốc độ tìm kiếm trên hàng tỉ bản ghi.',
    keyKnowledge: 'Hệ quản trị CSDL đảm bảo tính toàn vẹn, bảo mật và khả năng phục vụ hàng triệu người dùng đồng thời.'
  },
  {
    id: 230,
    lessonId: 'bai2',
    topic: 'topic_18',
    topicName: 'AI và Big Data',
    level: 'thong_hieu',
    question: 'Một hệ thống đề xuất video trên YouTube hoặc TikTok hoạt động dựa trên cơ chế nào?',
    options: {
      A: 'Sử dụng thuật toán AI phân tích dữ liệu lớn (lịch sử xem, tương tác, thời gian dừng lại) để gợi ý nội dung phù hợp với sở thích của từng cá nhân',
      B: 'Ngẫu nhiên bốc thăm một video bất kỳ trong kho lưu trữ',
      C: 'Có nhân viên ngồi xem từng tài khoản và chọn video thủ công gửi đến',
      D: 'Chỉ phát lại duy nhất video mà người dùng đã xem ngày hôm qua'
    },
    answer: 'A',
    explanation: 'Hệ thống gợi ý ứng dụng thuật toán học máy (Machine Learning) trên nguồn Big Data hành vi người dùng để dự đoán nội dung có khả năng thu hút cao nhất.',
    keyKnowledge: 'AI kết hợp Big Data tạo ra các hệ thống gợi ý thông minh, cá nhân hóa trải nghiệm người dùng trên mạng.'
  },
  {
    id: 231,
    lessonId: 'bai2',
    topic: 'topic_4',
    topicName: 'IoT và xe tự hành',
    level: 'thong_hieu',
    question: 'Hệ thống xe tự lái (Autonomous Vehicle) xử lý tình huống giao thông an toàn nhờ sự kết hợp của những công nghệ nào?',
    options: {
      A: 'Hệ thống cảm biến (Camera, Lidar, Radar), kết nối mạng định vị GPS/IoT và thuật toán AI xử lý hình ảnh thời gian thực',
      B: 'Chỉ nhờ vào việc đổ đầy bình xăng sinh học',
      C: 'Nhờ vào tiếng còi xe kêu to liên tục',
      D: 'Nhờ vào việc dán thật nhiều decal phản quang lên thân xe'
    },
    answer: 'A',
    explanation: 'Xe tự lái thu thập dữ liệu vật lý qua cảm biến, thuật toán AI phân tích vật cản, biển báo và vạch kẻ đường trong vài phần nghìn giây để ra quyết định đánh lái, tăng tốc hay phanh.',
    keyKnowledge: 'Xe tự lái là minh chứng điển hình của cuộc cách mạng 4.0, tích hợp cảm biến IoT và thuật toán AI thời gian thực.'
  },
  {
    id: 232,
    lessonId: 'bai2',
    topic: 'topic_12',
    topicName: 'Thành tựu Tin học',
    level: 'thong_hieu',
    question: 'Thành tựu nào của Tin học được ví như "bộ não" điều phối nhịp nhàng toàn bộ tài nguyên phần cứng và các chương trình trong một máy tính?',
    options: {
      A: 'Hệ điều hành (Operating System)',
      B: 'Chuột quang không dây',
      C: 'Cổng cắm tai nghe 3.5mm',
      D: 'Tấm lót chuột chống trượt'
    },
    answer: 'A',
    explanation: 'Hệ điều hành quản lý CPU, RAM, ổ cứng, thiết bị ngoại vi và cung cấp môi trường thực thi cho mọi phần mềm ứng dụng.',
    keyKnowledge: 'Hệ điều hành đóng vai trò nền tảng điều khiển và phân phối tài nguyên máy tính hiệu quả.'
  }
];
