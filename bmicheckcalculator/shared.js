/* shared.js — common utilities for all BMICalc pages */
'use strict';

// ===== THEME =====
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}
if (localStorage.getItem('theme') === 'dark') applyTheme('dark');

// ===== PROGRESS BAR =====
window.addEventListener('DOMContentLoaded', () => {
  const pb = document.getElementById('progress-bar');
  if (!pb) return;
  pb.style.width = '70%';
  setTimeout(() => { pb.style.width = '100%'; setTimeout(() => pb.style.opacity = '0', 200); }, 300);
});

// ===== TOAST =====
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ===== FAQ TOGGLE =====
function toggleFAQ(index) {
  const btn = document.getElementById('faq-q-' + index);
  const ans = document.getElementById('faq-a-' + index);
  if (!btn || !ans) return;
  const isOpen = ans.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}

// ===== COPY LINK =====
function copyLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast('✓ Link copied to clipboard!'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = url; ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✓ Link copied!');
  }
}

// ===== UNIT TOGGLE HELPER =====
function setupUnitToggle(unit, metricIds, imperialIds, metricBtnId, imperialBtnId) {
  const setUnit = (u) => {
    metricIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = u === 'metric' ? '' : 'none';
    });
    imperialIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = u === 'imperial' ? '' : 'none';
    });
    const mb = document.getElementById(metricBtnId);
    const ib = document.getElementById(imperialBtnId);
    if (mb) { mb.classList.toggle('active', u === 'metric'); mb.setAttribute('aria-pressed', u === 'metric'); }
    if (ib) { ib.classList.toggle('active', u === 'imperial'); ib.setAttribute('aria-pressed', u === 'imperial'); }
  };
  setUnit(unit);
  return setUnit;
}

// ===== CLEAR ERRORS =====
function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('visible'));
  document.querySelectorAll('.input-field').forEach(f => f.classList.remove('error'));
}
function showFieldError(msgId, inputId) {
  const msg = document.getElementById(msgId);
  const inp = document.getElementById(inputId);
  if (msg) msg.classList.add('visible');
  if (inp) { inp.classList.add('error'); inp.focus(); }
}

// ===== ENTER KEY =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.input-field').forEach(el => {
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const calcFn = window.calculateMain || window.calculate;
        if (typeof calcFn === 'function') calcFn();
      }
    });
  });
});
