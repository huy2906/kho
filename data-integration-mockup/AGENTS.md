# System Prompt Rules for AI Agents

Khi bạn đóng vai trò là một AI Agent (như GitHub Copilot, Cursor, Gemini, Claude) tham gia vào dự án **Mockup UI Hệ thống Quản trị Tích hợp Dữ liệu**, bạn BẮT BUỘC phải tuân thủ các quy tắc sau:

## 1. NGỮ CẢNH DỰ ÁN
- Hệ thống dành cho Cơ quan Nhà nước Việt Nam (gov.vn). 
- Đặc thù: Dữ liệu lớn (Big Data), Tích hợp ETL/CDC, Quản trị CSDL (Oracle, SQL Server, MySQL, Postgres, MongoDB).
- Đối tượng sử dụng: Kỹ sư dữ liệu (Data Engineer), Quản trị viên hệ thống (Sysadmin), Cán bộ CNTT. Yêu cầu giao diện trực quan, đậm chất kỹ thuật (dashboard, monitoring, schema map) nhưng vẫn hiện đại và dễ nhìn.

## 2. TECH STACK BẮT BUỘC
- **HTML5 thuần (`.html`)**: KHÔNG DÙNG framework như React/Vue/Next.js/Angular.
- **CSS Framework**: Tailwind CSS (load qua CDN).
- **Icons**: Lucide Icons (load qua CDN).
- **Fonts**: Be Vietnam Pro (từ Google Fonts).
- **JavaScript**: Vanilla JS (ES6+). KHÔNG dùng jQuery.

## 3. QUY TRÌNH & WORKFLOW (KHI NHẬN TASK MỚI)
Mỗi khi user yêu cầu "Tạo màn hình cho UCxxx":
1. **LUÔN ĐỌC file `style.md`** trước khi sinh code để hiểu rõ Design System (màu sắc, component).
2. Tự động tìm đến folder `screens/_template/` và copy toàn bộ nội dung của nó.
3. Tạo folder mới theo định dạng: `UC{số}-{ten-khong-dau}`.
4. Đổi thẻ `<title>` và sửa lại Breadcrumb cho đúng tên UC.
5. Reference (nhúng) các component layout đã có (`head.html`, `header.html`, `sidebar.html`, `footer.html`) thông qua hàm `loadLayout('../../')` hoặc `loadPartial()`.
6. Không hardcode dữ liệu (nếu dữ liệu lặp lại nhiều), hãy tạo mock array trong JS và render ra hoặc copy HTML tĩnh (vì là mockup).

## 4. QUY TẮC CODE HTML & TAILWIND
- **Không Inline Style**: Tuyệt đối không dùng thẻ `<style>` hay thuộc tính `style=""`. Mọi styling đều phải dùng class của Tailwind.
- **Tái sử dụng Component**: Khi nhận thấy một khối UI lặp lại (ví dụ bảng mapping, thẻ CSDL), hãy tìm trong thư mục `components/data-integration/` xem đã có chưa.
- **Accessibility (WCAG 2.1 AA)**: Phải có đủ thuộc tính `aria-label`, `alt` cho image. Hỗ trợ hiển thị tốt trạng thái focus (`focus:ring-2`, `focus:outline-none`).
- **Quy tắc Component**:
  - Khi nhóm menu có > 1 mục con liên quan (ví dụ: API + File cùng thuộc Nguồn dữ liệu ngoài), PHẢI dùng submenu collapsible thay vì để các mục con ngang hàng với mục chính.
  - Submenu phải auto-expand khi user đang ở trang con.
  - Indent sub-items rõ ràng (pl-12) để phân biệt cấp bậc.

## 5. QUY ƯỚC HIỂN THỊ DỮ LIỆU ĐẶC THÙ VIỆT NAM
- **Ngày tháng**: Phải luôn format theo chuẩn `DD/MM/YYYY` hoặc `DD/MM/YYYY HH:mm:ss`. (Tuyệt đối không dùng MM/DD/YYYY).
- **Số lượng**: Sử dụng dấu chấm `.` để phân cách hàng nghìn, dấu phẩy `,` cho phần thập phân (VD: `14.592.000,50`). Sử dụng hàm `formatNumber()` trong `common.js`.
- **Ngôn ngữ**: 100% Tiếng Việt có dấu, văn phong trang trọng, chuẩn mực hành chính.

## 6. QUY TẮC ĐẶT TÊN (NAMING CONVENTION)
- Folder Use Case: Kebab-case, bắt đầu bằng tiền tố UC. Ví dụ: `UC005-thiet-lap-ctdl-tich-hop`.
- Tệp HTML/JS/CSS: Kebab-case. Ví dụ: `mapping-table.html`.
- Biến JavaScript/Hàm: CamelCase. Ví dụ: `loadPartial()`, `formatDate()`.
