var apples=prompt("Ingrsar los kilos de manzana a comprar");
debugger;
var full=0;
full=(apples*4200);
if(apples<=2){
    discount=0;
}
else if(apples<=5){
    discount=(full*0,1);
}
else if (apples<=10){
    discount=(full*0,15);
}
else if (apples>=11){
    discount=(full*0,2);
}
else{

}
var total=full-discount;
cedulaument.write("<h1>La compra de  :    $"+ apples +"<h1>Kilos de manzana tiene un valor de:  $"+ full +"<h1>pero tiene un descuento de:  $"+ discount +"<h1>por lo tanto el valor a pagar es:  $"+ total+"</h1>");




