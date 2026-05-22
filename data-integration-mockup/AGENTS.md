# System Prompt Rules for AI Agents

Khi bạn đóng vai trò là một AI Agent (Gemini, Claude, Copilot, Cursor…) tham gia vào dự án **Mockup UI Hệ thống Quản trị Tích hợp Dữ liệu**, bạn **BẮT BUỘC** tuân thủ các quy tắc sau.

---

## 1. Ngữ cảnh dự án

- Hệ thống dành cho **Cơ quan Nhà nước Việt Nam** (gov.vn).
- Nghiệp vụ: Tích hợp dữ liệu ETL/CDC, quản trị CSDL (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB).
- Người dùng: Kỹ sư dữ liệu, Quản trị viên hệ thống, Cán bộ CNTT.
- Giao diện phải **trực quan, kỹ thuật, hiện đại** — không cũ kỹ, không đơn sơ.

---

## 2. Tech Stack BẮT BUỘC

| Lớp | Công nghệ | Ghi chú |
|---|---|---|
| Markup | HTML5 thuần (`.html`) | KHÔNG dùng React/Vue/Next.js |
| Styling | **Vanilla CSS** trong thẻ `<style>` | KHÔNG dùng Tailwind CDN (đã chuyển sang CSS thuần với custom tokens) |
| Icons | **Lucide Icons** (CDN unpkg) | `lucide.createIcons()` sau khi inject HTML động |
| Fonts | **Plus Jakarta Sans** + **JetBrains Mono** (Google Fonts) | Xem `style.md` §2 |
| JavaScript | Vanilla JS ES6+ | KHÔNG jQuery, KHÔNG framework |

> **Lưu ý chuyển đổi**: Dự án đã chuyển từ Tailwind CDN sang **Vanilla CSS với CSS custom properties**. Mọi màu sắc, spacing, shadow đều dùng CSS variables từ `:root` trong `style.md`. Không tạo file CSS riêng — viết `<style>` inline trong từng `.html`.

---

## 3. Quy trình khi nhận Task mới

Mỗi khi nhận yêu cầu "Tạo màn hình cho UCxxx":

1. **Đọc `style.md`** — nắm design tokens, component specs, layout dimensions.
2. **Đọc skill liên quan** trong `.agent/skills/` nếu có pattern phù hợp.
3. **Tạo file self-contained** — toàn bộ HTML + `<style>` + `<script>` trong 1 file `.html`.
4. Đặt file vào `screens/UC{số}-{ten-khong-dau}/index.html`.
5. Dùng **mock data trong JS** thay vì hardcode HTML (dễ filter/sort/paginate).
6. Gọi `lucide.createIcons()` sau mỗi lần render HTML động.

---

## 4. Quy tắc Code

### 4.1 Layout Shell (Grid bắt buộc)

```css
.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 84px 1fr;
  grid-template-areas: "header header" "sidebar main";
  height: 100vh;
}
```

Main content **KHÔNG có max-width** — chạy full phần còn lại của viewport.

### 4.2 Không inline style ad-hoc

- ✅ Dùng CSS class đã khai báo trong `<style>` của file
- ✅ Dùng CSS custom property `var(--navy-700)`
- ❌ Không `style="color: #2a4cdf"` rải rác trong HTML

### 4.3 Accessibility (WCAG 2.1 AA)

- Icon button PHẢI có `aria-label` tiếng Việt
- Status badge PHẢI có `role="status"`
- Table PHẢI có `<caption class="sr-only">` + `aria-sort` trên th sortable
- Focus ring: `outline: 2px solid var(--navy-700); outline-offset: 2px`
- Tôn trọng `prefers-reduced-motion` — không animate khi user tắt animation

### 4.4 Quy tắc Header

- Background: `var(--header-grad)` — gradient navy từ `#0a1442` → `#2a4cdf`
- Height: 84px, sticky, z-index 30
- Luôn có: **Emblem** (quốc huy đỏ ngôi sao vàng) + **Brand title** với accent vàng `#ffd84a` + **User chip** glassmorphism
- **KHÔNG dùng** màu đỏ chính phủ hay màu xanh dương đơn giản cho header

### 4.5 Quy tắc Sidebar

- Background: `#ffffff`, border-right `var(--border)`
- Đầu sidebar: **Workspace pill** gradient navy, min-height 54px
- Nav item active parent: `box-shadow: 0 0 0 1.5px var(--navy-700)` + chevron xoay 180°
- Sub-item active: `background: var(--navy-50)`, dot `var(--navy-600)`, guide line `var(--border)`
- Cuối sidebar: **Health indicator** (green pulse dot + uptime text)
- **KHÔNG** dùng pill tròn `rounded-full` cho nav items — dùng `border-radius: 10px`

### 4.6 Quy tắc Component

**DETAIL PAGES:**
- Trang chi tiết của CSDL, API, Job PHẢI có Tab navigation
- Tab đầu: "Tổng quan", tab "Cấu trúc" nếu có schema, tab "Lịch sử" nếu cần
- Tab active: `border-bottom: 2px solid var(--navy-700)`

**SIDEBAR STRUCTURE (thứ tự):**
1. Dashboard tổng quan
2. Quản lý cơ sở dữ liệu *(nhóm collapsible)*
   - CSDL nguồn, CSDL tích hợp, Nguồn dữ liệu ngoài, Cấu trúc dữ liệu
3. Mapping & chuyển đổi *(nhóm collapsible)*
4. Tác vụ tích hợp *(badge số)*
5. Lập lịch tự động
6. Theo dõi tác vụ
7. Nhật ký hệ thống
8. Cảnh báo & sự cố *(badge danger)*
9. Cài đặt hệ thống

---

## 5. Quy ước Dữ liệu Việt Nam

- **Ngày tháng**: `DD/MM/YYYY` hoặc `DD/MM/YYYY HH:mm` — TUYỆT ĐỐI không MM/DD/YYYY.
- **Số**: Dấu `.` phân cách nghìn, dấu `,` thập phân (VD: `14.592.000,50`).
- **Ngôn ngữ**: 100% tiếng Việt có dấu, văn phong hành chính trang trọng.
- **Thời gian tương đối**: render dạng `X phút trước`, `X giờ trước`, `X ngày trước`.

---

## 6. Quy ước Đặt tên

| Loại | Convention | Ví dụ |
|---|---|---|
| Folder UC | Kebab-case, prefix UC | `UC005-thiet-lap-ctdl-tich-hop` |
| File HTML/JS | Kebab-case | `chi-tiet.html`, `mock-data.js` |
| CSS class | Kebab-case | `.host-pill`, `.status-badge` |
| JS function | camelCase | `renderTable()`, `applyFilters()` |
| JS variable | camelCase | `filteredRows`, `currentPage` |

---

## 7. Keyboard Shortcuts (chuẩn cho mọi màn hình list)

| Phím | Hành động |
|---|---|
| `Ctrl+K` / `⌘K` | Focus search input |
| `/` | Focus toolbar search (khi không ở trong input) |
| `N` | Mở dialog "Thêm mới" |
| `Esc` | Đóng dialog / clear search |
| `↑↓` | Navigate rows trong bảng |
| `Enter` | Mở chi tiết row đang focus |
