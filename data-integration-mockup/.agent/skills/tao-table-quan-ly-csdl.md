---
description: >
  Tạo bảng quản lý danh sách CSDL (List/CRUD) với stat cards, chip filters, 
  sortable table, row actions, pagination và empty state.
  Áp dụng cho mọi màn hình danh sách: CSDL nguồn, API, Job, File...
---

# Skill: Tạo Table Quản lý CSDL (List Screen)

Tham khảo implementation chuẩn tại: `screens/UC001-quan-ly-csdl-nguon/index.html`

---

## Pattern tổng quan

```
[Breadcrumb]
[Page Header: H1 + subtitle | Nút Xuất Excel + Nút Thêm mới]
[Stat Cards: 4 cards — grid 4 cột]
[Table Card]
  ├── [Toolbar: Search input | Status chips | Kind chips]
  ├── [Table: thead sticky + tbody dynamic]
  ├── [Empty State: khi 0 kết quả]
  └── [Pagination Footer]
[Add Dialog: modal glassmorphism]
[Toast notifications]
```

---

## 1. Page Header

```html
<div class="page-header">  <!-- grid 1fr auto, align-end -->
  <div>
    <h1 class="page-title">[Tên màn hình]</h1>
    <p class="page-sub">[Mô tả ngắn chức năng, tối đa 680px]</p>
  </div>
  <div class="page-actions">
    <button class="btn btn-outline" onclick="exportExcel()">
      <i data-lucide="download"></i> Xuất Excel
    </button>
    <button class="btn btn-primary" onclick="openDialog()">
      <i data-lucide="plus"></i> Thêm [tên đối tượng] mới
    </button>
  </div>
</div>
```

---

## 2. Stat Cards (4 cards)

```html
<div class="stats-grid">  <!-- grid-template-columns: repeat(4, 1fr); gap: 14px -->
  <div class="stat-card">
    <div class="stat-card-top">
      <div>
        <div class="stat-label">Tổng số [tên]</div>
        <div class="stat-value" id="val-total">0</div>
      </div>
      <div class="stat-icon" style="background:var(--navy-50)">
        <i data-lucide="database" style="color:var(--navy-700)"></i>
      </div>
    </div>
    <div class="stat-bottom">
      <span class="stat-delta green">+X tháng này</span>
      <!-- Sparkline SVG 64×22 -->
      <svg width="64" height="22" viewBox="0 0 64 22">
        <polyline points="0,18 16,12 32,14 48,8 64,10"
          stroke="var(--navy-600)" stroke-width="1.5" fill="none" opacity="0.7"/>
      </svg>
    </div>
  </div>
  <!-- Repeat cho: Đã kết nối (success), Chờ cấu hình (warning), Lỗi (danger) -->
</div>
```

Delta pill màu: `.green` → success, `.amber` → warning, `.red` → danger.

---

## 3. Toolbar (Search + Chips)

```html
<div class="toolbar">
  <!-- Search -->
  <div class="search-wrap">
    <i data-lucide="search" class="search-icon"></i>
    <input type="search" class="search-input" id="search-input"
           placeholder="Tìm theo tên, host, đơn vị..."
           oninput="onSearchChange(this.value)">
  </div>

  <!-- Status chips -->
  <div class="chips" role="group" aria-label="Lọc theo trạng thái">
    <button class="chip active" onclick="setStatusFilter('all')">
      Tất cả <span class="chip-count" id="chip-count-all">0</span>
    </button>
    <button class="chip" onclick="setStatusFilter('ok')">
      <span class="chip-dot" style="background:var(--success-500)"></span>
      Đã kết nối <span class="chip-count" id="chip-count-ok">0</span>
    </button>
    <!-- warn, err tương tự -->
  </div>

  <div class="chips-spacer"></div>

  <!-- Kind chips (tùy màn hình) -->
  <div class="chips" role="group" aria-label="Lọc theo loại">
    <span class="chip-label">Loại:</span>
    <button class="chip active" onclick="setKindFilter('all')">Mọi loại</button>
    <!-- Oracle, SQL Server, PostgreSQL, MongoDB, MySQL -->
  </div>
</div>
```

---

## 4. Table (7 cột chuẩn)

```html
<table aria-label="Danh sách [tên đối tượng]">
  <caption class="sr-only">Danh sách [tên]</caption>
  <thead>
    <tr>
      <th style="width:48px" class="center" onclick="sortBy('id')" aria-sort="ascending">STT</th>
      <th style="min-width:220px" onclick="sortBy('name')" aria-sort="none">Tên [đối tượng]</th>
      <th onclick="sortBy('kind')" aria-sort="none">Loại / Version</th>
      <th onclick="sortBy('host')" aria-sort="none">Máy chủ (Host:Port)</th>
      <th onclick="sortBy('status')" aria-sort="none">Trạng thái</th>
      <th onclick="sortBy('updatedAt')" aria-sort="none">Cập nhật lúc</th>
      <th class="right" style="width:56px">Thao tác</th>
    </tr>
  </thead>
  <tbody id="table-body">
    <!-- Render bằng JS -->
  </tbody>
</table>
```

**Trong mỗi row:**

| Cột | Component |
|---|---|
| STT | `<span class="stt">01</span>` — JetBrains Mono, ink-400 |
| Tên | `DbIconWrap` (34×34 có short label màu) + tên 600/ink-900 + owner mono |
| Loại | `DbKindTag` (pill swatch + label + version mono) |
| Host | `HostPill` (mono, port navy, copy button) |
| Trạng thái | `StatusBadge` (ok/warn/err với pulse animation) |
| Cập nhật | 2 dòng: relative time + absolute mono |
| Thao tác | 4 action buttons: eye, edit-3, zap, trash-2 — opacity 0→1 khi hover row |

---

## 5. Empty State

```html
<div class="empty-state" id="empty-state" role="status">
  <i data-lucide="database-zap" style="width:48px;height:48px;color:var(--border-strong)"></i>
  <div class="empty-title">Không có [tên đối tượng] phù hợp</div>
  <div class="empty-hint">Thử thay đổi bộ lọc hoặc xoá từ khoá tìm kiếm.</div>
</div>
```
Chỉ hiển thị khi `filteredRows.length === 0`. Toggle class `visible`.

---

## 6. Pagination Footer

```html
<div class="pagination">
  <div>
    <select class="page-size-select" onchange="setPageSize(Number(this.value))">
      <option value="10">10 bản ghi/trang</option>
      <option value="20">20 bản ghi/trang</option>
      <option value="50">50 bản ghi/trang</option>
    </select>
    <p class="page-info">
      Hiển thị <strong id="page-from">1</strong>–<strong id="page-to">10</strong>
      trong tổng <strong id="page-total">0</strong> bản ghi
    </p>
  </div>
  <div class="pager" id="pager"></div>
</div>
```

---

## 7. JS Pattern (Filter + Sort + Paginate)

```js
// State object
let state = { q:'', status:'all', kind:'all', sort:'id', order:'asc', page:1, pageSize:10 };
let filteredRows = [];

function applyFilters() {
  const { q, status, kind, sort, order } = state;
  filteredRows = DATA
    .filter(r => !q || [r.name, r.host, r.owner].some(s => s.toLowerCase().includes(q.toLowerCase())))
    .filter(r => status === 'all' || r.status === status)
    .filter(r => kind   === 'all' || r.kind   === kind)
    .sort((a, b) => {
      const dir = order === 'asc' ? 1 : -1;
      const va = String(a[sort] ?? '').toLowerCase();
      const vb = String(b[sort] ?? '').toLowerCase();
      return va < vb ? -dir : va > vb ? dir : 0;
    });
}

function relTime(iso) {
  const min = Math.round((Date.now() - new Date(iso)) / 60000);
  if (min < 60)   return `${min} phút trước`;
  if (min < 1440) return `${Math.round(min/60)} giờ trước`;
  const d = Math.round(min/1440);
  return d < 30 ? `${d} ngày trước` : iso.slice(0,10);
}

function render() {
  applyFilters();
  renderTable();
  renderPagination();
  updateChipCounts();
  if (window.lucide) lucide.createIcons();
}
```

---

## 8. DbKindTag colors

```js
const KIND_META = {
  oracle:    { label:'Oracle',     short:'OR', bg:'#fef2f2', text:'#b91c1c', swatch:'#ef4444', iconBg:'#ef4444' },
  sqlserver: { label:'SQL Server', short:'MS', bg:'#fef3ec', text:'#c2410c', swatch:'#f97316', iconBg:'#f97316' },
  postgres:  { label:'PostgreSQL', short:'PG', bg:'#eff6ff', text:'#1d4ed8', swatch:'#3b82f6', iconBg:'#3b82f6' },
  mongo:     { label:'MongoDB',    short:'MG', bg:'#ecfdf5', text:'#047857', swatch:'#10b981', iconBg:'#10b981' },
  mysql:     { label:'MySQL',      short:'MY', bg:'#eef2ff', text:'#4338ca', swatch:'#6366f1', iconBg:'#6366f1' },
};
```
