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
}

// Toggle sidebar collapsed/expanded
function toggleSidebar() {
  document.getElementById('app-sidebar').classList.toggle('collapsed');
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
