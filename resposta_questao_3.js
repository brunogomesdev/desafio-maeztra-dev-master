function validateString(string) {
    let array = string.split("");
    let pattern = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let i = 0; i < array.length; i++) {
      let character = array[i];
      let nextCharacter = array[i + 1];
  
      if (nextCharacter && pattern[character] == nextCharacter) {
        array.splice(i, 2);
        i = -1;
      }
    }
  
    return array;
}
  
function validate(string = "") {
    let sequence = validateString(string);

    if (sequence.length) {
        console.log("Sequência inválida");
    } else {
        console.log("Sequência válida");
    }
}

validate("({[()]})");