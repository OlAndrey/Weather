export const fetchAPI = {
    fetchListCity(value) {
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=4&appid=9f34aadc54ee8673083896046d343a8a`)
            .then(response => response.json())
    },
    fetchWeatherDate(lat, lon){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f34aadc54ee8673083896046d343a8a&units=metric`)
            .then(response => response.json())
    }
}