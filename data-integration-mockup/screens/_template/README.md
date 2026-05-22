# Hướng dẫn sử dụng Template

Đây là thư mục chuẩn để nhân bản cho mỗi màn hình Use Case mới.

---

## Quy trình tạo UC mới

**Bước 1 — Copy folder:**
```
screens/_template/  →  copy  →  screens/UC{số}-{ten-khong-dau}/
```
Ví dụ: `UC002-ket-noi-sql-server`, `UC015-cau-hinh-mapping`

**Bước 2 — Sửa file `index.html`:**
- Cập nhật thẻ `<title>` thành tên UC
- Sửa breadcrumb (tìm `[Tên UC]` và thay)
- Sửa H1 trang và mô tả
- Điền nội dung vào `<main class="main-content">`

**Bước 3 — Tham khảo design system:**

Trước khi viết code, đọc:
- [`style.md`](../../style.md) — Design tokens, CSS variables, component specs
- [`AGENTS.md`](../../AGENTS.md) — Quy tắc layout, sidebar, accessibility
- Skill phù hợp trong [`.agent/skills/`](../../.agent/skills/)

**Bước 4 — Chạy thử:**

Mở file `.html` trực tiếp trong Chrome/Edge — không cần Live Server vì file self-contained.

---

## Kiến trúc file (self-contained)

Mỗi màn hình UC là **1 file HTML duy nhất** chứa:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <!-- Meta, title, Google Fonts (Plus Jakarta Sans + JetBrains Mono), Lucide CDN -->
  <style>
    /* CSS custom properties (copy từ style.md §1) */
    /* Layout: app-shell, topbar, sidebar, main-content */
    /* Components: buttons, stat-card, chip, status-badge, host-pill, table, pagination, dialog, toast */
  </style>
</head>
<body>
  <div class="app-shell">
    <header class="topbar"><!-- Emblem + Brand + User chip --></header>
    <aside class="sidebar"><!-- Workspace pill + Nav + Footer --></aside>
    <main class="main-content">
      <!-- Breadcrumb -->
      <!-- Page header (H1 + actions) -->
      <!-- Nội dung UC -->
    </main>
  </div>

  <!-- Dialogs (nếu có) -->
  <!-- Toast container -->

  <script>
    /* Mock data array */
    /* State management: filter, sort, paginate */
    /* Event handlers: search, chips, sort headers */
    /* lucide.createIcons() sau render động */
  </script>
</body>
</html>
```

---

## Tham chiếu nhanh

| Cần | Xem |
|---|---|
| Design tokens (màu sắc, shadow) | `style.md` §1 |
| Header spec | `style.md` §4 |
| Sidebar spec | `style.md` §5 |
| Buttons, Cards, Chips | `style.md` §6 |
| Màn hình list CRUD | `.agent/skills/tao-table-quan-ly-csdl.md` |
| Form kết nối CSDL | `.agent/skills/tao-form-ket-noi-csdl.md` |
| Mapping schema | `.agent/skills/tao-mapping-schema.md` |
| Dashboard monitoring | `.agent/skills/tao-monitoring-job.md` |
| **Màn hình mẫu chuẩn** | `screens/UC001-quan-ly-csdl-nguon/index.html` |

---

*Lưu ý: Gọi `if(window.lucide) lucide.createIcons()` sau mỗi lần render HTML động bằng JS (sau `innerHTML =`).*
