// URLSearchParams pour récupérer l'ID du photographe à partir de l'URL.
const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

console.log(photographerId);