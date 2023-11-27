var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.34&appid=5e3224bd40937b9f365f31fef4fa61c9&units=metric');
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

    const icon = "https://openweathermap.org/img/wn/" + reponse.weather['0'].icon + ".png"

    document.getElementById("ville").innerHTML = reponse.name;
    document.getElementById('temperature').innerHTML = reponse.main.temp;
    document.getElementById('icone').src = icon;


    var longitude = reponse.coord.lon;
    var temperature = reponse.main.temp;
    var vitessevent = reponse.wind.speed;
    var visibilité = reponse.visibility;
    var humidité = reponse.main.humidity;
    var ville = reponse.name;


}