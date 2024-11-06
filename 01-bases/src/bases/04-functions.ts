
/*

function greetPerson ( name:String ) { //por defecto si ts no encuentra que tipo de dato es name
// entonces lo pone como any, para evitar solo basta con definir el tipo de dato    
return `Hola, ${ name }`;
}

Tambien es posible hacer lo de arriba con un arrow function
*/

/*
const greetPerson = (name :string) => {
    return `Hola, ${ name }`
}
Esta arrow function se puede simplificar como:
const greetPerson = (name :string) => `Hola, ${ name }`
*/

/*
const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}

tambien se puede simplificar como:
const getUser = () =>  ({uid: 'ABC-123', username: 'Tony001'})

*/

/*
Si lo quisiera recibir como parametro:
const getUser = (uid: string) => {
    return {
        uid: uid,   ---> se podria poner solo uid, js infiere que es una vble del mismo valor, mejor ponerlo para que el codigo sea mas facil de leer
        username: 'Tony001'
    }
}
console.log( getUser('XYZ-456'));
*/

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super fuerza',
    },
]
const hero = heroes.find(  (h) => h.id === 3);
console.log(hero?.power); //dado que se definicio un arreglo y por ej batman no tiene superpoder,
//en el arrow function se define como undefined, para capturar el error de que vaya a soltar el codigo por ej el nombre de eun undefined
// entonces se usa el ? para decirle que si existe (si esta definido) lo haga
//sino que no haga nada.