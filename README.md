# AfriConnect Summit 2026 - Projet d'Examen

Ce projet est une application web vitrine réalisée dans le cadre de l'examen de fin de semestre. Le site présente le sommet technologique "AfriConnect Summit 2026" qui se tiendra à Dakar, au Sénégal.

## 📁 Arborescence du Projet
Le projet respecte strictement la structure demandée :
- `index.html` : Page d'accueil avec présentation globale et statistiques.
- `programme.html` : Planning complet des 3 jours de l'événement.
- `intervenants.html` : Grille filtrable des experts et conférenciers.
- `contact.html` : Formulaire d'inscription et Foire Aux Questions (FAQ).
- `css/style.css` : Feuille de style unique regroupant l'ensemble du design.
- `js/main.js` : Script unique gérant toutes les fonctionnalités dynamiques.
- `images/` : Dossier contenant les photos des intervenants et les logos des partenaires.

## 🛠️ Fonctionnalités Implémentées

### Intégration HTML5 & CSS3
- Structure sémantique complète (utilisation des balises main, header, section, article, nav).
- Design responsive fluide géré avec **CSS Grid** et **Flexbox**, s'adaptant à toutes les tailles d'écrans.
- Charte graphique personnalisée basée sur des nuances chaleureuses de marron et de beige.
- Configuration de 8 variables CSS globales pour centraliser les couleurs et la typographie.
- Interface FAQ sous forme d'accordéon dynamique réalisé en **CSS pur** (sans JavaScript).

### Dynamisation en JavaScript Vanilla
- **Mode Sombre (Dark Mode)** : Changement global du thème de couleurs de la page au clic sur l'icône, avec mémorisation du choix de l'utilisateur via le `localStorage`.
- **Navbar Dynamique** : Réduction automatique de la hauteur de la barre de navigation et ajout d'une ombre portée lors du défilement de la page (`scroll`).
- **Bouton Retour en Haut** : Apparition fluide d'un bouton d'ancrage permettant de remonter au sommet du site d'un seul clic.
- **Compte à Rebours** : Calcul et affichage en temps réel des jours, heures, minutes et secondes restants avant le lancement du sommet (15 Octobre 2026).
- **Navigation par Onglets** : Système de tri permettant d'afficher le planning de chaque journée sans rechargement de page.
- **Filtrage des Intervenants** : Tri instantané des cartes de conférenciers selon leur domaine d'expertise (Tech, Business, Design, Data).
- **Validation du Formulaire** : Vérification complète des champs textuels, du format de l'adresse email et de la longueur du numéro de téléphone avant validation de l'inscription.

## 🚀 Technologies Utilisées
- HTML5
- CSS3 (Variables, Grid, Flexbox)
- JavaScript Vanilla (sans framework ni bibliothèque externe)