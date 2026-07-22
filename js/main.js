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