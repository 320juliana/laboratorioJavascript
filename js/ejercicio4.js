
var num=prompt("Ingresar un numero");
var total=0;
num.split('').forEach(num =>total+=parseInt(num));
cedulaument.write("<h1>Suma de los digitos ingresados  </h1>"+total);