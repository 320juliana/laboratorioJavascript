var cedula=prompt("Ingrese su numero de documento",cedula);
var nombre=prompt("Ingrese su nombre y apellido",nombre);
var salario=prompt("Ingrese su salario normal",salario);
var diaslabo=prompt("Ingrese los dias que ha laborado",diaslabo);
var ventasreali=prompt("Ingrese valor total de las ventas realizadas",ventasreali);
var prestamo=prompt("Ingrese dinero en prestamo",prestamo);

if(salario<=1562484){
    var cal=(salario*diaslabo)/30;
    var preve=ventasreali*0.2;
    var transpo=(88.211*diaslabo)/30;
    var preve=ventasreali*0.2;
    var deposit=prestamo;
    var tot=(cal+preve+transpo)-deposit;
}

document.write("Cedula de empleado: "+cedula+  "<br>");
document.write("Nombre: "+nombre+ "<br>");
document.write("Salario Basico: "+salario+ "<br>");
document.write("Auxilio de Transporte: "+transpo+ "<br>");
document.write("Comision de ventas: "+ventasreali+ "<br>")
document.write("Prestamos: "+posit+ "<br>");
document.write("Salario neto a recibir"+tot+ "<br>");