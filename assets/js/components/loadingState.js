function createLoadingState() {
  const wrapper = document.createElement('div');
  wrapper.className = 'rounded-[28px] border border-white/10 bg-white/10 p-8 text-center shadow-xl backdrop-blur-xl';
  wrapper.innerHTML = `
    <div class="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0EA5E9]/30 border-t-[#0EA5E9]"></div>
    <p class="mt-4 text-sm font-semibold text-theme-secondary">${t('subscriptions_loading', 'جاري تحميل الباقات...')}</p>
  `;
  return wrapper;
}
