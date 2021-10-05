let capital = "DODOMA";
let intentos = 3; 	 	  	 	 
for (let contador = 0; contador < 3; contador++) {	 	 
    let respuesta = prompt("Capital de Tanzania " + "(Intentos restantes " + intentos-- + ")");	 	 
    if (respuesta.toUpperCase() === capital) { 	 	 
    let intentos = true; 	 	 
    alert("¡" + capital + " es correcto!");
    break;	 	 
    }	 
}if (!intentos) {
    alert("Te has quedado sin intentos")
} 	