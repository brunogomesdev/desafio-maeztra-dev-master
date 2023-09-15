function isOrdered(number) {
  if(isPositiveAndInteger(number)) {
    if(checkNumberOrdenation(number)) {
      console.log('Valor está ordenado');
    }
    else {
      console.log('Valor não está ordenado');
    }
  }
  else {
    console.error('Insira um número válido!');
  }
}
  
// Retorna se a ordenação está de acordo com as regras estipuladas
function checkNumberOrdenation(number) {
  let splittedNumber = number.toString().split('');
  let rule = '';

  for(let i = 0; i < splittedNumber.length; i++) {
    let integerNum = parseInt(splittedNumber[i]);
    let nextIntegerNum = parseInt(splittedNumber[i + 1]);
    let previousIntegerNum = parseInt(splittedNumber[i - 1]);

    if(!rule) {
      rule = defineRule(integerNum, nextIntegerNum);
    }
    else {
      
      switch(rule) {
        case "growing":
          if(isGrowingWrong(integerNum, previousIntegerNum)) {
            return false;
          }
          break;
        case "decreasing":
          if(isDecreasingWrong(integerNum, previousIntegerNum)) {
            return false;
          }
          break;
      }

    }
  }

  return true;
}

// Retorna a regra da sequência (crescente ou decrescente)
function defineRule(number, next) {
  if(number < next) {
    return 'growing';
  }
  else if(number > next) {
    return 'decreasing'
  }
}

// Retorna se um número é positivo e inteiro
function isPositiveAndInteger(number) {
  return number > 0 && Number.isInteger(number);
}

// Retorna se o número está crescendo da forma correta
function isGrowingWrong(number, previous) {
  return (number - previous) > 1 || (number - previous) < 0;
}

// Retorna se o número está decrescendo da forma correta
function isDecreasingWrong(number, previous) {
  return (previous - number) > 1 || (previous - number) < 0;
}

isOrdered(5678); 