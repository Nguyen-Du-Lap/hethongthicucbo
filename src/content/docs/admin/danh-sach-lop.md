---
title: Danh sách lớp
description: Hướng dẫn quản lý lớp học, nhập danh sách học sinh và chuẩn bị dữ liệu lớp trước khi mở phiên thi trong hệ thống thi cục bộ.
---

# Danh sách lớp

Tab **Danh sách lớp** dùng để quản lý lớp học và danh sách học sinh trước khi tổ chức thi trên **hệ thống thi cục bộ**. Nếu bạn đang cần **quản lý học sinh** hoặc chuẩn bị dữ liệu lớp để mở phòng thi, đây là bước không nên bỏ qua trước khi vào [Phiên thi](/admin/phien-thi/).

## Khi nào cần chuẩn bị danh sách lớp?

Bạn nên xử lý dữ liệu lớp trước khi:

- tạo phiên thi chính thức cho một lớp cụ thể,
- cần phân tách học sinh theo từng lớp,
- muốn tránh nhập tay thông tin học sinh ngay sát giờ thi.

Nếu đề thi đã sẵn sàng nhưng lớp chưa chuẩn, buổi thi rất dễ chậm do học sinh không tìm thấy đúng phòng hoặc dữ liệu bị lệch.

## Chức năng chính

- Tạo lớp học mới.
- Cập nhật thông tin lớp.
- Quản lý danh sách học sinh của từng lớp.
- Nhập dữ liệu hàng loạt từ Excel hoặc CSV.
- Chuẩn bị dữ liệu lớp trước khi tạo [Phiên thi](/admin/phien-thi/).

## Cách nhập danh sách học sinh từ Excel hoặc CSV

Hệ thống hỗ trợ nhập danh sách học sinh từ file **Excel** (`.xlsx`, `.xls`) hoặc **CSV**.

### Yêu cầu về cấu trúc cột

File cần có dòng tiêu đề ở đầu. Thứ tự cột không bắt buộc, nhưng nên có đủ các trường:

- **STT** hoặc **Số thứ tự**
- **Họ** hoặc **HoDem**
- **Tên** hoặc **Ten**
- **Lớp** hoặc **Lop**

Nếu file chỉ có một cột chứa đầy đủ họ tên, bạn có thể đặt toàn bộ tên học sinh trong cột **Họ** hoặc **HoDem**, nhưng nên kiểm tra kỹ lại sau khi nhập.

## Cơ chế lọc theo lớp

Bạn có thể chuẩn bị một file chung cho nhiều lớp. Khi tải file lên trong màn hình của một lớp cụ thể, hệ thống sẽ đối chiếu giá trị ở cột **Lớp** và chỉ lấy những học sinh đúng lớp đó.

Ví dụ: nếu bạn đang nhập dữ liệu cho lớp `5.1`, hệ thống chỉ lấy những dòng có giá trị lớp là `5.1`.

Điều này giúp tiết kiệm thời gian nếu bạn phải chuẩn bị dữ liệu cho cả khối hoặc toàn trường.

## Tạo nhiều lớp từ một file Excel

Tính năng **Tạo nhiều lớp từ Excel** phù hợp khi bạn cần khởi tạo nhiều lớp trong một lần.

Để dùng hiệu quả:

- Mỗi lớp nên nằm trong một **sheet** riêng.
- Tên **sheet** nên trùng với tên lớp, ví dụ `5.1`, `5.2`, `6.1`.
- Mỗi sheet nên có cấu trúc cột chuẩn như hướng dẫn ở trên.

Sau khi tải lên, hệ thống sẽ quét từng sheet để tạo lớp tương ứng và nhập danh sách học sinh cho từng lớp.

## Sau khi nhập xong nên kiểm tra gì?

Trước khi mở thi, nên rà lại:

- số thứ tự của học sinh,
- tên lớp,
- họ tên có bị thiếu hoặc trùng không,
- dữ liệu có vào đúng lớp hay không.

Nếu sắp dùng cho thi chính thức, bạn nên kiểm tra thêm luồng vào phòng của học sinh ở [Phiên thi](/exam-page/phien-thi/).

## Chỉnh sửa lớp và danh sách học sinh

Khi chọn một lớp trong danh sách, bạn có thể:

- cập nhật thông tin của lớp,
- tải lại danh sách học sinh từ file,
- sắp xếp danh sách theo số thứ tự,
- thêm thủ công từng học sinh,
- lưu lại sau khi chỉnh sửa.

## Lỗi phổ biến khi quản lý danh sách lớp

- File Excel thiếu cột lớp hoặc ghi sai tên lớp.
- Học sinh bị nhập vào nhầm lớp do dữ liệu trong file không đồng nhất.
- Số thứ tự không khớp với dữ liệu giáo viên đang dùng để gọi vào phòng thi.

Nếu phát hiện lỗi sát giờ thi, nên sửa ngay trong tab này trước khi tạo phiên thi. Nếu học sinh đã vào mà thông tin không khớp, xem thêm [Troubleshooting / FAQ](/troubleshooting-faq/).

## Gợi ý sử dụng hiệu quả

- Chuẩn bị file Excel theo đúng mẫu trước khi nhập để giảm lỗi.
- Nếu quản lý nhiều lớp cùng lúc, nên dùng tính năng tạo nhiều lớp từ Excel.
- Sau khi nhập xong, nên kiểm tra lại một vòng trước khi dùng ở [Phiên thi](/admin/phien-thi/).
