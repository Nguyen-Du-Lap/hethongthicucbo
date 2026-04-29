---
title: Tạo đề thi
description: Hướng dẫn tạo đề thi trắc nghiệm mới, nhập câu hỏi từ file hoặc AI và kiểm tra lại nội dung trước khi dùng trong hệ thống thi cục bộ.
---

# Tạo đề thi

Trang này hướng dẫn cách **tạo đề thi trắc nghiệm** trong **hệ thống thi cục bộ**, từ bước tạo thông tin cơ bản đến nhập câu hỏi bằng nhiều cách khác nhau. Nếu bạn đang chuẩn bị đề cho buổi thi trong mạng LAN, hãy đọc hết trang này rồi mới gán đề sang [Phiên thi](/admin/phien-thi/).

Để hiểu bức tranh tổng quát của thư viện đề, hãy xem [Đề Thi](/admin/de-thi/de-thi/). Sau khi tạo xong, bạn có thể dùng [Thêm vào](/admin/de-thi/them-vao/) để gán đề vào đúng chế độ sử dụng.

## Quy trình tạo đề thi mới

### Bước 1: Tạo thông tin cơ bản của đề

1. Mở mục **Đề Thi** trong trang quản trị.
2. Chọn **Tạo đề thi mới**.
3. Nhập các thông tin cơ bản của đề.
4. Nhấn **Lưu thông tin đề thi** để chuyển sang màn hình chỉnh sửa nội dung.

![Giao diện tạo đề thi mới](image/tao-de-thi/1776958177865.png)

Ở bước này, nên nhập rõ:

- tên đề,
- thời lượng làm bài,
- điểm đạt,
- các thông tin mô tả nếu hệ thống hỗ trợ.

## Bước 2: Chọn cách nhập câu hỏi phù hợp

Trong màn hình chỉnh sửa đề, bạn có thể nhập nội dung bằng nhiều cách:

1. **Nhập Word/TXT**
2. **Nhập JSON**
3. **Nhập text trực tiếp (Live)**
4. **Nhập từ đề khác**
5. **Tạo đề bằng AI**
6. **Tạo đề ngoại ngữ (AI)**

Việc chọn đúng cách nhập sẽ giúp bạn tạo đề nhanh hơn và giảm lỗi định dạng.

## Nhập Word/TXT

Cách này phù hợp khi bạn đã có sẵn nội dung câu hỏi trong file văn bản và muốn nhập nhanh vào hệ thống.

### Mẫu nội dung

```txt
[single]
Câu hỏi: Phím tắt Ctrl+Z dùng để làm gì?
A. Sao chép
B. Dán
*C. Hoàn tác
D. Lưu file
Giải thích: Ctrl+Z = Undo (Hoàn tác thao tác vừa thực hiện)

[multiple]
Câu hỏi: Đâu là phần mềm soạn thảo văn bản?
*A. Microsoft Word
B. Google Chrome
*C. Notepad
D. YouTube
Gợi ý: Chọn 2 đáp án
Giải thích: Word và Notepad đều là phần mềm soạn thảo

[yes_no]
Câu hỏi: Xét các mệnh đề sau về Internet:
- Internet là mạng toàn cầu -> yes
- Email là thư điện tử -> yes
- Google là hệ điều hành -> no
- Wi-Fi là kết nối không dây -> yes

[matching]
Câu hỏi: Ghép các thuật ngữ máy tính với định nghĩa:
- File <-> Tập tin lưu trữ dữ liệu
- Folder <-> Thư mục chứa các file
- RAM <-> Bộ nhớ tạm thời
- CPU <-> Bộ xử lý trung tâm

[drag_drop]
Câu hỏi: Ghép các thuật ngữ máy tính với định nghĩa:
- File <-> Tập tin lưu trữ dữ liệu
- Folder <-> Thư mục chứa các file
- RAM
- CPU
```

### Lưu ý khi nhập Word/TXT

- Dòng bắt đầu bằng `*` là đáp án đúng.
- Mỗi nhóm câu hỏi phải theo đúng định dạng hệ thống yêu cầu.
- Sau khi nhập, luôn kiểm tra lại nội dung trước khi lưu chính thức.

## Nhập JSON

Hình thức này phù hợp khi bạn cần chuyển ngân hàng câu hỏi giữa nhiều máy hoặc dùng dữ liệu đã được chuẩn hóa từ trước.

Khuyến nghị:

- Chỉ dùng khi bạn đã nắm đúng cấu trúc dữ liệu.
- Nếu bộ câu hỏi lớn, hãy thử với một mẫu nhỏ trước.
- Sau khi nhập xong, kiểm tra lại các trường quan trọng như đáp án, loại câu hỏi và giải thích.

## Nhập text trực tiếp (Live)

Chế độ này phù hợp khi bạn muốn dán nội dung trực tiếp, chỉnh nhanh từng câu và kiểm tra ngay trong lúc soạn.

![Giao diện nhập text trực tiếp](image/tao-de-thi/1776959624281.png)

Trong một số thao tác, hệ thống có thể hiển thị hộp gợi ý để hỗ trợ tạo câu hỏi nhanh hơn.

![Hộp gợi ý khi thao tác trực tiếp](image/tao-de-thi/1776959519209.png)

Nên dùng chế độ này khi:

- cần chỉnh một phần nội dung vừa nhập từ file,
- cần rà lại nội dung do AI sinh ra,
- muốn tinh chỉnh thủ công trước khi lưu đề.

## Nhập từ đề khác

Tính năng này giúp bạn tái sử dụng đề cũ thay vì soạn lại từ đầu.

Nên dùng khi:

- cần tạo đề mới dựa trên cấu trúc có sẵn,
- muốn tiết kiệm thời gian chuẩn bị,
- chỉ cần thay một phần nhỏ nội dung cho đợt thi mới.

Sau khi nhập từ đề khác, hãy kiểm tra lại:

- thời lượng,
- số lượng câu,
- đáp án,
- nội dung đã cũ hoặc không còn phù hợp.

## Tạo đề bằng AI

Hệ thống hỗ trợ tạo prompt để bạn đưa vào công cụ AI, sau đó mang kết quả quay lại hệ thống để chuẩn hóa.

Quy trình khuyến nghị:

1. Tạo prompt từ hệ thống.
2. Gửi prompt vào công cụ AI.
3. Sao chép nội dung AI trả về.
4. Dán vào **Nhập text trực tiếp (Live)**.
5. Kiểm tra lại từng câu hỏi, đáp án và giải thích.

Lưu ý:

- Không nên dùng nguyên văn nội dung AI mà chưa rà soát.
- Cần kiểm tra độ chính xác, mức độ phù hợp với môn học và lỗi định dạng.

## Tạo đề ngoại ngữ bằng AI

Cách làm tương tự như mục AI ở trên, nhưng phù hợp hơn khi tạo đề tiếng Anh hoặc ngôn ngữ khác.

Bạn vẫn nên đưa nội dung về khu vực **Nhập text trực tiếp (Live)** để chuẩn hóa lại trước khi lưu.

## Kiểm tra trước khi dùng đề cho buổi thi thật

Trước khi gán đề sang [Phiên thi](/admin/phien-thi/), hãy kiểm tra:

- đáp án đúng,
- thời lượng làm bài,
- điểm đạt,
- nội dung câu hỏi có lỗi chính tả hoặc lỗi trình bày không.

Nếu đã xong, bước tiếp theo là [Thêm vào](/admin/de-thi/them-vao/). Nếu phát hiện lỗi sau khi nhập, bạn có thể quay lại [Chỉnh sửa đề thi](/admin/de-thi/chinh-sua-de-thi/).
