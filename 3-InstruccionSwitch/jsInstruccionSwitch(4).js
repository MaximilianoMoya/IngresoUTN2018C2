function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {

    case "Febrero":
    alert("tiene 28 dìas");
    break;
    
    case "Enero":
    case "Marzo":
    case "Mayo" :
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    alert("tiene 31 dìas");
    break;
    
    default : 
    alert("tiene 30 dìas");
}
	
	



}//FIN DE LA FUNCIÓN