// Récupération de l'élément HTML5
const footerYear = document.querySelector(".footer__year");

// Récupéartion de la date actuelle
const today = new Date();

// Récupération de l'année en cours
const currentYear = today.getFullYear();

// Afichage dynamique de l'année

footerYear.textContent = `${currentYear}`;
