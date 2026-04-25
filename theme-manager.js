/**
 * Theme Manager — handles theme dropdown, light/dark mode toggle, and persistence.
 * Depends on window.THEMES (defined in themes.js).
 */
(function () {
  const html = document.documentElement;
  const select = document.getElementById('theme-select');
  const modeToggle = document.getElementById('mode-toggle');

  var currentTheme = 'default';
  var currentMode = 'light';

  function apply() {
    var theme = window.THEMES.find(function (t) { return t.id === currentTheme; });
    if (!theme) return;

    var vars = theme[currentMode];
    if (!vars) return;

    Object.keys(vars).forEach(function (key) {
      html.style.setProperty(key, vars[key]);
    });

    // Sync dropdown
    if (select && select.value !== currentTheme) {
      select.value = currentTheme;
    }

    // Sync mode toggle icon visibility
    if (modeToggle) {
      var sun = modeToggle.querySelector('.icon-sun');
      var moon = modeToggle.querySelector('.icon-moon');
      if (sun) sun.style.opacity = currentMode === 'light' ? '1' : '0';
      if (moon) moon.style.opacity = currentMode === 'dark' ? '1' : '0';
    }
  }

  function populateDropdown() {
    if (!select) return;
    window.THEMES.forEach(function (theme) {
      var option = document.createElement('option');
      option.value = theme.id;
      option.textContent = theme.name;
      select.appendChild(option);
    });
  }

  function toggleMode() {
    currentMode = currentMode === 'light' ? 'dark' : 'light';
    apply();
    localStorage.setItem('mode', currentMode);
  }

  function setTheme(themeId) {
    currentTheme = themeId;
    apply();
    localStorage.setItem('theme', currentTheme);
  }

  function init() {
    populateDropdown();

    var savedTheme = localStorage.getItem('theme');
    var savedMode = localStorage.getItem('mode');

    if (savedTheme && window.THEMES.some(function (t) { return t.id === savedTheme; })) {
      currentTheme = savedTheme;
    }

    if (savedMode === 'light' || savedMode === 'dark') {
      currentMode = savedMode;
    } else {
      // No saved preference — respect system dark mode
      currentMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    apply();

    if (select) {
      select.addEventListener('change', function () {
        setTheme(select.value);
      });
    }

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
