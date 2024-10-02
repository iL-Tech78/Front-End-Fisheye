function mediaFactory(mediaData, photographerName) {
    const { id, title, image, video, likes } = mediaData;
  
    const photographerFolder = photographerName;
    const mediaPath = image 
        ? `../../assets/realization/${photographerFolder}/${image}` 
        : `../../assets/realization/${photographerFolder}/${video}`;
  
    function getMediaCardDOM(index) {
      const article = document.createElement('article');
  
      const mediaContainer = document.createElement('a');
      mediaContainer.setAttribute('href', '#');
      mediaContainer.classList.add('media-link');
  
      let mediaElement;
  
      if (image) {
        mediaElement = document.createElement('img');
        mediaElement.setAttribute('src', mediaPath);
        mediaElement.setAttribute('alt', `${title}, vue rapprochée`);
      } else if (video) {
        mediaElement = document.createElement('video');
        mediaElement.setAttribute('src', mediaPath);
        mediaElement.setAttribute('type', 'video/mp4');
        mediaElement.setAttribute('aria-label', `${title}, vue rapprochée`);
        mediaElement.setAttribute('controls', false);
      }
  
      mediaElement.classList.add('media-item');
  
      // Ajouter l'événement pour ouvrir la Lightbox
      mediaElement.addEventListener('click', () => {
        openLightbox(index);
      });
  
      // Rendre le média accessible via le clavier
      mediaElement.setAttribute('tabindex', '0');
      mediaElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          openLightbox(index);
        }
      });
  
      mediaContainer.appendChild(mediaElement);
      article.appendChild(mediaContainer);
  
      const mediaInfo = document.createElement('div');
      mediaInfo.classList.add('media-info');
  
      const mediaTitle = document.createElement('h3');
      mediaTitle.textContent = title;
  
      const likeContainer = document.createElement('div');
      likeContainer.classList.add('like-container');
      
      const mediaLikes = document.createElement('p');
      mediaLikes.textContent = likes;
      mediaLikes.classList.add('likes-count');
  
      const likeButton = document.createElement('button');
      likeButton.classList.add('like-button');
      likeButton.setAttribute('aria-label', 'Ajouter un like');
      likeButton.innerHTML = '<i class="fas fa-heart" aria-hidden="true"></i>';
  
      likeContainer.appendChild(mediaLikes);
      likeContainer.appendChild(likeButton);
  
      // Ajouter l'événement pour gérer le like
      let isLiked = false;
      likeButton.addEventListener('click', () => {
        if (!isLiked) {
          mediaLikes.textContent = parseInt(mediaLikes.textContent) + 1;
          updateTotalLikes(1);
          isLiked = true;
          likeButton.classList.add('liked');
          likeButton.setAttribute('aria-label', 'Vous avez aimé ce média');
        }
      });

      mediaInfo.appendChild(mediaTitle);
      mediaInfo.appendChild(likeContainer);
      article.appendChild(mediaInfo);
  
      return article;
    }
  
    return { id, title, mediaPath, image, video, likes, getMediaCardDOM };
}
  
  