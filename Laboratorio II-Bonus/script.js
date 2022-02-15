
let numeros,acu=0,prom=0,$template=document.getElementById("template").content;
const $parrafo=document.createElement("p"),$resultado=document.getElementById("resultado");

for(let i=0;i<10;i++){
        numeros=prompt("Ingrese números");
            $template.getElementById("parrafo").textContent=numeros;
            var clone = $template.cloneNode(true);
            document.body.appendChild(clone);
            acu=(Number(numeros)+acu);  
}   
    prom=acu/10;

$resultado.appendChild($parrafo);
let $texto=document.createTextNode('El promedio es:'+prom);
$parrafo.appendChild($texto);


alert("El promedio es:"+prom);