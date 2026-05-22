# Danh sách Use Case — Hệ thống Tích hợp Dữ liệu

Thống kê Use Case cốt lõi, tổ chức theo **luồng xử lý nghiệp vụ** và menu sidebar.

---

## Phân hệ I: Quản lý Nguồn dữ liệu

| Mã UC | Tên màn hình | Menu Sidebar | Loại | File | Trạng thái |
|---|---|---|---|---|---|
| UC001 | Quản lý CSDL Nguồn — Danh sách | Quản lý DB > CSDL nguồn | List/CRUD | `UC001/index.html` | ✅ Chuẩn mới |
| UC001b | Quản lý CSDL Nguồn — Chi tiết | CSDL nguồn > Chi tiết | Detail+Tab | `UC001/chi-tiet.html` | ✅ Chuẩn mới |
| UC002 | Chi tiết CSDL Oracle (tab Cấu trúc) | CSDL nguồn > Chi tiết | Tab | — | Chưa làm |
| UC003 | Chi tiết CSDL SQL Server / MySQL | CSDL nguồn > Chi tiết | Tab | — | Chưa làm |
| UC004 | Chi tiết CSDL PostgreSQL | CSDL nguồn > Chi tiết | Tab | — | Chưa làm |
| UC005 | Chi tiết CSDL MongoDB | CSDL nguồn > Chi tiết | Tab | — | Chưa làm |
| UC027 | Quản lý API endpoint | Quản lý DB > Nguồn dữ liệu ngoài | List | — | Chưa làm |
| UC042 | Quản lý tệp dữ liệu | Quản lý DB > Nguồn dữ liệu ngoài | List | — | Chưa làm |

> **Lưu ý**: Schema/cấu trúc nguồn được nhúng vào **Tab "Cấu trúc"** trong trang chi tiết — KHÔNG có menu riêng.

---

## Phân hệ II: Thiết kế Kho Tích hợp

| Mã UC | Tên màn hình | Menu Sidebar | Loại | File | Trạng thái |
|---|---|---|---|---|---|
| UC010 | Quản lý CSDL Tích hợp — Danh sách | Quản lý DB > CSDL tích hợp | List | — | Chưa làm |
| UC011 | CSDL Tích hợp — Chi tiết + Tab Schema | CSDL tích hợp > Chi tiết | Detail+Tab | — | Chưa làm |
| UC015 | Cấu hình Mapping Schema | Mapping & chuyển đổi | Mapping | — | Chưa làm |
| UC016 | Quản lý quy tắc biến đổi | Mapping & chuyển đổi | List | — | Chưa làm |
| UC005 | Thiết lập CTDL tích hợp | Quản lý DB > Cấu trúc dữ liệu | Form+Schema | `UC005/index.html` | ✅ (legacy) |

---

## Phân hệ III: Vận hành Tích hợp

| Mã UC | Tên màn hình | Menu Sidebar | Loại | File | Trạng thái |
|---|---|---|---|---|---|
| UC020 | Quản lý Tác vụ ETL — Danh sách | Tác vụ tích hợp | List | — | Chưa làm |
| UC021 | Tạo Tác vụ ETL mới | Tác vụ tích hợp > Tạo | Form | — | Chưa làm |
| UC025 | Lập lịch chạy Job | Lập lịch tự động | Calendar/Form | — | Chưa làm |
| UC030 | Quản lý CDC Stream | Tác vụ tích hợp | List | — | Chưa làm |

---

## Phân hệ IV: Giám sát & Quản trị

| Mã UC | Tên màn hình | Menu Sidebar | Loại | File | Trạng thái |
|---|---|---|---|---|---|
| UC033 | Dashboard Theo dõi tác vụ | Theo dõi tác vụ | Dashboard | — | Chưa làm |
| UC034 | Xem Log chi tiết Job | Theo dõi tác vụ | Detail | — | Chưa làm |
| UC038 | Nhật ký hệ thống | Nhật ký hệ thống | Log Table | — | Chưa làm |
| UC040 | Quản lý Cảnh báo & Sự cố | Cảnh báo & sự cố | List+Detail | — | Chưa làm |
| UC045 | Cài đặt hệ thống | Cài đặt hệ thống | Settings | — | Chưa làm |

---

## Sidebar navigation mapping

```
Dashboard tổng quan
Quản lý cơ sở dữ liệu [▼]
  ├── CSDL nguồn           ← UC001 (active chuẩn)
  ├── CSDL tích hợp        ← UC010
  ├── Nguồn dữ liệu ngoài  ← UC027, UC042
  └── Cấu trúc dữ liệu     ← UC005 (legacy)
Mapping & chuyển đổi [▼]   ← UC015, UC016
Tác vụ tích hợp        [8] ← UC020, UC021, UC030
Lập lịch tự động           ← UC025
Theo dõi tác vụ            ← UC033, UC034
Nhật ký hệ thống           ← UC038
Cảnh báo & sự cố       [3] ← UC040
Cài đặt hệ thống           ← UC045
```

---

*Cập nhật: 2026-05-23 — Phản ánh thiết kế navy gradient (UC001 v2).*
