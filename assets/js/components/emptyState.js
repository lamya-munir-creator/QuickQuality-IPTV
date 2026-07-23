function createEmptyState() {
  const wrapper = document.createElement('div');
  wrapper.className = 'rounded-[28px] border border-dashed border-white/15 bg-white/5 p-10 text-center shadow-xl backdrop-blur-xl';
  wrapper.innerHTML = `
    <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0EA5E9]/20 text-2xl text-[#0EA5E9]">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <h3 class="mt-5 text-2xl font-black text-theme-primary">${t('subscriptions_empty_title', 'لا توجد خطط متطابقة')}</h3>
    <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-theme-secondary">${t('subscriptions_empty_desc', 'جرب تغيير الفلاتر أو اختر مدة مختلفة لرؤية المزيد من الباقات.')}</p>
  `;
  return wrapper;
}
