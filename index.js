const apiKey = "bc012bd2022732de67c8d554fb7985cf";
baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = new URLSearchParams(window.location.search).get('city')

function callWeather(unit) {
    fetch(`${baseURL}${city}&appid=${apiKey}&units=${unit}`)
	.then((response) => response.json())
	.then((data) => {
        //Setting City Headline 
		const headline = document.getElementsByTagName("h2");
		headline[0].innerText = ` ${data.main.temp.toFixed(0)}°`;

        const cityName = document.getElementsByTagName('h3')
        cityName[0].innerText = `${data.name}`
        console.log(cityName)

        //List Info Array
        weatherArray = [
			`${data.main.feels_like.toFixed(0)}° Feels like`,
			`${data.main.temp_max.toFixed(0)}° High Temp`,
			`${data.main.temp_min.toFixed(0)}° Low Temp`,
			`${data.wind.speed.toFixed(0)} Wind Speed`,
			`${data.clouds.all}% Cloud Coverage`,
		];

        //Construct List
		const list = document.getElementsByTagName("ul");
        list[0].innerHTML=""
        weatherArray.forEach((data) => {
            const listItem = document.createElement("li");
            listItem.textContent = data
			list[0].appendChild(listItem);
        })
		
	})
}

callWeather("imperial")

    const fahrenButton = document.getElementById("fahrenheit");
    const celsButton = document.getElementById("celsius");

    fahrenButton.addEventListener('click', function (e) {
        callWeather("imperial")
    })
    celsButton.addEventListener('click', function(e) {
        callWeather('metric')
    })