import re

def main():
    with open('screens/UC001-quan-ly-csdl-nguon/index.html', 'r', encoding='utf-8') as f:
        index_html = f.read()
    with open('screens/UC001-quan-ly-csdl-nguon/chi-tiet.html', 'r', encoding='utf-8') as f:
        chi_tiet_html = f.read()

    # 1. Extract style block
    style_match = re.search(r'<style>.*?</style>', index_html, flags=re.DOTALL)
    if not style_match:
        print("Failed to find style block in index.html")
        return
    style_block = style_match.group(0)

    # 2. Extract shell start (from <body> down to <main class="main-content" id="main" role="main">)
    shell_start_match = re.search(r'<body>.*?<main class="main-content" id="main" role="main">', index_html, flags=re.DOTALL)
    if not shell_start_match:
        print("Failed to find shell start in index.html")
        return
    shell_start = shell_start_match.group(0)

    # 3. Apply changes to chi-tiet.html
    # a. Inject style
    chi_tiet_html = chi_tiet_html.replace('</head>', f'\n  {style_block}\n</head>')

    # b. Replace layout shell start
    wrapper_start_pattern = r'<body[^>]*>.*?<div class="flex-1 flex flex-col bg-gray-50">'
    breadcrumb_pattern = r'\s*<!-- Breadcrumb -->\s*<nav[^>]*>.*?</nav>\s*'
    page_content_pattern = r'<!-- Page content -->\s*<main[^>]*>'
    
    full_start_pattern = wrapper_start_pattern + breadcrumb_pattern + page_content_pattern
    
    new_breadcrumb = """
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
    <div class="space-y-6">"""
    
    chi_tiet_html = re.sub(full_start_pattern, shell_start + new_breadcrumb, chi_tiet_html, flags=re.DOTALL)

    # c. Replace layout shell end
    wrapper_end_pattern = r'</main>\s*<!-- Footer -->\s*<div id="app-footer" class="flex-shrink-0"></div>\s*</div>\s*</div>\s*</div>'
    chi_tiet_html = re.sub(wrapper_end_pattern, '</div>\n  </main>\n</div>', chi_tiet_html, flags=re.DOTALL)

    # d. Fix init script
    init_script_pattern = r"loadLayout\('\.\./\.\./'\)\.then\(\(\) => \{\s*// Highlight active sidebar item\s*highlightActiveMenu\(\);\s*\}\);"
    new_init_script = "highlightActiveMenu();\n      if (window.lucide) lucide.createIcons();"
    chi_tiet_html = re.sub(init_script_pattern, new_init_script, chi_tiet_html, flags=re.DOTALL)

    with open('screens/UC001-quan-ly-csdl-nguon/chi-tiet.html', 'w', encoding='utf-8') as f:
        f.write(chi_tiet_html)

    print("Success")

if __name__ == '__main__':
    main()
