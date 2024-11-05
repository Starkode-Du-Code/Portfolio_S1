# Portfolio Web - Stark Kassa

Ce projet est un **portfolio personnel** moderne, interactif et responsive, conçu par **Stark Kassa**, étudiant en développement d'applications. L'objectif est de présenter mes projets, mon expérience et mes compétences, tout en offrant une interface fluide, intuitive et agréable.

## Fonctionnalités Principales

- **Section Accueil** : Introduction et présentation rapide.
- **Section À propos** : Informations personnelles, expériences et formations affichées en colonnes.
- **Section Projets** : Liste des projets réalisés, avec un design intuitif et des liens vers les démos et les références GitHub.
- **Section Contact** : Formulaire de contact simple et efficace avec envoi de messages.
- **Thème Clair/Sombre** : Option permettant à l'utilisateur de basculer entre le mode clair et le mode sombre.
- **Responsive** : Adaptation parfaite à toutes les tailles d'écran, y compris les smartphones et tablettes.

## Technologies Utilisées

- **HTML5** pour la structure du site et l'organisation des différentes sections.
- **CSS3** pour le style, les animations, et la gestion de la mise en page responsive.
- **JavaScript** pour les interactions utilisateur, les effets visuels, et la gestion de la logique comme le changement de thème.

## Aperçu du Projet

### Interface du Portfolio

Le portfolio présente une interface claire et moderne, avec une navigation simplifiée et des animations subtiles pour améliorer l'expérience utilisateur. Voici les principales sections :

- **Accueil** : Introduction avec le nom et une courte description, accompagnés d'une image de profil.
- **À propos** : Informations sur moi, y compris mon parcours académique et professionnel, avec des cartes d'informations.
- **Projets** : Chaque projet est présenté sous forme de carte avec des boutons pour accéder à la démo en ligne ou au répertoire GitHub.
- **Contact** : Formulaire de contact pour que les visiteurs puissent m'envoyer un message directement.

## Code et Structure

### Fichier HTML

Le fichier HTML est structuré pour contenir plusieurs sections bien définies :

- **Section Header (`nav`)** : Contient la navigation principale avec les liens vers les différentes sections du portfolio.
- **Section Projets (`#projects`)** : Chaque projet est présenté avec une icône, un titre, une description, et des boutons.

```html
<section class="section" id="projects">
  <div class="top-header">
    <h1>Projets</h1>
  </div>
  <div class="project-container">
    <div class="project-box">
      <i class="uil uil-calculator-alt"></i>
      <h3>Calculator</h3>
      <p>Une calculatrice Web (IOS) interactive</p>
      <div class="project-buttons">
        <button class="btn" onclick="window.open('https://github.com/Starkode-Du-Code/web-calculator', '_blank')">
          Lien GitHub <i class="uil uil-github-alt"></i>
        </button>
        <button class="btn" onclick="window.open('https://web-calculator-stark.netlify.app/', '_blank')">
          Demo en Ligne <i class="uil uil-external-link-alt"></i>
        </button>
      </div>
    </div>
  </div>
</section>
```

### JavaScript - Interaction Utilisateur

Le JavaScript gère principalement les interactions utilisateur, telles que le changement de thème et la logique de navigation :

- **Changement de thème (`theme-button`)** : Permet de basculer entre le mode clair et le mode sombre, avec sauvegarde dans `localStorage` pour conserver la préférence.

```javascript
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
```

### CSS - Design et Animation

Le CSS apporte un style moderne, avec des couleurs adaptées au thème clair/sombre, et des animations pour rendre l'expérience plus immersive.

- **Boutons et Effets de Hover** : Chaque bouton a un effet visuel au survol, avec une couleur différente selon le thème actif.

```css
.btn {
  padding: 10px 15px;
  background: var(--btn-bg-color);
  color: var(--btn-text-color);
  border-radius: 10px;
  transition: background 0.3s, color 0.3s;
}

.btn:hover {
  background: var(--btn-hover-bg-color);
  color: var(--btn-text-color);
}
```

## Guide d'Utilisation

1. **Démarrer le projet** : Clonez le répertoire GitHub et ouvrez le fichier `index.html` dans votre navigateur.
2. **Naviguer entre les sections** : Utilisez le menu de navigation en haut de la page.
3. **Changer de thème** : Cliquez sur l'icône de lune/soleil pour basculer entre le mode clair et le mode sombre.
4. **Visualiser les projets** : Cliquez sur les boutons dans la section Projets pour voir les démos en ligne ou le code source.

## Améliorations Futures

- **Ajout de nouvelles sections** : Comme un blog pour partager des articles techniques.
- **Optimisation du formulaire de contact** : Intégration avec un backend pour gérer les soumissions de messages.
- **Animations supplémentaires** : Rendre les transitions entre les sections plus dynamiques.

## Objectif du Projet

Ce projet de portfolio a été conçu pour démontrer mes compétences en développement front-end, notamment en HTML, CSS et JavaScript. C'est une manière de me présenter, de montrer ce que je sais faire, et d'avoir un point de contact direct avec les visiteurs.

## Contact

Pour toute question, suggestion, ou collaboration, vous pouvez me contacter via [GitHub](https://github.com/Starkode-Du-Code) ou [LinkedIn](#).

---

Merci d'avoir visité mon portfolio, et n'hésitez pas à me laisser un message !
