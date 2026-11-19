/* app.js — KidsZen Toys interactive logic */

/* ─── Navbar scroll effect ─── */
const navbar  = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNavLink();
}, { passive: true });

/* ─── Hamburger mobile menu ─── */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─── Active nav link on scroll ─── */
function updateActiveNavLink() {
  const sections = ['home', 'shop', 'about', 'contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100) current = id;
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ─── Animate on scroll ─── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

/* ─── Age filter state ─── */
let currentFilter = 'all';

function filterProducts(ageGroup) {
  currentFilter = ageGroup;

  // Update tab UI
  document.querySelectorAll('.age-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === ageGroup);
    tab.setAttribute('aria-selected', tab.dataset.filter === ageGroup);
  });

  renderProducts(ageGroup);

  // Scroll to shop section
  const shopEl = document.getElementById('shop');
  if (shopEl) {
    const offset = shopEl.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

/* ─── Age tab click handlers ─── */
document.querySelectorAll('.age-tab').forEach(tab => {
  tab.addEventListener('click', () => filterProducts(tab.dataset.filter));
});

/* ─── Navbar age links ─── */
document.querySelectorAll('a[href^="#age-"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').replace('#', '');
    const map = { 'age-0-2': '0-2', 'age-2-5': '2-5', 'age-5-10': '5-10' };
    if (map[id]) {
      e.preventDefault();
      filterProducts(map[id]);
    }
  });
});

/* ─── Render products ─── */
function renderProducts(filter) {
  const grid     = document.getElementById('productsGrid');
  const noResult = document.getElementById('noResults');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.ageGroup === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }

  noResult.style.display = 'none';
  grid.innerHTML = filtered.map((p, i) => buildCard(p, i)).join('');

  // Filter and render combos based on age group
  renderCombos(filter);

  // Attach click listeners
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-amazon-link, .product-actions .btn-site-link')) return;
      const id = card.dataset.id;
      openModal(products.find(p => p.id === id));
    });
  });

  grid.querySelectorAll('.btn-amazon-link').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
  });
}

function buildCard(p, i) {
  const delay = `animation-delay: ${i * 60}ms`;
  const imgHtml = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" />`
    : `<div class="product-img-placeholder">
         <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C8CADC" stroke-width="1.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
         <span style="font-size:12px;color:#C8CADC;margin-top:4px;">Image coming soon</span>
       </div>`;

  const tagHtml = p.tag
    ? `<div class="product-tag ${p.tag === 'Bestseller' ? 'bestseller' : ''}">${p.tag}</div>`
    : '';

  return `
    <article class="product-card" data-id="${p.id}" style="${delay}" role="button" tabindex="0" aria-label="View ${p.name} details">
      <div class="product-img-wrap">
        ${imgHtml}
        ${tagHtml}
      </div>
      <div class="product-info">
        <span class="product-age-badge">Age: ${p.age}</span>
        <h3 class="product-name">${p.name}</h3>
        ${p.tagline ? `<p class="product-tagline">${p.tagline}</p>` : ''}
        ${p.price ? `<div class="product-price">${p.price}</div>` : ''}
        <div class="product-actions">
          <a href="${p.amazon}" target="_blank" rel="noopener" class="btn btn-amazon btn-amazon-link" onclick="event.stopPropagation()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Buy Now
          </a>
          <button class="bs-details-btn" onclick="event.stopPropagation(); openModalById('${p.id}')" title="View details">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            View Details
          </button>
        </div>
      </div>
    </article>`;
}

/* ─── Modal ─── */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function findCatalogItem(id) {
  return products.find(prod => prod.id === id) || (typeof combos !== 'undefined' && combos.find(prod => prod.id === id));
}

function openModalById(id) {
  const p = findCatalogItem(id);
  if (p) openModal(p);
}

function openModal(p) {
  if (!p) return;
  document.body.style.overflow = 'hidden';

  // ── Image gallery ──
  const imgs = (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);
  const galleryThumbs = imgs.map((src, i) =>
    `<button class="mgal-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" onclick="mgalSelect(${i})">
       <img src="${src}" alt="thumb ${i+1}" loading="lazy" onerror="this.closest('.mgal-thumb').style.display='none'" />
     </button>`
  ).join('');
  const mainImgHtml = imgs.length
    ? `<img id="mgalMain" src="${imgs[0]}" alt="${p.name}" class="mgal-main-img" loading="lazy" />`
    : `<div class="mgal-placeholder"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

  // ── Badges ──
  const tagHtml = (p.tag && p.tag !== 'Combo') ? `<span class="m2-badge m2-badge--hot">${p.tag}</span>` : '';

  // ── Meta chips ──
  const metaChips = [
    p.age ? `<span class="m2-chip"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg> Age: ${p.age}</span>` : '',
    p.players ? `<span class="m2-chip"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> ${p.players}</span>` : '',
    p.price ? `<span class="m2-chip">${p.price}</span>` : '',
  ].filter(Boolean).join('');

  // ── Tab content ──
  const highlightsHtml = (p.highlights && p.highlights.length)
    ? p.highlights.map(h => `<div class="m2-list-item"><span class="m2-dot"></span>${h}</div>`).join('')
    : '<p class="m2-empty">No highlights listed.</p>';

  const skillsHtml = (p.skills && p.skills.length)
    ? p.skills.map(s => `<span class="m2-skill-tag">${s}</span>`).join('')
    : '<p class="m2-empty">No skills listed.</p>';

  const inTheBoxHtml = (p.inTheBox && p.inTheBox.length)
    ? p.inTheBox.map((item, i) => `<div class="m2-box-item"><span class="m2-box-num">${i+1}</span>${item}</div>`).join('')
    : '<p class="m2-empty">Details coming soon.</p>';

  const howToPlayHtml = (p.howToPlay && p.howToPlay.length)
    ? p.howToPlay.map((step, i) => `<div class="m2-step"><span class="m2-step-num">${i+1}</span><span>${step}</span></div>`).join('')
    : null;

  const perfectForHtml = (p.perfectFor && p.perfectFor.length)
    ? `<div class="m2-perfect-wrap">${p.perfectFor.map(pf => `<span class="m2-perfect-tag">${pf}</span>`).join('')}</div>`
    : '';

  modalContent.innerHTML = `
    <div class="m2-layout">

      <!-- LEFT: Gallery -->
      <div class="m2-gallery">
        <div class="m2-main-img-wrap">${mainImgHtml}</div>
        ${imgs.length > 1 ? `<div class="m2-thumbs">${galleryThumbs}</div>` : ''}
      </div>

      <!-- RIGHT: Info -->
      <div class="m2-info">
        ${tagHtml ? `<div class="m2-badges">${tagHtml}</div>` : ''}
        <h2 class="m2-name" id="modalTitle">${p.name}</h2>
        ${p.tagline ? `<p class="m2-tagline">${p.tagline}</p>` : ''}
        <div class="m2-chips">${metaChips}</div>
        <p class="m2-desc">${p.description}</p>

        <!-- Tabs -->
        <div class="m2-tabs">
          <button class="m2-tab active" onclick="m2Tab(this,'highlights')">Highlights</button>
          <button class="m2-tab" onclick="m2Tab(this,'skills')">Skills</button>
          <button class="m2-tab" onclick="m2Tab(this,'inbox')">What's Inside</button>
          ${howToPlayHtml ? `<button class="m2-tab" onclick="m2Tab(this,'howtoplay')">How to Play</button>` : ''}
        </div>

        <div class="m2-tab-panels">
          <div class="m2-panel active" id="m2p-highlights">${highlightsHtml}</div>
          <div class="m2-panel" id="m2p-skills"><div class="m2-skills-wrap">${skillsHtml}</div></div>
          <div class="m2-panel" id="m2p-inbox">${inTheBoxHtml}</div>
          ${howToPlayHtml ? `<div class="m2-panel" id="m2p-howtoplay">${howToPlayHtml}</div>` : ''}
        </div>

        ${perfectForHtml ? `<div class="m2-perfect"><span class="m2-perfect-label">Perfect for:</span>${perfectForHtml}</div>` : ''}

        <!-- Actions -->
        <div class="m2-actions">
          <a href="${p.amazon}" target="_blank" rel="noopener" class="btn btn-amazon m2-btn-buy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Buy Now
          </a>
        </div>
      </div>
    </div>`;

  // store images for gallery switching
  window._mgalImgs = imgs;
  modalOverlay.classList.add('open');
}

/* ─── Modal gallery & tab helpers ─── */
function mgalSelect(idx) {
  const imgs = window._mgalImgs || [];
  if (!imgs[idx]) return;
  const main = document.getElementById('mgalMain');
  if (main) main.src = imgs[idx];
  document.querySelectorAll('.mgal-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}

function m2Tab(btn, panelId) {
  btn.closest('.m2-info').querySelectorAll('.m2-tab').forEach(t => t.classList.remove('active'));
  btn.closest('.m2-info').querySelectorAll('.m2-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('m2p-' + panelId);
  if (panel) panel.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

/* ─── Keyboard accessibility for product cards ─── */
document.getElementById('productsGrid').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.product-card');
    if (card) {
      e.preventDefault();
      openModalById(card.dataset.id);
    }
  }
});

/* ─── Hero image fallback ─── */
const heroBgImg = document.getElementById('heroBgImg');
if (heroBgImg) {
  heroBgImg.onerror = () => {
    heroBgImg.style.display = 'none';
    heroBgImg.closest('.hero-bg').style.background =
      'linear-gradient(135deg, #1A1A2E 0%, #2D3A6B 50%, #1A1A2E 100%)';
  };
}

function renderCombos(filter = 'all') {
  const grid = document.getElementById('combosGrid');
  const comboBlock = document.getElementById('comboBlock');
  
  if (!grid || typeof combos === 'undefined') return;
  
  // Filter combos by age group
  const filteredCombos = filter === 'all'
    ? combos
    : combos.filter(c => c.ageGroup === filter);
  
  // Show or hide combo section based on filtered results
  if (comboBlock) {
    comboBlock.style.display = filteredCombos.length > 0 ? '' : 'none';
  }
  
  // Render filtered combos
  grid.innerHTML = filteredCombos.map((p, i) => buildCard(p, i)).join('');
  
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-amazon-link, .product-actions .btn-site-link')) return;
      openModal(findCatalogItem(card.dataset.id));
    });
  });
  grid.querySelectorAll('.btn-amazon-link').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
  });
}

document.getElementById('combosGrid').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.product-card');
    if (card) {
      e.preventDefault();
      openModalById(card.dataset.id);
    }
  }
});

/* ─── Init ─── */
renderProducts('all');

/* ─── Search functionality ─── */
const searchInput = document.getElementById('navbarSearchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      // Show all products for current filter
      renderProducts(currentFilter);
      return;
    }
    
    // Search in all products and combos
    const allItems = [...products, ...combos];
    const filtered = allItems.filter(item => {
      return item.name.toLowerCase().includes(query) ||
             item.description.toLowerCase().includes(query) ||
             (item.tagline && item.tagline.toLowerCase().includes(query)) ||
             (item.skills && item.skills.some(s => s.toLowerCase().includes(query)));
    });
    
    // Display search results
    const grid = document.getElementById('productsGrid');
    const noResult = document.getElementById('noResults');
    const comboBlock = document.getElementById('comboBlock');
    
    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResult.style.display = 'block';
      noResult.innerHTML = '<p>No products found for "' + query + '"</p>';
      if (comboBlock) comboBlock.style.display = 'none';
      return;
    }
    
    noResult.style.display = 'none';
    if (comboBlock) comboBlock.style.display = 'none';
    grid.innerHTML = filtered.map((p, i) => buildCard(p, i)).join('');
    
    // Attach click listeners
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-amazon-link, .product-actions .btn-site-link')) return;
        const id = card.dataset.id;
        openModal(findCatalogItem(id));
      });
    });
    
    grid.querySelectorAll('.btn-amazon-link').forEach(btn => {
      btn.addEventListener('click', (e) => e.stopPropagation());
    });
    
    // Scroll to products grid after rendering
    setTimeout(() => {
      const offset = grid.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 50);
  });
}
