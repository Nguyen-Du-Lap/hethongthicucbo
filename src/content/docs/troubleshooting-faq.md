---
title: Troubleshooting / FAQ
description: Các câu hỏi và lỗi thường gặp khi sử dụng hệ thống thi cục bộ.
---

# Troubleshooting / FAQ

## Học sinh nhập đúng mã phòng nhưng chưa vào thi được

Nguyên nhân thường gặp:

- giáo viên chưa mở phòng,
- học sinh mới chỉ vào **phòng chờ**,
- backend hoặc mạng LAN đang có trục trặc.

Cách xử lý:

1. Kiểm tra lại trạng thái ca thi trên giao diện giáo viên.
2. Xác nhận máy học sinh đang truy cập đúng địa chỉ trong mạng nội bộ.
3. Tải lại trang một lần nếu cần, vì hệ thống có cơ chế phục hồi trạng thái.

## Học sinh nhấn F5 có bị mất bài không?

Theo tài liệu hiện có, ứng dụng học sinh lưu trạng thái vào `localStorage`, bao gồm cả:

- trạng thái phòng chờ,
- bài đang làm,
- thời gian và đáp án đã chọn.

Điều này giúp giảm rủi ro mất trạng thái khi tải lại trang. Tuy nhiên, trong buổi thi thật vẫn nên tránh thao tác không cần thiết.

## Vì sao giáo viên không thấy kết quả cập nhật ngay?

Có thể do:

- khoảng thời gian làm mới màn hình giám sát đang để quá dài,
- kết nối nội bộ chậm hoặc không ổn định,
- học sinh chưa nộp bài.

Admin V1 có cấu hình **Refresh Interval** cho màn hình giám sát. Hãy kiểm tra lại mục này trong phần cài đặt.

## Có thể nhập đề bằng Excel không?

Không. Theo nội dung dự án hiện tại, **Excel đã bị loại khỏi hệ thống**. Các định dạng nên dùng là:

- `.docx`
- `.txt`
- `JSON`

## Vì sao không nên hard-code localhost?

Vì hệ thống được dùng trong mạng nội bộ và người dùng truy cập từ nhiều máy khác nhau. Nếu hard-code `localhost`, frontend sẽ chỉ gọi API đúng trên chính máy đang mở trình duyệt, dẫn đến lỗi kết nối.

## Hệ thống có theo dõi việc rời tab không?

Có. Ứng dụng học sinh có hook chống gian lận theo dõi các sự kiện như `visibilitychange`, `blur`, `focus` và gửi dữ liệu lên server để giáo viên giám sát.
