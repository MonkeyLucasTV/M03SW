const hamburger = document.getElementById("imageHamburger");
const fermer = document.getElementById("fermer")

hamburger.addEventListener('click', AfficherMenu);
fermer.addEventListener('click', FermerMenu)

function AfficherMenu(){
   console.log("Afficher Menu");
   document.getElementById("nav").style.display = "block";
}

function FermerMenu(){
   console.log('MenuFermer');
   document.getElementById("nav").style.display = "none";
}


const elemmeteo = document.getElementById('meteo');
elemmeteo.addEventListener('click', AfficherMeteo);


function AfficherMeteo(){
   console.log("Salut la météo")
   var ValuM = document.getElementById('icone').style.display;
   console.log(ValuM);

   if (ValuM == 'block'){      
      document.getElementById("icone").style.display = 'none';
      document.getElementById("ville").style.display = 'none';
      document.getElementById("temperature").style.display = 'none';
   }
   else{
      document.getElementById("icone").style.display = 'block';
      document.getElementById("ville").style.display = 'block';
      document.getElementById("temperature").style.display = 'block';
   }
}