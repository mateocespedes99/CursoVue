const { createApp, ref} = Vue; //desestructuro el bojeto de Vue para solo llamar la 
//función createApp y ref--> se usa para crear la vble reactiva

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>   Comenté este template porque lo puse en el html
    //     <p>Desde app.js</p>
    // `,
    setup(){  //esta funcion se ejecuta tan pronto el componente se monta
        //cuando se trabaja con el composition API que es basicamente este setup se debe
        // hacer un return aseguradose que es lo se debe exponer "mostrar"

        const message = ref("I am batman"); //si envuelvo el mensaje con ref() creo una vble reactiva
        //ahora a esta vble le puedo cambiar el valor
        //cambiemosle el valor y mostremoslo en pantalla despues de 1segundo

        const changeQuote = () => {
            message.value = 'Hola, soy goku'  //si quiero usar esta funcion debo exportarla en el return
        }

        // setTimeout(()=> {        //se comenta con el fin de implementar una función que permita hacer el cambio mediante un bton que esta en el html
        //     message.value = 'Soy goku';
        // }, 1000);

        return {
            message,
            changeQuote,
        }
    }      
})

app.mount('#myApp') //monto la aplicación y uso un selector de id para referenciar