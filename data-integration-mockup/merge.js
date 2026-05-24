const fs = require('fs');

function main() {
    const indexHtml = fs.readFileSync('screens/UC001-quan-ly-csdl-nguon/index.html', 'utf8');
    let chiTietHtml = fs.readFileSync('screens/UC001-quan-ly-csdl-nguon/chi-tiet.html', 'utf8');

    // 1. Extract style block
    const styleMatch = indexHtml.match(/<style>[\s\S]*?<\/style>/);
    if (!styleMatch) {
        console.log("Failed to find style block in index.html");
        return;
    }
    const styleBlock = styleMatch[0];

    // 2. Extract shell start
    const shellStartMatch = indexHtml.match(/<body>[\s\S]*?<main class="main-content" id="main" role="main">/);
    if (!shellStartMatch) {
        console.log("Failed to find shell start in index.html");
        return;
    }
    const shellStart = shellStartMatch[0];

    // 3. Apply changes
    chiTietHtml = chiTietHtml.replace('</head>', '\n  ' + styleBlock + '\n</head>');

    const wrapperStartPattern = /<body[^>]*>[\s\S]*?<div class="flex-1 flex flex-col bg-gray-50">[\s\S]*?<!-- Breadcrumb -->[\s\S]*?<\/nav>\s*<!-- Page content -->\s*<main[^>]*>/;
    
    const newBreadcrumb = `
    <!-- Breadcrumb -->
    <nav aria-label="Đường dẫn" class="breadcrumb">
      <a href="../../index.html">Trang chủ</a>
      <span class="sep" aria-hidden="true">/</span>
      <a href="#">Quản lý cơ sở dữ liệu</a>
      <span class="sep" aria-hidden="true">/</span>
      <a href="index.html">CSDL Nguồn</a>
      <span class="sep" aria-hidden="true">/</span>
      <span class="current" aria-current="page">Chi tiết CSDL</span>
    </nav>

    <!-- Page content -->
    <div class="space-y-6">`;

    chiTietHtml = chiTietHtml.replace(wrapperStartPattern, shellStart + newBreadcrumb);

    const wrapperEndPattern = /<\/main>\s*<!-- Footer -->\s*<div id="app-footer" class="flex-shrink-0"><\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
    chiTietHtml = chiTietHtml.replace(wrapperEndPattern, '</div>\n  </main>\n</div>');

    const initScriptPattern = /loadLayout\('\.\.\/\.\.\/'\)\.then\(\(\) => \{\s*\/\/\s*Highlight active sidebar item\s*highlightActiveMenu\(\);\s*\}\);/;
    const newInitScript = 'highlightActiveMenu();\n      if (window.lucide) lucide.createIcons();';
    chiTietHtml = chiTietHtml.replace(initScriptPattern, newInitScript);

    fs.writeFileSync('screens/UC001-quan-ly-csdl-nguon/chi-tiet.html', chiTietHtml, 'utf8');
    console.log("Success");
}

main();
