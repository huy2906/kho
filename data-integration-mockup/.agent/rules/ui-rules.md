# UI Rules

Các quy tắc UI bắt buộc áp dụng cho toàn bộ dự án.

## Layout

- App shell: `grid` 2 cột (sidebar 260px + main 1fr), 2 row (header 84px + content)
- Header: `position: sticky; top: 0; z-index: 30` — gradient navy
- Sidebar: `position: sticky; top: 84px; height: calc(100vh - 84px)` — trắng
- Main: `overflow-y: auto; padding: 20px 18px` — **KHÔNG max-width**
- Page background: `var(--bg)` = `#f3f4fb`

## Colors

- Dùng CSS custom properties từ `:root` — KHÔNG hardcode hex trong HTML attribute
- Primary action: `var(--workspace-grad)` = `linear-gradient(95deg, #2a4cdf, #3b5fee)`
- Focus ring: `outline: 2px solid var(--navy-700); outline-offset: 2px`

## Typography

- Font UI: Plus Jakarta Sans — KHÔNG Be Vietnam Pro (đã chuyển đổi)
- Font kỹ thuật (host, IP, timestamp, version): JetBrains Mono
- H1 trang: 26px / 700 / `var(--ink-900)` / `letter-spacing: -0.01em`
- Body: 13.5–14px / `var(--ink-700)`

## Spacing & Radius

- Section gap: 18–20px giữa các block
- Card padding: 16–18px
- Border radius: cards/dialogs 14px, buttons 10px, chips 999px, sub-items 8px

## Components

- Buttons: KHÔNG dùng `<a>` giả button — dùng `<button>` với `onclick`
- Icons: LUÔN có `aria-hidden="true"` trên icon decorative
- Icon buttons: LUÔN có `aria-label` tiếng Việt mô tả action
- Hover state: LUÔN có transition `0.15s` để mượt mà
- Active chip: gradient navy — KHÔNG solid single color

## Responsive

- ≥1100px: sidebar 260px, stats 4 cột
- 760–1099px: sidebar 220px, stats 2 cột  
- <760px: sidebar ẩn, stats 1 cột
