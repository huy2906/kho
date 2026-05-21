# Danh sách Use Case Dự án Hệ thống Tích hợp Dữ liệu

Bảng dưới đây thống kê 42 Use Case thuộc 2 phân hệ cốt lõi của dự án. 
Vui lòng cập nhật trạng thái "Đã có mẫu" khi thiết kế xong HTML mockup.

| Mã | Tên UC | Phân hệ | Người phụ trách | Trạng thái |
|----|--------|---------|-----------------|------------|
| **Phân hệ I.1: Quản lý cấu trúc dữ liệu (CTDL) của CSDL tích hợp** | | | | |
| UC001 | Lấy CTDL từ CSDL gốc trên Oracle | I.1 | BA_Team | ✅ Đã có mẫu |
| UC002 | Lấy CTDL từ CSDL gốc trên SQL Server, MySQL | I.1 | (chưa giao) | Chưa làm |
| UC003 | Lấy CTDL từ CSDL gốc trên PostgreSQL, MongoDB | I.1 | (chưa giao) | Chưa làm |
| UC004 | Lấy CTDL từ API/Web Service (REST/SOAP) | I.1 | (chưa giao) | Chưa làm |
| UC005 | Thiết lập cấu trúc dữ liệu tích hợp (Map Schema) | I.1 | BA_Team | ✅ Đã có mẫu |
| UC006 | Chỉnh sửa kiểu dữ liệu (Data Type Transformation) | I.1 | (chưa giao) | Chưa làm |
| UC007 | Xóa/Vô hiệu hóa cấu trúc dữ liệu | I.1 | (chưa giao) | Chưa làm |
| UC008 | Kiểm tra (Validate) tính nhất quán của cấu trúc | I.1 | (chưa giao) | Chưa làm |
| **Phân hệ II.1: Tích hợp dữ liệu từ CSDL gốc về Hệ thống** | | | | |
| UC016 | Quản lý luồng Tích hợp (Batch Jobs) | II.1 | (chưa giao) | Chưa làm |
| UC017 | Tích hợp dữ liệu Full-load | II.1 | (chưa giao) | Chưa làm |
| UC018 | Tích hợp dữ liệu Incremental-load | II.1 | (chưa giao) | Chưa làm |
| UC019 | Tích hợp theo tham số vòng lặp (Pagination) | II.1 | (chưa giao) | Chưa làm |
| UC020 | Giao diện kéo thả workflow ETL | II.1 | (chưa giao) | Chưa làm |
| UC021 | Chuyển đổi dữ liệu chuẩn hóa (Cleansing) | II.1 | (chưa giao) | Chưa làm |
| UC022 | Map giá trị từ điển ngữ cảnh (Dictionary Lookup) | II.1 | (chưa giao) | Chưa làm |
| UC023 | Lập lịch chạy tự động (Cron-based Scheduler) | II.1 | (chưa giao) | Chưa làm |
| ... | *(Các UC khác từ 24-31)* | II.1 | (chưa giao) | Chưa làm |
| **Phân hệ II.2: Cập nhật dữ liệu thay đổi (CDC)** | | | | |
| UC032 | Cấu hình nguồn dữ liệu CDC Streaming | II.2 | (chưa giao) | Chưa làm |
| UC033 | Theo dõi tiến trình Real-time | II.2 | (chưa giao) | Chưa làm |
| ... | *(Các UC khác từ 34-39)* | II.2 | (chưa giao) | Chưa làm |
| **Phân hệ II.3: Quản lý dữ liệu phi cấu trúc** | | | | |
| UC040 | Quản trị Object Storage (MinIO/S3) | II.3 | (chưa giao) | Chưa làm |
| ... | *(Các UC khác từ 41-46)* | II.3 | (chưa giao) | Chưa làm |
| UC047 | Tích hợp các tệp dữ liệu trên CSDL MySQL | II.3 | (chưa giao) | Chưa làm |

*Ghi chú: File này cần được BAs cập nhật liên tục mỗi khi một template UC hoàn thiện ở thư mục `screens/` và được đưa lên file `index.html` gốc.*
