// (function () {

//     const STORAGE_KEY = "theme";

//     function applyTheme(theme) {

//         document.documentElement.dataset.theme = theme;

//         localStorage.setItem(
//             STORAGE_KEY,
//             theme
//         );

//         updateIcon(theme);

//     }


//     function getTheme() {

//         return localStorage.getItem(STORAGE_KEY)
//             || "dark";

//     }


//     function toggleTheme() {

//         const current =
//             document.documentElement.dataset.theme;

//         const next =
//             current === "dark"
//                 ? "light"
//                 : "dark";


//         applyTheme(next);

//     }


//     function updateIcon(theme) {

//         const icon =
//             document.getElementById("theme-icon");


//         if (!icon) return;


//         if (theme === "dark") {

//             icon.className =
//                 "fa-solid fa-moon";

//         } else {

//             icon.className =
//                 "fa-solid fa-sun";

//         }

//     }


//     document.addEventListener(
//         "DOMContentLoaded",
//         () => {

//             applyTheme(getTheme());


//             const btn =
//                 document.getElementById(
//                     "theme-toggle"
//                 );


//             if (btn) {

//                 btn.addEventListener(
//                     "click",
//                     toggleTheme
//                 );

//             }


//         });


// })();

// assets/js/theme.js
(function () {
  const STORAGE_KEY = "theme";
  
  // قراءة الثيم أو اعتماده كـ dark افتراضياً
  const savedTheme = localStorage.getItem(STORAGE_KEY) || "dark";

  // تطبيق الثيم فوراً على مستوى الـ HTML قبل رسم الصفحة
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // دالة التبديل عند النقر
  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem(STORAGE_KEY, next);
    updateIcon(next);
  };

  window.updateThemeIcon = function () {
    const icon = document.getElementById("theme-icon");
    if (!icon) return;
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark") {
      icon.className = "fa-solid fa-sun text-sm sm:text-base text-amber-400";
    } else {
      icon.className = "fa-solid fa-moon text-sm sm:text-base";
    }
  };
})();