var sueldo=prompt('¿Cuál es tu sueldo?');
var bonus= prompt('¿Cuánto fue el bonus de este mes?');
var resultado=parseFloat(sueldo)+parseFloat(bonus);
document.write(`El resultado final de tu sueldo es ${resultado}`);