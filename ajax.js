var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.34&appid=5e3224bd40937b9f365f31fef4fa61c9');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {

    alert(xhr.responseText);
    var reponse = JSON.parse(xhr.responseText);
    alert(reponse);


    test = JSON.parse(xhr.responseText);
    
    
    RecupererMeteo(test)

   }
};
xhr.send();




function RecupererMeteo(reponse){
    document.getElementById("ville").innerHTML = reponse.name;
    document.getElementById('temperature').innerHTML = reponse.main.temp;
    document.getElementById('icone').innerHTML = reponse.weather['0'].icon;


    var longitude = reponseMeteoObject.coord.lon;
    var temperature = reponseMeteoObject.main.temp;
    var vitessevent = reponseMeteoObject.wind.speed;
    var visibilité = reponseMeteoObject.visibility;
    var humidité = reponseMeteoObject.main.humidity;
    var ville = reponseMeteoObject.name;


}