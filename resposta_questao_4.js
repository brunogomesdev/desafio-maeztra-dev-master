function getMostIncidentYears(matrix = []) {
    let incidences = countIncidences(matrix);
    let mostIncidentYears = {};
  
    for(year in incidences) {
      let firstProperty = Object.keys(mostIncidentYears)[0];
  
      if(isBigger(mostIncidentYears, incidences[year])) {
        mostIncidentYears = {};
        mostIncidentYears[year] = incidences[year];
      }
      else if(incidences[year] == mostIncidentYears[firstProperty]) {
        mostIncidentYears[year] = incidences[year];
      }
    }
  
    console.log('Anos em que mais pessoas trabalhavam simultaneamente: ', mostIncidentYears)
}
  
// Percorre a matriz e monta um objeto com o número de ocorrências de cada ano
function countIncidences(array = []) {
let finalIncidences = {};

for(let i = 0; i < array.length; i++) {

    for(let j = 0; j < array[i].length; j++) {

    let firstYear = array[i][j];
    let lastYear = array[i][j+1];
    let years = [];

    for(let year = firstYear; year <= lastYear; year++) {

        years.push(year);

    }

    let provisionalIncidences = getIncidences(years);
    finalIncidences = combineObjects(finalIncidences, provisionalIncidences);
    }

}

return finalIncidences;
}

// Retorna um objeto com o número de incidência de cada elemento do array
function getIncidences(array = []) {
let incidences = {};

for(element of array) {
    if(incidences[element]) {
        incidences[element] += 1;
    }
    else {
        incidences[element] = 1;
    }
}

return incidences;
}

function combineObjects(target = {}, source = {}) {
let finalObject = target;

for(key in source) {
    if(finalObject.hasOwnProperty(key)) {
    finalObject[key] += source[key];
    }
    else {
    finalObject[key] = source[key];
    }
}

return finalObject;
}

// Retorna verdadeiro o valor passado é maior que o valor da propriedade do objeto
function isBigger(oldObject = {}, value) {
let firstProperty = Object.keys(oldObject)[0];

return Object.keys(oldObject).length == 0 || value > oldObject[firstProperty]; 
}

getMostIncidentYears([[1997, 2020], [1960, 2000], [1910, 1945]])