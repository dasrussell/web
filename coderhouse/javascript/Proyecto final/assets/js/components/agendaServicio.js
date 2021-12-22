import autoData from "../library/informacionAuto.js";
import { services } from "../const/services.js";
import displayServices from "../library/selected_services.js";

function agendaServicio() {
    let modelo = autoData.modeloAuto;
    let año = autoData.anoAuto;
    let kilometraje = autoData.kilometrajeAuto;
    let servicio = document.getElementById('serviceSelection').value;
    let sucursal = document.getElementById('locationSelection').value;
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);

    autoData.mostrarInformacionAuto();

    const selectDate = (fecha)=> {
        displayServices.saveDate(fecha)
    }

    console.log(services)
    const div = document.querySelector(".infoauto");
    let html = `<li class="list-group-item"><strong>Kilometraje:</strong> <span>${kilometraje}</span></li>
                     <li class="list-group-item"><strong>Modelo:</strong> <span>${modelo}</span></li>
                     <li class="list-group-item"><strong>Año:</strong> <span>${año}</span></li>
                     <div class="mb-3 mt-3">
                        <ul class="infoPrecios">
                            <li class="mb-3">
                            <h6 class="mb-0">${services[servicio].servicio}</h6>
                            <small><strong>${services[servicio].precio(kilometraje)} CLP</strong> ($0.5 CLP por Kilómetro)</small>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h6>Selecciona una fecha disponible en ${sucursal}</h6>
                        <div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="availableDate" id="availableDate1" value="${(tomorrow.getDate()+1) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}" checked>
                            <label class="form-check-label" for="availableDate1">
                            ${services[servicio].servicio} - <b>${(tomorrow.getDate()+1) + "/" + (tomorrow.getMonth()+1) + "/" + tomorrow.getFullYear()}</b> entre <b>09:00 a 12:00 Hrs</b>.
                            </label>
                        </div>
                    </div>`;       
                    
    $('.infoauto').html(html);
    $('header').show();
    
    return displayInformacion;
};

export default agendaServicio;