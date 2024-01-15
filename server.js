
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const apiKey = "54a75ea3f328e90585fc462673852e22";

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/getWeather', async (req, res) => {
    try {
        const city = req.body.city;
        const url = `YOUR_API_URL_HERE`;

        const response = await axios.get(url);
        const data = response.data;
        console.log("API Response:", data); // Added for debugging
        res.json({
            temperature: data.main.temp,
            description: data.weather[0].description,
            city: data.name,
        });

    } catch (error) {
        res.status(500).json({ message: "Error fetching weather data" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
