/*Realizar un algoritmo que permita el ingreso del nombre, el ancho, el alto y el peso de 5 productos .
Validar todos los datos, sabiendo que no puede tener más de 10 de ancho y 10 de alto, 
y su peso no puede superar los 1000 kilos. Informar: 
a- el peso más pesado
b- la altura más alta
c- el menor ancho.
d- la cantidad que tiene un peso entre 300 y 600 kilos.*/ 


function mostrar()
{
	var nombre;
	var ancho;
	var alto;
	var peso;
	var contador = 0;
	var masPesado;
	var masAlto;
	var menorAncho;
	var contador300_600 = 0;

while(contador<5){
	contador++;
	nombre = prompt("Ingrese nombre: ");
	ancho = parseInt(prompt("Ingrese el ancho: "));
	while(ancho<0 || ancho > 10){
		ancho = parseInt(prompt("Reingrese el ancho: "));
	}
	alto = parseInt(prompt("Ingrese el alto"));
	while(alto<0 || alto >10){
		alto = parseInt(prompt("Reingrese el alto"));
	}	
	peso = parseInt(prompt("Ingrese el peso: "));
	while(peso<0 || peso>1000){
		peso = parseInt(prompt("Reingrese el peso: "));
	}
	if (contador==1){
		masAlto=alto;
		masPesado=peso;
		menorAncho=ancho;
	}else{
		if(alto>masAlto){
			masAlto=alto;
		}
		if(peso>masPesado){
			masPesado=peso;
		}
		if(ancho<menorAncho){
			menorAncho=ancho;
		}
	}
	if(peso>300 && peso<600){
		contador300_600++;
	}
}
	
}
