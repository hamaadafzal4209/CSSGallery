const form = document.querySelector("form");
const search = document.querySelector("input");
const weather = document.querySelector("#weather");

const apiKey = '3894d18d55mshf6ab8ce5cf62b7ap129821jsn5b51f38fd93b';
const city = search.value;

const getWeather = async (city) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}&lat=53.1&lon=-0.13&apikey=${apiKey}`;

    const response = await fetch(url)
    console.log(url);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather(city);
    search.value = "";
});
