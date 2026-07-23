// ================= ================= =================
// 1. الديكور والدوال المساعدة لبناء واجهة الفلتر المدمجة والاحترافية
// ================= ================= =================

function createPillGroup({ title, icon, options, activeValue, onSelect }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'space-y-1.5 w-full min-w-0 max-w-full';

  wrapper.innerHTML = `
    <label class="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#0EA5E9] uppercase">
      <i class="fa-solid ${icon} text-xs"></i>
      <span>${title}</span>
    </label>
  `;

  const pillsContainer = document.createElement('div');
  pillsContainer.className = 'w-full overflow-x-auto whitespace-nowrap no-scrollbar py-1 flex items-center gap-2 scroll-smooth';
  pillsContainer.style.webkitOverflowScrolling = 'touch';

  options.forEach(opt => {
    const isActive = String(opt.value) === String(activeValue);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `
      inline-flex flex-none items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 active:scale-95
      ${isActive 
        ? 'liquid-glass-strong bg-[#0EA5E9]/30 text-white border border-[#0EA5E9]/50 shadow-sm' 
        : 'liquid-glass text-theme-primary hover:bg-white/10 hover:text-white'
      }
    `;

    btn.innerHTML = `<span>${opt.label}</span>`;

    btn.addEventListener('click', () => {
      pillsContainer.querySelectorAll('button').forEach(b => {
        b.className = 'inline-flex flex-none items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 active:scale-95 liquid-glass text-theme-primary hover:bg-white/10 hover:text-white';
      });
      btn.className = 'inline-flex flex-none items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 active:scale-95 liquid-glass-strong bg-[#0EA5E9]/30 text-white border border-[#0EA5E9]/50 shadow-sm';

      onSelect(opt.value);
    });

    pillsContainer.appendChild(btn);
  });

  wrapper.appendChild(pillsContainer);
  return wrapper;
}

function createFilters({ servers, durations, activeFilters, onChange }) {
  const container = document.createElement('div');
  container.className = 'w-full mb-2 flex flex-col items-end rtl:items-start';

  // جلب الترجمات من المفاتيح المعرفة في ملفكِ
  const filterBtnLabel = typeof t === 'function' ? t('filter_title', 'تصفية') : 'تصفية';
  const allLabel = typeof t === 'function' ? t('filter_all', 'الكل') : 'الكل';
  const serverTitle = typeof t === 'function' ? t('filter_server', 'السيرفر') : 'السيرفر';
  const durationTitle = typeof t === 'function' ? t('filter_duration', 'المدة الزمنية') : 'المدة الزمنية';

  // زر الفلترة
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'liquid-glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold text-theme-primary border border-white/10 shadow-sm transition-all duration-300 hover:border-[#0EA5E9]/50 hover:text-[#0EA5E9] active:scale-95 cursor-pointer shrink-0';
  toggleBtn.innerHTML = `
    <i class="fa-solid fa-sliders text-[#0EA5E9] text-xs"></i>
    <span>${filterBtnLabel}</span>
    <i data-arrow class="fa-solid fa-chevron-down text-[10px] text-theme-primary/60 transition-transform duration-300"></i>
  `;

  // حاوية الفلاتر - إزالة overflow-hidden لمنع قص الحاويات المنسدلة والخيارات الطويلة
  const filterBody = document.createElement('div');
  filterBody.className = 'hidden liquid-glass mt-2 w-full space-y-3 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl border border-white/10 transition-all duration-300';

  const groupsContainer = document.createElement('div');
groupsContainer.className = 'grid grid-cols-1 gap-3 sm:gap-4 w-full min-w-0 overflow-visible';
  // 1. مجموعة السيرفرات
  const serverGroup = createPillGroup({
    title: serverTitle,
    icon: 'fa-server',
    options: [{ value: 'all', label: allLabel }, ...servers.map(s => ({ value: s.value, label: s.name }))],
    activeValue: activeFilters.server,
    onSelect: (val) => onChange('server', val)
  });

  // 2. مجموعة المدة الزمنية مع محاذاة صيغ المفاتيح لملفكِ
  // 2. مجموعة المدة الزمنية مع معالجة ذكية ومستقلة لتحديد مفاتيح الترجمة
  const durationGroup = createPillGroup({
    title: durationTitle,
    icon: 'fa-clock',
    options: [
      { value: 'all', label: allLabel }, 
      ...durations.map(d => {
        let translatedLabel = d.label;

        if (typeof t === 'function') {
          // دمج القيمة مع النص للتأكد من اقتناص الرقم أينما وجد
          const fullString = `${d.value} ${d.label}`.toLowerCase();
          
          let key = '';
          if (fullString.includes('24') || fullString.includes('سنتين') || fullString.includes('2 years')) key = 'duration_24_months';
          else if (fullString.includes('12') || fullString.includes('سنة') || fullString.includes('1 year')) key = 'duration_12_months';
          else if (fullString.includes('6')) key = 'duration_6_months';
          else if (fullString.includes('3')) key = 'duration_3_months';
          else if (fullString.includes('1')) key = 'duration_1_month';

          // البحث عن الترجمة بـ key المكتشف، وفي حال عدم وجوده يجرب المفتاح المباشر
          if (key) {
            translatedLabel = t(key, d.label);
          } else {
            translatedLabel = t(`duration_${d.value}`, d.label);
          }
        }

        return { value: d.value, label: translatedLabel };
      })
    ],
    activeValue: activeFilters.duration,
    onSelect: (val) => onChange('duration', val)
  });

  groupsContainer.appendChild(serverGroup);
  groupsContainer.appendChild(durationGroup);
  filterBody.appendChild(groupsContainer);

  // فتح وإغلاق الفلتر
  let isOpen = false;
  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    const arrow = toggleBtn.querySelector('[data-arrow]');
    
    if (isOpen) {
      filterBody.classList.remove('hidden');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
      toggleBtn.classList.add('border-[#0EA5E9]/60', 'bg-[#0EA5E9]/10');
    } else {
      filterBody.classList.add('hidden');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
      toggleBtn.classList.remove('border-[#0EA5E9]/60', 'bg-[#0EA5E9]/10');
    }
  });

  container.appendChild(toggleBtn);
  container.appendChild(filterBody);

  return container;
}

// فلترة القنوات باستخدام Event Delegation لتغطية القنوات الديناميكية
document.addEventListener('click', (e) => {
  // التأكد من أن العنصر المقتنص هو زر فلترة القنوات أو عنصر داخله
  const filterBtn = e.target.closest('.filter-tab');
  if (!filterBtn) return;

  const selectedFilter = filterBtn.getAttribute('data-filter');
  const allFilterBtns = document.querySelectorAll('.filter-tab');

  // 1. تحديث شكل الأزرار (إعطاء الزر المضغوط كلاس active)
  allFilterBtns.forEach(btn => {
    btn.classList.remove('active', 'text-[#0EA5E9]', 'border', 'border-[#0EA5E9]/40');
    btn.classList.add('text-theme-secondary');
  });

  filterBtn.classList.add('active', 'text-[#0EA5E9]', 'border', 'border-[#0EA5E9]/40');
  filterBtn.classList.remove('text-theme-secondary');

  // 2. البحث عن كروت القنوات وتطبيق الفلترة
  // نحدد العناصر التي تحمل attribute الفئة أو كلاس القنوات
  const channelCards = document.querySelectorAll('[data-channel-category], [data-category], .channel-card');

  channelCards.forEach(card => {
    // قراءة الفئة من data-channel-category أو data-category
    const category = card.getAttribute('data-channel-category') || card.getAttribute('data-category');

    if (selectedFilter === 'all' || category === selectedFilter) {
      card.style.display = ''; // إظهار الكارت
      card.classList.remove('hidden');
    } else {
      card.style.display = 'none'; // إخفاء الكارت
      card.classList.add('hidden');
    }
  });
  
});
// ================= ================= =================
// 2. منطق الصفحة والربط
// ================= ================= =================
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('[data-subscriptions-root]');
  const list = document.querySelector('[data-subscriptions-list]');
  const summary = document.querySelector('[data-subscriptions-summary]');
  const pagination = document.querySelector('[data-subscriptions-pagination]');

  if (!container || !list) return;

  const pageSize = 6;
  let allPlans = [];
  let filteredPlans = [];
  let currentPage = 1;
  let activeFilters = { server: 'all', duration: 'all' };

  const renderLoading = () => {
    list.innerHTML = '';
    list.appendChild(createLoadingState());
  };

  const renderEmpty = () => {
    list.innerHTML = '';
    list.appendChild(createEmptyState());
  };

  const renderSummary = () => {
    if (!summary) return;
    summary.innerHTML = ''; 
  };

  const renderPlans = () => {
    const start = 0;
    const end = currentPage * pageSize;
    const pagePlans = filteredPlans.slice(start, end);

    list.innerHTML = '';

    if (!pagePlans.length) {
      renderEmpty();
      if (pagination) pagination.innerHTML = '';
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'grid gap-6 lg:grid-cols-2 xl:grid-cols-3';

pagePlans.forEach(plan => {
  // 1. تجهيز الكائن واستنساخه لتجنب التعديل المباشر على البيانات الأصلية
  const translatedPlan = { ...plan };

  if (typeof t === 'function') {
    // 2. ترجمة التفعيل الفوري
    if (translatedPlan.instant_activation || translatedPlan.badge || translatedPlan.instant) {
      translatedPlan.instant_activation_text = t('instant_activation', '⚡ Instant Activation');
    }

    // 3. مطابقة مفتاح المدة الزمنيّة بالاعتماد على القيم المسجلة لديكِ
    // يختبر المفاتيح المختصرة (duration_3) والمفاتيح الطويلة (duration_3_months)
    const rawDuration = String(plan.duration || plan.duration_key || plan.plan_duration || '').toLowerCase();

    let durationKey = '';
    if (rawDuration.includes('24') || rawDuration.includes('2_year')) durationKey = '24';
    else if (rawDuration.includes('12') || rawDuration.includes('1_year')) durationKey = '12';
    else if (rawDuration.includes('6')) durationKey = '6';
    else if (rawDuration.includes('3')) durationKey = '3';
    else if (rawDuration.includes('1')) durationKey = '1_month';

    if (durationKey) {
      // يجرب المفتاح المختصر أولاً (duration_3)، وإذا لم يجده يجرب الطويل (duration_3_months)
      const fallbackText = plan.duration_label || plan.duration;
      translatedPlan.duration_translated = t(
        `duration_${durationKey}`, 
        t(`duration_${durationKey}_months`, fallbackText)
      );
      
      // لتغطية أي مسمى متغير داخل دالة createPlanCard
      translatedPlan.duration_label = translatedPlan.duration_translated;
      translatedPlan.duration = translatedPlan.duration_translated;
    }
  }

  // تمرير الكائن المُترجم لدالة إنشاء الكارت
  grid.appendChild(createPlanCard(translatedPlan));
});
    list.appendChild(grid);

    if (filteredPlans.length > end) {
      pagination.innerHTML = `
        <button 
          data-load-more 
          class="
            group relative overflow-hidden flex items-center justify-center gap-3 rounded-full border border-sky-500/30
            bg-gradient-to-r from-sky-900/40 via-slate-900/60 to-sky-900/40 px-9 py-3.5 text-sm font-black text-sky-100
            backdrop-blur-2xl shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-500 ease-out
            hover:scale-105 hover:border-sky-400/80 hover:text-white hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] active:scale-95
          "
        >
          <span class="absolute inset-0 -z-10 bg-sky-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></span>
          <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
          <span class="relative z-10 flex items-center gap-3 tracking-wide">
            <span>${t('subscriptions_load_more', 'عرض المزيد')}</span>
            <i class="fa-solid fa-chevron-down text-sky-400 transition-transform duration-300 ease-in-out group-hover:translate-y-1.5 group-hover:text-sky-200"></i>
          </span>
        </button>
      `;

      pagination.querySelector('[data-load-more]')?.addEventListener('click', () => {
        currentPage += 1;
        renderPlans();
      });

    } else {
      pagination.innerHTML = '';
    }
  };

  const applyFilters = () => {
    currentPage = 1;
    filteredPlans = allPlans.filter(plan => {
      const serverMatch = activeFilters.server === 'all' || String(plan.server?.id ?? plan.server_id) === String(activeFilters.server);
      const durationMatch = activeFilters.duration === 'all' || String(plan.duration_key || plan.duration) === String(activeFilters.duration);
      return serverMatch && durationMatch;
    });
    renderSummary();
    renderPlans();
  };

  const renderFilters = () => {
    if (!container) return;
    const filterHost = document.querySelector('[data-subscriptions-filters]');
    if (!filterHost) return;

    filterHost.innerHTML = '';

    const servers = Array.from(new Map(allPlans.map(plan => [String(plan.server?.id ?? plan.server_id), {
      id: plan.server?.id ?? plan.server_id,
      value: String(plan.server?.id ?? plan.server_id),
      name: plan.server?.name || `الخادم ${plan.server?.id ?? plan.server_id}`
    }])).values());

    const durations = Array.from(new Map(allPlans.map(plan => {
      const value = plan.duration_key || String(plan.duration);
      const label = plan.duration_label || (plan.duration ? `${plan.duration}` : 'غير محدد');
      return [value, { value, label }];
    })).values());

    const filterWidget = createFilters({
      servers,
      durations,
      activeFilters,
      onChange: (name, value) => {
        activeFilters[name] = value;
        applyFilters();
      }
    });

    filterHost.innerHTML = '';
    filterHost.appendChild(filterWidget);
  };

  const loadSubscriptions = async () => {
    try {
      renderLoading();
      const viewModel = await getSubscriptionViewModel(currentLang || 'ar');
      allPlans = viewModel.plans || [];
      renderFilters();
      applyFilters();
    } catch (error) {
      console.error(error);
      renderEmpty();
    }
  };

  window.refreshSubscriptionsView = loadSubscriptions;
  loadSubscriptions();
});

