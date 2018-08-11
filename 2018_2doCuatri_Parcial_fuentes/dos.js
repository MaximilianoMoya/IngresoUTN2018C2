/*Se ingresa por prompt la edad , el nombre, el apellido y la localidad. 
mostrar el siguiente mensaje “ud es xx xx tiene xx años de edad y vive en xx”*/

function mostrar()
{
	var nombre;
	var edad; 
	var apellido;
	var localidad; 

	nombre = prompt("Ingresar el nombre: ");
	apellido = prompt("Ingresar el apellido: ");
	edad = parseInt(prompt("Ingrese la edad: "));
	localidad = prompt("Ingree la localidad: ");

	alert("Usted es "+nombre+ apellido + " tiene " + edad + " años de edad y vive en " + localidad);	
}
