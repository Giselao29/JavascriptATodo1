
formulario.addEventListener('submit',function(e){

    let numeroUno=document.getElementById('numeroUno').value, numeroDos=document.getElementById('numeroDos').value,seleccion=document.getElementById('seleccion').value, $template=document.getElementById("template").content;
    
    numeroUno=Number(numeroUno);
    numeroDos=Number(numeroDos);

    e.preventDefault();

    if(seleccion=="+"){

        let suma=numeroUno+numeroDos;

        $template.getElementById("parrafo").textContent="El resultado de la suma es: "+suma;

        var clone = $template.cloneNode(true);
		document.body.appendChild(clone);
    }   

    if(seleccion=="-"){

        let resta=numeroUno-numeroDos;

        $template.getElementById("parrafo").textContent="El resultado de la resta es: "+resta;

        var clone = $template.cloneNode(true);
		document.body.appendChild(clone);
    }   

    if(seleccion=="*"){

        let multiplicacion=numeroUno*numeroDos;

        $template.getElementById("parrafo").textContent="El resultado de la multiplicación es: "+multiplicacion;

        var clone = $template.cloneNode(true);
		document.body.appendChild(clone);
    }   

    
    })
