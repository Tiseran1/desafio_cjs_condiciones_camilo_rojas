var imputKenshin = document.querySelector("#cantidadKenshin");
var imputSanosuke = document.querySelector("#cantidadSanosuke");
var imputShishio = document.querySelector("#cantidadShishio");

var spanCantidadTotal = document.querySelector ("#cantidadTotal");

function calcularTotalStickers() {
    var cantidadKenshin = Number (imputKenshin.value);
    var cantidadSanosuke = Number (imputSanosuke.value);
    var cantidadShishio = Number (imputShishio.value);

    var cantidadTotal = cantidadKenshin + cantidadSanosuke + cantidadShishio;

    if (cantidadTotal <=10){
        spanCantidadTotal.innerHTML = cantidadTotal;
    } else {spanCantidadTotal.innerHTML = "Demasiados"};

}