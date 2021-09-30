alert("Ingresa el cupón 5cuenTAzo y aplica 50% de descuento a tu compra")

let nombreIngresado   = prompt("Ingresa el cupón");

if((nombreIngresado !="") && (nombreIngresado === "5cuenTAzo")){
    alert("¡Felicidades! Hemos aplicado un 50% de descuento a tu compra."); 
}else{
    alert("Cupón no válido, favor ingresar nuevamente.");
}