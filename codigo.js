function calcularPuntuacion() {
    var pregunta1 = parseInt(document.getElementById("pregunta1").value);
    var pregunta2 = parseInt(document.getElementById("pregunta2").value);
    var pregunta3 = parseInt(document.getElementById("pregunta3").value);
    var pregunta4 = parseInt(document.getElementById("pregunta4").value);
    var pregunta5 = parseInt(document.getElementById("pregunta5").value);
    var pregunta6 = parseInt(document.getElementById("pregunta6").value);
    var pregunta7 = parseInt(document.getElementById("pregunta7").value);
    var pregunta8 = parseInt(document.getElementById("pregunta8").value);
    var pregunta9 = parseInt(document.getElementById("pregunta9").value);
    var pregunta10 = parseInt(document.getElementById("pregunta10").value);

    var puntuacionTotal = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 + pregunta9 + pregunta10;

    document.getElementById("resultado").innerHTML= "<p>Tu puntuacion es "+ puntuacionTotal + "</p>";

    if(pregunta1 == 0 || pregunta2 == 0 || pregunta3 == 0 || pregunta4 == 0 || pregunta5 == 0 || pregunta6 == 0 || pregunta7 == 0 || pregunta8 == 0 || pregunta9 == 0 || pregunta10 == 0){
        alert("Por favor responde a todas las preguntas")
    } else{
        señalarfila(puntuacionTotal)
    }
}

function señalarfila(puntuacionTotal){
    document.getElementById("400p").style.backgroundColor = "lightgreen";
    document.getElementById("300p").style.backgroundColor = "lightgreen";
    document.getElementById("200p").style.backgroundColor = "lightgreen";
    document.getElementById("100p").style.backgroundColor = "lightgreen";

    if(puntuacionTotal >= 350 && puntuacionTotal <= 400){
        document.getElementById("400p").style.backgroundColor = " #8ac43f";
    }else if(puntuacionTotal >= 250 && puntuacionTotal <= 350){
        document.getElementById("300p").style.backgroundColor = " #8ac43f";
    }else if(puntuacionTotal >= 150 && puntuacionTotal <= 250){
        document.getElementById("200p").style.backgroundColor = " #8ac43f";
    }else if(puntuacionTotal >= 50 && puntuacionTotal <= 150){
        document.getElementById("100p").style.backgroundColor = " #8ac43f";
    }

    var spans = document.getElementsByClassName("span");
    for (i = 0; i < spans.length; i++){
        spans[i].style.display = "block";
    }
}
function iniciarEncuesta() {
    document.getElementById("preguntas").style.display = "block";
    document.getElementById("iniciarCuestionario").style.display = "none";
  }