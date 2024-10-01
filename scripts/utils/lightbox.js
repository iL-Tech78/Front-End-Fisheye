let currentMediaIndex = 0;
let mediaArray = [];

function openLightbox(index) {
  const lightboxModal = document.getElementById('lightbox_modal');
  const main = document.getElementById('main');
  const body = document.querySelector('body');

  lightboxModal.style.display = 'block';
  lightboxModal.setAttribute('aria-hidden', 'false');
  main.setAttribute('aria-hidden', 'true');
  body.classList.add('no-scroll');

  currentMediaIndex = index;
  displayLightboxMedia(currentMediaIndex);

  lightboxModal.focus();
}

function closeLightbox() {
  const lightboxModal = document.getElementById('lightbox_modal');
  const main = document.getElementById('main');
  const body = document.querySelector('body');

  lightboxModal.style.display = 'none';
  lightboxModal.setAttribute('aria-hidden', 'true');
  main.setAttribute('aria-hidden', 'false');
  body.classList.remove('no-scroll');
}

function displayLightboxMedia(index) {
  const lightboxContent = document.querySelector('.lightbox__content');
  const media = mediaArray[index];

  lightboxContent.innerHTML = '';

  let mediaElement;

  if (media.image) {
    mediaElement = document.createElement('img');
    mediaElement.setAttribute('src', media.mediaPath);
    mediaElement.setAttribute('alt', media.title);
  } else if (media.video) {
    mediaElement = document.createElement('video');
    mediaElement.setAttribute('src', media.mediaPath);
    mediaElement.setAttribute('controls', true);
    mediaElement.setAttribute('alt', media.title);
  }

  const mediaTitle = document.createElement('h2');
  mediaTitle.textContent = media.title;

  lightboxContent.appendChild(mediaElement);
  lightboxContent.appendChild(mediaTitle);
}

function nextMedia() {
  currentMediaIndex = (currentMediaIndex + 1) % mediaArray.length;
  displayLightboxMedia(currentMediaIndex);
}

function previousMedia() {
  currentMediaIndex = (currentMediaIndex - 1 + mediaArray.length) % mediaArray.length;
  displayLightboxMedia(currentMediaIndex);
}

document.addEventListener('keydown', function(event) {
  const lightboxModal = document.getElementById('lightbox_modal');
  if (lightboxModal.getAttribute('aria-hidden') === 'false') {
    if (event.key === 'ArrowRight') {
      nextMedia();
    } else if (event.key === 'ArrowLeft') {
      previousMedia();
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  }
});

document.addEventListener('keydown', function(event) {
  const lightboxModal = document.getElementById('lightbox_modal');
  if (lightboxModal.getAttribute('aria-hidden') === 'false') {
    const focusableElements = lightboxModal.querySelectorAll('button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }
});
  