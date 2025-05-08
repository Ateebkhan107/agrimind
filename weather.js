
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "your_api_key";
  const weatherDiv = document.getElementById("weather");

  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        weatherDiv.innerText = `🌤️ ${desc} – ${temp}°C`;
      })
      .catch(err => {
        weatherDiv.innerText = "Unable to fetch weather.";
      });
  });
});
