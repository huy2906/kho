---
description: Tạo giao diện mapping schema (ánh xạ cấu trúc dữ liệu) 2 cột với schema tree và mapping table.
---

# Skill: Tạo giao diện Mapping Schema

Đây là giao diện phức tạp nhất. AI Agent cần làm theo quy tắc sau:

1. **Layout tổng quan**:
   - Phân chia màn hình làm 2 khối chính (Top: Schema Trees, Bottom: Mapping Table).
2. **Schema Trees (Khối trên)**:
   - Dùng Grid `grid-cols-2` hoặc Flexbox `w-[40%] - mũi tên map - w-[60%]`.
   - Box trái: Cây cấu trúc CSDL Nguồn (Load từ `components/data-integration/schema-tree.html`).
   - Box phải: Cây cấu trúc CSDL Đích.
   - Nút Map (Mũi tên chevron-right) nằm giữa 2 khối.
3. **Mô phỏng Tree**:
   - Thụt lề bằng `ml-4` hoặc `pl-4 border-l`.
   - Icon Database -> Icon Folder (Schema) -> Icon Table -> Icon Hash/Key/Calendar (Column).
   - Thêm nhãn Type dữ liệu (INT, VARCHAR) bên cạnh tên cột bằng thẻ nhỏ `text-xs bg-gray-100`.
4. **Mapping Table (Khối dưới)**:
   - Bảng 3 cột: Trường Nguồn, Transform Rule (Dropdown), Trường Đích.
   - Sử dụng màu nền khác nhau để phân biệt (Cam cho nguồn, Xanh dương cho đích).
   - Nút Xóa mapping ở cuối dòng.
5. **Action Buttons**: "Lưu nháp", "Lưu và Áp dụng".
