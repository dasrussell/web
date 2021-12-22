import autoData from "../library/informacionAuto.js";
import { services } from "../const/services.js";

function infoServicios(){
    let modelo = document.getElementById('modelSelection').value;
    let año = document.getElementById('modelYear').value;
    let kilometraje = parseInt(document.getElementById('modelKm').value);

    autoData.create(modelo, año, kilometraje);
    autoData.mostrarInformacionAuto();

    const div = document.querySelector(".infoServicio");
    let html = `<li class="list-group-item"><strong>Kilometraje:</strong> <span>${kilometraje}</span></li>
                     <li class="list-group-item"><strong>Modelo:</strong> <span>${modelo}</span></li>
                     <li class="list-group-item"><strong>Año:</strong> <span>${año}</span></li>
                     <div class="mb-3 mt-3">
                        <ul class="infoPrecios">
                            ${
                                services.map(option => {
                                    return (`<li class="mb-3">
                                            <h6 class="mb-0">${option.servicio}</h6>
                                            <small><strong>${option.precio(kilometraje)} CLP</strong> ($0.5 CLP por Kilómetro)</small>
                                            </li>`)
                                }).join(" ")
                            }        
                        </ul>
                    </div>`;       
                    
    $('.infoServicio').html(html);

    return displayInformacion;
}

export default infoServicios;