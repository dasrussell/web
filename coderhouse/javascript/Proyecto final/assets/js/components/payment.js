import displayServices from "../library/selected_services.js";

let nombre = document.getElementById('serviceNamePayment');
let fecha = document.getElementById('serviceDatePayment');
let precio = document.getElementById('servicePricePayment');
let servicios = displayServices.showServices();  
                    
nombre.innerHTML = servicios.name;
fecha.innerHTML = servicios.fecha;
precio.innerHTML = servicios.precio;

console.log(servicios)