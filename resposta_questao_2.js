function getRepeatedNumbers(array = []) {
    let incidences = getIncidences(array);
    let repeatedNumbers = [];

    for(key in incidences) {
        if(incidences[key] > 1) repeatedNumbers.push(key);
    }

    console.log(repeatedNumbers);
}
  
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

getRepeatedNumbers([1,3,4,9,4,2,2,1])