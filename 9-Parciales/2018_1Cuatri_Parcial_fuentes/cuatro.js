function mostrar()
{
var num1;
var num2;
var suma;

num1 = prompt("Coloque el primer numero");
num2 = prompt("Coloque el segundo numero");

if (num1 == num2){
    alert(num1 + num2);
}
else if (parseInt(num1) > parseInt(num2)) {
    alert(num1-num2);
}

else { 
    
    suma = parseInt(num1) + parseInt(num2);
    
    if (suma > 10) {
        alert("La suma es: " + suma + " y superò el 10");
    }
    
    else {
    alert("La suma es: " + suma);
    }
}
}


