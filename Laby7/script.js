const API_KEY = '4aeea7877dad02ad9ee9b6c3f49cf806';

let cities = JSON.parse(localStorage.getItem('cities')) || [];

const renderCities = () => {
  const container = document.querySelector('#cities');
  container.innerHTML = '';
  cities.forEach(city => {
    const card = document.createElement('div');
    card.classList.add('city');

    const name = document.createElement('h2');
    name.textContent = city.name;
    card.appendChild(name);

    const img = document.createElement('img');
    img.src = `http://openweathermap.org/img/w/${city.icon}.png`;
    img.alt = city.description;
    card.appendChild(img);

    const temp = document.createElement('p');
    temp.textContent = `Temperatura: ${city.temp}°C`;
    card.appendChild(temp);

    const humidity = document.createElement('p');
    humidity.textContent = `Wilgotność: ${city.humidity}%`;
    card.appendChild(humidity);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Usuń';
    removeButton.addEventListener('click', () => {
      cities = cities.filter(c => c.name !== city.name);
      localStorage.setItem('cities', JSON.stringify(cities));
      renderCities();
    });
    card.appendChild(removeButton);

    container.appendChild(card);
  });
};

const addCity = async () => {
  const input = document.querySelector('#city-input');
  const cityName = input.value;
  input.value = '';

  if (!cityName) {
    alert('Wpisz nazwę miasta');
    return;
  }

  if (cities.length >= 10) {
    alert('Nie możesz dodać więcej niż 10 miast');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

  try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const { name, main, weather } = data;
const { temp, humidity } = main;
const { icon, description } = weather[0];

cities.push({ name, temp, humidity, icon, description });
localStorage.setItem('cities', JSON.stringify(cities));
renderCities();
} catch (error) {
    console.error(error);
    alert('Nie udało się pobrać danych o pogodzie dla tego miasta');
    }
    };
    
    document.addEventListener('DOMContentLoaded', () => {
    renderCities();
    const addButton = document.querySelector('#add-city');
    addButton.addEventListener('click', addCity);
    });