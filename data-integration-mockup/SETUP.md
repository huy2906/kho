# Hướng dẫn Thiết lập và Làm việc dành cho BA

Tài liệu hướng dẫn từng bước để Business Analyst hoặc thành viên mới tạo thêm màn hình mockup cho dự án.

---

## 1. Môi trường (Cài đặt 1 lần)

- **Visual Studio Code** — [code.visualstudio.com](https://code.visualstudio.com/)
- **Live Server Extension** (tác giả Ritwick Dey) — tìm trong tab Extensions của VS Code
- **Git** (tuỳ chọn) — [git-scm.com](https://git-scm.com/)

> **Không cần cài thêm gì khác** — dự án không dùng Node.js, npm, build tool.

---

## 2. Mở dự án

### Cách đơn giản nhất (không cần Live Server):
1. Mở thư mục `data-integration-mockup` bằng VS Code hoặc Windows Explorer.
2. Tìm đến file `.html` muốn xem trong thư mục `screens/`.
3. Click đôi để mở bằng trình duyệt (Chrome / Edge).

Vì mỗi màn hình là **self-contained** (HTML + CSS + JS trong 1 file), không cần server.

### Với Live Server (có hot-reload khi chỉnh sửa):
1. Mở VS Code, mở thư mục `data-integration-mockup`.
2. Click chuột phải vào file `index.html` → **Open with Live Server**.

---

## 3. Quy trình tạo màn hình UC mới

> Ví dụ: Tạo UC004 — Quản lý kết nối API

**Bước 1 — Copy template:**
```
screens/_template/  →  copy →  screens/UC004-quan-ly-ket-noi-api/
```
(Đổi tên folder theo định dạng `UC{số}-{ten-khong-dau}`)

**Bước 2 — Cập nhật `index.html` trong folder mới:**
- Sửa thẻ `<title>` thành tên UC
- Sửa breadcrumb: thay `[Tên UC]` bằng tên thực
- Thêm nội dung vào thẻ `<main class="main-content">`

**Bước 3 — Dùng AI sinh code (khuyến nghị):**

Cung cấp prompt sau cho AI Agent:

> *"Hãy tạo nội dung phần `<main>` cho file này.  
> UC004 — Quản lý kết nối API REST (tương tự UC001 CSDL Nguồn nhưng cho API endpoint).  
> Đọc `AGENTS.md` và `style.md` trước. Dùng skill `tao-table-quan-ly-csdl.md` làm pattern.  
> File phải self-contained (không import component ngoài)."*

**Bước 4 — Kiểm tra:**
- Mở file trong trình duyệt, kiểm tra visual
- Test filter/sort/pagination nếu có bảng dữ liệu
- Kiểm tra dialog "Thêm mới" hoạt động

---

## 4. Nguyên tắc thiết kế (tóm tắt)

| Yếu tố | Quy tắc |
|---|---|
| Header | Gradient navy `#0a1442 → #2a4cdf`, cao 84px, emblem quốc huy đỏ |
| Sidebar | Trắng (#fff), workspace pill gradient, active item ring navy |
| Page bg | `#f3f4fb` |
| Font | Plus Jakarta Sans (UI) + JetBrains Mono (kỹ thuật) |
| Primary color | `#2a4cdf` (navy-700) |
| Buttons | Outline (border) và Primary (gradient navy) |
| Ngày tháng | DD/MM/YYYY — không MM/DD |

Xem chi tiết đầy đủ tại [style.md](./style.md).

---

## 5. Tham chiếu nhanh

| File | Dùng để |
|---|---|
| `style.md` | Toàn bộ design tokens, component specs |
| `AGENTS.md` | Rules cho AI Agent |
| `docs/ucs-list.md` | Danh sách Use Case |
| `docs/prompt-templates.md` | Mẫu prompt cho BA |
| `.agent/skills/` | Pattern mẫu từng loại màn hình |
| `screens/UC001-*/index.html` | **Màn hình mẫu chuẩn** để tham khảo |

---

## 6. Git Flow (nếu dùng Git)

```bash
git checkout -b feature/uc004-quan-ly-api
# Làm xong...
git add .
git commit -m "feat: thêm mockup UC004 quản lý kết nối API"
git push origin feature/uc004-quan-ly-api
# Tạo Merge Request trên GitLab/GitHub
```
