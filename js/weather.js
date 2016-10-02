var name_arr;
var icon_arr;
var date_arr=[];
var weat;
//var place = document.getElementById('Location_bar').value;
var place;



window.onload = function(){
    document.getElementById("subby").onclick = function fun(){
       place = document.getElementById('Location_bar').value;
       document.getElementById("Page1").style.display = "block";
       document.getElementById("lv2").style.display = "block";

        //document.getElementById('iterateEffects').innerHTML='asdf';
        //date_arr.push("as");

        //document.getElementById('iterateEffects').innerHTML=date_arr[0];

        loadWeather(place,"");
        //setTimeout( function(){
   // document.getElementById('iterateEffects').innerHTML=weat.forecast[2].date;

  //}, 1000 );
        
        //loopForecast();
        //loopForecast();
        //date_arr.push(weat.forecast[3]);
        //document.getElementById('iterateEffects').innerHTML =
        //weat.forecast[4].high;
        //document.getElementById('date1').innerHTML = weat.forecast[5].high;
        }
 }

var count = 1;
var delay = 3000;


function loopForecast () {
    //setTimeout(function() {
        loadWeatherForecast(place, "")
        count++;
        if (count < 7) {
            loopForecast();
        }
            
    //}, delay);
}


/*if ( "geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(place,"");
        // loadWeather(position.coords.latitude+','+position.coords.longitude);
    });
} else{
    loadWeather('Mumbai',"");
}*/

$(document).ready(function(){
    setInterval(getWeather,10000);
});

function loadWeather(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'F',
        success: function(weather){
            date = "Today";
            weat = weather;
            //date_arr.push(weather.temp);
            
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.code+'.svg">';
            wind = '<p>'+weather.wind.speed+'</p><p>'+weather.units.speed+'</p>';
            humidity = weather.humidity+' %';
            //$(".date").text(date);
            //date_arr.push(date);
             
            //$(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            //$(".icon_test").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
            document.getElementById('temp1').innerHTML= temp;
            document.getElementById('date1').innerHTML = date;
            document.getElementById('icon1').innerHTML=wcode;



            document.getElementById('temp2').innerHTML=
            weather.forecast[1].high+
            '&deg;';
            document.getElementById('date2').innerHTML =
            weather.forecast[1].date;
            document.getElementById('icon2').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[1].code+'.svg">';


            document.getElementById('temp3').innerHTML= weather.forecast[2].high+
            '&deg;';
            document.getElementById('date3').innerHTML =
            weather.forecast[2].date;
            document.getElementById('icon3').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[2].code+'.svg">';


            document.getElementById('temp4').innerHTML= weather.forecast[3].high+
            '&deg;';
            document.getElementById('date4').innerHTML =
            weather.forecast[3].date;
            document.getElementById('icon4').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[3].code+'.svg">';


            document.getElementById('temp5').innerHTML= weather.forecast[4].high+
            '&deg;';
            document.getElementById('date5').innerHTML =
            weather.forecast[4].date;
            document.getElementById('icon5').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[4].code+'.svg">';


            document.getElementById('temp6').innerHTML= weather.forecast[5].high+
            '&deg;';
            document.getElementById('date6').innerHTML =
            weather.forecast[5].date;
            document.getElementById('icon6').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[5].code+'.svg">';

            document.getElementById('temp7').innerHTML= weather.forecast[6].high+
            '&deg;';
            document.getElementById('date7').innerHTML =
            weather.forecast[6].date;
            document.getElementById('icon7').innerHTML='<img class="weathericon" style="width:100%; height=50%;'+
             ' margin-top:-10%;" src="images/weathericons/'+weather.forecast[6].code+'.svg">';

            //document.getElementById('iterateEffects').innerHTML=weather.forecast[0].temp;
            for(var i = 0; i < 7;i++){
               if(i==0){
                  date_arr[0]=weather.code;
               }
               else{
                date_arr[i]=(weather.forecast[i].code);
               }
            }
            //document.getElementById('date7').innerHTML =
            //date_arr[0];


        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
        
    });
}

function loadWeatherForecast(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'F',
        success: function(weather){
           weat = weather;
                      date = weather.forecast[count].date;

            temp = weather.forecast[count].high + '&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/'+weather.forecast[count].code+'.svg">';
            //wind = '<p>'+weather.wind.speed+'</p><p>'+weather.units.speed+'</p>';
            //humidity = weather.humidity+' %';

            //$(".date").text(date);
            //$(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
            //document.getElementById('iterateEffects').innerHTML=weather.forecast[3].high;

        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
        
    });
}
