formulario.addEventListener('submit',function(e){


const mes=document.getElementById("mes").value, cantidadDeMeses=document.createElement("td"),cantidadDeConsumo=document.createElement("td"),fila=document.createElement("tr"), filas=document.getElementById("filas");

let consumo=0;

consumo=Number(mes)*15;

const textoCantidadMeses=document.createTextNode(mes), textoCantidadConsumo=document.createTextNode(consumo);
cantidadDeConsumo.appendChild(textoCantidadConsumo);
cantidadDeMeses.appendChild(textoCantidadMeses);
fila.appendChild(cantidadDeMeses);
fila.appendChild(cantidadDeConsumo);

filas.appendChild(fila);

e.preventDefault();

});


