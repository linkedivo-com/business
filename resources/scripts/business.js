

async function fetchBusinessInformation() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=45a181ae25dc409faac185842230811&q=London&aqi=no');
        if (!response.ok) {
            console.log('we have error')
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        // You can handle errors or return a default value here if needed
        return error;
    }
}

fetchBusinessInformation();