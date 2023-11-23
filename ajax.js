var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.34&appid=5e3224bd40937b9f365f31fef4fa61c9');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {

    alert(xhr.responseText);
    var reponse = JSON.parse(xhr.responseText);
    alert(reponse);


    test = JSON.parse(xhr.responseText);
    
    var city = test.name;
    console.log(test.name);
    var temp = test.main.temp;
    console.log(test.main.temp);
    var icon = test.weather['0'].icon;

    function RecupererMeteo(a, b, c){
        document.getElementById("ville").innerHTML = a;
        document.getElementById('temperature').innerHTML = b;
        document.getElementById('icone').innerHTML = c;

    }

    RecupererMeteo(city, temp, icon);

   }
};
xhr.send();
