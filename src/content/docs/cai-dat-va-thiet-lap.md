---
title: Cài đặt và thiết lập
description: Hướng dẫn setup cơ bản cho người triển khai hệ thống trong môi trường mạng nội bộ.
---
# Cài đặt và thiết lập

## 1. Cài đặt Node.js nếu máy chưa có

1. Mở Terminal hoặc Command Prompt và kiểm tra máy đã có Node.js hay chưa.

   ```bash
   node -v
   ```

   Kiểm tra thêm `npm`:

   ```bash
   npm -v
   ```
2. Nếu máy đã hiện phiên bản, ví dụ `v20.x.x` hoặc `v22.x.x`, bạn có thể bỏ qua bước cài đặt và chuyển sang bước khởi động dự án.
3. Nếu máy báo không tìm thấy lệnh `node` hoặc `npm`, hãy cài **Node.js bản LTS** từ trang chính thức: `https://nodejs.org/`.
4. Trên trang tải xuống, chọn **LTS** thay vì Current để hệ thống ổn định hơn khi sử dụng lâu dài.
5. Cài đặt theo hệ điều hành:

   ### Windows


   1. Tải file cài đặt `.msi` từ trang Node.js.
   2. Nhấp đúp file vừa tải.
   3. Chọn `Next` liên tục theo mặc định.
   4. Giữ nguyên tùy chọn thêm Node.js vào `PATH`.
   5. Chọn `Install` để hoàn tất.

   ### macOS

   1. Tải bộ cài `.pkg` từ trang Node.js.
   2. Mở file cài đặt và làm theo hướng dẫn mặc định.
   3. Hoàn tất cài đặt rồi mở lại Terminal.
6. Sau khi cài xong, đóng và mở lại Terminal rồi kiểm tra lại:

   ```bash
   node -v
   npm -v
   ```
7. Nếu cả hai lệnh đều hiện phiên bản, máy đã sẵn sàng để chạy hệ thống.

## 2. Khởi động dự án

### Nếu dùng Windows

1. Mở thư mục dự án.
2. Nhấp đúp vào file `Khoidong.bat`.
3. Chờ hệ thống khởi động đầy đủ.

### Nếu dùng máy Mac

1. Mở thư mục dự án.
2. Nhấp đúp vào file `KhoiDong_Mac.command`.
3. Chờ hệ thống khởi động đầy đủ.

## 3. Đăng nhập vào trang quản trị

1. Mở giao diện Admin của hệ thống.
2. Đăng nhập bằng thông tin sau:

- Tài khoản: `admin`
- Mật khẩu: `admin123`

## 4. Yêu cầu triển khai

- Máy chủ nội bộ chạy được **Node.js**.
- Các máy giáo viên và học sinh cùng truy cập được một địa chỉ trong **LAN**.
- Dữ liệu được lưu trong file SQLite cục bộ `exam.db`.
