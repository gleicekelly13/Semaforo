var luzVermelha = document.getElementById("light-red");
var luzAmarela = document.getElementById("light-yellow");
var luzVerde = document.getElementById("light-green")

var btnRed = document.getElementById("buttonRed");
var btnYellow = document.getElementById("buttonYellow");
var btnGreen = document.getElementById("buttonGreen");

btnRed.addEventListener("click", function acenderLuz() {
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
})


/*
* classList => Manipula as classes
*/