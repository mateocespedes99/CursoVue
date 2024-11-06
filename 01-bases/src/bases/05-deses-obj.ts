interface Hero {
    name : string;
    age: number;
    codeName: string;
    power?: string
}
//interface es un concepto propio de ts que me permite decir, no se traduce a js
//pero me permite decir como va a lucir un objeto, en el power por ej 
// que el power es opcional, un objeto puede o no tenerlo


export const person: Hero = {
    name: 'Tony',
    age: 45, 
    codeName: 'Ironman',
}

//La desestructuracion es util para tomar piezas de un objeto
//sin tener que hacer referencia al objeto. por ejemplo necesito imprimir el
//valor de name

//const {age, name, power = 'No tiene poder'} = person;

//interface para crear heroes
interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

//creemos una funcion

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero(person));