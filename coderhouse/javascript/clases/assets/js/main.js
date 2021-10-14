// ///////////////////////////////// SINTAXIS Y VARIABLES //////////////////////////////

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




// ///////////////////////////////// CONTROL DE FLUJOS (CONDICIONALES) //////////////////////////////

// // Si esto es verdadero, serás el mensaje en consola

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



// ///////////////////////////////// VARIABLES BOOLEAN (SOLO TIENEN 2 VALORES, TRUE OR FALSE) //////////////////////////////

// let esValida = true;

// let numero = 10;
// let esMayor5 = (numero > 5); //su valor será true

// if (esMayor5) {
//     alert("10 es mayor que 5")
// }


// ///////////////////////////////// OPERADORES //////////////////////////////

// let numero = 3;

// if (2 === "2") {
//     console.log("Es verdadero")
// } else {
//     console.log("Es falso")
// }

// ///////////////////////////////// CONDICIONES COMPUESTA CON && (AND) y || (OR) //////////////////////////////

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


// ///////////////////////////////// FUNCIONES //////////////////////////////

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


// Declaración de variable para guardar el resultado de la suma
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


// let total = 0;

// function agregarAlCarrito() {
//     do {
//         let producto = prompt("¿Quieres comprar shampoo, acondicionador o ambos?")
//         let cantidad = parseInt(prompt("Ingresa la cantidad que deseas del producto"));
//         let precio = 0;

//         switch (producto) {
//             case "shampoo":
//                 precio = 500;
//                 break;
//             case "acondicionador":
//                 precio = 700;
//                 break;
//             case "ambos":
//                 precio = 1100;
//                 break;
//             default :
//                 alert("Alguno de los ingresados es incorrecto");
//                 precio = 0;
//                 cantidad = 0;
//         }
//         total = total + precio * cantidad;
//         otroProducto = confirm("¿Quieres agregar otro producto?")
//     }while(otroProducto);
// }

// function aplicarDescuento(total) {
//     if(total >= 5000) {
//         total = total * 0.80;
//     }
//     return total;
// }
// function calcularEnvio(total) {
//     let confirmacion = confirm("¿Deseas envío a domicilio?")
//     if(confirmacion && total >= 2000) {
//         alert("Tienes envío gratis. El total de tu compra es $"+total)
//     } else if ( confirmacion && total < 2000 && total != 0) {
//         alert("El envío tiene un de $700. El total de tu compra es $"+total)
//     } else {
//         alert("El total de tu compra es"+total);
//     }

//     return total;
// }

// agregarAlCarrito();
// calcularEnvio(aplicarDescuento(total));




// let total = 0;

// function agregarAlCarrito() {
//     do {
//         let cantidad = parseInt(prompt("Indica el kilometraje de tu auto")); 
//         let producto = prompt("Ingresa el servicio: Cambio de aceite, balanceo o ambos");
//         let precio = 0;

//         switch (producto) {
//             case "cambio de aceite":
//                 precio = 10;
//                 break;
//             case "balanceo":
//                 precio = 79990;
//                 break;
//             case "ambos":
//                 precio = (10*cantidad)+balanceo-(((10*cantidad)+balanceo)*.20);
//                 break;
//             default :
//                 alert("Servicio incorrecto, por favor escriba el servicio correcto");
//                 precio = 0;
//                 cantidad = 0;
//         }
//         total = total + precio * cantidad;
//         otroProducto = confirm("¿Quieres agregar otro servicio?")
//     } while(otroProducto);
// }
// function metodoDePago (total) {
//     let metodo = prompt("Elige el método de pago ¿Débito o Crédito?")

//     switch (metodo) {
//         case "debito":
//             tarjeta = alert("El total de su pago con tarjeta de débito es $"+total);
//             if(debito){
//                 alert("Transacción exitosa"); 
//             }
//             break;
//         case "credito":
//             tarjeta = pagoEnCuotas(total);
//             if(credito){
//                 alert("Transacción exitosa");
//             }
//             break;
//     }

// }
// function pagoEnCuotas(total) {
//     let seleccionCuotas = parseInt(prompt("Ingrese hasta un máximo de 12 cuotas (Sin interés)"));
//     cuotas = total / seleccionCuotas;
//     alert("Tu pago en cuotas quedará en $" +cuotas+ " mensuales");
// }

// agregarAlCarrito();
// metodoDePago(total); 









// ///////////////////////////////// OBJETOS //////////////////////////////

// Propiedades de un objeto
// let nombre = "Homero";
// let edad   = 39;
// let calle  = "Av. Siempreviva 742";

// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
// Se accede a los valores/propiedad de un objeto de la siguiente manera
// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.calle);

// Se accede a los valores/propiedad de un objeto de la siguiente manera
// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["calle"]);


// //Funcion constructora
// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");



// // Uso del "this"      
 
// function Persona(literal) {
//     this.nombre = literal.nombre;
//     this.edad   = literal.edad;
//     this.calle  = literal.calle;
// }
// const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });




// CONTRUCTORA

// class Auto {
//     constructor(marca, modelo, patente) {
//         this.Marca = marca;
//         this.modelo = modelo;
//         this.patente = patente;
//     }
// };

// const auto1 = new Auto ("Volkswagen", "Gol", "LSRV80")

// console.log(Auto)


// METODOS PERSONALIZADOS
// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//     this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// persona1.hablar();
// persona2.hablar();



// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();


// console.log(producto1);
// console.log(producto2);






// let producto = 0;
// let cantidadProducto = 0;
// let precio = 0;

// class Pedido {
//     constructor(producto, precio, cantidad){
//         this.producto = producto,
//         this.precio = precio,
//         this.cantidad = cantidad,
//         this.envio = 0,
//         this.subtotal = 0,
//         this.total = 0
//     }

//     // metodo
//     calcularSubtotal() {
//         this.subtotal = this.precio * this.cantidad;
//     }

//     calcularIva() {
//         return this.subtotal * 0.21;
//     }

//     calcularEnvio() {
//         if(this.subtotal >= 5000) {
//             this.envio = 0;
//         }else {
//             this.envio = 650;
//         }
//     }

//     calcularTotal() {
//         this.total = this.subtotal + this.envio + this.calcularIva()
//     }
// }

// function pedidoProducto() {
//     while(!producto || producto == 0 || producto > 4) {
//         producto = parseInt(prompt("¿Qué producto desea comprar?:\n 1: Zapatilla($5000)\n 2: Camisa($1800) \n 3: Pantalón($2000)\n 4: Campera($7300)"))
//     }

//     switch(producto){
//         case 1:
//             producto = "Zapatilla";
//             Precio = 5000;
//             break;
//         case 2:
//             producto = "Camisa";
//             Precio = 1800;
//             break;
//         case 3:
//             producto = "Pantalón";
//             Precio = 2000;
//             break;
//         case 4:
//             producto = "Campera";
//             Precio = 7300;
//             break;
//     }

//     while(!cantidadProducto || cantidadProducto == 0) {
//         cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\nIntroduzca la cantidad deseada.(Sólo números)"));
//     }

//     return new Pedido(producto, precio, cantidadProducto)
// }

// alert("Bienvenido/a a la tienda")

// const pedido = pedidoProducto();

// pedido.calcularSubtotal();
// pedido.calcularIva();
// pedido.calcularEnvio();
// pedido.calcularTotal();

// alert("Detalle del pedido:\n" + "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" + "- IVA 21%: " + pedido.calcularIva() + "\n" + "- Costo de envío: $" + pedido.envio + "\n" + "Total = $" + pedido.total)



/////////////////////////////////// ARRAYS //////////////////////////////

// // Declaración de array vacío
// const arrayA = [];
// // Declaración de array con nùmeros
// const arrayB = [1,2];
// // Declaracion de array con strings
// const arrayC = ["C1","C2","C3"];
// // Declaración de array con booleanos
// const arrayD = [true,false,true,false];
// // Declaración de array mixto
// const arrayE = [1,false,"C4"];


// Los arrays se cuentas desde 0, 1, 2, 3.... 
// const  numeros = [1,2,3,4,5];
// let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4; 1 equivale a 0 y 2 equivale a 3.
// let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
// let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4


// Recorrido del array
// const numeros = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//     alert(numeros[i]);
// }


// // LENGHT
// const miArray = ["marca", 3 , "palabra"]
// console.log(miArray.length);


// // PUSH
// const miArray = ["marca", 3, "palabra"];
// miArray.push('otro elemento');
// console.log(miArray.length);//El array ahora tiene 4 posiciones


// // toString
// const miArray = ["marca", 3 ,"palabra"];
// console.log( miArray.toString() );//imprime "marca,3,palabra"


// // JOIN
// const otroArray = ["hola", 22, "mundo"];
// console.log(otroArray.join("*")); //Imprime "hola*22*mundo"


// //CONCAT
// const miArray    = ["ford", 45];
// const otroArray  = ["hola", 22, "mundo"];
// const nuevoArray = miArray.concat(otroArray);
// // nuevoArray ahora es igual a[ford,45,hola,22,mundo]


// // SLICE
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3);//Nuevo array desde la posición 1 a 3.
// // masculinos contiene ['Pedro','Miguel']



// EJEMPLO APLICADO

// // Declaramos un array vacío
// const listaNombres = [];
// let cantidad = 5;

// //Ejemplo de do....while para cargar nombre al array con prompt
// do {
//     let entrada = prompt("Ingresar nombre");
//     listaNombres.push(entrada.toUpperCase());
// } while(listaNombres.length != cantidad)

// // Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA", "EMA"])

// // Salida con salto de linea usando join
// alert(nuevaLista.join("-"));



// ARRAY DE OBNJETOS
// const objeto1 = { id: 1, producto: "Arroz" };
// const array   = [objeto1, { id: 2, producto: "Fideo" }];
// array.push({ id: 3, producto: "Pan" });

// For....OF
// const productos = [{ id: 1, producto: "Arroz" },
//                   { id: 2,  producto: "Fideo" },
//                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }



// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos)
//     producto.sumaIva();


// console.log(productos);



// METODOS DE BUSQUEDA Y TRANSFORMACION

// // FIND
// const numeros    = [1, 2, 3, 4, 5];
// //La función parámetro generalmente es una función flecha sin cuerpo.
// const encontrado = numeros.find(elemento => elemento > 3); //Encuentra 4

// const nombres     = ["Ana", "Ema", "Juan"];
// const encontrado2 = nombres.find(elemento => elemento === "Ema"); //Encuentra "Ema"
// const encontrado3 = nombres.find(elemento => elemento === "Alan");//undefined


// // FILTER
// const numeros = [1, 2, 3, 4, 5];
// const filtro1 = numeros.filter(elemento => elemento > 3); //Encuentra [4,5]
// const filtro2 = numeros.filter(elemento => elemento < 4); //Encuentra [1,2,3]

// const nombres = ["Ana", "Ema", "Juan", "Elia"];
// //Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
// const filtro3 = nombres.filter(elemento => elemento.includes("n"));


// // MAP
// const numeros  = [1, 2, 3, 4, 5];
// const porDos   = numeros.map(x => x * 2);   //porDos = [2, 4, 6, 8, 10]
// const masCien  = numeros.map(x => x + 100); //porDos = [102, 104, 106, 108, 110]

// const nombres = ["Ana", "Ema", "Juan", "Elia"];
// const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]



const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const buscarPan = productos.find(producto => producto.id === 3); 
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos);//
[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const aumentos = productos.map(producto => producto.precio += 30);
console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio.
