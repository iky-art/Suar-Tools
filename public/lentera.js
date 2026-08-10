/**
 * Lentera — console debug buatan sendiri.
 * Tempel satu script tag ini, lalu panggil Lentera.init().
 * https://suar-tools.vercel.app
 */
(function () {
  if (window.Lentera) return; // sudah pernah di-init

  // ===== Kamus pola error -> kemungkinan penyebab & saran perbaikan =====
  const CAUSE_PATTERNS = [
    {
      test: /is not a function/i,
      cause: 'Kamu memanggil sesuatu yang bukan fungsi — mungkin nama fungsi salah ketik, belum diimport, atau ke-overwrite oleh variabel lain.',
      fix: 'Cek apakah fungsi ini benar-benar ada di scope ini, dan pastikan tidak ada variabel lain dengan nama sama yang menimpa import-nya.',
    },
    {
      test: /cannot read propert(y|ies) .* of (null|undefined)/i,
      cause: 'Kamu mengakses properti dari nilai null/undefined — objeknya belum ada saat baris ini dijalankan.',
      fix: 'Tambahkan optional chaining (?.) atau pastikan data sudah selesai dimuat sebelum diakses.',
    },
    {
      test: /unexpected token/i,
      cause: 'Ada karakter yang salah tempat — sering terjadi di JSON tidak valid atau kurung/kurawal yang tidak seimbang.',
      fix: 'Cek tanda kutip, koma, dan pasangan kurung di sekitar baris ini.',
    },
    {
      test: /failed to fetch|networkerror|err_name_not_resolved|econnrefused/i,
      cause: 'Permintaan network gagal — domain tidak ditemukan, tidak ada koneksi, server mati, atau diblokir CORS.',
      fix: 'Cek URL benar, cek koneksi, dan cek header CORS di server tujuan.',
    },
    {
      test: /unhandled(promise)? rejection/i,
      cause: 'Ada Promise yang gagal (reject) tapi tidak ditangani.',
      fix: 'Bungkus pemanggilan async ini dengan try/catch, atau tambahkan .catch(err => ...).',
    },
    {
      test: /maximum call stack/i,
      cause: 'Kemungkinan ada fungsi yang memanggil dirinya sendiri tanpa kondisi berhenti (infinite recursion).',
      fix: 'Cek kondisi berhenti (base case) pada fungsi rekursif kamu.',
    },
    {
      test: /module not found|cannot find module/i,
      cause: 'Import mengarah ke file atau package yang tidak ditemukan.',
      fix: 'Cek nama file/path-nya benar, dan pastikan package sudah terinstall (npm install).',
    },
    {
      test: /is not defined/i,
      cause: 'Variabel atau fungsi ini dipakai sebelum dideklarasikan, atau typo pada namanya.',
      fix: 'Cek ejaan nama variabel, dan pastikan sudah dideklarasikan/diimport sebelum baris ini.',
    },
    {
      test: /(expected|missing) (a )?semicolon|declaration or statement expected/i,
      cause: 'Ada bagian sintaks yang belum lengkap — biasanya kurang tanda kurung tutup, koma, atau titik koma.',
      fix: 'Periksa baris ini dan baris sebelumnya untuk tanda baca yang kurang.',
    },
  ];

  function guessCause(message) {
    if (!message) return null;
    for (const p of CAUSE_PATTERNS) {
      if (p.test.test(message)) return p;
    }
    return null;
  }

  // ===== CSS (di-inject sekali) =====
  const CSS = `
  #lentera-trigger{
    position:fixed; right:18px; bottom:14px; width:52px; height:74px;
    border:none; cursor:pointer; z-index:2147483000; background:none; padding:0;
    filter:drop-shadow(0 6px 14px rgba(0,0,0,0.5)) drop-shadow(0 0 14px rgba(255,150,60,0.4));
    animation:lentera-idle 3.4s ease-in-out infinite;
  }
  #lentera-trigger svg{ width:100%; height:100%; display:block; }
  #lentera-trigger .lentera-flame{ animation:lentera-flicker 2.2s ease-in-out infinite; transform-origin:32px 46px; }
  @keyframes lentera-flicker{
    0%,100%{ opacity:1; transform:scale(1); }
    30%{ opacity:0.85; transform:scale(0.96) translateY(0.5px); }
    55%{ opacity:1; transform:scale(1.04); }
    80%{ opacity:0.9; transform:scale(0.98); }
  }
  @keyframes lentera-idle{ 0%,100%{transform:rotate(-3deg);} 50%{transform:rotate(3deg);} }
  #lentera-trigger.lentera-alert{
    animation:lentera-alert 0.6s ease-in-out infinite;
    filter:drop-shadow(0 6px 14px rgba(0,0,0,0.6)) drop-shadow(0 0 18px rgba(224,96,63,0.65));
  }
  @keyframes lentera-alert{ 0%,100%{transform:scale(1) rotate(-2deg);} 50%{transform:scale(1.08) rotate(2deg);} }

  #lentera-badge{
    position:fixed; right:12px; bottom:70px;
    background:#e0603f; color:#fff; font-family:-apple-system,sans-serif;
    font-size:11px; font-weight:700; min-width:18px; height:18px; border-radius:9px;
    display:none; align-items:center; justify-content:center; padding:0 4px;
    border:2px solid #0b0f0d; z-index:2147483000;
  }

  #lentera-panel{
    position:fixed; right:16px; bottom:96px;
    width:min(400px, calc(100vw - 32px)); height:min(500px, calc(100vh - 140px));
    background:linear-gradient(160deg, #161f1a 0%, #0f1512 100%);
    border:1px solid #2b332c; border-radius:16px;
    box-shadow:0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04);
    display:none; flex-direction:column; overflow:hidden; z-index:2147483000;
    font-family:-apple-system, system-ui, sans-serif; color:#eee6d6;
  }
  #lentera-panel.open{ display:flex; }
  .lentera-head{ display:flex; align-items:center; gap:8px; padding:12px 14px;
    background:linear-gradient(180deg, rgba(201,143,60,0.12), transparent); border-bottom:1px solid #232b25; }
  .lentera-head .flame-dot{ width:8px;height:8px;border-radius:50%; background:#ffb347;
    box-shadow:0 0 8px 2px rgba(255,150,60,0.6); }
  .lentera-head b{ font-weight:600; font-size:13px; color:#e8b563; }
  .lentera-head .lentera-close{ margin-left:auto; background:none;border:none;color:#a99f8c;
    font-size:16px;cursor:pointer;padding:2px 6px;border-radius:6px; }
  .lentera-head .lentera-close:hover{ background:#1e2620; color:#eee6d6; }
  .lentera-tabs{ display:flex; gap:2px; padding:6px 10px; border-bottom:1px solid #1f2621; }
  .lentera-tabs button{ background:none;border:none;color:#a99f8c; font-size:12px;
    padding:6px 10px; border-radius:7px; cursor:pointer; }
  .lentera-tabs button.active{ background:#1c2620; color:#e8b563; }
  .lentera-body{ flex:1; overflow-y:auto; padding:8px 10px 14px; }
  .lentera-entry{ background:#12180f; border:1px solid #202a1e; border-left:3px solid #7fbf8f;
    border-radius:8px; padding:8px 10px; margin-bottom:6px; font-size:12px; line-height:1.5; }
  .lentera-entry.err{ border-left-color:#e0603f; }
  .lentera-entry.warn{ border-left-color:#e0a94a; }
  .lentera-entry .lentera-meta{ color:#a99f8c; font-size:10px; margin-bottom:3px;
    display:flex; justify-content:space-between; }
  .lentera-entry pre{ margin:0; white-space:pre-wrap; word-break:break-word; color:#eee6d6;
    font-family:'SF Mono',Menlo,monospace; font-size:11.5px; }
  .lentera-cause{ margin-top:8px; background:rgba(201,143,60,0.08);
    border:1px dashed rgba(201,143,60,0.4); border-radius:6px; padding:8px; }
  .lentera-cause .label{ color:#e8b563; font-size:10px; font-weight:700; letter-spacing:0.04em;
    text-transform:uppercase; margin-bottom:4px; display:block; }
  .lentera-cause .fix-text{ font-size:11.5px; color:#a99f8c; margin-top:4px; }
  .lentera-empty{ color:#a99f8c; font-size:12px; text-align:center; padding:40px 20px; }
  `;

  const TRIGGER_SVG = `
  <svg viewBox="0 0 64 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="lnFlameGlow" cx="0.5" cy="0.42" r="0.62">
        <stop offset="0%" stop-color="#fff3d6"/><stop offset="35%" stop-color="#ffb84d"/>
        <stop offset="70%" stop-color="#ff8a3c"/><stop offset="100%" stop-color="#7a3f14" stop-opacity="0.3"/>
      </radialGradient>
      <linearGradient id="lnBrassBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3a2f22"/><stop offset="100%" stop-color="#241a12"/>
      </linearGradient>
      <linearGradient id="lnBrassEdge" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#c98f3c"/><stop offset="50%" stop-color="#e8b563"/><stop offset="100%" stop-color="#c98f3c"/>
      </linearGradient>
    </defs>
    <path d="M24 6 Q32 -4 40 6" stroke="url(#lnBrassEdge)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <rect x="29" y="4" width="6" height="6" rx="1.5" fill="url(#lnBrassEdge)"/>
    <path d="M20 12 L44 12 L38 20 L26 20 Z" fill="url(#lnBrassEdge)"/>
    <rect x="26" y="20" width="12" height="3" fill="#2a1f14"/>
    <rect x="18" y="23" width="28" height="42" rx="4" fill="url(#lnBrassBody)" stroke="url(#lnBrassEdge)" stroke-width="2"/>
    <rect x="21" y="26" width="22" height="36" rx="2.5" fill="#0c0f08" opacity="0.55"/>
    <g class="lentera-flame">
      <ellipse cx="32" cy="46" rx="13" ry="17" fill="url(#lnFlameGlow)"/>
      <path d="M32 34 C36 40 38 45 34 50 C33 47 31 47 30 50 C27 45 28 40 32 34 Z" fill="#fff3d6"/>
    </g>
    <line x1="24" y1="23" x2="24" y2="65" stroke="url(#lnBrassEdge)" stroke-width="1.4"/>
    <line x1="32" y1="23" x2="32" y2="65" stroke="url(#lnBrassEdge)" stroke-width="1.4" opacity="0.5"/>
    <line x1="40" y1="23" x2="40" y2="65" stroke="url(#lnBrassEdge)" stroke-width="1.4"/>
    <path d="M15 65 L49 65 L44 74 L20 74 Z" fill="url(#lnBrassEdge)"/>
    <rect x="26" y="74" width="12" height="5" rx="1.5" fill="url(#lnBrassEdge)"/>
  </svg>`;

  const state = { entries: [], tab: 'all', errorCount: 0, initialized: false };
  let els = {};

  function injectDOM() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    const trigger = document.createElement('button');
    trigger.id = 'lentera-trigger';
    trigger.title = 'Buka Lentera';
    trigger.innerHTML = TRIGGER_SVG;
    document.body.appendChild(trigger);

    const badge = document.createElement('span');
    badge.id = 'lentera-badge';
    badge.textContent = '0';
    document.body.appendChild(badge);

    const panel = document.createElement('div');
    panel.id = 'lentera-panel';
    panel.innerHTML = `
      <div class="lentera-head">
        <span class="flame-dot"></span><b>Lentera</b>
        <button class="lentera-close">✕</button>
      </div>
      <div class="lentera-tabs">
        <button class="active" data-tab="all">Semua</button>
        <button data-tab="error">Error</button>
        <button data-tab="network">Network</button>
      </div>
      <div class="lentera-body"><div class="lentera-empty">Belum ada aktivitas 👋</div></div>
    `;
    document.body.appendChild(panel);

    els = {
      trigger, badge, panel,
      body: panel.querySelector('.lentera-body'),
      tabs: panel.querySelectorAll('.lentera-tabs button'),
      close: panel.querySelector('.lentera-close'),
    };

    trigger.addEventListener('click', () => Lentera.toggle());
    els.close.addEventListener('click', () => Lentera.toggle(false));
    els.tabs.forEach((btn) => {
      btn.addEventListener('click', () => Lentera.switchTab(btn.dataset.tab));
    });
  }

  function render() {
    const list = state.entries.filter((e) => {
      if (state.tab === 'all') return true;
      if (state.tab === 'error') return e.type === 'err';
      if (state.tab === 'network') return e.type === 'network';
      return true;
    });
    if (list.length === 0) {
      els.body.innerHTML = '<div class="lentera-empty">Belum ada aktivitas di tab ini.</div>';
      return;
    }
    els.body.innerHTML = list.slice().reverse().map((e) => {
      let causeHtml = '';
      if (e.cause) {
        causeHtml = `<div class="lentera-cause">
          <span class="label">Kemungkinan penyebab</span>
          <div>${e.cause.cause}</div>
          <div class="fix-text">💡 ${e.cause.fix}</div>
        </div>`;
      }
      return `<div class="lentera-entry ${e.type}">
        <div class="lentera-meta"><span>${e.tag}</span><span>${e.time}</span></div>
        <pre>${e.message}</pre>
        ${causeHtml}
      </div>`;
    }).join('');
  }

  function addEntry(type, tag, message) {
    const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const cause = type === 'err' ? guessCause(message) : null;
    state.entries.push({ type, tag, message, time, cause });
    if (type === 'err') {
      state.errorCount++;
      els.badge.style.display = 'flex';
      els.badge.textContent = state.errorCount;
      els.trigger.classList.add('lentera-alert');
      if (!els.panel.classList.contains('open')) Lentera.toggle(true);
    }
    render();
  }

  function fmt(args) {
    return args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  window.Lentera = {
    init() {
      if (state.initialized) return;
      state.initialized = true;
      injectDOM();

      const orig = { log: console.log, warn: console.warn, error: console.error };
      console.log = function (...args) { addEntry('log', 'LOG', escapeHtml(fmt(args))); orig.log.apply(console, args); };
      console.warn = function (...args) { addEntry('warn', 'WARN', escapeHtml(fmt(args))); orig.warn.apply(console, args); };
      console.error = function (...args) { addEntry('err', 'ERROR', escapeHtml(fmt(args))); orig.error.apply(console, args); };

      window.addEventListener('error', (e) => addEntry('err', 'RUNTIME ERROR', escapeHtml(e.message)));
      window.addEventListener('unhandledrejection', (e) => {
        const msg = e.reason && e.reason.message ? e.reason.message : String(e.reason);
        addEntry('err', 'UNHANDLED REJECTION', 'Unhandled Promise Rejection: ' + escapeHtml(msg));
      });

      const origFetch = window.fetch;
      if (origFetch) {
        window.fetch = function (...args) {
          const url = args[0];
          addEntry('network', 'FETCH →', escapeHtml(String(url)));
          return origFetch.apply(this, args).then((res) => {
            addEntry(res.ok ? 'network' : 'err', 'FETCH ' + res.status, escapeHtml(String(url)));
            return res;
          }).catch((err) => {
            addEntry('err', 'FETCH FAILED', 'Failed to fetch: ' + escapeHtml(String(url)));
            throw err;
          });
        };
      }
    },
    toggle(force) {
      if (!els.panel) return;
      const willOpen = force !== undefined ? force : !els.panel.classList.contains('open');
      els.panel.classList.toggle('open', willOpen);
      if (willOpen) els.trigger.classList.remove('lentera-alert');
    },
    switchTab(tab) {
      state.tab = tab;
      els.tabs.forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
      render();
    },
  };
})();
