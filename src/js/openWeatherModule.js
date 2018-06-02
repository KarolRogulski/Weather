export var localstorage =  window.localStorage;
export var cities;
var id = 0;

export function getCities() { //change everywhere is cities
		console.log("start().start")
		cities = localstorage.getItem("cities");
		if (cities) {
			const citiesParse = JSON.parse(cities);
			return citiesParse;
		}
		return new Map();
}
export function addCity() {
	console.log("addCity().start");
	let city = document.getElementById("input").value;
	
	fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=5c02f8724103bec9758473d643575c12")
	.then(res => {
	    if (res.ok) {
	        return res.json()
	      } else {
	        return Promise.reject('something went wrong!')
	      }})
	.then(data => {
		saveCity(data);
	})
	.catch(error => document.getElementById("error").innerHTML = "Can't find " + '"' + city + '"');
}

function saveCity(data) {
	const cities = getCities();
	cities.set(id, data);
	id++;
	localstorage.setItem('cities', JSON.stringify([...cities]));
	document.getElementById("error").innerHTML = "";
	makeView(cities);
}

export function removeCity(key){
	console.log("removeCity().start");
	
	cities.delete(key);
	localstorage.setItem("cities", JSON.stringify(cities));
	makeView(getCities());
}
