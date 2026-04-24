---
title: Quản lý đề thi
description: Hướng dẫn quản lý danh sách đề thi, danh mục, sao lưu và khôi phục dữ liệu.
---

## Tổng quan

Trang **Quản lý đề thi** giúp bạn theo dõi và thao tác với toàn bộ đề thi trong hệ thống. Tại đây, bạn có thể tìm kiếm, lọc, chỉnh sửa, xóa đề thi, đồng thời quản lý danh mục và thực hiện sao lưu hoặc khôi phục dữ liệu khi cần.

## Các chức năng chính

Trong màn hình quản lý đề thi, bạn có thể sử dụng các chức năng sau:

- **Tìm kiếm** đề thi theo tên hoặc thông tin liên quan
- **Lọc** danh sách đề thi theo nhu cầu quản lý
- **Chỉnh sửa** nội dung hoặc thông tin của đề thi
- **Xóa** những đề thi không còn sử dụng

Nên kiểm tra kỹ nội dung trước khi xóa để tránh mất dữ liệu đang cần dùng cho các kỳ thi sau.

## Quản lý danh mục

Hệ thống hỗ trợ quản lý danh mục đề thi để việc sắp xếp và tra cứu thuận tiện hơn.

Bạn có thể:

- **Thêm** danh mục mới
- **Sửa** tên hoặc thông tin danh mục hiện có
- **Xóa** danh mục không còn sử dụng

Khuyến nghị:

- Đặt tên danh mục ngắn gọn, rõ nghĩa và thống nhất.
- Nên phân loại theo môn học, khối lớp hoặc mục đích sử dụng để dễ quản lý lâu dài.

## Sao lưu và khôi phục

Chức năng sao lưu và khôi phục giúp bạn lưu lại dữ liệu đề thi để phòng trường hợp cần chuyển hệ thống, phục hồi dữ liệu hoặc lưu trữ định kỳ.

### Sao lưu toàn bộ (JSON)

Khi sử dụng chức năng này, hệ thống sẽ tải toàn bộ dữ liệu đề thi về máy dưới dạng một file `JSON`.

Nên thực hiện sao lưu trong các trường hợp sau:

- trước khi cập nhật hệ thống
- trước khi chỉnh sửa dữ liệu số lượng lớn
- trước khi chuyển dữ liệu sang máy chủ hoặc máy khác

> Lưu ý: Các file ảnh trong thư mục upload chỉ được lưu dưới dạng đường dẫn tham chiếu. File `JSON` không chứa dữ liệu ảnh thực tế.

Vì vậy, nếu hệ thống có sử dụng ảnh trong câu hỏi, bạn nên sao lưu thêm thư mục ảnh hoặc dữ liệu upload liên quan.

### Khôi phục toàn bộ (JSON)

Để khôi phục dữ liệu, hãy tải file `JSON` đã sao lưu trước đó lên hệ thống.

Khuyến nghị trước khi khôi phục:

- kiểm tra đúng file sao lưu cần dùng
- xác nhận dữ liệu hiện tại đã được sao lưu nếu còn cần giữ lại
- tránh khôi phục nhầm file cũ lên hệ thống đang vận hành

Sau khi khôi phục, bạn nên rà soát lại danh sách đề thi để chắc chắn dữ liệu đã được nạp đầy đủ và đúng phiên bản mong muốn.
