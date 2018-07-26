function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta;

do{
	
	numero= parseInt(prompt("Ingrese un número entero"));

	if (numero>= 0){

		positivo=positivo + numero;
		
	}
	else {

		negativo = negativo * numero;
		contador++;
	}

	respuesta= prompt("Desea ingresar otro numero?");

} while (respuesta =="si");

 	
document.getElementById('suma').value=positivo;

if (contador == 0){
	
	negativo = 0;

}
document.getElementById('producto').value=negativo;
}

//FIN DE LA FUNCIÓN