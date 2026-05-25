const cityInput = document.getElementById("textarea")
const submit = document.getElementById("submit-btn")
const spinner = document.getElementById("spinner")
const resultContainer = document.getElementById('result-container')
const errorMessage = document.getElementById('error-message')

submit.addEventListener("click", function() {
    getWeatherData()
})

async function getWeatherData() {
    const currentLocation = cityInput.value.trim() 

    if (currentLocation === "") {
        errorMessage.classList.remove("hidden")
        errorMessage.textContent = "Input a valid location."
        return
    }

    const url = `http://localhost:5000/api/weather?city=${currentLocation}` 

    errorMessage.classList.add("hidden")
    resultContainer.classList.add("hidden")
    spinner.classList.remove("hidden")

    try {
        const result = await fetch(url)
        const data = await result.json()

        if (data.error) {
            errorMessage.classList.remove("hidden")
            errorMessage.textContent = data.error
        } else {
            showLocation(data, currentLocation)
        }
    } catch (error) {
        errorMessage.classList.remove("hidden")
        errorMessage.textContent = "An error occurred while fetching weather data."
    } finally {
        spinner.classList.add("hidden")
    }
}

function showLocation(data, currentLocation) {
    resultContainer.innerHTML = `
        <p><strong>Location:</strong> ${currentLocation}</p>
        <p><strong>Temperature:</strong> ${data.temperature}°C</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Humidity:</strong> ${data.humidity}%</p>
    `
    resultContainer.classList.remove('hidden')
}