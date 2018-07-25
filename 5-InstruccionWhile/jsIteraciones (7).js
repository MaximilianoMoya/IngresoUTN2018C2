function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;

respuesta = prompt("Desea ingresar un numero?");

while(respuesta == "si"){

	acumulador = acumulador + parseInt(prompt("Ingrese un número : "));

	respuesta = prompt("Desea ingresar otro numero?");

	contador+=1;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN