
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
            return ""
            break;
    
        default:
            break;
    }
}



var climaTemplado = document.getElementById ("clima-templado");
var climaSeco = document.getElementById ("clima-seco");
var climaTropical = document.getElementById ("clima-tropical");

var climaSeco=document.getElementById("climaseco-url").click();
    climaSeco.src=climaseco.url;

var http://fichas.infojardin.com/foto-palmeras/phoenix-roebelenii.jpg





