function search(arr, s){
    let matches = [], i, key;
    for( i = arr.length; i--; )
        for( key in arr[i] )
            if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
                matches.push( arr[i] );

    return matches;
};
let items = [
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Golf",
        "Año" : "2022"
      },
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Gol",
        "Año" : "2021"
      },
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Taos",
        "Año" : "2022"
      },
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Jetta",
        "Año" : "2022"
      },
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Tuareg",
        "Año" : "2022"
      },
      {
        "Marca" : "Volkswagen",
        "Modelo" : "Amarok",
        "Año" : "2022"
      }
];

let result = search(items, '22');
console.log(result);