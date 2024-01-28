var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'CLé API OPENWEATHER');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {

    var reponse = JSON.parse(xhr.responseText);



    test = JSON.parse(xhr.responseText);
    
    
    RecupererMeteo(test)

   }
};
xhr.send();




function RecupererMeteo(reponse){

    const icon = "https://openweathermap.org/img/wn/" + reponse.weather['0'].icon + ".png"

    document.getElementById("ville").innerHTML = reponse.name;
    document.getElementById('temperature').innerHTML = reponse.main.temp + "°C";
    document.getElementById('icone').src = icon;


    var longitude = reponse.coord.lon;
    var temperature = reponse.main.temp;
    var vitessevent = reponse.wind.speed;
    var visibilité = reponse.visibility;
    var humidité = reponse.main.humidity;
    var ville = reponse.name;


}
