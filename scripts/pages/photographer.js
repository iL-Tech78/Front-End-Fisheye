// Je récupérer l'ID du photographe à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

// Fonction pour récupérer les données du photographe et de ses médias a partir de son ID
async function getPhotographerData(id) {
    try {
        const response = await fetch('../../data/photographers.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data = await response.json();

        // Je trouve le photographe correspondant
        const photographer = data.photographers.find(p => p.id == id);

        // Je Filtre les médias du photographe
        // Trouver et retourner le photographe dont l'ID correspond à celui passé en paramètre.
        // Monouveau tableau media qui contient tous les médias associés au photographe avec l'ID donné.
        const media = data.media.filter(m => m.photographerId == id);

        return { photographer, media };
        // Si id = 82, la méthode find() parcourra le tableau jusqu'à trouver le photographe dont p.id == 82.
    } catch (error) {
        console.error('Erreur lors de la récupération des données du photographe :', error);
    }
}

// Fonction pour afficher les informations du photographe
function displayPhotographerHeader(photographer) {
    const header = document.querySelector('.photograph-header');

    // Création des éléments
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('photograph-info');

    const h1 = document.createElement('h1');
    h1.textContent = photographer.name;
    h1.classList.add('photograph-info__h1');

    const location = document.createElement('p');
    location.textContent = `${photographer.city}, ${photographer.country}`;
    location.classList.add('photograph-info__location');

    const tagline = document.createElement('p');
    tagline.textContent = photographer.tagline;
    tagline.classList.add('photograph-info__tagline');

    const portrait = document.createElement('img');
    portrait.setAttribute('src', `assets/photographers/${photographer.portrait}`);
    portrait.setAttribute('alt', `Portrait de ${photographer.name}`);
    portrait.classList.add('photograph-info__portrait');

    // Assemblage des éléments
    infoDiv.appendChild(h1);
    infoDiv.appendChild(location);
    infoDiv.appendChild(tagline);

    header.insertBefore(infoDiv, header.querySelector('.contact_button'));
    header.appendChild(portrait);
}

// Fonction pour afficher la galerie de médias
function displayMediaGallery(mediaArray, photographerName) {
    const mediaSection = document.querySelector('.media_section');

    mediaArray.forEach(media => {
        const mediaModel = mediaFactory(media, photographerName);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
}

// Fonction pour afficher la boîte de tarif journalier
function displayPriceBox(photographer) {
    const priceBox = document.querySelector('.price-box');

    const price = document.createElement('p');
    price.textContent = `${photographer.price}€ / jour`;
    price.classList.add('price-text');

    priceBox.appendChild(price);
}

// Fonction pour afficher la galerie de médias
function displayMediaGallery(mediaDataArray, photographerName) {
    const mediaSection = document.querySelector('.media_section');
    mediaArray = []; // Réinitialiser le tableau des médias
  
    mediaDataArray.forEach((mediaData, index) => {
      const mediaModel = mediaFactory(mediaData, photographerName);
      const mediaCardDOM = mediaModel.getMediaCardDOM(index);
      mediaSection.appendChild(mediaCardDOM);
  
      // Ajouter le média au tableau mediaArray pour la Lightbox
      mediaArray.push({
        mediaPath: mediaModel.mediaPath,
        title: mediaModel.title,
        image: mediaModel.image,
        video: mediaModel.video
      });
    });
}

// Fonction principale pour afficher les données du photographe
async function displayPhotographerData() {
    const { photographer, media } = await getPhotographerData(photographerId);

    if (photographer) {
        displayPhotographerHeader(photographer);
        displayMediaGallery(media, photographer.name);
        displayPriceBox(photographer);
        // Mettre à jour le titre de la modale avec le nom du photographe
        updateModalTitle(photographer.name);
    } else {
        console.error('Photographe non trouvé');
    }
}

displayPhotographerData();
