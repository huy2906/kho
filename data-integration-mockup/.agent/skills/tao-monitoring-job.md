---
description: >
  Tạo dashboard monitoring theo dõi tiến trình chạy job ETL/CDC.
  Bao gồm stat cards, job status cards với progress bar và mini-chart, 
  log viewer modal dạng terminal.
---

# Skill: Tạo Dashboard Monitoring Job

---

## Pattern tổng quan

```
[Page Header: H1 + subtitle | Nút Refresh + Nút Tạo job mới]
[Stat Cards: 4 cards — Tổng job / Đang chạy / Lỗi / Thành công hôm nay]
[Toolbar: search + filter loại job (Full/Incremental/CDC) + filter trạng thái]
[Job Grid: 3-column card grid]
  └── [JobCard: tên + loại + progress bar + mini chart + status + actions]
[Log Viewer Modal: terminal nền đen]
```

---

## 1. Stat Cards (4 cards)

Dùng cùng pattern với màn hình list (xem `tao-table-quan-ly-csdl.md` §2).

Icon gợi ý:
- Tổng job: `activity` — `var(--navy-50)` / `var(--navy-700)`
- Đang chạy: `play-circle` — `var(--success-50)` / `var(--success-700)` + delta "X job real-time"
- Lỗi hôm nay: `alert-circle` — `var(--danger-50)` / `var(--danger-700)`
- Thành công hôm nay: `check-circle` — `var(--navy-50)` / `var(--navy-700)`

---

## 2. Job Status Card

```html
<div class="job-card" data-status="running">

  <!-- Progress bar chạy dọc đỉnh -->
  <div class="job-progress-bar">
    <div class="job-progress-fill" style="width:65%"></div>
  </div>

  <div class="job-card-body">
    <!-- Header: tên + loại badge -->
    <div class="job-header">
      <div class="job-name">Đồng bộ Dân cư hàng ngày</div>
      <span class="job-type-badge cdc">CDC</span>
    </div>

    <!-- Meta: nguồn → đích -->
    <div class="job-route">
      <span class="job-src">CSDL Dân cư Quốc gia</span>
      <i data-lucide="arrow-right" style="width:13px;height:13px;color:var(--ink-300)"></i>
      <span class="job-dst">CSDL Tích hợp Công dân</span>
    </div>

    <!-- Status badge -->
    <div class="job-status-row">
      <span class="status-badge ok">
        <span class="pulse"></span>
        Đang chạy (65%)
      </span>
      <span class="job-duration">02:04:05</span>
    </div>

    <!-- Mini chart: 7 cột dạng div bar -->
    <div class="job-mini-chart" aria-label="Lịch sử 7 ngày">
      <div class="mini-bar" style="height:40%" data-status="ok"></div>
      <div class="mini-bar" style="height:80%" data-status="ok"></div>
      <div class="mini-bar" style="height:60%" data-status="ok"></div>
      <div class="mini-bar" style="height:90%" data-status="ok"></div>
      <div class="mini-bar" style="height:20%" data-status="err"></div>
      <div class="mini-bar" style="height:70%" data-status="ok"></div>
      <div class="mini-bar" style="height:65%" data-status="running"></div>
    </div>
  </div>

  <!-- Action buttons -->
  <div class="job-actions">
    <button class="action-btn" title="Xem log">
      <i data-lucide="terminal" style="width:15px;height:15px"></i>
    </button>
    <button class="action-btn" title="Dừng">
      <i data-lucide="square" style="width:15px;height:15px"></i>
    </button>
    <button class="action-btn" title="Chạy lại">
      <i data-lucide="refresh-cw" style="width:15px;height:15px"></i>
    </button>
  </div>

</div>
```

**CSS job card:**
```css
.job-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden;
  box-shadow: var(--shadow-1); position: relative;
  transition: box-shadow 0.18s;
}
.job-card:hover { box-shadow: var(--shadow-2); }

.job-progress-bar { height: 3px; background: var(--border); }
.job-progress-fill { height: 100%; background: var(--workspace-grad); border-radius: 2px; transition: width 0.4s ease; }

.job-type-badge { font-size: 10.5px; font-weight: 700; padding: 2px 7px; border-radius: 999px; }
.job-type-badge.cdc  { background: var(--navy-50); color: var(--navy-700); }
.job-type-badge.full { background: var(--success-50); color: var(--success-700); }
.job-type-badge.incr { background: var(--warning-50); color: var(--warning-700); }

/* Mini chart */
.job-mini-chart { display: flex; align-items: flex-end; gap: 3px; height: 28px; }
.mini-bar { flex: 1; border-radius: 2px 2px 0 0; min-height: 3px; }
.mini-bar[data-status="ok"]      { background: var(--success-500); opacity: 0.7; }
.mini-bar[data-status="err"]     { background: var(--danger-500); opacity: 0.7; }
.mini-bar[data-status="running"] { background: var(--navy-500); opacity: 0.9; }
```

---

## 3. Log Viewer Modal (Terminal)

```html
<div class="dialog-overlay" id="log-modal" role="dialog" aria-label="Log terminal">
  <div class="dialog" style="max-width:760px;background:#0f1117">

    <div class="dialog-header" style="border-color:rgba(255,255,255,0.08)">
      <div style="color:#e2e8f0;font-weight:700">
        <i data-lucide="terminal" style="width:16px;height:16px;color:#10b981"></i>
        Log — JOB001 · Đồng bộ Dân cư
      </div>
      <button class="dialog-close" style="color:#94a3b8" onclick="closeLogModal()">
        <i data-lucide="x"></i>
      </button>
    </div>

    <div class="log-body">
      <pre class="log-terminal">
<span class="log-ts">[2026-05-21 02:00:01]</span> <span class="log-info">INFO</span>  Job JOB001 khởi động. Mode: CDC
<span class="log-ts">[2026-05-21 02:00:02]</span> <span class="log-info">INFO</span>  Kết nối CSDL nguồn: 10.0.1.10:1521 ✓
<span class="log-ts">[2026-05-21 02:00:03]</span> <span class="log-info">INFO</span>  Bắt đầu đọc log binlog từ offset 4892774
<span class="log-ts">[2026-05-21 02:02:15]</span> <span class="log-ok">OK</span>    Đã xử lý 14.592 bản ghi thay đổi
<span class="log-ts">[2026-05-21 02:04:05]</span> <span class="log-ok">OK</span>    Job hoàn thành. Thời gian: 2m04s. Tốc độ: 117 rec/s
      </pre>
    </div>

    <div class="dialog-footer" style="border-color:rgba(255,255,255,0.08)">
      <button class="btn btn-outline" onclick="closeLogModal()" style="color:#94a3b8;border-color:rgba(255,255,255,0.15);background:transparent">
        Đóng
      </button>
      <button class="btn btn-outline" style="color:#10b981;border-color:rgba(16,185,129,0.3);background:rgba(16,185,129,0.05)">
        <i data-lucide="download"></i> Tải log
      </button>
    </div>
  </div>
</div>
```

**CSS terminal:**
```css
.log-body { padding: 0 4px; max-height: 420px; overflow-y: auto; }
.log-terminal {
  background: #0f1117; color: #e2e8f0;
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  line-height: 1.8; padding: 16px 20px;
  white-space: pre-wrap; word-break: break-all;
}
.log-ts   { color: #64748b; }
.log-info { color: #60a5fa; font-weight: 600; }
.log-ok   { color: #34d399; font-weight: 600; }
.log-warn { color: #fbbf24; font-weight: 600; }
.log-err  { color: #f87171; font-weight: 600; }
```

---

## 4. Lưu ý thêm

- Auto-scroll log terminal xuống dưới khi mở: `logBody.scrollTop = logBody.scrollHeight`
- Polling/refresh mỗi 30s: `setInterval(refreshJobs, 30000)`
- Job "Đang chạy": progress bar có animation `linear` 
- Tô màu row/card theo status: `data-status="running|ok|err|paused"` trên container
