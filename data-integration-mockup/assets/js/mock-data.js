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
  
  // Nguồn dữ liệu ngoài
  nguonNgoai: {
    api: [
      { id: 'API001', ten: 'API Bảo hiểm xã hội', url: 'https://api.baohiemxh.gov.vn/v1', method: 'GET', auth: 'Bearer Token', trangThai: 'hoat-dong', lanGoi: '2026-05-21 10:30:00' },
      { id: 'API002', ten: 'API Tra cứu Thuế', url: 'https://api.gdt.gov.vn/tracuu', method: 'POST', auth: 'API Key', trangThai: 'hoat-dong', lanGoi: '2026-05-21 14:15:00' },
      { id: 'API003', ten: 'API Dịch vụ Công', url: 'https://dichvucong.gov.vn/api/v2', method: 'GET', auth: 'OAuth2', trangThai: 'loi-ket-noi', lanGoi: '2026-05-21 08:45:00' },
      { id: 'API004', ten: 'API Đăng ký Kinh doanh', url: 'https://dangkykinhdoanh.gov.vn/api', method: 'GET', auth: 'Basic Auth', trangThai: 'hoat-dong', lanGoi: '2026-05-21 15:10:00' },
      { id: 'API005', ten: 'API Hải quan Điện tử', url: 'https://customs.gov.vn/api/v1/sync', method: 'POST', auth: 'Bearer Token', trangThai: 'tam-dung', lanGoi: '2026-05-19 16:20:00' }
    ],
    tep: [
      { id: 1, ten: 'bao_cao_q1_2026.pdf', loai: 'PDF', kichThuoc: 5242880, ngayTaiLen: '2026-05-10', csdlChua: 'CSDL Tích hợp Công dân' },
      { id: 2, ten: 'thong_ke_thue_2025.xlsx', loai: 'Excel', kichThuoc: 12582912, ngayTaiLen: '2026-05-15', csdlChua: 'CSDL Tích hợp Doanh nghiệp' },
      { id: 3, ten: 'ban_do_quy_hoach_hn.json', loai: 'JSON', kichThuoc: 45088768, ngayTaiLen: '2026-05-12', csdlChua: 'CSDL Tích hợp Tài nguyên' },
      { id: 4, ten: 'danh_sach_benh_vien.csv', loai: 'CSV', kichThuoc: 1048576, ngayTaiLen: '2026-05-18', csdlChua: 'CSDL Tích hợp Công dân' },
      { id: 5, ten: 'ho_so_xay_dung_cau.zip', loai: 'ZIP', kichThuoc: 268435456, ngayTaiLen: '2026-05-20', csdlChua: 'CSDL Tích hợp Hạ tầng' },
      { id: 6, ten: 'anh_chup_ve_tinh_2026.png', loai: 'Image', kichThuoc: 8388608, ngayTaiLen: '2026-05-14', csdlChua: 'CSDL Tích hợp Tài nguyên' },
      { id: 7, ten: 'huong_dan_su_dung_he_thong.docx', loai: 'Word', kichThuoc: 3145728, ngayTaiLen: '2026-05-01', csdlChua: 'Hệ thống' }
    ]
  },
  
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

// Backward compatibility alias
MOCK_DATA.apis = MOCK_DATA.nguonNgoai.api;
MOCK_DATA.tepDuLieu = MOCK_DATA.nguonNgoai.tep;

// Dữ liệu tệp tin nâng cao phục vụ UC042
MOCK_DATA.tepUC042 = [
  {
    id: 1,
    ten: "danh_sach_doanh_nghiep_2026.xlsx",
    dinhDang: "Excel",
    dungLuong: 16234588, // 15.48 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/danh_sach_doanh_nghiep_2026.xlsx",
    donViCungCap: "Bộ Kế hoạch và Đầu tư",
    nguoiNap: "Nguyễn Văn A",
    trangThai: "da-xu-ly",
    soDong: 145920,
    ngayCapNhat: "2026-05-24 10:15:00",
    tanSuat: "Hàng tuần",
    ghiChu: "Danh sách doanh nghiệp đăng ký thành lập mới toàn quốc tính đến tháng 5/2026."
  },
  {
    id: 2,
    ten: "dan_so_quan_huyen_2025.csv",
    dinhDang: "CSV",
    dungLuong: 2149580, // 2.05 MB
    phuongThucNap: "SFTP",
    duongDanNguon: "sftp://10.0.1.15:22/incoming/dan_so_2025.csv",
    donViCungCap: "Cục Dân số",
    nguoiNap: "Hệ thống tự động",
    trangThai: "da-xu-ly",
    soDong: 48500,
    ngayCapNhat: "2026-05-24 02:00:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Đồng bộ dân số chi tiết các quận, huyện, thị xã trên cả nước."
  },
  {
    id: 3,
    ten: "ho_so_suc_khoe_quang_ninh.json",
    dinhDang: "JSON",
    dungLuong: 47290777, // 45.10 MB
    phuongThucNap: "FTP",
    duongDanNguon: "ftp://192.168.10.50/health/hssk_qn.json",
    donViCungCap: "Bộ Y tế",
    nguoiNap: "Hệ thống tự động",
    trangThai: "loi-dinh-dang",
    soDong: 0,
    ngayCapNhat: "2026-05-23 18:30:00",
    tanSuat: "Hàng tháng",
    ghiChu: "Parser Error: Thiếu ký tự đóng ngoặc vuông ']' ở cuối file JSON."
  },
  {
    id: 4,
    ten: "thong_ke_dia_chinh_ha_noi.xml",
    dinhDang: "XML",
    dungLuong: 13191168, // 12.58 MB
    phuongThucNap: "Thư mục theo dõi",
    duongDanNguon: "//10.0.20.100/shared/diachinh/hn_land_2026.xml",
    donViCungCap: "Bộ Tài nguyên và Môi trường",
    nguoiNap: "Hệ thống tự động",
    trangThai: "dang-xu-ly",
    soDong: 92400,
    ngayCapNhat: "2026-05-24 21:05:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Đang tiến hành ánh xạ các thẻ địa chính vào bảng tích hợp trung tâm."
  },
  {
    id: 5,
    ten: "bao_cao_tai_chinh_q1.pdf",
    dinhDang: "PDF",
    dungLuong: 8788000, // 8.38 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Desktop/BCTC_Q1_2026.pdf",
    donViCungCap: "Bộ Tài chính",
    nguoiNap: "Trần Thị B",
    trangThai: "cho-xu-ly",
    soDong: 0,
    ngayCapNhat: "2026-05-22 14:00:00",
    tanSuat: "Một lần",
    ghiChu: "Báo cáo thuyết minh tài chính Quý I năm 2026."
  },
  {
    id: 6,
    ten: "danhmuc_quocgia_songngoi.txt",
    dinhDang: "TXT",
    dungLuong: 350208, // 342 KB
    phuongThucNap: "FTP",
    duongDanNguon: "ftp://ftp.songngoi.gov.vn/files/danhmuc.txt",
    donViCungCap: "Bộ Tài nguyên và Môi trường",
    nguoiNap: "Hệ thống tự động",
    trangThai: "da-xu-ly",
    soDong: 1240,
    ngayCapNhat: "2026-05-24 06:00:00",
    tanSuat: "Hàng tuần",
    ghiChu: "Danh mục chuẩn hóa hệ thống sông ngòi và lưu vực sông cấp quốc gia."
  },
  {
    id: 7,
    ten: "danh_sach_benh_vien_2026.xlsx",
    dinhDang: "Excel",
    dungLuong: 4320256, // 4.12 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/danh_sach_benh_vien_2026.xlsx",
    donViCungCap: "Bộ Y tế",
    nguoiNap: "Nguyễn Văn A",
    trangThai: "da-xu-ly",
    soDong: 23500,
    ngayCapNhat: "2026-05-23 09:15:00",
    tanSuat: "Hàng tháng",
    ghiChu: "Danh sách và địa chỉ liên lạc các bệnh viện, phòng khám trên toàn quốc."
  },
  {
    id: 8,
    ten: "giao_dich_hai_quan_may.csv",
    dinhDang: "CSV",
    dungLuong: 89547161, // 85.40 MB
    phuongThucNap: "SFTP",
    duongDanNguon: "sftp://10.0.2.80/export/customs_may.csv",
    donViCungCap: "Tổng cục Hải quan",
    nguoiNap: "Hệ thống tự động",
    trangThai: "cho-xu-ly",
    soDong: 0,
    ngayCapNhat: "2026-05-24 16:45:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Danh sách tờ khai xuất nhập khẩu phát sinh trong tháng 5/2026."
  },
  {
    id: 9,
    ten: "chi_tieu_ngan_sach_tinh.json",
    dinhDang: "JSON",
    dungLuong: 19136512, // 18.25 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/budget_details.json",
    donViCungCap: "Bộ Tài chính",
    nguoiNap: "Trần Thị B",
    trangThai: "da-xu-ly",
    soDong: 54200,
    ngayCapNhat: "2026-05-21 11:30:00",
    tanSuat: "Một lần",
    ghiChu: "Số liệu chi tiết phân bổ và thực hiện chi ngân sách nhà nước cấp tỉnh."
  },
  {
    id: 10,
    ten: "du_lieu_sinh_vien_2025.xml",
    dinhDang: "XML",
    dungLuong: 3984588, // 3.80 MB
    phuongThucNap: "Thư mục theo dõi",
    duongDanNguon: "//10.0.30.22/watch_folder/sinhvien_2025.xml",
    donViCungCap: "Bộ Giáo dục và Đào tạo",
    nguoiNap: "Hệ thống tự động",
    trangThai: "loi-dinh-dang",
    soDong: 0,
    ngayCapNhat: "2026-05-22 08:20:00",
    tanSuat: "Hàng tuần",
    ghiChu: "Parser Error: Thẻ đóng </sinhvien> không đúng cấu trúc (thiếu thẻ mở tương ứng)."
  },
  {
    id: 11,
    ten: "danh_sach_truong_hoc_toanquoc.xlsx",
    dinhDang: "Excel",
    dungLuong: 15204352, // 14.50 MB
    phuongThucNap: "SFTP",
    duongDanNguon: "sftp://10.0.3.50/edu/truong_hoc.xlsx",
    donViCungCap: "Bộ Giáo dục và Đào tạo",
    nguoiNap: "Hệ thống tự động",
    trangThai: "dang-xu-ly",
    soDong: 64200,
    ngayCapNhat: "2026-05-24 20:30:00",
    tanSuat: "Hàng tháng",
    ghiChu: "Đồng bộ thông tin các trường mầm non, tiểu học, trung học cơ sở và THPT cả nước."
  },
  {
    id: 12,
    ten: "ho_so_lao_dong_2026.csv",
    dinhDang: "CSV",
    dungLuong: 5452595, // 5.20 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/laodong_2026.csv",
    donViCungCap: "BHXH Việt Nam",
    nguoiNap: "Nguyễn Văn A",
    trangThai: "da-xu-ly",
    soDong: 31200,
    ngayCapNhat: "2026-05-24 14:10:00",
    tanSuat: "Hàng tháng",
    ghiChu: "Danh sách lao động đóng bảo hiểm xã hội bắt buộc tại các khu công nghiệp."
  },
  {
    id: 13,
    ten: "baocao_moitruong_quy1.pdf",
    dinhDang: "PDF",
    dungLuong: 13054156, // 12.45 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/baocao_moitruong.pdf",
    donViCungCap: "Bộ Tài nguyên và Môi trường",
    nguoiNap: "Trần Thị B",
    trangThai: "da-xu-ly",
    soDong: 0,
    ngayCapNhat: "2026-05-23 15:45:00",
    tanSuat: "Một lần",
    ghiChu: "Báo cáo đánh giá tác động môi trường các dự án năng lượng tái tạo Quý I năm 2026."
  },
  {
    id: 14,
    ten: "danhsach_ho_ngheo_lamdong.csv",
    dinhDang: "CSV",
    dungLuong: 8808038, // 8.40 MB
    phuongThucNap: "SFTP",
    duongDanNguon: "sftp://10.0.1.15:22/incoming/lamdong_hongheo.csv",
    donViCungCap: "BHXH Việt Nam",
    nguoiNap: "Hệ thống tự động",
    trangThai: "da-xu-ly",
    soDong: 15400,
    ngayCapNhat: "2026-05-24 05:00:00",
    tanSuat: "Hàng tuần",
    ghiChu: "Danh sách hộ nghèo và hộ cận nghèo nhận hỗ trợ bảo hiểm y tế tại tỉnh Lâm Đồng."
  },
  {
    id: 15,
    ten: "hoso_dangky_kinhdoanh.json",
    dinhDang: "JSON",
    dungLuong: 5368709, // 5.12 MB
    phuongThucNap: "FTP",
    duongDanNguon: "ftp://ftp.business.gov.vn/incoming/reg_may24.json",
    donViCungCap: "Bộ Kế hoạch và Đầu tư",
    nguoiNap: "Hệ thống tự động",
    trangThai: "cho-xu-ly",
    soDong: 0,
    ngayCapNhat: "2026-05-24 18:30:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Hồ sơ đăng ký kinh doanh doanh nghiệp FDI mới thành lập trong ngày."
  },
  {
    id: 16,
    ten: "thongtin_baohiem_tphcm.xml",
    dinhDang: "XML",
    dungLuong: 29884416, // 28.50 MB
    phuongThucNap: "Thư mục theo dõi",
    duongDanNguon: "//10.0.40.85/shared/bhyt_hcm_2026.xml",
    donViCungCap: "BHXH Việt Nam",
    nguoiNap: "Hệ thống tự động",
    trangThai: "dang-xu-ly",
    soDong: 114500,
    ngayCapNhat: "2026-05-24 20:55:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Đồng bộ hồ sơ cấp mới và gia hạn thẻ bảo hiểm y tế tại Thành phố Hồ Chí Minh."
  },
  {
    id: 17,
    ten: "danhmuc_sanpham_xuatkhau.txt",
    dinhDang: "TXT",
    dungLuong: 524288, // 512 KB
    phuongThucNap: "FTP",
    duongDanNguon: "ftp://ftp.customs.gov.vn/files/prod_cat.txt",
    donViCungCap: "Tổng cục Hải quan",
    nguoiNap: "Hệ thống tự động",
    trangThai: "da-xu-ly",
    soDong: 2450,
    ngayCapNhat: "2026-05-24 07:15:00",
    tanSuat: "Hàng tuần",
    ghiChu: "Danh mục hàng hóa xuất khẩu chịu thuế tự vệ bổ sung năm 2026."
  },
  {
    id: 18,
    ten: "thongke_sanluong_lua.xlsx",
    dinhDang: "Excel",
    dungLuong: 7077888, // 6.75 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Desktop/sanluong_lua_2025.xlsx",
    donViCungCap: "Bộ Nông nghiệp và Phát triển Nông thôn",
    nguoiNap: "Nguyễn Văn A",
    trangThai: "da-xu-ly",
    soDong: 12800,
    ngayCapNhat: "2026-05-22 16:30:00",
    tanSuat: "Một lần",
    ghiChu: "Báo cáo thống kê sản lượng lúa các tỉnh đồng bằng Sông Cửu Long năm 2025."
  },
  {
    id: 19,
    ten: "danhsach_benhnhan_bhn.csv",
    dinhDang: "CSV",
    dungLuong: 14889779, // 14.20 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/benhnhan_covid.csv",
    donViCungCap: "Bộ Y tế",
    nguoiNap: "Nguyễn Văn A",
    trangThai: "da-xu-ly",
    soDong: 89000,
    ngayCapNhat: "2026-05-23 10:20:00",
    tanSuat: "Một lần",
    ghiChu: "Thống kê danh sách bệnh nhân mắc các bệnh truyền nhiễm tại khu vực phía Bắc."
  },
  {
    id: 20,
    ten: "dulieu_haican_thang4.xml",
    dinhDang: "XML",
    dungLuong: 51275366, // 48.90 MB
    phuongThucNap: "SFTP",
    duongDanNguon: "sftp://10.0.2.80/export/customs_apr26.xml",
    donViCungCap: "Tổng cục Hải quan",
    nguoiNap: "Hệ thống tự động",
    trangThai: "loi-dinh-dang",
    soDong: 0,
    ngayCapNhat: "2026-05-22 17:30:00",
    tanSuat: "Hàng tháng",
    ghiChu: "Parser Error: Tệp chứa ký tự không hợp lệ ngoài dải mã hóa UTF-8 chuẩn."
  },
  {
    id: 21,
    ten: "danhsach_sinhvien_truong_dh.xlsx",
    dinhDang: "Excel",
    dungLuong: 9856614, // 9.40 MB
    phuongThucNap: "Upload thủ công",
    duongDanNguon: "C:/Users/admin/Downloads/sinhvien_bachkhoa.xlsx",
    donViCungCap: "Bộ Giáo dục và Đào tạo",
    nguoiNap: "Trần Thị B",
    trangThai: "cho-xu-ly",
    soDong: 0,
    ngayCapNhat: "2026-05-23 14:15:00",
    tanSuat: "Một lần",
    ghiChu: "Danh sách sinh viên tốt nghiệp trường Đại học Bách Khoa năm 2026."
  },
  {
    id: 22,
    ten: "lichtrinh_tau_bien_2026.json",
    dinhDang: "JSON",
    dungLuong: 2936012, // 2.80 MB
    phuongThucNap: "Thư mục theo dõi",
    duongDanNguon: "//10.0.20.12/watch_folder/shipping_schedule.json",
    donViCungCap: "Bộ Giao thông Vận tải",
    nguoiNap: "Hệ thống tự động",
    trangThai: "da-xu-ly",
    soDong: 9400,
    ngayCapNhat: "2026-05-24 11:45:00",
    tanSuat: "Hàng ngày",
    ghiChu: "Danh sách lịch trình cập cảng của các tàu vận tải biển quốc tế tại cụm cảng Hải Phòng."
  }
];

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
