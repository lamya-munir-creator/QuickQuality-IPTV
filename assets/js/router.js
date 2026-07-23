/**
 * Quick & Quality - Persistent Header/Footer Client-Side SPA Router
 */

(function () {
  // Cache fetched page contents in memory for fast navigation
  const pageCache = new Map();

  /**
   * Helper to normalize URLs for comparison
   */
  function normalizePath(urlStr) {
    try {
      const url = new URL(urlStr, window.location.origin);
      let path = url.pathname;
      if (path === '/' || path === '') path = '/index.html';
      return path.split('/').pop() || 'index.html';
    } catch (e) {
      return urlStr;
    }
  }

  /**
   * Fetch page HTML and return parsed DOM
   */
  async function fetchPage(url) {
    if (pageCache.has(url)) {
      return pageCache.get(url);
    }
    const res = await fetch(url, { cache: 'default' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    pageCache.set(url, doc);
    return doc;
  }

  /**
   * Re-initialize script logic after content swap
   */
  function reinitializePageComponents() {
    // 1. Close mobile drawer if open
    if (typeof closeMobileDrawer === 'function') {
      closeMobileDrawer();
    }

    // 2. Re-apply language translations to newly injected content
    if (typeof setLanguage === 'function' && window.currentLang) {
      setLanguage(window.currentLang);
    }

    // 3. Re-highlight active nav items in persistent header & mobile drawer
    if (typeof setActiveNavItem === 'function') {
      setActiveNavItem();
    }

    // 4. Initialize FAQ and Subscriptions controls
    if (typeof initFAQ === 'function') {
      initFAQ();
    }

    if (typeof initSubscriptions === 'function') {
      initSubscriptions();
    }

    // 5. If Subscriptions root element exists, trigger subscriptions data loader
    if (document.querySelector('[data-subscriptions-root]') && typeof window.initSubscriptionsPage === 'function') {
      window.initSubscriptionsPage();
    }
  }

  /**
   * Primary Navigation function
   */
  async function navigateTo(url, pushState = true) {
    const appContent = document.getElementById('app-content');
    if (!appContent) {
      window.location.href = url;
      return;
    }

    try {
      appContent.style.transition = 'opacity 0.15s ease-out';
      appContent.style.opacity = '0.3';

      const doc = await fetchPage(url);
      const newAppContent = doc.getElementById('app-content');

      if (!newAppContent) {
        window.location.href = url;
        return;
      }

      // Update document Title and Meta description
      if (doc.title) {
        document.title = doc.title;
      }
      const newMetaDesc = doc.querySelector('meta[name="description"]');
      const currentMetaDesc = document.querySelector('meta[name="description"]');
      if (newMetaDesc && currentMetaDesc) {
        currentMetaDesc.setAttribute('content', newMetaDesc.getAttribute('content'));
      }

      // Swap main content area without re-rendering Header or Footer
      appContent.innerHTML = newAppContent.innerHTML;

      // Update URL in browser history
      if (pushState) {
        window.history.pushState({ url }, '', url);
      }

      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Re-initialize scripts & i18n
      reinitializePageComponents();

      appContent.style.opacity = '1';
    } catch (err) {
      console.warn('SPA Navigation error, falling back to page reload:', err);
      window.location.href = url;
    }
  }

  /**
   * Event Listener for link clicks
   */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore external links, mailto, tel, javascript, or blank targets
    if (
      link.target === '_blank' ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:')
    ) {
      return;
    }

    // Anchor on same page handling
    if (href.startsWith('#')) {
      return;
    }

    // Intercept internal page navigation
    e.preventDefault();

    const targetFileName = normalizePath(href);
    const currentFileName = normalizePath(window.location.href);

    if (targetFileName === currentFileName) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateTo(href, true);
  });

  /**
   * Browser back/forward button handler
   */
  window.addEventListener('popstate', (e) => {
    const url = (e.state && e.state.url) || window.location.href;
    navigateTo(url, false);
  });

  // Ensure active state on initial load
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof setActiveNavItem === 'function') {
      setActiveNavItem();
    }
  });

  window.spaNavigateTo = navigateTo;
})();
