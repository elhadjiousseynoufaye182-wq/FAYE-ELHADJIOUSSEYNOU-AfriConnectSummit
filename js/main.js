window.addEventListener('scroll', function() {
    let maBarre = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        maBarre.classList.add('navbar-scrolled');
    } else {
        maBarre.classList.remove('navbar-scrolled');
    }
});

let boutonTheme = document.getElementById('theme-toggle');

let choixUtilisateur = localStorage.getItem('monTheme');

if (choixUtilisateur === 'oui') {
    document.body.classList.add('dark-mode');
}
boutonTheme.addEventListener('click', function() {
    
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('monTheme', 'non');
    } 
    
    else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('monTheme', 'oui');
    }
});
function lancerCompteARebours() {

    var dateEvenement = new Date("Oct 15, 2026 09:00:00").getTime();
    
    
    var x = setInterval(function() {
        var maintenant = new Date().getTime();
        var distance = dateEvenement - maintenant;
        
        
        var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondes = Math.floor((distance % (1000 * 60)) / 1000);
        var elJours = document.getElementById("jour");
        var elHeures = document.getElementById("heure");
        var elMinutes = document.getElementById("minute");
        var elSecondes = document.getElementById("seconde");
        
        
        if (elJours && elHeures && elMinutes && elSecondes) {
            elJours.innerHTML = jours < 10 ? "0" + jours : jours;
            elHeures.innerHTML = heures < 10 ? "0" + heures : heures;
            elMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            elSecondes.innerHTML = secondes < 10 ? "0" + secondes : secondes;
        }

         if (distance < 0) {
            clearInterval(x);
            var zoneCompteur = document.querySelector(".countdown");
            if (zoneCompteur) {
                zoneCompteur.innerHTML = "<p>L'événement a commencé !</p>";
            }
        }
    }, 1000);
}
lancerCompteARebours();
var elAnnee = document.getElementById("year");
if (elAnnee) {
    elAnnee.innerHTML = new Date().getFullYear();
}

var boutonRetour = document.getElementById("back-to-top");

if (boutonRetour) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            boutonRetour.style.display = "flex";
        } else {
            boutonRetour.style.display = "none";
        }
    });

    boutonRetour.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}