const svgTengkorak = `<svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <ellipse cx="60" cy="45" rx="42" ry="40" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <rect x="30" y="78" width="60" height="18" rx="4" fill="#f5e6c8" stroke="#8b6914" stroke-width="2"/>
  <rect x="38" y="82" width="11" height="9" rx="2" fill="white" stroke="#8b6914" stroke-width="1.5"/>
  <rect x="54" y="82" width="11" height="9" rx="2" fill="white" stroke="#8b6914" stroke-width="1.5"/>
  <rect x="70" y="82" width="11" height="9" rx="2" fill="white" stroke="#8b6914" stroke-width="1.5"/>
  <ellipse cx="42" cy="42" rx="12" ry="10" fill="#2a2a3a" opacity="0.8"/>
  <ellipse cx="78" cy="42" rx="12" ry="10" fill="#2a2a3a" opacity="0.8"/>
  <ellipse cx="60" cy="62" rx="8" ry="6" fill="#e8c89a" stroke="#8b6914" stroke-width="1.5"/>
  <line x1="54" y1="58" x2="66" y2="58" stroke="#8b6914" stroke-width="1"/>
  <line x1="54" y1="62" x2="66" y2="62" stroke="#8b6914" stroke-width="1"/>
  <line x1="54" y1="66" x2="66" y2="66" stroke="#8b6914" stroke-width="1"/>
  <text x="60" y="105" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Tengkorak</text>
</svg>`;

const svgRahang = `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <path d="M 20 30 Q 60 10 100 30 L 105 55 Q 60 45 15 55 Z" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <path d="M 15 58 Q 60 48 105 58 L 108 80 Q 60 90 12 80 Z" fill="#f0d8a8" stroke="#8b6914" stroke-width="2.5"/>
  <rect x="30" y="32" width="8" height="10" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="42" y="30" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="54" y="30" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="66" y="30" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="78" y="32" width="8" height="10" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="30" y="60" width="8" height="10" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="42" y="62" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="54" y="62" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="66" y="62" width="8" height="12" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <rect x="78" y="60" width="8" height="10" rx="2" fill="white" stroke="#8b6914" stroke-width="1.2"/>
  <text x="60" y="98" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Rahang (Mandibula)</text>
</svg>`;

const svgOrbit = `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <rect x="10" y="15" width="45" height="38" rx="8" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <rect x="65" y="15" width="45" height="38" rx="8" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <ellipse cx="32" cy="34" rx="14" ry="13" fill="#7ec8e3" stroke="#5a9bb5" stroke-width="1.5"/>
  <ellipse cx="88" cy="34" rx="14" ry="13" fill="#7ec8e3" stroke="#5a9bb5" stroke-width="1.5"/>
  <ellipse cx="32" cy="34" rx="7" ry="7" fill="#2a2a5a"/>
  <ellipse cx="88" cy="34" rx="7" ry="7" fill="#2a2a5a"/>
  <ellipse cx="35" cy="31" rx="2.5" ry="2.5" fill="white"/>
  <ellipse cx="91" cy="31" rx="2.5" ry="2.5" fill="white"/>
  <rect x="10" y="55" width="100" height="16" rx="4" fill="#f5e6c8" stroke="#8b6914" stroke-width="2"/>
  <text x="60" y="85" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Rongga Mata (Orbit)</text>
</svg>`;

const svgServikal = `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  ${[0,1,2,3,4,5,6].map(i => `
    <rect x="${12 + i*1.5}" y="${8 + i*14}" width="${56 - i*3}" height="11" rx="5" fill="#f5e6c8" stroke="#8b6914" stroke-width="2"/>
    <rect x="${30}" y="${17 + i*14}" width="20" height="5" rx="2" fill="#e0c8a0" stroke="#8b6914" stroke-width="1"/>
  `).join('')}
  <text x="40" y="115" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Leher (C1–C7)</text>
</svg>`;

const svgKlavikula = `<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <path d="M 20 40 Q 80 20 140 40" stroke="#8b6914" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.3"/>
  <path d="M 20 40 Q 80 20 140 40" stroke="#f5e6c8" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M 20 40 Q 80 20 140 40" stroke="#8b6914" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="0" opacity="0" />
  <ellipse cx="20" cy="40" rx="9" ry="7" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <ellipse cx="140" cy="40" rx="9" ry="7" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <text x="80" y="68" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Selangka (Klavikula)</text>
</svg>`;

const svgSkapula = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <path d="M 30 20 L 90 20 L 95 80 Q 80 95 60 100 Q 40 95 25 80 Z" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <line x1="60" y1="20" x2="60" y2="100" stroke="#8b6914" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="30" y1="55" x2="90" y2="55" stroke="#8b6914" stroke-width="1.5" stroke-dasharray="4,3"/>
  <ellipse cx="60" cy="22" rx="18" ry="7" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Belikat (Skapula)</text>
</svg>`;

const svgHumerus = `<svg viewBox="0 0 80 140" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <ellipse cx="40" cy="22" rx="20" ry="16" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <rect x="28" y="30" width="24" height="75" rx="10" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <ellipse cx="32" cy="112" rx="14" ry="10" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <ellipse cx="50" cy="112" rx="12" ry="10" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <text x="40" y="135" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Humerus</text>
</svg>`;

const svgRadiusUlna = `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <rect x="20" y="15" width="16" height="100" rx="7" fill="#f5e6c8" stroke="#8b6914" stroke-width="2.5"/>
  <rect x="64" y="15" width="16" height="100" rx="7" fill="#e8d4a0" stroke="#8b6914" stroke-width="2.5"/>
  <ellipse cx="28" cy="15" rx="10" ry="8" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <ellipse cx="72" cy="15" rx="10" ry="8" fill="#e0c890" stroke="#8b6914" stroke-width="2"/>
  <ellipse cx="28" cy="115" rx="10" ry="8" fill="#f0d4a0" stroke="#8b6914" stroke-width="2"/>
  <ellipse cx="72" cy="115" rx="10" ry="8" fill="#e0c890" stroke="#8b6914" stroke-width="2"/>
  <text x="28" y="132" text-anchor="middle" font-size="8" fill="#6b4f12" font-family="sans-serif">Ulna</text>
  <text x="72" y="132" text-anchor="middle" font-size="8" fill="#6b4f12" font-family="sans-serif">Radius</text>
</svg>`;

const svgKarpal = `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  ${[
    [18,15],[42,12],[66,14],[90,16],
    [18,42],[42,40],[66,42],[90,44]
  ].map(([x,y]) => `<rect x="${x}" y="${y}" width="20" height="18" rx="5" fill="#f5e6c8" stroke="#8b6914" stroke-width="2"/>`).join('')}
  <text x="60" y="90" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Tulang Karpal (8 tulang)</text>
</svg>`;

const svgMetakarpal = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  ${[15,31,47,63,83].map((x,i) => `
    <rect x="${x}" y="${20 - i*2}" width="13" height="${60 + i*3}" rx="6" fill="#f5e6c8" stroke="#8b6914" stroke-width="2"/>
    <ellipse cx="${x+6.5}" cy="${20-i*2}" rx="7" ry="6" fill="#f0d4a0" stroke="#8b6914" stroke-width="1.5"/>
  `).join('')}
  <text x="60" y="110" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Metakarpal (5 tulang)</text>
</svg>`;

const svgFalang = `<svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  ${[10,30,52,74,96].map((x, fi) => {
    const segs = fi === 0 ? 2 : 3;
    const segH = fi === 0 ? 22 : 18;
    const gap = 4;
    return Array.from({length: segs}, (_,si) => {
      const y = 15 + si*(segH+gap);
      return `<rect x="${x}" y="${y}" width="16" height="${segH}" rx="5" fill="#f5e6c8" stroke="#8b6914" stroke-width="1.8"/>`;
    }).join('');
  }).join('')}
  <text x="65" y="122" text-anchor="middle" font-size="9" fill="#6b4f12" font-family="sans-serif">Falang / Jari Tangan</text>
</svg>`;

const data = [
  // ── FOTOSINTESIS ──
  [
    { e:"🌿", q:"Apa itu fotosintesis?",
      a:"Proses pembuatan makanan oleh tumbuhan menggunakan cahaya matahari, air, dan karbon dioksida." },
    { e:"☀️", q:"Apa saja bahan yang dibutuhkan untuk fotosintesis?",
      a:"Air (H₂O) dari tanah, karbon dioksida (CO₂) dari udara, dan cahaya matahari sebagai energi." },
    { e:"🍃", q:"Di mana fotosintesis terjadi?",
      a:"Di daun, tepatnya di dalam kloroplas yang mengandung zat hijau daun (klorofil)." },
    { e:"🔬", q:"Apa fungsi klorofil dalam fotosintesis?",
      a:"Menyerap energi cahaya matahari yang digunakan dalam proses pembuatan makanan." },
    { e:"💨", q:"Apa saja hasil fotosintesis?",
      a:"Glukosa (gula/makanan) sebagai hasil utama, dan oksigen (O₂) yang dilepas ke udara." },
    { e:"🌙", q:"Mengapa fotosintesis hanya terjadi di siang hari?",
      a:"Karena memerlukan energi cahaya matahari. Tanpa cahaya, klorofil tidak dapat bekerja." },
    { e:"🌍", q:"Apa manfaat fotosintesis bagi manusia?",
      a:"Menghasilkan oksigen yang kita hirup dan makanan (glukosa) yang menjadi sumber energi." },
    { e:"📖", q:`Seorang siswa menaruh 2 tanaman: 1. Tanaman A di tempat terang. 2. Tanaman B di tempat gelap. Setelah 5 hari, tanaman A tumbuh subur, sedangkan tanaman B layu.
      Pertanyaan:
      Mengapa hal tersebut bisa terjadi? Jelaskan berdasarkan proses fotosintesis!`,
      a:"Tanaman A tumbuh subur karena mendapat cahaya matahari untuk fotosintesis. Tanaman B layu karena tidak bisa fotosintesis tanpa cahaya, sehingga tidak menghasilkan makanan." },
  ],
  // ── ALAT GERAK ──
  [
    { e:"🦴", q:"Apa dua jenis alat gerak pada manusia?",
      a:"Alat gerak pasif (tulang) dan alat gerak aktif (otot). Tulang digerakkan oleh otot." },
    { e:"💪", q:"Mengapa otot disebut alat gerak aktif?",
      a:"Karena otot dapat berkontraksi (memendek) dan berelaksasi (memanjang) sehingga menggerakkan tulang." },
    { e:"🦷", q:"Mengapa tulang disebut alat gerak pasif?",
      a:"Karena tulang tidak bisa bergerak sendiri — hanya bergerak jika ditarik oleh otot." },
    { e:"🔗", q:"Apa fungsi sendi pada sistem gerak?",
      a:"Penghubung antartulang yang memungkinkan tulang bergerak. Tanpa sendi, tulang kaku." },
    { e:"🙆", q:"Sebutkan 3 jenis sendi berdasarkan gerakannya!",
      a:"Sendi mati (tengkorak), sendi kaku (tulang rusuk), sendi gerak bebas (lutut, bahu, siku)." },
    { e:"🏃", q:"Apa perbedaan otot lurik, polos, dan jantung?",
      a:"Otot lurik: sadar, rangka.\nOtot polos: tidak sadar, organ dalam.\nOtot jantung: tidak sadar, hanya di jantung." },
    { e:"🤸", q:"Apa itu gerak antagonis pada otot?",
      a:"Kerja dua otot yang berlawanan. Contoh: bisep berkontraksi → trisep relaksasi, lengan menekuk." },
    { e:"🦢", q:"Apa fungsi tulang rawan (kartilago)?",
      a:"Bantalan pada sendi, melapisi ujung tulang, dan menyusun bagian lentur seperti telinga dan hidung." },
    { e:"🛡️", q:"Sebutkan fungsi tulang bagi tubuh!",
      a:"Menopang tubuh, memberi bentuk, melindungi organ dalam, tempat otot melekat, dan membentuk sel darah." },
    { e:"⚠️", q:"Sebutkan 3 gangguan pada sistem gerak!",
      a:"Patah tulang (fraktur), radang sendi (artritis), kelainan tulang belakang (skoliosis/kifosis/lordosis)." },
    {
      e:"💀",
      q:"Apa nama tulang yang melindungi otak?",
      a:"Tulang tengkorak. Fungsinya melindungi otak dari benturan.",
      svgA: svgTengkorak
    },
    {
      e:"🦷",
      q:"Tulang apa yang menyusun wajah dan tempat gigi melekat?",
      a:"Tulang rahang (mandibula dan maksila).",
      svgA: svgRahang
    },
    {
      e:"👁️",
      q:"Bagian tengkorak yang melindungi mata disebut apa?",
      a:"Rongga mata (orbit).",
      svgA: svgOrbit
    },
    {
      e:"🦴",
      q:"Apa nama tulang yang menghubungkan kepala dengan badan?",
      a:"Tulang leher (servikal).",
      svgA: svgServikal
    },
    {
      e:"🤝",
      q:"Apa nama tulang yang menghubungkan lengan dengan badan di bagian depan?",
      a:"Tulang selangka (klavikula).",
      svgA: svgKlavikula
    },
    {
      e:"🎒",
      q:"Apa nama tulang di punggung atas yang membantu pergerakan bahu?",
      a:"Tulang belikat (skapula).",
      svgA: svgSkapula
    },
    {
      e:"💪",
      q:"Apa nama tulang pada lengan atas?",
      a:"Tulang lengan atas (humerus).",
      svgA: svgHumerus
    },
    {
      e:"✋",
      q:"Apa nama dua tulang pada lengan bawah?",
      a:"Tulang hasta (ulna) dan pengumpil (radius).",
      svgA: svgRadiusUlna
    },
    {
      e:"⌚",
      q:"Tulang kecil di pergelangan tangan disebut apa?",
      a:"Tulang pergelangan tangan (karpal).",
      svgA: svgKarpal
    },
    {
      e:"✍️",
      q:"Apa nama tulang pada telapak tangan?",
      a:"Tulang telapak tangan (metakarpal).",
      svgA: svgMetakarpal
    },
    {
      e:"🤏",
      q:"Apa nama tulang penyusun jari tangan?",
      a:"Tulang jari (falang / phalanges).",
      svgA: svgFalang
    }
  ]
];

let topic = 0, idx = 0, isFlipped = false;
const seen = [new Set(), new Set()];

const cardScene   = document.getElementById('cardScene');
const cardInner   = document.getElementById('cardInner');
const cardEmoji   = document.getElementById('cardEmoji');
const cardQuestion= document.getElementById('cardQuestion');
const cardAnswer  = document.getElementById('cardAnswer');
const frontBadge  = document.getElementById('frontBadge');
const progText    = document.getElementById('prog-text');
const progPct     = document.getElementById('prog-pct');
const progFill    = document.getElementById('prog-fill');
const dotsEl      = document.getElementById('dots');
const flipBtn     = document.getElementById('flipBtn');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const tabFoto     = document.getElementById('tab-foto');
const tabGerak    = document.getElementById('tab-gerak');

/* EVENT LISTENER */
tabFoto.addEventListener('click', () => switchTopic(0));
tabGerak.addEventListener('click', () => switchTopic(1));
cardScene.addEventListener('click', flipCard);
flipBtn.addEventListener('click', flipCard);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));

function render() {
  const cards = data[topic];
  const c = cards[idx];
  isFlipped = false;
  cardScene.classList.remove('flipped');

  cardEmoji.textContent = c.e;

  cardQuestion.innerHTML = `<div>${c.q}</div>`;

  // Jawaban: teks + ilustrasi SVG inline (jika ada)
  cardAnswer.innerHTML = `
    <div>${c.a}</div>
    ${c.svgA ? `<div class="card-svg-wrap">${c.svgA}</div>` : ''}
  `;

  // Sesuaikan tinggi kartu: lebih tinggi jika ada SVG ilustrasi
  cardScene.classList.toggle('has-svg', !!c.svgA);

  const isFoto = topic === 0;
  frontBadge.className = 'card-topic-badge ' + (isFoto ? 'badge-foto' : 'badge-gerak');
  flipBtn.className    = 'ctrl-btn ctrl-flip ' + (isFoto ? 'tema-foto' : 'tema-gerak');

  const pct = Math.round(((idx + 1) / cards.length) * 100);
  progText.textContent = `Kartu ${idx+1} dari ${cards.length}`;
  progPct.textContent  = pct + '%';
  progFill.style.width = pct + '%';
  progFill.style.background = isFoto ? 'var(--green)' : 'var(--blue)';

  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === cards.length - 1;

  seen[topic].add(idx);
  renderDots();
}

function renderDots() {
  const cards = data[topic];
  const isFoto = topic === 0;
  dotsEl.innerHTML = '';
  cards.forEach((_, i) => {
    const d = document.createElement('div');
    let cls = 'dot';
    if (i === idx)               cls += isFoto ? ' active-foto' : ' active-gerak';
    else if (seen[topic].has(i)) cls += ' seen';
    d.className = cls;
    d.title = `Kartu ${i+1}`;
    d.onclick = () => { idx = i; render(); };
    dotsEl.appendChild(d);
  });
}

function flipCard() {
  isFlipped = !isFlipped;
  cardScene.classList.toggle('flipped', isFlipped);
}

function navigate(dir) {
  const max = data[topic].length - 1;
  idx = Math.max(0, Math.min(max, idx + dir));
  render();
}

function switchTopic(t) {
  topic = t; idx = 0;
  const isFoto = t === 0;
  tabFoto.className  = 'tab-btn ' + (isFoto  ? 'active-foto'  : '');
  tabGerak.className = 'tab-btn ' + (!isFoto ? 'active-gerak' : '');
  render();
}

/* Keyboard navigation */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  navigate(-1);
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    flipCard();
  }
});

render();