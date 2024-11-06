const numberArray = [1, 2, 3, 4, 5]; //as const si quisiera ponerlo como de solo lectura

numberArray.push(6);
77
const numberArray2 = [...numberArray]; //mismo problema, el codigo muta, agrega 7 desde el arreglo que ya se tiene. poco util
numberArray2.push(7);

//si hacer un array que tiene dos tipos de datos 
//const array = (number/string)[]

console.log({numberArray, numberArray2});

export{}; //tambien se puede exportar asi, como objeto vacio
// lo mismo que decir export const numberArray