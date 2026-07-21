/**
 * Quick & Quality - Standalone Theme Module
 */
(function() {
  const STORAGE_KEY = "theme";

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    updateIcon(theme);
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme || getTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  function updateIcon(theme) {
    const icons = document.querySelectorAll("#theme-icon, #utility-theme-icon");
    icons.forEach(icon => {
      if (theme === "dark") {
        icon.className = "fa-solid fa-moon text-amber-400 text-sm sm:text-base";
      } else {
        icon.className = "fa-solid fa-sun text-amber-400 text-sm sm:text-base";
      }
    });
  }

  window.setTheme = applyTheme;
  window.toggleTheme = toggleTheme;

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getTheme());
    const btns = document.querySelectorAll("#theme-toggle, #utility-theme-btn");
    btns.forEach(btn => btn.addEventListener("click", toggleTheme));
  });
})();
