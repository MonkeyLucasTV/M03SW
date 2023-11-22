const hamburger = document.getElementById("imageHamburger");
const fermer = document.getElementById("fermer")

hamburger.addEventListener('click', AfficherMenu);
fermer.addEventListener('click', FermerMenu)

function AfficherMenu(){
   console.log("Afficher Menu");
   document.getElementById("nav").style.display = "flex";
}

function FermerMenu(){
   console.log('MenuFermer');
   document.getElementById("nav").style.display = "none";
}
