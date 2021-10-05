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


    

