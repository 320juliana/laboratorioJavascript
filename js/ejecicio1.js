var user= prompt("Ingrese su nombre");
var deposit =prompt("Ingresar el deposito que desea realizar");
var interest=0.02;
var operation=Math.pow(1+interest,60);
var total=deposit*operation;

cedulaument.write("<h1>Bienventasrealiido   "+ user +"</h1>");
cedulaument.write("<h1>El valor consignado es :    "+"<br>"+ deposit +"</h1>");
cedulaument.write("<h1>El valor futuro es   "+"<br>"+ total +"</h1>");