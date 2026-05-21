/**
 * assets/js/mock-data.js
 * Chứa toàn bộ dữ liệu mẫu tĩnh (Mock Data) dùng để render giao diện
 */

const MOCK_DATA = {
  // Danh sách CSDL nguồn
  csdlNguon: [
    { id: 1, ten: 'CSDL Dân cư Quốc gia', loai: 'Oracle', version: '19c', host: '10.0.1.10', port: 1521, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-18 14:30:00' },
    { id: 2, ten: 'CSDL Hộ tịch', loai: 'SQL Server', version: '2019', host: '10.0.1.20', port: 1433, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-19 09:15:00' },
    { id: 3, ten: 'CSDL Đất đai', loai: 'PostgreSQL', version: '15', host: '10.0.1.30', port: 5432, trangThai: 'loi-ket-noi', ngayCapNhat: '2026-05-17 16:45:00' },
    { id: 4, ten: 'CSDL Y tế (NoSQL)', loai: 'MongoDB', version: '7.0', host: '10.0.1.40', port: 27017, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-19 11:00:00' },
    { id: 5, ten: 'CSDL Giáo dục', loai: 'MySQL', version: '8.0', host: '10.0.1.50', port: 3306, trangThai: 'cho-cau-hinh', ngayCapNhat: '2026-05-15 10:20:00' },
    { id: 6, ten: 'CSDL Bảo hiểm XH', loai: 'Oracle', version: '19c', host: '10.0.1.60', port: 1521, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-20 08:00:00' },
    { id: 7, ten: 'CSDL Thuế', loai: 'SQL Server', version: '2022', host: '10.0.1.70', port: 1433, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-20 14:00:00' },
    { id: 8, ten: 'CSDL Hải quan', loai: 'Oracle', version: '12c', host: '10.0.1.80', port: 1521, trangThai: 'loi-ket-noi', ngayCapNhat: '2026-05-18 16:30:00' },
    { id: 9, ten: 'CSDL Giao thông', loai: 'PostgreSQL', version: '14', host: '10.0.1.90', port: 5432, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-21 09:10:00' },
    { id: 10, ten: 'CSDL Doanh nghiệp', loai: 'MySQL', version: '5.7', host: '10.0.1.100', port: 3306, trangThai: 'cho-cau-hinh', ngayCapNhat: '2026-05-10 11:45:00' },
    { id: 11, ten: 'CSDL Lao động', loai: 'MongoDB', version: '6.0', host: '10.0.1.110', port: 27017, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-21 10:20:00' },
    { id: 12, ten: 'CSDL Tư pháp', loai: 'SQL Server', version: '2017', host: '10.0.1.120', port: 1433, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-19 15:30:00' },
    { id: 13, ten: 'CSDL Tài nguyên Môi trường', loai: 'PostgreSQL', version: '13', host: '10.0.1.130', port: 5432, trangThai: 'loi-ket-noi', ngayCapNhat: '2026-05-16 08:20:00' },
    { id: 14, ten: 'CSDL Xây dựng', loai: 'Oracle', version: '19c', host: '10.0.1.140', port: 1521, trangThai: 'cho-cau-hinh', ngayCapNhat: '2026-05-12 14:10:00' },
    { id: 15, ten: 'CSDL Nông nghiệp', loai: 'MySQL', version: '8.0', host: '10.0.1.150', port: 3306, trangThai: 'da-ket-noi', ngayCapNhat: '2026-05-20 16:45:00' }
  ],
  
  // Danh sách CSDL tích hợp
  csdlTichHop: [
    { id: 'INT001', ten: 'CSDL Tích hợp Công dân', moTa: 'Tích hợp dân cư + hộ tịch + y tế', nguonGoc: [1, 2, 4], soBang: 24, tongDungLuong: 21474836480, trangThai: 'dang-hoat-dong', lanCapNhat: '2026-05-19 12:00:00' },
    { id: 'INT002', ten: 'CSDL Tích hợp Doanh nghiệp', moTa: 'Tích hợp Thuế + Doanh nghiệp + Hải quan', nguonGoc: [7, 8, 10], soBang: 45, tongDungLuong: 53687091200, trangThai: 'dang-hoat-dong', lanCapNhat: '2026-05-20 08:30:00' },
    { id: 'INT003', ten: 'CSDL Tích hợp Tài nguyên', moTa: 'Tích hợp Đất đai + Môi trường', nguonGoc: [3, 13], soBang: 18, tongDungLuong: 10737418240, trangThai: 'dung', lanCapNhat: '2026-05-15 15:45:00' },
    { id: 'INT004', ten: 'CSDL Tích hợp An sinh XH', moTa: 'Tích hợp Bảo hiểm + Lao động', nguonGoc: [6, 11], soBang: 32, tongDungLuong: 32212254720, trangThai: 'dang-hoat-dong', lanCapNhat: '2026-05-21 07:15:00' },
    { id: 'INT005', ten: 'CSDL Tích hợp Hạ tầng', moTa: 'Tích hợp Giao thông + Xây dựng', nguonGoc: [9, 14], soBang: 15, tongDungLuong: 8589934592, trangThai: 'cho-cau-hinh', lanCapNhat: '2026-05-10 09:00:00' }
  ],
  
  // Danh sách Job ETL / Lịch trình
  jobs: [
    { id: 'JOB001', ten: 'Đồng bộ Dân cư hàng ngày', loai: 'CDC', nguon: 'CSDL Dân cư Quốc gia', dich: 'CSDL Tích hợp Công dân', tanSuat: 'Mỗi ngày 02:00', lanChayCuoi: '2026-05-21 02:00:00', trangThai: 'thanh-cong', thoiGianChay: 245 },
    { id: 'JOB002', ten: 'Full-load Dữ liệu Thuế', loai: 'Full', nguon: 'CSDL Thuế', dich: 'CSDL Tích hợp Doanh nghiệp', tanSuat: 'Mỗi tuần CN 00:00', lanChayCuoi: '2026-05-17 00:00:00', trangThai: 'thanh-cong', thoiGianChay: 3600 },
    { id: 'JOB003', ten: 'Sync Hộ tịch real-time', loai: 'CDC', nguon: 'CSDL Hộ tịch', dich: 'CSDL Tích hợp Công dân', tanSuat: 'Mỗi 5 phút', lanChayCuoi: '2026-05-21 15:15:00', trangThai: 'dang-chay', thoiGianChay: 12 },
    { id: 'JOB004', ten: 'Đồng bộ Hồ sơ Y tế', loai: 'Incremental', nguon: 'CSDL Y tế', dich: 'CSDL Tích hợp Công dân', tanSuat: 'Mỗi giờ', lanChayCuoi: '2026-05-21 15:00:00', trangThai: 'that-bai', thoiGianChay: 45 },
    { id: 'JOB005', ten: 'Đồng bộ Dữ liệu Đất đai', loai: 'Full', nguon: 'CSDL Đất đai', dich: 'CSDL Tích hợp Tài nguyên', tanSuat: 'Mỗi tháng', lanChayCuoi: '2026-05-01 03:00:00', trangThai: 'dung', thoiGianChay: 7200 },
    { id: 'JOB006', ten: 'Đồng bộ Bảo hiểm Xã hội', loai: 'Incremental', nguon: 'CSDL Bảo hiểm XH', dich: 'CSDL Tích hợp An sinh XH', tanSuat: 'Mỗi 12 giờ', lanChayCuoi: '2026-05-21 12:00:00', trangThai: 'thanh-cong', thoiGianChay: 540 },
    { id: 'JOB007', ten: 'Sync Giao thông', loai: 'CDC', nguon: 'CSDL Giao thông', dich: 'CSDL Tích hợp Hạ tầng', tanSuat: 'Mỗi 15 phút', lanChayCuoi: '2026-05-21 15:00:00', trangThai: 'dang-chay', thoiGianChay: 30 },
    { id: 'JOB008', ten: 'Đồng bộ Hải quan', loai: 'Incremental', nguon: 'CSDL Hải quan', dich: 'CSDL Tích hợp Doanh nghiệp', tanSuat: 'Mỗi ngày 22:00', lanChayCuoi: '2026-05-20 22:00:00', trangThai: 'that-bai', thoiGianChay: 120 },
    { id: 'JOB009', ten: 'Full-load Doanh nghiệp', loai: 'Full', nguon: 'CSDL Doanh nghiệp', dich: 'CSDL Tích hợp Doanh nghiệp', tanSuat: 'Mỗi tuần T7 01:00', lanChayCuoi: '2026-05-16 01:00:00', trangThai: 'thanh-cong', thoiGianChay: 4500 },
    { id: 'JOB010', ten: 'Sync Lao động', loai: 'Incremental', nguon: 'CSDL Lao động', dich: 'CSDL Tích hợp An sinh XH', tanSuat: 'Mỗi ngày 23:00', lanChayCuoi: '2026-05-20 23:00:00', trangThai: 'thanh-cong', thoiGianChay: 320 }
  ],
  
  // Danh sách API endpoints
  apis: [
    { id: 'API001', ten: 'API Bảo hiểm xã hội', url: 'https://api.baohiemxh.gov.vn/v1', method: 'GET', auth: 'Bearer Token', trangThai: 'hoat-dong', lanGoi: '2026-05-21 10:30:00' },
    { id: 'API002', ten: 'API Tra cứu Thuế', url: 'https://api.gdt.gov.vn/tracuu', method: 'POST', auth: 'API Key', trangThai: 'hoat-dong', lanGoi: '2026-05-21 14:15:00' },
    { id: 'API003', ten: 'API Dịch vụ Công', url: 'https://dichvucong.gov.vn/api/v2', method: 'GET', auth: 'OAuth2', trangThai: 'loi-ket-noi', lanGoi: '2026-05-21 08:45:00' },
    { id: 'API004', ten: 'API Đăng ký Kinh doanh', url: 'https://dangkykinhdoanh.gov.vn/api', method: 'GET', auth: 'Basic Auth', trangThai: 'hoat-dong', lanGoi: '2026-05-21 15:10:00' },
    { id: 'API005', ten: 'API Hải quan Điện tử', url: 'https://customs.gov.vn/api/v1/sync', method: 'POST', auth: 'Bearer Token', trangThai: 'tam-dung', lanGoi: '2026-05-19 16:20:00' }
  ],
  
  // Tệp dữ liệu phi cấu trúc
  tepDuLieu: [
    { id: 1, ten: 'bao_cao_q1_2026.pdf', loai: 'PDF', kichThuoc: 5242880, ngayTaiLen: '2026-05-10', csdlChua: 'CSDL Tích hợp Công dân' },
    { id: 2, ten: 'thong_ke_thue_2025.xlsx', loai: 'Excel', kichThuoc: 12582912, ngayTaiLen: '2026-05-15', csdlChua: 'CSDL Tích hợp Doanh nghiệp' },
    { id: 3, ten: 'ban_do_quy_hoach_hn.json', loai: 'JSON', kichThuoc: 45088768, ngayTaiLen: '2026-05-12', csdlChua: 'CSDL Tích hợp Tài nguyên' },
    { id: 4, ten: 'danh_sach_benh_vien.csv', loai: 'CSV', kichThuoc: 1048576, ngayTaiLen: '2026-05-18', csdlChua: 'CSDL Tích hợp Công dân' },
    { id: 5, ten: 'ho_so_xay_dung_cau.zip', loai: 'ZIP', kichThuoc: 268435456, ngayTaiLen: '2026-05-20', csdlChua: 'CSDL Tích hợp Hạ tầng' },
    { id: 6, ten: 'anh_chup_ve_tinh_2026.png', loai: 'Image', kichThuoc: 8388608, ngayTaiLen: '2026-05-14', csdlChua: 'CSDL Tích hợp Tài nguyên' },
    { id: 7, ten: 'huong_dan_su_dung_he_thong.docx', loai: 'Word', kichThuoc: 3145728, ngayTaiLen: '2026-05-01', csdlChua: 'Hệ thống' }
  ],
  
  // Cấu trúc dữ liệu (schema)
  schemas: [
    { 
      tenBang: 'cong_dan', 
      moTa: 'Bảng thông tin công dân',
      truong: [
        { ten: 'id', kieu: 'BIGINT', null: false, khoaChinh: true },
        { ten: 'so_cccd', kieu: 'VARCHAR(12)', null: false, khoaChinh: false },
        { ten: 'ho_ten', kieu: 'NVARCHAR(255)', null: false, khoaChinh: false },
        { ten: 'ngay_sinh', kieu: 'DATE', null: false, khoaChinh: false },
        { ten: 'gioi_tinh', kieu: 'SMALLINT', null: true, khoaChinh: false },
        { ten: 'que_quan', kieu: 'NVARCHAR(500)', null: true, khoaChinh: false },
        { ten: 'thuong_tru', kieu: 'NVARCHAR(500)', null: true, khoaChinh: false },
        { ten: 'ngay_cap_cccd', kieu: 'DATE', null: true, khoaChinh: false },
        { ten: 'noi_cap_cccd', kieu: 'NVARCHAR(255)', null: true, khoaChinh: false },
        { ten: 'trang_thai', kieu: 'SMALLINT', null: false, khoaChinh: false }
      ]
    },
    { 
      tenBang: 'doanh_nghiep', 
      moTa: 'Bảng thông tin doanh nghiệp',
      truong: [
        { ten: 'id', kieu: 'BIGINT', null: false, khoaChinh: true },
        { ten: 'ma_so_thue', kieu: 'VARCHAR(20)', null: false, khoaChinh: false },
        { ten: 'ten_doanh_nghiep', kieu: 'NVARCHAR(500)', null: false, khoaChinh: false },
        { ten: 'loai_hinh', kieu: 'VARCHAR(50)', null: true, khoaChinh: false },
        { ten: 'ngay_thanh_lap', kieu: 'DATE', null: true, khoaChinh: false },
        { ten: 'dia_chi_tru_so', kieu: 'NVARCHAR(500)', null: true, khoaChinh: false },
        { ten: 'nguoi_dai_dien', kieu: 'NVARCHAR(255)', null: true, khoaChinh: false },
        { ten: 'von_dieu_le', kieu: 'DECIMAL(18,2)', null: true, khoaChinh: false },
        { ten: 'tinh_trang_hoat_dong', kieu: 'VARCHAR(50)', null: false, khoaChinh: false }
      ]
    }
  ]
};

const STATUS_LABELS = {
  'da-ket-noi':   { label: 'Đã kết nối',     color: 'success' },
  'loi-ket-noi':  { label: 'Lỗi kết nối',    color: 'error' },
  'cho-cau-hinh': { label: 'Chờ cấu hình',   color: 'warning' },
  'dang-hoat-dong': { label: 'Đang hoạt động', color: 'success' },
  'dung':         { label: 'Đã dừng',        color: 'gray' },
  'tam-dung':     { label: 'Tạm dừng',       color: 'warning' },
  'thanh-cong':   { label: 'Thành công',     color: 'success' },
  'that-bai':     { label: 'Thất bại',       color: 'error' },
  'dang-chay':    { label: 'Đang chạy',      color: 'info' },
  'hoat-dong':    { label: 'Hoạt động',      color: 'success' }
};

const DB_TYPE_COLORS = {
  'Oracle':     { bg: '#F80000', text: 'white', icon: 'database' },
  'SQL Server': { bg: '#CC2927', text: 'white', icon: 'server' },
  'MySQL':      { bg: '#00758F', text: 'white', icon: 'database' },
  'PostgreSQL': { bg: '#336791', text: 'white', icon: 'database' },
  'MongoDB':    { bg: '#47A248', text: 'white', icon: 'database' }
};
