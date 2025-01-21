document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's temperature is : ${data.current.temp_c}`;
  }

  const promise = fetch(
    `https://api.weatherapi.com/v1/current.json?key=d07a894153e24c34b6c43352252101&q=${place}&aqi=yes`
  );
  promise.then((response) => response.json()).then((data) => updateTemp(data));
});
