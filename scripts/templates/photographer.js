function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `../../assets/photographers/${portrait}`;

    // Création de mon éléments HTML 
    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;

        const description = document.createElement('p');
        description.textContent = tagline;

        const pricing = document.createElement('p');
        pricing.textContent = `${price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(pricing);

        return article;
    }

    return { name, picture, getUserCardDOM };
}
