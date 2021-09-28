const diff = (a, b) => {
    return Math.abs(a - b);
}

let a = parseInt(prompt("Diferencias entre dos números, ingresa el primer número:"));
let b = parseInt(prompt("Ahora ingresa el segundo número:"));

alert("La diferencia es de" + " " + diff(a, b))