function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;

do{

	numero = parseInt(prompt("Desea ingresar un numero?"));
 	acumulador = acumulador + numero;
	contador ++;

	respuesta =prompt("Desea continuar?");


}while(respuesta == "si");

	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

