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
   lumhttp.open('GET', 'http://172.20.21.57/api/F276DD7951/lights/');
   lumhttp.onreadystatechange = function () {
     if (lumhttp.readyState === 4) {
   
       console.log(lumhttp.responseText);
         console.log("stest");

      lumos = JSON.parse(lumhttp.responseText);
      
      
      var section = document.getElementById('section');
      var lumiere = "" ;
      for(num in lumos){
      
      let uniqueid=lumos[num].uniqueid;
      let etat=lumos[num].state.on;
      let type=lumos[num].type;
      lumiere=lumiere+'<div id="'+uniqueid+'" >';
      lumiere= lumiere+'<img src="./icones/lightbulb.png" alt="lumiere"><button id="on" onclick="Allumer('+ num +')">ON</button><button id="off" onclick="Eteindre('+num+')">OFF</button>';
      lumiere+="</div>";

      console.log(lumiere);
      document.getElementById('section').innerHTML = lumiere;       

   }
      
      
      }
   }
   lumhttp.send();
   
}



function Allumer(Num){
      let req = new XMLHttpRequest;
      req.open('PUT', 'http://172.20.21.57/api/F276DD7951/lights/'+Num+'/state');
      req.onreadystatechange = function (){
         if(req.readyState ===4 ){
            console.log('Ready State 4');
         }
      }
      req.send(JSON.stringify({"on" : true}))
}

function Eteindre(Num){
   
      let req = new XMLHttpRequest;
      req.open('PUT', 'http://172.20.21.57/api/F276DD7951/lights/'+Num+'/state');
      req.onreadystatechange = function (){
         if(req.readyState ===4 ){
            console.log('Ready State 4');
         }
      }
      req.send(JSON.stringify({"on" : false}))
}



function AfficherCapteur(){

}



function AfficherPrise(){

}