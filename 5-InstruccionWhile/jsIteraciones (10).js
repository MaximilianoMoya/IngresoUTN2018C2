/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function mostrar()
{

	var numero;
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contNegativos = 0;
	var contPositivos = 0;
	var contCeros = 0;
	var contPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;
	var respuesta;
	// declarar variables
	
	do {
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > 0){
			contPositivos++;
			acumPositivos = acumPositivos + numero;
		}else if (numero < 0){
			contNegativos++;
			acumNegativos = acumNegativos + numero;
		}
		else {
			contCeros++;
		}

		if (numero % 2 == 0) {
			contPares++;
		}

		respuesta = prompt("Desde continuar?");

	} while (respuesta != "no");

	if(contNegativos != 0){
		promedioNeg = acumNegativos/contNegativos;
	}
	if(contPositivos != 0){
		
		promedioPos = acumPositivos/contPositivos;
	}

	diferencia = contPositivos-contNegativos;

	document.write("1. Suma de los negativos: "+ acumNegativos + "<br>");
	document.write("2. Suma de los positivos: "+ acumPositivos + "<br>");
	document.write("3. Cantidad de positivos: "+ contPositivos + "<br>");
	document.write("4. Cantidad de negativos: "+ contNegativos + "<br>");
	document.write("5. Cantidad de ceros: "+ contCeros + "<br>");
	document.write("6. Cantidad de numeros pares: "+ contPares + "<br>");
	document.write("7. Promedio de positivos: "+ promedioPos + "<br>");
	document.write("8. Promedio de negativos: "+ promedioNeg + "<br>");
	document.write("9. Diferencia entre positivos y negativos: "+ diferencia + "<br>");


}//FIN DE LA FUNCIÓN