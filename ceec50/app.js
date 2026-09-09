/**
 * CEREBRO DE LA APLICACIÓN - 50° ANIVERSARIO CENTRO DE EDUCACIÓN BÁSICA ESPECIAL CAJAMARCA
 * Lógica de navegación directa, modo kiosco, lightbox y música generativa (100% Offline)
 */

document.addEventListener("DOMContentLoaded", () => {
  // ================= ESTADO DE LA APLICACIÓN =================
  let currentCategory = "escuela-vieja";
  let activeGridItems = [];
  let currentLightboxIndex = 0;
  
  // Temporizadores
  let kioskInterval = null;
  let lightboxSlideshowInterval = null;
  let inactivityTimeout = null;
  
  // Música de Fondo (Web Audio API Synth & MP3)
  let audioContext = null;
  let isPlayingMusic = false;
  let ambientSynthTimer = null;
  const audioEl = document.getElementById("audio-bg-music");

  // Elementos del DOM
  const kioskScreen = document.getElementById("kiosk-screen");
  const btnStartExploration = document.getElementById("btn-start-exploration");
  const categoryListContainer = document.getElementById("category-list");
  const categoryBadge = document.getElementById("category-badge");
  const categoryTitle = document.getElementById("category-title");
  const categoryDescription = document.getElementById("category-description");
  const mediaGrid = document.getElementById("media-grid");
  const btnKioskReturn = document.getElementById("btn-kiosk-return");
  const sidebarLogoTrigger = document.getElementById("sidebar-logo-trigger");

  // Elementos del Lightbox
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxYoutubeContainer = document.getElementById("lightbox-youtube-container");
  const lightboxYoutubeIframe = document.getElementById("lightbox-youtube-iframe");
  const lightboxYoutubeDirectLink = document.getElementById("lightbox-youtube-direct-link");
  const lightboxVideoContainer = document.getElementById("lightbox-video-container");
  const lightboxVideo = document.getElementById("lightbox-video");
  const btnCloseLightbox = document.getElementById("btn-close-lightbox");
  const btnPrevLightbox = document.getElementById("btn-prev-lightbox");
  const btnNextLightbox = document.getElementById("btn-next-lightbox");
  const btnLightboxPlay = document.getElementById("btn-lightbox-play");
  const slideshowIcon = document.getElementById("slideshow-icon");
  const slideshowStatus = document.getElementById("slideshow-status");
  const lightboxYear = document.getElementById("lightbox-year");
  const lightboxCategoryName = document.getElementById("lightbox-category");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");

  // Controles de Música y Presentación
  const btnPlayMusic = document.getElementById("btn-play-music");
  const musicIcon = document.getElementById("music-icon");
  const musicText = document.getElementById("music-text");
  const btnSlideshowStart = document.getElementById("btn-slideshow-start");

  // ================= CREADOR DE ICONOS SVG DINÁMICOS =================
  const getIconSVG = (iconName) => {
    const icons = {
      school: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91v6.27h2V9L12 3z"/></svg>',
      tools: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1.1 0-1.4z"/></svg>',
      home: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
      heart: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
      star: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
      theater: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 8c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm3-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
      award: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>',
      camera: '<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M9.4 4l-1.8 2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-3.6l-1.8-2H9.4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>'
    };
    return icons[iconName] || icons.school;
  };

  // ================= 1. INICIALIZACIÓN DE LA INTERFAZ =================
  const initApp = () => {
    // Generar menú lateral de las 8 categorías del CEE
    categoryListContainer.innerHTML = "";
    GALLERY_DATA.categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "btn-category";
      btn.id = `btn-cat-${cat.id}`;
      btn.innerHTML = `
        ${getIconSVG(cat.icon)}
        <div class="cat-texts">
          <span class="cat-name">${cat.title}</span>
          <span class="cat-sub">${cat.subtitle}</span>
        </div>
      `;
      btn.addEventListener("click", () => switchCategory(cat.id));
      categoryListContainer.appendChild(btn);
    });

    // Activar primera categoría en el menú
    switchCategory("escuela-vieja");
    
    // Iniciar diapositivas del Protector de Pantalla (Bienvenida)
    startKioskSlideshow();
    
    // Activar monitor de inactividad
    resetInactivityTimer();
  };

  // ================= 2. CONTROL DE CATEGORÍAS =================
  const switchCategory = (categoryId) => {
    currentCategory = categoryId;
    
    // Actualizar botones activos en el menú
    document.querySelectorAll(".btn-category").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`btn-cat-${categoryId}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Datos de la categoría
    const catData = GALLERY_DATA.categories.find(c => c.id === categoryId);
    if (!catData) return;

    // Actualizar encabezado central
    categoryBadge.innerText = "Bodas de Oro • 50 Años";
    categoryTitle.innerText = catData.title;
    categoryDescription.innerText = catData.description;

    // Renderizar las imágenes de la categoría
    renderGrid();
  };

  // ================= 3. RENDERIZACIÓN DE LA REJILLA =================
  const renderGrid = () => {
    mediaGrid.innerHTML = "";
    
    // Filtrar elementos según categoría actual
    activeGridItems = GALLERY_DATA.items.filter(item => item.categoryId === currentCategory);

    if (activeGridItems.length === 0) {
      mediaGrid.innerHTML = `<div class="empty-message">No hay recuerdos en esta sección por el momento.</div>`;
      return;
    }

    // Renderizar tarjetas
    activeGridItems.forEach((item, index) => {
      const card = document.createElement("div");
      const isVideo = item.type === "video";
      card.className = `memory-card ${isVideo ? "video-card" : ""}`;
      
      const thumbUrl = isVideo ? (item.thumbnailUrl || "ceec50/assets/construccion1.jpg") : item.url;
      
      card.innerHTML = `
        <div class="card-media-wrapper">
          <img src="${thumbUrl}" alt="${item.title}" loading="lazy">
          ${isVideo ? `
            <div class="video-card-badge">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>Video Histórico</span>
            </div>
            <div class="video-play-pulse" title="Ver Video Documental">
              <svg viewBox="0 0 24 24" width="34" height="34">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
            </div>
          ` : ""}
        </div>
        <div class="card-details">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${isVideo ? `
            <div style="margin-top: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
              <span style="font-size: 0.82rem; color: #f7ca44; font-weight: 700;">▶ Ver en Reproductor</span>
              <a href="https://youtu.be/4ffiErIGYgI" target="_blank" rel="noopener noreferrer" class="video-card-direct-link" onclick="event.stopPropagation();">
                <span>Abrir en YouTube</span>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
              </a>
            </div>
          ` : ""}
        </div>
      `;
      
      card.addEventListener("click", () => openLightbox(index));
      mediaGrid.appendChild(card);
    });
  };

  // ================= 4. VISOR FULLSCREEN (LIGHTBOX) =================
  const openLightbox = (index) => {
    currentLightboxIndex = index;
    const item = activeGridItems[index];
    if (!item) return;

    stopLightboxSlideshow();
    lightbox.classList.add("active");
    renderLightboxItem(item);
  };

  const renderLightboxItem = (item) => {
    // Metadatos (Ocultamos fecha específica por incertidumbre)
    if (lightboxYear) {
      lightboxYear.style.display = "none";
    }
    const currentCatObj = GALLERY_DATA.categories.find(c => c.id === item.categoryId);
    lightboxCategoryName.innerText = currentCatObj ? currentCatObj.title : "CEBE Cajamarca";
    lightboxTitle.innerText = item.title;
    lightboxDescription.innerText = item.description;

    // Resetear estados visuales de medios
    lightboxImg.classList.remove("active");
    lightboxImg.style.display = "none";
    if (lightboxYoutubeContainer) {
      lightboxYoutubeContainer.classList.add("hide");
    }
    if (lightboxYoutubeIframe) {
      lightboxYoutubeIframe.src = "";
    }
    if (lightboxVideoContainer) {
      lightboxVideoContainer.classList.add("hide");
    }
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
      lightboxVideo.classList.add("hide");
    }

    if (item.type === "image") {
      lightboxImg.style.display = "block";
      lightboxImg.classList.add("active");
      lightboxImg.src = item.url;
      lightboxImg.alt = item.title;
      if (btnLightboxPlay) btnLightboxPlay.style.display = "inline-flex";
    } else if (item.type === "video") {
      // Ocultar botón de pase de diapositivas en videos
      if (btnLightboxPlay) btnLightboxPlay.style.display = "none";

      const isYoutube = item.url && (item.url.includes("youtu.be") || item.url.includes("youtube.com"));
      if (isYoutube || item.embedUrl) {
        if (lightboxYoutubeContainer) {
          lightboxYoutubeContainer.classList.remove("hide");
        }
        if (lightboxYoutubeIframe) {
          const embedUrl = item.embedUrl || "https://www.youtube-nocookie.com/embed/4ffiErIGYgI";
          lightboxYoutubeIframe.src = `${embedUrl}?autoplay=1&rel=0`;
        }
        if (lightboxYoutubeDirectLink) {
          lightboxYoutubeDirectLink.href = item.url || "https://youtu.be/4ffiErIGYgI";
        }
      } else {
        if (lightboxVideoContainer) {
          lightboxVideoContainer.classList.remove("hide");
        }
        if (lightboxVideo) {
          lightboxVideo.classList.remove("hide");
          lightboxVideo.src = item.url;
          lightboxVideo.poster = item.thumbnailUrl || "";
          lightboxVideo.play().catch(e => console.log("Auto-play bloqueado: ", e));
        }
      }
    }
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    if (lightboxYoutubeIframe) {
      lightboxYoutubeIframe.src = "";
    }
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
    }
    stopLightboxSlideshow();
  };

  const navigateLightbox = (direction) => {
    if (activeGridItems.length === 0) return;
    if (lightboxYoutubeIframe) {
      lightboxYoutubeIframe.src = "";
    }
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = "";
    }
    currentLightboxIndex = (currentLightboxIndex + direction + activeGridItems.length) % activeGridItems.length;
    renderLightboxItem(activeGridItems[currentLightboxIndex]);
  };

  const startLightboxSlideshow = () => {
    if (lightboxSlideshowInterval) clearInterval(lightboxSlideshowInterval);
    btnLightboxPlay.classList.add("playing");
    slideshowStatus.innerText = "Pausar";
    slideshowIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    lightboxSlideshowInterval = setInterval(() => {
      navigateLightbox(1);
    }, 5000); // 5 segundos por recuerdo en pase de diapositivas
  };

  const stopLightboxSlideshow = () => {
    if (lightboxSlideshowInterval) {
      clearInterval(lightboxSlideshowInterval);
      lightboxSlideshowInterval = null;
    }
    btnLightboxPlay.classList.remove("playing");
    slideshowStatus.innerText = "Reproducir";
    slideshowIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
  };

  const toggleLightboxSlideshow = () => {
    if (lightboxSlideshowInterval) {
      stopLightboxSlideshow();
    } else {
      startLightboxSlideshow();
    }
  };

  // ================= 5. SIMULADOR DE CINE ANTIGUO EN CANVAS =================
  let simulatorAnimationId = null;
  let simulatorAudioContext = null;
  let projectorNoiseNode = null;

  const startRetroSimulator = (titleText) => {
    videoSimulator.classList.remove("hide");
    cinemaCanvas.width = cinemaCanvas.offsetWidth || 800;
    cinemaCanvas.height = cinemaCanvas.offsetHeight || 600;
    const ctx = cinemaCanvas.getContext("2d");
    
    let frameCount = 0;
    let projectorAngle = 0;

    const drawFrame = () => {
      frameCount++;
      ctx.fillStyle = "#0c0a09";
      ctx.fillRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
      ctx.lineWidth = 15;
      ctx.strokeRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);
      
      ctx.save();
      ctx.translate(cinemaCanvas.width / 2, cinemaCanvas.height / 2 - 40);
      projectorAngle += 0.05;
      ctx.rotate(projectorAngle);
      
      ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 70, 0, Math.PI * 2);
      ctx.stroke();
      
      for (let i = 0; i < 5; i++) {
        ctx.rotate((Math.PI * 2) / 5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(70, 0);
        ctx.stroke();
      }
      ctx.restore();

      ctx.font = 'italic 16px "Georgia", serif';
      ctx.fillStyle = "#a69e94";
      ctx.textAlign = "center";
      ctx.fillText("PROYECTANDO ARCHIVO DEL RECUERDO...", cinemaCanvas.width / 2, cinemaCanvas.height / 2 + 100);

      ctx.fillStyle = `rgba(212, 175, 55, ${Math.random() * 0.05})`;
      ctx.fillRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);

      if (Math.random() < 0.3) {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.12)";
        ctx.lineWidth = Math.random() * 1.5;
        const lineX = Math.random() * cinemaCanvas.width;
        ctx.beginPath();
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, cinemaCanvas.height);
        ctx.stroke();
      }

      const numDust = Math.floor(Math.random() * 6);
      ctx.fillStyle = "rgba(212, 175, 55, 0.2)";
      for (let i = 0; i < numDust; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * cinemaCanvas.width, Math.random() * cinemaCanvas.height, Math.random() * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      const gradient = ctx.createRadialGradient(
        cinemaCanvas.width / 2, cinemaCanvas.height / 2, cinemaCanvas.width / 4,
        cinemaCanvas.width / 2, cinemaCanvas.height / 2, cinemaCanvas.width * 0.7
      );
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.75)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, cinemaCanvas.width, cinemaCanvas.height);

      simulatorAnimationId = requestAnimationFrame(drawFrame);
    };

    drawFrame();
    
    btnSimulatorPlay.onclick = () => {
      startProjectorSynth();
      btnSimulatorPlay.innerHTML = `<span>PROYECTOR ENCENDIDO 🎞️</span>`;
      btnSimulatorPlay.disabled = true;
    };
  };

  const stopRetroSimulator = () => {
    if (simulatorAnimationId) {
      cancelAnimationFrame(simulatorAnimationId);
      simulatorAnimationId = null;
    }
    stopProjectorSynth();
    btnSimulatorPlay.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg><span>ENCENDER PROYECTOR</span>`;
    btnSimulatorPlay.disabled = false;
    videoSimulator.classList.add("hide");
  };

  const startProjectorSynth = () => {
    try {
      if (!simulatorAudioContext) {
        simulatorAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (simulatorAudioContext.state === "suspended") {
        simulatorAudioContext.resume();
      }

      const bufferSize = 2 * simulatorAudioContext.sampleRate;
      const noiseBuffer = simulatorAudioContext.createBuffer(1, bufferSize, simulatorAudioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = simulatorAudioContext.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = simulatorAudioContext.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 600;
      filter.Q.value = 1.0;

      const gainNode = simulatorAudioContext.createGain();
      gainNode.gain.value = 0.02;

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(simulatorAudioContext.destination);

      whiteNoise.start();
      projectorNoiseNode = whiteNoise;

      const humOsc = simulatorAudioContext.createOscillator();
      const humGain = simulatorAudioContext.createGain();
      humOsc.type = "sine";
      humOsc.frequency.value = 60;
      humGain.gain.value = 0.005;
      humOsc.connect(humGain);
      humGain.connect(simulatorAudioContext.destination);
      humOsc.start();
      
      projectorNoiseNode.humOsc = humOsc;
    } catch (e) {
      console.log("No se pudo iniciar el sintetizador de proyector: ", e);
    }
  };

  const stopProjectorSynth = () => {
    if (projectorNoiseNode) {
      try {
        projectorNoiseNode.stop();
        if (projectorNoiseNode.humOsc) {
          projectorNoiseNode.humOsc.stop();
        }
      } catch(e) {}
      projectorNoiseNode = null;
    }
  };

  // ================= 6. SINTETIZADOR DE MÚSICA AMBIENTAL (WEB AUDIO API) =================
  const startAmbientSynth = () => {
    if (ambientSynthTimer) return;
    
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      // Escala pentatónica mayor cálida y emotiva
      const scale = [196.00, 220.00, 246.94, 293.66, 329.63, 392.00, 440.00, 493.88, 587.33, 659.25];

      const playGentleNote = () => {
        if (!isPlayingMusic) return;

        const freq = scale[Math.floor(Math.random() * scale.length)];
        const osc = audioContext.createOscillator();
        const oscGain = audioContext.createGain();
        
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        oscGain.gain.setValueAtTime(0, audioContext.currentTime);
        oscGain.gain.linearRampToValueAtTime(0.04, audioContext.currentTime + 2.0);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 6.0);

        const filter = audioContext.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, audioContext.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 6.1);

        const nextTime = 3000 + Math.random() * 2000;
        ambientSynthTimer = setTimeout(playGentleNote, nextTime);
      };

      playGentleNote();
    } catch (e) {
      console.log("No se pudo iniciar el sintetizador ambiental: ", e);
    }
  };

  const stopAmbientSynth = () => {
    if (ambientSynthTimer) {
      clearTimeout(ambientSynthTimer);
      ambientSynthTimer = null;
    }
  };

  const toggleMusic = () => {
    isPlayingMusic = !isPlayingMusic;
    
    if (isPlayingMusic) {
      audioEl.play()
        .then(() => {
          musicText.innerText = "Música: Encendida";
          btnPlayMusic.classList.add("active");
          musicIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>';
        })
        .catch(err => {
          startAmbientSynth();
          musicText.innerText = "Música: Sintetizada";
          btnPlayMusic.classList.add("active");
          musicIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>';
        });
    } else {
      audioEl.pause();
      stopAmbientSynth();
      musicText.innerText = "Música Apagada";
      btnPlayMusic.classList.remove("active");
      musicIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4.27 3L3 4.27l9 9v.28c-.53-.21-1.12-.3-1.75-.25-1.78.13-3.1 1.67-2.95 3.44.14 1.76 1.7 3.07 3.48 2.94 1.54-.12 2.74-1.28 2.92-2.73l.03-.95 6 6L21 21.73 4.27 3zM21 3h-7v4.9l2 2V5h3v3h-3v1.88l2 2V3z"/></svg>';
    }
  };

  // ================= 7. PANTALLA DE ESPERA / MODO KIOSCO AUTOMÁTICO =================
  const startKioskSlideshow = () => {
    const slides = document.querySelectorAll(".kiosk-slide");
    let currentSlide = 0;

    if (kioskInterval) clearInterval(kioskInterval);
    
    kioskInterval = setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 8000);
  };

  const showKioskScreen = () => {
    kioskScreen.classList.add("active");
    stopLightboxSlideshow();
    closeLightbox();
  };

  const hideKioskScreen = () => {
    kioskScreen.classList.remove("active");
    resetInactivityTimer();
    
    if (!isPlayingMusic) {
      toggleMusic();
    }
  };

  const resetInactivityTimer = () => {
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    if (kioskScreen.classList.contains("active")) return;

    inactivityTimeout = setTimeout(() => {
      showKioskScreen();
    }, 60000);
  };

  // ================= 8. MANEJADORES DE EVENTOS =================
  btnStartExploration.addEventListener("click", hideKioskScreen);
  btnKioskReturn.addEventListener("click", showKioskScreen);
  sidebarLogoTrigger.addEventListener("click", showKioskScreen);

  btnPlayMusic.addEventListener("click", toggleMusic);
  
  btnSlideshowStart.addEventListener("click", () => {
    if (activeGridItems.length > 0) {
      openLightbox(0);
      startLightboxSlideshow();
    }
  });

  btnCloseLightbox.addEventListener("click", closeLightbox);
  btnPrevLightbox.addEventListener("click", () => navigateLightbox(-1));
  btnNextLightbox.addEventListener("click", () => navigateLightbox(1));
  btnLightboxPlay.addEventListener("click", toggleLightboxSlideshow);

  const activityEvents = ["mousemove", "mousedown", "click", "scroll", "keydown"];
  activityEvents.forEach(evt => {
    window.addEventListener(evt, resetInactivityTimer, { passive: true });
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    
    if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    } else if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === " ") {
      toggleLightboxSlideshow();
    }
  });

  // Control del Menú Lateral en Móviles
  const mobileMenuTrigger = document.getElementById("btn-mobile-menu-trigger");
  const sidebarDrawer = document.getElementById("sidebar-drawer");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  const closeMobileMenu = () => {
    if (sidebarDrawer) sidebarDrawer.classList.remove("menu-open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
  };

  if (mobileMenuTrigger) {
    mobileMenuTrigger.addEventListener("click", () => {
      if (sidebarDrawer) sidebarDrawer.classList.toggle("menu-open");
      if (sidebarOverlay) sidebarOverlay.classList.toggle("active");
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeMobileMenu);
  }

  categoryListContainer.addEventListener("click", (e) => {
    if (e.target.closest(".btn-category")) {
      closeMobileMenu();
    }
  });

  // ================= 9. INICIO =================
  initApp();
});
