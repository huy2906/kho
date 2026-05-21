# Mẫu Lời nhắc (Prompt Templates) dành cho AI

Nếu bạn là BA, hãy copy các đoạn prompt này và dán vào công cụ chat AI (Copilot, Gemini) để sinh code tự động, chuẩn xác và tuân theo thiết kế chung.

## Template 1: Tạo màn hình danh sách quản lý (CRUD)
> "Tạo cho tôi file index.html cho màn hình 'Quản lý kết nối API' (UC004). Màn hình này tương tự như UC001 (Quản lý CSDL Nguồn) nhưng dùng cho REST API.
> - Bắt buộc dùng lại Header, Sidebar, Footer chung.
> - Bảng danh sách gồm: STT, Tên API, Endpoint URL, Phương thức (GET/POST), Auth type (Bearer/Basic), Trạng thái, Thao tác.
> - Thêm bộ lọc (search box, dropdown Auth type).
> Hãy đọc `AGENTS.md` và `style.md` trước khi code. Lấy ý tưởng từ `tao-table-quan-ly-csdl.md`."

## Template 2: Tạo form thiết lập (Create/Edit)
> "Tạo giao diện form 'Cấu hình Endpoint API mới' cho UC004.
> - Layout chia làm 2 phần: Thông tin chung (Tên, URL, Method) và Thông tin xác thực (Dropdown chọn loại Auth).
> - Nếu chọn Auth = Basic thì hiện ô Username/Password. Nếu chọn Bearer thì hiện ô Token.
> - Dưới cùng có nút Test API và Lưu.
> Style giống với `tao-form-ket-noi-csdl.md`. Chỉ dùng HTML thuần và Tailwind class, icon Lucide."

## Template 3: Tạo màn hình Mapping
> "Tạo màn hình 'Mapping JSON API' cho UC022.
> - Khối trên là hiển thị cây JSON trả về từ API (nguồn) dạng tree-view, bên phải là cấu trúc bảng đích CSDL.
> - Khối dưới là bảng cấu hình mapping. 
> Tuân theo design pattern trong `tao-mapping-schema.md` và file component `schema-tree.html`."

## Template 4: Tạo Dashboard Monitoring
> "Tạo màn hình 'Giám sát tiến trình CDC' cho UC033.
> - Dùng dạng Grid (3 cột) hiển thị các thẻ (card) mô phỏng Job.
> - Mỗi card lấy mẫu từ `components/data-integration/job-status.html`.
> - Thêm một modal giả lập khung Log terminal nền đen chữ xanh lá để xem log thời gian thực.
> Tuân thủ hướng dẫn tại `tao-monitoring-job.md`."
