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
    const visible = filteredPlans.length;
    const summaryText = t('subscriptions_summary', 'تم العثور على {count} خطة').replace('{count}', visible);
    summary.innerHTML = `<span class="text-theme-secondary">${summaryText}</span>`;
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

    pagePlans.forEach(plan => grid.appendChild(createPlanCard(plan)));
    list.appendChild(grid);

    if (filteredPlans.length > end) {
      pagination.innerHTML = `
        <button data-load-more class="rounded-full bg-[#0EA5E9]/20 px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#0EA5E9]/40">
          <i class="fa-solid fa-plus ms-2"></i> ${t('subscriptions_load_more', 'عرض المزيد')}
        </button>`;
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
        if (name === 'reset') {
          activeFilters = { server: 'all', duration: 'all' };
          applyFilters();
          return;
        }
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
