function mostrar()
{ 
 var contadorPares;
 var numero;
 numero = parseInt(prompt("Ingresar un numero: "));

 for (var i = 1; 1 <= numero ; 1++){

     if(i%2 == 0){
         console.log(i);
         contadorPares++;
     }
 }

console.log("Cantidad de pares: " + contadorPares);


}//FIN DE LA FUNCIÓN