// click event on button
$('#btnWeather').on('click',function(){
    getWeather()
})

// ajax function
function getWeather(){
    var cityGet = $('#city').val()
    if(cityGet.trim() == 0){
        alert("Kindly Please Enter Your City Name.")
        $('#city').val('')
    }else{
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q="+ cityGet +"&appid=edf961fb5c0b77b168027867fa44351f&units=metric",
            type: "GET",
            success: function(response){
                    $('#city_name').html("City : " +response.name )
                    $('#country_name').html("Country : " +response.sys.country )
                    $('#icon').html('<img src="https://openweathermap.org/img/wn/'+ response.weather[0].icon +'@2x.png">')
                    $('#main').html("Main : " + response.weather[0].main)
                    $('#des').html("Description : " + response.weather[0].description)
                    $('#temp').html("Temprature : " + response.main.temp + "&#8451;")
                    $('#lon').html("Longitude : " + response.coord.lon +"<span>&#176;</span> E")
                    $('#lat').html("Latitude : " + response.coord.lat +"<span>&#176;</span> N")
            },
            error: function(){
               alert(cityGet + " city is not found, Please Enter Correct City Name.")  
            }
        })
        $('#city').val('')
    }
}