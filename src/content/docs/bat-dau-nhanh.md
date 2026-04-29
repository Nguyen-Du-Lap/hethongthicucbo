---
title: Bắt đầu nhanh
description: Các bước ngắn gọn để cài đặt, khởi động, đăng nhập và mở phiên thi đầu tiên trên hệ thống thi cục bộ.
---

# Bắt đầu nhanh

Trang này dành cho người muốn chạy thử **hệ thống thi cục bộ** trong thời gian ngắn, từ lúc chuẩn bị máy đến lúc mở được phiên thi đầu tiên cho học sinh. Nếu bạn chưa kiểm tra yêu cầu máy chủ hoặc môi trường mạng LAN, hãy xem [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/) trước.

## Bạn cần chuẩn bị gì?

Trước khi khởi động hệ thống, nên kiểm tra nhanh:

- Máy chủ nội bộ đã cài **Node.js** nếu bản phát hành yêu cầu.
- Các máy giáo viên và học sinh cùng truy cập được trong một **mạng LAN**.
- Bạn có sẵn bộ cài hoặc bản phát hành phù hợp ở trang [Phát hành](/phat-hanh/).
- Bạn biết máy nào sẽ đóng vai trò máy chủ để học sinh truy cập đúng địa chỉ.

## Bước 1: Khởi động hệ thống

### Nếu dùng Windows

1. Mở thư mục dự án hoặc thư mục phát hành.
2. Nhấp đúp vào file `Khoidong.bat`.
3. Chờ các dịch vụ khởi động đầy đủ rồi mới mở trang Admin hoặc trang làm bài.

### Nếu dùng macOS

1. Mở thư mục dự án hoặc thư mục phát hành.
2. Nhấp đúp vào file `KhoiDong_Mac.command`.
3. Chờ hệ thống khởi động xong hoàn toàn trước khi cho người dùng truy cập.

Nếu khởi động không thành công, hãy quay lại [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/) để kiểm tra Node.js, cấu hình máy chủ và môi trường mạng.

## Bước 2: Đăng nhập vào trang quản trị

1. Mở giao diện **Admin** của hệ thống.
2. Đăng nhập bằng tài khoản mặc định:

- Tài khoản: `admin`
- Mật khẩu: `admin123`

> Lưu ý: Sau lần đăng nhập đầu tiên, nên đổi mật khẩu trong phần [Tài khoản](/admin/tai-khoan/) để tránh rủi ro bảo mật khi dùng lâu dài trong trường hoặc phòng máy.

## Bước 3: Tạo hoặc kiểm tra đề thi

Trước khi mở thi cho học sinh, bạn cần có một đề thi sẵn sàng sử dụng.

1. Vào [Đề Thi](/admin/de-thi/de-thi/) để xem thư viện đề hiện có.
2. Nếu chưa có đề, mở [Tạo đề thi](/admin/de-thi/tao-de-thi/) để tạo mới hoặc nhập câu hỏi từ file.
3. Kiểm tra lại thời lượng, điểm đạt, số câu hỏi và đáp án trước khi dùng cho buổi thi thật.

## Bước 4: Tạo phiên thi đầu tiên

1. Vào trang [Phiên thi](/admin/phien-thi/).
2. Chọn đề thi phù hợp và tạo một phiên thi mới.
3. Kiểm tra lớp học hoặc danh sách học sinh nếu buổi thi yêu cầu phân theo lớp.
4. Lấy **mã phòng thi** hoặc link truy cập để gửi cho học sinh.

![Màn hình chia sẻ phòng thi cho học sinh](image/bat-dau-nhanh/1777038583606.png)

Nếu bạn đang chuẩn bị dữ liệu lớp học, nên xem thêm [Danh sách lớp](/admin/danh-sach-lop/). Nếu muốn hiểu rõ cách gán đề cho từng chế độ sử dụng, xem [Thêm vào](/admin/de-thi/them-vao/).

## Bước 5: Cho học sinh vào phòng chờ và mở thi

1. Gửi mã phòng hoặc link cho học sinh.
2. Yêu cầu học sinh vào đúng trang làm bài ở [Phiên thi](/exam-page/phien-thi/).
3. Chỉ mở phòng thi khi học sinh đã vào đủ phòng chờ.
4. Theo dõi màn hình giám sát trong quá trình làm bài.

Nếu học sinh nhập đúng mã nhưng chưa vào được phòng thi, xem ngay [Troubleshooting / FAQ](/troubleshooting-faq/).

## Bước 6: Theo dõi kết quả và xử lý sau buổi thi

Sau khi học sinh nộp bài, bạn có thể:

- Theo dõi trạng thái làm bài trong [Phiên thi](/admin/phien-thi/).
- Xem chi tiết kết quả theo từng học sinh.
- Xuất dữ liệu kết quả nếu cần tổng hợp.

## Sau khi chạy thử xong nên làm gì tiếp?

Nếu bạn thấy hệ thống phù hợp và muốn dùng ổn định hơn, hãy tiếp tục theo thứ tự:

1. Hoàn thiện [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/) cho đúng môi trường LAN.
2. Sắp xếp lại thư viện đề trong [Đề Thi](/admin/de-thi/de-thi/).
3. Xem các lỗi phổ biến ở [Troubleshooting / FAQ](/troubleshooting-faq/) để chuẩn bị trước ngày thi thật.
