window.addEventListener('load', () => {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaruraDescripcion = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')
    let vientoVelocidad = document.getElementById('viento-velocidad')
    let nombreCiudad = 'Medellin'

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position)
            lon = position.coords.longitude
            lat = position.coords.latitude
            //Ubicacion actual
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=de37e99a5e8aa877875be842c62042fb`

            //Ubicacion por nombre de ciudad
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&lang=es&units=metric&appid=de37e99a5e8aa877875be842c62042fb`

            //Se traen los datos de la API a JavaScript en formato Json

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                    // let descrip = (data.weather[0].descripcion)

                    let descrip = (data.weather[0].description)
                    temperaruraDescripcion.textContent = descrip.replace(/\b\w/g, l => l.toUpperCase()) //Pone en mayuscula la primera letra
                    // temperaruraDescripcion.textContent = descrip.toUpperCase() //Pone en todo en mayusculas
                    let ubica = (data.name)
                    ubicacion.textContent = ubica

                    let veloviento = (data.wind.speed)
                    vientoVelocidad.textContent = `${veloviento} m/s`

                    //iconos estaticos desde la pagina de Open Weather Map
                    /* console.log(data.weather[0].icon)
                     let iconCode = (data.weather[0].icon)
                    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
                    console.log(urlIcon)*/


                    //iconos animados 
                    //console.log(data.weather[0].main)

                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'img/thunder.svg'
                            console.log('Tormenta')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'img/rainy-5.svg'
                            console.log('Llovizna')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Rain':
                            iconoAnimado.src = 'img/rainy-6.svg'
                            console.log('Luvia')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'img/snowy-6.svg'
                            console.log('Nieve')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'img/weather.svg'
                            console.log('Atmosfera')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'img/day.svg'
                            console.log('Despejado')
                            console.log('Desarrollado por Doncan')
                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'img/cloudy.svg'
                            console.log('Nublado')
                            console.log('Desarrollado por Doncan')
                            break;
                        default:
                            iconoAnimado.src = 'img/cloudy-day-1.svg'
                            console.log('Por defecto');
                            console.log('Desarrollado por Doncan')
                    }

                })

                .catch(error => {
                    console.log(error)
                })

        })
    }

})
