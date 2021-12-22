export const locations = [
    "Zentrum - La Dehesa",
    "Zentrum - Lo Barnechea",
];

let optionList = document.getElementById('locationSelection').options;
locations.forEach(option =>
  optionList.add(
    new Option(option,option)
  )
);