const key = 'e5565cd684506a23d6fda7e6e6c4fc08'


function insertDados(dados){
    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
   
}

async function searchCity(cidade){

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())

    insertDados(dados)
    
}





function buttonclick(){
    const cidade = document.querySelector(".input-city").value

    searchCity(cidade)
    
}

