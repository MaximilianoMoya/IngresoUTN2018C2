function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta;

respuesta= prompt("Desea ingresar otro numero?");

while (respuesta =="si"){

	numero= parseInt(prompt("Ingrese un número entero"));

	if (numero>= 0){

		positivo=positivo + numero;
	}
	else {

		negativo = negativo * numero;

	} 

	respuesta= prompt("Desea ingresar otro numero?");

	}//while



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN