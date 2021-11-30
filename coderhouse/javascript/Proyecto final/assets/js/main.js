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

function infoServicios(){
    let modelo = document.getElementById('modelSelection').value;
    let año = document.getElementById('modelYear').value;
    let kilometraje = parseInt(document.getElementById('modelKm').value);

    let displayInformacion = new informacionAuto(modelo, año, kilometraje);
    displayInformacion.mostrarInformacionAuto();

    const div = document.querySelector(".infoServicio");
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
                    
    $('.infoServicio').html(html);
    
    return displayInformacion;
}

function agendaServicio() {
    let modelo = document.getElementById('modelSelection').value;
    let año = document.getElementById('modelYear').value;
    let kilometraje = parseInt(document.getElementById('modelKm').value);
    let servicio = document.getElementById('serviceSelection').value;
    let sucursal = document.getElementById('locationSelection').value;
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);

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
                    </div>
                    <div class="mb-3">
                        <h6>Selecciona una fecha disponible en ${sucursal}</h6>
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="availableDate" id="availableDate1" value="option1" checked>
                            <label class="form-check-label" for="availableDate1">
                            ${servicio} - <b>${(tomorrow.getDate()+1) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}</b> entre <b>09:00 a 12:00 Hrs</b>.
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="availableDate" id="availableDate2" value="option2">
                            <label class="form-check-label" for="availableDate2">
                            ${servicio} - <b>${(tomorrow.getDate()+2) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}</b> entre <b>09:00 a 12:00 Hrs</b>.
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="availableDate" id="availableDate3" value="option3">
                            <label class="form-check-label" for="availableDate3">
                            ${servicio} - <b>${(tomorrow.getDate()+3) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}</b> entre <b>09:00 a 12:00 Hrs</b>.
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="availableDate" id="availableDate4" value="option4">
                            <label class="form-check-label" for="availableDate4">
                            ${servicio} - <b>${(tomorrow.getDate()+4) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}</b> entre <b>09:00 a 12:00 Hrs</b>.
                            </label>
                        </div>
                    </div>`;       
                    
    $('.infoauto').html(html);
    $('header').show();
    
    return displayInformacion;
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


