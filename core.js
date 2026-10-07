// Core: icons, helpers, charts, shell, router
const D = window.DD;
const S = { booked: new Set(['c1', 'c6']), waitlist: new Set(), att: {}, regStep: 1, topics: new Set(['Kitchen line footwork', 'Dink patience']), rated: {}, skillPick: {}, bookTab: 'group', day: 'All', progSkill: 'drop', chanSel: new Set(['WhatsApp', 'Push']), payMode: 'Cash', assessDecision: 'Pass', venue: 'All venues' };
D.roster.forEach(p => { S.att[p.name] = p.status === 'checked' ? 'P' : ''; S.skillPick[p.name] = new Set(['drop', 'foot']); });

const P = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M22 20a7 7 0 0 0-4-6.3"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  rupee: '<path d="M6 4h12M6 9h12M10 4c4 0 6 2 6 5s-2 5-6 5H6l8 7"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  back: '<path d="M15 6l-6 6 6 6"/>',
  next: '<path d="m9 6 6 6-6 6"/>',
  down: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.01"/>',
  book: '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/>',
  swap: '<path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  msg: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
  log: '<path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
const LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="13" cy="13" rx="7.5" ry="9" fill="#C8E63C" transform="rotate(-35 13 13)"/><path d="M17.5 19.5 25 27.5" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><circle cx="25" cy="8" r="3.4" fill="#fff"/><circle cx="24" cy="7" r=".7" fill="#0E4D45"/><circle cx="26.2" cy="8.6" r=".7" fill="#0E4D45"/></svg>';
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
const lakh = n => '₹' + (n / 100000).toFixed(2).replace(/\.?0+$/, '') + 'L';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const badge = (t, k = '') => `<span class="badge ${k}">${t}</span>`;
const flagKind = f => /Unpaid|overdue|Low|Knee/i.test(f) ? (/Knee/.test(f) ? 'warn' : 'crit') : /First/.test(f) ? 'info' : 'brand';

// ---------- Charts (hand-rolled SVG, hover tooltips via data-tip) ----------
function lineChart(vals, labels, o = {}) {
  const W = o.w || 620, H = o.h || 210, L = 40, R = 16, T = 14, B = 28;
  const min = o.min ?? Math.min(...vals), max = o.max ?? Math.max(...vals);
  const x = i => L + i * (W - L - R) / (vals.length - 1), y = v => T + (1 - (v - min) / (max - min)) * (H - T - B);
  const ticks = o.ticks || [min, (min + max) / 2, max];
  const f = o.fmt || (v => v);
  const grid = ticks.map(t => `<line x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="${L - 8}" y="${y(t) + 4}" text-anchor="end">${f(t)}</text>`).join('');
  const d = vals.map((v, i) => `${i ? 'L' : 'M'}${x(i)} ${y(v)}`).join('');
  const area = `${d}L${x(vals.length - 1)} ${H - B}L${x(0)} ${H - B}Z`;
  const pts = vals.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="4.5" fill="var(--surface)" stroke="var(--series-1)" stroke-width="2"/><rect x="${x(i) - 18}" y="${T}" width="36" height="${H - T - B}" fill="transparent" data-tip="${labels[i]} · ${f(v)}"/>`).join('');
  const xl = labels.map((l, i) => (labels.length <= 8 || i % 2 === 0) ? `<text x="${x(i)}" y="${H - 8}" text-anchor="middle">${l}</text>` : '').join('');
  const last = vals.length - 1;
  return `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.label || 'Line chart'}">${grid}<path d="${area}" fill="var(--series-1)" opacity=".08"/><path d="${d}" fill="none" stroke="var(--series-1)" stroke-width="2.25" stroke-linejoin="round"/>${pts}${xl}<text x="${x(last)}" y="${y(vals[last]) - 12}" text-anchor="end" style="fill:var(--ink);font-weight:700;font-size:12px">${f(vals[last])}</text></svg></div>`;
}
function barChart(vals, labels, o = {}) {
  const W = 620, H = o.h || 220, L = 48, R = 12, T = 18, B = 28;
  const max = o.max || Math.max(...vals) * 1.12, f = o.fmt || (v => v);
  const bw = (W - L - R) / vals.length, y = v => T + (1 - v / max) * (H - T - B);
  const ticks = [0, max / 2, max];
  const grid = ticks.map(t => `<line x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="${L - 8}" y="${y(t) + 4}" text-anchor="end">${(o.axis || f)(t)}</text>`).join('');
  const bars = vals.map((v, i) => { const bx = L + i * bw + bw * .22, w = bw * .56, by = y(v), h = H - B - by, r = Math.min(4, h);
    const hl = o.highlight === i || (o.highlight === undefined && i === vals.length - 1);
    return `<path d="M${bx} ${H - B}V${by + r}Q${bx} ${by} ${bx + r} ${by}H${bx + w - r}Q${bx + w} ${by} ${bx + w} ${by + r}V${H - B}Z" fill="${hl ? 'var(--series-1)' : 'var(--series-2)'}" data-tip="${labels[i]} · ${f(v)}"/><text x="${bx + w / 2}" y="${H - 8}" text-anchor="middle">${labels[i]}</text>${hl ? `<text x="${bx + w / 2}" y="${by - 6}" text-anchor="middle" style="fill:var(--ink);font-weight:700;font-size:12px">${f(v)}</text>` : ''}`; }).join('');
  return `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.label || 'Bar chart'}">${grid}${bars}</svg></div>`;
}
function radar(now, then, o = {}) {
  const sk = D.skills, n = sk.length, C = 170, R = 112, W = 340, max = 5;
  const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [C + Math.cos(a) * R * v / max, C + Math.sin(a) * R * v / max]; };
  const rings = [1, 2, 3, 4, 5].map(r => `<polygon points="${sk.map((_, i) => pt(i, r).join(',')).join(' ')}" fill="none" stroke="var(--line)"/>`).join('');
  const spokes = sk.map((_, i) => `<line x1="${C}" y1="${C}" x2="${pt(i, 5)[0]}" y2="${pt(i, 5)[1]}" stroke="var(--line)"/>`).join('');
  const poly = (vals, st) => `<polygon points="${sk.map((s, i) => pt(i, vals[s.id]).join(',')).join(' ')}" ${st}/>`;
  const labels = sk.map((s, i) => { const [lx, ly] = pt(i, 6.15); const anchor = Math.abs(lx - C) < 8 ? 'middle' : lx > C ? 'start' : 'end'; return `<text x="${lx}" y="${ly + 4}" text-anchor="${anchor}">${s.short}</text>`; }).join('');
  const dots = sk.map((s, i) => { const [px, py] = pt(i, now[s.id]); return `<circle cx="${px}" cy="${py}" r="4" fill="var(--series-1)" stroke="var(--surface)" stroke-width="2"/><circle cx="${px}" cy="${py}" r="12" fill="transparent" data-tip="${s.name}: ${now[s.id].toFixed(1)}${then ? ' (was ' + then[s.id].toFixed(1) + ')' : ''}"/>`; }).join('');
  return `<div class="chart" style="max-width:${o.max || 420}px;margin:0 auto"><svg viewBox="-60 -10 460 360" role="img" aria-label="Skill radar">${rings}${spokes}${then ? poly(then, 'fill="none" stroke="var(--faint)" stroke-width="1.5" stroke-dasharray="4 4"') : ''}${poly(now, 'fill="var(--series-1)" fill-opacity=".14" stroke="var(--series-1)" stroke-width="2"')}${dots}${labels}</svg></div>`;
}
function hbar(label, v, max, right, k) {
  return `<div class="stack" style="gap:6px"><div class="row between small"><span style="font-weight:600">${label}</span><span class="num muted">${right}</span></div><div class="bar"><i style="width:${Math.min(100, v / max * 100)}%;${k ? 'background:var(--' + k + ')' : ''}"></i></div></div>`;
}

// ---------- Roles + nav ----------
const ROLES = {
  player: { label: 'Player', who: D.me.name, init: D.me.initials, nav: [['home', 'Home', 'home'], ['book', 'Book', 'cal'], ['sessions', 'My sessions', 'list'], ['progress', 'Progress', 'chart'], ['pay', 'Payments', 'wallet'], ['profile', 'Profile', 'user']], bottom: ['home', 'book', 'progress', 'pay', 'profile'] },
  parent: { label: 'Parent', who: 'Sunita Sharma', init: 'SS', nav: [['home', 'Home', 'home'], ['progress', "Aarav's progress", 'chart'], ['pay', 'Payments', 'wallet'], ['consent', 'Consent and safety', 'shield']] },
  coach: { label: 'Coach', who: 'Neha Iyer', init: 'NI', nav: [['today', 'Today', 'home'], ['class', 'Attendance', 'check'], ['log', 'Session log', 'clip'], ['players', 'My players', 'users'], ['schedule', 'Schedule', 'cal'], ['earnings', 'Earnings', 'rupee']], bottom: ['today', 'class', 'log', 'players', 'more'] },
  head: { label: 'Head Coach', who: 'Arjun Mehta', init: 'AM', nav: [['overview', 'Overview', 'grid'], ['batches', 'Batches', 'cal'], ['assess', 'Assessments', 'star'], ['programme', 'Programme', 'book'], ['coaches', 'Coach quality', 'users'], ['risk', 'At-risk players', 'alert']], bottom: ['overview', 'batches', 'assess', 'coaches', 'more'] },
  venue: { label: 'Venue Manager', who: 'Priya Nair', init: 'PN', nav: [['desk', 'Desk', 'home'], ['payment', 'Record payment', 'rupee'], ['walkin', 'Walk-in sign-up', 'plus'], ['cashup', 'Daily cash-up', 'wallet']] },
  admin: { label: 'Super Admin', who: 'Momentum Sports', init: 'MS', nav: [['dash', 'Dashboard', 'grid'], ['finance', 'Finance', 'rupee'], ['pricing', 'Pricing and policies', 'sliders'], ['staff', 'Staff', 'users'], ['venues', 'Venues', 'building'], ['comms', 'Communications', 'send'], ['audit', 'Audit log', 'shield']], bottom: ['dash', 'finance', 'pricing', 'comms', 'more'] }
};
const SCREENS = {}; // filled by screens files: SCREENS['player/home'] = (arg) => ({title, html})

function shell(role, screen, view) {
  const R = ROLES[role];
  const side = R.nav.map(([id, l, i]) => `<a class="nav-item ${id === screen ? 'on' : ''}" href="#/${role}/${id}">${ic(i)}${l}</a>`).join('');
  const bottomIds = R.bottom || R.nav.map(n => n[0]).slice(0, 5);
  const bottom = bottomIds.map(id => { if (id === 'more') return `<a href="javascript:void 0" data-act="more">${ic('more')}More</a>`; const n = R.nav.find(x => x[0] === id); return `<a class="${id === screen ? 'on' : ''}" href="#/${role}/${id}">${ic(n[2])}${n[1].replace("Aarav's ", '').replace('Consent and safety', 'Consent').replace('Record payment', 'Payment').replace('Walk-in sign-up', 'Walk-in').replace('Daily cash-up', 'Cash-up')}</a>`; }).join('');
  return `<div class="proto">Prototype for internal review · sample data and placeholder prices · <a href="#/">Switch role</a></div>
  <div class="shell"><aside class="side"><div class="brand"><div class="logo">${LOGO}</div><div><b>Dink Dynamics</b><span>by Momentum Sports</span></div></div>${side}
  <div class="role-box"><div class="row"><div class="avatar sm">${R.init}</div><div class="col"><b class="small">${R.who}</b><span class="tiny muted">${R.label}</span></div></div><a class="link tiny" href="#/" style="display:inline-block;margin-top:8px">Switch role</a></div></aside>
  <div class="main"><header class="topbar"><div class="t-left"><div class="logo">${LOGO}</div><div class="t-title">${view.title}</div></div><div class="t-right">${view.actions || ''}<button class="icon-btn" data-act="toast" data-arg="3 new notifications (sample)" aria-label="Notifications">${ic('bell')}<span class="dot"></span></button><div class="avatar sm">${R.init}</div></div></header>
  <div class="page">${view.html}</div></div></div><nav class="bottom">${bottom}</nav>`;
}

function landing() {
  const cards = [
    ['player', 'user', 'Player', 'Riya, L2 Developing', ['Book and manage classes', 'Session notes and homework', 'Skill progress and level path', 'Packages, credits, invoices']],
    ['parent', 'shield', 'Parent', 'Sunita, parent of Aarav (12)', ['Child’s schedule and attendance', 'Coach feedback and progress', 'Pay fees, consent and medical']],
    ['coach', 'clip', 'Coach', 'Neha, Andheri and Powai', ['Today’s classes courtside', 'One-tap attendance', 'Session log in under a minute', 'Earnings statement']],
    ['head', 'star', 'Head Coach', 'Arjun, all venues', ['Coach quality oversight', 'Batch builder', 'Level-up assessments', 'Programme and rubrics']],
    ['venue', 'building', 'Venue Manager', 'Priya, Andheri West desk', ['Court board and check-ins', 'Record cash and UPI', 'Walk-in sign-up', 'Daily cash-up']],
    ['admin', 'grid', 'Super Admin', 'Momentum Sports', ['Business dashboard', 'Finance, GST and payouts', 'Pricing and policies', 'Staff, venues, comms']]
  ];
  const home = { player: 'home', parent: 'home', coach: 'today', head: 'overview', venue: 'desk', admin: 'dash' };
  return `<div class="proto">Prototype for internal review · sample data and placeholder prices</div><div class="landing">
  <div class="land-head"><div class="logo">${LOGO}</div><div><h1>Dink Dynamics</h1><p class="muted">Pickleball academy platform · by Momentum Sports</p></div></div>
  <p class="muted" style="max-width:640px;margin:14px 0 24px">Clickable UI mockup for internal review. Pick a role to walk through its screens. Resize your browser or open on a phone to see the mobile layout. Nothing is saved; all names, prices and numbers are placeholders.</p>
  <div class="grid g3">${cards.map(([r, i, t, s, l]) => `<a class="card role-card" href="#/${r}/${home[r]}"><div class="row"><div class="ic">${ic(i)}</div><div class="col"><h3>${t}</h3><span class="small muted">${s}</span></div></div><ul>${l.map(x => `<li>${x}</li>`).join('')}</ul><span class="link">Open ${t.toLowerCase()} view →</span></a>`).join('')}
  <a class="card role-card" href="#/register"><div class="row"><div class="ic">${ic('plus')}</div><div class="col"><h3>New player sign-up</h3><span class="small muted">Registration flow</span></div></div><ul><li>Mobile OTP</li><li>Profile and experience</li><li>Waiver and parent consent</li><li>Book a trial class</li></ul><span class="link">Open sign-up →</span></a></div>
  <div class="note" style="margin-top:24px"><b>Review tip:</b> leave feedback per screen using the screen name in the top bar (for example “Coach · Session log”). Brand colours, logo, prices and level names will change once confirmed.</div></div>`;
}

// ---------- Overlays ----------
function sheet(html) { closeSheet(); const d = document.createElement('div'); d.className = 'scrim'; d.id = 'scrim'; d.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`; d.addEventListener('click', e => { if (e.target === d) closeSheet(); }); document.body.appendChild(d); }
function closeSheet() { const s = document.getElementById('scrim'); if (s) s.remove(); }
function toast(t) { const o = document.querySelector('.toast'); if (o) o.remove(); const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 2600); }
const sheetHead = (t, sub) => `<div class="row between"><div class="col"><h2>${t}</h2>${sub ? `<span class="small muted">${sub}</span>` : ''}</div><button class="icon-btn" data-act="close" aria-label="Close">${ic('x')}</button></div>`;

// ---------- Router ----------
function render() {
  const h = location.hash.replace(/^#\/?/, '');
  const app = document.getElementById('app');
  closeSheet();
  if (!h) { app.innerHTML = landing(); document.title = 'Dink Dynamics · UI mockup'; return; }
  if (h === 'register') { app.innerHTML = SCREENS.register(); document.title = 'Sign up · Dink Dynamics'; return; }
  const [role, screen, arg] = h.split('/');
  const fn = SCREENS[`${role}/${screen}`];
  if (!ROLES[role] || !fn) { location.hash = '#/'; return; }
  const view = fn(arg);
  app.innerHTML = shell(role, screen, view);
  document.title = `${ROLES[role].label} · ${view.title} · Dink Dynamics`;
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);

// ---------- Global interactions ----------
const ACTS = {
  close: closeSheet,
  toast: (a) => toast(a),
  go: (a) => { location.hash = a; },
  more: () => { const role = location.hash.split('/')[1]; const R = ROLES[role]; const shown = R.bottom || []; sheet(sheetHead('More') + `<div class="card pad-0 list">${R.nav.filter(n => !shown.includes(n[0])).map(([id, l, i]) => `<a class="li" href="#/${role}/${id}"><span class="icon-btn" style="width:28px;height:28px">${ic(i)}</span><span class="grow ttl">${l}</span>${ic('next').replace('<svg', '<svg style="width:18px;color:var(--faint)"')}</a>`).join('')}</div>`); }
};
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  e.preventDefault();
  const f = ACTS[t.dataset.act];
  if (f) f(t.dataset.arg, t);
});
// tooltips
const tip = document.createElement('div'); tip.className = 'tip'; document.body.appendChild(tip);
document.addEventListener('mouseover', e => { const t = e.target.closest('[data-tip]'); if (!t) { tip.style.opacity = 0; return; } tip.textContent = t.dataset.tip; tip.style.opacity = 1; });
document.addEventListener('mousemove', e => { tip.style.left = Math.min(e.clientX + 12, innerWidth - tip.offsetWidth - 8) + 'px'; tip.style.top = (e.clientY - 36) + 'px'; });
document.addEventListener('DOMContentLoaded', render);
