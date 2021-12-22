import displayServices from "./selected_services";
import autoData from "./informacionAuto";
import { services } from "../const/services";

export function exportServices() {
    console.log("Hola")
    let servicio = document.getElementById('serviceSelection').value;
    let kilometraje = autoData.kilometrajeAuto;
    let fecha = document.getElementById('availableDate1').value;

    displayServices.createServices(services[servicio].servicio,services[servicio].precio(kilometraje),fecha)
}
