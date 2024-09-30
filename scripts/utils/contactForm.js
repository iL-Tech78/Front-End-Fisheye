// scripts/utils/contactForm.js

function displayModal() {
    const modal = document.getElementById('contact_modal');
    const main = document.getElementById('main');
    const body = document.querySelector('body');
  
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'true');
    body.classList.add('no-scroll');
  
    // Placer le focus sur le premier champ du formulaire
    document.getElementById('first_name').focus();
  }
  
  function closeModal() {
    const modal = document.getElementById('contact_modal');
    const main = document.getElementById('main');
    const body = document.querySelector('body');
  
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    main.setAttribute('aria-hidden', 'false');
    body.classList.remove('no-scroll');
  
    // Retourner le focus sur le bouton "Contactez-moi"
    document.querySelector('.contact_button').focus();
  }
  
  // Fonction pour gérer la soumission du formulaire
  function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupérer les valeurs des champs
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Afficher les valeurs dans la console
    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Fermer la modale après soumission
    closeModal();
  
    // Réinitialiser le formulaire
    event.target.reset();
  }
  
  // Fonction pour afficher le nom du photographe dans la modale
  function updateModalTitle(photographerName) {
    const modalTitle = document.getElementById('contact_modal_title');
    modalTitle.innerHTML = `Contactez-moi<br />${photographerName}`;
  }
  