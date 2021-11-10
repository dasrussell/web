const modelos = [
    { marca: "Volkswagen",  modelo: "Golf", ano: "2022" },
    { marca: "Volkswagen",  modelo: "Gol", ano: "2022" },
    { marca: "Volkswagen",  modelo: "Taos", ano: "2022" },
    { marca: "Volkswagen",  modelo: "Jetta", ano: "2022" },
    { marca: "Volkswagen",  modelo: "Tuareg", ano: "2022" },
    { marca: "Volkswagen",  modelo: "Amarok", ano: "2022" }];


                  
for (const modelosVolkswagen of modelos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<p> Marca: ${modelosVolkswagen.marca}</p>
                            <h4>  Modelo: ${modelosVolkswagen.modelo}</h4>
                            <b> Año: ${modelosVolkswagen.ano}</b>
                            <br><br><br>`;
                            
    document.body.appendChild(contenedor);
}