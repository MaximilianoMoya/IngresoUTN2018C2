/*Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10), 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar(){

var nota;
var sexo;
var acumNotas = 0;
var notaBaja;
var sexoNotaBaja;
var contVarones = 0;
var flag = 0;
var promedio;



for(var i = 0; i < 5; i++){
    
    nota = parseInt(prompt("Ingrese nota"));

    while (nota < 0 || nota > 10){

        nota = parseInt(prompt("Error. Reingrese nota"));
    }
    sexo = prompt("Ingrese sexo");

    while (sexo != 'f' && sexo != 'm'){
        sexo = prompt("Error. Reingrese sexo");
    }

    acumNotas = acumNotas+nota;

    if (nota < notaBaja || flag == 0){
        
        notaBaja = nota;
        sexoNotaBaja = sexo;

        flag = 1;
    }

    if (sexo == 'm' && nota >=6) {

        contVarones++;
    }
}

promedio=acumNotas/5;

alert("El promedio de las notas totales es: " + promedio + "\n Nota màs baja: " + notaBaja + "\n Sexo nota baja: " + sexoNotaBaja + "\n Cantidad de varones que su nota haya sido >=6: " + contVarones);
}


