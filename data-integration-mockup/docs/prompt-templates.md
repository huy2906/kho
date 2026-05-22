# Mẫu Lời nhắc (Prompt Templates) dành cho BA

Nếu bạn là BA, hãy copy các đoạn prompt sau và dán vào công cụ AI (Gemini, Copilot, Claude) để sinh code tự động, chuẩn xác và tuân theo thiết kế chung.

> **Yêu cầu bắt buộc trong mọi prompt:** AI cần đọc `AGENTS.md` và `style.md` trước khi code.  
> Mỗi màn hình phải là file **self-contained** (HTML + CSS + JS trong 1 file `.html`).  
> Dùng **Vanilla CSS với CSS custom properties** — không Tailwind CDN.

---

## Template 1: Màn hình danh sách quản lý (CRUD List)

> *"Tạo file `index.html` cho màn hình '[Tên màn hình]' (UCxxx) theo pattern UC001 — Quản lý CSDL Nguồn.*
>
> *Yêu cầu:*
> - *Đọc `AGENTS.md` + `style.md` + skill `tao-table-quan-ly-csdl.md` trước khi code.*
> - *Self-contained: HTML + `<style>` Vanilla CSS + `<script>` JS trong 1 file.*
> - *Header navy gradient 84px, sidebar trắng 260px với workspace pill gradient.*
> - *4 stat cards (grid 4 cột) với sparkline SVG.*
> - *Toolbar: search input + status chips (Tất cả / ...) + kind chips (lọc loại).*
> - *Bảng 7 cột: STT / Tên / Loại+Version / Host:Port / Trạng thái / Cập nhật / Thao tác.*
> - *Status badge với pulse animation (ok/warn/err).*
> - *HostPill mono với copy-to-clipboard.*
> - *Row actions (eye/edit/zap/trash) hiện khi hover.*
> - *Pagination, empty state, dialog Thêm mới, keyboard shortcuts (Ctrl+K / N / Esc).*
> - *Mock data 15 bản ghi trong JS, filter/sort/paginate hoàn toàn phía client.*
>
> *Columns cụ thể: [mô tả columns theo màn hình cụ thể]*"

---

## Template 2: Màn hình chi tiết (Detail + Tab navigation)

> *"Tạo file `chi-tiet.html` cho màn hình chi tiết '[Tên đối tượng]' (UCxxx).*
>
> *Yêu cầu:*
> - *Đọc `AGENTS.md` + `style.md` trước khi code.*
> - *Self-contained. Cùng header + sidebar với `index.html`.*
> - *Breadcrumb: Trang chủ / [Module] / [Tên đối tượng]*
> - *Page header: tên đối tượng + status badge + nút Sửa + nút Xoá.*
> - *Tab navigation: [Tổng quan] [Cấu trúc] [Lịch sử] [Cài đặt]*
>   - Tab active: `border-bottom: 2px solid var(--navy-700)`, color navy-700.*
> - *Tab Tổng quan: thông tin chung dạng 2 cột, thông tin kỹ thuật dùng JetBrains Mono.*
> - *Tab Cấu trúc: schema tree (nếu có).*
> - *Tab Lịch sử: timeline / log table.*
>
> *Thông tin cần hiển thị: [mô tả chi tiết theo màn hình cụ thể]*"

---

## Template 3: Form kết nối / cấu hình

> *"Tạo form dialog 'Thêm kết nối [tên]' cho UCxxx.*
>
> *Yêu cầu:*
> - *Đọc skill `tao-form-ket-noi-csdl.md` trước.*
> - *Dialog glassmorphism (`backdrop-filter: blur`) với animation slideUp.*
> - *Form layout 2 cột (`grid-template-columns: 1fr 1fr`).*
> - *Dropdown loại → auto-fill port mặc định.*
> - *SSL toggle (custom checkbox, không native).*
> - *Footer: [Test kết nối] bên trái (margin-right:auto) | [Huỷ] | [Lưu]*
> - *Test kết nối: mock latency ~1.6s → toast success/error.*
> - *Validation: toast error, không dùng browser `alert()`.*
>
> *Các trường: [liệt kê fields theo UC cụ thể]*"

---

## Template 4: Mapping Schema

> *"Tạo màn hình Mapping Schema cho UCxxx.*
>
> *Yêu cầu:*
> - *Đọc skill `tao-mapping-schema.md` trước.*
> - *Layout 2 panel ngang: Schema Tree Nguồn | → | Schema Tree Đích.*
> - *Tree Node 4 level: Database → Schema → Table (active, highlighted) → Column.*
> - *Icon theo node type: database / folder / table-2 / key, hash, type, calendar.*
> - *Kiểu dữ liệu hiển thị bằng pill JetBrains Mono bên phải mỗi column.*
> - *Mapping Table bên dưới: Trường Nguồn | Phép biến đổi (dropdown) | Trường Đích | Xoá.*
> - *Button 'Thêm ánh xạ' + 'Lưu nháp' + 'Lưu & Áp dụng'.*
>
> *Nguồn: [tên CSDL nguồn]. Đích: [tên CSDL đích].*"

---

## Template 5: Dashboard Monitoring

> *"Tạo màn hình Giám sát tiến trình cho UCxxx.*
>
> *Yêu cầu:*
> - *Đọc skill `tao-monitoring-job.md` trước.*
> - *4 stat cards: Tổng job / Đang chạy / Lỗi hôm nay / Thành công hôm nay.*
> - *Grid 3 cột hiển thị Job Cards.*
> - *Mỗi Job Card: progress bar trên đỉnh + tên + loại badge (CDC/Full/Incremental) + route nguồn→đích + status badge + mini chart 7 ngày.*
> - *Job actions: Xem log / Dừng / Chạy lại.*
> - *Log Viewer Modal: terminal nền đen (#0f1117), font JetBrains Mono, màu log theo level (ts:slate / INFO:blue / OK:green / WARN:amber / ERR:red).*
> - *Auto-scroll log xuống dưới khi mở.*
> - *Polling badge 'Live' nhấp nháy khi có job đang chạy.*
>
> *Danh sách jobs mock: [mô tả jobs]*"

---

## Tips dùng AI hiệu quả

1. **Tham chiếu file mẫu**: Luôn nói "tham khảo `screens/UC001-quan-ly-csdl-nguon/index.html` làm chuẩn".
2. **Xác định rõ columns**: Liệt kê tên cột, kiểu dữ liệu, format hiển thị.
3. **Mock data cụ thể**: Cung cấp 3–5 bản ghi mẫu để AI sinh đúng format.
4. **Yêu cầu self-contained**: Nhắc AI không tạo file CSS riêng, không import component ngoài.
5. **Kiểm tra lại**: Sau khi AI sinh code, mở trình duyệt kiểm tra visual và filter/sort.
