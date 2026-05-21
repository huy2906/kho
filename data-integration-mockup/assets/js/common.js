/**
 * assets/js/common.js
 * Chứa các hàm tiện ích chung dùng toàn hệ thống
 */

/**
 * Tải component HTML từ file và nhúng vào DOM
 * @param {string} url - Đường dẫn tới file HTML (VD: 'components/layout/sidebar.html')
 * @param {string} targetId - ID của thẻ chứa (VD: 'sidebar-container')
 * @param {function} callback - Callback được gọi sau khi render xong (tùy chọn)
 */
async function loadComponent(url, targetId, callback = null) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Lỗi tải component ${url}: ${response.statusText}`);
        }
        
        const html = await response.text();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.innerHTML = html;
            
            // Render lại icon Lucide cho component vừa load
            if (window.lucide) {
                lucide.createIcons({
                    root: targetElement
                });
            }
            
            // Chạy script nội tại nếu có (vì innerHTML không thực thi thẻ <script>)
            const scripts = targetElement.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
                script.remove(); // Dọn dẹp thẻ script cũ
            });

            if (callback && typeof callback === 'function') {
                callback();
            }
        } else {
            console.warn(`Không tìm thấy phần tử có ID: ${targetId}`);
        }
    } catch (error) {
        console.error('Lỗi loadComponent:', error);
        
        // Hiển thị lỗi ra UI nếu đang ở môi trường dev
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = `
                <div class="p-4 text-red-500 bg-red-50 border border-red-200 rounded text-sm">
                    <strong>Lỗi tải Component:</strong> Không thể tải <code>${url}</code>.<br>
                    Vui lòng đảm bảo bạn đang chạy project qua <strong>Live Server</strong>.
                </div>
            `;
            if (window.lucide) {
                lucide.createIcons();
            }
        }
    }
}

/**
 * Hiển thị/ẩn trạng thái loading cho một vùng
 * @param {string} elementId - ID của phần tử
 * @param {boolean} isLoading - Trạng thái loading
 */
function toggleLoading(elementId, isLoading) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    if (isLoading) {
        el.classList.add('opacity-50', 'pointer-events-none', 'transition-opacity');
    } else {
        el.classList.remove('opacity-50', 'pointer-events-none');
    }
}

// Hàm khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized.');
    
    // Ví dụ sử dụng loadComponent (cần tạo file HTML trước khi uncomment):
    // loadComponent('components/layout/sidebar.html', 'sidebar-container');
    // loadComponent('components/layout/header.html', 'header-container');
});
