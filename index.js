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

  // Lightbox for project GIFs
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const projectMedia = document.querySelectorAll('.project-media');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  }

  projectMedia.forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === lightboxImg) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('show')) {
      closeLightbox();
    }
  });
})();
