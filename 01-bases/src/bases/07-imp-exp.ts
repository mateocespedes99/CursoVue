import heroes, { type Owner } from "../data/heroes";



export const getHeroById = ( id: number ) => {
    return heroes.find(hero => hero.id === id) ?? {};
}

console.log(getHeroById(1))


export const getHeroesByOwner = (owner: Owner) => {
    
    return heroes.filter(hero => hero.owner === owner) ?? {} 
}//filter recorre todo el array y retorna un nuevo array con todos los
//elementos que cumplan la condicion dada, si no hay coincidencias
//filter retorna vacio[]

//console.log(getHeroesByOwner('DC'));