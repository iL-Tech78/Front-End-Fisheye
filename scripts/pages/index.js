async function getPhotographers() {
    try {
        // J'utilise  fetch pour récupérer le fichier de mon JSON
        const response = await fetch('../../data/photographers.json');
        // Je vérification que la réponse est valide
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data = await response.json(); // Conversion la réponse en JSON
        console.log(data); // J'afficher les données dans la console pour vérification si tout est ok
        return data.photographers; // Je retourne les données des photographes
    } catch (error) {
        console.error('Erreur lors de la récupération des photographes:', error);
    }
}

async function displayPhotographers() {
    const photographers = await getPhotographers(); // Je récupérer les données
    const photographersSection = document.querySelector('.photographer_section');
    // Photographers est un tableau qui contient les données de chaque photographe, récupérées du fichier JSON.
    console.log(photographers);
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer); // J'utiliser la Factory Method *1 Voir le README
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
displayPhotographers(); // J'appeler la fonction pour afficher les photographes

async function init() {
    // J'attend que les données des photographes soient récupérées via la fonction getPhotographers().
    const { photographers } = await getPhotographers();

}

init();