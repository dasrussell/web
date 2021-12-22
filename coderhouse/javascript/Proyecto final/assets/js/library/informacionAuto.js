class informacionAuto {
    constructor() {
        this.modeloAuto = null;
        this.anoAuto = null;
        this.kilometrajeAuto = null;   
    }
    mostrarInformacionAuto () {
        let infoIngresada = "Información de su auto ingresada: \n" +
            "Modelo: " + this.modeloAuto +
            "\nAño: " + this.anoAuto +
            "\nKilometraje: " + this.kilometrajeAuto;
        return infoIngresada;
    };
    setModeloAuto (nuevoValor) {
        this.modeloAuto = nuevoValor;
    };
    setYearAuto (nuevoValor) {
        this.anoAuto = nuevoValor;
    };
    setKmAuto (nuevoValor) {
        this.kilometrajeAuto = nuevoValor;
    };
    create (modelo, año, kilometraje) {
        this.modeloAuto = modelo;
        this.anoAuto = año;
        this.kilometrajeAuto = kilometraje;   
    }
    existeInformacionAuto () {
        return this.modeloAuto && this.anoAuto && this.kilometrajeAuto;
    }
} 

const autoData = new informacionAuto ();
export default autoData;