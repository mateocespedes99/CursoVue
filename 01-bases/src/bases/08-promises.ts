
/*
console.log('inicio');



new Promise((resolver, reject)=> {
    //console.log('cuerpo de la promesa');
    setTimeout(()=>{
        //resolver('mi amigo cumplió);

        reject('mi amigo, no cumplió');

    }, 1000);

})
    .then((message)=> console.log( message))
    .catch( errorMessage => console.log( errorMessage))
    .finally( () => console.log('Fin de la promesa'))




console.log('fin');

*/

import { getHeroById } from "./07-imp-exp"
import type { Hero } from "../data/heroes";

//una promesa es util para utilizar de forma asincrona, aunque tambien se 
//puede utilizar de forma sincrona

const getHeroByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            const hero = getHeroById (id );

        hero ? resolve(hero): reject(`Héroe no encontrado #${ id}`)

        
        }, 1500);

    })
};


getHeroByIdAsync(3).then(hero => console.log("el nombre es", hero.name)).catch(alert);