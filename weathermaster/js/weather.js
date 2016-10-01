var place = prompt ("Please enter your location");

loadWeather(place, "");
/*
if ( "geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(place,"");
        // loadWeather(position.coords.latitude+','+position.coords.longitude);
    });
} else{
    loadWeather('Mumbai',"");
}
*/
$(document).ready(function(){
    setInterval(getWeather,10000);
});

function loadWeather(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'F',
        success: function(weather){
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="weathermaster/images/weathericons/'+weather.code+'.svg">';
            if (weather.code == 36 || weather.code == 32){
                var request = new XMLHttpRequest();
                request.open( "GET" , "gpiotestone.php", true);
                request.send(null);
            }
            else{
                var request = new XMLHttpRequest();
                request.open( "GET" , "gpiotesttwo.php", true);
                 request.send(null); 
            }
            wind = '<p>'+weather.wind.speed+'</p><p>'+weather.units.speed+'</p>';
            humidity = weather.humidity+' %';
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
        
    });
}
