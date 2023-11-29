const hamburger = document.getElementById("imageHamburger");
const fermer = document.getElementById("fermer")

hamburger.addEventListener('click', AfficherMenu);
fermer.addEventListener('click', FermerMenu)

function AfficherMenu(){
   document.getElementById("nav").style.display = "block";

}

function FermerMenu(){
   document.getElementById("nav").style.display = "none";
   document.getElementById("icone").style.display = 'none';
      document.getElementById("ville").style.display = 'none';
      document.getElementById("temperature").style.display = 'none';
}


const elemmeteo = document.getElementById('meteo');
elemmeteo.addEventListener('click', AfficherMeteo);


function AfficherMeteo(){
   var ValuM = document.getElementById('icone').style.display;

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

const maison = document.getElementById('bigmaison');
maison.addEventListener("click", Accueil)


function Accueil(){
      console.debug("Presentation ! ");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var reponse = xhttp.responseText;
              console.debug(reponse);
              var pagehtml = document.createElement( 'html' );
              pagehtml.innerHTML = reponse;
              var section = pagehtml.getElementsByTagName( 'section' );
              console.debug(section[0].innerHTML);
              document.getElementsByTagName("section")[0].innerHTML = section[0].innerHTML;
              document.getElementsByTagName("section")[0].id="presentation";
          }
      };
      xhttp.open("GET", "index.html", true);
      xhttp.send();
  
}



function AfficherLumiere(){
   let lumhttp = new XMLHttpRequest(); 
   lumhttp.open('GET', 'http://172.20.21.57/api/F276DD7951/lights/');
   lumhttp.onreadystatechange = function () {
     if (lumhttp.readyState === 4) {
   

      lumos = JSON.parse(lumhttp.responseText);
      
      
      var section = document.getElementById('section');
      var lumiere = "" ;
      for(num in lumos){
      
      let uniqueid=lumos[num].uniqueid;
      let etat=lumos[num].state.on;
      let type=lumos[num].type;
      lumiere=lumiere+'<div id="'+uniqueid+'" >';
      lumiere= lumiere+'<img id="lumiereimg'+num+'" src="./icones/lightbulb.png" alt="lumiere"><button id="on" onclick="Allumer('+ num +')">ON</button><button id="off" onclick="Eteindre('+num+')">OFF</button>';
      lumiere+="</div>";

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
            button = document.getElementById('on');
            button.addEventListener('click', LumosMaximos(Num));
            function LumosMaximos(num){
               document.getElementById('lumiereimg'+ num).src = "./icones/lightbulb-on.png";
               
            }
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
            button = document.getElementById('off');
            button.addEventListener('click', LumosMinimos(Num));
            function LumosMinimos(num){
               document.getElementById('lumiereimg'+ num).src = "./icones/lightbulb-off.png";
            }
         }
      }
      req.send(JSON.stringify({"on" : false}))
}





function AfficherCapteur(){
   let senshttp = new XMLHttpRequest(); 
   senshttp.open('GET', 'http://172.20.21.57/api/F276DD7951/sensors/');
   senshttp.onreadystatechange = function () {
     if (senshttp.readyState === 4) {
   
      lumos = JSON.parse(senshttp.responseText);
      
         AfficherCapteur2(lumos);

      
    
      }
   }
   senshttp.send();
}

function AfficherCapteur2(reponsecapteur) {

   section = document.getElementById("section")

   var capteur="" ;
   var capteurbouton='<button id="Boutonreset" onclick="AfficherCapteur()">Recharger</button>'

   for(num in reponsecapteur){


       let uniqueid=reponsecapteur[num].uniqueid;
       let name=reponsecapteur[num].name;

       etat = ""
       if (reponsecapteur[num].state.temperature) {
           etat = reponsecapteur[num].state.temperature
           etat = etat * 10**-2
           etat = etat.toFixed(2) + "°C"
           var img = "image/thermometre"
       } 
       else if (reponsecapteur[num].state.humidity){
           etat= reponsecapteur[num].state.humidity + " Rh"
           var img = "image/thermometre"
       }
       else if (reponsecapteur[num].state.pressure){
           etat= reponsecapteur[num].state.pressure + " Pa";
           var img = "icones/barometre"           
       }
       else if (reponsecapteur[num].state.lux){
           etat= reponsecapteur[num].state.lux + " lx"
           var img = "icones/lightbulb"

       }
       else if (reponsecapteur[num].state.status == 0 || reponsecapteur[num].state.status == 1){
           etat= "Status : " + reponsecapteur[num].state.status
       }
       else if (reponsecapteur[num].state.daylight == true || reponsecapteur[num].state.daylight == false){
           
         var img = "icones/daylight"

           if (reponsecapteur[num].state.daylight) {
               etat = "Jour"
           }
           else
           {
               etat = "Nuit"
           }
           
       }
       else if (reponsecapteur[num].state.open == true || reponsecapteur[num].state.open == false){

         var img = "icones/door-sensor"

           if (reponsecapteur[num].state.open) {
               etat = "Ouvert"
           }
           else
           {
               etat = "Fermer"
           }

       }
       else if (reponsecapteur[num].state.presence == true || reponsecapteur[num].state.presence == false){
           
         var img = "icones/motion"

           if (reponsecapteur[num].state.open) {
               etat = "Présence détéctée"
           }
           else
           {
               etat = "Pas de présence détéctée"
           }
           
       }
       else {
           etat = "Problème état capteur non détéctée"
       }

       let type=reponsecapteur[num].type;
       capteur=capteur+'<div id="'+uniqueid+'" >';
       
       capteur= capteur+'<img src="'+img+'.png" style="width: 22px" alt="sensor"> <span class="listcapteur">'+name+' / '+etat+' </span> ';
       capteur+="</div>";
      }

   section.innerHTML = capteurbouton + capteur
}

function AfficherPrise(){

}