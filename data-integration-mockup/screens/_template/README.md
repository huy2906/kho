# Hướng dẫn sử dụng Template

Đây là thư mục chuẩn dùng để nhân bản cho mỗi màn hình Use Case mới.

## Quy trình tạo UC mới:

- **Bước 1**: Copy nguyên folder `_template/`
- **Bước 2**: Đổi tên folder mới copy thành `UC{số}-{ten-khong-dau}`.
  *(Ví dụ: `UC002-ket-noi-sql-server`, `UC015-cau-hinh-mapping`)*
- **Bước 3**: Mở file `index.html` trong folder mới:
  - Sửa nội dung thẻ `<title>`
  - Sửa `Breadcrumb` (Tìm chữ `[Tên UC]` và thay bằng tên Use Case thực tế)
- **Bước 4**: Điền giao diện thiết kế vào phần thẻ `<main class="flex-1 overflow-auto bg-slate-50 relative p-6">`
- **Bước 5**: Nhúng (Reference) các component tái sử dụng từ thư mục `/components/` bằng hàm `loadPartial('id_vung_chua', '../../components/...')` hoặc copy trực tiếp mã HTML nếu component đó cần tùy biến trạng thái riêng biệt cho màn hình.

*Lưu ý: Mọi scripts JS chung đều đã được thiết lập sẵn. Gọi `lucide.createIcons()` nếu bạn có render HTML động qua script nội bộ.*
