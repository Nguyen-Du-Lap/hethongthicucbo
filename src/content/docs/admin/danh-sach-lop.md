---
title: Danh sách lớp
description: Quản lý lớp học và danh sách học sinh trong khu vực Admin.
---

# Danh sách lớp

Tab **Danh sách lớp** dùng để quản lý lớp học và danh sách học sinh tham gia hệ thống. Tại đây, bạn có thể tạo lớp, cập nhật thông tin lớp và nhập danh sách học sinh trước khi tổ chức thi.

## Chức năng chính

- Tạo lớp học mới.
- Cập nhật thông tin lớp.
- Quản lý danh sách học sinh của từng lớp.
- Chuẩn bị dữ liệu học sinh trước khi tạo phiên thi.

## Nhập danh sách từ Excel hoặc CSV

Hệ thống hỗ trợ nhập danh sách học sinh từ file **Excel** (`.xlsx`, `.xls`) hoặc **CSV**.

### Yêu cầu về cấu trúc cột

File cần có một dòng tiêu đề ở đầu. Thứ tự các cột không bắt buộc, nhưng cần có đủ các trường sau:

- **STT** hoặc **Số thứ tự**
- **Họ** hoặc **HoDem**
- **Tên** hoặc **Ten**
- **Lớp** hoặc **Lop**

Nếu file chỉ có một cột chứa đầy đủ họ và tên, bạn có thể đặt toàn bộ tên học sinh trong cột **Họ** hoặc **HoDem**.

### Cơ chế lọc theo lớp

Bạn có thể chuẩn bị một file chứa danh sách học sinh của nhiều lớp trong cùng một khối hoặc toàn trường. Khi tải file lên trong màn hình của một lớp cụ thể, hệ thống sẽ đối chiếu giá trị ở cột **Lớp** và chỉ lấy những học sinh thuộc đúng lớp đó.

Ví dụ: nếu bạn đang tải file vào lớp `5.1`, hệ thống sẽ chỉ nhập các học sinh có giá trị lớp là `5.1`.

### Tạo nhiều lớp từ một file Excel

Tính năng **Tạo nhiều lớp từ Excel** cho phép khởi tạo nhiều lớp trong một lần tải lên.

Để sử dụng hiệu quả:

- Mỗi lớp nên nằm trong một **sheet** riêng.
- Tên **sheet** nên trùng với tên lớp, ví dụ `5.1`, `5.2`, `6.1`.
- Mỗi sheet cần có cấu trúc cột đúng như phần hướng dẫn ở trên.

Sau khi tải lên, hệ thống sẽ quét từng sheet để tạo lớp tương ứng và nhập danh sách học sinh cho từng lớp.

## Chỉnh sửa lớp

Khi chọn một lớp trong danh sách, bạn có thể thực hiện các thao tác sau:

- Cập nhật thông tin của lớp.
- Tải lại danh sách học sinh từ file.
- Sắp xếp danh sách học sinh theo đúng số thứ tự.
- Thêm thủ công từng học sinh.
- Lưu lại danh sách sau khi hoàn tất chỉnh sửa.

## Gợi ý sử dụng

- Chuẩn bị file Excel theo đúng mẫu trước khi nhập để giảm lỗi dữ liệu.
- Nếu quản lý nhiều lớp cùng lúc, nên dùng tính năng tạo nhiều lớp từ Excel để tiết kiệm thời gian.
- Sau khi nhập danh sách, hãy kiểm tra lại số thứ tự và thông tin học sinh trước khi tạo phiên thi.
