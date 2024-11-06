const character = ['Goku', 'Vegeta','Trunks', 'Goten'];

//const [g, v, t, g2, g3 = 'Yamoshi'] = character; //g3 sería undefined
//console.log({g, v, t, g2, g3});
const[,,t] = character; //desestructuro para acar la posicion que quiera
console.log({t});


//teniendo una funcion que me retorna un array
const returnArray = () => {
    return [123, 'ABC'] as const; //para que se comporte siempre
    //como numeroel primero y como string el segundo
}

const [ numbers, letters ] = returnArray();
console.log(numbers, letters);
console.log(numbers*2, letters.toLowerCase());
