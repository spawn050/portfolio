(function () {
  const USE_FILL_ICONS = false; // Set to false for stroke icons, true for fill icons

  const links = document.querySelector('.links');
  if (links) {
    links.classList.add(USE_FILL_ICONS ? 'show-fill' : 'show-stroke');
  }
})();
