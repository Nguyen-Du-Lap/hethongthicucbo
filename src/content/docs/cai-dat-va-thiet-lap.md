---
title: Cài đặt và thiết lập
description: Hướng dẫn cài đặt hệ thống thi cục bộ, chuẩn bị máy chủ và cấu hình cơ bản để triển khai ổn định trong mạng LAN.
---

# Cài đặt và thiết lập

Trang này dành cho người triển khai **hệ thống thi cục bộ** trong môi trường **mạng LAN**. Mục tiêu là giúp bạn chuẩn bị đúng máy chủ, cài các thành phần cần thiết, khởi động hệ thống và kiểm tra nhanh trước khi cho giáo viên hoặc học sinh sử dụng.

Nếu bạn chỉ cần chạy thử nhanh một lần, có thể đọc [Bắt đầu nhanh](/bat-dau-nhanh/). Nếu bạn đang chuẩn bị cho một buổi thi thật, nên đọc hết trang này rồi mới chuyển sang [Phiên thi](/admin/phien-thi/).

## 1. Mô hình triển khai cơ bản

Trong cách dùng phổ biến nhất:

- Một máy đóng vai trò **máy chủ nội bộ** để chạy backend và dữ liệu.
- Máy giáo viên dùng giao diện quản trị để tạo đề, mở phòng và giám sát.
- Máy học sinh truy cập từ cùng mạng LAN để vào phòng thi và làm bài.

Điều quan trọng là tất cả các máy phải nhìn thấy nhau trong cùng mạng nội bộ. Nếu truy cập không ổn định, hãy chuẩn bị trước các tình huống ở [Troubleshooting / FAQ](/troubleshooting-faq/).

## 2. Yêu cầu trước khi cài đặt

Trước khi bắt đầu, hãy kiểm tra:

- Máy chủ chạy ổn định trong suốt buổi thi.
- Máy chủ đã cài **Node.js** nếu bản phát hành yêu cầu môi trường Node.
- Các máy giáo viên và học sinh cùng truy cập được trong một **mạng LAN**.
- Bạn có bộ cài hoặc tệp phát hành phù hợp từ trang [Phát hành](/phat-hanh/).
- Bạn xác định rõ địa chỉ truy cập nội bộ để không nhầm với `localhost`.

Ngoài ra, hệ thống hiện lưu dữ liệu cục bộ trong tệp SQLite `exam.db`, nên cần chú ý sao lưu trước các thay đổi lớn hoặc trước khi nâng cấp phiên bản.

## 3. Cài đặt Node.js nếu máy chưa có

1. Mở Terminal hoặc Command Prompt và kiểm tra:

   ```bash
   node -v
   npm -v
   ```

2. Nếu máy đã hiện phiên bản, ví dụ `v20.x.x` hoặc `v22.x.x`, bạn có thể chuyển sang bước khởi động hệ thống.
3. Nếu máy báo không tìm thấy `node` hoặc `npm`, hãy cài **Node.js bản LTS** từ trang chính thức `https://nodejs.org/`.

### Cài trên Windows

1. Tải file `.msi` từ trang Node.js.
2. Mở file cài đặt.
3. Chọn `Next` theo mặc định.
4. Giữ tùy chọn thêm Node.js vào `PATH`.
5. Hoàn tất cài đặt rồi mở lại Command Prompt.

### Cài trên macOS

1. Tải bộ cài `.pkg` từ trang Node.js.
2. Mở file và làm theo hướng dẫn mặc định.
3. Sau khi cài xong, mở lại Terminal để kiểm tra phiên bản.

### Kiểm tra sau cài

Chạy lại:

```bash
node -v
npm -v
```

Nếu cả hai lệnh đều trả về phiên bản, máy chủ đã sẵn sàng cho bước tiếp theo.

## 4. Khởi động hệ thống

### Nếu dùng Windows

1. Mở thư mục dự án hoặc thư mục phát hành.
2. Nhấp đúp vào file `Khoidong.bat`.
3. Chờ các tiến trình khởi động đầy đủ.

### Nếu dùng macOS

1. Mở thư mục dự án hoặc thư mục phát hành.
2. Nhấp đúp vào file `KhoiDong_Mac.command`.
3. Chờ hệ thống khởi động xong hoàn toàn.

Sau khi khởi động, bạn nên truy cập thử giao diện Admin trước khi cho học sinh dùng. Nếu cần thao tác nhanh sau bước này, xem [Bắt đầu nhanh](/bat-dau-nhanh/).

## 5. Đăng nhập và thiết lập ban đầu

1. Mở giao diện quản trị của hệ thống.
2. Đăng nhập bằng thông tin mặc định:

- Tài khoản: `admin`
- Mật khẩu: `admin123`

3. Sau lần đăng nhập đầu tiên, nên đổi mật khẩu trong [Tài khoản](/admin/tai-khoan/).
4. Kiểm tra lại các phần cài đặt trong [Cài đặt](/admin/cai-dat/) và giao diện ở [Giao diện](/admin/giao-dien/) nếu buổi thi có yêu cầu riêng.

## 6. Kiểm tra nhanh trước khi mở thi

Trước buổi thi thật, hãy xác nhận:

- Đề thi đã được chuẩn bị ở [Đề Thi](/admin/de-thi/de-thi/).
- Nếu cần tạo mới, thao tác ở [Tạo đề thi](/admin/de-thi/tao-de-thi/).
- Phiên thi có thể được tạo thành công ở [Phiên thi](/admin/phien-thi/).
- Một máy học sinh thử đã vào được trang [Phiên thi](/exam-page/phien-thi/) từ cùng mạng LAN.

Đây là bước rất quan trọng để tránh lỗi đến sát giờ thi mới phát hiện.

## 7. Lỗi cài đặt và triển khai thường gặp

### Máy chủ có Node.js nhưng không chạy được hệ thống

- Kiểm tra lại bạn đang dùng đúng bản phát hành hoặc đúng thư mục dự án.
- Mở lại cửa sổ lệnh sau khi cài Node.js, vì biến môi trường có thể chưa cập nhật ở phiên cũ.

### Học sinh không truy cập được từ máy khác trong LAN

- Kiểm tra lại địa chỉ truy cập nội bộ.
- Không hard-code `localhost` cho các máy học sinh.
- Xác nhận các máy đang ở cùng mạng nội bộ và nhìn thấy máy chủ.

### Đăng nhập được Admin nhưng học sinh không vào được phòng thi

- Có thể phòng chưa mở hoặc học sinh mới ở phòng chờ.
- Xem chi tiết tại [Troubleshooting / FAQ](/troubleshooting-faq/).

## 8. Sau khi cài đặt xong nên đọc gì tiếp?

Sau khi hệ thống đã chạy ổn, bạn nên đi tiếp theo thứ tự:

1. [Bắt đầu nhanh](/bat-dau-nhanh/)
2. [Đề Thi](/admin/de-thi/de-thi/)
3. [Phiên thi](/admin/phien-thi/)
4. [Troubleshooting / FAQ](/troubleshooting-faq/)
