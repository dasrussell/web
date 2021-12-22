export const services = [
    {
        servicio:"Cambio de aceite",
        precio: (value)=>{
           return 0.5 * value 
        },
    },
    {
        servicio:"Balanceo",
        precio: (value)=>{
           return 79990 
        },
    },
    {
        servicio:"Cambio de aceite + Balanceo",
        precio: (value)=>{
           return ((value * 0.5) + 79990) * 0.80 
        },
    }
];

let optionList = document.getElementById('serviceSelection').options;
services.forEach((option,index) =>
  optionList.add(
    new Option(option.servicio,index)
  )
);