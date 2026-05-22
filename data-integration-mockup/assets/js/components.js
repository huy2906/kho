// Load HTML partial và inject vào element có id tương ứng
async function loadPartial(elementId, partialPath) {
  try {
    const response = await fetch(partialPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    console.error('Lỗi load partial:', partialPath, err);
  }
}

// Load tất cả layout chuẩn (header, sidebar, footer)
async function loadLayout(basePath = '../../') {
  await Promise.all([
    loadPartial('app-header', basePath + 'components/layout/header.html'),
    loadPartial('app-sidebar', basePath + 'components/layout/sidebar.html'),
    loadPartial('app-footer', basePath + 'components/layout/footer.html')
  ]);
  // Re-render Lucide icons sau khi inject HTML
  if (window.lucide) lucide.createIcons();
  
  // Highlight active menu
  autoExpandActiveSubmenu();
}

// Toggle sidebar collapsed/expanded
function toggleSidebar() {
  document.getElementById('app-sidebar').classList.toggle('collapsed');
}

function toggleSubmenu(buttonEl) {
  const submenu = buttonEl.nextElementSibling;
  const chevron = buttonEl.querySelector('.chevron');
  const isOpen = !submenu.classList.contains('hidden');
  
  submenu.classList.toggle('hidden');
  chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
  buttonEl.setAttribute('aria-expanded', !isOpen);
}

// Auto-expand submenu chứa trang hiện tại và highlight các nav-link thông thường
function autoExpandActiveSubmenu() {
  let currentPath = window.location.pathname;
  if (currentPath.endsWith('/')) currentPath += 'index.html';
  
  let foundActive = false;
  
  // Xử lý các link trong submenu
  document.querySelectorAll('.submenu a').forEach(link => {
    let linkPath = link.getAttribute('href');
    if (linkPath === '#') return;
    
    // Normalize path for comparison
    const normalizedLinkPath = linkPath.replace(/\.\.\//g, '');
    
    if (currentPath.includes(normalizedLinkPath) || 
        (normalizedLinkPath.includes('index.html') && currentPath.endsWith('data-integration-mockup/') && linkPath.includes('../../index.html'))) {
      link.closest('.submenu').classList.remove('hidden');
      const btn = link.closest('.submenu').previousElementSibling;
      const chevron = btn.querySelector('.chevron');
      if (chevron) chevron.style.transform = 'rotate(90deg)';
      btn.setAttribute('aria-expanded', 'true');
      
      // Highlight active sub-item
      link.classList.add('bg-primary-700', 'text-white', 'font-medium');
      link.classList.remove('text-primary-100');
      
      // Highlight parent
      btn.classList.add('bg-primary-800', 'border-white');
      btn.classList.remove('border-transparent');
      
      foundActive = true;
    }
  });
  
  // Xử lý các link thường bên ngoài submenu
  document.querySelectorAll('#app-sidebar .nav-link').forEach(link => {
    let linkPath = link.getAttribute('href');
    if (linkPath === '#') return;
    
    const normalizedLinkPath = linkPath.replace(/\.\.\//g, '');
    const isRootIndex = normalizedLinkPath === 'index.html';
    const isCurrentRoot = currentPath.endsWith('data-integration-mockup/') || currentPath.endsWith('data-integration-mockup/index.html');
    
    if (currentPath.includes(normalizedLinkPath) && !(isRootIndex && !isCurrentRoot)) {
        link.classList.add('bg-primary-700', 'text-white', 'border-white');
        link.classList.remove('text-primary-100', 'border-transparent', 'hover:border-primary-400');
        
        // Cập nhật màu icon bên trong nếu có
        const icon = link.querySelector('i');
        if (icon) {
            icon.classList.add('text-white');
            icon.classList.remove('text-primary-300');
        }
        
        foundActive = true;
    }
  });
  
  // Nếu đang ở root index, highlight Dashboard explicitly
  if (!foundActive && (currentPath.endsWith('data-integration-mockup/') || currentPath.endsWith('data-integration-mockup/index.html'))) {
     const dashboardLink = document.querySelector('#app-sidebar .nav-link[href="../../index.html"]') || document.querySelector('#app-sidebar .nav-link[href="index.html"]');
     if (dashboardLink) {
         dashboardLink.classList.add('bg-primary-700', 'text-white', 'border-white');
         dashboardLink.classList.remove('text-primary-100', 'border-transparent', 'hover:border-primary-400');
         const icon = dashboardLink.querySelector('i');
         if (icon) {
             icon.classList.add('text-white');
             icon.classList.remove('text-primary-300');
         }
     }
  }
}

// Format ngày DD/MM/YYYY
function formatDate(date) {
  const d = new Date(date);
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

// Format ngày giờ DD/MM/YYYY HH:mm
function formatDateTime(date) {
  const d = new Date(date);
  return `${formatDate(d)} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

// Format số với dấu chấm phân cách hàng nghìn
function formatNumber(num) {
  return new Intl.NumberFormat('vi-VN').format(num);
}

// Format dung lượng file (KB, MB, GB)
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  if (bytes < 1024*1024*1024) return (bytes/1024/1024).toFixed(1) + ' MB';
  return (bytes/1024/1024/1024).toFixed(2) + ' GB';
}
