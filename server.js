import cors from "cors";
import axios from "axios";
import express from "express";
import dotenv from "dotenv"
import path from "path"

const app = express()
dotenv.config()
const API_KEY = process.env.API_KEY
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(path.resolve(), "public")))

app.get("/api/weather", async (req,res) => {
const {city} = req.query

if (!city) {
    return res.status(404).json({error:`Please enter a valid city.`})
}
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const responses = await axios.get(url)
        const {main, weather} = responses.data
        res.json({
            city,
            temperature: main.temp,
            description: weather[0].description,
            humidity: main.humidity
        });
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(500).json({error: `Could not find data. Check the city and try again.`})
    }
})

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})