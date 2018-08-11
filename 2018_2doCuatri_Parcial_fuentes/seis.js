/*Si es otoño con 15 grados mostrar “esta lindo”, 
si está por debajo de esa temperatura mostrar “se vino el frío” 
y si la supera los 15 pero no pasa de 21 “esta re bueno!”. 
Si supera el último valor mostrar “mucho calor para el otoño”.
Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert.
*/

function mostrar()
{
	var estacion;
	var temperatura;

	estacion=prompt("Ingrese estacion");

	switch(estacion){

		case "otoño":
		
		temperatura=prompt("Ingresar temperatura");

		if(temperatura == 15 ){
			alert("Està lindo");
		}
		else{
			if(temperatura < 15){
				alert("se vino el frio");
			}
			else if(temperatura>15 && temperatura <= 21){
				alert("està re bueno");
			}
			else{
				alert("mucho calor para el otoño");
			}
		}
	}
}
