let urlBase = 'http://api.openweathermap.org/data/2.5/weather'
let apiKey = '166cbe4c2a8ac0a2dc56ca7f576749e7'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value
    if (city) {
        fetchDatosClima(city)
    }
})

// Obtener el campo de entrada de texto por su ID
let campoTexto = document.getElementById('ciudadEntrada');

campoTexto.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        // Simula hacer clic en el botón
        botonBusqueda.click();
    }
});


function fetchDatosClima(city) {
    fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima (data){
    console.log(data) //este console.log hay que quitarlo para el trabajo final
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo) //esto es para rellenar el div porque estaba vacio
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconInfo)
    divDatosClima.appendChild(descripcionInfo)

}




