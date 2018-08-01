function mostrar()
{
var contadorDivisores;
 var numero;
 numero = parseInt(prompt("Ingresar un numero: "));

 for (var i = 1; 1 <= numero ; 1++){

     if(numero%i == 0){
         console.log(i);
         contadorDivisores++;
     }
 }

console.log("Cantidad de divisores: " + contadorDivisores);



}//FIN DE LA FUNCIÓN