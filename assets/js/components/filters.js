function createFilters({ servers, durations, activeFilters, onChange }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl md:flex-row md:items-end md:justify-between';

  const serverOptions = servers || [];
  const durationOptions = (durations || []).map(item => typeof item === 'string' ? { value: item, label: item } : item);

  wrapper.innerHTML = `
    <div class="flex flex-col gap-4 md:flex-row md:items-center">
      <label class="flex flex-col gap-2 text-sm font-semibold text-theme-secondary">
        <span>${t('subscriptions_filter_server', 'الخادم')}</span>
        <select data-filter="server" class="min-w-[180px] rounded-full border border-white/10 bg-black/20 px-4 py-3 text-theme-primary outline-none focus:border-[#0EA5E9]">
          <option value="all">${t('subscriptions_filter_all', 'All')}</option>
          ${serverOptions.map(server => {
            const value = server?.value ?? server?.id;
            const label = server?.label ?? server?.name ?? value;
            return `<option value="${value}" ${String(activeFilters.server) === String(value) ? 'selected' : ''}>${label}</option>`;
          }).join('')}
        </select>
      </label>

      <label class="flex flex-col gap-2 text-sm font-semibold text-theme-secondary">
        <span>${t('subscriptions_filter_duration', 'المدة')}</span>
        <select data-filter="duration" class="min-w-[180px] rounded-full border border-white/10 bg-black/20 px-4 py-3 text-theme-primary outline-none focus:border-[#0EA5E9]">
          <option value="all">${t('subscriptions_filter_all', 'All')}</option>
          ${durationOptions.map(({ value, label }) => `<option value="${value}" ${String(activeFilters.duration) === String(value) ? 'selected' : ''}>${label}</option>`).join('')}
        </select>
      </label>
    </div>

    <button data-reset="filters" class="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-theme-primary transition-all hover:bg-white/20">
      <i class="fa-solid fa-rotate-left ms-2"></i> ${t('subscriptions_filter_reset', 'إعادة تعيين')}
    </button>
  `;

  wrapper.querySelectorAll('select, [data-reset="filters"]').forEach(element => {
    element.addEventListener('change', (event) => {
      if (event.target.matches('select[data-filter]')) {
        const filterName = event.target.dataset.filter;
        onChange(filterName, event.target.value);
      }
    });
  });

  wrapper.querySelector('[data-reset="filters"]').addEventListener('click', () => {
    onChange('reset');
  });

  return wrapper;
}
