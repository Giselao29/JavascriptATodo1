
/*TEST A*/

const testA=document.getElementById("testA"), salidaXA=document.createElement("td"),salidaYA=document.createElement("td");
var x=10,y=20;

x=x+x+1;
y=y-y-x;

const textoXA=document.createTextNode(x),textoYA=document.createTextNode(y);
salidaXA.appendChild(textoXA);
salidaYA.appendChild(textoYA);
testA.appendChild(salidaXA);
testA.appendChild(salidaYA);

/*TEST B*/

const testB=document.getElementById("testB"), salidaXB=document.createElement("td"),salidaYB=document.createElement("td");
var t=10,z=20;

t=(t-z)+4;
z=4+(z+5);

const textoXB=document.createTextNode(t),textoYB=document.createTextNode(z);
salidaXB.appendChild(textoXB);
salidaYB.appendChild(textoYB);
testB.appendChild(salidaXB);
testB.appendChild(salidaYB);

/*TEST C*/

const testC=document.getElementById("testC"), salidaXC=document.createElement("td"),salidaYC=document.createElement("td");
var m=10,p=20;

m=m*2-4;
p=4-p*2;

const textoXC=document.createTextNode(m),textoYC=document.createTextNode(p);
salidaXC.appendChild(textoXC);
salidaYC.appendChild(textoYC);
testC.appendChild(salidaXC);
testC.appendChild(salidaYC);

/*TEST D*/

const testD=document.getElementById("testD"), salidaXD=document.createElement("td"),salidaYD=document.createElement("td");
var r=10,s=20;

r=(20-r)/s;
p=r+2/s;

const textoXD=document.createTextNode(m),textoYD=document.createTextNode(p);
salidaXD.appendChild(textoXD);
salidaYD.appendChild(textoYD);
testD.appendChild(salidaXD);
testD.appendChild(salidaYD);

/*TEST E*/

const testE=document.getElementById("testE"), salidaXE=document.createElement("td"),salidaYE=document.createElement("td");
var w=10,h=20;

w=((1-w)*(h/8))*4*0;
h=(w+3)/w;

const textoXE=document.createTextNode(w),textoYE=document.createTextNode(h);
salidaXE.appendChild(textoXE);
salidaYE.appendChild(textoYE);
testE.appendChild(salidaXE);
testE.appendChild(salidaYE);