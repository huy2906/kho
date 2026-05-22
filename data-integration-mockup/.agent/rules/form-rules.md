# Form Rules

Quy tắc thiết kế form áp dụng cho mọi dialog và trang form trong dự án.

## Layout

- Form trong dialog: `display: grid; grid-template-columns: 1fr 1fr; gap: 14px`
- Field full-width: `grid-column: 1 / -1`
- Form đứng độc lập (trang riêng): `max-width: 760px; margin: 0 auto`

## Input Fields

```css
.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  font-size: 13px;
  font-family: inherit;
  color: var(--ink-700);
  background: var(--surface);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--navy-700);
  box-shadow: 0 0 0 3px rgba(42,76,223,0.12);
}
.form-input.error { border-color: var(--danger-500); }
```

## Labels

```css
.form-label {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-700);
  margin-bottom: 5px; /* qua gap trong flex-column */
}
```

- Trường bắt buộc: `<span style="color:var(--danger-500)">*</span>` sau tên label
- KHÔNG dùng placeholder thay label

## Select (Dropdown)

- Luôn có option đầu `— Chọn [tên] —` với `value=""`
- Khi đổi loại CSDL → auto-fill port tương ứng
- Dùng `<select class="form-select">` — KHÔNG custom dropdown phức tạp

## Toggle (Boolean)

```html
<label class="toggle" aria-label="Bật/tắt SSL">
  <input type="checkbox" id="f-ssl">
  <span class="toggle-slider"></span>
</label>
```

```css
.toggle { position: relative; width: 38px; height: 22px; flex-shrink: 0; }
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle-slider { position: absolute; inset: 0; border-radius: 999px; background: var(--border); cursor: pointer; transition: background 0.2s; }
.toggle-slider::before { content:''; position:absolute; left:2px; top:2px; width:18px; height:18px; border-radius:50%; background:white; transition:transform 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.2); }
.toggle input:checked + .toggle-slider { background: var(--navy-700); }
.toggle input:checked + .toggle-slider::before { transform: translateX(16px); }
```

## Validation

- **KHÔNG** dùng browser `alert()` hay `confirm()` cho thông báo validation
- Trường lỗi: thêm class `.error` + text đỏ `<span class="field-error">Thông báo lỗi</span>`
- Submit thiếu trường bắt buộc: `showToast('Vui lòng điền đầy đủ các trường bắt buộc', 'error')`
- Trường lỗi format: focus vào trường đó + thêm `.error` border đỏ

## Dialog Footer (thứ tự buttons)

```
[Test kết nối]  ←style="margin-right:auto"→              [Huỷ] [Lưu]
```

- Test: outline, bên trái (margin-right: auto)
- Huỷ: outline
- Lưu/Submit: primary (gradient navy)

## Password Field

```html
<div style="position:relative">
  <input type="password" id="f-password" class="form-input" style="padding-right:36px">
  <button type="button" onclick="togglePasswordVisibility('f-password', this)"
          style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--ink-400)"
          aria-label="Hiện/ẩn mật khẩu">
    <i data-lucide="eye" style="width:15px;height:15px"></i>
  </button>
</div>
```

## Số / Numeric

- Dùng `type="number"` với `min`, `max` hợp lệ
- Port: `min="1" max="65535"`
- Hiển thị số theo định dạng VN: dấu `.` nghìn, dấu `,` thập phân

## Textarea

```css
.form-textarea { min-height: 80px; resize: vertical; }
```
