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

  // Wake-on-demand live link
  var liveLink = document.getElementById('live-link');
  if (liveLink) {
    var HEALTH_URL = 'http://lwiggy.duckdns.org/api/health';
    var LIVE_URL = liveLink.getAttribute('data-live-url') || 'http://lwiggy.duckdns.org';
    var LAMBDA_URL = 'https://ckwxde5lzj2sgdd2pab6blaley0djgxo.lambda-url.ap-south-1.on.aws/';
    var TIMEOUT = 5000;
    var MAX_RETRIES = 10;
    var BASE_DELAY = 2000;
    var MAX_DELAY = 300000;
    var JITTER = 0.3;

    var liveLabel = liveLink.querySelector('.live-label');
    var abortCtrl = null;
    var pollTimer = null;
    var currentState = 'idle';

    function setLiveState(state, text) {
      currentState = state;
      liveLink.classList.remove('live-link--polling', 'live-link--ready', 'live-link--offline');
      if (state !== 'idle') {
        liveLink.classList.add('live-link--' + state);
      }
      if (liveLabel) liveLabel.textContent = text;
    }

    function cancelLive() {
      if (abortCtrl) abortCtrl.abort();
      if (pollTimer) clearTimeout(pollTimer);
      abortCtrl = null;
      pollTimer = null;
    }

    function checkHealth() {
      abortCtrl = new AbortController();
      var timer = setTimeout(function () { abortCtrl.abort(); }, TIMEOUT);
      return fetch(HEALTH_URL, { mode: 'no-cors', signal: abortCtrl.signal })
        .then(function () {
          clearTimeout(timer);
          return true;
        })
        .catch(function () {
          clearTimeout(timer);
          return false;
        });
    }

    function wakeServer() {
      fetch(LAMBDA_URL, { method: 'GET', mode: 'no-cors' }).catch(function () {});
    }

    function poll(attempt) {
      if (attempt >= MAX_RETRIES) {
        setLiveState('offline', 'Server offline');
        return;
      }

      checkHealth().then(function (up) {
        if (currentState !== 'polling') return;
        if (up) {
          setLiveState('ready', 'Open Lwiggy →');
          return;
        }

        var delay = Math.min(BASE_DELAY * Math.pow(2, attempt), MAX_DELAY);
        var jittered = Math.round(delay * (1 - JITTER / 2 + Math.random() * JITTER));
        pollTimer = setTimeout(function () {
          poll(attempt + 1);
        }, jittered);
      });
    }

    liveLink.addEventListener('click', function (e) {
      if (currentState === 'polling') {
        e.preventDefault();
        cancelLive();
        setLiveState('idle', 'Try it live');
        return;
      }
      if (currentState === 'ready') {
        setLiveState('idle', 'Try it live');
        return;
      }
      if (currentState === 'offline') {
        e.preventDefault();
        cancelLive();
        setLiveState('polling', 'Waking server... (may take ~2 mins)');
        wakeServer();
        poll(0);
        return;
      }

      e.preventDefault();
      cancelLive();
      setLiveState('polling', 'Waking server... (may take ~2 mins)');
      checkHealth().then(function (up) {
        if (currentState !== 'polling') return;
        if (up) {
          window.open(LIVE_URL, '_blank');
          setLiveState('idle', 'Try it live');
        } else {
          wakeServer();
          poll(0);
        }
      });
    });
  }
})();
