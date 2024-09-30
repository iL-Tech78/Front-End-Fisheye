function mediaFactory(media, photographerName) {
    const { id, title, image, video, likes } = media;
    const photographerFolder = photographerName;

    // Chemin pour les médias
    const mediaPath = image 
        ? `../../assets/realization/${photographerFolder}/${image}` 
        : `../../assets/realization/${photographerFolder}/${video}`;

        // ? /* si image est définie (vrai) 
        // : /* si image est indéfinie (faux), donc c'est une vidéo
    function getMediaCardDOM() {
        const article = document.createElement('article');

        const mediaLink = document.createElement('a');
        mediaLink.setAttribute('href', '#');
        mediaLink.classList.add('media-link');
        
        let mediaElement;

        if (image) {
            mediaElement = document.createElement('img');
            mediaElement.setAttribute('src', mediaPath);
            mediaElement.setAttribute('alt', title);
        } else if (video) {
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('src', mediaPath);
            mediaElement.setAttribute('type', 'video/mp4');
            mediaElement.setAttribute('aria-label', title);
            mediaElement.setAttribute('controls', true);
        }

        mediaElement.classList.add('media-item');

        const mediaInfo = document.createElement('div');
        mediaInfo.classList.add('media-info');

        const mediaTitle = document.createElement('h3');
        mediaTitle.textContent = title;

        const mediaLikes = document.createElement('p');
        mediaLikes.textContent = `${likes} ♥`;

        mediaInfo.appendChild(mediaTitle);
        mediaInfo.appendChild(mediaLikes);

        mediaLink.appendChild(mediaElement);
        article.appendChild(mediaLink);
        article.appendChild(mediaInfo);

        return article;
    }

    return { getMediaCardDOM };
}
