// Player, parent and registration screens
const me = D.me;

function sessionLi(s) {
  const [dow, d] = s.day.split(' ');
  return `<div class="li"><div class="datebox"><span>${dow}</span><b>${d}</b></div><div class="grow"><div class="ttl">${s.title}</div><div class="sub">${s.time} · ${s.court}, ${s.venue}</div><div class="sub">Coach ${s.coach}</div></div>${badge(s.status, /Wait/.test(s.status) ? 'warn' : 'good')}</div>`;
}

SCREENS['player/home'] = () => {
  const n = D.nextSessions[0], h = D.history[0];
  return { title: 'Home', html: `
  <div class="page-head"><div><h1>Good morning, Riya</h1><p class="muted">${D.today} · ${me.venue}</p></div></div>
  <div class="card hero stack"><div class="row between"><span class="badge lime">Next session · tomorrow</span><span class="small muted">${n.court}</span></div>
    <div><h2 style="font-size:22px">${n.title.replace('L2 Group · ', '')}</h2><p class="muted" style="margin-top:4px">${n.day} · ${n.time} · Coach ${n.coach}</p></div>
    <div class="row wrap"><button class="btn lime" data-act="qr">${ic('qr')}Check-in QR</button><button class="btn ghost" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.35)" data-act="cancelSheet">Cancel or reschedule</button></div></div>
  <div class="grid g4">
    <div class="card stat"><span class="l">Session credits</span><span class="v">${me.credits}<span class="muted" style="font-size:16px"> / ${me.creditsTotal}</span></span><span class="d muted">Expire ${me.expiry}</span></div>
    <div class="card stat"><span class="l">Attendance, last 30 days</span><span class="v">${me.attendance}%</span><span class="d up">▲ 6 pts vs September</span></div>
    <div class="card stat"><span class="l">Current streak</span><span class="v">${me.streak} sessions</span><span class="d muted">Best: 9</span></div>
    <div class="card stat"><span class="l">Level</span><span class="v">L2 · ${me.rating}</span><div class="bar" style="margin-top:4px"><i style="width:${me.progressToNext}%"></i></div><span class="d muted">${me.progressToNext}% of the way to L3</span></div>
  </div>
  <div class="split">
    <div class="card"><div class="card-head"><h3>Latest from your coach</h3><a href="#/player/session/${h.id}">Open session</a></div>
      <div class="row" style="align-items:flex-start"><div class="avatar sm alt">NI</div><div class="col" style="gap:6px"><span class="small"><b>${h.coach}</b> <span class="muted">· ${h.date} · ${h.title.replace('L2 Group · ', '')}</span></span><p>${h.note}</p>
      <div class="row wrap" style="gap:6px;margin-top:4px">${h.ratings.map(r => badge(`${r.skill} ${r.from.toFixed(1)} → ${r.to.toFixed(1)}`, 'good')).join('')}</div>
      <div class="note" style="margin-top:8px">${ic('video').replace('<svg', '<svg style="width:16px;vertical-align:-3px;margin-right:6px"')}<b>Homework:</b> ${h.drill.name}</div></div></div></div>
    <div class="card pad-0"><div class="card-head" style="padding:16px 16px 0"><h3>Upcoming</h3><a href="#/player/book">Book more</a></div><div class="list">${D.nextSessions.map(sessionLi).join('')}</div></div>
  </div>
  <div class="card row" style="align-items:flex-start"><span class="badge lime">Event</span><div class="col"><b>Diwali Doubles Social · Sun 1 Nov, Powai</b><span class="small muted">Mixed doubles round robin for L2 and L3. Register by 25 Oct. Sample announcement.</span></div><button class="btn sm" style="margin-left:auto" data-act="toast" data-arg="Registered for Diwali Doubles Social">Register</button></div>` };
};

SCREENS['player/book'] = () => {
  const days = ['All', 'Fri 9 Oct', 'Sat 10 Oct', 'Sun 11 Oct', 'Mon 12 Oct'];
  const list = D.classes.filter(c => S.day === 'All' || c.day === S.day);
  const group = list.map(c => {
    const booked = S.booked.has(c.id), wl = S.waitlist.has(c.id), full = c.seats === 0;
    const btn = booked ? `<button class="btn sm ghost" data-act="toast" data-arg="Already booked — manage it from Home">${ic('check')}Booked</button>` : wl ? `<button class="btn sm ghost">On waitlist #2</button>` : full ? `<button class="btn sm ghost" data-act="waitlist" data-arg="${c.id}">Join waitlist</button>` : `<button class="btn sm" data-act="bookSheet" data-arg="${c.id}">Book</button>`;
    return `<div class="card stack" style="gap:10px"><div class="row between"><div class="row" style="gap:8px">${badge(c.level, 'brand')}<span class="small muted">${c.day} · ${c.time} · ${c.len}</span></div>${full ? badge('Full', 'crit') : c.seats <= 2 ? badge(c.seats + ' left', 'warn') : badge(c.seats + ' seats', 'good')}</div>
      <div><h3>${c.title}</h3><p class="small muted">Coach ${c.coach} · ${c.venue}</p></div><div class="bar"><i style="width:${(c.cap - c.seats) / c.cap * 100}%"></i></div><div class="row between"><span class="tiny muted">${c.cap - c.seats} of ${c.cap} booked</span>${btn}</div></div>`;
  }).join('') || '<div class="empty-state">No classes that day.</div>';
  const slots = ['6:30 am', '7:30 am', '9:00 am', '5:00 pm', '6:30 pm', '8:00 pm'];
  const priv = `<div class="card stack"><h3>1. Choose a coach</h3><div class="chips">${D.coaches.slice(0, 4).map((c, i) => `<button class="chip ${i === 0 ? 'on' : ''}">${c.name}</button>`).join('')}</div>
    <h3>2. Pick a slot · Wed 14 Oct</h3><div class="grid" style="grid-template-columns:repeat(3,1fr);gap:8px">${slots.map((s, i) => `<button class="chip ${i === 4 ? 'on' : ''}" ${i === 1 || i === 3 ? 'disabled style="opacity:.4;text-decoration:line-through"' : ''}>${s}</button>`).join('')}</div>
    <div class="row between"><span class="small muted">Private lesson · 60 min · ${inr(2200)} or 1 private credit</span><button class="btn" data-act="toast" data-arg="Request sent to Arjun Mehta — confirmation on WhatsApp">Request booking</button></div></div>`;
  return { title: 'Book', html: `
  <div class="page-head"><div><h1>Book a session</h1><p class="muted">You have ${me.credits} credits · free cancellation up to 12 hours before</p></div>
  <div class="seg"><button class="${S.bookTab === 'group' ? 'on' : ''}" data-act="bookTab" data-arg="group">Group classes</button><button class="${S.bookTab === 'private' ? 'on' : ''}" data-act="bookTab" data-arg="private">Private lesson</button></div></div>
  ${S.bookTab === 'group' ? `<div class="row wrap"><div class="chips" style="flex:1">${days.map(d => `<button class="chip ${S.day === d ? 'on' : ''}" data-act="day" data-arg="${d}">${d}</button>`).join('')}</div><select style="width:auto"><option>All venues</option>${D.venues.map(v => `<option>${v.name}</option>`).join('')}</select><label class="check small"><input type="checkbox" checked>My level only</label></div>
  <div class="grid g3">${group}</div>
  <div class="card row"><span class="icon-btn">${ic('cal')}</span><div class="col"><b>Fixed batch</b><span class="small muted">Book Mon, Wed and Fri 7:00 am every week until your package ends.</span></div><button class="btn sm ghost" style="margin-left:auto" data-act="toast" data-arg="Recurring booking set: Mon/Wed/Fri 7:00 am">Set up</button></div>` : priv}` };
};

SCREENS['player/sessions'] = () => ({ title: 'My sessions', html: `
  <div class="page-head"><div><h1>My sessions</h1><p class="muted">${me.sessions} sessions since ${me.since} · ${me.attendance}% attendance</p></div><div class="seg"><button class="on">Past</button><button data-act="go" data-arg="#/player/home">Upcoming</button></div></div>
  <div class="card"><div class="card-head"><h3>Attendance · last 8 weeks</h3><div class="legend"><span><i style="background:var(--good)"></i>Present</span><span><i style="background:var(--warn)"></i>Late</span><span><i style="background:var(--crit)"></i>Absent</span></div></div>${attendanceStrip()}</div>
  <div class="card pad-0 list">${D.history.map(h => { const [dow, d] = h.date.split(' '); return `<a class="li" href="#/player/session/${h.id}"><div class="datebox"><span>${dow}</span><b>${d}</b></div><div class="grow"><div class="ttl">${h.title}</div><div class="sub">Coach ${h.coach}${h.ratings.length ? ' · ' + h.ratings.length + ' skill update' + (h.ratings.length > 1 ? 's' : '') : ''}</div></div>${badge(h.status, h.status === 'Present' ? 'good' : h.status === 'Late' ? 'warn' : 'crit')}${ic('next').replace('<svg', '<svg style="width:18px;color:var(--faint)"')}</a>`; }).join('')}</div>` });

function attendanceStrip() {
  const pat = 'PPAPPPLPPPPAPPPLPPPPPPPP'.split('');
  const col = { P: 'var(--good)', L: 'var(--warn)', A: 'var(--crit)' }, name = { P: 'Present', L: 'Late', A: 'Absent' };
  return `<div style="display:grid;grid-template-columns:repeat(24,1fr);gap:4px">${pat.map((s, i) => `<div style="aspect-ratio:1;border-radius:4px;background:${col[s]};opacity:${s === 'P' ? .85 : 1}" data-tip="Session ${i + 1} · ${name[s]}"></div>`).join('')}</div><div class="row between tiny muted" style="margin-top:6px"><span>14 Aug</span><span>5 Oct</span></div>`;
}

SCREENS['player/session'] = (id) => {
  const h = D.history.find(x => x.id === id) || D.history[0];
  return { title: 'Session detail', actions: `<a class="icon-btn" href="#/player/sessions" aria-label="Back">${ic('back')}</a>`, html: `
  <div class="page-head"><div><span class="small muted">${h.date} · Coach ${h.coach}</span><h1>${h.title}</h1></div>${badge(h.status, h.status === 'Present' ? 'good' : h.status === 'Late' ? 'warn' : 'crit')}</div>
  ${h.status === 'Absent' ? `<div class="card empty-state">You missed this session. ${badge('1 credit used · late cancellation', 'warn')}<p style="margin-top:10px">Make-up classes this week: <a class="link" href="#/player/book">see open L2 slots</a></p></div>` : `
  <div class="split"><div class="stack">
    <div class="card"><h3 style="margin-bottom:10px">What we covered</h3><div class="row wrap" style="gap:8px">${h.covered.map(c => badge(c, 'brand')).join('')}</div></div>
    <div class="card"><div class="row" style="align-items:flex-start"><div class="avatar sm alt">${h.coach.split(' ').map(x => x[0]).join('')}</div><div class="col" style="gap:6px"><b class="small">Coach's note</b><p>${h.note}</p></div></div></div>
    ${h.drill ? `<div class="card stack"><h3>Homework drill</h3><div style="aspect-ratio:16/9;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-2));display:grid;place-items:center;color:#fff">${ic('video').replace('<svg', '<svg style="width:44px;height:44px"')}</div><div class="row between"><div class="col"><b>${h.drill.name}</b><span class="small muted">${h.drill.video}</span></div><button class="btn sm ghost" data-act="toast" data-arg="Marked as done — your coach will see it">${ic('check')}Mark done</button></div></div>` : ''}
  </div><div class="stack">
    <div class="card"><h3 style="margin-bottom:12px">Skill updates</h3>${h.ratings.map(r => `<div class="stack" style="gap:6px;margin-bottom:12px"><div class="row between small"><b>${r.skill}</b><span class="num"><span class="muted">${r.from.toFixed(1)}</span> → <b class="up">${r.to.toFixed(1)}</b></span></div><div class="bar"><i style="width:${r.to / 5 * 100}%"></i></div></div>`).join('')}<a class="link" href="#/player/progress">See full progress →</a></div>
    <div class="card stack"><h3>Rate this session</h3><div class="rate">${[1, 2, 3, 4, 5].map(n => `<button class="${n <= 4 ? 'on' : ''}" data-act="toast" data-arg="Thanks — rating saved">${n}</button>`).join('')}</div><textarea placeholder="Ask your coach a question or leave a comment"></textarea><button class="btn" data-act="toast" data-arg="Sent to Coach Neha">Send to coach</button></div>
  </div></div>`}` };
};

SCREENS['player/progress'] = (arg, who) => {
  const p = who || me;
  const sk = D.skills.find(s => s.id === S.progSkill);
  const trend = S.progSkill === 'drop' ? me.dropTrend : Array.from({ length: 8 }, (_, i) => +(me.skillsThen[S.progSkill] + (me.skillsNow[S.progSkill] - me.skillsThen[S.progSkill]) * i / 7 + (i % 3 === 1 ? -.05 : 0)).toFixed(1));
  const rows = D.skills.map(s => { const n = me.skillsNow[s.id], t = me.skillsThen[s.id], d = n - t; return `<div class="stack" style="gap:5px"><div class="row between small"><span style="font-weight:600">${s.name}</span><span class="num"><b>${n.toFixed(1)}</b> <span class="${d > 0 ? 'up' : 'muted'}" style="font-weight:700">${d > 0 ? '+' : ''}${d.toFixed(1)}</span></span></div><div class="bar"><i style="width:${n / 5 * 100}%;${n < 3 ? 'background:var(--warn)' : ''}"></i></div></div>`; }).join('');
  return { title: who ? "Aarav's progress" : 'Progress', html: `
  <div class="page-head"><div><h1>${who ? "Aarav's progress" : 'Your progress'}</h1><p class="muted">Ratings are 1–5, averaged over your recent sessions</p></div></div>
  <div class="card hero stack"><div class="row between"><div class="col"><span class="small muted">Current level</span><h2 style="font-size:24px">L2 · Developing</h2></div><div class="col" style="text-align:right"><span class="small muted">Approx. rating</span><b style="font-size:22px">3.0</b></div></div>
    <div><div class="row between small" style="margin-bottom:6px"><span>Progress to L3 Intermediate</span><b>${me.progressToNext}%</b></div><div class="bar"><i style="width:${me.progressToNext}%"></i></div></div>
    <p class="small muted">To be assessment-ready: third-shot drop, volleys and strategy need 3.5 or above. Next assessment window: early November.</p></div>
  <div class="card"><div class="ladder">${D.levels.map((l, i) => `<div class="${i === 0 ? 'done' : i === 1 ? 'cur' : ''}"><div class="step"></div><b>${l.id}</b><span>${l.name}</span></div>`).join('')}</div></div>
  <div class="grid g2">
    <div class="card"><div class="card-head"><h3>Skill profile</h3><div class="legend"><span><i style="background:var(--series-1)"></i>Now</span><span><i style="background:transparent;border:1.5px dashed var(--faint)"></i>6 weeks ago</span></div></div>${radar(me.skillsNow, me.skillsThen, { max: 460 })}</div>
    <div class="card stack" style="gap:12px"><h3>All skills</h3>${rows}</div>
  </div>
  <div class="card"><div class="card-head"><h3>${sk.name} · last 8 sessions</h3></div><div class="chips" style="margin-bottom:10px">${D.skills.map(s => `<button class="chip ${s.id === S.progSkill ? 'on' : ''}" data-act="progSkill" data-arg="${s.id}">${s.short}</button>`).join('')}</div>${lineChart(trend, me.dropDates, { min: 1, max: 5, ticks: [1, 2, 3, 4, 5], fmt: v => (+v).toFixed(1), label: sk.name + ' trend', w: 1000, h: 240 })}</div>
  <div class="grid g2">
    <div class="card"><h3 style="margin-bottom:10px">Coach feedback</h3><div class="stack">${D.feedback.map(f => `<div class="row" style="align-items:flex-start"><div class="avatar sm alt">${f.from.split(' ').map(x => x[0]).join('')}</div><div class="col"><span class="small"><b>${f.from}</b> <span class="muted">· ${f.role} · ${f.date}</span></span><p>${f.text}</p></div></div>`).join('')}</div></div>
    <div class="card"><h3 style="margin-bottom:10px">Level history</h3><div class="list"><div class="li" style="padding:10px 0"><div class="grow"><div class="ttl">L1 → L2 Developing</div><div class="sub">Passed 18 Aug 2026 · assessed by Arjun Mehta</div></div><button class="btn sm ghost" data-act="toast" data-arg="Certificate downloaded (sample)">${ic('down')}Certificate</button></div><div class="li" style="padding:10px 0"><div class="grow"><div class="ttl">Started at L1 Foundation</div><div class="sub">Trial class 9 Jun 2026 · placed by Neha Iyer</div></div></div></div></div>
  </div>` };
};

SCREENS['player/pay'] = (arg, who) => ({ title: 'Payments', html: `
  <div class="page-head"><div><h1>Payments</h1><p class="muted">${who ? 'Paying for Aarav · ' : ''}UPI, cards and netbanking via Razorpay</p></div></div>
  <div class="grid g3">
    <div class="card hero stack"><span class="small muted">Credits wallet</span><div><b style="font-size:30px">${me.credits}</b><span class="muted"> of ${me.creditsTotal} left</span></div><div class="bar"><i style="width:${me.credits / me.creditsTotal * 100}%"></i></div><span class="small muted">Monthly batch · expires ${me.expiry}</span></div>
    <div class="card stat"><span class="l">Amount due</span><span class="v">₹0</span><span class="d up">All clear</span></div>
    <div class="card stat"><span class="l">Next AutoPay</span><span class="v">${inr(6500)}</span><span class="d muted">1 Nov 2026 · UPI mandate · <a class="link" href="#" data-act="toast" data-arg="AutoPay paused (sample)">Pause</a></span></div>
  </div>
  <div><h2 style="margin-bottom:12px">Buy a package</h2><div class="grid g4">${D.packages.map(p => `<div class="card stack" style="gap:8px">${p.tag ? badge(p.tag, 'lime') : '<span style="height:22px"></span>'}<h3>${p.name}</h3><b style="font-size:22px">${inr(p.price)}</b><span class="small muted">${p.note}</span><span class="tiny faint">Incl. GST · sample price</span><button class="btn block" data-act="buy" data-arg="${p.id}">Buy</button></div>`).join('')}</div></div>
  <div class="card pad-0"><div class="card-head" style="padding:16px 16px 0"><h3>Invoices and receipts</h3></div><div class="table-wrap"><table><thead><tr><th>Date</th><th>Invoice</th><th>Item</th><th>Mode</th><th class="r">Amount</th><th></th></tr></thead><tbody>${D.invoices.map(i => `<tr><td>${i.date}</td><td class="num">${i.no}</td><td>${i.item}</td><td>${i.mode}</td><td class="r num"><b>${inr(i.amount)}</b></td><td><button class="icon-btn" data-act="toast" data-arg="GST invoice ${i.no} downloaded (sample)" aria-label="Download">${ic('down')}</button></td></tr>`).join('')}</tbody></table></div></div>` });

SCREENS['player/profile'] = () => ({ title: 'Profile', html: `
  <div class="card row"><div class="avatar lg">${me.initials}</div><div class="col"><h2>${me.name}</h2><span class="muted small">Member since ${me.since} · ${me.venue}</span><div class="row" style="gap:6px;margin-top:4px">${badge('L2 Developing', 'brand')}${badge('DUPR 3.02 · linked', '')}</div></div><button class="btn sm ghost" style="margin-left:auto" data-act="toast" data-arg="Edit profile (sample)">Edit</button></div>
  <div class="grid g2">
    <div class="card"><h3 style="margin-bottom:12px">Details</h3><dl class="kv"><dt>Mobile</dt><dd>${me.phone}</dd><dt>Email</dt><dd>riya.s@example.com</dd><dt>Date of birth</dt><dd>14 Mar 1994</dd><dt>Plays with</dt><dd>Right hand</dd><dt>Home venue</dt><dd>${me.venue}</dd><dt>Main coach</dt><dd>${me.coach}</dd><dt>Goal</dt><dd>Competitive · club tournaments</dd></dl></div>
    <div class="card"><h3 style="margin-bottom:12px">Safety</h3><dl class="kv"><dt>Emergency contact</dt><dd>Amit Sharma · +91 98XXX XX761</dd><dt>Medical declaration</dt><dd>${badge('Updated 9 Jun', 'good')}</dd><dt>Waiver</dt><dd>${badge('Signed 9 Jun', 'good')}</dd><dt>Injury notes for coaches</dt><dd>None</dd></dl></div>
    <div class="card"><h3 style="margin-bottom:12px">Notifications</h3><div class="stack">${['Class reminders · WhatsApp', 'Coach feedback posted · push', 'Package expiring · WhatsApp + email', 'Academy announcements · push'].map(n => `<label class="check"><input type="checkbox" checked>${n}</label>`).join('')}</div></div>
    <div class="card stack"><h3>Family</h3><div class="row"><div class="avatar sm alt">AS</div><div class="col"><b class="small">Aarav Sharma · 12</b><span class="tiny muted">Junior · L1 Foundation · parent: Sunita Sharma</span></div><a class="btn sm ghost" style="margin-left:auto" href="#/parent/home">Switch</a></div><a class="link small" href="#/register">See the new-player sign-up flow →</a></div>
  </div>` });

// ---------- Parent ----------
SCREENS['parent/home'] = () => ({ title: 'Home', html: `
  <div class="page-head"><div><h1>Hello, Sunita</h1><p class="muted">Viewing Aarav Sharma · 12 · L1 Foundation · Andheri West</p></div><div class="chips"><button class="chip on">Aarav</button><button class="chip" data-act="go" data-arg="#/player/home">Riya</button></div></div>
  <div class="card hero stack"><span class="badge lime">Next session</span><h2>L1 Juniors · Serve basics</h2><p class="muted">Today · 5:00–6:30 pm · Court 3, Andheri West · Coach Neha Iyer</p><div class="row wrap"><button class="btn lime" data-act="toast" data-arg="Coach notified: Aarav will be absent today">Mark absent today</button><button class="btn ghost" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.35)" data-act="toast" data-arg="Pick-up contact updated (sample)">Pick-up contact</button></div></div>
  <div class="grid g4"><div class="card stat"><span class="l">Attendance this month</span><span class="v">7 of 8</span></div><div class="card stat"><span class="l">Credits left</span><span class="v">4</span><span class="d muted">Expire 22 Oct</span></div><div class="card stat"><span class="l">Amount due</span><span class="v">${inr(4800)}</span><span class="d down">Due 15 Oct</span></div><div class="card stat"><span class="l">Level</span><span class="v">L1</span><span class="d muted">54% to L2</span></div></div>
  <div class="split"><div class="card"><div class="card-head"><h3>Latest coach feedback</h3><a href="#/parent/progress">Progress</a></div><div class="row" style="align-items:flex-start"><div class="avatar sm alt">NI</div><div class="col"><span class="small"><b>Neha Iyer</b> <span class="muted">· 6 Oct</span></span><p>Aarav's serve is landing in more often — 6 of 10 today. He gets distracted in long drills; shorter games are keeping him engaged. Please practise the underhand swing at home for 5 minutes.</p></div></div></div>
  <div class="card stack"><h3>Pay dues</h3><div class="row between"><span>8-session pack (renewal)</span><b>${inr(4800)}</b></div><button class="btn" data-act="buy" data-arg="p2">Pay now</button><span class="tiny faint">Invoice issued in Sunita Sharma's name · sample</span></div></div>` });
SCREENS['parent/progress'] = () => SCREENS['player/progress'](null, D.child);
SCREENS['parent/pay'] = () => SCREENS['player/pay'](null, D.child);
SCREENS['parent/consent'] = () => ({ title: 'Consent and safety', html: `
  <div class="page-head"><div><h1>Consent and safety</h1><p class="muted">Required for players under 18 · recorded with date and time</p></div></div>
  <div class="grid g2"><div class="card stack"><h3>Consents given</h3>${[['Parental consent to train and to process Aarav’s data', 'Given 2 Jun 2026, 7:14 pm'], ['Photos and video for coaching use only', 'Given 2 Jun 2026'], ['Photos on academy social media', 'Not given']].map(([t, s]) => `<div class="row between"><div class="col"><b class="small">${t}</b><span class="tiny muted">${s}</span></div>${/Not/.test(s) ? badge('Off') : badge('On', 'good')}</div>`).join('')}<button class="btn ghost sm" data-act="toast" data-arg="Consent settings updated">Change consents</button></div>
  <div class="card stack"><h3>Medical and pick-up</h3><dl class="kv"><dt>Medical notes</dt><dd>Mild asthma · inhaler in bag</dd><dt>Authorised pick-up</dt><dd>Sunita Sharma, Amit Sharma</dd><dt>Emergency contact</dt><dd>+91 98XXX XX761</dd></dl><p class="tiny muted">Coaches see the medical note on their roster as a flag.</p></div></div>` });

// ---------- Registration ----------
SCREENS.register = () => {
  const st = S.regStep;
  const steps = `<div class="steps">${[1, 2, 3, 4].map(i => `<i class="${i <= st ? 'on' : ''}"></i>`).join('')}</div>`;
  const body = {
    1: `<h2>Welcome to Dink Dynamics</h2><p class="muted">Sign up with your mobile number. We'll send a 6-digit code.</p><div class="field"><label>Mobile number</label><input class="input" value="+91 98XXX XX214"></div><div class="field"><label>Enter code</label><div class="row" style="gap:8px">${'482913'.split('').map(d => `<input class="input" style="text-align:center;font-weight:700;font-size:18px;padding:10px 0" value="${d}">`).join('')}</div></div><button class="btn ghost sm" style="align-self:flex-start">Or continue with Google</button>`,
    2: `<h2>About you</h2><div class="grid g2"><div class="field"><label>Full name</label><input class="input" value="Riya Sharma"></div><div class="field"><label>Date of birth</label><input class="input" value="14/03/1994"></div><div class="field"><label>Gender</label><select><option>Female</option><option>Male</option><option>Prefer not to say</option></select></div><div class="field"><label>Plays with</label><select><option>Right hand</option><option>Left hand</option></select></div><div class="field"><label>Emergency contact name</label><input class="input" value="Amit Sharma"></div><div class="field"><label>Emergency contact mobile</label><input class="input" value="+91 98XXX XX761"></div></div><label class="check"><input type="checkbox">I'm registering a child (under 18) — I'll add their details and give parental consent</label>`,
    3: `<h2>Your game</h2><div class="field"><label>Experience</label><div class="chips" style="flex-wrap:wrap"><button class="chip">Never played</button><button class="chip on">A few months</button><button class="chip">1–2 years</button><button class="chip">Tournament player</button></div></div><div class="field"><label>Main goal</label><div class="chips" style="flex-wrap:wrap"><button class="chip">Fitness</button><button class="chip">Social</button><button class="chip on">Competitive</button></div></div><div class="field"><label>Preferred venue</label><select>${D.venues.map(v => `<option>${v.name}</option>`).join('')}</select></div><div class="field"><label>DUPR ID (optional)</label><input class="input" placeholder="e.g. 4XJ29Q"></div>`,
    4: `<h2>Waiver and trial class</h2><div class="card" style="max-height:120px;overflow:auto;font-size:13px;color:var(--muted)">Sample waiver text. I confirm I am fit to take part in pickleball coaching, understand the risk of injury, and agree to follow coach instructions and academy rules. Final wording to be supplied by Momentum Sports' legal adviser.</div><label class="check"><input type="checkbox" checked>I have read and accept the waiver and academy policies</label><label class="check"><input type="checkbox" checked>I have no medical condition that stops me playing (or I've noted it below)</label><div class="field"><label>Book a trial class · ${inr(500)}</label><select><option>Sat 10 Oct · 8:00 am · Andheri West · Coach Neha</option><option>Sun 11 Oct · 7:30 am · Bandra · Coach Sana</option></select></div><p class="small muted">After the trial, your coach places you at a starting level.</p>`
  }[st];
  return `<div class="proto">Prototype for internal review · sample data · <a href="#/">Switch role</a></div><div style="max-width:560px;margin:0 auto;padding:24px 16px 60px" class="stack"><div class="row"><div class="logo">${LOGO}</div><b>Dink Dynamics</b><span class="small muted" style="margin-left:auto">Step ${st} of 4</span></div>${steps}<div class="card stack" style="gap:16px">${body}<div class="row between">${st > 1 ? `<button class="btn ghost" data-act="reg" data-arg="-1">Back</button>` : '<span></span>'}<button class="btn" data-act="reg" data-arg="1">${st === 4 ? 'Pay ' + inr(500) + ' and book trial' : 'Continue'}</button></div></div></div>`;
};

// ---------- Player actions ----------
Object.assign(ACTS, {
  qr: () => sheet(sheetHead('Check in', 'Show this at the court or scan the court QR') + `<div style="display:grid;place-items:center;padding:10px"><div class="qr"></div></div><p class="small muted" style="text-align:center">Riya Sharma · Fri 9 Oct · 7:00 am · Court 2</p><button class="btn block" data-act="close">Done</button>`),
  cancelSheet: () => sheet(sheetHead('Cancel or reschedule', 'Kitchen control · Fri 9 Oct, 7:00 am') + `<div class="note">Free cancellation until <b>Thu 8 Oct, 7:00 pm</b> (12 hours before). Your credit is returned.</div><button class="btn block" data-act="go" data-arg="#/player/book">Move to another class</button><button class="btn ghost block" data-act="toast" data-arg="Cancelled — 1 credit returned">Cancel this class</button>`),
  bookSheet: (id) => { const c = D.classes.find(x => x.id === id); sheet(sheetHead('Confirm booking') + `<div class="card stack"><b>${c.title}</b><span class="small muted">${c.day} · ${c.time} · ${c.len}<br>Coach ${c.coach} · ${c.venue}</span></div><dl class="kv"><dt>Uses</dt><dd>1 credit (${me.credits - 1} left after)</dd><dt>Free cancellation</dt><dd>Until 12 hours before</dd></dl><button class="btn block" data-act="confirmBook" data-arg="${id}">Confirm booking</button>`); },
  confirmBook: (id) => { S.booked.add(id); render(); toast('Booked — added to your calendar and WhatsApp reminder set'); },
  waitlist: (id) => { S.waitlist.add(id); render(); toast("You're #2 on the waitlist — we'll alert you if a seat opens"); },
  day: (d) => { S.day = d; render(); },
  bookTab: (t) => { S.bookTab = t; render(); },
  progSkill: (s) => { S.progSkill = s; render(); },
  buy: (id) => { const p = D.packages.find(x => x.id === id); sheet(sheetHead('Checkout', p.name) + `<div class="row between"><span>Amount (incl. 18% GST)</span><b style="font-size:20px">${inr(p.price)}</b></div><div class="stack" style="gap:8px">${['UPI · Google Pay, PhonePe, Paytm', 'Credit or debit card', 'Netbanking', 'Set up UPI AutoPay (monthly)'].map((m, i) => `<label class="card row" style="padding:12px;cursor:pointer"><input type="radio" name="pm" ${i === 0 ? 'checked' : ''} style="accent-color:var(--brand)">${m}</label>`).join('')}</div><div class="field"><label>Coupon</label><input class="input" placeholder="e.g. DIWALI10"></div><button class="btn block" data-act="paid">Pay ${inr(p.price)} with Razorpay</button><p class="tiny faint" style="text-align:center">Sample checkout · no payment is taken</p>`); },
  paid: () => { closeSheet(); toast('Payment successful · GST invoice sent to WhatsApp and email'); },
  reg: (d) => { S.regStep = Math.max(1, Math.min(4, S.regStep + +d)); if (+d > 0 && S.regStep === 4 && document.querySelector('.steps i:last-child.on')) { toast('Trial booked for Sat 10 Oct · welcome to Dink Dynamics'); S.regStep = 1; location.hash = '#/player/home'; return; } render(); }
});
