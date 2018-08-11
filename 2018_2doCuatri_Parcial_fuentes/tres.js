/*Pedir por prompt el importe del producto, la cantidad y el nombre, 
mostrar un solo mensaje con el siguiente texto : 
“compró la cantidad xx del producto xx , a un precio de xx, pagando el precio de xx con iva incluido”.*/

function mostrar()
{
	var importe;
	var cantidad;
	var nombre;
	var preciofinal;

	nombre = prompt("Ingresar el nombre del producto: ");
	cantidad = parseInt(prompt("Ingresar la cantidad: "));
	importe = parseInt(prompt("Ingresar el importe del producto: "));

	preciofinal = (cantidad * importe) * 1.21;

	alert("Comprò la cantidad de: " + cantidad + " del producto " + nombre + ", a un precio de " + importe + ", pagando el precio de " + preciofinal + " con iva incluido.");


}
