const componentFallbacks = {
  header: `
    <header class="sticky top-4 z-50 px-4 sm:px-6 max-w-7xl mx-auto">
      <nav class="liquid-glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <a href="index.html" class="flex items-center gap-3 group shrink-0">
          <div class="liquid-glass rounded-full w-10 h-10 sm:w-11 sm:h-11 p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src="logo.svg" alt="Quick & Quality Logo" class="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          </div>
          <div class="hidden sm:block">
            <span class="text-base sm:text-lg font-extrabold tracking-tight text-theme-primary block leading-none">Quick & Quality</span>
            <span class="logo-tagline text-[11px] sm:text-xs text-[#0EA5E9] font-bold mt-0.5 block">go quick .. keep quality</span>
          </div>
        </a>
        <div class="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold">
          <a href="index.html" class="nav-link active text-[#0EA5E9]">الرئيسية</a>
          <a href="about.html" class="nav-link">لماذا نحن</a>
          <a href="subscriptions.html" class="nav-link">الاشتراكات</a>
          <a href="faq.html" class="nav-link">الأسئلة الشائعة</a>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <div class="hidden lg:flex items-center gap-2">
            <a href="subscriptions.html" class="liquid-glass-strong rounded-full px-4 py-2 text-white font-bold text-xs sm:text-sm shadow-md bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/30">عرض الاشتراكات</a>
            <button onclick="openWhatsAppTrial()" class="liquid-glass rounded-full px-3.5 py-2 text-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-base"></i> <span>تجربة مجانية</span></button>
          </div>
          <button id="language-toggle" onclick="toggleLanguage()" title="Switch Language" aria-label="Change language" class="liquid-glass rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-theme-primary hover:scale-105 transition-transform shrink-0"><i class="fa-solid fa-globe text-sm sm:text-base"></i></button>
          <button id="theme-toggle" onclick="toggleTheme()" title="Toggle Theme" aria-label="Toggle dark mode" class="liquid-glass rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-theme-primary hover:scale-105 transition-transform shrink-0"><i id="theme-icon" class="fa-solid fa-moon text-sm sm:text-base"></i></button>
          <button id="mobile-menu-btn" aria-label="Open menu" class="flex lg:hidden liquid-glass rounded-full w-9 h-9 sm:w-10 sm:h-10 items-center justify-center text-theme-primary shrink-0"><i class="fa-solid fa-bars-staggered text-base sm:text-lg"></i></button>
        </div>
      </nav>
    </header>
  `,
  footer: `
    <footer class="liquid-glass pt-16 pb-10 rounded-t-[40px] border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="liquid-glass rounded-full w-10 h-10 p-2 flex items-center justify-center">
              <img src="logo.svg" alt="Quick & Quality Logo" class="w-7 h-7 object-contain" />
            </div>
            <div>
              <span data-i18n="brand_title" class="text-xl font-extrabold tracking-tight text-theme-primary block leading-none">Quick & Quality</span>
              <span data-i18n="brand_tagline" class="logo-tagline text-xs text-[#0EA5E9] font-bold mt-0.5 block">go quick .. keep quality</span>
            </div>
          </div>
          <p data-i18n="footer_brief" class="text-theme-secondary text-xs sm:text-sm leading-relaxed max-w-md">
            جاهز لبدء أفضل تجربة بث سينمائي ورياضي؟ نوفر لك أعلى مستويات الجودة والثبات مع تفعيل فوري ودعم متواصل عبر الواتساب على مدار الساعة.
          </p>
        </div>

        <div class="lg:col-span-3 space-y-3">
          <h4 data-i18n="footer_nav_header" class="text-xs font-extrabold uppercase text-theme-primary tracking-wider">روابط الموقع</h4>
          <ul class="space-y-2.5 text-sm text-theme-secondary font-semibold">
            <li><a href="index.html" data-i18n="nav_home" class="hover:text-[#0EA5E9] transition-colors">الرئيسية</a></li>
            <li><a href="about.html" data-i18n="nav_about" class="hover:text-[#0EA5E9] transition-colors">لماذا نحن</a></li>
            <li><a href="subscriptions.html" data-i18n="nav_subscriptions" class="hover:text-[#0EA5E9] transition-colors">باقات الاشتراك</a></li>
            <li><a href="faq.html" data-i18n="nav_faq" class="hover:text-[#0EA5E9] transition-colors">الأسئلة الشائعة مركز الدعم</a></li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-4">
          <h4 data-i18n="footer_support_header" class="text-xs font-extrabold uppercase text-theme-primary tracking-wider">الدعم الفني المباشر</h4>
          <p data-i18n="footer_support_desc" class="text-xs text-theme-secondary leading-relaxed">
            تواصل معنا مباشرة للحصول على الاستفسارات والتفعيل الفوري للاشتراك عبر منصة الواتساب:
          </p>
          <button onclick="openWhatsAppTrial()" class="liquid-glass rounded-full w-full py-3.5 px-5 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-all flex items-center justify-center gap-3">
            <i class="fa-brands fa-whatsapp text-2xl"></i> <span data-i18n="footer_whatsapp_btn">محادثة دقيقة وفورية عبر الواتساب</span>
          </button>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-theme-secondary gap-4 font-semibold">
        <p data-i18n="footer_copyright">© 2026 Quick & Quality Streaming. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  `
};

async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const response = await fetch(file, { cache: "no-store" });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    element.innerHTML = await response.text();
  } catch (error) {
    console.warn(`Unable to load ${file}, using fallback markup.`, error);
    if (componentFallbacks[id]) {
      element.innerHTML = componentFallbacks[id];
    }
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("header", "components/header.html"),
    loadComponent("footer", "components/footer.html")
  ]);

  if (typeof initPage === "function") {
    initPage();
  }
});

