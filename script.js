var luzVermelha = document.getElementById("light-red");
var luzAmarela = document.getElementById("light-yellow");
var luzVerde = document.getElementById("light-green")

let automaticInterval;
let automaticMode = false;

var btnRed = document.getElementById("buttonRed");
var btnYellow = document.getElementById("buttonYellow");
var btnGreen = document.getElementById("buttonGreen");
var btnAuto = document.getElementById("buttonAuto");

/*btnRed.addEventListener("click", function acenderLuz() {
    luzVermelha.classList.toggle("red");
    luzAmarela.classList.remove("yellow");
    luzVerde.classList.remove("green");
})

btnYellow.addEventListener("click", function acenderLuz() {
    luzVermelha.classList.remove("red");
    luzAmarela.classList.toggle("yellow");
    luzVerde.classList.remove("green");
})

btnGreen.addEventListener("click", function acenderLuz() {
    luzVermelha.classList.remove("red");
    luzAmarela.classList.remove("yellow");
    luzVerde.classList.toggle("green");
}) */

function acenderLuz(red, yellow, green) {
    luzVermelha.classList.toggle("red", red);
    luzAmarela.classList.toggle("yellow", yellow);
    luzVerde.classList.toggle("green", green);
}

function acenderLuzManual(red, yellow, green) {
    acenderLuz(red, yellow, green);
    automaticMode = false;
} 

function modoAutomatico() {
    if (automaticMode) {
        acenderLuz(true, false, false);
        setTimeout(function() {
            acenderLuz(false, true, false);
        }, 1000);
        setTimeout(function() {
            acenderLuz(false, false, true);
        }, 2000); 
    }
}

btnRed.addEventListener("click", function () {
    acenderLuzManual(true, false, false);
});

btnYellow.addEventListener("click", function () {
    acenderLuzManual(false, true, false);
});

btnGreen.addEventListener("click", function () {
    acenderLuzManual(false, false, true);
})

btnAuto.addEventListener("click", function() {
    automaticMode = !automaticMode;

    if (automaticMode) {
        automaticInterval = setInterval(modoAutomatico, 3000);
        modoAutomatico();
    } else {
        clearInterval(automaticInterval);
    }
})

/*
* classList => Manipula as classes
*/