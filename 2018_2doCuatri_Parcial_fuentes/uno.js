/*Se piden por prompt el ancho y largo de una cancha de futbol 
y sabiendo que con un litro de pintura blanca se pintan 3 mts lineales, 
informar el perímetro y la cantidad de litros de pintura se deben */

function mostrar()
{	
	var ancho;
	var largo;
	var perimetro;
	var pintura;
	
	ancho = parseInt(prompt("Ingrese el ancho: "));
	largo = parseInt(prompt("Ingrese el largo: "));

	perimetro = (ancho+largo)*2;
	pintura = perimetro/3;

	alert("El perimetro es: " + perimetro + " y la cantidad de pintura que se necesita es de: " + pintura + " litros");

}
