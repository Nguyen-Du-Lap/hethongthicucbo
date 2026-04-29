---
title: Troubleshooting / FAQ
description: Các lỗi thường gặp khi dùng hệ thống thi cục bộ trong mạng LAN và cách xử lý nhanh cho giáo viên, học sinh và người vận hành.
---

# Troubleshooting / FAQ

Trang này tổng hợp các **lỗi thường gặp của hệ thống thi cục bộ** và cách xử lý nhanh trong môi trường **mạng LAN**. Nếu bạn đang chuẩn bị cho buổi thi thật, nên đọc trước các mục dưới đây để tránh bị động khi học sinh bắt đầu vào phòng.

Nếu bạn chưa kiểm tra phần cài đặt cơ bản, hãy xem [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/). Nếu bạn đang cần mở thi ngay, xem thêm [Phiên thi](/admin/phien-thi/).

## Học sinh nhập đúng mã phòng nhưng chưa vào thi được

Đây là lỗi rất thường gặp khi tổ chức thi trong mạng LAN.

Nguyên nhân phổ biến:

- Giáo viên chưa **mở phòng thi**.
- Học sinh mới chỉ vào **phòng chờ**.
- Máy học sinh đang truy cập sai địa chỉ nội bộ.
- Backend hoặc mạng LAN đang có trục trặc tạm thời.

Cách xử lý:

1. Mở lại [Phiên thi](/admin/phien-thi/) và kiểm tra phòng đã ở trạng thái cho phép vào làm bài chưa.
2. Xác nhận học sinh đang vào đúng trang [Phiên thi](/exam-page/phien-thi/) và đúng địa chỉ trong LAN.
3. Yêu cầu học sinh tải lại trang nếu hệ thống vừa mới mở phòng.
4. Nếu nhiều máy cùng lỗi, kiểm tra lại máy chủ và mạng nội bộ.

## Học sinh không truy cập được hệ thống từ máy trong phòng máy

Nguyên nhân thường là:

- Máy học sinh không cùng mạng LAN với máy chủ.
- Địa chỉ truy cập nội bộ đang cấu hình sai.
- Người triển khai dùng `localhost` thay vì địa chỉ máy chủ mà các máy khác có thể nhìn thấy.

Cách xử lý:

1. Kiểm tra lại mô hình ở [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).
2. Xác nhận các máy học sinh và máy chủ cùng một mạng nội bộ.
3. Trên máy giáo viên hoặc máy chủ, kiểm tra địa chỉ đang chia sẻ cho học sinh có phải là địa chỉ LAN thật hay không.

## Học sinh nhấn F5 có bị mất bài không?

Theo cơ chế hiện tại, ứng dụng học sinh có lưu trạng thái vào `localStorage`, bao gồm:

- trạng thái phòng chờ,
- bài đang làm,
- thời gian còn lại,
- các đáp án đã chọn.

Điều này giúp giảm rủi ro mất trạng thái khi tải lại trang. Dù vậy, trong buổi thi chính thức vẫn nên hạn chế thao tác không cần thiết và luôn kiểm tra lại trạng thái học sinh từ phía [Phiên thi](/admin/phien-thi/).

## Giáo viên không thấy kết quả cập nhật ngay

Nguyên nhân có thể gồm:

- Khoảng thời gian làm mới màn hình giám sát đang để quá dài.
- Kết nối nội bộ chậm hoặc chập chờn.
- Học sinh chưa nộp bài nên kết quả cuối chưa xuất hiện.

Cách xử lý:

1. Kiểm tra cấu hình **Refresh Interval** trong khu vực quản trị.
2. Mở lại phiên giám sát để chắc chắn dữ liệu được làm mới.
3. Kiểm tra xem học sinh đã thực sự nộp bài hay mới chỉ đang làm.

Nếu cần rà lại cài đặt quản trị, xem [Cài đặt](/admin/cai-dat/).

## Không thấy đề thi vừa tạo hoặc vừa nhập

Lỗi này thường xảy ra khi đề đã tạo nhưng chưa kiểm tra lại thông tin sau khi nhập.

Cách xử lý:

1. Mở [Đề Thi](/admin/de-thi/de-thi/) để xem lại thư viện đề.
2. Nếu đề được nhập từ file, kiểm tra lại các trường và cấu trúc ở [Tạo đề thi](/admin/de-thi/tao-de-thi/).
3. Nếu cần dùng đề trong buổi thi, nhớ thực hiện bước [Thêm vào](/admin/de-thi/them-vao/) đúng chế độ.

## Có thể nhập đề bằng Excel không?

Không. Theo phạm vi hệ thống hiện tại, định dạng Excel đã bị loại khỏi luồng nhập đề. Các định dạng nên dùng là:

- `.docx`
- `.txt`
- `JSON`

Nếu bạn đang chuẩn bị ngân hàng câu hỏi, nên đọc kỹ phần [Tạo đề thi](/admin/de-thi/tao-de-thi/) để chuẩn hóa dữ liệu ngay từ đầu.

## Vì sao không nên hard-code localhost?

Vì hệ thống được dùng trong mạng nội bộ và người dùng truy cập từ nhiều máy khác nhau. Nếu hard-code `localhost`, frontend chỉ gọi đúng trên chính máy đang mở trình duyệt, dẫn đến việc học sinh ở máy khác không truy cập được backend thực.

Khi triển khai thực tế, hãy luôn dùng địa chỉ mà các máy khác trong LAN nhìn thấy được. Phần này cần được kiểm tra từ bước [Cài đặt và thiết lập](/cai-dat-va-thiet-lap/).

## Hệ thống có theo dõi việc rời tab không?

Có. Ứng dụng học sinh có cơ chế theo dõi một số sự kiện như `visibilitychange`, `blur` và `focus` để hỗ trợ giám sát trong buổi thi.

Giáo viên nên:

- theo dõi khu vực giám sát trong [Phiên thi](/admin/phien-thi/),
- kiểm tra các trạng thái bất thường,
- kết hợp thêm quy định phòng máy nếu cần tăng mức độ nghiêm túc của buổi thi.

## Khi nào nên dùng Phiên thi, Thi thử hoặc Ôn luyện?

Ba chế độ này phục vụ ba mục tiêu khác nhau:

- **Phiên thi**: dùng cho buổi thi chính thức, có phòng thi và giám sát.
- **Thi thử**: dùng cho học sinh làm thử theo cấu trúc bài thi.
- **Ôn luyện**: dùng khi học sinh cần luyện lại nhiều lần.

Để gán đề đúng mục đích, xem [Thêm vào](/admin/de-thi/them-vao/). Nếu bạn đang mở buổi thi thật, ưu tiên đọc kỹ [Phiên thi](/admin/phien-thi/).
