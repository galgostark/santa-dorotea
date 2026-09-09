/**
 * CONTROLADOR INTEGRADO - 50° ANIVERSARIO CEEC CAJAMARCA
 * Asociación Santa Dorotea (1976 - 2026)
 */

document.addEventListener("DOMContentLoaded", () => {
  let currentCategory = "all";

  const getLang = () => {
    return localStorage.getItem("preferred_lang") || document.documentElement.lang || "es";
  };

  const getActiveData = () => {
    const lang = getLang();
    if (lang === "de" && window.GALLERY_DATA_DE) return window.GALLERY_DATA_DE;
    if (lang === "en" && window.GALLERY_DATA_EN) return window.GALLERY_DATA_EN;
    if (lang === "fr" && window.GALLERY_DATA_FR) return window.GALLERY_DATA_FR;
    return window.GALLERY_DATA_ES || window.GALLERY_DATA;
  };

  const getTranslations = () => {
    const lang = getLang();
    const t = window.SITE_TRANSLATIONS && window.SITE_TRANSLATIONS[lang] ? window.SITE_TRANSLATIONS[lang] : {};
    return {
      filterAll: t.ceec_filter_all || (lang === 'de' ? 'Alle Erinnerungen' : lang === 'en' ? 'All Memories' : lang === 'fr' ? 'Tous les Souvenirs' : 'Todos los Recuerdos'),
      videoLabel: t.ceec_video_label || (lang === 'de' ? 'Historisches Video' : lang === 'en' ? 'Historical Video' : lang === 'fr' ? 'Vidéo Historique' : 'Video Histórico'),
      videoOpenYt: t.ceec_video_open_yt || (lang === 'de' ? 'Auf YouTube ansehen' : lang === 'en' ? 'Watch on YouTube' : lang === 'fr' ? 'Regarder sur YouTube' : 'Ver en YouTube (youtu.be/4ffiErIGYgI)'),
      allTitle: lang === 'de' ? 'Alle Erinnerungen (1976 - 2026)' : lang === 'en' ? 'All Memories (1976 - 2026)' : lang === 'fr' ? 'Tous les Souvenirs (1976 - 2026)' : 'Todos los Recuerdos (1976 - 2026)',
      allDesc: lang === 'de' ? 'Erkunden Sie das vollständige Foto- und Videoarchiv der 50-jährigen Geschichte des CEEC Cajamarca.' :
               lang === 'en' ? 'Explore the complete photographic and video archive commemorating 50 years of CEEC Cajamarca.' :
               lang === 'fr' ? 'Découvrez l\'archive complète des photos et vidéos commémorant 50 ans d\'histoire du CEEC Cajamarca.' :
               'Explora la colección fotográfica y audiovisual completa de los 50 años de historia y amor del CEEC Cajamarca.'
    };
  };

  // Renderizar filtros de categoría
  const renderFilterNav = () => {
    const navEl = document.getElementById("ceec-filter-nav");
    if (!navEl) return;

    const data = getActiveData();
    const t = getTranslations();
    navEl.innerHTML = "";

    // Botón "Todos"
    const allBtn = document.createElement("button");
    allBtn.className = `ceec-filter-pill ${currentCategory === "all" ? "active" : ""}`;
    allBtn.setAttribute("data-cat-id", "all");
    allBtn.innerHTML = `<span class="icon icon-grid mr-1"></span> ${t.filterAll}`;
    allBtn.addEventListener("click", () => selectCategory("all"));
    navEl.appendChild(allBtn);

    // Botones para cada categoría
    data.categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `ceec-filter-pill ${currentCategory === cat.id ? "active" : ""}`;
      btn.setAttribute("data-cat-id", cat.id);
      btn.innerHTML = `<span>${cat.title}</span>`;
      btn.addEventListener("click", () => selectCategory(cat.id));
      navEl.appendChild(btn);
    });
  };

  // Seleccionar categoría
  const selectCategory = (catId) => {
    currentCategory = catId;
    
    // Actualizar clase activa en botones
    document.querySelectorAll(".ceec-filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-cat-id") === catId);
    });

    renderCategoryHeader();
    renderGrid();
  };

  // Renderizar encabezado de la categoría
  const renderCategoryHeader = () => {
    const titleEl = document.getElementById("ceec-cat-title");
    const descEl = document.getElementById("ceec-cat-desc");
    if (!titleEl || !descEl) return;

    const data = getActiveData();
    const t = getTranslations();

    if (currentCategory === "all") {
      titleEl.innerText = t.allTitle;
      descEl.innerText = t.allDesc;
    } else {
      const cat = data.categories.find(c => c.id === currentCategory);
      if (cat) {
        titleEl.innerText = cat.title;
        descEl.innerText = cat.description;
      }
    }
  };

  // Renderizar rejilla de tarjetas con fotos y video
  const renderGrid = () => {
    const gridEl = document.getElementById("ceec-grid");
    if (!gridEl) return;

    const data = getActiveData();
    const t = getTranslations();
    gridEl.innerHTML = "";

    // Filtrar elementos
    let items = data.items;
    if (currentCategory !== "all") {
      items = items.filter(item => item.categoryId === currentCategory);
    }

    if (!items || items.length === 0) {
      gridEl.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted">No hay recuerdos en esta sección por el momento.</p>
        </div>
      `;
      return;
    }

    // Mapa de categorías para nombres
    const catMap = {};
    data.categories.forEach(c => { catMap[c.id] = c.title; });

    items.forEach((item, index) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4 mb-4";

      const isVideo = item.type === "video";
      const catName = catMap[item.categoryId] || "";
      const thumbUrl = isVideo ? (item.thumbnailUrl || "ceec50/assets/construccion1.jpg") : item.url;

      if (isVideo) {
        col.innerHTML = `
          <div class="ceec-memory-card">
            <div class="ceec-card-media">
              <a href="https://www.youtube.com/watch?v=4ffiErIGYgI" data-fancybox="ceec-gallery" data-caption="${item.title} - ${item.description || ''}">
                <img src="${thumbUrl}" alt="${item.title}" loading="lazy">
                <div class="ceec-video-overlay-badge"><span class="icon icon-play"></span> ${t.videoLabel}</div>
                <div class="ceec-video-play-btn"><span class="icon icon-play" style="font-size: 1.4rem; margin-left: 3px;"></span></div>
              </a>
            </div>
            <div class="ceec-card-body">
              <div>
                <span class="ceec-card-cat-badge">${catName}</span>
                <h4 class="ceec-card-title">${item.title}</h4>
                ${item.description ? `<p class="text-muted small mb-2">${item.description}</p>` : ''}
              </div>
              <a href="https://youtu.be/4ffiErIGYgI" target="_blank" rel="noopener noreferrer" class="ceec-card-yt-link">
                <span class="icon icon-play"></span> ${t.videoOpenYt}
              </a>
            </div>
          </div>
        `;
      } else {
        col.innerHTML = `
          <div class="ceec-memory-card">
            <div class="ceec-card-media">
              <a href="${item.url}" data-fancybox="ceec-gallery" data-caption="${item.title}">
                <img src="${thumbUrl}" alt="${item.title}" loading="lazy">
              </a>
            </div>
            <div class="ceec-card-body">
              <div>
                <span class="ceec-card-cat-badge">${catName}</span>
                <h4 class="ceec-card-title">${item.title}</h4>
              </div>
            </div>
          </div>
        `;
      }

      gridEl.appendChild(col);
    });
  };

  const renderApp = () => {
    renderFilterNav();
    renderCategoryHeader();
    renderGrid();
  };

  // Inicializar interfaz
  renderApp();

  // Escuchar cambios de idioma desde la barra de navegación principal
  document.querySelectorAll(".site-lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        renderApp();
      }, 50);
    });
  });
});
