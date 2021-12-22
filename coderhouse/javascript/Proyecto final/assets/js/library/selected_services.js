class selectedServices {
    constructor() {
        this.servicio = null;
        this.precio = null;
        this.fecha = null;
    }
    createServices (nombreServicio,precioServicio,fechaServicio) {
        this.servicio = nombreServicio;
        this.precio = precioServicio;
        this.fecha = fechaServicio;
        console.log(nombreServicio,precioServicio,fechaServicio)
    }
    showServices() {
        return {
            name: this.servicio,
            precio: this.precio,
            fecha: this.fecha,
        }
    }
    saveDate(fecha) {
        this.fecha = fecha;
    }
} 


const displayServices = new selectedServices ();
export default displayServices;