---
title: Dọn database hệ thống thi cục bộ
description: Quản lý lịch sử dữ liệu thi, hướng dẫn dọn dữ liệu cũ và backup dữ liệu thi trong hệ thống thi cục bộ.
---

# Lịch Sử & Dọn DB

Tab **Lịch Sử & Dọn DB** trong [khu vực Admin](/admin/) hỗ trợ rà soát kiểm tra lịch sử dữ liệu thi đã phát sinh và tiến hành tối ưu, dọn database hệ thống thi cục bộ khi cần thiết. 

## Khi nào nên dọn DB (cơ sở dữ liệu)?

Sau một thời gian vận hành trong hệ thống, lượng thông tin lịch sử dữ liệu thi hay log các thao tác sẽ đầy lên. Bạn cần dọn dữ liệu cũ khi:
- Giao diện Admin có hiện tượng load trang lâu, mở danh sách điểm, đề thi phải chờ đợi.
- Bộ nhớ ổ cứng của máy chủ thi nội bộ được thông báo đã lưu quá nhiều.
- Cần làm mới hệ thống để chuẩn bị làm một học kỳ mới, hoặc khóa thi mới. 

## Tác động đến hiệu năng 

Quá trình quét và dọn hoàn toàn các rác log đem tới một luồng gió mới, hiệu năng phản hồi trên từng "Click" làm bài của học sinh sẽ giảm rõ rệt. Giảm tải đọc/ghi vào ổ đĩa từ các bản ghi thừa vì vậy giúp tăng lượng thiết bị máy trạm được phép tham gia cùng một lúc.

## Khuyến nghị backup trước khi dọn

- **Lưu ý:** Trước khi bấm nút thực hiện, bạn cần tạo ngay một gói "backup dữ liệu thi" dự phòng hoặc xuất sổ điểm.
- Bạn có thể tham khảo trong các phiên bản cập nhật từ phần [Xem các bản phát hành mới](/phat-hanh/), có đi kèm chi tiết việc khuyên backup thường xuyên nhất là khi bạn bắt đầu với các dữ liệu thi thật quan trọng của học sinh. 

## Lỗi thường gặp và Rủi ro nếu xóa nhầm

- **Sự cố:** Nếu lỡ tay xóa một cơ sở dữ liệu hoặc lịch sử điểm, toàn bộ phần chấm điểm cũ của phiên thi đó sẽ bị mất tự động. 
- Tính năng không hỗ trợ khả năng undo do việc dọn dẹp can thiệp trực tiếp xóa file. Đảm bảo 100% bạn muốn làm điều này trước khi nhấn OK. Xem thêm các phần [Khắc phục lỗi Troubleshoot](/troubleshooting-faq/) để biết quy trình khôi phục mạng nếu bị xóa.

## Bước tiếp theo

Khi cơ sở dữ liệu đã dọn xong, hệ thống làm việc với năng suất cao nhất, bạn có thể trở lại trang [Trang chủ quản trị Admin](/admin/) để bắt đầu tạo ra các cấu hình phiên thi tốc độ cao.
