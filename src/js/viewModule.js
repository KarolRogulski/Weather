import {localstorage, addCity, removeCity, getCities} from './openWeatherModule.js'
import {temperatures} from './temperatureModule.js';

window.onload = function () {
	const cities = getCities();
	document.getElementById("form").addEventListener("submit", (event) => {
		addCity();
		event.preventDefault();
	})
	console.log(cities)
	makeView(cities);
}

function makeView(cities) {
	console.log("makeView().start")
	let index = document.getElementById("index");
	let date = new Date();

	index.innerHTML = '<div class="element">City Name</div>'
			+ '<div class="element">Today</div>'
	
	for (let i = 1; i < 5; i++) {
		index.innerHTML = index.innerHTML + '<div class="element">'
				+ dayOfTheWeek(date.getDay() + i) + '</div>';
	}
	index.innerHTML = index.innerHTML + '<div class="element">Average</div>'
	index.innerHTML = index.innerHTML + '<div class="remove"></div>'
	
	if (typeof (cities) != 'undefined' || cities != null){
		let cityList = document.getElementById("list-of-cities");
		cityList.innerHTML = "";
		for(let [key, city] of cities){
			console.log(city);
				let temp = temperatures(city);
				
				cityList.innerHTML = cityList.innerHTML +
				'<div class="city">' +
				'<div class="element">'+ city.city.name + '</div>' +
				'<div class="element">' + temp[0] + '</div>'+
				'<div class="element">' + temp[1] + '</div>'+
				'<div class="element">' + temp[2]+ '</div>'+
				'<div class="element">' + temp[3]+ '</div>'+
				'<div class="element">' + temp[4]+ '</div>'+
				'<div class="element">' + temp[5]+ '</div>'+
				'<div class="remove" onclick="removeCity(' + key + ')">Remove</div>'+
				'</div>';
		};
		console.log(localstorage);
		console.log(cities);
	}
}

function dayOfTheWeek(number) {
	let dayInt = number % 6;
	let dayStr;
	switch (dayInt) {
	case 0:
		dayStr = "Sunday";
		break;
	case 1:
		dayStr = "Monday";
		break;
	case 2:
		dayStr = "Tuesday";
		break;
	case 3:
		dayStr = "Wednesday";
		break;
	case 4:
		dayStr = "Thursday";
		break;
	case 5:
		dayStr = "Friday";
		break;
	case 6:
		dayStr = "Saturday";
	}
	return dayStr;
}