// Khalid Bouzalmda — portfolio behavior
// Kept intentionally small: mobile nav toggle + dark mode toggle.
// Theme choice lives in memory only for this session (see note below);
// on your own GitHub Pages deployment you can freely add
// localStorage.setItem('theme', …) / getItem if you want it to persist
// across visits — that restriction only applies inside Claude's own
// in-chat preview sandbox, not to the site once it's actually deployed.

(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  // Default to the visitor's OS preference, no persistence.
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

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }
})();
