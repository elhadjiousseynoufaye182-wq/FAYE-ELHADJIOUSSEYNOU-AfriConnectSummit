//  GESTION DE LA NAVBAR AU DÉFILEMENT 
window.addEventListener('scroll', function() {
    let maBarre = document.querySelector('.navbar');
    //   Si on descend de plus de 50 pixels, on ajoute la classe de style
    if (window.scrollY > 50) {
        maBarre.classList.add('navbar-scrolled');
    } else {
        maBarre.classList.remove('navbar-scrolled');
    }
});
//  GESTION DU MODE SOMBRE (DARK MODE)
let boutonTheme = document.getElementById('theme-toggle');
// On vérifie si l'utilisateur est déjà venu et s'il avait choisi le mode sombre
let choixUtilisateur = localStorage.getItem('monTheme');

if (choixUtilisateur === 'oui') {
    document.body.classList.add('dark-mode');
}
// Événement au clic sur le bouton Lune
boutonTheme.addEventListener('click', function() {
     // Si le mode sombre est actif, on l'enlève
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('monTheme', 'non');
    } 
     // Sinon, on l'ajoute
    else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('monTheme', 'oui');
    }
});
// COMPTE À REBOURS POUR L'ÉVÉNEMENT
function lancerCompteARebours() {
    // Date de l'événement : 15 Octobre 2026 à 09:00:00
    var dateEvenement = new Date("Oct 15, 2026 09:00:00").getTime();
     // On met à jour le compteur toutes les secondes
    var x = setInterval(function() {
        var maintenant = new Date().getTime();
        var distance = dateEvenement - maintenant;
        // Calcul des jours, heures, minutes et secondes
        var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondes = Math.floor((distance % (1000 * 60)) / 1000);
        // On récupère les éléments HTML si on est sur la page d'accueil
        var elJours = document.getElementById("jour");
        var elHeures = document.getElementById("heure");
        var elMinutes = document.getElementById("minute");
        var elSecondes = document.getElementById("seconde");
        // Si les éléments existent sur la page, on affiche les chiffres
        if (elJours && elHeures && elMinutes && elSecondes) {
            elJours.innerHTML = jours < 10 ? "0" + jours : jours;
            elHeures.innerHTML = heures < 10 ? "0" + heures : heures;
            elMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            elSecondes.innerHTML = secondes < 10 ? "0" + secondes : secondes;
        }
         // Si le compte à rebours est fini
         if (distance < 0) {
            clearInterval(x);
            var zoneCompteur = document.querySelector(".countdown");
            if (zoneCompteur) {
                zoneCompteur.innerHTML = "<p>L'événement a commencé !</p>";
            }
        }
    }, 1000);
}
// Lancement automatique du compte à rebours
lancerCompteARebours();
// ANNÉE AUTOMATIQUE DANS LE FOOTER
var elAnnee = document.getElementById("year");
if (elAnnee) {
    elAnnee.innerHTML = new Date().getFullYear();
}
//  BOUTON RETOUR EN HAUT 
var boutonRetour = document.getElementById("back-to-top");

if (boutonRetour) {
     // On affiche ou cache le bouton selon le scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            boutonRetour.style.display = "flex";
        } else {
            boutonRetour.style.display = "none";
        }
    });
    // Au clic, on remonte tout en haut en douceur
    boutonRetour.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
//  GESTION DES ONGLET DU PROGRAMME 
var mesBoutonsOnglets = document.querySelectorAll(".tab-link");
var mesPanneaux = document.querySelectorAll(".panel");
for (var i = 0; i < mesBoutonsOnglets.length; i++) {
    // On enlève la classe active de tous les boutons
    mesBoutonsOnglets[i].addEventListener("click", function() {
        for (var j = 0; j < mesBoutonsOnglets.length; j++) {
            mesBoutonsOnglets[j].classList.remove("active");
        }
         //  On ajoute la classe active sur le bouton cliqué
         this.classList.add("active");
         //  On récupère le jour à afficher 
        var jourCible = this.getAttribute("nombre-j");
         //  On cache tous les tableaux et on affiche le bon
        for (var k = 0; k < mesPanneaux.length; k++) {
            mesPanneaux[k].classList.remove("active");
        }
        
        var panneauAAfficher = document.getElementById("jour-" + jourCible);
        if (panneauAAfficher) {
            panneauAAfficher.classList.add("active");
       }
    });
}
// FILTRAGE DYNAMIQUE DES INTERVENANTS 
var boutonsFiltres = document.querySelectorAll(".filtre-btn");
var cartesIntervenants = document.querySelectorAll(".intervenant-card");

for (var a = 0; a < boutonsFiltres.length; a++) {
    boutonsFiltres[a].addEventListener("click", function() {
         // On change le bouton actif
        for (var b = 0; b < boutonsFiltres.length; b++) {
            boutonsFiltres[b].classList.remove("active");
        }
        this.classList.add("active");
        //  On récupère la catégorie choisie
        var categorieChoisie = this.getAttribute("data-cat");
           //  On affiche ou cache les cartes des experts 
        for (var c = 0; c < cartesIntervenants.length; c++) {
            var categorieCarte = cartesIntervenants[c].getAttribute("categorie");

            if (categorieChoisie === "all" || categorieChoisie === categorieCarte) {
                cartesIntervenants[c].style.display = "block"; 
            } else {
                cartesIntervenants[c].style.display = "none";  
            }
        }
    });
}
// On récupère le formulaire dans le HTML
var monFormulaire = document.getElementById("forme")
if (monFormulaire) {
     // Événement déclenché quand l'étudiant clique sur Envoyer
    monFormulaire.addEventListener("submit", function(evenement) {
         // On bloque le rechargement automatique de la page
        evenement.preventDefault();
        // On récupère les valeurs écrites dans les cases
        var nom = document.getElementById("nom").value.trim();
        var email = document.getElementById("email").value.trim();
        var telephone = document.getElementById("tel").value.trim();
        var pays = document.getElementById("pays").value;
        var message = document.getElementById("Message").value.trim();
        // On efface d'abord tous les anciens messages d'erreur
        document.getElementById("err-name").innerHTML = "";
        document.getElementById("err-email").innerHTML = "";
        document.getElementById("err-phone").innerHTML = "";
        document.getElementById("err-pays").innerHTML = "";
        document.getElementById("err-message").innerHTML = "";

         var formulaireValide = true;
         // Vérification du Nom
        if (nom === "") {
            document.getElementById("err-name").innerHTML = "Veuillez entrer votre nom complet.";
            formulaireValide = false;
        }
         //  Vérification de l'Email (doit contenir un @ et un point)
        if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            document.getElementById("err-email").innerHTML = "Veuillez entrer une adresse email valide.";
            formulaireValide = false;
        }
          //  Vérification du Téléphone (minimum 8 caractères)
        if (telephone === "" || telephone.length < 8) {
            document.getElementById("err-phone").innerHTML = "Le numéro doit contenir au moins 8 chiffres.";
            formulaireValide = false;
        }
        //  Vérification de la sélection du Pays
         if (pays === "") {
            document.getElementById("err-pays").innerHTML = "Veuillez choisir un pays de résidence.";
            formulaireValide = false;
        }
         //  Vérification du Message (minimum 10 caractères pour le sérieux)
         if (message === "" || message.length < 10) {
            document.getElementById("err-message").innerHTML = "Votre message doit faire au moins 10 caractères.";
            formulaireValide = false;
        }
        // Si tout est bien rempli, on affiche le message de succès vert
        if (formulaireValide === true) {
            var blocSucces = document.getElementById("success");
            blocSucces.style.display = "block";
            blocSucces.innerHTML = "Félicitations ! Votre inscription a été prise en compte.";
            // On vide les cases du formulaire après envoi
             monFormulaire.reset();
        }
    });
}
//  GESTION DU MENU HAMBURGER 
var boutonBurger = document.querySelector(".hamburger");
var lesLiensNav = document.querySelector(".Nav-links");

// On vérifie que le bouton existe bien sur la page
if (boutonBurger && lesLiensNav) {
    // Événement quand l'étudiant clique sur le symbole ☰
    boutonBurger.addEventListener("click", function() {
        // On bascule la classe 'open' sur les liens pour les afficher ou les cacher
       lesLiensNav.classList.toggle("active");

if (lesLiensNav.classList.contains("active")) {
            boutonBurger.innerHTML = "✖"; // Devient une croix pour fermer
        } else {
                   boutonBurger.innerHTML = "☰"; // Devient le menu de base
        }
    });
}

// ANIMATION DES CHIFFRES CLÉS 
var mesBoitesStats = document.querySelectorAll(".parti-stats .num");

// Fonction scolaire qui incrémente les numéros petit à petit
function animerLesCompteurs() {
    for (var i = 0; i < mesBoitesStats.length; i++) {
        var boite = mesBoitesStats[i];
// On récupère le nombre cible écrit dans l'attribut data-target du HTML 
        var cible = parseInt(boite.getAttribute("nombre"));
        
        // On lance l'animation uniquement si le compteur est encore à 0
        if (parseInt(boite.innerText) === 0) {
            declencherIncrémentation(boite, cible);
        }
    }
}
    // Fonction secondaire qui fait grimper le chiffre proprement
function declencherIncrémentation(element, valeurMax) {
    var compteurCourant = 0;
    // On calcule la vitesse selon la taille du chiffre (pour que 1200 ne mette pas 2 heures)
    var pas = Math.ceil(valeurMax / 50); 
    
    var chrono = setInterval(function() {
        compteurCourant = compteurCourant + pas;
        
        // Si on a atteint ou dépassé la cible, on bloque au maximum exact
        if (compteurCourant >= valeurMax) {
            clearInterval(chrono);
            element.innerText = (valeurMax === 1200) ? "+" + valeurMax : valeurMax;
        } else {
            element.innerText = compteurCourant;
        }
          }, 30); // S'exécute toutes les 30 millisecondes pour un effet fluide
}

// Lancement de l'animation des compteurs dès le chargement de la page
window.addEventListener("load", function() {
    animerLesCompteurs();
});
