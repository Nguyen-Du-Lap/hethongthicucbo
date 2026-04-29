---
title: Quản lý đề thi
description: Hướng dẫn quản lý danh sách đề thi, tìm kiếm, lọc, sao lưu và khôi phục dữ liệu đề thi trong hệ thống thi cục bộ.
---

# Quản lý đề thi

Trang **Quản lý đề thi** giúp bạn theo dõi và thao tác với toàn bộ thư viện đề trong **hệ thống thi cục bộ**. Nếu số lượng đề thi bắt đầu nhiều lên, đây là nơi cần dùng để tìm kiếm, lọc, sao lưu và khôi phục dữ liệu thay vì quản lý thủ công.

Để hiểu tổng quan luồng làm việc với đề, xem [Đề Thi](/admin/de-thi/de-thi/). Nếu cần tạo mới nội dung, xem [Tạo đề thi](/admin/de-thi/tao-de-thi/).

## Bạn có thể làm gì trong trang này?

- Tìm kiếm đề thi theo tên hoặc thông tin liên quan.
- Lọc danh sách đề để quản lý dễ hơn.
- Chỉnh sửa hoặc xóa đề không còn dùng.
- Quản lý danh mục đề thi.
- Sao lưu hoặc khôi phục toàn bộ dữ liệu đề thi.

## Khi nào nên dùng Quản lý đề thi?

Trang này đặc biệt hữu ích khi:

- bạn có nhiều đề cho nhiều môn hoặc nhiều khối lớp,
- cần sao lưu trước khi nâng cấp hệ thống,
- cần dọn lại thư viện đề trước kỳ thi mới.

## Tìm kiếm và lọc đề thi

Khi số lượng đề tăng lên, bạn nên:

- tìm theo tên đề,
- lọc theo danh mục,
- nhóm đề theo môn học, khối lớp hoặc mục đích sử dụng.

Việc đặt tên đề rõ ràng ngay từ đầu sẽ giúp bước quản lý sau này dễ hơn nhiều. Nếu chưa có quy chuẩn, nên quay lại [Đề Thi](/admin/de-thi/de-thi/) để thống nhất cách đặt tên.

## Quản lý danh mục

Hệ thống hỗ trợ danh mục để sắp xếp thư viện đề có cấu trúc hơn.

Bạn có thể:

- thêm danh mục mới,
- sửa tên danh mục,
- xóa danh mục không còn dùng.

Khuyến nghị:

- đặt tên danh mục ngắn gọn và nhất quán,
- phân loại theo môn học, khối lớp hoặc mục tiêu sử dụng như thi thật, thi thử, ôn luyện.

## Sao lưu toàn bộ dữ liệu đề thi

Chức năng sao lưu sẽ tải toàn bộ dữ liệu đề thi về máy dưới dạng file `JSON`.

Nên sao lưu trong các trường hợp:

- trước khi cập nhật phiên bản mới từ [Phát hành](/phat-hanh/),
- trước khi chỉnh sửa số lượng lớn,
- trước khi chuyển dữ liệu sang máy khác.

> Lưu ý: Các file ảnh trong thư mục upload có thể chỉ được lưu dưới dạng đường dẫn tham chiếu. File `JSON` không nhất thiết chứa toàn bộ dữ liệu ảnh thực tế.

Vì vậy, nếu câu hỏi có dùng ảnh, bạn nên sao lưu thêm thư mục ảnh hoặc dữ liệu upload liên quan.

## Khôi phục dữ liệu đề thi

Để khôi phục, hãy tải file `JSON` đã sao lưu lên hệ thống.

Trước khi khôi phục, nên:

- kiểm tra đúng file cần dùng,
- sao lưu dữ liệu hiện tại nếu còn giá trị,
- tránh phục hồi nhầm bản cũ lên hệ thống đang chuẩn bị cho kỳ thi.

Sau khi khôi phục, hãy rà lại thư viện đề và thử mở một số đề quan trọng trước khi dùng cho [Phiên thi](/admin/phien-thi/).

## Lưu ý khi xóa hoặc chỉnh sửa đề

- Không nên xóa đề nếu chưa chắc chắn đề đó không còn phục vụ kỳ thi nào.
- Nếu đề đang dùng cho nhiều lớp hoặc nhiều mục đích, nên sao lưu trước khi sửa sâu.
- Khi cần dùng đề cho thi chính thức, luôn kiểm tra lại ở [Thêm vào](/admin/de-thi/them-vao/).

## Bước tiếp theo

- Nếu cần tạo hoặc nhập thêm đề: xem [Tạo đề thi](/admin/de-thi/tao-de-thi/)
- Nếu cần gán đề vào buổi thi: xem [Thêm vào](/admin/de-thi/them-vao/)
- Nếu chuẩn bị cho thi thật: xem [Phiên thi](/admin/phien-thi/)
