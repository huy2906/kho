---
description: Tạo dashboard monitoring theo dõi tiến trình chạy job ETL/CDC (job list, status card, chart).
---

# Skill: Tạo Dashboard Monitoring Job

Khi thiết kế giao diện Giám sát (Monitoring) luồng dữ liệu, AI cần chú ý:

1. **Card Tổng quan (Overview Metrics)**:
   - Cụm 3-4 blocks hiển thị số lớn (Tổng job, Job lỗi, Đang chạy, Tổng dòng dữ liệu hôm nay).
   - Dùng text màu lớn và icon mờ ở nền block.
2. **Job Status Card (`job-status.html`)**:
   - Thay vì bảng khô khan, hãy dùng giao diện Grid các Card cho mỗi tiến trình.
   - Tên Job + Loại (Full-load / CDC).
   - Thanh tiến trình (Progress Bar) chạy dọc đỉnh card (hoặc trong card).
   - Trạng thái: "Đang chạy (65%)", "Thành công", "Lỗi".
   - Mini chart (dạng cột nhỏ 7 ngày gần nhất) để thể hiện tần suất/lịch sử. Dùng Div có class chiều cao (h-full, h-3/4) làm giả lập chart.
   - Action buttons: Stop (vuông đỏ), Play (tam giác xanh), Xem Log.
3. **Log Viewer Modal/Panel**:
   - Nếu có yêu cầu, tạo một khung nền đen (`bg-slate-900 text-green-400 font-mono`) mô phỏng terminal chạy log.
