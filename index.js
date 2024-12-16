import express from "express";
import axios from "axios";

const app = express();
const port  = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

const apiKey = "968cfc994323a3db3e61eade60abb2ad";

app.post("/weather/city", async (req, res) => {
    try {
        const city = req.body.city;
    
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    
        const weather = response.data.weather[0].main;
        const temperature = Math.floor(response.data.main.temp - 273.15);
        const humidity = response.data.main.humidity;
        const wind = Math.floor(response.data.wind.speed * 3.6); 

        res.render("index.ejs", { city, weather, temperature, humidity, wind });

    } catch(error) {
        res.render("index.ejs", { error: "City not found." });
    }
    
});

app.post("/weather/location", async (req, res) => {
    try {
        const geoResponse = await axios.get("http://ip-api.com/json");
        const city = geoResponse.data.city;
    
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    
        const weather = response.data.weather[0].main;
        const temperature = Math.floor(response.data.main.temp - 273.15);
        const humidity = response.data.main.humidity;
        const wind = Math.floor(response.data.wind.speed * 3.6); 

        res.render("index.ejs", { city, weather, temperature, humidity, wind });

    } catch(error) {
        res.render("index.ejs", { error: "City not found." });
    }
});



app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
