---
description: >
  Tạo giao diện mapping schema (ánh xạ cấu trúc dữ liệu) gồm 2 schema tree 
  (nguồn & đích) và bảng mapping bên dưới.
---

# Skill: Tạo giao diện Mapping Schema

---

## Pattern tổng quan

```
[Page Header: H1 + subtitle | Nút Lưu nháp + Nút Lưu & Áp dụng]
┌────────────────────────────────────────────────────┐
│  [Schema Tree Nguồn]   [→]   [Schema Tree Đích]    │  ← 2 cột, resizable
└────────────────────────────────────────────────────┘
[Mapping Table: Trường Nguồn | Transform Rule | Trường Đích | Xoá]
[Add Mapping Row Button]
```

---

## 1. Schema Tree

```html
<div class="schema-panel">
  <div class="schema-panel-header">
    <div class="schema-panel-title">
      <i data-lucide="database" style="color:var(--navy-700)"></i>
      CSDL Dân cư Quốc gia
    </div>
    <select class="form-select" style="width:auto;font-size:12px">
      <option>cong_dan</option>
      <option>ho_khau</option>
    </select>
  </div>

  <div class="schema-tree">
    <!-- Level 0: Database -->
    <div class="tree-node db">
      <i data-lucide="database"></i>
      <span>ORCL</span>
    </div>

    <!-- Level 1: Schema -->
    <div class="tree-node schema" style="padding-left:20px">
      <i data-lucide="folder"></i>
      <span>DANCU</span>
    </div>

    <!-- Level 2: Table (active/selected) -->
    <div class="tree-node table active" style="padding-left:36px">
      <i data-lucide="table-2"></i>
      <span>cong_dan</span>
      <span class="tree-badge">1.2M rows</span>
    </div>

    <!-- Level 3: Columns -->
    <div class="tree-node column" style="padding-left:52px">
      <i data-lucide="key"></i>        <!-- PK -->
      <span>id</span>
      <span class="tree-type">BIGINT</span>
    </div>
    <div class="tree-node column" style="padding-left:52px">
      <i data-lucide="hash"></i>
      <span>so_cccd</span>
      <span class="tree-type">VARCHAR(12)</span>
    </div>
    <div class="tree-node column" style="padding-left:52px">
      <i data-lucide="type"></i>
      <span>ho_ten</span>
      <span class="tree-type">NVARCHAR(255)</span>
    </div>
    <div class="tree-node column" style="padding-left:52px">
      <i data-lucide="calendar"></i>
      <span>ngay_sinh</span>
      <span class="tree-type">DATE</span>
    </div>
  </div>
</div>
```

**CSS tree:**
```css
.schema-panel {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden; flex: 1;
}
.schema-panel-header {
  background: var(--surface-2); padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.schema-panel-title { display: flex; align-items: center; gap: 8px;
                       font-weight: 700; font-size: 13.5px; color: var(--ink-900); }
.schema-tree { padding: 8px 4px; overflow-y: auto; max-height: 360px; }

.tree-node {
  display: flex; align-items: center; gap: 7px;
  padding: 6px 12px; border-radius: 7px;
  font-size: 13px; color: var(--ink-700);
  cursor: pointer; transition: background 0.12s;
}
.tree-node:hover { background: var(--surface-2); }
.tree-node.active { background: var(--navy-50); color: var(--navy-800); font-weight: 600; }
.tree-node i { flex-shrink: 0; width: 14px; height: 14px; color: var(--ink-400); }
.tree-node.db     i { color: var(--navy-700); }
.tree-node.table  i { color: var(--navy-600); }
.tree-node.column i { color: var(--ink-400); }

.tree-type { font-family: 'JetBrains Mono'; font-size: 11px;
             background: var(--border); color: var(--ink-500);
             padding: 1px 5px; border-radius: 4px; margin-left: auto; }
.tree-badge { font-size: 11px; color: var(--ink-400); margin-left: auto; }
```

---

## 2. Layout 2 cột (nguồn ↔ đích)

```html
<div class="mapping-trees">  <!-- display:flex; gap:12px; align-items:stretch -->

  <!-- Schema nguồn -->
  <div class="schema-panel" id="src-panel">
    <!-- ... xem trên ... -->
  </div>

  <!-- Nút map ở giữa -->
  <div class="mapping-arrow" aria-hidden="true">
    <i data-lucide="arrow-right" style="width:20px;height:20px;color:var(--navy-700)"></i>
  </div>

  <!-- Schema đích -->
  <div class="schema-panel" id="dst-panel" style="flex:1.2">
    <!-- ... -->
  </div>

</div>
```

```css
.mapping-arrow {
  display: flex; align-items: center; justify-content: center;
  padding: 0 8px; flex-shrink: 0;
}
```

---

## 3. Mapping Table

```html
<div class="table-card" style="margin-top:16px">
  <div class="toolbar" style="justify-content:space-between">
    <div style="font-weight:700;font-size:14px;color:var(--ink-900)">Quy tắc Mapping</div>
    <button class="btn btn-outline" onclick="addMappingRow()">
      <i data-lucide="plus"></i> Thêm ánh xạ
    </button>
  </div>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Trường Nguồn</th>
          <th style="width:200px">Phép biến đổi</th>
          <th>Trường Đích</th>
          <th style="width:36px"></th>
        </tr>
      </thead>
      <tbody id="mapping-body">
        <tr>
          <td>
            <!-- Dropdown chọn field nguồn -->
            <select class="form-select">
              <option>ho_ten</option>
              <option>so_cccd</option>
            </select>
          </td>
          <td>
            <!-- Transform rule -->
            <select class="form-select">
              <option>DIRECT (Trực tiếp)</option>
              <option>UPPER() — Viết hoa</option>
              <option>TRIM() — Xoá khoảng trắng</option>
              <option>DATE FORMAT — Đổi định dạng ngày</option>
              <option>CUSTOM SQL</option>
            </select>
          </td>
          <td>
            <!-- Dropdown chọn field đích -->
            <select class="form-select">
              <option>full_name</option>
              <option>citizen_id</option>
            </select>
          </td>
          <td>
            <button class="action-btn danger" onclick="removeMappingRow(this)" title="Xoá">
              <i data-lucide="trash-2" style="width:14px;height:14px"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

## 4. Action Buttons (cuối trang)

```html
<div class="page-actions" style="justify-content:flex-end;margin-top:16px">
  <button class="btn btn-outline">
    <i data-lucide="save"></i> Lưu nháp
  </button>
  <button class="btn btn-primary" onclick="applyMapping()">
    <i data-lucide="check"></i> Lưu &amp; Áp dụng
  </button>
</div>
```

---

## 5. Lưu ý

- Khi chọn cột ở schema tree → auto thêm row vào mapping table (drag-drop giả lập bằng click)
- Màu header cột nguồn: dùng `var(--warning-50)` làm nền nhẹ để phân biệt với cột đích `var(--navy-50)`
- Trường Custom SQL: khi chọn → hiện thêm `<textarea>` để nhập SQL expression
- Validate: mỗi field đích chỉ được map 1 lần (tô đỏ nếu trùng)
