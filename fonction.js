var hamburger = document.getElementById("imageHamburger");

hamburger.addEventListener('click', AfficherMenu);

function AfficherMenu(){
   document.getElementById("nav")[0].style.display = "flex";
}


