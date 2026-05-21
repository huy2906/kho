# Mockup UI Hệ thống Quản trị Tích hợp Dữ liệu

Đây là dự án thiết kế HTML/CSS Mockup tĩnh cho **Hệ thống Quản trị Tích hợp Dữ liệu** của Cơ quan Nhà nước, tập trung vào các chức năng quản lý kết nối CSDL, lập lịch ETL (Extract, Transform, Load) và cấu hình CDC (Change Data Capture).

## Tech Stack
- HTML5
- Tailwind CSS (qua CDN)
- Javascript Vanilla (không dùng framework)
- Lucide Icons (qua CDN)
- Be Vietnam Pro Font

## Cách Clone và Mở dự án
1. Yêu cầu cài đặt [Visual Studio Code](https://code.visualstudio.com/).
2. Yêu cầu cài đặt Git.
3. Clone repository này về máy.
4. Mở thư mục gốc `data-integration-mockup` bằng VS Code.

## Hướng dẫn Chạy (Development)
Do dự án sử dụng API `fetch()` của Javascript để load các component dùng chung (Sidebar, Header, Footer) nhằm tối ưu khả năng tái sử dụng code tĩnh, bạn **không thể** mở file `.html` trực tiếp bằng trình duyệt qua giao thức `file://` (sẽ bị lỗi CORS).

Vui lòng làm theo hướng dẫn sau:
1. Mở VS Code.
2. Cài đặt Extension **Live Server** (của tác giả Ritwick Dey).
3. Trong thanh Explorer bên trái của VS Code, click chuột phải vào file `index.html`.
4. Chọn **Open with Live Server**.
5. Trình duyệt mặc định sẽ bật lên tại địa chỉ `http://127.0.0.1:5500/index.html`.

## Cấu trúc thư mục
- `.agent/`: Các hướng dẫn, skill và rules dành cho AI Agent khi tự động sinh code.
- `assets/`: 
  - `css/`: Cấu hình màu sắc Tailwind và CSS tùy chỉnh.
  - `images/`: Hình ảnh, logo tĩnh.
  - `js/`: Scripts tiện ích dùng chung (`common.js`, `components.js`).
- `components/`: Chứa các mảnh HTML nhỏ (partial) để tái sử dụng.
  - `layout/`: Các thành phần khung sườn (Header, Sidebar, Footer, Breadcrumb).
  - `data-integration/`: Các khối UI đặc thù của dự án (Form kết nối, Cây dữ liệu, Bảng Mapping).
- `docs/`: Tài liệu dự án, danh sách UC.
- `screens/`: Nơi chứa code giao diện từng Use Case (UC). 
  - Thư mục `_template/` là mẫu chuẩn để copy.
- `index.html`: Dashboard chính liệt kê toàn bộ UC.

## Dành cho Business Analyst (BA)
Vui lòng đọc file [SETUP.md](./SETUP.md) để biết quy trình tạo màn hình UC mới.
