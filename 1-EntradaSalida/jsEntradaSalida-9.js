/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;
    var resultado;

    sueldo = document.getElementById("sueldo").value;
    resultado = document.getElementById("resultado").value;

    sueldo = parseInt(sueldo);
    resultado = parseInt(resultado);

    aumento = sueldo * .1;
    resultado = sueldo + aumento;
    
    document.getElementById("resultado").value = resultado;
	
}
