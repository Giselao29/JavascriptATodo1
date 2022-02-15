let numeros,acu=0,prom=0,$template=document.getElementById("template").content;
const $parrafo=document.createElement("p"),$resultado=document.getElementById("resultado");

for(let i=0;i<4;i++){
        numeros=prompt("Ingrese números");
            $template.getElementById("parrafo").textContent=numeros;
            var clone = $template.cloneNode(true);
            document.body.appendChild(clone);
            acu=(Number(numeros)+acu);  
}   

$resultado.appendChild($parrafo);
let $texto=document.createTextNode(`La suma de las edades es ${acu} y el promedio ${acu/4}` );
$parrafo.appendChild($texto);

