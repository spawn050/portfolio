(function () {
  const USE_FILL_ICONS = true; // Set to false for stroke icons

  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const links = document.querySelector('.links');
  if (links) {
    links.classList.add(USE_FILL_ICONS ? 'show-fill' : 'show-stroke');
  }

  function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  }

  // Initialize
  applyTheme(getTheme());

  // Listen for system changes only if user hasn't manually set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  toggle.addEventListener('click', toggleTheme);
})();
