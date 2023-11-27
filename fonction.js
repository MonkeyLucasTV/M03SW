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



// Element barre nav cliquable

const lumiere = document.getElementById("lumiereNAV");
lumiere.addEventListener('click', AfficherLumiere);


const capteur = document.getElementById("capteurNAV");
capteur.addEventListener('click', AfficherCapteur);

const prise = document.getElementById('priseNAV');
prise.addEventListener('click', AfficherPrise);




function AfficherLumiere(){
   var lumhttp = new XMLHttpRequest(); 
   lumhttp.open('GET', 'http://172.20.21.100/api/F276DD7951/lights/');
   lumhttp.onreadystatechange = function () {
     if (lumhttp.readyState === 4) {
   
       console.log(lumhttp.responseText);
         console.log("stest");
      }
   };
   lumhttp.send();
   
}



function AfficherCapteur(){

}



function AfficherPrise(){

}