/**
 * Theme Manager — handles light/dark mode toggle and persistence.
 * Theme definitions live in themes.js; claude theme is hardcoded as active.
 */
(function () {
  const html = document.documentElement;
  const modeToggle = document.getElementById('mode-toggle');

  var currentTheme = 'claude';
  var currentMode = 'light';

  function apply() {
    var theme = window.THEMES.find(function (t) { return t.id === currentTheme; });
    if (!theme) return;

    var vars = theme[currentMode];
    if (!vars) return;

    Object.keys(vars).forEach(function (key) {
      html.style.setProperty(key, vars[key]);
    });

    // Sync mode toggle icon state
    if (modeToggle) {
      modeToggle.classList.toggle('is-dark', currentMode === 'dark');
      modeToggle.setAttribute('aria-label', currentMode === 'dark' ? 'Toggle light mode' : 'Toggle dark mode');
    }
  }

  function toggleMode() {
    currentMode = currentMode === 'light' ? 'dark' : 'light';
    apply();
    localStorage.setItem('mode', currentMode);
  }

  function init() {
    var savedMode = localStorage.getItem('mode');

    if (savedMode === 'light' || savedMode === 'dark') {
      currentMode = savedMode;
    } else {
      // No saved preference, respect system dark mode
      currentMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    apply();

    if (modeToggle) {
      modeToggle.addEventListener('click', toggleMode);
    }

    // Listen for system changes only if user hasn't manually set a mode preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem('mode')) {
        currentMode = e.matches ? 'dark' : 'light';
        apply();
      }
    });
  }

  init();
})();
