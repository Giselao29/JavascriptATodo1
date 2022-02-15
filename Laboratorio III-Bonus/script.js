formulario.addEventListener('submit',function(e){

let distancia=document.getElementById("distancia").value, resultadoTexto=document.getElementById("resultado"), parrafo=document.createElement("p"),resultado=0,seleccion=document.getElementById("seleccion").value;

if(seleccion=="km"){

    resultado=Number(distancia)/3;

}else{

    resultado=Number(distancia)/3000;

}
let texto=document.createTextNode(`la velocidad es: ${resultado}km`);
parrafo.appendChild(texto);
resultadoTexto.appendChild(parrafo);

e.preventDefault();

});