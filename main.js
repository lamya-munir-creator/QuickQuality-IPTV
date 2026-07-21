/**
 * Quick & Quality - Global i18n & Theme Engine
 */

const WHATSAPP_NUMBER = ""; // Set custom phone number if needed

// Multilingual i18n Dictionary
const translations = {
  ar: {
    // Brand & Header
    brand_title: "Quick & Quality",
    brand_tagline: "go quick .. keep quality",
    nav_home: "الرئيسية",
    nav_about: "لماذا نحن",
    nav_subscriptions: "الاشتراكات",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل معنا",
    btn_view_plans: "عرض الاشتراكات",
    btn_free_trial: "تجربة مجانية",

    // Hero Section
    hero_badge: "بث سريع وفائق الجودة بدون تقطيع",
    hero_title_1: "سرعة بث استثنائية مع ",
    hero_title_highlight: "جودة فائقة Ultra HD",
    hero_title_2: " ودون انقطاع",
    hero_desc: "انضم لأكثر من 15,000 مشترك واستمتع بـ 20,000+ قناة مباشرة و50,000+ من أحدث الأفلام والمسلسلات بجودة 4K/FHD. تفعيل فوري وخوادم فائقة السرعة مع دعم 24/7 عبر الواتساب.",
    hero_cta_start: "اشترك الآن واكتشف الباقات",
    hero_cta_trial: "طلب تجربة عبر الواتساب",
    hero_feat_instant: "تفعيل فوري 100%",
    hero_feat_uptime: "ضمان ثبات 99.9%",
    hero_feat_support: "دعم مباشر 24/7",

    // Hero Card
    card_activation_title: "تفعيل فوري وتلقائي",
    card_activation_desc: "تسليم بيانات الاشتراك فور إتمام الطلب عبر الواتساب",
    card_quote: "\"شاهد المباريات العالمية بجودة 4K حقيقية بدون تأخير، واستمتع بمكتبة سينمائية متجددة يومياً على كافة أجهزتك.\"",
    card_devices_label: "الأجهزة المدعومة",
    card_support_label: "خدمة العملاء",
    card_support_val: "واتساب مباشر 24/7",
    card_guarantee: "خوادم حماية وموازنة الحمل",

    // Feature Badges
    badge_1_title: "ضمان عدم التقطيع",
    badge_1_desc: "سيرفرات فائقة السرعة وموزعة عالمياً",
    badge_2_title: "دعم فني 24/7 عبر الواتساب",
    badge_2_desc: "مساعدة فورية وإرشادات خطوة بخطوة",
    badge_3_title: "تحديثات سينمائية يومية",
    badge_3_desc: "إضافة أحدث الأفلام والمسلسلات حصرياً",

    // Why Choose Us
    why_title_badge: "تميز معنا",
    why_heading: "لماذا تختار Quick & Quality؟",
    why_desc: "نستخدم أحدث تقنيات البث الشبكي لتوفير تجربة مشاهدة سينمائية مستقرة بدون أي تقطيع حتى في أوقات ذروة المباريات الكبرى.",
    why_card1_title: "توافق شامل مع جميع الأجهزة",
    why_card1_desc: "يعمل بسلاسة على الشاشات الذكية، أجهزة أندرويد بوكس، أبل تي في، الهواتف الذكية، وأجهزة الكمبيوتر وMAG.",
    why_card2_title: "تفعيل سريع عبر الواتساب",
    why_card2_desc: "لا خطوات معقدة. اختر باقتك واستلم بيانات اشتراكك ورابط التشغيل مباشرة عبر الواتساب خلال دقائق معدودة.",
    why_card3_title: "سيرفرات احتياطية فائقة",
    why_card3_desc: "تقنية التحويل التلقائي تضمّن لك استمرار البث وسلاسة المشاهدة حتى خلال أضخم البطولات والدوريات العالمية.",

    // About Page Specifics
    about_hero_title: "نقدم أعلى معايير الجودة في البث التلفزيوني المباشر",
    about_hero_subtitle: "رؤيتنا تقديم بث فائق السرعة وخوادم متطورة تضمن لك المشاهدة بدون أدنى تقطيع.",
    about_stat1: "+20,000 قناة",
    about_stat1_desc: "تغطية شامله للرياضة والسينما",
    about_stat2: "+50,000 VOD",
    about_stat2_desc: "مكتبة أفلام ومسلسلات حديثة",
    about_stat3: "99.9% Uptime",
    about_stat3_desc: "سيرفرات موثوقة ومستقرة",
    about_stat4: "+15,000 عميل",
    about_stat4_desc: "مشتركون يثقون في خدمتنا",

    // Subscriptions Page & Pricing
    sub_title_badge: "باقاتنا المميزة",
    sub_heading: "اختر باقة الترفيه المناسبة لك",
    sub_desc: "أسعار مرنة تناسب احتياجاتك الترفيهية مع دعم كامل لجودة 4K والتفعيل الفوري.",
    
    period_monthly: "شهري",
    period_quarterly: "3 أشهر",
    period_semiannual: "6 أشهر",
    period_annual: "سنة كاملة",

    plan_sports_title: "باقة الرياضة والبث المباشر",
    plan_sports_sub: "مثالية لعشاق الرياضة والمباريات العالمية",
    plan_vip_title: "باقة VIP Cinema & TV",
    plan_vip_sub: "الباقة الشاملة الأكثر طلباً للمشاهدة العائلية والسينما",
    plan_basic_title: "الباقة الاقتصادية Basic",
    plan_basic_sub: "القنوات الأساسية بقيمة ممتازة ومناسبة",

    most_popular: "الأكثر طلباً ⭐",
    btn_subscribe_now: "اشترك الآن عبر الواتساب",

    feat_low_latency: "سيرفرات فائقة السرعة منخفضة التأخير",
    feat_4k_quality: "بث عالي الدقة Full HD & 4K",
    feat_1_device: "اتصال جهاز واحد",
    feat_support_247: "دعم فني وتفعيل عبر الواتساب 24/7",
    feat_channels_count: "20,000+ قناة و50,000+ فيلم ومسلسل",
    feat_multi_device: "توافق مع جميع الأجهزة الذكية",
    feat_daily_updates: "إضافات يومية للأفلام والمسلسلات",
    feat_essential_channels: "القنوات الفضائية الأساسية بجودة HD",

    // Filter Tabs
    filter_all: "جميع القنوات",
    filter_sports: "القنوات الرياضية",
    filter_cinema: "الأفلام والسينما",
    filter_kids: "الأطفال والعائلة",

    // FAQ Page
    faq_title_badge: "مركز المساعدة",
    faq_heading: "الأسئلة الشائعة والإرشادات",
    faq_search_placeholder: "ابحث في الأسئلة الشائعة...",
    faq_cat_all: "الكل",
    faq_cat_activation: "التفعيل",
    faq_cat_apps: "التطبيقات",
    faq_cat_devices: "الأجهزة",

    q1: "كيف أستلم بيانات اشتراكي بعد الطلب؟",
    a1: "التفعيل فوري ومباشر! فور تواصلك معنا على الواتساب وإتمام الطلب، ستصلك بيانات الاشتراك (رابط M3U أو Xtream Codes) فوراً مع طريقة الإعداد.",
    q2: "ما هي التطبيقات الموصى بها لتشغيل القنوات؟",
    a2: "خدمتنا تعمل بكفاءة عالية على تطبيقات مثل IBO Player و IPTV Smarters Pro و TiviMate و GSE Smart IPTV. يقدم فريقنا الدعم الكامل خطوة بخطوة أثناء التفعيل.",
    q3: "هل يمكنني مشاهدة البث على أكثر من جهاز؟",
    a3: "يمكنك تثبيت الاشتراك على جميع أجهزتك، وتعتمد المشاهدة المتزامنة في نفس الوقت على نوع الباقة المختارة. تتيح لك باقة VIP مرونة عالية.",
    q4: "ماذا أفعل في حال واجهت أي استفسار أو مشكلة في البث؟",
    a4: "نحن نوفر تقنيات خوادم احتياطية تلقائية لمنع أي انقطاع. وفي حال وجود أي استفسار، فإن فريق الدعم المباشر متواجد على الواتساب 24/7 لخدمتك فوراً.",

    // Footer
    footer_brief: "جاهز لبدء أفضل تجربة بث سينمائي ورياضي؟ نوفر لك أعلى مستويات الجودة والثبات مع تفعيل فوري ودعم متواصل عبر الواتساب على مدار الساعة.",
    footer_nav_header: "روابط الموقع",
    footer_support_header: "الدعم الفني المباشر",
    footer_support_desc: "تواصل معنا مباشرة للحصول على الاستفسارات والتفعيل الفوري للاشتراك عبر منصة الواتساب:",
    footer_whatsapp_btn: "محادثة دقيقة وفورية عبر الواتساب",
    footer_copyright: "© 2026 Quick & Quality Streaming. جميع الحقوق محفوظة."
  },
  en: {
    // Brand & Header
    brand_title: "Quick & Quality",
    brand_tagline: "go quick .. keep quality",
    nav_home: "Home",
    nav_about: "Why Us",
    nav_subscriptions: "Subscriptions",
    nav_faq: "FAQ",
    nav_contact: "Contact Us",
    btn_view_plans: "View Plans",
    btn_free_trial: "Free Trial",

    // Hero Section
    hero_badge: "Ultra Fast & Buffer-Free Streaming",
    hero_title_1: "Streaming Speed With ",
    hero_title_highlight: "Supreme 4K Quality",
    hero_title_2: " Without Interruption",
    hero_desc: "Join over 15,000 subscribers and enjoy 20,000+ live channels & 50,000+ movies & series in 4K/FHD. Instant activation, high-speed servers, and 24/7 WhatsApp assistance.",
    hero_cta_start: "Get Started & View Plans",
    hero_cta_trial: "Request WhatsApp Trial",
    hero_feat_instant: "100% Instant Activation",
    hero_feat_uptime: "99.9% Uptime Guarantee",
    hero_feat_support: "24/7 Direct WhatsApp Support",

    // Hero Card
    card_activation_title: "Instant Activation",
    card_activation_desc: "Zero waiting time after WhatsApp request",
    card_quote: "\"Enjoy crystal clear 4K sports streaming and daily updated cinema libraries on all your household devices.\"",
    card_devices_label: "Supported Devices",
    card_support_label: "Customer Support",
    card_support_val: "24/7 Instant WhatsApp",
    card_guarantee: "Load-Balanced Server Protection",

    // Feature Badges
    badge_1_title: "Buffer-Free Guarantee",
    badge_1_desc: "Global high-capacity server infrastructure",
    badge_2_title: "24/7 WhatsApp Support",
    badge_2_desc: "Instant assistance & step-by-step setup guide",
    badge_3_title: "Daily VIP Updates",
    badge_3_desc: "Fresh movies and TV series added daily",

    // Why Choose Us
    why_title_badge: "Why Us",
    why_heading: "Built For Unmatched Reliability",
    why_desc: "We utilize advanced server architecture designed to eliminate lagging and buffering during major sports events.",
    why_card1_title: "Universal Compatibility",
    why_card1_desc: "Works seamlessly across Smart TVs, Android boxes, Apple TV, Smartphones, PC, and MAG devices.",
    why_card2_title: "Instant Setup via WhatsApp",
    why_card2_desc: "No complex steps. Select your plan and receive your playlist link directly via WhatsApp within minutes.",
    why_card3_title: "High Performance Backup Servers",
    why_card3_desc: "Automatic failover technology guarantees uninterrupted streaming even during peak world championships.",

    // About Page Specifics
    about_hero_title: "Delivering Highest Standards in Live Streaming",
    about_hero_subtitle: "Our commitment is providing ultra-fast streaming and redundant server clusters to guarantee buffer-free entertainment.",
    about_stat1: "20,000+ Channels",
    about_stat1_desc: "Global sports & cinema channels",
    about_stat2: "50,000+ VOD",
    about_stat2_desc: "Updated movies & TV shows library",
    about_stat3: "99.9% Uptime",
    about_stat3_desc: "Reliable and high-capacity servers",
    about_stat4: "15,000+ Clients",
    about_stat4_desc: "Happy subscribers worldwide",

    // Subscriptions Page & Pricing
    sub_title_badge: "Premium Packages",
    sub_heading: "Choose Your Entertainment Plan",
    sub_desc: "Flexible pricing tailored to your needs with full 4K support and instant activation.",
    
    period_monthly: "Monthly",
    period_quarterly: "3 Months",
    period_semiannual: "6 Months",
    period_annual: "1 Full Year",

    plan_sports_title: "Sports & Live TV Plan",
    plan_sports_sub: "Ideal for live sports & football enthusiasts",
    plan_vip_title: "VIP Cinema & TV Plan",
    plan_vip_sub: "Most popular comprehensive family & cinema bundle",
    plan_basic_title: "Budget Basic Plan",
    plan_basic_sub: "Essential live channels at unbeatable value",

    most_popular: "Most Popular ⭐",
    btn_subscribe_now: "Subscribe Now via WhatsApp",

    feat_low_latency: "Ultra-Low Latency Dedicated Sports Servers",
    feat_4k_quality: "Full HD & True 4K Broadcast Quality",
    feat_1_device: "1 Device Active Connection",
    feat_support_247: "24/7 Priority WhatsApp Support",
    feat_channels_count: "20,000+ Channels & 50,000+ VODs",
    feat_multi_device: "Compatible with all Smart Devices",
    feat_daily_updates: "Daily Movies & Series Additions",
    feat_essential_channels: "Standard & HD Quality Live Channels",

    // Filter Tabs
    filter_all: "All Channels",
    filter_sports: "Sports Channels",
    filter_cinema: "Cinema & Movies",
    filter_kids: "Kids & Family",

    // FAQ Page
    faq_title_badge: "Help Center",
    faq_heading: "Frequently Asked Questions",
    faq_search_placeholder: "Search questions...",
    faq_cat_all: "All",
    faq_cat_activation: "Activation",
    faq_cat_apps: "Apps",
    faq_cat_devices: "Devices",

    q1: "How do I receive my subscription details?",
    a1: "Activation is instant! Right after contacting us on WhatsApp, you will receive your login details (M3U Link or Xtream Codes) immediately with setup instructions.",
    q2: "Which applications are recommended?",
    a2: "Our service works with popular apps like IBO Player, IPTV Smarters Pro, TiviMate, and GSE Smart IPTV. Our team will guide you step-by-step.",
    q3: "Can I watch on multiple devices?",
    a3: "You can install the subscription on all your devices. Simultaneous streaming depends on your chosen plan. VIP plans offer maximum flexibility.",
    q4: "What happens if a channel freezes or buffers?",
    a4: "We utilize automated failover servers to prevent buffering. Our support team is available on WhatsApp 24/7 to assist you immediately.",

    // Footer
    footer_brief: "Ready to experience premium streaming? Get instant access to worldwide channels and cinema with instant activation and 24/7 WhatsApp assistance.",
    footer_nav_header: "Site Navigation",
    footer_support_header: "Direct Support",
    footer_support_desc: "Contact us directly for instant inquiries and fast subscription activation on WhatsApp:",
    footer_whatsapp_btn: "Instant 24/7 WhatsApp Chat",
    footer_copyright: "© 2026 Quick & Quality Streaming. All rights reserved."
  }
};

// State Variables (LocalStorage keys: "language" and "theme")
let currentLang = localStorage.getItem('language') || localStorage.getItem('qq_lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || localStorage.getItem('qq_theme') || 'dark';

/**
 * Fast Client-Side Language Switcher (RTL / LTR)
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('language', lang);

  const html = document.documentElement;
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('lang', lang);

  // Translate elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update language button tooltips & aria labels
  const langBtns = document.querySelectorAll('#language-toggle, #utility-lang-btn');
  langBtns.forEach(btn => {
    btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل للعربية');
    btn.setAttribute('title', lang === 'ar' ? 'Switch to English' : 'التحويل للعربية');
  });
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
}

/**
 * Global Theme Engine (Dark / Light Mode)
 */
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  const html = document.documentElement;
  html.dataset.theme = theme;

  const themeIcons = document.querySelectorAll('#theme-icon, #utility-theme-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-moon text-amber-400 text-sm sm:text-base transition-transform duration-300';
    } else {
      icon.className = 'fa-solid fa-sun text-amber-400 text-sm sm:text-base transition-transform duration-300';
    }
  });

  const themeBtns = document.querySelectorAll('#theme-toggle, #utility-theme-btn');
  themeBtns.forEach(btn => {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

/**
 * WhatsApp Message Generator & Direct Redirect
 */
function orderViaWhatsApp(planKey, price, duration, features) {
  const isAr = currentLang === 'ar';
  const planTitle = translations[currentLang][planKey] || planKey;
  
  let message = "";
  if (isAr) {
    message = `مرحباً، أود الاشتراك في باقة Quick & Quality:\n\n` +
              `📌 *الباقة:* ${planTitle}\n` +
              `⏱️ *المدة:* ${duration}\n` +
              `💰 *السعر:* ${price}\n` +
              `⭐ *المميزات:* ${features}\n\n` +
              `الرجاء تزويدي بالتفاصيل وطرق الدفع لتفعيل الخدمة فوراً. شكراً لكم!`;
  } else {
    message = `Hi! I would like to subscribe to Quick & Quality:\n\n` +
              `📌 *Plan:* ${planTitle}\n` +
              `⏱️ *Duration:* ${duration}\n` +
              `💰 *Price:* ${price}\n` +
              `⭐ *Features:* ${features}\n\n` +
              `Please provide payment details for instant activation. Thank you!`;
  }

  const encoded = encodeURIComponent(message);
  const url = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
  window.open(url, '_blank');
}

function openWhatsAppTrial(reason = "Trial Request") {
  const isAr = currentLang === 'ar';
  const text = isAr 
    ? `مرحباً فريق Quick & Quality، أود طلب تجربة مجانية واختبار سرعة وثبات البث.` 
    : `Hello Quick & Quality team, I would like to request a free trial to test the streaming speed and quality.`;

  const encoded = encodeURIComponent(text);
  const url = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
  window.open(url, '_blank');
}

/**
 * DOM Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language & theme preferences
  setLanguage(currentLang);
  setTheme(currentTheme);

  // Mobile Drawer
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden-drawer');
      mobileDrawer.classList.add('visible-drawer');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && mobileDrawer) {
    closeBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('visible-drawer');
      mobileDrawer.classList.add('hidden-drawer');
      document.body.style.overflow = '';
    });
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('visible-drawer');
        mobileDrawer.classList.add('hidden-drawer');
        document.body.style.overflow = '';
      }
    });
  }

  initFAQ();
  initSubscriptions();
});

/**
 * FAQ Handlers
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('faq-search');
  const categoryTabs = document.querySelectorAll('.faq-cat-btn');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(otherItem => otherItem.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
      });
    });
  }

  if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active', 'bg-[#0EA5E9]', 'text-white'));
        categoryTabs.forEach(t => t.classList.add('bg-white', 'text-slate-600'));

        tab.classList.add('active', 'bg-[#0EA5E9]', 'text-white');
        tab.classList.remove('bg-white', 'text-slate-600');

        const cat = tab.dataset.category;
        faqItems.forEach(item => {
          item.style.display = (cat === 'all' || item.dataset.category === cat) ? 'block' : 'none';
        });
      });
    });
  }
}

/**
 * Subscriptions Duration Switcher
 */
function initSubscriptions() {
  const durationBtns = document.querySelectorAll('.duration-btn');

  const prices = {
    monthly: {
      sports: { price: "$12", duration: "Monthly / شهر واحد" },
      vip: { price: "$10", duration: "Monthly / شهر واحد" },
      basic: { price: "$7", duration: "Monthly / شهر واحد" }
    },
    quarterly: {
      sports: { price: "$30", duration: "3 Months / 3 أشهر" },
      vip: { price: "$25", duration: "3 Months / 3 أشهر" },
      basic: { price: "$18", duration: "3 Months / 3 أشهر" }
    },
    semiannual: {
      sports: { price: "$55", duration: "6 Months / 6 أشهر" },
      vip: { price: "$45", duration: "6 Months / 6 أشهر" },
      basic: { price: "$32", duration: "6 Months / 6 أشهر" }
    },
    annual: {
      sports: { price: "$90", duration: "1 Year / سنة واحدة" },
      vip: { price: "$75", duration: "1 Year / سنة واحدة" },
      basic: { price: "$50", duration: "1 Year / سنة واحدة" }
    }
  };

  if (durationBtns.length > 0) {
    durationBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        durationBtns.forEach(b => b.classList.remove('bg-[#0EA5E9]', 'text-white', 'shadow-md'));
        durationBtns.forEach(b => b.classList.add('bg-slate-100', 'text-slate-600'));

        btn.classList.add('bg-[#0EA5E9]', 'text-white', 'shadow-md');
        btn.classList.remove('bg-slate-100', 'text-slate-600');

        const period = btn.dataset.period;
        if (prices[period]) {
          document.querySelectorAll('[data-plan-key]').forEach(element => {
            const key = element.dataset.planKey;
            if (prices[period][key]) {
              const priceEl = element.querySelector('.plan-price');
              const durationEl = element.querySelector('.plan-duration');
              const orderBtn = element.querySelector('.plan-order-btn');

              if (priceEl) priceEl.textContent = prices[period][key].price;
              if (durationEl) durationEl.textContent = ` / ${prices[period][key].duration}`;

              if (orderBtn) {
                orderBtn.setAttribute('onclick', `orderViaWhatsApp('${orderBtn.dataset.planTitleKey}', '${prices[period][key].price}', '${prices[period][key].duration}', '${orderBtn.dataset.features}')`);
              }
            }
          });
        }
      });
    });
  }
}
