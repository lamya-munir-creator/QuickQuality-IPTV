const DATA_CACHE = {};

function getLocalizedValue(item, lang, field = 'name') {
  const localeField = `${field}_${lang === 'ar' ? 'ar' : 'en'}`;
  return item?.[localeField] || item?.[field] || item?.name || '';
}

async function loadJson(file) {
  if (DATA_CACHE[file]) return DATA_CACHE[file];

  const response = await fetch(`assets/data/${file}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to load ${file}`);

  const data = await response.json();
  DATA_CACHE[file] = data;
  return data;
}

async function loadSubscriptionData(lang = (typeof window !== 'undefined' && window.currentLang) || 'ar') {
  const [servers, plans, features, channels, planFeatures, planChannels] = await Promise.all([
    loadJson('servers.json'),
    loadJson('plans.json'),
    loadJson('features.json'),
    loadJson('channels.json'),
    loadJson('plan_features.json'),
    loadJson('plan_channels.json')
  ]);

  const featureMap = new Map(features.map(item => [item.id, item]));
  const channelMap = new Map(channels.map(item => [item.id, item]));
  const featureIndex = new Map(planFeatures.map(item => [item.plan_id, []]));
  const channelIndex = new Map(planChannels.map(item => [item.plan_id, []]));

  planFeatures.forEach(({ plan_id, feature_id }) => {
    if (!featureIndex.has(plan_id)) featureIndex.set(plan_id, []);
    featureIndex.get(plan_id).push(featureMap.get(feature_id));
  });

  planChannels.forEach(({ plan_id, channel_id }) => {
    if (!channelIndex.has(plan_id)) channelIndex.set(plan_id, []);
    channelIndex.get(plan_id).push(channelMap.get(channel_id));
  });

  return plans.map(plan => {
    const server = servers.find(server => server.id === plan.server_id) || null;
    const localizedServer = server ? { ...server, name: getLocalizedValue(server, lang, 'name') } : null;
    const localizedFeatures = (featureIndex.get(plan.id) || []).filter(Boolean).map(feature => ({
      ...feature,
      name: getLocalizedValue(feature, lang, 'name')
    }));
    const localizedChannels = (channelIndex.get(plan.id) || []).filter(Boolean).map(channel => ({
      ...channel,
      name: getLocalizedValue(channel, lang, 'name')
    }));

    return {
      ...plan,
      name: getLocalizedValue(plan, lang, 'name') || plan.name,
      description: getLocalizedValue(plan, lang, 'description') || plan.description,
      duration_label: getLocalizedValue(plan, lang, 'duration_label') || plan.duration_label,
      server: localizedServer,
      features: localizedFeatures,
      channels: localizedChannels
    };
  });
}

async function getSubscriptionViewModel(lang = (typeof window !== 'undefined' && window.currentLang) || 'ar') {
  const plans = await loadSubscriptionData(lang);
  return { plans };
}
