export const models = [
    "Golf",
    "Gol",
    "Taos",
    "Jetta",
    "Tuereg",
    "Amarok",
];

let optionList = document.getElementById('modelSelection').options;
models.forEach(option =>
  optionList.add(
    new Option(option,option)
  )
);