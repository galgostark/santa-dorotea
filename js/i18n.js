/**
 * MOTOR DE INTERNACIONALIZACIÓN ULTRA-LIVIANO (i18n)
 * Soporta Español (es), Alemán (de), Inglés (en) y Francés (fr)
 */
(function() {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'de', 'en', 'fr'];
  const DEFAULT_LANG = 'es';

  function getInitialLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) return urlLang;

    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang && SUPPORTED_LANGS.includes(savedLang)) return savedLang;

    const navLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(navLang)) return navLang;

    return DEFAULT_LANG;
  }

  let currentLang = getInitialLang();

  function applyTranslations(lang) {
    if (!window.SITE_TRANSLATIONS || !window.SITE_TRANSLATIONS[lang]) {
      lang = DEFAULT_LANG;
    }
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('preferred_lang', lang);

    const dict = window.SITE_TRANSLATIONS[lang] || {};

    // 1. Text content / HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 2. Attributes (e.g. data-i18n-attr="placeholder:key|title:key2")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrDefs = el.getAttribute('data-i18n-attr').split('|');
      attrDefs.forEach(def => {
        const [attr, key] = def.split(':');
        if (attr && key && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });

    // 3. SEO Meta Tags
    if (dict.meta_title) document.title = dict.meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) metaDesc.setAttribute('content', dict.meta_desc);
    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw && dict.meta_keywords) metaKw.setAttribute('content', dict.meta_keywords);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict.meta_title) ogTitle.setAttribute('content', dict.meta_title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict.meta_desc) ogDesc.setAttribute('content', dict.meta_desc);

    // 4. Update Language switcher active states
    document.querySelectorAll('.site-lang-btn, .ceec-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  window.setSiteLanguage = function(lang) {
    if (SUPPORTED_LANGS.includes(lang)) {
      applyTranslations(lang);
    }
  };

  window.getSiteLanguage = function() {
    return currentLang;
  };

  document.addEventListener('DOMContentLoaded', function() {
    applyTranslations(currentLang);

    // Bind all buttons
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('.site-lang-btn, .ceec-lang-btn');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          e.preventDefault();
          window.setSiteLanguage(lang);
        }
      }
    });
  });
})();
