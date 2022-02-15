
/*TEST A*/

const testA=document.getElementById("testA"), palabraUnoA=document.createElement("td"),palabraDosA=document.createElement("td"), fraseFinalA=document.createElement("td");
var a="hola",b="chau";

const fraseA=document.createTextNode(a+" Mundo"), palabraUnoTextoA=document.createTextNode(a), palabraDosTextoA=document.createTextNode(b);

palabraUnoA.appendChild(palabraUnoTextoA);
palabraDosA.appendChild(palabraDosTextoA);
fraseFinalA.appendChild(fraseA);
testA.appendChild(palabraUnoA);
testA.appendChild(palabraDosA);
testA.appendChild(fraseFinalA);


/*TEST B*/

const testB=document.getElementById("testB"), palabraUnoB=document.createElement("td"),palabraDosB=document.createElement("td"), fraseFinalB=document.createElement("td");
var a="hola",b="chau";
a=b;
b=a;

const fraseB=document.createTextNode("Frase nueva"), palabraUnoTextoB=document.createTextNode(a), palabraDosTextoB=document.createTextNode(b);

palabraUnoB.appendChild(palabraUnoTextoB);
palabraDosB.appendChild(palabraDosTextoB);
fraseFinalB.appendChild(fraseB);
testB.appendChild(palabraUnoB);
testB.appendChild(palabraDosB);
testB.appendChild(fraseFinalB);

/*TEST C*/

const testC=document.getElementById("testC"), palabraUnoC=document.createElement("td"),palabraDosC=document.createElement("td"), fraseFinalC=document.createElement("td");

a=a+" "+b;
b=b+" "+b;

const fraseC=document.createTextNode(`${b} y ${b}`), palabraUnoTextoC=document.createTextNode(a), palabraDosTextoC=document.createTextNode(b);

palabraUnoC.appendChild(palabraUnoTextoC);
palabraDosC.appendChild(palabraDosTextoC);
fraseFinalC.appendChild(fraseC);
testC.appendChild(palabraUnoC);
testC.appendChild(palabraDosC);
testC.appendChild(fraseFinalC);

/*TEST D*/

const testD=document.getElementById("testD"), palabraUnoD=document.createElement("td"),palabraDosD=document.createElement("td"), fraseFinalD=document.createElement("td");

a="1+1";
b="2/0";

const fraseD=document.createTextNode(`${a} =2`), palabraUnoTextoD=document.createTextNode(a), palabraDosTextoD=document.createTextNode(b);

palabraUnoD.appendChild(palabraUnoTextoD);
palabraDosD.appendChild(palabraDosTextoD);
fraseFinalD.appendChild(fraseD);
testD.appendChild(palabraUnoD);
testD.appendChild(palabraDosD);
testD.appendChild(fraseFinalD);
