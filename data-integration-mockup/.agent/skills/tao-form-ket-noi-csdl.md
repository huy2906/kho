---
description: Tạo form cấu hình kết nối CSDL nguồn (Oracle/SQL Server/MySQL/PostgreSQL/MongoDB)
---

# Skill: Tạo Form Kết nối CSDL

Khi người dùng yêu cầu tạo form kết nối CSDL, AI Agent cần:

1. Phân tích loại CSDL đích (Oracle, SQL, NoSQL).
2. Tái sử dụng component tĩnh từ `components/data-integration/connection-form.html` (nếu có sẵn).
3. Sử dụng HTML Grid layout (`grid-cols-1 md:grid-cols-2`).
4. Các trường bắt buộc:
   - Dropdown chọn loại CSDL
   - Tên kết nối (Hiển thị)
   - Host/IP
   - Port (Mặc định: Oracle 1521, SQL Server 1433, MySQL 3306, Postgres 5432, MongoDB 27017)
   - Database Name / SID
   - Username & Password
5. Phần "Cấu hình nâng cao": Dùng `border` và `collapse` giả lập. Chứa các toggle switch (Tailwind peer class) cho SSL, Timeout, Max pool.
6. Buttons ở cuối: "Hủy bỏ", "Test Kết nối" (nút secondary có icon Plug), "Lưu cấu hình" (nút primary có icon Save).

Lưu ý: Input có lỗi cần viền đỏ `border-error-500` và text đỏ bên dưới. Dùng icon Lucide để minh họa (mắt che password, chevron dropdown).
