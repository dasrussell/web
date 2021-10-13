/////////////////////////////////// SINTAXIS Y VARIABLES //////////////////////////////

// // VARIABLES

// //Declaración de variables ES5
// var nombreVariable1;

// //Declaración de variables ES6
// let nombreVariable2;
// const LENGUAJE = "JAVASCRIPT";


// // TIPOS DE VARIABLES NUMERICAS
// let variableNumerica;

// var variableTexto;

// variableNumerica = 5;
// variableTexto = "Mi texto";
// variableTexto = 'Mi texto';




// // OPERACIONES BÁSICAS

// var numeroA = 1;
// let numeroB = 2;
// const NUMEROC = 3;

// //SUMA DE DOS NUMEROS (1 + 2 = 3)
// let resultadoSuma = numeroA + numeroB;
// console.log(resultadoSuma)

// //RESTA DE DOS NUMEROS (2 - 1 = 1)
// let resultadoSuma = numeroB - numeroA;
// console.log(resultadoSuma)

// //PRODUCTO DE DOS NUMEROS (2 * 3 = 6)
// let resultadoProducto = numeroB * NUMEROC;
// console.log(resultadoProducto);



// var textoA = "CODER";

// let textoB = "HOUSE";

// const BLANCO = " ";

// //Concatenar textoA y textoB ("CODER" + "HOUSE" = "CODERHOUSE")
// let resultadoA = textoA + textoB;
// console.log(resultadoA)

// //Concatenar textoB y 1 ("HOUSE" + "1" = "HOUSE1")
// let resultadoB = textoB + 1;
// console.log(resultadoB);

// //Concatenar textoB y 1 ("CODER" + "BLANCO" + "HOUSE" = "CODER HOUSE")
// let resultadoC = textoA + BLANCO + textoB;
// console.log(resultadoC);


// // PROMPT
// let nombreIngresado = prompt("Ingrese su nombre");
// console.log(nombreIngresado);

// PROMPT
// let entrada = prompt("Ingrese una letra");
// let salida = d + " " + "ingresada";
// alert(salida);


// // DESAFÍO EJEMPLO
// let numero1 = parseInt(prompt("Ingrese un número:"));
// let numero2 = parseInt(prompt("Ingrese otro número:"));

// let resultado = numero1 + numero2;

// alert("El resultado de la suma es:" + " " + resultado);

// //Date().getFullYear()
// let date =  new Date().getFullYear();
// console.log(date);




/////////////////////////////////// CONTROL DE FLUJOS (CONDICIONALES) //////////////////////////////

//// Si esto es verdadero, serás el mensaje en consola

// if (true) {
//     console.log("vas a ver este mensaje")
// }
// if (false) {
//     console.log("no vas a ver este mensaje")
// }



// let semaforo = "verde";

// if (semaforo == "verde") {
//     console.log("Puede pasar");
// }

// if (semaforo == "rojo") {
//     console.log("No puede pasar")
// }

// != Significa, si es distinto
// Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
// Por ejemplo: 2 == "2" devuelve True
// Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
// Por ejemplo: 2 === "2" devuelve False

// Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
// Por ejemplo: 2 != "2" devuelve False

// Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
// Por ejemplo: 2 !== "2" devuelve True

// Y estos cuatro, seguro que ya sabes cómo funcionan:

// Mayor que (>)

// Mayor o igual que (>=)

// Menor que (<)

// Menor o igual que (<=)

// if ($success != true){}



// let nombreUsuario = prompt("Ingresar nombre de usuario");

// if (nombreUsuario == "") {
//     alert("No ingresaste el nombre de usuario");
// }
// else {
//     alert("Nombre de usuario ingresado " + nombreUsuario);
// }



// let precio = 100.5;

// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// else if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// else if (precio < 100) {
//     alert("El precio es menor que 100");
// }
// else {
//     alert("El precio es mayor que 100");
// }



/////////////////////////////////// VARIABLES BOOLEAN (SOLO TIENEN 2 VALORES, TRUE OR FALSE) //////////////////////////////

// let esValida = true;

// let numero = 10;
// let esMayor5 = (numero > 5); //su valor será true

// if (esMayor5) {
//     alert("10 es mayor que 5")
// }


/////////////////////////////////// OPERADORES //////////////////////////////

// let numero = 3;

// if (2 === "2") {
//     console.log("Es verdadero")
// } else {
//     console.log("Es falso")
// }

/////////////////////////////////// CONDICIONES COMPUESTA CON && (AND) y || (OR) //////////////////////////////

// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado != "") && (apellidoIngresado != "")) {
//     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//     alert("Error: Ingresar nombre y apellido");
// }


// let nombreIngresado   = prompt("Ingresar nombre");

// if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
//     alert("El nombre ingresado es Ana"); 
// }else{
//     alert("El nombre ingresado NO ES Ana"); 
// }


// let nombreIngresado   = prompt("Ingresar nombre");

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
//     alert("Hola Ema"); 
// }else{
//     alert("Error: Ingresar nombre valido");
// }


// let numero1 = parseInt(prompt("Ingrese un número para comparar",0));
// let numero2 = parseInt(prompt("Ingrese el otro número",0));

// if((numero1 >= 10) && (numero2 <= 50)) {
//     SpeechRecognitionAlternative("Los números ingresados están entre 10 y 50 y son: "+numero1+" y "+numero2);
// }


/////////////////////////////////// FUNCIONES //////////////////////////////

// function saludar() {
//     console.log("¡Hola estudiantes!");
// }


// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);
// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);
// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);


// function solicitarNombre(){
//     let nombreIngresado   = prompt("Ingresar nombre");
//     alert("El nombre ingresado es " + nombreIngresado);
// } 


// // PARAMETROS
// function conParametros(parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2)
// }

// conParametros(6,7)


// for (let i = 0; i < 3; i++) {
//     solicitarNombre();
// }


// function conParametros(parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2);
// }


//Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje);
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);            
// mostrar(resultado);


// //Otras llamadas a sumar y mostrar
// sumar(25, 5);            
// mostrar(resultado); 
// sumar(1, 2);            
// mostrar(resultado); 


// function sumar(primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }
// let resultado = sumar(5, 8);


// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, 5, "*"));


// let resultado = 0
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
// sumar(5,6);
// //Se puede acceder a la variable resultado porque es global
// console.log(resultado);


// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
// }
// //No se puede acceder a la variable resultado fuera del bloque
// console.log(resultado);


// //Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
// const suma  = function (a, b) { return a + b };
// const resta = function (a, b) { return a - b };
// console.log(suma(15,20));
// console.log(resta(15,5));


// const suma  = (a, b) => { return a + b };
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) =>  a - b ;
// console.log(suma(15,20));
// console.log(resta(20,5));


// const suma  = (a,b) => a + b;
// const resta = (a,b) => a - b;
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = x => x * 0.21;
// let precioProducto  = 500; 
// let precioDescuento = 50;  
// //Calculo el precioProducto + IVA - precioDescueto
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
// console.log(nuevoPrecio);


let total = 0;

function agregarAlCarrito() {
    do {
        let cantidad = parseInt(prompt("Indica el kilometraje de tu auto")); 
        let producto = prompt("Ingresa el servicio: Cambio de aceite, balanceo o ambos");
        let precio = 0;

        switch (producto) {
            case "cambio de aceite":
                precio = 10;
                break;
            case "balanceo":
                precio = 79990;
                break;
            case "ambos":
                precio = (10*cantidad + balanceo) - (20*100);
                break;
            default :
                alert("Servicio incorrecto, por favor escriba el servicio correcto");
                precio = 0;
                cantidad = 0;
        }
        total = total + precio * cantidad;
        otroProducto = confirm("¿Quieres agregar otro servicio?")
    } while(otroProducto);
}
function metodoDePago (total) {
    let metodo = prompt("Elige el método de pago ¿Débito o Crédito?")

    switch (metodo) {
        case "debito":
            tarjeta = alert("El total de su pago con tarjeta de débito es $"+total);
            if(debito){
                alert("Transacción exitosa"); 
            }
            break;
        case "credito":
            tarjeta = pagoEnCuotas(total);
            if(credito){
                alert("Transacción exitosa");
            }
            break;
    }

}
function pagoEnCuotas(total) {
    let seleccionCuotas = parseInt(prompt("Ingrese hasta un máximo de 12 cuotas (Sin interés)"));
    cuotas = total / seleccionCuotas;
    alert("Tu pago en cuotas quedará en $" +cuotas+ " mensuales");
}

agregarAlCarrito();
metodoDePago(total);  




// let total = 3000000;

// function eleccionCuotas() {
//      do {
//         let opcionCuotas = prompt("Total: $3.000.000 ¿Desea realizar su pago en cuotas? Sí / No")
//         let cuotas = parseInt(prompt("Ingresa la cantidad que deseas del producto"));

//         if((nombreIngresado !="") && ((nombreIngresado == "NO") || (nombreIngresado == "no") || (nombreIngresado == "No") || (nombreIngresado == "Si") || (nombreIngresado == "SI") || (nombreIngresado == "si"))){
//             alert("Hola Ema"); 
//         }
//      }
// }

// function solicitarCuotas(){
//     let cuotas = parseInt(prompt("Ingresar nombre"));
//     alert("El nombre ingresado es " + nombreIngresado);
// }

// pagoEnCuotas();
