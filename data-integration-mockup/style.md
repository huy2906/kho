# Design System & Styling Guidelines

Tài liệu này định nghĩa hệ thống thiết kế cho dự án Mockup Hệ thống Quản trị Tích hợp Dữ liệu. Các AI Agent BẮT BUỘC phải tham khảo tài liệu này trước khi sinh mã.

## 1. Màu sắc (Colors)

Hệ thống màu sắc tuân thủ thiết kế hiện đại, chuyên nghiệp, phù hợp với cơ quan nhà nước.

- **Primary (Xanh dương)**: Màu chủ đạo cho button, link, background active.
  - Tailwind variables: `primary-50` đến `primary-900`
  - VD: `bg-primary-600` (Button), `text-primary-700` (Text nhấn), `bg-primary-900` (Sidebar).

- **Trạng thái (Status)**:
  - Success (`success` / Green): Thành công, Đã kết nối, Đã hoàn thành.
  - Error (`error` / Red): Lỗi, Ngắt kết nối, Xóa, Thất bại.
  - Warning (`warning` / Amber): Cảnh báo, Đang xử lý, Tạm dừng.
  - Info (`info` / Sky Blue): Thông tin, Nhắc nhở.

## 2. Typography (Phông chữ)

- Font chữ duy nhất: **Be Vietnam Pro**.
- Cấu hình Tailwind: `font-sans`.
- Kích thước chuẩn:
  - Tiêu đề trang (H1): `text-2xl font-bold`
  - Tiêu đề Card (H2/H3): `text-lg font-bold`
  - Chữ thường: `text-sm` (14px) - đây là kích thước font phổ biến nhất cho web dashboard.
  - Chữ phụ (meta, hint): `text-xs text-gray-500`.

## 3. Spacing & Layout (Khoảng cách & Bố cục)

- Container chính (UC screens): Thường được bọc trong `<main class="flex-1 overflow-auto bg-slate-50 relative p-6">`.
- Spacing: Dùng hệ thống space của Tailwind (nhân 4px).
  - Khoảng cách giữa các khối (gap, margin bottom): `mb-6` (24px) hoặc `gap-4`/`gap-6`.
  - Padding trong card: `p-4` hoặc `p-5` hoặc `p-6`.

## 4. UI Components

### 4.1 Buttons
- **Primary**: `bg-primary-600 text-white hover:bg-primary-700 font-semibold rounded-lg px-4 py-2`
- **Secondary (Outline)**: `bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg px-4 py-2`
- **Danger**: `bg-error-600 text-white hover:bg-error-700 font-semibold rounded-lg px-4 py-2`
- Luôn bao gồm Icon bên trong button để tăng UX (Ví dụ `<i data-lucide="plus" class="w-4 h-4"></i>`).

### 4.2 Cards
- Giao diện dạng hộp (box): `bg-white rounded-xl border border-gray-200 shadow-sm`.
- Hiệu ứng hover: Thêm `hover:shadow-md transition-shadow`.

### 4.3 Form Inputs
- Style chuẩn: `border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 px-4 py-2.5 sm:text-sm`.
- Label: `text-sm font-semibold text-gray-700 mb-1.5`.

## 5. Patterns Đặc thù Data Integration

- **Connection Card (`db-source-card.html`)**: Thẻ hiển thị CSDL nguồn. Có dải màu mép trái, logo CSDL, hostname, và badge ping (Đang kết nối).
- **Schema Tree (`schema-tree.html`)**: Cây cấu trúc dữ liệu nhiều cấp (DB > Schema > Table > Col). Dùng `margin-left` hoặc `border-left` để giật cấp. Bắt buộc có icon khác nhau cho từng loại node.
- **Mapping Table (`mapping-table.html`)**: Bảng chia 3 phần: [Nguồn] -> [Transform] -> [Đích]. Có nút nối/chọn kiểu ánh xạ.
- **Job Status (`job-status.html`)**: Có progress bar giả lập ở trên đỉnh card, huy hiệu loại Job (CDC/Full), biểu đồ cột nhỏ mini-chart mô phỏng lịch sử chạy tuần.

## 8. Layout & Structure

### 8.7 Header & Sidebar

#### 8.7.1 Sidebar với Submenu (Collapsible)

Khi menu có nhiều mục con cùng nhóm, dùng cấu trúc submenu collapsible:
- Parent item: có icon chevron-right bên phải, click để toggle
- Sub-items: indent (pl-12), text-sm, background hơi tối hơn parent (bg-primary-950)
- Active state cho sub-item: bg-primary-700, text-white, font-medium
- Auto-expand khi user đang ở 1 trong các trang con
- Animation: chevron xoay 90 độ khi expand (transition-transform)

Class chuẩn cho submenu container:
- hidden (default state)
- bg-primary-950 (nền tối hơn parent một chút)

Class chuẩn cho sub-item link:
- flex items-center gap-3
- pl-12 pr-4 py-2 (indent 12 đơn vị để thụt vào)
- text-sm
- text-primary-100 (default), text-white (active)
- hover:bg-primary-800
