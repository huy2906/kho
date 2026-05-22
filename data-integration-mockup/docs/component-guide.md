# Hướng dẫn sử dụng Component (Component Guide)

> **Lưu ý**: Từ thiết kế UC001 (navy gradient), mỗi màn hình là **self-contained** — không import component qua fetch/loadPartial. Tài liệu này mô tả các **pattern component** để AI tái tạo inline trong từng file `.html`.

---

## 1. Layout Shell (BẮT BUỘC trên mọi màn hình)

```html
<div class="app-shell">
  <!-- HEADER: gradient navy, 84px, sticky -->
  <header class="topbar" role="banner">...</header>

  <!-- SIDEBAR: trắng, 260px, sticky top 84px -->
  <aside class="sidebar" aria-label="Điều hướng chính">...</aside>

  <!-- MAIN: full-width, scroll riêng -->
  <main class="main-content" role="main">...</main>
</div>
```

```css
.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 84px 1fr;
  grid-template-areas: "header header" "sidebar main";
  height: 100vh;
}
.topbar        { grid-area: header; }
.sidebar       { grid-area: sidebar; position: sticky; top: 84px; height: calc(100vh - 84px); overflow-y: auto; }
.main-content  { grid-area: main;   overflow-y: auto; padding: 20px 18px; }
```

---

## 2. Header Component

**Xem spec đầy đủ:** `style.md` §4

Cấu trúc: `[Emblem] [Brand title + subtitle]` → `[spacer]` → `[User chip]`

Key points:
- Background: `var(--header-grad)` — `linear-gradient(95deg, #0a1442 0%, #14215c 35%, #1e2d80 70%, #2a4cdf 100%)`
- Emblem: circle 56×56, radial gradient đỏ, ngôi sao SVG vàng `#f5c324`
- Brand accent "QUẢN TRỊ": color `#ffd84a`, text-shadow nhẹ
- User chip: glassmorphism `rgba(255,255,255,0.08)`, border `rgba(255,255,255,0.14)`

---

## 3. Sidebar Component

**Xem spec đầy đủ:** `style.md` §5

Cấu trúc:
1. **Workspace pill** — gradient navy, min-height 54px, pseudo highlight
2. **Nav items (level 1)** — icon 18×18 + label + optional badge/chevron
3. **Nav children (level 2)** — guide line + dot + sub-items
4. **Sidebar footer** — health indicator với green pulse

---

## 4. Stat Card Grid

**Xem spec đầy đủ:** `style.md` §6.2 — `tao-table-quan-ly-csdl.md` §2

Pattern 4 cột: `grid-template-columns: repeat(4, 1fr); gap: 14px`

Mỗi card: icon 34×34 + label + value 28px + delta pill + sparkline SVG 64×22.

---

## 5. StatusBadge

```html
<!-- ok / warn / err -->
<span class="status-badge ok" role="status" aria-label="Đã kết nối">
  <span class="pulse" aria-hidden="true"></span>
  Đã kết nối
</span>
```

**Xem spec:** `style.md` §6.4 (bao gồm pulse animation + prefers-reduced-motion)

---

## 6. DbKindTag

```html
<span class="kind-tag" style="background:#fef2f2;color:#b91c1c;border:1px solid #b91c1c28">
  <span class="kind-swatch" style="background:#ef4444"></span>
  Oracle
  <span class="kind-version">19c</span>
</span>
```

**Màu theo loại:** `style.md` §6.5

---

## 7. HostPill

```html
<span class="host-pill" id="host-1">
  <span class="host-host">10.0.1.10</span>
  <span class="host-colon">:</span>
  <span class="host-port">1521</span>
  <button class="host-copy" onclick="copyHost(event, '10.0.1.10:1521', 1)" aria-label="Sao chép host:port">
    <i data-lucide="copy" style="width:11px;height:11px"></i>
  </button>
</span>
```

Copy → `navigator.clipboard.writeText()` → toast "Đã sao chép" + flash `.copied` (border success-500).

---

## 8. Filter Chip Group

```html
<div class="chips" role="group" aria-label="Lọc theo trạng thái">
  <button class="chip active" onclick="setStatusFilter('all')">Tất cả <span class="chip-count">15</span></button>
  <button class="chip" onclick="setStatusFilter('ok')">
    <span class="chip-dot" style="background:var(--success-500)"></span>
    Đã kết nối <span class="chip-count">9</span>
  </button>
</div>
```

Active chip: gradient navy, text white. **Xem spec:** `style.md` §6.3

---

## 9. Toast Notification System

```js
function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' '+type : ''}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; setTimeout(()=>toast.remove(),300); }, 3000);
}
```

```html
<div class="toast-container" id="toast-container" aria-live="assertive" aria-atomic="true"></div>
```

Types: (none) → ink-900 dark | `success` → #064e3b | `error` → #7f1d1d

---

## 10. Dialog / Modal

```js
function openDialog()  { document.getElementById('add-dialog').classList.add('open'); }
function closeDialog() { document.getElementById('add-dialog').classList.remove('open'); }
function closeDialogOnOverlay(e) { if (e.target.id === 'add-dialog') closeDialog(); }
```

Đóng khi: click overlay | click Huỷ | nhấn `Esc`

**Xem spec CSS:** `style.md` §6.9

---

## 11. Tab Navigation (Trang chi tiết)

```html
<div class="tabs" role="tablist">
  <button class="tab-btn active" role="tab" aria-selected="true" onclick="switchTab(this, 'tab-overview')">Tổng quan</button>
  <button class="tab-btn" role="tab" aria-selected="false" onclick="switchTab(this, 'tab-schema')">Cấu trúc dữ liệu</button>
  <button class="tab-btn" role="tab" aria-selected="false" onclick="switchTab(this, 'tab-history')">Lịch sử</button>
</div>

<div id="tab-overview" class="tab-pane active" role="tabpanel">...</div>
<div id="tab-schema"   class="tab-pane"        role="tabpanel" hidden>...</div>
<div id="tab-history"  class="tab-pane"        role="tabpanel" hidden>...</div>
```

```js
function switchTab(btn, panelId) {
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.querySelectorAll('.tab-pane').forEach(p => p.hidden = true);
  btn.classList.add('active'); btn.setAttribute('aria-selected','true');
  document.getElementById(panelId).hidden = false;
}
```

**CSS:** `style.md` §6.10
