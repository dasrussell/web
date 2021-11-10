class informacionAuto {
    constructor(modelo, año, kilometraje) {
        this.modeloAuto = modelo;
        this.anoAuto = año;
        this.kilometrajeAuto = kilometraje;   
    }
    mostrarInformacionAuto () {
        let infoIngresada = "Información de su auto ingresada: \n" +
            "Modelo: " + this.modeloAuto +
            "\nAño: " + this.anoAuto +
            "\nKilometraje: " + this.kilometrajeAuto;
        return infoIngresada;
    };
}

window.onload = function(){
    $('#kmModal').modal('show');
};

function agendaServicio() {
    let modelo = document.getElementById('modelSelection').value;
    let año = document.getElementById('modelYear').value;
    let kilometraje = parseInt(document.getElementById('modelKm').value);

    let displayInformacion = new informacionAuto(modelo, año, kilometraje);
    displayInformacion.mostrarInformacionAuto();

    const div = document.querySelector(".infoauto");
    let html = `<li class="list-group-item"><strong>Kilometraje:</strong> <span>${kilometraje}</span></li>
                     <li class="list-group-item"><strong>Modelo:</strong> <span>${modelo}</span></li>
                     <li class="list-group-item"><strong>Año:</strong> <span>${año}</span></li>
                     <div class="mb-3 mt-3">
                        <ul class="infoPrecios">
                            <li class="mb-3">
                                <h6 class="mb-0">Cambio de aceite</h6>
                                <small><strong>$${kilometraje * 0.5} CLP</strong> ($0.5 CLP por Kilómetro)</small>
                            </li>
                            <li class="mb-3">
                                <h6 class="mb-0">Balanceo</h6>
                                <small><strong>$79.990 CLP</strong> (Precio único)</small>
                            </li>
                            <li class="mb-3">
                                <h6 class="mb-0">Cambio de aceite + Balanceo <span class="badge bg-primary">20% de descuento</span></h6>
                                <small><strong>$${((kilometraje * 0.5) + 79990) * 0.80}</strong></small>
                            </li>             
                        </ul>
                    </div>`;       
                    
    $('.infoauto').html(html);

    $('header').show(function(){
        // $(document).ready(function(){
        //     $("header").FadeIn();
        // });
    });
    
    return displayInformacion;
}


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


