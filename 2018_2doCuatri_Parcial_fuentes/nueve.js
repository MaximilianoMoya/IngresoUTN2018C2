/*En una tienda se ingresan los datos de los cliente (nombre , sexo, estado civil{soltero, casado,viudo},
cantidad de productos e importe total de la compra)
Necesitamos saber:
a- el nombre de la persona que más cantidad de productos compró.
b- de los solteros, el  sexo del que más gasto y el que menos gasto.
c-el importe  y nombre de la primer mujer en comprar.
d- el promedio de gasto de los viudos.
*/

function mostrar()
{
	var nombre;
	var sexo;
	var estadocivil;
	var cantidad;
	var importetotal;
	var respuesta;
	var mayorCantidad;
	var mayorCantidadNombre;
	var flagYaPaso = 0;
	var flagSoltero = 0;
	var masGasto;
	var menosGasto;
	var masGastoSexo;
	var menosGastoSexo;
	var primerMujerImporte;
	var primerMujerNombre;
	var primerMujerBandera = 0;
	var cantidadViudos = 0;
	var acumViudos = 0;
	var promedioTotal;

	respuesta = "n";

	while(respuesta != "n"){
		nombre=prompt("Introducir nombre");
		sexo=prompt("Introducir sexo");
		while (sexo != "f" && sexo != "m"){
			sexo=prompt("Introducir sexo");
		}
		estadocivil=prompt("Introducir estadocivil");
		while (estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo"){
			estadocivil=prompt("Introducir estadocivil");
		}
		cantidad=parseInt(prompt("Introducir cantidad"));
		while (cantidad > 0 && isNan(cantidad)){
			cantidad=parseInt(prompt("Introducir cantidad"));
		}
		importetotal=parseInt(prompt("Introducir importetotal"));
		while (importetotal > 0 && isNan(importetotal)){
			importetotal= parseInt(prompt("Introducir importetotal"));
		}
		//analisis
		if(flagYaPaso == 0)
		{
			flagYaPaso = 1;
			mayorCantidad=cantidad;
			mayorCantidadNombre=nombre;
		}else{
			if(cantidad>mayorCantidad){
				mayorCantidad=cantidad;
				mayorCantidadNombre=nombre;
			}
		}
		if (estadocivil=="soltero"){
			if (flagSoltero == 0){
				flagSoltero = 1;
				masGasto = importetotal;
				menosGasto = importetotal;
				menosGastoSexo = sexo;
				masGastoSexo = sexo;

			} else {
				if (importetotal > masGasto){
					masGastoSexo = sexo;
					masGasto = importetotal;
				}
				if (importetotal < menosGasto){
					menosGastoSexo = sexo;
					menosGasto = importetotal;
				}
			}
		}
		if (sexo = "f" && primerMujerBandera == 0){
			primerMujerBandera=1;
			primerMujerNombre=nombre;
			primerMujerImporte=importe;

		}
		if(estadocivil = "viudo"){
			acumViudos=acumViudos+importetotal;
			cantidadViudos++;
		}

		respuesta = prompt("ingrese n para salir");
	}
	promedioTotal = cantidadViudos/acumViudos;
}
