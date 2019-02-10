function isOddNumber (a){
  return a % 2 === 1
}

console.log('9を入力したらtrueを変えるべき',isOddNumber(9));

const factorial = function (b){

  let result = 1;
  for(let number = b; number > 0; number = number -1 ){
    result = result * number;
  }

  return result;
}

console.log('4を入力したら24が返るべき', factorial(4));

const convertFirstCharacterToUpperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

console.log('「"hello"」を入力したら「"Hello"」が返るべき',convertFirstCharacterToUpperCase('hello'));
