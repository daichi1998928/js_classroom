function isOddNumber (a){
  return a % 2 === 1
}

console.log(isOddNumber(9));

// const factorial = function (b){

//   let i = 1
//   for(let number = b; number > 0; number = number -1){
//     i = i * number

//   }

//   return i


// }


const factorial = function (test){

  let i = 1
  while (test > 0){
    i = i * test
    test = test - 1
  }

  return i

}

function factorial (num){
  if (num > 1){
    return num * factorial(num -1);
  }
  return num;
}

console.log(factorial(4))

const convertFirstCharacterToUpperCase = (text) => {

  return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(convertFirstCharacterToUpperCase('hello'));
