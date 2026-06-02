/* ============================================================
   SAK-6 — CORE JS
   Données factices, utilitaires, composants partagés
   ============================================================ */

'use strict';

// ── MOCK DATA ──────────────────────────────────────────────

const FC = {

  drivers: [
    { id:'DRV-001', name:'Youssef El Fassi',     initials:'YE', color:'#0a84ff', status:'online',  truck:'TRK-044', rating:4.9, trips:1284, earnings:8420, license:'2025-08-15', risk:'low',    city:'Casablanca',  phone:'+212 6 11 22 33 44', deliveries:1190,  ontime:'98%', miles:94200 },
    { id:'DRV-002', name:'Sara Bencheikh',       initials:'SB', color:'#00e5a0', status:'driving',  truck:'TRK-027', rating:4.8, trips:987,  earnings:7180, license:'2026-02-20', risk:'low',    city:'Rabat',        phone:'+212 6 12 33 44 55', deliveries:960,  ontime:'97%', miles:72100 },
    { id:'DRV-003', name:'Rachid Azouz',         initials:'RA', color:'#ffb830', status:'offline',  truck:null,      rating:4.5, trips:632,  earnings:5200, license:'2024-12-01', risk:'medium', city:'Marrakech',   phone:'+212 6 13 44 55 66', deliveries:590,  ontime:'91%', miles:48300 },
    { id:'DRV-004', name:'Imane Haddad',         initials:'IH', color:'#7c5cfc', status:'online',   truck:'TRK-011', rating:4.7, trips:1102, earnings:7900, license:'2026-09-10', risk:'low',    city:'Fès',          phone:'+212 6 14 55 66 77', deliveries:1050, ontime:'96%', miles:81700 },
    { id:'DRV-005', name:'Meryem Bennis',        initials:'MB', color:'#ff6820', status:'driving',  truck:'TRK-088', rating:4.6, trips:845,  earnings:6540, license:'2025-05-30', risk:'medium', city:'Tanger',       phone:'+212 6 15 66 77 88', deliveries:800,  ontime:'93%', miles:63800 },
    { id:'CMR-2847', name:'Karim Alaoui',        initials:'KA', color:'#ff3b5c', status:'online',   truck:'MA-4821-D', rating:4.3, trips:420,  earnings:3840, license:'2026-11-14', risk:'high',   city:'Agadir',       phone:'+212 6 61 22 33 44', deliveries:380,  ontime:'85%', miles:31200, company:'MaroTrans Logistics', permit:'C+E', experience:'11 ans', trailer:'REM-1047', email:'k.alaoui@marotrans.ma' },
    { id:'DRV-007', name:'Amina El Idrissi',     initials:'AE', color:'#00d2ff', status:'driving',  truck:'TRK-071', rating:5.0, trips:1540, earnings:11200,license:'2027-03-22', risk:'low',    city:'Meknès',       phone:'+212 6 17 88 99 00', deliveries:1480, ontime:'99%', miles:115600 },
    { id:'DRV-008', name:'Nabil Choukri',        initials:'NC', color:'#4f7eff', status:'offline',  truck:null,      rating:4.4, trips:560,  earnings:4400, license:'2025-07-09', risk:'medium', city:'Oujda',        phone:'+212 6 18 99 00 11', deliveries:520,  ontime:'90%', miles:42100 },
  ],

  trucks: [
    { id:'TRK-044', plate:'CA-84920', make:'Kenworth',    model:'T680',    year:2022, status:'active',  driver:'DRV-001', health:94, mileage:142800, fuel:68, insurance:'2025-06-30', nextService:8200,  type:'Semi',      color:'#0a84ff' },
    { id:'TRK-027', plate:'IL-32187', make:'Peterbilt',   model:'579',     year:2021, status:'active',  driver:'DRV-002', health:87, mileage:198400, fuel:45, insurance:'2025-09-15', nextService:2100,  type:'Semi',      color:'#00e5a0' },
    { id:'TRK-011', plate:'NY-65412', make:'Volvo',       model:'VNL 760', year:2023, status:'active',  driver:'DRV-004', health:98, mileage:41200,  fuel:82, insurance:'2026-01-20', nextService:18800, type:'Semi',      color:'#7c5cfc' },
    { id:'TRK-088', plate:'FL-77301', make:'Freightliner',model:'Cascadia', year:2020, status:'active',  driver:'DRV-005', health:75, mileage:267500, fuel:31, insurance:'2025-04-10', nextService:600,   type:'Semi',      color:'#ff6820' },
    { id:'TRK-033', plate:'WA-21876', make:'International',model:'LT Series',year:2022,status:'active', driver:'CMR-2847', health:82, mileage:175300, fuel:55, insurance:'2025-08-25', nextService:5400,  type:'Semi',      color:'#ff3b5c' },
    { id:'TRK-071', plate:'TX-90043', make:'Mack',        model:'Anthem',  year:2023, status:'active',  driver:'DRV-007', health:96, mileage:88900,  fuel:77, insurance:'2026-05-12', nextService:11200, type:'Semi',      color:'#00d2ff' },
    { id:'TRK-015', plate:'AZ-44512', make:'Kenworth',    model:'T880',    year:2019, status:'maintenance', driver:null, health:48, mileage:341200, fuel:12, insurance:'2025-03-01', nextService:0,     type:'Heavy Haul',color:'#ffb830' },
    { id:'TRK-059', plate:'OH-87231', make:'Peterbilt',   model:'389',     year:2020, status:'idle',    driver:null,      health:91, mileage:124600, fuel:60, insurance:'2025-11-18', nextService:9600,  type:'Semi',      color:'#4f7eff' },
  ],

  deliveries: [
    { id:'DEL-4821', origin:'Casablanca', dest:'Rabat',  driver:'DRV-001', truck:'TRK-044', status:'transit',   priority:'high',   weight:'14,700 kg', eta:'1h 05m', revenue:2840, date:'2025-03-18', cargo:'Textiles',        distance:'95 km' },
    { id:'DEL-4820', origin:'Tanger',      dest:'Fès',    driver:'DRV-002', truck:'TRK-027', status:'transit',   priority:'medium', weight:'18,200 kg', eta:'3h 20m', revenue:1240, date:'2025-03-18', cargo:'Pièces auto',     distance:'307 km' },
    { id:'DEL-4819', origin:'Marrakech',   dest:'Agadir',  driver:'DRV-004', truck:'TRK-011', status:'delivered', priority:'low',    weight:'9,800 kg',  eta:'-',      revenue:980,  date:'2025-03-17', cargo:'Produits frais',  distance:'258 km' },
    { id:'DEL-4818', origin:'Nador',       dest:'Oujda',   driver:'DRV-005', truck:'TRK-088', status:'delayed',   priority:'high',   weight:'24,100 kg', eta:'4h 30m', revenue:1840, date:'2025-03-18', cargo:'Produits périssables', distance:'320 km' },
    { id:'DEL-4817', origin:'Meknès',      dest:'Tanger',  driver:'DRV-007', truck:'TRK-071', status:'transit',   priority:'medium', weight:'41,000 kg', eta:'5h 10m', revenue:640,  date:'2025-03-18', cargo:'Équipements industriels', distance:'330 km' },
    { id:'DEL-4816', origin:'Casablanca',  dest:'Essaouira',driver:'CMR-2847', truck:'TRK-033', status:'transit',   priority:'low',    weight:'7,400 kg',  eta:'2h 15m', revenue:480,  date:'2025-03-17', cargo:'Fournitures de construction', distance:'182 km' },
    { id:'DEL-4815', origin:'Rabat',       dest:'Casablanca',driver:null,    truck:null,      status:'pending',   priority:'medium', weight:'15,600 kg', eta:'-',      revenue:920,  date:'2025-03-19', cargo:'Biens de consommation', distance:'87 km' },
    { id:'DEL-4814', origin:'Fès',         dest:'Marrakech',driver:null,    truck:null,      status:'pending',   priority:'low',    weight:'11,200 kg', eta:'-',      revenue:760,  date:'2025-03-19', cargo:'Fournitures médicales', distance:'530 km' },
    { id:'DEL-4813', origin:'Agadir',      dest:'Casablanca',driver:null,    truck:null,      status:'cancelled', priority:'medium', weight:'22,000 kg', eta:'-',      revenue:0,    date:'2025-03-17', cargo:'Textiles',        distance:'460 km' },
    { id:'DEL-4812', origin:'Tanger',      dest:'Rabat',   driver:'DRV-007', truck:'TRK-071', status:'delivered', priority:'high',   weight:'36,800 kg', eta:'-',      revenue:2180, date:'2025-03-17', cargo:'Machinerie',      distance:'340 km' },
  ],

  messages: [
    { id:'MSG-001', driver:'DRV-001', messages:[
      {from:'driver',text:'J’arrive au port de Casablanca, chargement en cours.',time:'09:14'},
      {from:'dispatch',text:'Reçu. Vérifie le passage douanier et confirme la sortie.',time:'09:16'},
      {from:'driver',text:'Trafic dense à la sortie de la ville, je gagne 18 minutes.',time:'09:18'},
      {from:'dispatch',text:'Bien noté. Préviens le client et roule prudemment.',time:'09:20'},
    ]},
    { id:'MSG-002', driver:'DRV-002', messages:[
      {from:'driver',text:'Livraison à Rabat confirmée, signature du client reçue.',time:'11:04'},
      {from:'dispatch',text:'Parfait. Retour prévu demain matin vers Tanger.',time:'11:06'},
    ]},
    { id:'MSG-003', driver:'DRV-007', messages:[
      {from:'dispatch',text:'Amina, quelle est ton ETA à Tanger ?',time:'08:30'},
      {from:'driver',text:'Je serai sur place dans 1h10, route dégagée.',time:'08:32'},
      {from:'dispatch',text:'Excellent. Prépare le quai de déchargement 3.',time:'08:34'},
    ]}
  ],

  alerts: [
    { type:'critical', icon:'🚨', title:'TRK-088 — Assurance expirante', desc:'Assurance expirant dans 3 jours. Renouvellement urgent.', time:'il y a 5 min' },
    { type:'warning',  icon:'⚠️', title:'DEL-4818 Retardée — Route nationale 2', desc:'Livraison retardée suite à un incident près de Nador. Client informé.', time:'il y a 12 min' },
    { type:'warning',  icon:'🔧', title:'TRK-015 Révision nécessaire', desc:'Entretien retardé de 1 200 km. Véhicule à l’arrêt.', time:'il y a 1 h' },
    { type:'info',     icon:'📍', title:'Nouvelle zone — TRK-071', desc:'Véhicule entré dans la zone géofencée de Tanger à 08:22.', time:'il y a 2 h' },
    { type:'warning',  icon:'📋', title:'DRV-003 Permis bientôt expiré', desc:'Permis professionnel expirant dans 32 jours. Relance envoyée.', time:'il y a 3 h' },
  ],

  revenue: {
    labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    data:   [312000, 298000, 341000, 387000, 362000, 419000, 448000, 431000, 472000, 488000, 501000, 524000],
  },

  fuelData: {
    labels: ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'],
    data:   [4200, 3900, 4500, 4100, 4800, 3200, 2800],
  },

  deliverySuccess: {
    labels: ['À l’heure', 'Retard', 'Annulé'],
    data:   [87, 9, 4],
  },

};

// ── UTILITIES ──────────────────────────────────────────────

function formatCurrency(n) {
  return 'MAD ' + n.toLocaleString();
}

function getRiskColor(risk) {
  return { low: 'var(--accent-green)', medium: 'var(--accent-amber)', high: 'var(--accent-red)' }[risk];
}

function getRiskLabel(risk) {
  return { low:'Faible', medium:'Moyen', high:'Élevé' }[risk];
}

function getStatusBadge(status) {
  const map = {
    online:    'badge-online',
    driving:   'badge-transit',
    offline:   'badge-offline',
    transit:   'badge-transit',
    delivered: 'badge-delivered',
    pending:   'badge-pending',
    delayed:   'badge-delayed',
    cancelled: 'badge-cancelled',
    active:    'badge-online',
    maintenance:'badge-critical',
    idle:      'badge-offline',
  };
  const labelMap = {
    online:    'En ligne',
    driving:   'En route',
    offline:   'Hors ligne',
    transit:   'En transit',
    delivered: 'Livré',
    pending:   'En attente',
    delayed:   'En retard',
    cancelled: 'Annulé',
    active:    'Actif',
    maintenance:'Maintenance',
    idle:      'Inactif',
  };
  return `<span class="badge ${map[status] || 'badge-offline'}">${labelMap[status] || status}</span>`;
}

function starsHTML(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i <= Math.round(rating) ? '' : ' empty'}">★</span>`;
  }
  html += `<span style="font-size:11px;color:var(--text-muted);margin-left:4px;">${rating}</span>`;
  return html + '</div>';
}

function riskScoreHTML(risk) {
  const levels = { low: 2, medium: 3, high: 5 };
  const filled = levels[risk];
  const color = getRiskColor(risk);
  let dots = '<div class="risk-dots">';
  for (let i = 0; i < 5; i++) {
    dots += `<div class="risk-dot${i < filled ? ' filled ' + risk : ''}"></div>`;
  }
  dots += '</div>';
  return `<div class="risk-score">${dots}<span class="risk-label" style="color:${color}">${getRiskLabel(risk)}</span></div>`;
}

function getDriver(id) { return FC.drivers.find(d => d.id === id); }
function getTruck(id)  { return FC.trucks.find(t => t.id === id); }

// ── SIDEBAR BUILDER ────────────────────────────────────────

const NAV_ITEMS = [
  { icon:'📊', label:'Tableau de bord', href:'index.html',      badge:null },
  { icon:'👤', label:'Conducteurs',    href:'drivers.html',    badge:null },
  { icon:'📦', label:'Livraisons',     href:'deliveries.html', badge:3 },
  { icon:'🚛', label:'Flotte',         href:'fleet.html',      badge:null },
  { icon:'📡', label:'Suivi',          href:'tracking.html',   badge:'green' },
  { icon:'🗂️', label:'Expéditions',    href:'dispatch.html',   badge:null },
  { icon:'💬', label:'Messages',       href:'messages.html',   badge:4 },
  { icon:'💰', label:'Paie',           href:'payroll.html',    badge:null },
  { icon:'📈', label:'Analytique',     href:'analytics.html',  badge:null },
  { icon:'⚙️', label:'Paramètres',     href:'settings.html',   badge:null },
];

function buildSidebar(activePage) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const current = window.location.pathname.split('/').pop() || 'index.html';

  let navHTML = '';
  NAV_ITEMS.forEach(item => {
    const isActive = current === item.href || (current === '' && item.href === 'index.html');
    let badge = '';
    if (typeof item.badge === 'number') {
      badge = `<span class="nav-badge">${item.badge}</span>`;
    } else if (item.badge === 'green') {
      badge = `<span class="nav-badge green">EN DIRECT</span>`;
    }
    navHTML += `
      <a href="${item.href}" class="nav-item${isActive ? ' active' : ''}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
        ${badge}
      </a>`;
  });

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-icon">🚛</div>
      <div>
        <div class="logo-text">SAK-6</div>
        <div class="logo-badge">PLATEFORME PRO</div>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${navHTML}
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="user-avatar">AD</div>
        <div class="user-info">
          <div class="user-name">Ahmed Draoui</div>
          <div class="user-role">Administrateur de flotte</div>
        </div>
        <span style="color:var(--text-muted);font-size:12px;">⋮</span>
      </div>
    </div>
  `;
}

// ── TOP BAR ────────────────────────────────────────────────

function buildTopbar(title) {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const currentItem = NAV_ITEMS.find(item => item.href === current) || NAV_ITEMS[0];
  const topMenu = [
    { label:'Expéditions', href:'dispatch.html' },
    { label:'Livraisons', href:'deliveries.html' },
    { label:'Messages', href:'messages.html' },
    { label:'Suivi en direct', href:'tracking.html' }
  ];
  const menuLinks = topMenu.map(item => `
      <a href="${item.href}" class="menu-link${item.href === current ? ' active' : ''}">${item.label}</a>
    `).join('');

  topbar.innerHTML = `
    <button class="icon-btn mobile-menu-btn" id="menuBtn" title="Menu">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
    <div class="topbar-brand">
      <div class="topbar-title">${title}</div>
      <div class="topbar-label">Aperçu — ${currentItem.label}</div>
    </div>
    <div class="topbar-menu">
      ${menuLinks}
    </div>
    <div class="topbar-search-wrap">
      <div class="search-bar" id="globalSearch">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Rechercher ou appuyer sur ⌘K…" id="searchInput" readonly onclick="openCommandPalette()">
      </div>
    </div>
    <div class="topbar-actions">
      <button class="theme-toggle" id="themeToggle" title="Changer de thème">🌙</button>
      <button class="icon-btn" onclick="showToast('info','Actualiser','Données actualisées avec succès')" title="Actualiser">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      </button>
      <button class="icon-btn" id="notifBtn" title="Notifications">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <div class="notif-dot"></div>
      </button>
    </div>
  `;

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('fc-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeBtn.textContent = '☀️';
  }
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('fc-theme', isLight ? 'light' : 'dark');
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      overlay && overlay.classList.toggle('open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('open');
    });
  }
}

// ── TOAST ─────────────────────────────────────────────────

function showToast(type, title, msg, duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = { success:'✅', error:'❌', warning:'⚠️', info:'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || 'ℹ️'}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button onclick="this.parentElement.remove()" style="color:var(--text-muted);font-size:16px;margin-left:8px;">×</button>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 250);
  }, duration);
}

// ── COMMAND PALETTE ────────────────────────────────────────

function openCommandPalette() {
  const palette = document.getElementById('commandPalette');
  if (!palette) return;
  palette.classList.add('open');
  setTimeout(() => document.getElementById('cmdInput')?.focus(), 50);
}
function closeCommandPalette() {
  document.getElementById('commandPalette')?.classList.remove('open');
}

function buildCommandPalette() {
  const palette = document.createElement('div');
  palette.className = 'command-palette';
  palette.id = 'commandPalette';
  palette.innerHTML = `
    <div class="command-box">
      <div class="command-input-wrap">
        <span style="font-size:16px;color:var(--text-muted)">🔍</span>
        <input class="command-input" id="cmdInput" placeholder="Rechercher pages, conducteurs, livraisons…">
        <div class="command-kbds"><span class="kbd">ÉCHAP</span></div>
      </div>
      <div class="command-results">
        <div class="command-section-label">Pages</div>
        ${NAV_ITEMS.map(n => `
          <a href="${n.href}" class="command-result-item" onclick="closeCommandPalette()">
            <div class="command-result-icon">${n.icon}</div>
            <div class="command-result-text">
              <div class="command-result-title">${n.label}</div>
              <div class="command-result-desc">${n.href}</div>
            </div>
          </a>`).join('')}
        <div class="command-section-label">Actions rapides</div>
        <div class="command-result-item" onclick="showToast('success','Action','Nouvelle livraison créée');closeCommandPalette()">
          <div class="command-result-icon">➕</div>
          <div class="command-result-text"><div class="command-result-title">Créer une livraison</div><div class="command-result-desc">Ouvrir le formulaire de livraison</div></div>
        </div>
        <div class="command-result-item" onclick="showToast('info','Alerte','Tableau de dispatch ouvert');closeCommandPalette()">
          <div class="command-result-icon">🗂️</div>
          <div class="command-result-text"><div class="command-result-title">Ouvrir le tableau de dispatch</div><div class="command-result-desc">Gérer les expéditions actives</div></div>
        </div>
      </div>
      <div class="command-footer">
        <div class="command-hint"><span class="kbd">↵</span> Sélectionner</div>
        <div class="command-hint"><span class="kbd">↑↓</span> Naviguer</div>
        <div class="command-hint"><span class="kbd">ÉCHAP</span> Fermer</div>
      </div>
    </div>
  `;
  document.body.appendChild(palette);
  palette.addEventListener('click', e => { if (e.target === palette) closeCommandPalette(); });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openCommandPalette(); }
    if (e.key === 'Escape') closeCommandPalette();
  });
}

// ── AI WIDGET ─────────────────────────────────────────────

function buildAIWidget() {
  const widget = document.createElement('div');
  widget.className = 'ai-widget';
  widget.innerHTML = `
    <div class="ai-panel" id="aiPanel">
      <div class="ai-panel-header">
        <span style="font-size:20px">🤖</span>
        <div>
          <div class="ai-panel-title">Assistant SAK-6</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.7)">Propulsé par SAK-6 IA</div>
        </div>
        <button onclick="toggleAI()" style="color:rgba(255,255,255,0.7);margin-left:auto;font-size:16px;">×</button>
      </div>
      <div class="ai-panel-body">
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">Astuces suggérées :</div>
        <div class="ai-suggestion" onclick="showToast('info','Aperçu IA','TRK-088 consomme plus de carburant cette semaine. Planifie une inspection.')">⛽ Anomalie carburant détectée sur TRK-088</div>
        <div class="ai-suggestion" onclick="showToast('info','Aperçu IA','3 conducteurs disponibles pour la livraison DEL-4815 à Casablanca.')">📦 Livraison non assignée à Casablanca</div>
        <div class="ai-suggestion" onclick="showToast('info','Aperçu IA','Optimisation d’itinéraire peut économiser 340 MAD pour DEL-4818.')">🗺️ Optimisation d’itinéraire disponible</div>
        <div class="ai-suggestion" onclick="showToast('warning','Alerte AI','CMR-2847 a 3 freinages brusques aujourd’hui. Risque élevé.')">⚠️ Alerte sécurité conducteurs: CMR-2847</div>
        <div style="margin-top:10px;">
          <input class="form-control" style="font-size:12px;padding:7px 12px;" placeholder="Posez une question à l'IA…" onkeypress="if(event.key==='Enter'){showToast('info','IA','Analyse de votre question...');this.value=''}">
        </div>
      </div>
    </div>
    <div class="ai-btn" onclick="toggleAI()" title="Assistant SAK-6">🤖</div>
  `;
  document.body.appendChild(widget);
}

function toggleAI() {
  document.getElementById('aiPanel')?.classList.toggle('open');
}

// ── ANIMATED COUNTERS ──────────────────────────────────────

function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseFloat(el.dataset.counter);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const isFloat = el.dataset.float === '1';
    const duration = 1200;
    const start = performance.now();
    function update(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const val = target * ease;
      el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
      if (t < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ── INIT ──────────────────────────────────────────────────

function initApp(pageTitle) {
  buildSidebar();
  buildTopbar(pageTitle);
  buildCommandPalette();
  buildAIWidget();

  // Restore theme
  const theme = localStorage.getItem('fc-theme');
  if (theme === 'light') document.body.classList.add('light-mode');

  // Animate on load
  setTimeout(animateCounters, 100);

  // Page enter animation
  const body = document.querySelector('.page-body');
  if (body) body.classList.add('page-enter');
}