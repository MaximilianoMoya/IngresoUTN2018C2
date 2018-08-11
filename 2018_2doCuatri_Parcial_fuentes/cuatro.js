/*(IF)Pedir tres números e informar cual es el mayor  y el menor de los mismos.*/

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;

	numeroUno = prompt("Ingrese un numero: ");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese un numero: ");
	numeroDos = parseInt(numeroDos);

	numeroTres = prompt("Ingrese un numero: ");
	numeroTres = parseInt(numeroTres);

	if(numeroUno > numeroDos && numeroUno > numeroTres)
	{
		mayor= numeroUno;
	}
	else
	{ 
		if(numeroDos > numeroUno && numeroDos > numeroTres)
		{
			mayor= numeroDos;

		} else {
			mayor= numeroTres;
			   }
	
	}
	if(numeroUno < numeroDos && numeroUno > numeroTres)
	{
		menor=numeroUno;
	}
	else
	{	if(numeroDos < numeroUno && numeroDos < numeroTres)
			{	
			menor=numeroDos;	
				}else{
					menor=numeroTres;
		}

	}
	alert("El mayor es: " + mayor);
	alert("El menor es: " + menor);	
}

