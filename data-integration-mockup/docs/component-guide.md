# Hướng dẫn sử dụng Component (Component Guide)

Tài liệu hướng dẫn tái sử dụng các thành phần (components) đã được thiết kế sẵn trong thư mục `components/`.

## 1. Thành phần Layout (`components/layout/`)

- **`head.html`**: Đặt vào thẻ `<head>` của trang. Bao gồm Tailwind CDN, config màu sắc, font chữ và thư viện icon.
- **`header.html`**: Thanh điều hướng trên cùng, bọc trong thẻ `<div id="app-header">`.
- **`sidebar.html`**: Thanh menu bên trái, bọc trong `<aside id="app-sidebar">`.
- **`footer.html`**: Chân trang hệ thống, bọc trong `<div id="app-footer">`.
- **`breadcrumb.html`**: Điều hướng dạng phân cấp (Trang chủ > Danh mục > Bài viết). Thường copy trực tiếp vào mã nguồn HTML để thay đổi tên.

> **Cách dùng JS**: Trong hàm `loadLayout()` ở file `common.js`, các file trên tự động được fetch và gắn vào các div có id tương ứng.

## 2. Thành phần Tích hợp (Data Integration)

### 2.1. `db-source-card.html`
- **Mô tả**: Thẻ hiển thị trực quan thông tin của một CSDL.
- **Cách dùng**: Nhúng trực tiếp mã HTML vào màn hình. Thường dùng trong một Grid layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Thay đổi UI**: 
  - Đổi màu viền thẻ tùy trạng thái CSDL.
  - Sửa class `text-success-700` thành `text-error-700` nếu mất kết nối.

### 2.2. `connection-form.html`
- **Mô tả**: Form mẫu tiêu chuẩn cấu hình máy chủ, user/pass, có kèm cấu hình nâng cao.
- **Cách dùng**: Copy vào khối `<main>` khi vẽ màn hình Thêm/Sửa CSDL.
- **Tùy biến**: Thêm bớt trường input theo yêu cầu BA.

### 2.3. `schema-tree.html`
- **Mô tả**: Cây thư mục nhiều cấp hiển thị schema dữ liệu (Database > Schema > Table > Column). Dùng `margin-left` tạo thụt lề, và `border-left` để nối đường thẳng.
- **Cách dùng**: Sử dụng kết hợp khi vẽ màn hình Cấu hình CTDL. Tái sử dụng HTML structure để tạo cây.

### 2.4. `mapping-table.html`
- **Mô tả**: Bảng có 3 vùng không gian rõ ràng (Nguồn - Transform - Đích).
- **Cách dùng**: Dùng để hiển thị các quy tắc ETL cho kỹ sư dữ liệu.

### 2.5. `job-status.html`
- **Mô tả**: Thẻ card giám sát tiến trình đang chạy. Có hiệu ứng css nhấp nháy (`animate-ping`) và giả lập progress bar.
- **Cách dùng**: Dùng cho phân hệ Giám sát CDC và ETL.

*Lưu ý: Bạn có thể mở trực tiếp các file HTML trong thư mục components thông qua Live Server để xem UI độc lập.*
