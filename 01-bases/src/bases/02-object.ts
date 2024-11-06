

export const person = { //usamos export para poder usar este objeto persona como un "modulo"
    lastName: "Stark",
    age: 45,
    address: {
        city: "New York",
        zip: 51323,
        lat: 14.23232,
        lng: 34.5667
    }
} //as const; si deseo que el objeto se de solo lectura, es decir no se puedan editar sus propiedades

//es posible cambiar los valores de la persona asi lo haya declarado como const
//lo que no puedo es cambiar el obejto como tal

const person2 = person; // el lenguaje si o si lo interpreta como objeto anidado, es decir lo pasa como objeto de referencia
//dado esto es mejor usar ->structuredClone();

person2.lastName = 'Parker';
person2.address.city = 'LA';

console.log({person});
console.log({person2});