---
description: >
  Tạo form dialog/modal cấu hình kết nối CSDL nguồn (Oracle, SQL Server, PostgreSQL, MongoDB, MySQL).
  Dùng trong nút "Thêm kết nối mới" hoặc trang "Sửa cấu hình".
---

# Skill: Tạo Form Kết nối CSDL

Tham khảo implementation chuẩn tại: `screens/UC001-quan-ly-csdl-nguon/index.html` — phần `#add-dialog`.

---

## Cấu trúc Dialog

```html
<div class="dialog-overlay" id="add-dialog" role="dialog" aria-modal="true"
     aria-labelledby="dialog-title" onclick="closeDialogOnOverlay(event)">
  <div class="dialog">

    <!-- Header -->
    <div class="dialog-header">
      <div class="dialog-title" id="dialog-title">Thêm kết nối CSDL mới</div>
      <button class="dialog-close" onclick="closeDialog()" aria-label="Đóng hộp thoại">
        <i data-lucide="x"></i>
      </button>
    </div>

    <!-- Body: form fields -->
    <div class="dialog-body">
      <!-- ... xem bên dưới ... -->
    </div>

    <!-- Footer -->
    <div class="dialog-footer">
      <button class="btn btn-outline" id="btn-test-conn" onclick="testConnection()" style="margin-right:auto">
        <i data-lucide="zap"></i> Test kết nối
      </button>
      <button class="btn btn-outline" onclick="closeDialog()">Huỷ</button>
      <button class="btn btn-primary" onclick="saveSource()">
        <i data-lucide="save"></i> Lưu
      </button>
    </div>

  </div>
</div>
```

---

## Các trường bắt buộc

| Trường | Type | Validation |
|---|---|---|
| Tên CSDL | `text` | min 3, max 120 ký tự |
| Loại CSDL | `select` | enum (oracle/sqlserver/postgres/mongo/mysql) |
| Phiên bản | `text` | VD: 19c, 2022, 15, 7.0 |
| Host / IP | `text` | Hostname hoặc IP |
| Port | `number` | 1–65535, **tự fill** khi đổi loại CSDL |
| Tên đăng nhập | `text` | |
| Mật khẩu | `password` | |
| Tên database | `text` | |
| Đơn vị chủ quản | `select` | |
| SSL | `toggle` (checkbox) | default OFF |
| Ghi chú | `textarea` | optional |

**Port mặc định theo loại:**
```js
const DEFAULT_PORTS = { oracle:1521, sqlserver:1433, postgres:5432, mongo:27017, mysql:3306 };

function onKindChange(kind) {
  if (DEFAULT_PORTS[kind]) document.getElementById('f-port').value = DEFAULT_PORTS[kind];
}
```

---

## Layout form (2 cột)

```html
<div class="dialog-body">
  <!-- Full width: Tên CSDL -->
  <div class="form-row">
    <div class="form-group" style="grid-column:1/-1">
      <label class="form-label" for="f-name">Tên CSDL <span style="color:var(--danger-500)">*</span></label>
      <input type="text" id="f-name" class="form-input" placeholder="VD: CSDL Dân cư Quốc gia">
    </div>
  </div>

  <!-- 2 cột: Loại + Phiên bản -->
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="f-kind">Loại CSDL *</label>
      <select id="f-kind" class="form-select" onchange="onKindChange(this.value)">
        <option value="">— Chọn loại —</option>
        <option value="oracle">Oracle</option>
        <option value="sqlserver">SQL Server</option>
        <option value="postgres">PostgreSQL</option>
        <option value="mongo">MongoDB</option>
        <option value="mysql">MySQL</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="f-version">Phiên bản *</label>
      <input type="text" id="f-version" class="form-input" placeholder="VD: 19c, 2022, 15">
    </div>
  </div>

  <!-- 2 cột: Host + Port -->
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="f-host">Host / IP *</label>
      <input type="text" id="f-host" class="form-input" placeholder="VD: 10.0.1.10">
    </div>
    <div class="form-group">
      <label class="form-label" for="f-port">Port *</label>
      <input type="number" id="f-port" class="form-input" min="1" max="65535">
    </div>
  </div>

  <!-- 2 cột: Username + Password -->
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="f-username">Tên đăng nhập *</label>
      <input type="text" id="f-username" class="form-input">
    </div>
    <div class="form-group">
      <label class="form-label" for="f-password">Mật khẩu *</label>
      <input type="password" id="f-password" class="form-input">
    </div>
  </div>

  <!-- 2 cột: DB name + Đơn vị -->
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="f-dbname">Tên database *</label>
      <input type="text" id="f-dbname" class="form-input" placeholder="VD: ORCL, mydb">
    </div>
    <div class="form-group">
      <label class="form-label" for="f-owner">Đơn vị chủ quản *</label>
      <select id="f-owner" class="form-select">
        <option value="">— Chọn đơn vị —</option>
        <!-- Danh sách đơn vị -->
      </select>
    </div>
  </div>

  <!-- SSL Toggle -->
  <div class="form-group">
    <label class="form-label">Bảo mật SSL</label>
    <div class="toggle-row">
      <label class="toggle">
        <input type="checkbox" id="f-ssl">
        <span class="toggle-slider"></span>
      </label>
      <span style="font-size:13px;color:var(--ink-500)">Kích hoạt kết nối SSL/TLS</span>
    </div>
  </div>

  <!-- Ghi chú -->
  <div class="form-group">
    <label class="form-label" for="f-notes">Ghi chú</label>
    <textarea id="f-notes" class="form-textarea" placeholder="Mô tả hoặc ghi chú..."></textarea>
  </div>
</div>
```

---

## CSS Dialog cần thiết

```css
.dialog-overlay {
  position: fixed; inset: 0; z-index: 50;
  background: rgba(11,16,32,0.45); backdrop-filter: blur(3px);
  display: none; align-items: center; justify-content: center;
}
.dialog-overlay.open { display: flex; }
.dialog {
  background: var(--surface); border-radius: 16px;
  width: min(640px, 95vw); max-height: 90vh; overflow-y: auto;
  box-shadow: var(--shadow-pop);
  animation: slideUp 0.22s ease;
}
@keyframes slideUp {
  from { opacity:0; transform:translateY(20px); }
  to   { opacity:1; transform:translateY(0); }
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-label { font-size: 12.5px; font-weight: 600; color: var(--ink-700); }
.form-input, .form-select, .form-textarea {
  padding: 8px 12px; border: 1px solid var(--border); border-radius: 9px;
  font-size: 13px; font-family: inherit; color: var(--ink-700);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--navy-700);
  box-shadow: 0 0 0 3px rgba(42,76,223,0.12);
}
.form-input.error { border-color: var(--danger-500); }
```

---

## Test kết nối (mock)

```js
function testConnection() {
  const host = document.getElementById('f-host').value;
  const port = document.getElementById('f-port').value;
  if (!host || !port) { showToast('Vui lòng nhập host và port trước', 'error'); return; }

  const btn = document.getElementById('btn-test-conn');
  btn.disabled = true;
  btn.textContent = 'Đang test…';

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="zap"></i> Test kết nối';
    if (window.lucide) lucide.createIcons();
    showToast(`Kết nối thành công ${host}:${port} — 38ms`, 'success');
  }, 1600);
}
```

---

## Lưu ý Validation

- Trường bắt buộc thiếu → `showToast('Vui lòng điền đầy đủ...', 'error')` — KHÔNG dùng browser alert
- Thêm class `.error` vào `.form-input` để highlight viền đỏ
- Sau khi lưu thành công: đóng dialog → re-render table → toast success
