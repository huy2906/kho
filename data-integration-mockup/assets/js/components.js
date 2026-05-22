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
  
  // Highlight active menu (Gov VN pill style)
  autoExpandActiveSubmenu();
}

// Toggle sidebar collapsed/expanded
function toggleSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const inner   = document.getElementById('app-sidebar-inner');
  if (sidebar) sidebar.classList.toggle('collapsed');
  if (inner)   inner.classList.toggle('collapsed');
}

function toggleSubmenu(buttonEl) {
  const submenu = buttonEl.nextElementSibling;
  if (!submenu) return;
  const chevron = buttonEl.querySelector('.chevron');
  const isOpen  = !submenu.classList.contains('hidden');

  submenu.classList.toggle('hidden');
  if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
  buttonEl.setAttribute('aria-expanded', String(!isOpen));
}

// Auto-expand submenu chứa trang hiện tại và highlight nav items theo Gov VN pill style
function autoExpandActiveSubmenu() {
  let currentPath = window.location.pathname;
  if (currentPath.endsWith('/')) currentPath += 'index.html';

  let foundActive = false;

  // --- Active class cho Gov VN style ---
  const ACTIVE_PILL    = ['bg-gov-blue-700', 'text-white', 'font-semibold'];
  const INACTIVE_PILL  = ['text-gray-700', 'text-gray-600'];
  const ACTIVE_PARENT  = ['bg-blue-50', 'text-gov-blue-700', 'font-semibold'];

  // Xử lý các link trong submenu
  document.querySelectorAll('.submenu a.nav-sub-item, .submenu a').forEach(link => {
    let linkPath = link.getAttribute('href');
    if (!linkPath || linkPath === '#') return;

    const normalizedLinkPath = linkPath.replace(/\.\.\//g, '');

    if (currentPath.includes(normalizedLinkPath)) {
      // Mở submenu chứa link này
      const submenu = link.closest('.submenu');
      if (submenu) {
        submenu.classList.remove('hidden');
        const btn = submenu.previousElementSibling;
        if (btn) {
          const chevron = btn.querySelector('.chevron');
          if (chevron) chevron.style.transform = 'rotate(90deg)';
          btn.setAttribute('aria-expanded', 'true');
          // Highlight parent button
          INACTIVE_PILL.forEach(c => btn.classList.remove(c));
          ACTIVE_PARENT.forEach(c => btn.classList.add(c));
        }
        // Nếu còn submenu cha ở trên nữa
        const grandSubmenu = submenu.closest('.submenu');
        if (grandSubmenu && grandSubmenu !== submenu) {
          grandSubmenu.classList.remove('hidden');
          const grandBtn = grandSubmenu.previousElementSibling;
          if (grandBtn) {
            const gc = grandBtn.querySelector('.chevron');
            if (gc) gc.style.transform = 'rotate(90deg)';
            grandBtn.setAttribute('aria-expanded', 'true');
          }
        }
      }

      // Highlight active sub-item với pill xanh
      INACTIVE_PILL.forEach(c => link.classList.remove(c));
      ACTIVE_PILL.forEach(c => link.classList.add(c));
      // Override tailwind bg
      link.style.backgroundColor = '#1976D2';
      link.style.color = '#ffffff';

      foundActive = true;
    }
  });

  // Xử lý các link thường bên ngoài submenu (.nav-item)
  document.querySelectorAll('#app-sidebar .nav-item').forEach(link => {
    let linkPath = link.getAttribute('href');
    if (!linkPath || linkPath === '#') return;

    const normalizedLinkPath = linkPath.replace(/\.\.\//g, '');
    const isRootIndex    = normalizedLinkPath === 'index.html';
    const isCurrentRoot  = currentPath.endsWith('data-integration-mockup/') || currentPath.endsWith('data-integration-mockup/index.html');

    if (currentPath.includes(normalizedLinkPath) && !(isRootIndex && !isCurrentRoot)) {
      INACTIVE_PILL.forEach(c => link.classList.remove(c));
      ACTIVE_PILL.forEach(c => link.classList.add(c));
      link.style.backgroundColor = '#1976D2';
      link.style.color = '#ffffff';
      const icon = link.querySelector('i');
      if (icon) { icon.style.color = '#ffffff'; }
      foundActive = true;
    }
  });

  // Nếu ở root dashboard
  if (!foundActive && (currentPath.endsWith('data-integration-mockup/') || currentPath.endsWith('data-integration-mockup/index.html'))) {
    const dashboardLink = document.querySelector('#app-sidebar a.nav-item[href*="index.html"]');
    if (dashboardLink) {
      INACTIVE_PILL.forEach(c => dashboardLink.classList.remove(c));
      ACTIVE_PILL.forEach(c => dashboardLink.classList.add(c));
      dashboardLink.style.backgroundColor = '#1976D2';
      dashboardLink.style.color = '#ffffff';
      const icon = dashboardLink.querySelector('i');
      if (icon) icon.style.color = '#ffffff';
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
