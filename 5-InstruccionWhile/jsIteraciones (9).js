function mostrar()
{

var contador = 0;
var numero;
var maximo;
var minimo;
var respuesta; 

do{
	
	numero =parseInt(prompt("Ingrese un numero"));

	contador++;

	if(contador == 1){
		maximo =numero;
		minimo=numero;
	}

	if(numero>maximo){
		maximo =numero;
	}

	if(numero<minimo){
		minimo=numero;
	}

	respuesta = prompt("Desea continuar?");


}while (respuesta == "s");
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN