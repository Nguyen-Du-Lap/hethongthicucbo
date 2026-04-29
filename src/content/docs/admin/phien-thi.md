---
title: Phiên thi
description: Hướng dẫn tạo, mở và theo dõi phiên thi cho học sinh trong hệ thống thi cục bộ chạy trên mạng LAN.
---

# Phiên thi

Trang **Phiên thi** là nơi giáo viên hoặc quản trị viên tạo buổi thi chính thức, mở phòng thi cho học sinh và giám sát toàn bộ quá trình làm bài trong **hệ thống thi cục bộ**. Nếu mục tiêu của bạn là **mở phiên thi cho học sinh** trong mạng LAN, đây là trang quan trọng nhất sau khi đã chuẩn bị đề thi.

Trước khi tạo phiên thi, bạn nên kiểm tra:

- Đề thi đã sẵn sàng trong [Đề Thi](/admin/de-thi/de-thi/).
- Đề đã được gán đúng mục đích sử dụng ở [Thêm vào](/admin/de-thi/them-vao/).
- Danh sách học sinh hoặc lớp học đã có trong [Danh sách lớp](/admin/danh-sach-lop/).

## Phiên thi dùng khi nào?

Bạn nên dùng **Phiên thi** khi cần tổ chức một buổi thi chính thức có:

- mã phòng thi hoặc link để học sinh tham gia,
- thời điểm mở phòng rõ ràng,
- giám sát trạng thái học sinh trong lúc làm bài,
- thống kê kết quả ngay sau khi nộp bài.

Nếu mục tiêu chỉ là cho học sinh luyện tập, nên cân nhắc dùng **Thi thử** hoặc **Ôn luyện** thay vì phiên thi chính thức.

## Quy trình tạo phiên thi cho học sinh

### Bước 1: Chọn đề thi phù hợp

Mở [Đề Thi](/admin/de-thi/de-thi/) để kiểm tra lại:

- tên đề,
- thời lượng,
- điểm đạt,
- số lượng câu hỏi,
- đáp án và nội dung sau khi nhập.

Nếu cần tạo mới hoặc chỉnh lại đề, thao tác ở [Tạo đề thi](/admin/de-thi/tao-de-thi/).

### Bước 2: Tạo phiên thi mới

Khi tạo một phiên thi mới, hệ thống sẽ dùng đề đã chọn để sinh ra phòng thi tương ứng. Sau khi tạo thành công, bạn sẽ nhận được **mã phòng thi** để gửi cho học sinh.

Ở bước này, nên kiểm tra:

- lớp học áp dụng,
- tên hoặc ghi chú của phiên thi,
- thời lượng và quy tắc thi nếu hệ thống có hỗ trợ cấu hình.

### Bước 3: Gửi mã phòng hoặc link cho học sinh

Học sinh sẽ truy cập trang [Phiên thi](/exam-page/phien-thi/) để vào phòng. Bạn nên:

- gửi đúng mã phòng hoặc link truy cập,
- yêu cầu học sinh vào sớm để chờ kiểm tra,
- xác nhận tất cả các máy đang ở đúng địa chỉ trong LAN.

### Bước 4: Mở phòng thi

Chỉ mở phòng khi học sinh đã vào đủ hoặc phần lớn đã sẵn sàng ở phòng chờ. Đây là bước quan trọng để tránh tình trạng có em vào quá muộn hoặc bị lẫn giữa các buổi thi.

## Những gì bạn có thể theo dõi trong phiên thi

Trong suốt buổi thi, trang này hỗ trợ:

- theo dõi học sinh đang tham gia,
- xem trạng thái làm bài của từng em,
- phát hiện các lần rời tab nếu hệ thống đang bật cơ chế giám sát,
- xem điểm số hoặc kết quả sau khi nộp bài.

Nếu thấy dữ liệu cập nhật chậm hoặc học sinh không vào được, xem [Troubleshooting / FAQ](/troubleshooting-faq/).

## Thống kê và kết quả sau buổi thi

Sau khi buổi thi kết thúc, bạn có thể:

- xem danh sách điểm,
- mở chi tiết bài làm của từng học sinh,
- xác định các câu hỏi có tỷ lệ làm sai cao,
- tải dữ liệu kết quả về để lưu trữ hoặc tổng hợp.

Đây là lý do nên rà kỹ đề thi trước buổi thi chính thức, vì các lỗi trong cấu trúc đề sẽ ảnh hưởng trực tiếp đến toàn bộ phiên.

## Lỗi thường gặp khi mở phiên thi

### Học sinh nhập đúng mã nhưng chưa vào thi được

Nguyên nhân thường là phòng chưa mở hoặc học sinh mới ở phòng chờ. Khi đó cần kiểm tra lại trạng thái phiên thi và đọc thêm [Troubleshooting / FAQ](/troubleshooting-faq/).

### Học sinh vào được nhưng giám sát không ổn định

Hãy kiểm tra lại môi trường LAN, khoảng thời gian làm mới dữ liệu và độ ổn định của máy chủ theo hướng dẫn ở [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).

## Gợi ý vận hành an toàn

- Kiểm tra lại đề và lớp học trước khi tạo phiên thi.
- Cho một máy học sinh thử vào trước để xác nhận đường truy cập.
- Chỉ mở phòng khi đã sẵn sàng giám sát.
- Sau buổi thi, tải kết quả về để lưu trữ nếu cần đối chiếu sau này.

Nếu bạn đang đi từ đầu, thứ tự nên đọc tiếp là [Tạo đề thi](/admin/de-thi/tao-de-thi/), [Thêm vào](/admin/de-thi/them-vao/) và [Troubleshooting / FAQ](/troubleshooting-faq/).
