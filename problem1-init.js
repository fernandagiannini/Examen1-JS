
const multipleOfThree = (number) => number % 3 === 0


let numberToCheck = 300
let isMultipleOfThree = multipleOfThree(numberToCheck)
console.log(isMultipleOfThree)

/*la funcion multipleOfThree recibe un numero y chequea que sea multiplo de 3. Si es así 
devuelve true, sino devuelve false.
A la variable numberToCheck se asigna el valor a chequear y es el que se pasa por parámetro 
a la función multipleOfThree*/
