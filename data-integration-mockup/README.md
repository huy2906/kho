# Mockup UI — Hệ thống Quản trị Tích hợp Dữ liệu

Dự án HTML mockup tĩnh cho **Hệ thống Quản trị Tích hợp Dữ liệu** của Cơ quan Nhà nước, bao gồm các chức năng quản lý kết nối CSDL, lập lịch ETL, cấu hình CDC và giám sát luồng dữ liệu.

---

## Tech Stack

| Lớp | Công nghệ |
|---|---|
| Markup | HTML5 thuần (không framework) |
| Styling | **Vanilla CSS** — CSS custom properties (design tokens) trong `<style>` inline |
| Icons | Lucide Icons (CDN) |
| Fonts | Plus Jakarta Sans + JetBrains Mono (Google Fonts) |
| JavaScript | Vanilla JS ES6+ — không jQuery, không framework |

> Mỗi màn hình UC là một file `.html` **self-contained** (HTML + CSS + JS trong 1 file). Không có component loader — không cần Live Server để chạy.

---

## Cách mở dự án

Vì mỗi file là self-contained, bạn **có thể mở trực tiếp** bất kỳ file `.html` nào bằng trình duyệt:

```
Chuột phải → Open with → Chrome / Edge / Firefox
```

Hoặc dùng VS Code **Live Server** để có hot-reload khi chỉnh sửa.

---

## Cấu trúc thư mục

```
data-integration-mockup/
├── AGENTS.md              ← Quy tắc bắt buộc cho AI Agent
├── README.md              ← File này
├── SETUP.md               ← Hướng dẫn tạo UC mới (dành cho BA)
├── style.md               ← Design system (tokens, components, layout) ← ĐỌC TRƯỚC
│
├── .agent/
│   ├── rules/             ← Rules bổ sung (accessibility, form, UI)
│   └── skills/            ← Pattern mẫu cho từng loại màn hình
│       ├── tao-table-quan-ly-csdl.md
│       ├── tao-form-ket-noi-csdl.md
│       ├── tao-mapping-schema.md
│       └── tao-monitoring-job.md
│
├── assets/
│   ├── css/               ← (legacy) custom.css — không dùng cho màn hình mới
│   ├── images/            ← Hình ảnh, logo tĩnh
│   └── js/                ← (legacy) common.js, components.js, mock-data.js
│
├── components/            ← (legacy) HTML partials — màn hình mới KHÔNG dùng
│   ├── layout/            ← header.html, sidebar.html, footer.html
│   └── data-integration/  ← db-source-card.html, connection-form.html...
│
├── docs/
│   ├── ucs-list.md        ← Danh sách toàn bộ Use Case
│   ├── component-guide.md ← Hướng dẫn component (legacy)
│   └── prompt-templates.md← Mẫu prompt cho BA dùng với AI
│
├── screens/
│   ├── _template/         ← Template mẫu để nhân bản UC mới
│   └── UC001-quan-ly-csdl-nguon/
│       ├── index.html     ← ✅ Màn hình danh sách (chuẩn design mới)
│       └── chi-tiet.html  ← ✅ Màn hình chi tiết (tab navigation)
│
└── index.html             ← Trang tổng quan liệt kê tất cả UC
```

---

## Màn hình đã hoàn thành

| Mã | Tên màn hình | File | Trạng thái |
|---|---|---|---|
| UC001 | Quản lý CSDL Nguồn — Danh sách | `screens/UC001-quan-ly-csdl-nguon/index.html` | ✅ Chuẩn mới |
| UC001 | Quản lý CSDL Nguồn — Chi tiết | `screens/UC001-quan-ly-csdl-nguon/chi-tiet.html` | ✅ Chuẩn mới |

---

## Dành cho Business Analyst

Vui lòng đọc [SETUP.md](./SETUP.md) để biết quy trình tạo màn hình UC mới step-by-step.

## Dành cho AI Agent

Đọc [AGENTS.md](./AGENTS.md) và [style.md](./style.md) **trước khi sinh bất kỳ dòng code nào**.
