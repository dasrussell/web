import dataAgendaServicio from "./components/agendaServicio.js";
import dataInfoServicios from "./components/infoServicios.js";

window.onload = function(){
    $('#kmModal').modal('show');
    let btnInfoServicio = document.getElementById('#btnInfoServicio')
    let btnAgendaServicios = document.getElementById('#btnAgendaServicios')
    btnAgendaServicio.addEventListener("click",dataAgendaServicio,false)
    btnInfoServicios.addEventListener("click",dataInfoServicios,false)
};

function agregarAlCarrito() {
    let kilometraje = agendaServicio();
    let producto;
    let cambioDeAceite = true;
    let balanceo = true;
    let precio = 0;
    do {
        if (cambioDeAceite && balanceo) {
            producto = prompt("Ingresa el servicio: " + "\n- Cambio de aceite ($0.5 x KM)" + "\n- Balanceo ($79990)\n- Ambos servicios (Obtienes un 20% de descuento)");
            switch (producto) {
                case "cambio de aceite":
                    precio = 0.5 * kilometraje.kilometrajeAuto;
                    cambioDeAceite = false;
                    break;
                case "balanceo":
                    precio = 79990;
                    balanceo = false;
                    break;
                case "ambos servicios":
                    precio = (0.5 * kilometraje.kilometrajeAuto) + 79990;
                    cambioDeAceite = false;
                    balanceo = false;
                    break;
                default:
                    alert("Servicio incorrecto, por favor escriba el servicio correcto");
                    precio = 0;
                    break;
            }
            otroProducto = confirm("¿Quieres agregar otro servicio?")
        } else if (!cambioDeAceite && balanceo) {
            producto = confirm("Servicio adicional disponible Balanceo: ¿Deseas agregarlo?");
            if (producto) {
                balanceo = false;
                precio = precio + 79990;
                otroProducto = false;
            }
        } else if (cambioDeAceite && !balanceo) {
            producto = confirm("Servicio adicional disponible Cambio de Aceite: ¿Deseas agregarlo?");
            if (producto) {
                cambioDeAceite = false;
                precio = precio + (0.5 * kilometraje.kilometrajeAuto);
                otroProducto = false;
            }
        }
    } while (otroProducto);
    if (!cambioDeAceite && !balanceo) {
        precio = precio * 0.80;
        alert("Por elegir ambos servicios, obtendrás un 20% de descuento")
    }
    return precio;
}

function totalDePago(total) {
    alert("El total a pagar es de: $" + total)
    return total;
}

function metodoDePago(total) {
    let metodo = prompt("Elige el método de pago ¿Débito o Crédito?")
    switch (metodo) {
        case "debito":
            alert("El total de su pago con tarjeta de débito es $" + total);
            alert("Transacción exitosa");
            break;
        case "credito":
            pagoEnCuotas(total);
            alert("Transacción exitosa");
            break;
    }
}

function pagoEnCuotas(total) {
    let seleccionCuotas = parseInt(prompt("Ingrese hasta un máximo de 12 cuotas (Sin interés)"));
    cuotas = total / seleccionCuotas;
    if (seleccionCuotas >= 2) {
        alert("Tu pago en cuotas quedará en $" + cuotas + " mensuales");
    } else {
        alert("Transacción exitosa")
    }
}

function newFunction() {
    let total = totalDePago(agregarAlCarrito());
    console.log(total);
    metodoDePago(total);
}
