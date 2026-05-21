# Hướng dẫn Thiết lập và Làm việc dành cho BA

Tài liệu này hướng dẫn chi tiết từng bước (step-by-step) cách để một Business Analyst hoặc thành viên mới tiếp cận, khởi chạy và tạo thêm giao diện (mockup) cho dự án.

## 1. Môi trường bắt buộc (Cài đặt 1 lần)
- **Visual Studio Code (VS Code)**: Tải và cài đặt bản mới nhất tại [code.visualstudio.com](https://code.visualstudio.com/).
- **Git**: Tải và cài đặt [git-scm.com](https://git-scm.com/).
- **Live Server Extension**: 
  - Mở VS Code.
  - Chọn tab Extensions (hoặc bấm `Ctrl+Shift+X`).
  - Gõ tìm kiếm `Live Server` (của tác giả Ritwick Dey).
  - Bấm Install.

## 2. Clone và Khởi chạy
- Mở terminal (CMD/Powershell hoặc Terminal trong VS Code).
- Gõ lệnh `git clone [url_du_an]`.
- Dùng VS Code chọn File -> Open Folder... -> Trỏ tới thư mục vừa tải về.
- Tại cây thư mục bên trái, **click chuột phải vào file `index.html`** nằm ở ngoài cùng (root).
- Chọn **"Open with Live Server"**.
- Trình duyệt sẽ mở ra trang tổng quan.

## 3. Quy trình tạo mới một Use Case (UC) Mockup
Khi bạn cần vẽ giao diện tĩnh cho một tính năng (VD: UC008 - Cấu hình bảng dữ liệu đích):

1. Tìm tới thư mục `screens/_template`.
2. Click chuột phải vào `_template` chọn Copy, sau đó Paste ngay tại thư mục `screens`.
3. Đổi tên thư mục vừa sinh ra thành `UC008-cau-hinh-bang-dich`.
4. Mở file `index.html` bên trong thư mục `UC008-cau-hinh-bang-dich` bằng VS Code.
5. Cập nhật thẻ `<title>` ở dòng 5 thành tiêu đề của bạn.
6. Cập nhật lại thanh Breadcrumb (dòng chứa chữ `[Tên UC]`).
7. Tìm đến thẻ `<main>` (thường có ghi chú `<!-- TODO: Nội dung UC ở đây -->`).
8. Bạn có thể tự viết code HTML/Tailwind vào đó, hoặc tốt nhất là **cung cấp Prompt Template** cho AI (Copilot/Gemini) và yêu cầu AI sinh mã theo đúng design system.

## 4. Dùng AI Agent (Khuyến nghị)
Bạn có thể mở tính năng chat của AI (như GitHub Copilot, Gemini IDE) và gõ lệnh theo mẫu sau:

> *"Hãy tạo cho tôi UI trong phần <main> của file này cho chức năng XYZ. Đọc rules ở AGENTS.md và style.md trước khi làm. Dùng các component mẫu trong thư mục components nếu có."*

## 5. Quy trình Đóng góp mã nguồn (Git Flow)
1. Luôn tạo nhánh mới: `git checkout -b feature/them-uc008`
2. Sau khi làm xong: `git add .`
3. Commit rõ ràng: `git commit -m "Thêm mockup UC008 cấu hình bảng đích"`
4. Đẩy code lên: `git push origin feature/them-uc008`
5. Lên GitLab/GitHub tạo Merge Request (PR).
