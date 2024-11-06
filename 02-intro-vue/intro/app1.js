const {createApp, ref} = Vue; //saco los elementos de vue que necesito

const app = createApp({ //creo el template, despues la vble reactiva
    template:`
        <h1>{{ author }}</h1>
        <p>Desde app1.js</p>
    
    `,
    setup(){
        const author = ref("Soy Bruce Wayne"); //creo la vble reactiva


        setTimeout(()=> {
            author.value = 'Ahora no soy Bruce, ahora soy Goku';
        }, 1000);

        return {
            author,
        }

    }
})

app.mount('#myApp1') //monto la aplicación y uso un selector de id para referenciar