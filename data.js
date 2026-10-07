// Dink Dynamics UI mockup — SAMPLE DATA ONLY. Every name, price and number here is a placeholder.
window.DD = {
  today: 'Thu 8 Oct 2026',
  venues: [
    { id: 'and', name: 'Andheri West', courts: 4, players: 182, util: 78, revenue: 612000 },
    { id: 'pow', name: 'Powai', courts: 3, players: 131, util: 71, revenue: 438000 },
    { id: 'ban', name: 'Bandra', courts: 2, players: 74, util: 64, revenue: 251000 }
  ],
  levels: [
    { id: 'L1', name: 'Foundation', rating: '2.0–2.5', focus: 'Rules, scoring, consistent serve and return, basic dink' },
    { id: 'L2', name: 'Developing', rating: '3.0', focus: 'Kitchen positioning, sustained dink rally, intro third-shot drop' },
    { id: 'L3', name: 'Intermediate', rating: '3.5', focus: 'Drop/drive choice, resets, volley control, stacking basics' },
    { id: 'L4', name: 'Advanced', rating: '4.0', focus: 'Speed-ups and counters, Erne/ATP awareness, doubles patterns' },
    { id: 'L5', name: 'Performance', rating: '4.5+', focus: 'Match strategy, tournament readiness, pressure consistency' }
  ],
  skills: [
    { id: 'serve', name: 'Serve', short: 'Serve' },
    { id: 'return', name: 'Return of serve', short: 'Return' },
    { id: 'dink', name: 'Dinking', short: 'Dink' },
    { id: 'drop', name: 'Third-shot drop', short: 'Drop' },
    { id: 'drive', name: 'Third-shot drive', short: 'Drive' },
    { id: 'volley', name: 'Volleys and resets', short: 'Volley' },
    { id: 'lob', name: 'Lobs and overheads', short: 'Lob' },
    { id: 'foot', name: 'Footwork and kitchen line', short: 'Footwork' },
    { id: 'strat', name: 'Strategy and shot selection', short: 'Strategy' },
    { id: 'team', name: 'Doubles teamwork', short: 'Teamwork' }
  ],
  me: {
    name: 'Riya Sharma', initials: 'RS', level: 'L2', levelName: 'Developing', rating: '3.0',
    venue: 'Andheri West', coach: 'Neha Iyer', since: 'Jun 2026', phone: '+91 98XXX XX214',
    credits: 7, creditsTotal: 12, expiry: '30 Oct 2026', attendance: 86, streak: 5, sessions: 34,
    progressToNext: 68,
    skillsNow:  { serve: 3.8, return: 3.4, dink: 3.6, drop: 2.6, drive: 3.1, volley: 2.9, lob: 2.4, foot: 3.3, strat: 2.8, team: 3.5 },
    skillsThen: { serve: 3.2, return: 3.0, dink: 2.9, drop: 1.9, drive: 2.8, volley: 2.5, lob: 2.2, foot: 2.7, strat: 2.4, team: 3.1 },
    dropTrend: [1.8, 1.9, 2.0, 2.0, 2.2, 2.3, 2.5, 2.6],
    dropDates: ['14 Aug', '21 Aug', '28 Aug', '4 Sep', '11 Sep', '18 Sep', '25 Sep', '2 Oct']
  },
  child: { name: 'Aarav Sharma', initials: 'AS', level: 'L1', age: 12 },
  nextSessions: [
    { id: 's1', day: 'Fri 9 Oct', time: '7:00–8:30 am', title: 'L2 Group · Kitchen control', coach: 'Neha Iyer', court: 'Court 2', venue: 'Andheri West', status: 'Booked' },
    { id: 's2', day: 'Mon 12 Oct', time: '7:00–8:30 am', title: 'L2 Group · Third-shot drop', coach: 'Neha Iyer', court: 'Court 2', venue: 'Andheri West', status: 'Booked' },
    { id: 's3', day: 'Wed 14 Oct', time: '6:30–7:30 pm', title: 'Private lesson', coach: 'Arjun Mehta', court: 'Court 1', venue: 'Andheri West', status: 'Waitlist #2' }
  ],
  classes: [
    { id: 'c1', day: 'Fri 9 Oct', time: '7:00 am', len: '90 min', level: 'L2', title: 'Kitchen control', coach: 'Neha Iyer', venue: 'Andheri West', seats: 1, cap: 8, booked: true },
    { id: 'c2', day: 'Fri 9 Oct', time: '6:00 pm', len: '90 min', level: 'L2', title: 'Drop and reset lab', coach: 'Kabir Shah', venue: 'Andheri West', seats: 3, cap: 8 },
    { id: 'c3', day: 'Sat 10 Oct', time: '8:00 am', len: '120 min', level: 'L2', title: 'Match-play Saturday', coach: 'Neha Iyer', venue: 'Powai', seats: 0, cap: 12 },
    { id: 'c4', day: 'Sat 10 Oct', time: '5:00 pm', len: '90 min', level: 'L2–L3', title: 'Doubles patterns', coach: 'Arjun Mehta', venue: 'Andheri West', seats: 2, cap: 8 },
    { id: 'c5', day: 'Sun 11 Oct', time: '7:30 am', len: '60 min', level: 'All', title: 'Fitness and footwork', coach: 'Sana Khan', venue: 'Bandra', seats: 6, cap: 10 },
    { id: 'c6', day: 'Mon 12 Oct', time: '7:00 am', len: '90 min', level: 'L2', title: 'Third-shot drop', coach: 'Neha Iyer', venue: 'Andheri West', seats: 2, cap: 8, booked: true }
  ],
  history: [
    { id: 'h1', date: 'Mon 5 Oct', title: 'L2 Group · Third-shot drop', coach: 'Neha Iyer', status: 'Present',
      covered: ['Third-shot drop', 'Transition zone footwork', 'Reset from mid-court'],
      ratings: [{ skill: 'Third-shot drop', from: 2.5, to: 2.6 }, { skill: 'Footwork and kitchen line', from: 3.2, to: 3.3 }],
      note: 'Much better arc on the drop today — you are lifting from the legs, not the wrist. Still rushing forward after a short drop; split-step at the transition line before moving in.',
      drill: { name: 'Drop ladder: 20 drops to target zone, 3 sets', video: 'Drill video · 2:14' } },
    { id: 'h2', date: 'Fri 2 Oct', title: 'L2 Group · Dink patience', coach: 'Neha Iyer', status: 'Present',
      covered: ['Cross-court dinks', 'Dink to speed-up decision'],
      ratings: [{ skill: 'Dinking', from: 3.4, to: 3.6 }],
      note: 'Excellent patience in the 30-dink rally drill. Keep the paddle face open on cross-court.', drill: { name: 'Cross-court dink 50s', video: 'Drill video · 1:40' } },
    { id: 'h3', date: 'Wed 30 Sep', title: 'L2 Group · Serve and return depth', coach: 'Kabir Shah', status: 'Late',
      covered: ['Deep serve', 'Return and approach'], ratings: [{ skill: 'Return of serve', from: 3.3, to: 3.4 }],
      note: 'Arrived 10 min late — missed warm-up. Returns are landing deeper; keep following them to the kitchen.', drill: null },
    { id: 'h4', date: 'Mon 28 Sep', title: 'L2 Group · Volleys', coach: 'Neha Iyer', status: 'Absent', covered: [], ratings: [], note: '', drill: null }
  ],
  feedback: [
    { from: 'Neha Iyer', role: 'Coach', date: '5 Oct', text: 'Drop is coming along well. Goal for October: 7 of 10 drops landing in the kitchen during drills.' },
    { from: 'Arjun Mehta', role: 'Head Coach', date: '20 Sep', text: 'Reviewed your progress — on track for the L3 assessment in early November if attendance stays above 80%.' }
  ],
  packages: [
    { id: 'p1', name: 'Monthly batch · 3x a week', price: 6500, note: '12 group sessions, valid 30 days', tag: 'Most popular' },
    { id: 'p2', name: '8-session pack', price: 4800, note: 'Valid 45 days, any L2 batch' },
    { id: 'p3', name: 'Private lesson · 1 hr', price: 2200, note: 'Book any coach, any venue' },
    { id: 'p4', name: '5 private lessons', price: 9900, note: 'Valid 60 days · save ₹1,100' }
  ],
  invoices: [
    { no: 'MS/25-26/1184', date: '1 Oct 2026', item: 'Monthly batch · 3x a week', amount: 6500, mode: 'UPI AutoPay', status: 'Paid' },
    { no: 'MS/25-26/0962', date: '12 Sep 2026', item: 'Private lesson · 1 hr', amount: 2200, mode: 'Card', status: 'Paid' },
    { no: 'MS/25-26/0871', date: '1 Sep 2026', item: 'Monthly batch · 3x a week', amount: 6500, mode: 'Cash · Andheri desk', status: 'Paid' }
  ],
  coaches: [
    { name: 'Arjun Mehta', role: 'Head Coach', venue: 'All', classes: 14, players: 46, logOnTime: 98, rating: 4.8, gain: 0.42 },
    { name: 'Neha Iyer', role: 'Coach', venue: 'Andheri West', classes: 22, players: 74, logOnTime: 95, rating: 4.7, gain: 0.38 },
    { name: 'Kabir Shah', role: 'Coach', venue: 'Andheri West', classes: 18, players: 61, logOnTime: 71, rating: 4.4, gain: 0.29 },
    { name: 'Sana Khan', role: 'Coach', venue: 'Bandra', classes: 15, players: 52, logOnTime: 88, rating: 4.6, gain: 0.33 },
    { name: 'Rohan Desai', role: 'Coach', venue: 'Powai', classes: 20, players: 68, logOnTime: 64, rating: 4.3, gain: 0.25 }
  ],
  roster: [
    { name: 'Riya Sharma', init: 'RS', level: 'L2', flags: [], status: 'checked' },
    { name: 'Vikram Rao', init: 'VR', level: 'L2', flags: ['Unpaid'], status: '' },
    { name: 'Meera Joshi', init: 'MJ', level: 'L2', flags: ['First session'], status: 'checked' },
    { name: 'Dev Patel', init: 'DP', level: 'L2', flags: ['Due for assessment'], status: '' },
    { name: 'Ananya Gupta', init: 'AG', level: 'L2', flags: [], status: 'checked' },
    { name: 'Karan Malhotra', init: 'KM', level: 'L2', flags: ['Knee — no lunging'], status: '' },
    { name: 'Ishita Bose', init: 'IB', level: 'L2', flags: ['Low attendance'], status: '' }
  ],
  coachToday: [
    { time: '7:00–8:30 am', title: 'L2 Group · Kitchen control', venue: 'Andheri West', court: 'Court 2', count: 7, cap: 8, state: 'Now' },
    { time: '9:00–10:00 am', title: 'Private · Dev Patel', venue: 'Andheri West', court: 'Court 1', count: 1, cap: 1, state: 'Next' },
    { time: '5:00–6:30 pm', title: 'L1 Juniors · Serve basics', venue: 'Andheri West', court: 'Court 3', count: 9, cap: 10, state: 'Later' },
    { time: '7:00–8:30 pm', title: 'L2 Group · Drop and reset', venue: 'Powai', court: 'Court 1', count: 6, cap: 8, state: 'Later' }
  ],
  assessments: [
    { name: 'Dev Patel', from: 'L2', to: 'L3', coach: 'Neha Iyer', ready: 'Recommended 2 Oct', score: 3.6, date: 'Sat 17 Oct' },
    { name: 'Tara Nair', from: 'L1', to: 'L2', coach: 'Sana Khan', ready: 'Auto-flagged 28 Sep', score: 3.5, date: 'Sat 17 Oct' },
    { name: 'Aditya Kulkarni', from: 'L3', to: 'L4', coach: 'Arjun Mehta', ready: 'Recommended 25 Sep', score: 3.7, date: 'Sun 18 Oct' },
    { name: 'Zoya Merchant', from: 'L2', to: 'L3', coach: 'Rohan Desai', ready: 'Auto-flagged 6 Oct', score: 3.5, date: 'Not scheduled' }
  ],
  atRisk: [
    { name: 'Ishita Bose', venue: 'Andheri West', reason: 'Attended 3 of last 12 sessions', coach: 'Neha Iyer' },
    { name: 'Farhan Ali', venue: 'Powai', reason: 'No skill gain in 7 weeks', coach: 'Rohan Desai' },
    { name: 'Pooja Menon', venue: 'Bandra', reason: 'Rated last 3 sessions 2 of 5', coach: 'Sana Khan' },
    { name: 'Vikram Rao', venue: 'Andheri West', reason: 'Dues 34 days overdue', coach: 'Kabir Shah' }
  ],
  months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  revenue: [742000, 818000, 905000, 968000, 1104000, 1301000],
  activePlayers: [214, 248, 281, 309, 352, 387],
  duesAgeing: [{ band: '0–15 days', amt: 84500, n: 21 }, { band: '16–30 days', amt: 41200, n: 9 }, { band: '30+ days', amt: 26800, n: 6 }],
  collections: [
    { time: '7:42 am', player: 'Meera Joshi', item: 'Trial class', amt: 500, mode: 'Cash', by: 'Desk · Priya' },
    { time: '8:05 am', player: 'Vikram Rao', item: 'Monthly batch (overdue)', amt: 6500, mode: 'UPI QR', by: 'Desk · Priya' },
    { time: '8:31 am', player: 'Sahil Verma', item: '8-session pack', amt: 4800, mode: 'Razorpay', by: 'Online' },
    { time: '9:10 am', player: 'Nikita Rao', item: 'Private lesson', amt: 2200, mode: 'Card', by: 'Desk · Priya' }
  ],
  staff: [
    { name: 'Arjun Mehta', role: 'Head Coach', venues: 'All venues', pay: '₹1,200 / session', status: 'Active' },
    { name: 'Neha Iyer', role: 'Coach', venues: 'Andheri West, Powai', pay: '₹900 / session', status: 'Active' },
    { name: 'Kabir Shah', role: 'Coach', venues: 'Andheri West', pay: '₹800 / session', status: 'Active' },
    { name: 'Sana Khan', role: 'Coach', venues: 'Bandra', pay: '₹850 / session', status: 'Active' },
    { name: 'Rohan Desai', role: 'Coach', venues: 'Powai', pay: '₹800 / session', status: 'On leave' },
    { name: 'Priya Nair', role: 'Venue Manager', venues: 'Andheri West', pay: 'Salaried', status: 'Active' },
    { name: 'Imran Shaikh', role: 'Venue Manager', venues: 'Powai, Bandra', pay: 'Salaried', status: 'Active' }
  ]
};
