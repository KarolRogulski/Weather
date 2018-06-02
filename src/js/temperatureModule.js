// Returning array of temperatures, last one is average
export function temperatures (city){
	let temp = [];
	const kel = 273.15;
	temp.push(Math.round(city.list[0].main.temp - kel));
	temp.push(Math.round(city.list[8].main.temp - kel));
	temp.push(Math.round(city.list[16].main.temp - kel));
	temp.push(Math.round(city.list[24].main.temp - kel));
	temp.push(Math.round(city.list[32].main.temp - kel));
	temp.push((temp[0] + temp[1] + temp[2] + temp[3] + temp[4]) / 5);
	return temp;
}