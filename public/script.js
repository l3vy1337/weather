document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const city = document.getElementById('cityInput').value;
    const response = await fetch('/getWeather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: city })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('weatherResult').innerHTML = `
            <h2>Weather in ${data.city}</h2>
            <p>Temperature: ${data.temperature} °C</p>
            <p>Condition: ${data.description}</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = '<p>Error fetching weather data.</p>';
    }
});

