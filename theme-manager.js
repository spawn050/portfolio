/**
 * Theme Manager — handles theme dropdown, application, and persistence.
 * Depends on window.THEMES (defined in themes.js).
 */
(function () {
  const select = document.getElementById('theme-select');
  const html = document.documentElement;

  function applyTheme(themeId) {
    const theme = window.THEMES.find(function (t) { return t.id === themeId; });
    if (!theme) return;

    Object.keys(theme.variables).forEach(function (key) {
      html.style.setProperty(key, theme.variables[key]);
    });

    if (select && select.value !== themeId) {
      select.value = themeId;
    }
  }

  function populateDropdown() {
    if (!select) return;
    window.THEMES.forEach(function (theme) {
      const option = document.createElement('option');
      option.value = theme.id;
      option.textContent = theme.name;
      select.appendChild(option);
    });
  }

  function init() {
    populateDropdown();

    const saved = localStorage.getItem('theme');
    const initial = saved || 'light';
    applyTheme(initial);

    if (select) {
      select.addEventListener('change', function () {
        applyTheme(select.value);
        localStorage.setItem('theme', select.value);
      });
    }
  }

  init();
})();
