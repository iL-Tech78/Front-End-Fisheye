function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `../../assets/photographers/${portrait}`;

    // Création de mon élément HTML 
    function getUserCardDOM() {
        const article = document.createElement('article');
        article.setAttribute('aria-label', `Profil de ${name}`);

        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${data.id}`);
        link.setAttribute('aria-label', `Voir la page de ${name}`);

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Portrait de ${name}`);
        img.classList.add('img__photographer');


        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.classList.add('name__photographer');


        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.setAttribute('aria-label', `Localisation: ${city}, ${country}`);
        location.classList.add('location__photographer');


        const description = document.createElement('p');
        description.textContent = tagline;
        description.classList.add('description__photographer');

        const pricing = document.createElement('p');
        pricing.textContent = `${price}€/jour`;
        pricing.setAttribute('aria-label', `Prix: ${price} euros par jour`);
        pricing.classList.add('price__photographer');

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(pricing);

        // J'insère tout dans le lien
        link.appendChild(article);

        return link;
    }


    return { name, picture, getUserCardDOM };
}
