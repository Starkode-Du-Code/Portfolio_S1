/* ----- MENU HAMBURGER POUR MOBILE ----- */
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const icon = document.querySelector(".nav-menu-btn i");
  menu.classList.toggle("responsive");
  icon.classList.toggle("uil-times");
  icon.classList.toggle("uil-bars");
}

/* ----- AJOUT D'UNE OMBRE AU MENU LORS DU DÉFILEMENT ----- */
window.addEventListener("scroll", () => {
  headerShadow();
  scrollActive();
});

function headerShadow() {
  const navHeader = document.querySelector("nav");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
  }
}

/* ----- EFFET DE TYPOGRAPHIE DYNAMIQUE AVEC TYPED.JS ----- */
var typed = new Typed(".typedText", {
  strings: ["Développeur", "Étudiant", "Passionné"],
  typeSpeed: 100,   // Vitesse de frappe (plus élevé = plus lent)
  backSpeed: 80,    // Vitesse d'effacement (plus élevé = plus lent)
  backDelay: 2000,  // Délai avant l'effacement (en millisecondes)
  startDelay: 500,  // Délai avant le début de la frappe (optionnel)
  loop: true,
});

/* ----- ANIMATIONS AU DÉFILEMENT AVEC SCROLLREVEAL.JS ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});


// Animer la section Projets
sr.reveal('#projects .top-header', {
  origin: 'top',
  delay: 200,
  opacity: 1
});

sr.reveal('#projects .project-container', {
  origin: 'bottom',
  delay: 500,
  interval: 200
});

// Animer le sous-titre "En savoir plus"
sr.reveal('.section__text__p1', {
  origin: 'left',
  delay: 200
});

// Animer le titre principal "À propos de moi"
sr.reveal('.title', {
  origin: 'left',
  delay: 300
});

// Animer l'image de vous-même
sr.reveal('.about-pic', {
  origin: 'left',
  delay: 400
});

// Animer les blocs d'expérience et de formation
sr.reveal('.details-container', {
  origin: 'bottom',
  delay: 500,
  interval: 200
});

// Animer le texte de présentation
sr.reveal('.text-container', {
  origin: 'right',
  delay: 600
});

// Animer le bouton "Télécharger CV"
sr.reveal('.about-btn', {
  origin: 'bottom',
  delay: 700
});

// Animer l'icône flèche
sr.reveal('.icon.arrow', {
  origin: 'top',
  delay: 800
});

// Animer les éléments de la section Expérience
sr.reveal('#experience .section__text__p1', {
  origin: 'left',
  delay: 200
});

sr.reveal('#experience .title', {
  origin: 'left',
  delay: 300
});

sr.reveal('.experience-details-container', {
  origin: 'bottom',
  delay: 400,
  interval: 200
});

sr.reveal('.icon.arrow', {
  origin: 'top',
  delay: 500
});

/* -- ANIMATION DES ÉLÉMENTS DE LA PAGE D'ACCUEIL -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });




/* -- ANIMATION DES SECTIONS -- */
sr.reveal(".top-header", {});
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".project-card", { interval: 200 });

/* -- ANIMATION GAUCHE-DROITE POUR CERTAINS ÉLÉMENTS -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- MISE À JOUR DU LIEN ACTIF DANS LA NAVIGATION ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      `.nav_menu_list a[href="#${sectionId}"]`
    );

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

/* ----- FERMER LE MENU MOBILE LORS DU CLIC SUR UN LIEN ----- */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".nav-menu");
    const icon = document.querySelector(".nav-menu-btn i");
    if (menu.classList.contains("responsive")) {
      menu.classList.remove("responsive");
      icon.classList.toggle("uil-times");
      icon.classList.toggle("uil-bars");
    }
  });
});

/* ----- CHANGEMENT DE THÈME (MODE CLAIR / MODE SOMBRE) ----- */
const themeButton = document.getElementById('theme-button');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  body.classList.add(currentTheme);

  if (currentTheme === 'dark-mode') {
    themeButton.classList.replace('uil-moon', 'uil-sun');
  }
}

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeButton.classList.replace('uil-moon', 'uil-sun');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    themeButton.classList.replace('uil-sun', 'uil-moon');
    localStorage.setItem('theme', '');
  }
});


function handleSubmit(event) {
  event.preventDefault(); // Empêche la soumission par défaut

  const form = event.target;
  
  // Envoi du formulaire via la fonction Netlify
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
  .then(() => {
    // Afficher le message de succès
    document.getElementById("success-message").style.display = "block";
    form.style.display = "none"; // Cacher le formulaire
  })
  .catch((error) => alert("Erreur lors de l'envoi du formulaire", error));
}
