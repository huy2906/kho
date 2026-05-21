$ErrorActionPreference = 'Stop'
$base = "c:\Users\Huy\.gemini\antigravity\scratch\gov\data-integration-mockup"

$dirs = @(
    ".agent/rules",
    ".agent/skills",
    "assets/css",
    "assets/js",
    "assets/images/icons-db",
    "components/layout",
    "components/common",
    "components/forms",
    "components/data-integration",
    "screens/_template",
    "docs"
)

foreach ($d in $dirs) {
    New-Item -ItemType Directory -Force -Path "$base\$d" | Out-Null
}

$files = @(
    "README.md",
    "SETUP.md",
    "AGENTS.md",
    "style.md",
    "index.html",
    ".agent/rules/ui-rules.md",
    ".agent/rules/form-rules.md",
    ".agent/rules/accessibility-rules.md",
    ".agent/skills/tao-form-ket-noi-csdl.md",
    ".agent/skills/tao-table-quan-ly-csdl.md",
    ".agent/skills/tao-mapping-schema.md",
    ".agent/skills/tao-monitoring-job.md",
    "assets/css/tailwind-config.html",
    "assets/css/custom.css",
    "assets/js/common.js",
    "assets/js/components.js",
    "assets/js/mock-data.js",
    "assets/images/logo-quoc-huy.svg",
    "assets/images/logo-co-quan.svg",
    "components/layout/head.html",
    "components/layout/header.html",
    "components/layout/sidebar.html",
    "components/layout/breadcrumb.html",
    "components/layout/footer.html",
    "components/common/status-badge.html",
    "components/common/data-table.html",
    "components/common/empty-state.html",
    "components/common/loading-skeleton.html",
    "components/common/modal-confirm.html",
    "components/common/alert.html",
    "components/common/pagination.html",
    "components/common/page-header.html",
    "components/forms/form-field-text.html",
    "components/forms/form-field-select.html",
    "components/forms/form-field-date.html",
    "components/forms/form-field-upload.html",
    "components/forms/form-connection-test.html",
    "components/forms/form-actions.html",
    "components/data-integration/db-source-card.html",
    "components/data-integration/schema-tree.html",
    "components/data-integration/mapping-table.html",
    "components/data-integration/job-status.html",
    "components/data-integration/connection-form.html",
    "screens/_template/index.html",
    "screens/_template/README.md",
    "docs/prompt-templates.md",
    "docs/component-guide.md",
    "docs/ucs-list.md"
)

foreach ($f in $files) {
    New-Item -ItemType File -Force -Path "$base\$f" | Out-Null
}

Write-Output "Successfully created project structure."
