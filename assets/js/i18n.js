/**
 * Quick & Quality - Standalone Language Module
 */
(function() {
  const STORAGE_KEY = "language";

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || "ar";
  }

  function applyLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    if (typeof setLanguage === 'function') {
      setLanguage(lang);
    }
  }

  function toggleLang() {
    const current = getLanguage();
    const next = current === "ar" ? "en" : "ar";
    applyLanguage(next);
  }

  window.toggleLanguage = toggleLang;

  document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll("#language-toggle, #utility-lang-btn");
    btns.forEach(btn => btn.addEventListener("click", toggleLang));
  });
})();
