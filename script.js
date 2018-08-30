let unitType = "metric";

function getWeather(){
	document.querySelector(".weather-info").style.display = "block";
	const cityName = document.querySelector("input").value;

	$.ajax({
		url:
		`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95d9d3a5000b4fbba32450cff464b5d7&units=${unitType}`,
		success: function(data){
			console.log(data);
			document.querySelector(".city-name").innerHTML = data.name;
			document.querySelector(".temp>span").innerHTML = Math.round(data.main.temp);
			document.querySelector(".description").innerHTML = data.weather[0].main;
			document.querySelector(".min").innerHTML = data.main.temp_min;
			document.querySelector(".max").innerHTML = data.main.temp_max;
			document.querySelector("#icon").innerHTML = "<img  class = 'bg-img' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
			let time = data.dt;
			let sunrise = data.sys.sunrise;
			let sunset = data.sys.sunset;
			if(time>sunrise){
				document.querySelector("body").style.backgroundImage = "url(after_noon.png)";
			}
			if(time>sunset){
				document.querySelector("body").style.backgroundImage = "url(night.png)";
			}

			  // $.ajax({
     //            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=95d9d3a5000b4fbba32450cff464b5d7&units=${unitType}`,
     //            console.log(data);
     //            let d1 = new Date(data.list[0].dt*1000);
     //            let d2 = new Date(data.list[8].dt*1000);
     //            let d3 = new Date(data.list[16].dt*1000);
     //            let d4 = new Date(data.list[24].dt*1000);
     //            let d5 = new Date(data.list[32].dt*1000);

     //             	document.querySelector(".day-mon").innerHTML = days[d1.getDay()];
     //                document.querySelector(".day-tues").innerHTML = days[d2.getDay()];
     //                document.querySelector(".day-wed").innerHTML = days[d3.getDay()];
     //                document.querySelector(".day-thus").innerHTML = days[d4.getDay()];
     //                document.querySelector(".day-fri").innerHTML = days[d5.getDay()];
     //                document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[0].main.temp) + degree + "/" + Math.round(data.list[2].main.temp) + degree ;
     //                document.querySelector(".pre-temp-tues").innerHTML = Math.round(data.list[5].main.temp) + degree + "/" + Math.round(data.list[6].main.temp) + degree ;
     //                document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[13].main.temp) + degree + "/" + Math.round(data.list[14].main.temp) + degree ;
     //                document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[21].main.temp) + degree + "/" + Math.round(data.list[22].main.temp) + degree ;
     //                document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[29].main.temp) + degree + "/" + Math.round(data.list[32].main.temp) + degree ;

     //                document.querySelector(".pre-wind-mon").innerHTML = data.list[0].wind.speed;
     //                document.querySelector(".pre-wind-tue").innerHTML = data.list[8].wind.speed;
     //                document.querySelector(".pre-wind-wed").innerHTML = data.list[16].wind.speed;
     //                document.querySelector(".pre-wind-thus").innerHTML = data.list[24].wind.speed;
     //                document.querySelector(".pre-wind-fri").innerHTML = data.list[32].wind.speed;

     //                document.querySelector(".pre-cloud-mon").innerHTML = data.list[0].weather[0].description;
     //                document.querySelector(".pre-cloud-tue").innerHTML = data.list[8].weather[0].description;
     //                document.querySelector(".pre-cloud-wed").innerHTML = data.list[16].weather[0].description;
     //                document.querySelector(".pre-cloud-thus").innerHTML = data.list[24].weather[0].description;
     //                document.querySelector(".pre-cloud-fri").innerHTML = data.list[32].weather[0].description;

 },
 error: function(error){
 	alert(error.responseJSON.message);
 }
});

}

function toggle(e) {
	const isChecked = document.querySelector("#abc").checked;
	if(isChecked === false){ 
		unitType = "metric";
	} else { 
		unitType = "Imperial";
	}
	getWeather();	
}


let bgImgs = ["after_noon.png", "night.png"];
function themeChanger(){
	setInterval(function(){
		let bgRound = parseInt(Math.random()*bgImgs.length);
		document.querySelector(".body1").style["background-image"] = `url(${bgImgs[bgRound]})`;
	},3000);
}
themeChanger();


