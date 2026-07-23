function createPlanCard(plan) {
  const card = document.createElement('article');
  card.className = 'group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0EA5E9]/40';

  const isFeatured = plan.featured;
  const featuredBadge = isFeatured
    ? `<div class="absolute start-1/2 top-0 mb-4 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-[#0EA5E9]/40 bg-[#0EA5E9]/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0EA5E9] shadow-md">${t('subscriptions_featured_badge', 'الأكثر طلباً ⭐')}</div>`
    : `<div class="absolute start-1/2 top-0 mb-4 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-theme-secondary shadow-sm">${t('subscriptions_new_badge', 'خطة جديدة')}</div>`;

  const featureItems = (plan.features || []).slice(0, 4).map(feature => `
    <li class="flex items-start gap-3 text-sm text-theme-secondary">
      <i class="mt-1 text-[#0EA5E9] fa-solid fa-check"></i>
      <span>${feature.name}</span>
    </li>
  `).join('');

  const channelItems = (plan.channels || []).slice(0, 3).map(channel => `
    <li class="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-theme-secondary">${channel.name}</li>
  `).join('');

  card.innerHTML = `
    ${featuredBadge}
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">${plan.server?.name || 'Server'}</p>
        <h3 class="mt-2 text-xl font-black text-theme-primary">${plan.name}</h3>
        <p class="mt-2 text-sm leading-relaxed text-theme-secondary">${plan.description}</p>
      </div>
    </div>

    <div class="mt-6 rounded-[20px] border border-white/10 bg-black/10 p-4">
      <div class="flex items-end justify-between gap-3">
        <div>
          <p class="text-4xl font-black text-theme-primary">${plan.currency}${plan.price}</p>
          <p class="mt-1 text-sm text-theme-secondary">${plan.duration_label || plan.duration_key || 'مدة غير محددة'}</p>
        </div>
        <div class="text-start">
          <p class="text-sm font-semibold text-theme-secondary">${t('subscriptions_users_label', 'المستخدمين')}</p>
          <p class="text-lg font-black text-[#0EA5E9]">${plan.users}</p>
        </div>
      </div>
    </div>

    <div class="mt-6 flex-1">
      <ul class="space-y-3">${featureItems}</ul>
    </div>

    <div class="mt-6">
      <div class="mb-3 flex flex-wrap gap-2">${channelItems}</div>
      <button class="w-full rounded-full bg-[#0EA5E9]/20 px-5 py-3 text-sm font-black text-white transition-all hover:bg-[#0EA5E9]/40"
        onclick="orderViaWhatsApp('${plan.name}', '${plan.currency}${plan.price}', '${plan.duration_label}', '${(plan.features || []).map(item => item.name).join(', ')}')">
        <i class="fa-brands fa-whatsapp ms-2 text-emerald-400"></i> ${t('subscriptions_subscribe_btn', 'اشترك عبر الواتساب')}
      </button>
    </div>
  `;

  return card;
}
