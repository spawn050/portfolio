(function () {
  const USE_FILL_ICONS = true; // Set to false for stroke icons, true for fill icons

  const links = document.querySelector('.links');
  if (links) {
    links.classList.add(USE_FILL_ICONS ? 'show-fill' : 'show-stroke');
  }

  // Email copy to clipboard
  const emailLink = document.querySelector('.email-copy');
  const toast = document.getElementById('toast');
  const emailAddress = 'omkarsatam.office@gmail.com';
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove('show');
    }, 2000);
  }

  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailAddress).then(function () {
          showToast('Email copied to clipboard');
        }).catch(function () {
          showToast('Failed to copy email');
        });
      } else {
        // Fallback for older browsers
        try {
          const textarea = document.createElement('textarea');
          textarea.value = emailAddress;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast('Email copied to clipboard');
        } catch (err) {
          showToast('Failed to copy email');
        }
      }
    });
  }
})();
