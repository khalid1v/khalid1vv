// Khalid Bouzalmda — portfolio behavior
// Tab-based page switching (no anchor scrolling): clicking a nav item
// or any [data-goto] element swaps the visible "page" and scrolls to top.
// Dark mode + mobile menu kept small and dependency-free.
//
// Note on persistence: theme choice lives in memory only for this
// session. On your own GitHub Pages deployment you can add
// localStorage.setItem('theme', …) / getItem if you want it to persist
// across visits — that restriction only applies inside Claude's own
// in-chat preview sandbox, not to the site once it's actually deployed.

(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  var pages = document.querySelectorAll('.page');
  var navLinks = document.querySelectorAll('.tab-link');
  var gotoEls = document.querySelectorAll('[data-goto]');

  function showPage(name) {
    var found = false;
    pages.forEach(function (p) {
      var match = p.getAttribute('data-page') === name;
      p.classList.toggle('active', match);
      if (match) found = true;
    });
    if (!found) {
      // fallback to home if an unknown/missing hash is requested
      pages.forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-page') === 'home');
      });
      name = 'home';
    }
    navLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('data-goto') === name);
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    history.replaceState(null, '', '#' + name);
    nav.classList.remove('open');
  }

  gotoEls.forEach(function (el) {
    el.addEventListener('click', function () {
      showPage(el.getAttribute('data-goto'));
    });
  });

  window.addEventListener('popstate', function () {
    showPage((location.hash || '#home').slice(1));
  });

  // Initial page: honor a deep link like index.html#projects, else home.
  showPage((location.hash || '#home').slice(1));

  // Theme: default to the visitor's OS preference, no persistence.
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark');
  }
  function syncThemeIcon() {
    if (!themeBtn) return;
    themeBtn.textContent = root.classList.contains('dark') ? '◑' : '◐';
  }
  syncThemeIcon();
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      root.classList.toggle('dark');
      syncThemeIcon();
    });
  }

  // Mobile menu
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
})();
