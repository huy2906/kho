# Accessibility Rules (WCAG 2.1 AA)

Toàn bộ màn hình PHẢI đạt WCAG 2.1 AA.

## Cấu trúc ngữ nghĩa

- Mỗi trang có đúng 1 thẻ `<h1>`
- Thứ tự heading hợp lý: h1 → h2 → h3 (không nhảy cấp)
- Landmark roles: `<header role="banner">`, `<main role="main">`, `<aside aria-label="Điều hướng chính">`
- Breadcrumb: `<nav aria-label="Đường dẫn">`, current page có `aria-current="page"`

## Table

- PHẢI có `<caption class="sr-only">Mô tả bảng</caption>`
- Cột sortable: `aria-sort="ascending|descending|none"` trên `<th>`
- Dữ liệu quan trọng: `<th scope="row">` hoặc `<th scope="col">`

## Interactive Elements

- Icon buttons: PHẢI có `aria-label` tiếng Việt mô tả rõ hành động
  - ✅ `aria-label="Xem chi tiết CSDL Dân cư"`
  - ❌ `aria-label="eye"` hay bỏ trống
- Status badge: `role="status"` + `aria-label` văn bản đầy đủ
- Dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` trỏ tới title
- Chip group: `role="group"`, `aria-label` mô tả nhóm

## Focus Management

- Focus ring: `outline: 2px solid var(--navy-700); outline-offset: 2px` khi `:focus-visible`
- Dialog mở: focus vào field đầu tiên (thường là input đầu tiên)
- Dialog đóng: trả focus về button đã trigger

## Contrast

- Text thường trên nền: ≥ 4.5:1
- Text lớn (≥18px bold): ≥ 3:1
- Header gradient navy với text trắng: đạt chuẩn (dark background)
- Ink-400 `#8087a0` trên surface trắng: chỉ dùng cho placeholder, không dùng cho text thực

## Motion

- TUYỆT ĐỐI tôn trọng `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .pulse::after { animation: none; }
    .health-dot::after { animation: none; }
    /* tắt mọi animation decorative */
  }
  ```
- Transition UI nhẹ (0.15–0.22s) không cần tắt theo prefers-reduced-motion

## Screen Reader

- Icon decorative: `aria-hidden="true"`
- Text ẩn cho screen reader: `class="sr-only"` với `position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0)`
- Live region cho dynamic content: `aria-live="polite"` (thông thường) hoặc `aria-live="assertive"` (toast alert)
- Pagination: `aria-current="page"` cho trang đang active

## Keyboard Navigation

| Phím | Hành động |
|---|---|
| `Tab` | Di chuyển giữa các interactive elements |
| `Enter` / `Space` | Kích hoạt button |
| `Escape` | Đóng dialog/modal |
| `↑↓` | Navigate rows trong bảng |
| `Ctrl+K` | Focus search input |
| `/` | Focus search (khi không ở input) |
| `N` | Mở dialog thêm mới |
