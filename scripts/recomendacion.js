
var climaseco = {
    nombre: "Desierto",
    temperatura: "Arriba de 38 grados",
    lluvia: "Poca lluvia",
    humedad: "Nula",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Echinopsis_flower.jpg",
    obtenerClima: function(){
        return "Según tu clima tu tienes " + this.lluvia + " y tu humedad es " + this.humedad  + " tus semillas ideales son: Cactus Echinopsis";
    }
}

var climatropical = {
    nombre: "selva",
    temperatura: "Arriba de 28 y hasta 34 grados ",
    lluvia: "Mucha lluvia",
    humedad: "excesiva",
    url: "http://fichas.infojardin.com/foto-palmeras/phoenix-roebelenii.jpg",
    obtenerClima: function(){
        return "Según tu clima tu tienes " + this.lluvia + " y tu humedad es " + this.humedad + " tus semillas ideales son: Hoya Cinnamomifolia"; 
    }
}

var climatemplado = {
    nombre: "Ciudad",
    temperatura: "Entre 15 y 23 grados ",
    lluvia: "Lluvia eventual",
    humedad: "Moderada",
    obtenerClima: function(){
        return "Según tu clima tu tienes " + this.lluvia + " y tu humedad es " + this.humedad + " tus semillas ideales son: Palmera Enana";
    }
}

function seleccionarClima(clima){
    switch (clima) {
        case "desierto":
        var mensaje = "Según tu clima tu tienes " + "poca lluvia" + " y tu humedad es " + "nula,"  + " tus semillas ideales son: Cactus Echinopsis";
        var div = document.getElementById ("resultado");
        div.innerHTML=mensaje;
            break;
            case "tropical":
                var mensaje = "Según tu clima tu tienes " + "mucha lluvia" + " y tu humedad es " + "excesiva,"  + " tus semillas ideales son: Hoya Cinnamomifolia";
                var div = document.getElementById ("resultado");
                div.innerHTML=mensaje;
            break;
            case "ciudad":
                var mensaje = "Según tu clima tu tienes " + "lluvia eventual" + " y tu humedad es " + "moderada,"  + " tus semillas ideales son: Palmera Enana";
                var div = document.getElementById ("resultado");
                div.innerHTML=mensaje;
            
    }
}



var climaTemplado = document.getElementById ("clima-templado");
var climaSeco = document.getElementById ("clima-seco");
var climaTropical = document.getElementById ("clima-tropical");







