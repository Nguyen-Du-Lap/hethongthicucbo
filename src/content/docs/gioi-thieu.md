---
title: Giới thiệu hệ thống thi cục bộ
description: Tổng quan về hệ thống thi cục bộ, phần mềm thi trắc nghiệm nội bộ trong mạng LAN dành cho giáo viên, học sinh và người quản trị.
---

# Giới thiệu hệ thống thi cục bộ

**Hệ thống thi cục bộ** là phần mềm thi trắc nghiệm nội bộ chạy trong **mạng LAN**, phù hợp cho phòng máy, lớp học và các buổi kiểm tra tập trung cần tính ổn định cao. Bộ tài liệu này giúp giáo viên, học sinh và người quản trị hiểu rõ cách cài đặt, tạo đề thi, mở phiên thi và xử lý các lỗi thường gặp khi triển khai thực tế.

Nếu bạn đang cần đi từ tổng quan đến thao tác cụ thể, hãy xem [Bắt đầu nhanh](/bat-dau-nhanh/) trước. Nếu bạn là người trực tiếp triển khai hệ thống trong phòng máy, nên đọc tiếp [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).

## Hệ thống này dùng để làm gì?

Hệ thống được thiết kế để tổ chức **thi trắc nghiệm nội bộ** mà không phụ thuộc vào Internet công cộng trong lúc vận hành. Trong mô hình phổ biến, một máy chủ nội bộ chạy backend, còn giáo viên và học sinh truy cập bằng các máy tính khác trong cùng mạng LAN.

Kiến trúc sử dụng gồm ba phần chính:

- **Admin**: nơi giáo viên hoặc quản trị viên tạo đề thi, mở phiên thi, theo dõi học sinh và xem kết quả.
- **Student**: giao diện để học sinh vào phòng thi, làm bài và nộp bài.
- **Backend Server**: máy chủ nội bộ lưu dữ liệu, đồng bộ trạng thái và phục vụ nội dung cho toàn bộ hệ thống.

## Khi nào nên dùng hệ thống thi cục bộ?

Hệ thống này phù hợp khi bạn cần:

- Tổ chức thi trong **phòng máy** hoặc lớp học có nhiều máy cùng truy cập.
- Giảm phụ thuộc vào đường truyền Internet bên ngoài.
- Quản lý đề thi, phòng thi và kết quả ngay trong mạng nội bộ.
- Theo dõi quá trình làm bài của học sinh trong một phiên thi chính thức.

Nếu mục tiêu của bạn là triển khai nhanh cho một buổi thi đầu tiên, hãy xem [Bắt đầu nhanh](/bat-dau-nhanh/). Nếu mục tiêu là chuẩn bị hạ tầng lâu dài, hãy đi sâu hơn ở [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).

## Hệ thống thi cục bộ khác gì với thi online qua Internet?

Điểm khác biệt chính là hệ thống ưu tiên môi trường **nội bộ trong mạng LAN**:

- Dữ liệu và phiên làm bài được xử lý trong mạng nội bộ, giảm phụ thuộc vào kết nối Internet ngoài trường.
- Giáo viên có thể mở phòng thi, giám sát học sinh và lấy kết quả trực tiếp trong hệ thống quản trị.
- Việc cấu hình địa chỉ truy cập, máy chủ và lớp học cần được chuẩn bị đúng ngay từ đầu để học sinh vào thi ổn định.

Chính vì vậy, phần [Troubleshooting / FAQ](/troubleshooting-faq/) rất quan trọng, đặc biệt với các lỗi kiểu học sinh không vào được phòng thi, truy cập sai địa chỉ hoặc mạng LAN không ổn định.

## Những ai nên đọc tài liệu này?

### Giáo viên hoặc người tổ chức thi

Bạn nên bắt đầu theo thứ tự:

1. [Bắt đầu nhanh](/bat-dau-nhanh/)
2. [Đề Thi](/admin/de-thi/de-thi/)
3. [Tạo đề thi](/admin/de-thi/tao-de-thi/)
4. [Phiên thi](/admin/phien-thi/)

### Người cài đặt hoặc vận hành hệ thống

Bạn nên đọc:

1. [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/)
2. [Cài đặt](/admin/cai-dat/)
3. [Troubleshooting / FAQ](/troubleshooting-faq/)

### Học sinh

Bạn có thể đi thẳng đến các trang hướng dẫn ở nhóm Trang làm bài, đặc biệt là [Phiên thi](/exam-page/phien-thi/) nếu cần biết cách tham gia một buổi thi chính thức.

## Điểm nổi bật của phần mềm thi trắc nghiệm nội bộ

- Hỗ trợ nhiều dạng câu hỏi như chọn một, chọn nhiều, đúng/sai, nối cặp và kéo thả.
- Có thể tạo đề thủ công, nhập từ tệp hoặc tái sử dụng đề cũ.
- Hỗ trợ các chế độ **phiên thi**, **thi thử** và **ôn luyện** cho các mục đích khác nhau.
- Có khu vực giám sát để theo dõi trạng thái làm bài và tổng hợp kết quả.

Để tải bản phát hành đang có và kiểm tra ghi chú cập nhật, xem [Phát hành](/phat-hanh/). Sau khi đã có file cài hoặc mã nguồn cần dùng, bạn nên tiếp tục với [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).
