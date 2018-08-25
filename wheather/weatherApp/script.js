// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("myBtn").click();
//     }
// });
function getWeather(){
	document.querySelector(".weather-info").style.display = "block";
	const cityName = document.querySelector("input").value;

	$.ajax({
	url:
	`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fb7296206e736a3c4c5c1e8718503389&units=metric`,
	success: function(data){
		console.log(data);
			document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp>span").innerHTML = data.main.temp;
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = data.main.temp_min;
            document.querySelector(".max").innerHTML = data.main.temp_max;
	},
	error: function(err){
		console.log(err);
	}
});
}