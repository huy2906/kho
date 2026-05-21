---
description: Tạo bảng quản lý danh sách CSDL với tính năng lọc, tìm kiếm, phân trang và action columns.
---

# Skill: Tạo Table Quản lý CSDL

Khi người dùng yêu cầu làm trang danh sách quản lý (CRUD list), AI Agent áp dụng mẫu sau:

1. **Page Header**: Tiêu đề trang bên trái, nút "Thêm mới" bên phải (Primary button).
2. **Filter Bar (Thanh tìm kiếm)**: 
   - 1 ô search box có icon kính lúp.
   - 2-3 ô dropdown select (Lọc loại, trạng thái).
   - Nút Export Excel (Secondary button).
3. **Data Table**:
   - Sử dụng thẻ `<table>` bao bọc trong div `overflow-x-auto`.
   - Cột STT căn giữa.
   - Các cột nội dung chính căn trái.
   - Cột Trạng thái dùng badges (Thẻ `span` bo tròn với màu theo trạng thái `success`, `error`, `warning`, `info`).
   - Cột Thao tác (Action): Dùng các icon button (eye, edit-3, trash-2, plug) có màu hover tương ứng.
4. **Pagination**:
   - Nằm dưới cùng bảng. Hiển thị text "Hiển thị x đến y trong z kết quả".
   - Dãy nút số phân trang (Previous, 1, 2, 3, Next).
5. **Empty State**: Thiết kế div placeholder với icon lớn mờ, thông báo "Không tìm thấy dữ liệu" nếu user yêu cầu trạng thái rỗng.
