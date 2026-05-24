# Design System & Styling Guidelines

Tài liệu định nghĩa hệ thống thiết kế cho dự án **Mockup Hệ thống Quản trị Tích hợp Dữ liệu**.  
AI Agent **BẮT BUỘC** đọc và tuân thủ tài liệu này trước khi sinh bất kỳ dòng code nào.

> Phiên bản thiết kế hiện tại: **Navy Gradient + Sidebar Trắng** (chốt từ UC001).

---

## 1. Design Tokens (CSS Custom Properties)

Toàn bộ màu sắc, shadow, gradient khai báo dưới dạng CSS variable trong `:root`. **Không hardcode hex** — luôn dùng token.

```css
:root {
  /* Nền trang & surface */
  --bg:            #f3f4fb;
  --surface:       #ffffff;
  --surface-2:     #fafbff;
  --border:        #e6e7ef;
  --border-strong: #d4d6e0;

  /* Chữ (Ink scale) */
  --ink-900: #0b1020;   /* tiêu đề, chữ đen chính */
  --ink-700: #2a2f45;   /* body text */
  --ink-500: #5b6175;   /* subtext, label */
  --ink-400: #8087a0;   /* placeholder, muted */
  --ink-300: #b3b8c8;   /* separator, icon muted */

  /* Brand Navy (primary) */
  --navy-900: #0a1442;
  --navy-800: #14215c;
  --navy-700: #2a4cdf;   /* primary blue, active, focus ring */
  --navy-600: #3b5fee;
  --navy-500: #5b7bf5;
  --navy-100: #dde6ff;
  --navy-50:  #eef3ff;

  /* Semantic */
  --success-50:  #ecfdf5;  --success-500: #10b981;  --success-700: #047857;
  --warning-50:  #fffbeb;  --warning-500: #f59e0b;  --warning-700: #b45309;
  --danger-50:   #fef2f2;  --danger-500:  #ef4444;  --danger-700:  #b91c1c;

  /* Gradients */
  --header-grad:    linear-gradient(95deg, #0a1442 0%, #14215c 35%, #1e2d80 70%, #2a4cdf 100%);
  --workspace-grad: linear-gradient(95deg, #2a4cdf 0%, #3b5fee 100%);

  /* Shadows */
  --shadow-1:    0 1px 2px rgba(15,23,42,0.04);
  --shadow-2:    0 4px 16px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04);
  --shadow-pop:  0 12px 32px rgba(15,23,42,0.12);
  --shadow-navy: 0 8px 22px rgba(19,31,92,0.28);

  /* Border-radius */
  --radius-sm:  6px;
  --radius:     10px;
  --radius-lg:  14px;
  --radius-xl:  18px;
}
```

---

## 2. Typography

| Dùng cho | Font size | Weight | Class gợi ý |
|---|---|---|---|
| Header app title | 19–20px | 800 | `font-extrabold uppercase tracking-[0.04em] text-white` |
| H1 trang | 26px | 700 | `text-2xl font-bold tracking-tight` + `color: var(--ink-900)` |
| Tiêu đề card / label | 12.5px | 600 | `font-semibold` + `color: var(--ink-500)` |
| Body | 13.5–14px | 400–500 | `color: var(--ink-700)` |
| Caption / hint | 12px | 400 | `color: var(--ink-400)` |
| Nav label (uppercase) | 10.5px | 700 | `uppercase tracking-[0.10em]` + `color: var(--ink-400)` |
| Mono (host, IP, timestamp) | 11.5–12px | 400–500 | `font-family: 'JetBrains Mono'` |

**Fonts được dùng:**
- **Plus Jakarta Sans** — font chính toàn bộ UI
- **JetBrains Mono** — chỉ dùng cho giá trị kỹ thuật: host, port, IP, timestamp, version number

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 3. Layout Dimensions

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER — full viewport, gradient navy, height 84px, sticky │
├──────────────┬──────────────────────────────────────────────┤
│  SIDEBAR     │  MAIN CONTENT                                │
│  260px       │  flex-1, không max-width                     │
│  sticky      │  padding: 20px 18px                          │
│  top: 84px   │                                              │
│  h: 100vh    │                                              │
│  - 84px      │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

- **Header height**: 84px
- **Sidebar width**: 260px (≥1100px) / 220px (tablet 760–1099px) / ẩn (<760px)
- **Grid**: `grid-template-columns: 260px 1fr`, `grid-template-areas: "header header" "sidebar main"`
- **Page padding**: `20px 18px` (không dùng max-width — sát sidebar, chạy full)
- **Section gap**: 18–20px giữa page-header → stats → toolbar → table

---

## 4. Header Component

```
Background: linear-gradient(95deg, #0a1442 0%, #14215c 35%, #1e2d80 70%, #2a4cdf 100%)
Height: 84px — sticky top-0, z-30
Box-shadow: 0 6px 20px rgba(10,20,66,0.25)
Grid: [auto] [1fr] [auto]
Padding: 0 28px
```

| Vùng | Nội dung |
|---|---|
| **Trái** | Emblem (56×56px, radial gradient đỏ, ngôi sao vàng `#f5c324`) + Brand title + subtitle |
| **Giữa** | spacer (dành cho context switcher sau này) |
| **Phải** | User chip (glassmorphism, avatar gradient cam-đỏ) |

**Brand title spec:**
- `HỆ THỐNG QUẢN TRỊ TÍCH HỢP DỮ LIỆU` (Chữ "QUẢN TRỊ" hiển thị màu trắng đồng nhất, không bôi vàng/accent theo yêu cầu)
- Font: 19px / 800 / uppercase / tracking 0.04em

**User chip:**
```css
.user-chip {
  padding: 8px 18px; border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
}
.user-chip:hover { background: rgba(255,255,255,0.14); }
```

---

## 5. Sidebar Component

```
Background: #ffffff
Border-right: 1px solid var(--border)
Position: sticky, top: 84px
Height: calc(100vh - 84px)
Padding: 12px 16px
Display: flex column, gap: 4px
```

### 5.1 Workspace Pill (đầu sidebar)

```css
.workspace-pill {
  background: var(--workspace-grad);  /* navy → indigo */
  border-radius: 12px;
  padding: 11px 14px;
  min-height: 54px;
  box-shadow: var(--shadow-navy);
  position: relative; overflow: hidden;
}
/* Highlight highlight góc trên phải */
.workspace-pill::before {
  content: ''; position: absolute;
  top: -20px; right: -10px;
  width: 70px; height: 70px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
}
```

### 5.2 Nav Item (level 1)

| Trạng thái | Style |
|---|---|
| Default | `padding: 10px 12px; border-radius: 10px; color: var(--ink-700); icon: rgba(42,76,223,0.85)` |
| Hover | `background: #f3f4fa; color: var(--navy-700)` |
| Open/Active parent | `background: white; color: var(--navy-800); font-weight: 700; box-shadow: 0 0 0 1.5px var(--navy-700), 0 4px 12px rgba(19,31,92,0.10)` + chevron rotate 180° |

### 5.3 Nav Children (level 2 — sub-items)

```css
/* Guide line bên trái */
.nav-guide { position: absolute; left: 22px; top: 4px; bottom: 4px;
             width: 1.5px; background: var(--border); }

/* Sub-item */
.nav-sub { padding: 8px 14px 8px 38px; font-size: 13px; border-radius: 8px; }
.nav-sub:hover     { background: #f3f4fa; color: var(--navy-700); }
.nav-sub.active    { background: var(--navy-50); color: var(--navy-800); font-weight: 600; }

/* Active dot (trùng guide line) */
.nav-sub.active .nav-sub-dot {
  background: var(--navy-600);
  box-shadow: 0 0 0 3px rgba(59,95,238,0.18);
}
```

### 5.4 Badges

- Default (số): `background: var(--navy-100); color: var(--navy-700)` — rounded-full, 10.5px/700
- Danger: `background: var(--danger-50); color: var(--danger-700)`

### 5.5 Sidebar Footer

```css
.sidebar-foot {
  margin-top: auto;
  padding: 12px 14px; background: var(--surface-2); border-radius: 10px;
}
/* Green pulse dot */
.health-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--success-500);
  box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
}
.health-dot::after {
  content: ''; position: absolute; inset: -3px; border-radius: 50%;
  background: rgba(16,185,129,0.35);
  animation: pulse 2s ease-out infinite;
}
```

---

## 6. UI Components

### 6.1 Buttons

```css
.btn { padding: 9px 14px; border-radius: 10px; font: 600 13px sans; gap: 8px; display: inline-flex; align-items: center; }

/* Outline */
.btn-outline { background: var(--surface); border: 1px solid var(--border); color: var(--ink-700); }
.btn-outline:hover { border-color: var(--border-strong); background: var(--surface-2); }

/* Primary */
.btn-primary { background: var(--workspace-grad); color: white; box-shadow: 0 6px 16px rgba(19,31,92,0.28); }
.btn-primary:hover { filter: brightness(1.08); }
```

### 6.2 Stat Cards (4-column grid)

```css
.stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; box-shadow: var(--shadow-1); }
.stat-card:hover { border-color: var(--border-strong); box-shadow: var(--shadow-2); }
/* Value */
.stat-value { font-size: 28px; font-weight: 700; color: var(--ink-900); letter-spacing: -0.01em; }
/* Delta pill */
.stat-delta { font-size: 11.5px; font-weight: 600; padding: 2px 7px; border-radius: 999px; }
/* Sparkline: SVG 64×22, stroke-width 1.5, opacity 0.7 */
```

Icon container: 34×34px, border-radius 10px. Màu icon/bg theo semantic:
- Total: `background: var(--navy-50); color: var(--navy-700)`
- OK: `background: var(--success-50); color: var(--success-700)`
- Warn: `background: var(--warning-50); color: var(--warning-700)`
- Error: `background: var(--danger-50); color: var(--danger-700)`

### 6.3 Filter Chips (Toolbar)

```css
.chip { padding: 5px 11px; border-radius: 999px; font: 500 12px sans;
        border: 1px solid var(--border); background: var(--surface); color: var(--ink-500); }
.chip:hover { background: var(--surface-2); }
.chip.active { background: var(--workspace-grad); color: white; border-color: transparent;
               box-shadow: 0 2px 8px rgba(19,31,92,0.22); }
```

### 6.4 Status Badge (với pulse animation)

```css
.status-badge { display: inline-flex; align-items: center; gap: 6px;
                padding: 4px 10px; border-radius: 999px; font: 600 12px sans; }
.status-badge.ok   { background: var(--success-50); color: var(--success-700); }
.status-badge.warn { background: var(--warning-50); color: var(--warning-700); }
.status-badge.err  { background: var(--danger-50);  color: var(--danger-700); }

.pulse { width: 7px; height: 7px; border-radius: 50%; position: relative; }
.pulse::after {
  content: ''; position: absolute; inset: -3px; border-radius: 50%; opacity: 0.4;
  animation: pulse-ring 1.8s ease-out infinite;
}
@keyframes pulse-ring {
  0%   { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2.2); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) { .pulse::after { animation: none; } }
```

### 6.5 DbKindTag (loại CSDL)

| Kind | bg | text | swatch |
|---|---|---|---|
| oracle | `#fef2f2` | `#b91c1c` | `#ef4444` |
| sqlserver | `#fef3ec` | `#c2410c` | `#f97316` |
| postgres | `#eff6ff` | `#1d4ed8` | `#3b82f6` |
| mongo | `#ecfdf5` | `#047857` | `#10b981` |
| mysql | `#eef2ff` | `#4338ca` | `#6366f1` |

Cấu trúc: `[swatch 8×8] [label] [version mono, opacity 0.7, border-left]` — padding 4px 10px, border-radius 999px.

### 6.6 HostPill (host:port kỹ thuật)

```css
.host-pill { font-family: 'JetBrains Mono'; font-size: 11.5px;
             background: var(--surface-2); border: 1px solid var(--border);
             border-radius: 7px; padding: 4px 9px; display: inline-flex; gap: 5px; }
/* host: var(--ink-700)  |  colon: var(--ink-300)  |  port: var(--navy-700) semibold */
.host-pill.copied { border-color: var(--success-500); background: var(--success-50); }
```
Copy button dùng `navigator.clipboard.writeText()` → toast "Đã sao chép".

### 6.7 Table

- **Header**: `background: var(--surface-2)`, 11.5px uppercase, `color: var(--ink-400)`, sortable (aria-sort)
- **Body row hover**: `background: #fafbfd`
- **Row actions**: opacity 0, → 1 khi hover row
- **Padding cell**: 14px

### 6.8 Pagination Footer

```css
.pagination { background: var(--surface-2); border-top: 1px solid var(--border); padding: 14px 18px; }
.page-btn.active { background: var(--ink-900); color: white; }
```

### 6.9 Dialogs (Modal)

```css
.dialog-overlay { background: rgba(11,16,32,0.45); backdrop-filter: blur(3px); }
.dialog { background: var(--surface); border-radius: 16px; box-shadow: var(--shadow-pop); }
/* Animation: slideUp 0.22s ease */
```

### 6.10 Tab Navigation (trang chi tiết)

```css
.tabs { display: flex; border-bottom: 1px solid var(--border); }
.tab-btn { padding: 11px 16px; font: 500 13.5px sans; color: var(--ink-500);
           border-bottom: 2px solid transparent; transition: all 0.15s; }
.tab-btn:hover { color: var(--ink-900); }
.tab-btn.active { color: var(--navy-700); border-bottom-color: var(--navy-700); font-weight: 600; }
```

---

## 7. Màu sắc Nhanh (Quick Reference)

```
HEADER GRADIENT
  linear-gradient(95deg, #0a1442 0%, #14215c 35%, #1e2d80 70%, #2a4cdf 100%)

WORKSPACE / ACTIVE / PRIMARY BUTTON GRADIENT
  linear-gradient(95deg, #2a4cdf 0%, #3b5fee 100%)

EMBLEM
  background: radial-gradient(circle at 50% 40%, #e53935, #b71c1c 70%, #7a0f12 100%)
  star color:  #f5c324   |   inner ring: rgba(245,195,36,0.4)

PAGE BG        #f3f4fb
SURFACE        #ffffff
BORDER         #e6e7ef

SEMANTIC
  success-500  #10b981   bg #ecfdf5
  warning-500  #f59e0b   bg #fffbeb
  danger-500   #ef4444   bg #fef2f2
```

---

## 8. Patterns Đặc thù Data Integration

- **Màn hình danh sách (List/CRUD)**: Xem skill `tao-table-quan-ly-csdl.md`.
- **Form kết nối CSDL**: Xem skill `tao-form-ket-noi-csdl.md`.
- **Mapping Schema**: Xem skill `tao-mapping-schema.md`.
- **Dashboard Monitoring**: Xem skill `tao-monitoring-job.md`.

---

## 9. Kiến trúc Thông tin Sidebar

Sidebar tổ chức theo **luồng xử lý nghiệp vụ**, không theo chức năng:

1. **Nguồn dữ liệu** — CSDL nguồn, CSDL tích hợp, Nguồn ngoài, Cấu trúc dữ liệu
2. **Mapping & chuyển đổi** — quy tắc, biến đổi
3. **Tác vụ tích hợp** *(badge số)*
4. **Lập lịch tự động**
5. **Theo dõi tác vụ**
6. **Nhật ký hệ thống**
7. **Cảnh báo & sự cố** *(badge danger)*
8. **Cài đặt hệ thống**

**Nguyên tắc:**
- Schema/cấu trúc của 1 nguồn KHÔNG có menu riêng — nhúng vào tab chi tiết.
- Submenu tự mở khi URL match sub-item.
- Trang chi tiết của CSDL/Job/API PHẢI có cấu trúc tab (tối thiểu: Tổng quan, Cấu trúc/Log, Lịch sử).

---

## 10. Quy ước Dữ liệu Việt Nam

- **Ngày tháng**: `DD/MM/YYYY` hoặc `DD/MM/YYYY HH:mm` — TUYỆT ĐỐI không MM/DD/YYYY.
- **Số**: Dấu `.` phân cách nghìn, dấu `,` thập phân (VD: `14.592.000,50`).
- **Ngôn ngữ**: 100% tiếng Việt có dấu, văn phong hành chính trang trọng.
- **Thời gian tương đối**: `X phút trước`, `X giờ trước`, `X ngày trước`.
